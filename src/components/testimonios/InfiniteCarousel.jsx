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

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let lastTimestamp = 0
    let currentScroll = 0

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp

      if (!isPaused && !isDragging) {
        currentScroll += (speed * delta) / 1000

        const maxScroll = scrollContainer.scrollWidth / 2
        if (currentScroll >= maxScroll) {
          currentScroll = 0
        }

        scrollContainer.scrollLeft = currentScroll
      } else {
        currentScroll = scrollContainer.scrollLeft
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, isPaused, isDragging])

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
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
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
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
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          gap: `${gap}px`,
          userSelect: isDragging ? 'none' : 'auto',
          WebkitUserSelect: isDragging ? 'none' : 'auto',
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

