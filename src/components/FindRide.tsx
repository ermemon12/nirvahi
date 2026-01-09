import React, { useEffect, useState } from 'react';
import { ArrowLeft, Filter, MapPin, Sparkles, Star, Clock, Users, Shield, CheckCircle2 } from 'lucide-react';
import { Ride } from '../types';

interface FindRideProps {
  onBack: () => void;
  onSelectRide: (ride: Ride) => void;
}

export const FindRide: React.FC<FindRideProps> = ({ onBack, onSelectRide }) => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [filteredRides, setFilteredRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);

  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [womenOnlyFilter, setWomenOnlyFilter] = useState(false); // New state

  // Fetch rides from backend
  useEffect(() => {
    const fetchRides = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/rides');
        const data = await res.json();

        const formattedRides: Ride[] = data.map((ride: any) => ({
          id: ride._id,
          from: ride.from,
          to: ride.to,
          time: `${ride.date} • ${ride.time}`,
          passengers: ride.availableSeats,
          status: ride.status === 'ACTIVE' ? 'Confirmed' : 'Pending',
          avatars: Array(ride.availableSeats).fill('https://picsum.photos/seed/user/40/40'),
          womenOnly: ride.womenOnly,
          costPerPerson: ride.costPerPerson
        }));

        setRides(formattedRides);
        setFilteredRides(formattedRides);
      } catch (error) {
        console.error('Failed to fetch rides', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  // Filter rides based on input and women-only filter
  useEffect(() => {
    const filtered = rides.filter((ride) => {
      const matchesFrom = ride.from.toLowerCase().includes(fromInput.toLowerCase());
      const matchesTo = ride.to.toLowerCase().includes(toInput.toLowerCase());
      const matchesWomenOnly = womenOnlyFilter ? ride.womenOnly : true;
      return matchesFrom && matchesTo && matchesWomenOnly;
    });
    setFilteredRides(filtered);
  }, [fromInput, toInput, womenOnlyFilter, rides]);

  return (
    <div className="max-w-xl mx-auto min-h-screen bg-slate-50 pb-20 animate-fadeIn">
      <div className="bg-white px-6 py-6 flex items-center justify-between sticky top-0 z-30 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Find a Ride</h2>
            <p className="text-sm text-slate-400 font-medium">{filteredRides.length} rides available</p>
          </div>
        </div>
        {/* Filter button */}
        <button
          onClick={() => setWomenOnlyFilter(!womenOnlyFilter)}
          className={`p-2.5 rounded-xl relative ${womenOnlyFilter ? 'bg-purple-600 text-white' : 'bg-slate-50 text-purple-600'}`}
        >
          <Filter className="w-5 h-5" />
          {womenOnlyFilter && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full border-2 border-purple-600"></span>
          )}
        </button>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Search Inputs */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-3">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 w-5 h-5" />
            <input
              type="text"
              placeholder="From: Your location"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm font-medium"
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 w-5 h-5" />
            <input
              type="text"
              placeholder="To: Where are you going?"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm font-medium"
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div>Loading rides...</div>
        ) : (
          <div className="space-y-4">
            {filteredRides.map((ride) => (
              <div
                key={ride.id}
                onClick={() => onSelectRide(ride)}
                className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 space-y-6 hover:border-purple-200 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src="https://picsum.photos/seed/user/100/100"
                        className="w-14 h-14 rounded-2xl object-cover"
                        alt="Driver"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Driver Name</h4>
                      <p className="text-xs text-slate-400 font-medium">Rides completed: 100+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-xs font-black">
                    <Star className="w-3 h-3 fill-amber-600" /> 4.9
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="w-4 h-4 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">From</p>
                        <p className="text-sm font-bold text-slate-700">{ride.from}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="w-4 h-4 text-teal-600 mt-0.5" />
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">To</p>
                        <p className="text-sm font-bold text-slate-700">{ride.to}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">per person</p>
                    <p className="text-2xl font-black text-purple-600">₹{ride.costPerPerson}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-xs"><Clock className="w-4 h-4" /> {ride.time}</span>
                  <span className="flex items-center gap-1.5 text-xs"><Users className="w-4 h-4" /> {ride.passengers} seats</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {ride.womenOnly && (
                    <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-purple-100">
                      <Shield className="w-3 h-3" /> Women-Priority
                    </span>
                  )}
                </div>
              </div>
            ))}

            {filteredRides.length === 0 && (
              <p className="text-center text-slate-400 font-medium mt-6">No rides found for your search</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
