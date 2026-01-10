import React, { useState } from 'react';
import { User, Calendar, Briefcase, Car, FileText, Hash, Palette, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface RegistrationProps {
  onNext: () => void;
  onBack: () => void; // new prop to go back to login
}

export const RegistrationScreen: React.FC<RegistrationProps> = ({ onNext, onBack }) => {
  const [isDriver, setIsDriver] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Brand Side */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 p-16 items-center justify-center relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-lg text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center mb-10 border border-white/30 shadow-2xl">
            <ShieldCheck className="text-white w-12 h-12" />
          </div>
          <h1 className="text-5xl font-black mb-6 leading-tight">Tell us more about yourself.</h1>
          <p className="text-lg text-purple-100 font-medium mb-12">
            Complete your profile to unlock verified ride matches and community ratings. Your safety is our priority.
          </p>

          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-2xl flex items-center gap-3 border border-white/10">
              <CheckCircle className="w-5 h-5 text-teal-300" />
              <span className="text-sm font-bold">Identity Protection</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-2xl flex items-center gap-3 border border-white/10">
              <CheckCircle className="w-5 h-5 text-teal-300" />
              <span className="text-sm font-bold">Verified Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 animate-fadeIn">
        <div className="w-full max-w-2xl space-y-10">
          <div>
            <div className="lg:hidden w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-purple-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Create Profile</h2>
            <p className="text-slate-500 font-medium">Join Nirvahi community today.</p>
          </div>

          <div className="space-y-8">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Date of Birth</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                  <input type="date" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Gender</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700 appearance-none">
                  <option value="">Select Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Occupation</label>
                <div className="relative group">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                  <input type="text" placeholder="e.g. Software Engineer" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700" />
                </div>
              </div>
            </div>

            {/* Role Toggle */}
            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800">Become a Driver too</h4>
                <p className="text-xs text-slate-500 font-medium">I want to offer rides to others.</p>
              </div>
              <button 
                onClick={() => setIsDriver(!isDriver)}
                className={`w-14 h-8 rounded-full transition-all relative ${isDriver ? 'bg-purple-600' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 bg-white w-6 h-6 rounded-full transition-all shadow-sm ${isDriver ? 'left-7' : 'left-1'}`} />
              </button>
            </div>

            {/* Conditional Driver Details */}
            {isDriver && (
              <div className="space-y-8 animate-fadeIn">
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Car className="text-purple-600 w-5 h-5" /> Vehicle Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Car Make & Model</label>
                      <div className="relative group">
                        <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                        <input type="text" placeholder="Toyota Camry" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">License Plate</label>
                      <div className="relative group">
                        <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                        <input type="text" placeholder="KA 01 AB 1234" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Car Color</label>
                      <div className="relative group">
                        <Palette className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                        <input type="text" placeholder="Deep Blue" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Driving License Number</label>
                      <div className="relative group">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors w-5 h-5" />
                        <input type="text" placeholder="DL-XXXX-XXXX" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all font-medium text-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <button 
              onClick={onNext}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 mt-8 transition-all shadow-xl shadow-purple-200 active:scale-[0.98]"
            >
              Confirm & Continue <ArrowRight className="w-5 h-5" />
            </button>

            {/* Back to Login Button */}
            <button 
              onClick={onBack}
              className="w-full mt-4 bg-white border border-purple-600 text-purple-600 font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-purple-50 transition-all shadow-sm active:scale-[0.98]"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
