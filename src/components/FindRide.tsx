
import React from 'react';
import { ArrowLeft, Filter, MapPin, Search, Sparkles, Star, Clock, Users, Shield, CheckCircle2, IndianRupee, ChevronRight } from 'lucide-react';

interface FindRideProps {
  onBack: () => void;
  onSelectRide: () => void;
}

export const FindRide: React.FC<FindRideProps> = ({ onBack, onSelectRide }) => {
  return (
    <div className="max-w-xl mx-auto min-h-screen bg-slate-50 pb-20 animate-fadeIn">
      <div className="bg-white px-6 py-6 flex items-center justify-between sticky top-0 z-30 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full"><ArrowLeft className="w-5 h-5 text-slate-600" /></button>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Find a Ride</h2>
            <p className="text-sm text-slate-400 font-medium">3 rides available</p>
          </div>
        </div>
        <button className="p-2.5 bg-slate-50 text-purple-600 rounded-xl relative">
          <Filter className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full border-2 border-white"></span>
        </button>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Search Inputs */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-3">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 w-5 h-5" />
            <input type="text" placeholder="From: Your location" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm font-medium" />
          </div>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 w-5 h-5" />
            <input type="text" placeholder="To: Where are you going?" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm font-medium" />
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem] p-6 flex gap-4">
          <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-purple-900">AI Recommendation</h4>
            <p className="text-xs text-purple-700/70 font-medium leading-relaxed mt-1">
              Based on your preferences, we found 3 highly compatible rides with 98%+ safety scores.
            </p>
          </div>
        </div>

        {/* Ride Results */}
        <div className="space-y-4">
          <div onClick={onSelectRide} className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-6 hover:border-purple-200 transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://picsum.photos/seed/esha/100/100" className="w-14 h-14 rounded-2xl object-cover" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Esha Tiwari</h4>
                  <p className="text-xs text-slate-400 font-medium">127 rides completed</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-xs font-black">
                <Star className="w-3 h-3 fill-amber-600" /> 4.9
              </div>
            </div>

            <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-bold text-purple-700">AI Compatibility Score</span>
                </div>
                <span className="text-xs font-black text-purple-700">98%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-teal-400" style={{ width: '98%' }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">From</p>
                    <p className="text-sm font-bold text-slate-700">Colaba</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-teal-600 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">To</p>
                    <p className="text-sm font-bold text-slate-700">Airport Terminal 2</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">per person</p>
                <p className="text-2xl font-black text-purple-600">₹12</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-xs"><Clock className="w-4 h-4" /> Today, 3:30 PM</span>
              <span className="flex items-center gap-1.5 text-xs"><Users className="w-4 h-4" /> 2 seats</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-purple-100"><Shield className="w-3 h-3" /> Women-Priority</span>
              <span className="bg-teal-50 text-teal-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-teal-100">Verified Only</span>
              <span className="bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-green-100">High Safety Score</span>
              <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-amber-100"><IndianRupee className="w-3 h-3" /> Save ₹8</span>
            </div>
          </div>
          
          {/* Ravi Card */}
          <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-6 opacity-80">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/ravi/100/100" className="w-14 h-14 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-bold text-slate-800">Ravi Kumar</h4>
                  <p className="text-xs text-slate-400 font-medium">89 rides completed</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-xs font-black">
                <Star className="w-3 h-3 fill-amber-600" /> 4.8
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-bold px-2">
              <span className="text-slate-400">AI Compatibility Score</span>
              <span className="text-purple-600">95%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-teal-400" style={{ width: '95%' }} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex gap-3"><MapPin className="w-4 h-4 text-purple-600 mt-0.5" /><span className="text-sm font-bold text-slate-700">Tech Park</span></div>
                <div className="flex gap-3"><MapPin className="w-4 h-4 text-teal-600 mt-0.5" /><span className="text-sm font-bold text-slate-700">University Campus</span></div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">per person</p>
                <p className="text-2xl font-black text-purple-600">₹8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
