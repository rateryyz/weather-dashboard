import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { CityCardProps } from '../types';

export function CityCard({ name, temp, condition }: CityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl p-6 text-white border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-400" />
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-400 text-sm">{condition}</p>
          </div>
        </div>
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          {temp}
        </span>
      </div>
    </motion.div>
  );
}