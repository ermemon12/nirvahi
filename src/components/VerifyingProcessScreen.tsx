import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

interface ProcessProps {
  onNext: () => void;
}

export const VerifyingProcessScreen: React.FC<ProcessProps> = ({ onNext }) => {
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState([false, false, false]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress > 30) setSteps(prev => [true, prev[1], prev[2]]);
    if (progress > 65) setSteps(prev => [prev[0], true, prev[2]]);
    if (progress > 90) setSteps(prev => [prev[0], prev[1], true]);
    if (progress === 100) {
      setTimeout(onNext, 1200);
    }
  }, [progress, onNext]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-lg bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-purple-100 flex flex-col items-center border border-slate-50">
        <div className="w-20 h-20 bg-purple-50 rounded-[2rem] flex items-center justify-center mb-10 relative">
          <div className="absolute inset-0 bg-purple-200 rounded-[2rem] animate-ping opacity-20"></div>
          <Shield className="text-purple-600 w-10 h-10 relative z-10" />
        </div>
        
        <h2 className="text-3xl font-black text-slate-800 mb-2">Securing your profile</h2>
        <p className="text-slate-400 font-medium mb-12">Our AI is validating your credentials</p>

        <div className="w-full mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-600 font-bold">Analysis in progress</span>
            <span className="text-purple-600 font-black text-xl">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
            <div 
              className="h-full bg-gradient-to-r from-teal-400 to-purple-600 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="w-full space-y-6">
          <div className={`flex items-center gap-4 transition-all duration-700 ${steps[0] ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}>
            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
               <CheckCircle2 className="text-green-500 w-5 h-5" />
            </div>
            <span className="text-slate-700 font-bold">ID Legitimacy Verified</span>
          </div>
          <div className={`flex items-center gap-4 transition-all duration-700 delay-100 ${steps[1] ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}>
            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
               <CheckCircle2 className="text-green-500 w-5 h-5" />
            </div>
            <span className="text-slate-700 font-bold">Biometric Authentication Successful</span>
          </div>
          <div className={`flex items-center gap-4 transition-all duration-700 delay-200 ${steps[2] ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}>
            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
               <CheckCircle2 className="text-green-500 w-5 h-5" />
            </div>
            <span className="text-slate-700 font-bold">Community Safety Check Passed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
