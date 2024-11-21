import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import DateSelector from './components/DateSelector';
import ImageViewer from './components/ImageViewer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { APODResponse } from './types';

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [apodData, setApodData] = useState<APODResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${formattedDate}`
        );
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setApodData(data);
      } catch (err) {
        setError('Failed to load the astronomy picture. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPOD();
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-[#000000] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            Astronomy Picture of the Day
          </h1>
          
          <p className="text-gray-400 text-center max-w-2xl">
            Discover the cosmos! Each day a different image or photograph of our fascinating 
            universe is featured, along with a brief explanation written by a professional astronomer.
          </p>

          <DateSelector
            selectedDate={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
          />

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-red-400 bg-red-900/20 px-4 py-2 rounded-lg">
              {error}
            </div>
          ) : apodData ? (
            <ImageViewer data={apodData} />
          ) : null}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;