
import React, { useState, useEffect } from 'react';
import { Shield, Clock, MapPin, Phone, MessageSquare, CheckCircle2, Sparkles, Navigation, Send } from 'lucide-react';

interface RideInProgressProps {
  onRideEnd: () => void;
}

export const RideInProgress: React.FC<RideInProgressProps> = ({ onRideEnd }) => {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => Math.min(100, p + 5));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(onRideEnd, 2000);
    }
  }, [progress, onRideEnd]);

  return (
    <div className="max-w-xl mx-auto min-h-screen bg-white animate-fadeIn flex flex-col">
      {/* Map Header Area */}
      <div className="relative h-72 bg-slate-100 overflow-hidden">
         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
         
         {/* Tracking Modal */}
         <div className="absolute top-6 left-6 right-6 bg-white/95 backdrop-blur shadow-2xl rounded-[2.5rem] p-6 border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-black text-slate-800">Ride in Progress</span>
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Safe
              </span>
            </div>
            
            <div className="flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
              <span>Colaba</span>
              <span className="text-teal-600">{progress}% Complete</span>
              <span>Airport</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-5">
               <div className="h-full bg-gradient-to-r from-purple-500 to-teal-400 transition-all duration-1000 ease-out" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-bold">
               <Clock className="w-5 h-5 text-purple-600" />
               <span className="text-sm">ETA: 12 minutes</span>
            </div>
         </div>

         <button className="absolute bottom-6 right-6 w-14 h-14 bg-purple-600 rounded-full shadow-2xl shadow-purple-900/40 flex items-center justify-center text-white active:scale-90 transition-transform">
            <Navigation className="w-7 h-7" />
         </button>
      </div>

      <div className="flex-1 px-6 py-8 space-y-6">
         {/* Driver Info */}
         <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <img src="https://picsum.photos/seed/esha/100/100" className="w-14 h-14 rounded-2xl object-cover" />
               <div>
                  <h4 className="font-black text-slate-800">Esha Tiwari</h4>
                  <p className="text-xs text-teal-600 font-bold flex items-center gap-1.5 mt-0.5"><CheckCircle2 className="w-3.5 h-3.5" /> Verified Driver</p>
               </div>
            </div>
            <div className="flex gap-2">
               <button className="p-3 bg-purple-50 text-purple-600 rounded-2xl hover:bg-purple-100 transition-all"><Phone className="w-5 h-5" /></button>
               <button className="p-3 bg-teal-50 text-teal-600 rounded-2xl hover:bg-teal-100 transition-all"><MessageSquare className="w-5 h-5" /></button>
            </div>
         </div>

         {/* AI Safety Monitor */}
         <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-6">
            <div className="flex items-center gap-3">
               <Sparkles className="w-6 h-6 text-purple-600" />
               <h4 className="text-sm font-black text-slate-800">AI Safety Monitor</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 flex items-start gap-4 animate-slideIn">
                 <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                 <p className="text-xs font-bold text-slate-600 leading-relaxed">Trip started. All systems monitoring.</p>
              </div>
              {progress > 40 && (
                <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 flex items-start gap-4 animate-slideIn">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">Route looks safe. Everything normal.</p>
                </div>
              )}
              {progress > 70 && (
                <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 flex items-start gap-4 animate-slideIn">
                  <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">Slight traffic ahead. ETA adjusted.</p>
                </div>
              )}
            </div>
         </div>

         {/* Co-passengers */}
         <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 space-y-5">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Co-passengers</h4>
            <div className="flex items-center gap-4">
               <img src="https://picsum.photos/seed/anita/100/100" className="w-12 h-12 rounded-full border-2 border-slate-50 object-cover" />
               <div>
                  <h5 className="font-bold text-slate-800">Anita Marshal</h5>
                  <p className="text-[10px] text-teal-600 font-bold flex items-center gap-1 mt-0.5"><CheckCircle2 className="w-3 h-3" /> Verified</p>
               </div>
            </div>
         </div>

         {/* All Safety Features Active */}
         <div className="bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem] p-8 space-y-6">
            <div className="flex items-center gap-3">
               <Shield className="w-6 h-6 text-green-600" />
               <h4 className="text-sm font-black text-green-800">All Safety Features Active</h4>
            </div>
            <div className="grid grid-cols-2 gap-y-4">
               <div className="flex items-center gap-3 text-xs font-bold text-green-700/80"><CheckCircle2 className="w-4 h-4" /> GPS Tracking</div>
               <div className="flex items-center gap-3 text-xs font-bold text-green-700/80"><CheckCircle2 className="w-4 h-4" /> AI Monitoring</div>
               <div className="flex items-center gap-3 text-xs font-bold text-green-700/80"><CheckCircle2 className="w-4 h-4" /> SOS Ready</div>
               <div className="flex items-center gap-3 text-xs font-bold text-green-700/80"><CheckCircle2 className="w-4 h-4" /> 2 Contacts Notified</div>
            </div>
         </div>
      </div>
    </div>
  );
};
