'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Animated gradient mesh background
export function GradientMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated blobs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-[var(--marketing-purple)] opacity-30 blur-[120px] animate-blob-float"
        style={{ top: '-10%', left: '-10%' }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-[var(--marketing-teal)] opacity-30 blur-[120px] animate-blob-float-delayed"
        style={{ top: '20%', right: '-10%' }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-[var(--marketing-purple)] opacity-20 blur-[100px] animate-blob-float"
        style={{ bottom: '10%', left: '30%' }}
      />
    </div>
  )
}

// Section wrapper with animation
interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
}

export function AnimatedSection({ children, className = '', dark = true, id }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${dark ? 'bg-[var(--marketing-dark)]' : 'bg-[var(--marketing-light)]'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

// Wave divider component - sits between sections, doesn't affect content flow
export function WaveDivider({ 
  fromColor = 'var(--marketing-dark)', 
  toColor = 'var(--marketing-light)' 
}: { 
  fromColor?: string, 
  toColor?: string,
  flip?: boolean,
  darkToLight?: boolean 
}) {
  return (
    <div 
      className="relative w-full overflow-hidden pointer-events-none"
      style={{ 
        height: '80px',
        background: fromColor
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full"
        style={{ height: '100%' }}
        fill={toColor}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    </div>
  )
}

// Diagonal divider - SVG-based, sits between sections
export function DiagonalDivider({ 
  fromColor = 'var(--marketing-dark)', 
  toColor = 'var(--marketing-light)' 
}: { 
  fromColor?: string, 
  toColor?: string,
  darkToLight?: boolean 
}) {
  return (
    <div 
      className="relative w-full overflow-hidden pointer-events-none"
      style={{ 
        height: '80px',
        background: fromColor
      }}
    >
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full"
        style={{ height: '100%' }}
        fill={toColor}
      >
        <polygon points="0,100 1200,0 1200,100" />
      </svg>
    </div>
  )
}

// Animated counter
interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2, className = '' }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

// Staggered children animation
export function StaggeredContainer({ children, className = '', delay = 0.1 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation
export function TextReveal({ text, className = '', delay = 0 }: { text: string, className?: string, delay?: number }) {
  const words = text.split(' ')
  
  return (
    <motion.span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: delay + i * 0.08,
            ease: 'easeOut'
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Floating badge
export function FloatingBadge({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: 'spring',
        stiffness: 200
      }}
      className={`animate-float-badge ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  )
}

// Marquee component for infinite scrolling
export function Marquee({ children, className = '', speed = 30 }: { children: ReactNode, className?: string, speed?: number }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="flex animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

// Glass card with hover effect
export function GlassCard({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <div className={`glass-card rounded-2xl p-6 transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}
