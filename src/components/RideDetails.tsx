
import React from 'react';
// Added missing Star and Users imports from lucide-react
import { ArrowLeft, Phone, MessageSquare, Shield, CheckCircle2, Clock, MapPin, Sparkles, ChevronDown, IndianRupee, Leaf, Star, Users } from 'lucide-react';

interface RideDetailsProps {
  onBack: () => void;
  onRequestJoin: () => void;
}

export const RideDetails: React.FC<RideDetailsProps> = ({ onBack, onRequestJoin }) => {
  return (
    <div className="max-w-xl mx-auto min-h-screen bg-slate-50 pb-24 animate-fadeIn">
      <div className="bg-white px-6 py-6 flex items-center gap-4 sticky top-0 z-30 border-b border-slate-100">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full"><ArrowLeft className="w-5 h-5 text-slate-600" /></button>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Ride Details</h2>
          <p className="text-sm text-slate-400 font-medium">Review before booking</p>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Driver Profile */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/esha/120/120" className="w-16 h-16 rounded-3xl object-cover" />
              <div>
                <h3 className="text-lg font-bold text-slate-800">Esha Tiwari</h3>
                <p className="text-xs text-slate-400 font-medium">127 rides completed</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
               <span className="flex items-center gap-1 text-amber-500 font-black text-sm">★ 4.9</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-purple-50 text-purple-600 py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-purple-100 transition-all"><Phone className="w-4 h-4" /> Call</button>
            <button className="flex-1 bg-teal-50 text-teal-600 py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-teal-100 transition-all"><MessageSquare className="w-4 h-4" /> Message</button>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-green-50/50 p-3 rounded-2xl text-center border border-green-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-green-700">ID Verified</p>
            </div>
            <div className="bg-blue-50/50 p-3 rounded-2xl text-center border border-blue-100">
              <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-blue-700">Phone Verified</p>
            </div>
            <div className="bg-purple-50/50 p-3 rounded-2xl text-center border border-purple-100">
              <Shield className="w-5 h-5 text-purple-500 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-purple-700">Trusted</p>
            </div>
          </div>
        </div>

        {/* AI Analysis */}
        <div className="bg-gradient-to-br from-purple-50 via-white to-teal-50 rounded-[2.5rem] p-8 border border-purple-100/50 space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">AI Compatibility Analysis</h4>
              <p className="text-xs text-purple-600 font-medium">Based on safety, route, and preferences</p>
            </div>
          </div>
          <div className="space-y-2">
             <div className="flex justify-between items-center text-xs font-black">
               <span className="text-slate-500">Overall Match</span>
               <span className="text-purple-600">98%</span>
             </div>
             <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full bg-gradient-to-r from-purple-500 to-teal-400" style={{ width: '98%' }} />
             </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="bg-white/80 backdrop-blur p-3 rounded-2xl text-center border border-white shadow-sm">
              <Shield className="w-4 h-4 text-green-500 mx-auto mb-1" />
              <p className="text-[10px] text-slate-400 font-bold mb-0.5">Safety</p>
              <p className="text-xs font-black text-slate-700">High</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-3 rounded-2xl text-center border border-white shadow-sm">
              <MapPin className="w-4 h-4 text-blue-500 mx-auto mb-1" />
              <p className="text-[10px] text-slate-400 font-bold mb-0.5">Route</p>
              <p className="text-xs font-black text-slate-700">Direct</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-3 rounded-2xl text-center border border-white shadow-sm">
              <Star className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <p className="text-[10px] text-slate-400 font-bold mb-0.5">Rating</p>
              <p className="text-xs font-black text-slate-700">Excellent</p>
            </div>
          </div>
        </div>

        {/* Route Info */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 space-y-6">
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Route Information</h4>
          <div className="aspect-[2/1] bg-teal-50/50 rounded-[2rem] border border-teal-100 relative overflow-hidden p-6 flex items-start justify-start">
             <span className="bg-green-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-green-200">
               <Shield className="w-3.5 h-3.5" /> SAFE ROUTE
             </span>
          </div>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 border border-purple-100">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase">Pickup Location</p>
                <p className="font-bold text-slate-700">Colaba</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-100">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase">Drop-off Location</p>
                <p className="font-bold text-slate-700">Airport Terminal 2</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase">Departure Time</p>
                <p className="font-bold text-slate-700">Today, 3:30 PM</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 border border-amber-100">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase">Available Seats</p>
                <p className="font-bold text-slate-700">2 seats available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact Accordion */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 flex items-center justify-between group cursor-pointer">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
               <Leaf className="w-6 h-6" />
             </div>
             <div>
               <h4 className="text-sm font-bold text-slate-800">Environmental Impact of This Ride</h4>
               <p className="text-xs text-teal-600 font-semibold mt-0.5">See your sustainability contribution</p>
             </div>
           </div>
           <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 space-y-6">
           <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Cost Breakdown</h4>
           <div className="space-y-4">
             <div className="flex justify-between items-center text-sm font-medium text-slate-500">
               <span>Base Fare</span>
               <span className="font-bold text-slate-800">₹12</span>
             </div>
             <div className="flex justify-between items-center text-sm font-medium text-slate-500">
               <span>Platform Fee</span>
               <span className="font-bold text-green-600">₹0</span>
             </div>
             <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
               <span className="text-lg font-black text-slate-800">Total</span>
               <span className="text-xl font-black text-purple-600">₹12</span>
             </div>
             <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3">
                <IndianRupee className="w-4 h-4 text-green-600" />
                <p className="text-xs font-bold text-green-700">You save ₹8 compared to solo ride</p>
             </div>
           </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="fixed bottom-0 inset-x-0 p-6 bg-white border-t border-slate-100 z-40 max-w-xl mx-auto">
        <button 
          onClick={onRequestJoin}
          className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-black py-5 rounded-[2rem] shadow-2xl transition-all active:scale-95 text-lg"
        >
          Request to Join Ride
        </button>
      </div>
    </div>
  );
};
