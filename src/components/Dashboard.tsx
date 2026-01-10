
import React, { useEffect, useState, useCallback } from 'react';
import { 
  Bell, Plus, Search, Leaf, Car, MapPin, 
  Clock, Users, Shield, ArrowRight, Star,
  CheckCircle2, Navigation, TrendingUp, Zap
} from 'lucide-react';
import { Ride } from '../types';

interface DashboardProps {
  onCreateRide: () => void;
  onFindRide: () => void;
  onRideSelect?: (ride: Ride) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onCreateRide, onFindRide, onRideSelect }) => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchRides = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/rides');
      if (!res.ok) throw new Error('API down');
      const data = await res.json();
      const formattedRides = data.map((ride: any) => ({
        id: ride._id,
        from: ride.from,
        to: ride.to,
        time: `${ride.date} • ${ride.time}`,
        passengers: ride.availableSeats,
        status: ride.status === 'ACTIVE' ? 'Confirmed' : 'Pending',
        avatars: Array(Math.min(ride.availableSeats, 4)).fill(0).map((_, i) => `https://picsum.photos/seed/user-${i}/40/40`),
        womenOnly: ride.womenOnly,
        price: ride.price || Math.floor(Math.random() * 200) + 50,
        driver: {
          name: ride.driverName || 'Verified Member',
          rating: 4.2 + Math.random() * 0.8,
          avatar: `https://picsum.photos/seed/${ride._id}/100/100`,
          phone: ride.phone || (Math.random() * 1000000000000).toFixed(0).slice(-10)
        }
      }));
      setRides(formattedRides);
    } catch (error) {
      setRides([
        {
          id: '1',
          from: 'bandra',
          to: 'powai',
          time: '2026-01-09 • 12:03',
          passengers: 2,
          status: 'Confirmed',
          avatars: ['https://picsum.photos/seed/1/40/40', 'https://picsum.photos/seed/2/40/40'],
          womenOnly: true,
          price: 249,
          driver: { name: 'Verified Member', rating: 4.6, avatar: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=150', phone: '5942883702' }
        },
        {
          id: '2',
          from: 'Andheri West',
          to: 'BKC, Mumbai',
          time: '2026-01-09 • 18:30',
          passengers: 3,
          status: 'Confirmed',
          avatars: ['https://picsum.photos/seed/3/40/40'],
          womenOnly: true,
          price: 180,
          driver: { name: 'Priya Verma', rating: 4.7, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150', phone: '9930054321' }
        },
        {
          id: '3',
          from: 'Goregaon East',
          to: 'South Mumbai',
          time: '2026-01-10 • 09:00',
          passengers: 2,
          status: 'Confirmed',
          avatars: ['https://picsum.photos/seed/4/40/40', 'https://picsum.photos/seed/5/40/40'],
          womenOnly: false,
          price: 155,
          driver: { name: 'Rahul Khanna', rating: 4.5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', phone: '9819987654' }
        }
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRides();
  }, [fetchRides]);

  return (
    <div className="min-h-screen bg-[#FDFCFE] relative pb-32 overflow-x-hidden selection:bg-purple-200">
      {/* --- ADVANCED ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400%] h-64 bg-[url('https://www.svgrepo.com/show/404494/city.svg')] bg-repeat-x opacity-[0.04] animate-city-scroll"></div>
        <div className="absolute top-[15%] left-[-5%] w-32 h-32 opacity-10 blur-xl bg-purple-200 rounded-full animate-float"></div>
        <div className="absolute top-[40%] right-[-10%] w-64 h-64 opacity-10 blur-3xl bg-indigo-100 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-24 left-[-100px] animate-car-drive">
          <Car className="text-purple-200/20 w-12 h-12" />
        </div>
      </div>

      {/* --- PREMIUM NAVBAR --- */}
      <nav className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-purple-100 py-3 shadow-md' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200 group-hover:rotate-6 transition-all">
              <Car className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">NIRVAHI</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative p-2 text-slate-400 hover:text-purple-600 transition-colors bg-white rounded-xl shadow-sm border border-slate-100 cursor-pointer">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-pink-500 rounded-full border border-white"></span>
            </div>
            <img src="https://picsum.photos/seed/priya/100/100" className="w-10 h-10 rounded-2xl border-2 border-white shadow-lg ring-4 ring-purple-50" alt="Profile" />
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-xl mx-auto px-6 pt-24 space-y-12">
        <header className="space-y-8 py-4">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-purple-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-purple-600">
              <Navigation size={12} fill="currentColor" className="animate-pulse" /> Commute Better
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Welcome back,<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Priya Sharma</span>
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={onFindRide}
              className="group relative bg-white p-7 rounded-[2.5rem] flex flex-col items-center gap-4 shadow-xl shadow-slate-200/40 border border-slate-100 transition-all hover:border-purple-600 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.97]"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-purple-50 group-hover:text-purple-600 transition-all shadow-inner">
                <Search size={28} />
              </div>
              <div className="text-center">
                <p className="font-black text-slate-900 tracking-tight text-lg">Find Ride</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Explore Routes</p>
              </div>
            </button>

            <button 
              onClick={onCreateRide}
              className="group relative bg-gradient-to-br from-purple-600 to-indigo-700 p-7 rounded-[2.5rem] flex flex-col items-center gap-4 shadow-2xl shadow-purple-200/60 border border-purple-500 transition-all hover:shadow-purple-300 hover:-translate-y-1 active:scale-[0.97]"
            >
              <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-white transition-all">
                <Plus size={28} />
              </div>
              <div className="text-center">
                <p className="font-black text-white tracking-tight text-lg">Post Trip</p>
                <p className="text-[10px] font-bold text-purple-100 uppercase tracking-widest mt-0.5">Earn & Share</p>
              </div>
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-3">
          <StatBox icon={<Leaf className="text-emerald-500" />} val="12.5" unit="kg" label="CO₂" />
          <StatBox icon={<TrendingUp className="text-purple-500" />} val="249" unit="₹" label="Saved" />
          <StatBox icon={<Zap className="text-blue-500" />} val="48" unit="" label="Points" />
        </section>

        {/* Available Rides List */}
        <section className="space-y-8">
          <div className="flex items-center justify-between px-2">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Top Commutes</h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Available Now</p>
            </div>
          </div>

          <div className="space-y-8">
            {loading ? (
              [1, 2].map(i => <div key={i} className="h-48 bg-white rounded-[3rem] animate-pulse"></div>)
            ) : (
              rides.map(ride => (
                <RideCard
                  key={ride.id}
                  ride={ride}
                  onClick={() => onRideSelect?.(ride)}
                />

              ))
            )}
            
            <div 
              onClick={onCreateRide}
              className="relative overflow-hidden group bg-white/40 border-4 border-dashed border-purple-100 rounded-[3rem] p-16 flex flex-col items-center gap-4 hover:bg-white hover:border-purple-300 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-200 group-hover:bg-purple-600 group-hover:text-white shadow-xl transition-all group-hover:scale-110">
                <Plus size={32} />
              </div>
              <div className="text-center relative z-10">
                <p className="font-black text-lg text-slate-800">Can't find a ride?</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Start your journey here</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes city-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes car-drive { 0% { transform: translateX(-100px); } 100% { transform: translateX(calc(100vw + 100px)); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-city-scroll { animation: city-scroll 120s linear infinite; }
        .animate-car-drive { animation: car-drive 15s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const StatBox: React.FC<{ icon: React.ReactNode; val: string; unit: string; label: string }> = ({ icon, val, unit, label }) => (
  <div className="bg-white p-5 rounded-[2.5rem] border border-slate-50 shadow-lg shadow-slate-100/50 flex flex-col items-center gap-1.5 text-center group transition-all hover:-translate-y-1">
    <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-purple-50 group-hover:scale-110 transition-all">
      {icon}
    </div>
    <p className="text-xl font-black text-slate-900 leading-none">{val}<span className="text-[10px] ml-0.5 text-slate-400">{unit}</span></p>
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em]">{label}</p>
  </div>
);

const RideCard: React.FC<{ ride: Ride; onClick: () => void }> = ({ ride, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-[3rem] p-8 shadow-2xl shadow-purple-100/30 border border-purple-50/50 flex flex-col gap-8 hover:shadow-purple-200 transition-all duration-500 cursor-pointer active:scale-[0.98] group relative overflow-hidden"
  >
    <div className="space-y-6 relative z-10">
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-center">
          <div className="relative">
             <img src={ride.driver?.avatar} className="w-16 h-16 rounded-[1.75rem] object-cover border-2 border-white shadow-xl ring-4 ring-purple-50" alt="Avatar" />
             <div className="absolute -bottom-1 -right-1 bg-white px-2 py-0.5 rounded-lg shadow-md border border-purple-50 flex items-center gap-1 text-[11px] font-black text-amber-500">
               <Star size={11} fill="currentColor" /> {ride.driver?.rating?.toFixed(1)}
             </div>
          </div>
          <div>
             <h3 className="text-xl font-black text-slate-900 leading-none group-hover:text-purple-600 transition-colors tracking-tight">{ride.driver?.name}</h3>
             <div className="flex items-center gap-1.5 mt-2">
               <CheckCircle2 size={12} className="text-emerald-500" />
               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified Pro</span>
             </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
           <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3.5 py-1.5 rounded-full border border-emerald-100 tracking-widest uppercase">
             {ride.status}
           </span>
           {ride.womenOnly && (
             <div className="bg-pink-50 text-pink-600 text-[9px] font-black px-3 py-1.5 rounded-full border border-pink-100 flex items-center gap-1.5 shadow-sm uppercase">
               <Shield size={10} strokeWidth={3} /> Women
             </div>
           )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative flex gap-5">
           <div className="flex flex-col items-center pt-2">
              <div className="w-5 h-5 rounded-full border-[3px] border-purple-600 bg-white shadow-sm flex-shrink-0"></div>
              <div className="w-[2px] h-10 border-l-2 border-dashed border-purple-100 my-1"></div>
              <div className="w-5 h-5 rounded-full bg-teal-500 shadow-sm flex-shrink-0"></div>
           </div>
           <div className="flex-1 space-y-9 pt-1">
              <div className="space-y-0.5">
                <p className="text-[18px] font-black text-slate-900 tracking-tight leading-none group-hover:text-purple-600 transition-colors">{ride.from}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Pickup</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[18px] font-black text-slate-900 tracking-tight leading-none group-hover:text-purple-600 transition-colors">{ride.to}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Drop-off</p>
              </div>
           </div>
        </div>

        <div className="bg-slate-50/60 p-5 rounded-[2.5rem] flex items-center justify-between border border-white shadow-inner">
          <div className="flex items-center gap-3 text-[12px] font-black text-slate-500 tracking-widest uppercase">
            <Clock size={18} className="text-purple-600" /> {ride.time.split('•')[1] || ride.time}
          </div>
          <div className="h-5 w-px bg-slate-200 mx-2"></div>
          <div className="flex items-center gap-3 text-[12px] font-black text-slate-500 tracking-widest uppercase">
            <Users size={18} className="text-purple-600" /> {ride.passengers} Seats
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-end justify-between pt-6 border-t border-purple-50 mt-auto relative z-10">
      <div className="space-y-4">
         <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] ml-1">Current Joiners</p>
         <div className="flex -space-x-3.5">
            {ride.avatars.map((url, i) => (
              <img key={i} src={url} className="w-11 h-11 rounded-full border-4 border-white shadow-lg ring-1 ring-slate-100" alt="Joiner" />
            ))}
            <div className="w-11 h-11 rounded-full border-4 border-white bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-[10px] text-white font-black shadow-lg">
              +{Math.floor(Math.random() * 5) + 3}
            </div>
         </div>
      </div>
      <div className="text-right">
         <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Contribution</p>
         <div className="flex items-center gap-0.5 justify-end">
           <span className="text-2xl font-black text-purple-600 mb-1 leading-none">₹</span>
           <span className="text-5xl font-black text-purple-600 tracking-tighter leading-none">{ride.price}</span>
         </div>
      </div>
    </div>
  </div>
);

const IndianRupee: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" />
  </svg>
);
