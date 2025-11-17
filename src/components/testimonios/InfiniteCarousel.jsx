'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './infiniteCarousel.module.css'

export function InfiniteCarousel({
  children,
  width = '100%',
  speed = 50,
  gap = 24,
  pauseOnHover = true,
  className = '',
}) {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const animationRef = useRef()
  const isInitializedRef = useRef(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Cancelar animación anterior si existe
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    // Reset initialization state
    isInitializedRef.current = false

    let lastTimestamp = 0
    let currentScroll = 0

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp

      // Verificar que el contenedor aún existe
      if (!scrollContainer || !scrollRef.current) {
        return
      }

      const scrollWidth = scrollContainer.scrollWidth
      const clientWidth = scrollContainer.clientWidth

      // Solo animar si hay contenido para desplazar y no está siendo arrastrado
      if (scrollWidth > clientWidth && !isPaused && !isDragging) {
        // Solo actualizar si el usuario no está interactuando
        const currentUserScroll = scrollContainer.scrollLeft
        // Si el scroll del usuario es diferente al nuestro, significa que el usuario está interactuando
        if (Math.abs(currentUserScroll - currentScroll) < 5) {
          currentScroll += (speed * delta) / 1000

          const maxScroll = scrollWidth / 2
          if (maxScroll > 0 && currentScroll >= maxScroll) {
            currentScroll = 0
          }

          scrollContainer.scrollLeft = currentScroll
          isInitializedRef.current = true
        } else {
          // El usuario está interactuando, sincronizar
          currentScroll = currentUserScroll
        }
      } else {
        // Si no hay scroll o está pausado/arrastrando, mantener la posición actual
        currentScroll = scrollContainer.scrollLeft || 0
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Iniciar animación inmediatamente
    animationRef.current = requestAnimationFrame(animate)

    // Usar ResizeObserver para detectar cuando el contenido está listo
    const resizeObserver = new ResizeObserver(() => {
      // Forzar reinicio si el contenido cambia
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        currentScroll = scrollContainer.scrollLeft || 0
      }
    })

    resizeObserver.observe(scrollContainer)

    return () => {
      resizeObserver.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, isPaused, isDragging, children])

  // Event handlers para drag
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDragging || !scrollRef.current) return
      e.preventDefault()
      const x = e.pageX - scrollRef.current.getBoundingClientRect().left
      const walk = (x - startX) * 2
      scrollRef.current.scrollLeft = scrollLeft - walk
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, startX, scrollLeft])

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return
    e.preventDefault()
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.getBoundingClientRect().left)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  const handleTouchStart = (e) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current.getBoundingClientRect().left)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.touches[0].pageX - scrollRef.current.getBoundingClientRect().left
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div style={{ width }} className={`${styles.container} ${className}`}>
      <div
        ref={scrollRef}
        className={`${styles.scrollContainer} ${isDragging ? styles.grabbing : styles.grab}`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          gap: `${gap}px`,
          userSelect: isDragging ? 'none' : 'auto',
          WebkitUserSelect: isDragging ? 'none' : 'auto',
          touchAction: 'pan-x',
        }}
      >
        {/* First set of items */}
        {children.map((child, index) => (
          <div key={`first-${index}`} className={styles.item}>
            {child}
          </div>
        ))}
        {/* Duplicate set for infinite loop */}
        {children.map((child, index) => (
          <div key={`second-${index}`} className={styles.item}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

