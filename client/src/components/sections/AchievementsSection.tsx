import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AchievementsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    concurrency: 0
  })

  const achievements = [
    {
      number: 2,
      suffix: '+',
      label: 'Major Projects',
      emoji: '🚀',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      number: 8000,
      suffix: '+',
      label: 'Concurrent Connections',
      emoji: '📈',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      number: 2,
      suffix: '+',
      label: 'Years Experience',
      emoji: '💼',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          projects: Math.floor(2 * progress),
          experience: Math.floor(8000 * progress),
          concurrency: Math.floor(2 * progress)
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters({
            projects: 2,
            experience: 8000,
            concurrency: 2
          })
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    // Start animation when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('achievements')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              ACHIEVEMENTS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Key Milestones
            </h2>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${achievement.bgColor} rounded-2xl p-8 text-center relative overflow-hidden`}
              >
                {/* Character Illustration */}
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
                    <span className="text-6xl">{achievement.emoji}</span>
                  </div>
                </div>

                {/* Number */}
                <div className={`text-4xl sm:text-5xl font-bold ${achievement.textColor} mb-2`}>
                  {index === 0 ? counters.projects : index === 1 ? counters.experience : counters.concurrency}
                  {achievement.suffix}
                </div>

                {/* Label */}
                <p className="text-gray-700 font-medium text-lg">
                  {achievement.label}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <blockquote className="text-xl text-gray-600 italic max-w-2xl mx-auto">
              "先跑通，再完善，再加速 - Get it working, then refine it, then optimize it."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
