import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Copyright, Download } from 'lucide-react';
import type { APODResponse } from '../types';

interface ImageViewerProps {
  data: APODResponse;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      layout
      className="relative w-full max-w-4xl rounded-xl overflow-hidden bg-black/40 backdrop-blur-md shadow-2xl border border-purple-500/20"
    >
      <motion.div
        layoutId="image-container"
        className={`relative ${isExpanded ? 'fixed inset-0 z-50 bg-black/95' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.img
          src={data.url}
          alt={data.title}
          className={`w-full h-full ${isExpanded ? 'object-contain' : 'object-cover aspect-video'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <a
            href={data.hdurl}
            download
            className="p-2 rounded-full bg-purple-500/50 text-white hover:bg-purple-500/70 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-5 h-5" />
          </a>
          <button
            className="p-2 rounded-full bg-purple-500/50 text-white hover:bg-purple-500/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 space-y-4"
      >
        <div className="flex justify-between items-start gap-4">
          <h2 className="text-2xl font-bold text-white">{data.title}</h2>
          {data.copyright && (
            <div className="flex items-center text-sm text-gray-400">
              <Copyright className="w-4 h-4 mr-1" />
              <span>{data.copyright}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-300 leading-relaxed">{data.explanation}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{new Date(data.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageViewer;