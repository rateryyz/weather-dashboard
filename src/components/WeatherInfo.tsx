import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';
import { WeatherData } from '../types';

interface WeatherInfoProps {
  data: WeatherData;
}

export function WeatherInfo({ data }: WeatherInfoProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 text-white border border-gray-700/50 shadow-xl"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between mb-8"
      >
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {data.location.name}, {data.location.country}
        </h2>
        <Cloud className="w-10 h-10 text-blue-400" />
      </motion.div>
      
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="text-center my-12"
      >
        <span className="text-7xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          {data.current.temp_c}°
        </span>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-300 mt-4"
        >
          {data.current.condition.text}
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        {[
          { icon: Droplets, label: "Humidity", value: `${data.current.humidity}%` },
          { icon: Wind, label: "Wind", value: `${data.current.wind_kph} km/h` },
          { icon: Thermometer, label: "Feels like", value: `${data.current.feelslike_c}°` }
        ].map((item, index) => (
          <motion.div 
            key={item.label}
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="flex items-center justify-between p-4 rounded-2xl bg-gray-800/30 hover:bg-gray-700/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">{item.label}</span>
            </div>
            <span className="font-semibold">{item.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}