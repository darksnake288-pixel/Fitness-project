import React from 'react'
import {FaMoon,FaSun,FaDumbbell} from 'react-icons/fa'
import { motion } from 'framer-motion'
const Navbar = ({darkMode,setDarkMode}) => {
  return (
    <motion.div>
        <motion.header className="bg-white dark:bg-neutral-800 dark:text-white shadow-sm">
            <motion.div className="container mx-auto flex justify-between items-center px-8 py-4">
                {/**Logo Section */}
                    <motion.div className="flex items-center gap-2">
                    <motion.div className="text-orange-400 text-2xl">
                      <FaDumbbell />
                    </motion.div>
                    <motion.h1 className="text-xl font-bold">Fitness Pro</motion.h1>
                    </motion.div>
                {/**Links Section */}
                <motion.nav className="hidden md:flex gap-8 font-medium">
                    <motion.a href="#" className="hover:text-orange-400 text-neutral-500 dark:text-neutral-300" >Home</motion.a>
                    <motion.a href="#" className="hover:text-orange-400 text-neutral-500 dark:text-neutral-300" >Workouts</motion.a>
                    <motion.a href="#" className="hover:text-orange-400 text-neutral-500 dark:text-neutral-300" >Nutrition</motion.a>
                    <motion.a href="#" className="hover:text-orange-400 text-neutral-500 dark:text-neutral-300" >Contact</motion.a>
                </motion.nav>
                {/**theme Section */}
                                <motion.button
                                    type="button"
                                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                    onClick={() => setDarkMode(prev => !prev)}
                                    whileHover={{ rotate: 15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
                                >
                                    {darkMode ? (
                                        <FaSun className="text-yellow-400 text-lg" />
                                    ) : (
                                        <FaMoon className="text-gray-400 text-lg" />
                                    )}
                                </motion.button>
            </motion.div>
        </motion.header>
        
    </motion.div>
  )
}

export default Navbar;