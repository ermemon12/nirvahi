
import React, { useState } from 'react';
import { ArrowLeft, Star, Heart, Clock, Sparkles, Leaf, Shield, CheckCircle2, IndianRupee } from 'lucide-react';

interface RateRideProps {
  onBack: () => void;
  onSubmit: () => void;
}

export const RateRide: React.FC<RateRideProps> = ({ onBack, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comfort, setComfort] = useState(3);
  const [punctuality, setPunctuality] = useState(3);

  return (
    <div className="max-w-xl mx-auto min-h-screen bg-slate-50 pb-20 animate-fadeIn">
      <div className="bg-white px-6 py-6 border-b border-slate-100 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold text-slate-800">Rate Your Ride</h2>
        <p className="text-sm text-slate-400 font-medium">Help us maintain a safe community</p>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Ride Profile */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex items-center gap-4">
           <img src="https://picsum.photos/seed/esha/100/100" className="w-14 h-14 rounded-2xl object-cover" />
           <div>
              <h4 className="font-black text-slate-800">Esha Tiwari</h4>
              <p className="text-xs text-slate-400 font-medium mt-0.5">Colaba → Airport Terminal 2</p>
           </div>
        </div>

        {/* Safety Rating */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-6 text-center">
           <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-1">
               <Shield className="w-5 h-5" />
             </div>
             <h4 className="text-sm font-black text-slate-800">Safety Rating</h4>
             <p className="text-xs text-slate-400 font-medium">How safe did you feel during the ride?</p>
           </div>
           <div className="flex justify-center gap-3">
              {[1, 2, 3, 4, 5].map(s => (
                <button key={s} onClick={() => setRating(s)} className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${rating >= s ? 'bg-amber-100 text-amber-500' : 'bg-slate-50 text-slate-300'}`}>
                  <Star className={`w-6 h-6 ${rating >= s ? 'fill-amber-500' : ''}`} />
                </button>
              ))}
           </div>
        </div>

        {/* Sliders */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-8">
           <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                 <h4 className="text-sm font-black text-slate-800 uppercase">Comfort Level</h4>
                 <span className="text-xs font-black text-purple-600">{comfort}/5</span>
              </div>
              <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase px-1">
                 <span>Uncomfortable</span>
                 <span>Very Comfortable</span>
              </div>
              <input type="range" min="1" max="5" value={comfort} onChange={e => setComfort(parseInt(e.target.value))} className="w-full h-2 bg-slate-100 rounded-full appearance-none accent-purple-600 cursor-pointer" />
           </div>

           <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                 <h4 className="text-sm font-black text-slate-800 uppercase">Punctuality</h4>
                 <span className="text-xs font-black text-teal-600">{punctuality}/5</span>
              </div>
              <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase px-1">
                 <span>Very Late</span>
                 <span>Right on Time</span>
              </div>
              <input type="range" min="1" max="5" value={punctuality} onChange={e => setPunctuality(parseInt(e.target.value))} className="w-full h-2 bg-slate-100 rounded-full appearance-none accent-teal-600 cursor-pointer" />
           </div>
        </div>

        {/* Quick Feedback */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-6">
           <h4 className="text-sm font-black text-slate-800 uppercase">What did you like?</h4>
           <div className="flex flex-wrap gap-2">
              {['Friendly', 'Clean Car', 'Safe Driver', 'On Time', 'Good Music', 'Quiet Ride'].map(tag => (
                <button key={tag} className="px-4 py-2 bg-slate-50 hover:bg-purple-50 hover:text-purple-600 border border-slate-100 hover:border-purple-200 rounded-full text-xs font-bold text-slate-500 transition-all flex items-center gap-2">
                   {tag === 'Friendly' && <Heart className="w-3.5 h-3.5" />}
                   {tag === 'Clean Car' && <Sparkles className="w-3.5 h-3.5" />}
                   {tag === 'Safe Driver' && <Shield className="w-3.5 h-3.5" />}
                   {tag === 'On Time' && <Clock className="w-3.5 h-3.5" />}
                   {tag}
                </button>
              ))}
           </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-green-50/50 border border-green-100 rounded-[2.5rem] p-8 space-y-8">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
               <Leaf className="w-6 h-6" />
             </div>
             <div>
               <h4 className="text-sm font-black text-slate-800">Your Environmental Impact</h4>
               <p className="text-xs text-teal-600 font-bold">This ride made a difference!</p>
             </div>
           </div>
           
           <div className="space-y-4">
              <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-black text-slate-400">
                    <span>Private Travel</span>
                    <span className="text-red-500">4.6 kg CO₂</span>
                 </div>
                 <div className="w-full h-8 bg-red-100 rounded-xl relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-red-500 opacity-80"></div>
                    <span className="relative text-white text-[10px] font-black uppercase">✕ Higher emissions</span>
                 </div>
              </div>
              <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-black text-slate-400">
                    <span>Carpool Travel</span>
                    <span className="text-teal-600">1.5 kg CO₂</span>
                 </div>
                 <div className="w-full h-8 bg-emerald-100 rounded-xl relative flex items-center overflow-hidden">
                    <div className="h-full bg-emerald-500 opacity-80" style={{ width: '32%' }}></div>
                    <span className="absolute left-4 text-white text-[10px] font-black uppercase">Lower emissions</span>
                 </div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-green-100 text-center space-y-1">
                 <p className="text-sm font-black text-slate-700">CO₂ saved on this ride: <span className="text-green-600">3.1 kg</span></p>
                 <div className="flex justify-center gap-6 pt-2">
                    <div className="text-center">
                       <p className="text-[10px] text-slate-400 font-black uppercase">Equivalent to planting:</p>
                       <p className="text-xs font-black text-slate-700">0.15 trees per year</p>
                    </div>
                 </div>
              </div>
              <p className="text-center text-[10px] text-slate-400 font-bold leading-relaxed px-4 italic">
                Shared routes reduce congestion and pollution. Your choice supports safer & greener cities.
              </p>
           </div>
        </div>

        {/* AI Learning Note */}
        <div className="bg-purple-50/50 border border-purple-100 rounded-[2rem] p-6 flex gap-4">
          <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0" />
          <div>
            <h4 className="text-xs font-black text-purple-900 uppercase tracking-widest">AI Learning Note</h4>
            <p className="text-[10px] text-purple-700/70 font-medium leading-relaxed mt-1">
              Your feedback improves future matches by helping our AI understand your preferences and safety standards better.
            </p>
          </div>
        </div>

        <button onClick={onSubmit} className="w-full bg-slate-900/10 text-slate-400 font-black py-5 rounded-[2rem] transition-all cursor-not-allowed uppercase tracking-widest text-sm">
           Submit Feedback
        </button>
        <p className="text-center text-[10px] text-slate-400 font-bold">Please provide a safety rating to continue</p>
      </div>
    </div>
  );
};
