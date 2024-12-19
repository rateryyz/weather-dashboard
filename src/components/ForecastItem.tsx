import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain } from 'lucide-react';
import { ForecastItemProps } from '../types';

export function ForecastItem({ temp, day, isToday }: ForecastItemProps) {
  const WeatherIcon = isToday ? Sun : temp > 20 ? Cloud : CloudRain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`bg-gradient-to-br ${
        isToday ? 'from-blue-500/20 to-purple-500/20' : 'from-gray-800/60 to-gray-900/60'
      } backdrop-blur-lg rounded-2xl p-6 text-white border border-gray-700/50 shadow-lg`}
    >
      <div className="text-center">
        <p className={`${isToday ? 'text-blue-300' : 'text-gray-400'} mb-4 font-medium`}>
          {day}
        </p>
        <WeatherIcon className={`w-10 h-10 mx-auto mb-4 ${
          isToday ? 'text-yellow-400' : 'text-blue-400'
        }`} />
        <motion.span 
          whileHover={{ scale: 1.1 }}
          className={`text-2xl font-bold ${
            isToday ? 'bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent' : ''
          }`}
        >
          {temp}°
        </motion.span>
      </div>
    </motion.div>
  );
}