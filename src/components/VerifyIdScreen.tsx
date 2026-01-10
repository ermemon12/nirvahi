import React from 'react';
import { Camera, Globe } from 'lucide-react';

interface VerifyProps {
  onNext: () => void;
}

export const VerifyIdScreen: React.FC<VerifyProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 p-8 md:p-16 flex flex-col items-center text-center animate-slideIn">
        <div className="w-20 h-20 bg-teal-50 rounded-[2rem] flex items-center justify-center mb-8">
          <Camera className="text-teal-500 w-10 h-10" />
        </div>
        
        <h2 className="text-4xl font-black text-slate-800 mb-4">Trust Begins with Verification</h2>
        <p className="text-slate-500 max-w-lg mb-12 text-lg font-medium leading-relaxed">To ensure the safety of our female-first community, we require identity verification for all new members.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="group border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 flex flex-col items-center hover:border-teal-500 hover:bg-teal-50/30 transition-all cursor-pointer">
            <div className="p-4 bg-slate-50 rounded-2xl mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Government ID</h3>
            <p className="text-sm text-slate-400 font-medium">Driver's License or Passport</p>
          </div>

          <div className="group border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 flex flex-col items-center hover:border-purple-500 hover:bg-purple-50/30 transition-all cursor-pointer">
            <div className="p-4 bg-slate-50 rounded-2xl mb-5 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-sm">
              <Camera className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Live Selfie</h3>
            <p className="text-sm text-slate-400 font-medium">Face match verification</p>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md">
          <button 
            onClick={onNext}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 mt-8 transition-all shadow-xl shadow-purple-200 active:scale-[0.98]"
          >
            Start Verification Process
          </button>

        </div>
      </div>
    </div>
  );
};