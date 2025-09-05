import { useEffect, useState } from "react";
import { Snowflake } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 z-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative text-center text-white">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-pulse">
            <Snowflake className="h-20 w-20 mx-auto text-white/30" />
          </div>
          <Snowflake className="h-20 w-20 mx-auto animate-spin text-white" />
        </div>

        {/* Company Name */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide">
            Khandelwal Distributors
          </h1>
          <p className="text-white/90 text-lg font-medium">
            Premium HVAC Solutions
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-sm mt-2 font-medium">
            Loading... {Math.round(progress)}%
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -right-20 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default LoadingScreen;