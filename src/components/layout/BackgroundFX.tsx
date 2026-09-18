import { motion, useReducedMotion } from 'framer-motion'

const blobs = [
  { color: 'bg-yellow', className: '-left-24 -top-24 h-80 w-80', duration: 22 },
  { color: 'bg-pink', className: '-right-20 top-10 h-72 w-72', duration: 26 },
  { color: 'bg-cyan', className: 'bottom-10 -left-16 h-72 w-72', duration: 24 },
  { color: 'bg-lime', className: '-right-24 -bottom-20 h-96 w-96', duration: 28 },
] as const

export function BackgroundFX() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-25 blur-3xl ${blob.color} ${blob.className}`}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -20, 25, 0],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
