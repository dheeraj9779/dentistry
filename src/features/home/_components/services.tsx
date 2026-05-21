"use client";

import React, { useState } from 'react';
import { services } from "@/mock_data/data";
import Image from 'next/image';
import { motion } from 'motion/react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-4" id="services">
    <div className="bg-white">
      <div className='relative py-16 overflow-hidden'>
        <div className='marquee'>
          <div className='marquee__track text-slate-800'>
            <span className='text-7xl md:text-8xl font-bold uppercase tracking-widest'>Our Premium Services</span>
            <span className='text-7xl md:text-8xl font-bold uppercase tracking-widest'>Our Premium Services</span>
            <span className='text-7xl md:text-8xl font-bold uppercase tracking-widest'>Our Premium Services</span>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 md:px-8 pb-16'>
        {services.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={item.id ?? index}
              layout
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className='group border-b border-slate-200 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between last:border-b-0 transition-all duration-300'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='flex-1 min-w-0'>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className='block font-semibold text-3xl md:text-4xl text-slate-900 mb-3'
                >
                  {item.service_name}
                </motion.span>
                {isHovered && (
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeIn' }}
                    className='text-base text-slate-600 leading-relaxed max-w-2xl'
                  >
                    {item.description}
                  </motion.p>
                )}
                <div className='mt-4 flex items-center gap-4'>
                  <span className='px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium'>
                    {item.category}
                  </span>
                  <span className='text-slate-500 text-sm'>
                    {item.duration_minutes} mins
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ transformOrigin: 'center' }}
                className='relative min-w-[200px] h-[180px] overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-50 shadow-lg group-hover:shadow-xl'
              >
                <Image 
                  src={item?.image} 
                  alt={item.service_name} 
                  fill
                  className='object-cover'
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default Services;
