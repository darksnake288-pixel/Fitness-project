import React from 'react'
import { motion } from 'framer-motion'
import fitnessImg from '../assets/fitness.png'

const Hero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-neutral-800 dark:text-white">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-12 px-8 md:px-20 min-h-[80vh] gap-10">
            {/**left Section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg text-center lg:text-left"
            >
                <motion.p className="text-sm uppercase font-semibold tracking-wide text-neutral-500 dark:text-neutral-300">Work Smarter, Achieve More</motion.p>
                <motion.h1 className="text-5xl font-bold leading-tight mt-4 ">Simple Fitness experience for everyone</motion.h1>
                <motion.p className="mt-6 text-gray-600 dark:text-gray-300 text-sm">
                    Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition shadow-lg"
                    >
                        Get Started
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-orange-400 text-orange-400 rounded-md hover:bg-orange-400 hover:text-white transition"
                    >
                        Learn More
                    </motion.button>
                </div>
            </motion.div>
            {/**right Section */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mt-12 lg:mt-0 w-full flex justify-center lg:justify-end"
            >
                <motion.img 
                    src={fitnessImg} 
                    className="w-full max-w-md lg:max-w-xl drop-shadow-2xl" 
                    alt="A person lifting dumbbells" 
                />
            </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero
