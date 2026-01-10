
import React from 'react';
import { ArrowLeft, Phone, MessageSquare, Shield, CheckCircle2, Clock, MapPin, Sparkles, ChevronDown, Leaf, Star, Users, ArrowRight } from 'lucide-react';
import { Ride } from '../types';

interface RideDetailsProps {
  ride: Ride;
  onBack: () => void;
  onRequestJoin: () => void;
}

export const RideDetails: React.FC<RideDetailsProps> = ({ ride, onBack, onRequestJoin }) => {
  return (
    <div className="max-w-xl mx-auto min-h-screen bg-[#FDFCFE] pb-40 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md px-6 py-6 flex items-center gap-4 sticky top-0 z-30 border-b border-purple-100 shadow-sm">
        <button 
          onClick={onBack} 
          className="p-3 hover:bg-purple-50 rounded-2xl transition-all active:scale-90 bg-white shadow-sm border border-slate-100"
        >
          <ArrowLeft className="w-5 h-5 text-purple-600" />
        </button>
        <div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight">Review Trip</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Commute ID: #{ride.id.slice(-6).toUpperCase()}</p>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        {/* Driver Profile Section */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-purple-100/30 border border-purple-50 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/50 rounded-bl-[80px] -z-0 opacity-40"></div>
          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center gap-5">
              <div className="relative">
                <img 
                  src={ride.driver?.avatar || "https://picsum.photos/seed/user/120/120"} 
                  className="w-24 h-24 rounded-[2.5rem] object-cover ring-8 ring-purple-50 shadow-2xl" 
                />
                <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1.5 rounded-xl shadow-xl border border-purple-50 flex items-center gap-1.5">
                   <Star size={14} className="text-amber-500" fill="currentColor" />
                   <span className="text-sm font-black text-slate-800">{ride.driver?.rating?.toFixed(1)}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight">{ride.driver?.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-2.5 py-1 rounded-full border border-emerald-100 tracking-widest uppercase">Verified Captain</span>
                </div>
                <p className="text-sm font-black text-purple-600 mt-3 font-mono tracking-tighter opacity-80">{ride.driver?.phone}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 relative z-10">
            <button className="flex-1 bg-purple-50 text-purple-600 py-4 rounded-3xl flex items-center justify-center gap-2 font-black text-sm hover:bg-purple-100 transition-all active:scale-95 shadow-sm">
              <Phone className="w-4 h-4" /> Call Captain
            </button>
            <button className="flex-1 bg-indigo-50 text-indigo-600 py-4 rounded-3xl flex items-center justify-center gap-2 font-black text-sm hover:bg-indigo-100 transition-all active:scale-95 shadow-sm">
              <MessageSquare className="w-4 h-4" /> Live Chat
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 relative z-10">
            <VerifyBadge icon={<CheckCircle2 size={20} className="text-emerald-500" />} label="Identity" />
            <VerifyBadge icon={<CheckCircle2 size={20} className="text-blue-500" />} label="KYC Info" />
            <VerifyBadge icon={<Shield size={20} className="text-purple-500" />} label="Premium" />
          </div>
        </div>

        {/* AI Match Analysis */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[3rem] p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                <Sparkles className="w-7 h-7 text-purple-300 animate-pulse" />
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight">AI Compatibility Analysis</h4>
                <p className="text-[10px] text-purple-300 font-bold uppercase tracking-[0.2em] mt-0.5">Community Match Strength</p>
              </div>
            </div>
            <div className="space-y-4 pt-2">
               <div className="flex justify-between items-end">
                 <p className="text-3xl font-black tracking-tighter">98%<span className="text-sm text-purple-200 font-medium tracking-normal ml-2">Perfect Match</span></p>
                 <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">High Safety Score</span>
               </div>
               <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden p-1 border border-white/5">
                 <div className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-white rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" style={{ width: '98%' }} />
               </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
               <MatchPoint label="Safety" val="Secure" />
               <MatchPoint label="Route" val="Direct" />
               <MatchPoint label="Cost" val="Optimized" />
            </div>
          </div>
        </div>

        {/* Route Details */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-purple-100/30 border border-purple-50 space-y-8">
          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Detailed Itinerary</h4>
          <div className="relative space-y-10">
            <RouteRow icon={<MapPin size={20} className="text-purple-600" />} label="Pickup Point" val={ride.from} sub="Verify at gate" color="bg-purple-50" />
            <RouteRow icon={<MapPin size={20} className="text-teal-600" />} label="Destination" val={ride.to} sub="Business District" color="bg-teal-50" />
            <div className="grid grid-cols-2 gap-8">
              <RouteRow icon={<Clock size={20} className="text-blue-600" />} label="Departure" val={ride.time.split('•')[1] || ride.time} sub="Prompt start" color="bg-blue-50" />
              <RouteRow icon={<Users size={20} className="text-amber-600" />} label="Occupancy" val={`${ride.passengers} Seats`} sub="Available" color="bg-amber-50" />
            </div>
          </div>
        </div>

        {/* Contribution Breakdown */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-purple-100/30 border border-purple-50 space-y-6">
           <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Contribution Summary</h4>
           <div className="space-y-4">
             <div className="flex justify-between items-center text-sm font-bold text-slate-600">
               <span className="flex items-center gap-2">Fuel Contribution</span>
               <span className="text-slate-900">₹{ride.price}</span>
             </div>
             <div className="flex justify-between items-center text-sm font-bold text-slate-600">
               <span className="flex items-center gap-2">Platform Maintenance</span>
               <span className="text-emerald-600 font-black uppercase tracking-widest text-[9px] bg-emerald-50 px-2 py-1 rounded-md">Free</span>
             </div>
             <div className="pt-6 border-t border-purple-50 flex justify-between items-center">
               <span className="text-xl font-black text-slate-900 tracking-tight">Total Payment</span>
               <span className="text-4xl font-black text-purple-600 tracking-tighter">₹{ride.price}</span>
             </div>
             <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center gap-4 mt-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                   <Leaf size={20} className="text-emerald-500" />
                </div>
                <div>
                   <p className="text-xs font-black text-emerald-800 uppercase tracking-widest leading-none mb-1">Eco-Impact</p>
                   <p className="text-[10px] text-emerald-600 font-bold">This ride saves ~2.8kg of Carbon emissions</p>
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 inset-x-0 p-6 bg-white/80 backdrop-blur-2xl border-t border-purple-100 z-[60] max-w-xl mx-auto rounded-t-[3.5rem] shadow-[0_-20px_60px_rgba(124,58,237,0.15)]">
        <button 
          onClick={onRequestJoin}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-black py-5 rounded-[2.25rem] shadow-2xl shadow-purple-200 transition-all active:scale-95 text-xl tracking-tight flex items-center justify-center gap-3"
        >
          Book Ride Spot <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

const VerifyBadge: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl text-center shadow-sm">
    <div className="flex justify-center mb-1.5">{icon}</div>
    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
  </div>
);

const MatchPoint: React.FC<{ label: string; val: string }> = ({ label, val }) => (
  <div className="text-center">
    <p className="text-[9px] text-purple-300 font-bold uppercase tracking-[0.2em] mb-1">{label}</p>
    <p className="text-xs font-black text-white">{val}</p>
  </div>
);

const RouteRow: React.FC<{ icon: React.ReactNode; label: string; val: string; sub: string; color: string }> = ({ icon, label, val, sub, color }) => (
  <div className="flex gap-5 items-start group">
    <div className={`w-14 h-14 ${color} rounded-3xl flex items-center justify-center flex-shrink-0 border border-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
      {icon}
    </div>
    <div className="pt-1.5">
      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] leading-none mb-1.5">{label}</p>
      <p className="text-lg font-black text-slate-900 tracking-tight leading-none mb-1">{val}</p>
      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{sub}</p>
    </div>
  </div>
);

const IndianRupee: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" />
  </svg>
);
