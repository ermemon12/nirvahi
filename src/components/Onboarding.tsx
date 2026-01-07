
import React, { useState, useEffect } from 'react';
import { Shield, Smartphone, Mail, ArrowRight, Camera, CheckCircle2, Globe, Lock } from 'lucide-react';
import { AppState } from '../types';

interface LoginProps {
  onNext: () => void;
}

export const LoginScreen: React.FC<LoginProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Visual Brand Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 p-16 items-center justify-center relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-lg text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center mb-10 border border-white/30 shadow-2xl">
            <Shield className="text-white w-12 h-12" />
          </div>
          <h1 className="text-6xl font-black mb-6 leading-tight">Secure commuting for a better city.</h1>
          <p className="text-xl text-purple-100 font-medium mb-12 leading-relaxed">Join NIRVAHI, the world's most trusted community-led ride sharing platform. Secure, sustainable, and reliable.</p>
          
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-2xl flex items-center gap-3 border border-white/10">
               <Globe className="w-5 h-5 text-teal-300" />
               <span className="text-sm font-bold">100+ Cities</span>
             </div>
             <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-2xl flex items-center gap-3 border border-white/10">
               <Lock className="w-5 h-5 text-purple-300" />
               <span className="text-sm font-bold">Identity Verified</span>
             </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 animate-fadeIn">
        <div className="w-full max-w-md space-y-10">
          <div>
            <div className="lg:hidden w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-purple-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Sign in to Nirvahi</h2>
            <p className="text-slate-500 font-medium">Ready to start your journey? Let's get you in.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
              <div className="relative group">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-2xl py-4.5 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-2xl py-4.5 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <button 
              onClick={onNext}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 mt-8 transition-all shadow-xl shadow-purple-200 active:scale-[0.98]"
            >
              Continue Securely <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="pt-6 border-t border-slate-100">
               <p className="text-xs text-center text-slate-400 leading-relaxed font-medium">
                By continuing, you agree to our <span className="text-slate-600 underline cursor-pointer hover:text-purple-600">Terms of Service</span> & <span className="text-slate-600 underline cursor-pointer hover:text-purple-600">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VerifyIdScreen: React.FC<LoginProps> = ({ onNext }) => {
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
            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-[2rem] shadow-xl transition-all active:scale-[0.98]"
          >
            Start Verification Process
          </button>
          <button className="mt-4 text-sm font-bold text-slate-400 hover:text-slate-600">Skip for now (Limited Access)</button>
        </div>
      </div>
    </div>
  );
};

export const VerifyingProcessScreen: React.FC<LoginProps> = ({ onNext }) => {
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
