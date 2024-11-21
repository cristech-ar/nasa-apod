import React from 'react';
import DatePicker from 'react-datepicker';
import { Calendar } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';

interface DateSelectorProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onChange }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex items-center"
    >
      <Calendar className="absolute left-3 w-5 h-5 text-gray-400" />
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        maxDate={new Date()}
        minDate={new Date('1995-06-16')}
        dateFormat="MMMM d, yyyy"
        className="pl-10 pr-4 py-2 border border-purple-500/30 rounded-lg shadow-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-black/50 backdrop-blur-sm text-white placeholder-gray-400 w-48"
      />
    </motion.div>
  );
};

export default DateSelector;