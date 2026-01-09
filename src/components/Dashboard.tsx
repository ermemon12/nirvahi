
// // import React from 'react';
// // import { Bell, Menu, AlertTriangle, Plus, Search, Leaf, DollarSign, Car, MapPin, Clock, Users, ChevronRight, LayoutDashboard, Calendar, Users2, User } from 'lucide-react';
// // import { Ride, ImpactStats } from '../types';

// // const MOCK_RIDES: Ride[] = [
// //   {
// //     id: '1',
// //     from: 'Andheri',
// //     to: 'Bandra',
// //     time: '8:30 AM',
// //     passengers: 2,
// //     status: 'Confirmed',
// //     avatars: ['https://picsum.photos/seed/p1/40/40', 'https://picsum.photos/seed/p2/40/40']
// //   },
// //   {
// //     id: '2',
// //     from: 'BKC',
// //     to: 'Powai',
// //     time: '9:00 AM',
// //     passengers: 1,
// //     status: 'Pending',
// //     avatars: ['https://picsum.photos/seed/p3/40/40']
// //   },
// //   {
// //     id: '3',
// //     from: 'Churchgate',
// //     to: 'Colaba',
// //     time: '10:15 AM',
// //     passengers: 3,
// //     status: 'Confirmed',
// //     avatars: ['https://picsum.photos/seed/p4/40/40', 'https://picsum.photos/seed/p5/40/40', 'https://picsum.photos/seed/p6/40/40']
// //   }
// // ];

// // const IMPACT: ImpactStats = {
// //   co2Saved: 12.5,
// //   moneySaved: 48,
// //   carsReduced: 8
// // };

// // interface DashboardProps {
// //   onCreateRide: () => void;
// //   onFindRide: () => void;
// // }

// // export const Dashboard: React.FC<DashboardProps> = ({ onCreateRide, onFindRide }) => {
// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       {/* Top Navbar */}
// //       <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4 shadow-sm">
// //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// //           <div className="flex items-center gap-8">
// //             <div className="flex items-center gap-2">
// //               <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
// //                 <Car className="text-white w-5 h-5" />
// //               </div>
// //               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">NIRVAHI</span>
// //             </div>
            
// //             <div className="hidden md:flex items-center gap-6">
// //               <a href="#" className="text-sm font-semibold text-purple-600 flex items-center gap-1.5"><LayoutDashboard className="w-4 h-4" /> Dashboard</a>
// //               <a href="#" className="text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-1.5"><Calendar className="w-4 h-4" /> My Rides</a>
// //               <a href="#" className="text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-1.5"><Users2 className="w-4 h-4" /> Groups</a>
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <button onClick={onCreateRide} className="hidden sm:flex bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
// //               <Plus className="w-4 h-4 mr-1.5" /> Create Ride
// //             </button>
// //             <div className="relative p-2 text-slate-400 hover:text-purple-600 transition-colors cursor-pointer">
// //               <Bell className="w-6 h-6" />
// //               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
// //             </div>
// //             <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
// //               <div className="text-right hidden sm:block">
// //                 <p className="text-xs text-slate-400 font-medium">Welcome,</p>
// //                 <p className="text-sm font-bold text-slate-800">Priya Sharma</p>
// //               </div>
// //               <img src="https://picsum.photos/seed/priya/100/100" alt="Profile" className="w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover" />
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       <main className="max-w-7xl mx-auto p-6 md:p-8 space-y-8">
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           <div className="lg:col-span-2 space-y-8">
// //             <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 relative group min-h-[400px]">
// //               <div className="absolute inset-0 bg-slate-200">
// //                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map View" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" />
// //               </div>
// //               <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
// //                 <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 w-72 pointer-events-auto border border-slate-100">
// //                   <h4 className="text-sm font-bold text-slate-800 mb-3">Find your next ride</h4>
// //                   <div className="space-y-2">
// //                     <div className="relative" onClick={onFindRide}>
// //                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
// //                       <input type="text" placeholder="Where to?" className="w-full bg-slate-50 text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-100 cursor-pointer" readOnly />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="absolute bottom-6 left-6 right-6 flex gap-4">
// //                 <button onClick={onFindRide} className="flex-1 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-xl transition-all active:scale-95">
// //                   <Search className="w-5 h-5 text-teal-600" /> Explore Nearby
// //                 </button>
// //                 <button onClick={onCreateRide} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-xl shadow-purple-900/20 transition-all active:scale-95">
// //                   <Plus className="w-5 h-5" /> New Ride
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl shadow-purple-200">
// //               <div className="flex flex-col md:flex-row justify-between items-center gap-8">
// //                 <div className="space-y-2 text-center md:text-left">
// //                   <h4 className="text-xl font-bold">Your Sustainability Impact</h4>
// //                   <p className="text-purple-100 text-sm">You've saved more than 80% of users this month!</p>
// //                 </div>
// //                 <div className="grid grid-cols-3 gap-8 flex-1 w-full max-w-xl">
// //                   <div className="flex flex-col items-center">
// //                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><Leaf className="w-6 h-6 text-emerald-300" /></div>
// //                     <span className="text-lg font-bold">{IMPACT.co2Saved}kg</span>
// //                     <span className="text-xs text-purple-200">CO₂ Saved</span>
// //                   </div>
// //                   <div className="flex flex-col items-center">
// //                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><DollarSign className="w-6 h-6 text-amber-300" /></div>
// //                     <span className="text-lg font-bold">₹{IMPACT.moneySaved}</span>
// //                     <span className="text-xs text-purple-200">Earned</span>
// //                   </div>
// //                   <div className="flex flex-col items-center">
// //                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><Car className="w-6 h-6 text-blue-300" /></div>
// //                     <span className="text-lg font-bold">{IMPACT.carsReduced}</span>
// //                     <span className="text-xs text-purple-200">Cars Saved</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="space-y-6">
// //             <div className="flex items-center justify-between px-2">
// //               <h4 className="text-lg font-bold text-slate-800">Recent Rides</h4>
// //               <button onClick={onFindRide} className="text-sm font-bold text-purple-600 hover:underline">View All</button>
// //             </div>
// //             <div className="space-y-4">
// //               {MOCK_RIDES.map(ride => (
// //                 <div key={ride.id} onClick={onFindRide} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:border-purple-200 transition-all group cursor-pointer hover:shadow-md">
// //                   <div className="flex justify-between items-start mb-4">
// //                     <div className="flex items-center gap-3">
// //                       <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors"><MapPin className="w-6 h-6" /></div>
// //                       <div>
// //                         <p className="font-bold text-slate-800">{ride.from} to {ride.to}</p>
// //                         <div className="flex items-center gap-4 mt-1">
// //                           <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium"><Clock className="w-3.5 h-3.5" /> {ride.time}</span>
// //                           <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium"><Users className="w-3.5 h-3.5" /> {ride.passengers} pax</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center justify-between pt-4 border-t border-slate-50">
// //                     <div className="flex items-center gap-3">
// //                        <div className="flex -space-x-2">
// //                         {ride.avatars.map((url, i) => (
// //                           <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm"><img src={url} alt="User" className="w-full h-full object-cover" /></div>
// //                         ))}
// //                       </div>
// //                       <span className="text-xs text-slate-500 font-semibold">Join them</span>
// //                     </div>
// //                     <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${ride.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{ride.status}</span>
// //                   </div>
// //                 </div>
// //               ))}
// //               <button onClick={onCreateRide} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold hover:border-purple-300 hover:text-purple-500 transition-all flex items-center justify-center gap-2"><Plus className="w-5 h-5" /> Post New Request</button>
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       <div className="md:hidden fixed bottom-6 inset-x-6 z-50">
// //         <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl px-8 py-4 flex justify-between items-center shadow-2xl shadow-slate-900/40">
// //            <MapPin onClick={onFindRide} className="w-6 h-6 text-purple-400" />
// //            <Calendar className="w-6 h-6 text-slate-400" />
// //            <div onClick={onCreateRide} className="bg-purple-600 p-3 rounded-xl -mt-10 border-4 border-slate-50 shadow-lg cursor-pointer active:scale-95 transition-transform"><Plus className="w-6 h-6 text-white" /></div>
// //            <Users2 className="w-6 h-6 text-slate-400" />
// //            <User className="w-6 h-6 text-slate-400" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// import React, { useEffect, useState } from 'react';
// import { Bell, Plus, Search, Leaf, DollarSign, Car, MapPin, Clock, Users, LayoutDashboard, Calendar, Users2, User } from 'lucide-react';
// import { Ride, ImpactStats } from '../types';

// const IMPACT: ImpactStats = {
//   co2Saved: 12.5,
//   moneySaved: 48,
//   carsReduced: 8
// };

// interface DashboardProps {
//   onCreateRide: () => void;
//   onFindRide: () => void;
// }

// export const Dashboard: React.FC<DashboardProps> = ({ onCreateRide, onFindRide }) => {
//   const [rides, setRides] = useState<Ride[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch rides from backend and map fields to UI
//   useEffect(() => {
//     const fetchRides = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/rides'); // your backend URL
//         const data = await res.json();

//         const formattedRides = data.map((ride: any) => ({
//           id: ride._id,
//           from: ride.from,
//           to: ride.to,
//           time: `${ride.date} • ${ride.time}`,
//           passengers: ride.availableSeats,
//           status: ride.status === 'ACTIVE' ? 'Confirmed' : 'Pending',
//           avatars: Array(ride.availableSeats).fill(
//             'https://picsum.photos/seed/user/40/40'
//           )
//         }));

//         setRides(formattedRides);
//       } catch (error) {
//         console.error('Failed to fetch rides', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRides();
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Top Navbar */}
//       <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4 shadow-sm">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center gap-8">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
//                 <Car className="text-white w-5 h-5" />
//               </div>
//               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">NIRVAHI</span>
//             </div>
            
//             <div className="hidden md:flex items-center gap-6">
//               <a href="#" className="text-sm font-semibold text-purple-600 flex items-center gap-1.5"><LayoutDashboard className="w-4 h-4" /> Dashboard</a>
//               <a href="#" className="text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-1.5"><Calendar className="w-4 h-4" /> My Rides</a>
//               <a href="#" className="text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-1.5"><Users2 className="w-4 h-4" /> Groups</a>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <button onClick={onCreateRide} className="hidden sm:flex bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
//               <Plus className="w-4 h-4 mr-1.5" /> Create Ride
//             </button>
//             <div className="relative p-2 text-slate-400 hover:text-purple-600 transition-colors cursor-pointer">
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//             </div>
//             <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
//               <div className="text-right hidden sm:block">
//                 <p className="text-xs text-slate-400 font-medium">Welcome,</p>
//                 <p className="text-sm font-bold text-slate-800">Priya Sharma</p>
//               </div>
//               <img src="https://picsum.photos/seed/priya/100/100" alt="Profile" className="w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover" />
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto p-6 md:p-8 space-y-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             {/* Map / Search card */}
//             <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 relative group min-h-[400px]">
//               <div className="absolute inset-0 bg-slate-200">
//                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map View" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" />
//               </div>
//               <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
//                 <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 w-72 pointer-events-auto border border-slate-100">
//                   <h4 className="text-sm font-bold text-slate-800 mb-3">Find your next ride</h4>
//                   <div className="space-y-2">
//                     <div className="relative" onClick={onFindRide}>
//                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                       <input type="text" placeholder="Where to?" className="w-full bg-slate-50 text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-100 cursor-pointer" readOnly />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute bottom-6 left-6 right-6 flex gap-4">
//                 <button onClick={onFindRide} className="flex-1 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-xl transition-all active:scale-95">
//                   <Search className="w-5 h-5 text-teal-600" /> Explore Nearby
//                 </button>
//                 <button onClick={onCreateRide} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-xl shadow-purple-900/20 transition-all active:scale-95">
//                   <Plus className="w-5 h-5" /> New Ride
//                 </button>
//               </div>
//             </div>

//             {/* Sustainability impact */}
//             <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl shadow-purple-200">
//               <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//                 <div className="space-y-2 text-center md:text-left">
//                   <h4 className="text-xl font-bold">Your Sustainability Impact</h4>
//                   <p className="text-purple-100 text-sm">You've saved more than 80% of users this month!</p>
//                 </div>
//                 <div className="grid grid-cols-3 gap-8 flex-1 w-full max-w-xl">
//                   <div className="flex flex-col items-center">
//                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><Leaf className="w-6 h-6 text-emerald-300" /></div>
//                     <span className="text-lg font-bold">{IMPACT.co2Saved}kg</span>
//                     <span className="text-xs text-purple-200">CO₂ Saved</span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><DollarSign className="w-6 h-6 text-amber-300" /></div>
//                     <span className="text-lg font-bold">₹{IMPACT.moneySaved}</span>
//                     <span className="text-xs text-purple-200">Earned</span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><Car className="w-6 h-6 text-blue-300" /></div>
//                     <span className="text-lg font-bold">{IMPACT.carsReduced}</span>
//                     <span className="text-xs text-purple-200">Cars Saved</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Recent Rides */}
//           <div className="space-y-6">
//             <div className="flex items-center justify-between px-2">
//               <h4 className="text-lg font-bold text-slate-800">Recent Rides</h4>
//               <button onClick={onFindRide} className="text-sm font-bold text-purple-600 hover:underline">View All</button>
//             </div>

//             {loading ? (
//               <div>Loading rides...</div>
//             ) : (
//               <div className="space-y-4">
//                 {rides.map(ride => (
//                   <div key={ride.id} onClick={onFindRide} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:border-purple-200 transition-all group cursor-pointer hover:shadow-md">
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors"><MapPin className="w-6 h-6" /></div>
//                         <div>
//                           <p className="font-bold text-slate-800">{ride.from} to {ride.to}</p>
//                           <div className="flex items-center gap-4 mt-1">
//                             <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium"><Clock className="w-3.5 h-3.5" /> {ride.time}</span>
//                             <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium"><Users className="w-3.5 h-3.5" /> {ride.passengers} pax</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between pt-4 border-t border-slate-50">
//                       <div className="flex items-center gap-3">
//                          <div className="flex -space-x-2">
//                           {ride.avatars.map((url, i) => (
//                             <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm"><img src={url} alt="User" className="w-full h-full object-cover" /></div>
//                           ))}
//                         </div>
//                         <span className="text-xs text-slate-500 font-semibold">Join them</span>
//                       </div>
//                       <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${ride.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{ride.status}</span>
//                     </div>
//                   </div>
//                 ))}
//                 <button onClick={onCreateRide} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold hover:border-purple-300 hover:text-purple-500 transition-all flex items-center justify-center gap-2"><Plus className="w-5 h-5" /> Post New Request</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* Mobile bottom nav */}
//       <div className="md:hidden fixed bottom-6 inset-x-6 z-50">
//         <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl px-8 py-4 flex justify-between items-center shadow-2xl shadow-slate-900/40">
//            <MapPin onClick={onFindRide} className="w-6 h-6 text-purple-400" />
//            <Calendar className="w-6 h-6 text-slate-400" />
//            <div onClick={onCreateRide} className="bg-purple-600 p-3 rounded-xl -mt-10 border-4 border-slate-50 shadow-lg cursor-pointer active:scale-95 transition-transform"><Plus className="w-6 h-6 text-white" /></div>
//            <Users2 className="w-6 h-6 text-slate-400" />
//            <User className="w-6 h-6 text-slate-400" />
//         </div>
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useState } from 'react';
import { Bell, Plus, Search, Leaf, DollarSign, Car, MapPin, Clock, Users, LayoutDashboard, Calendar, Users2, User, Shield } from 'lucide-react';
import { Ride, ImpactStats } from '../types';

const IMPACT: ImpactStats = {
  co2Saved: 12.5,
  moneySaved: 48,
  carsReduced: 8
};

interface DashboardProps {
  onCreateRide: () => void;
  onFindRide: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onCreateRide, onFindRide }) => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch rides from backend and map fields to UI
  useEffect(() => {
    const fetchRides = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/rides'); // your backend URL
        const data = await res.json();

        const formattedRides = data.map((ride: any) => ({
          id: ride._id,
          from: ride.from,
          to: ride.to,
          time: `${ride.date} • ${ride.time}`,
          passengers: ride.availableSeats,
          status: ride.status === 'ACTIVE' ? 'Confirmed' : 'Pending',
          avatars: Array(ride.availableSeats).fill('https://picsum.photos/seed/user/40/40'),
          womenOnly: ride.womenOnly, // added
        }));

        setRides(formattedRides);
      } catch (error) {
        console.error('Failed to fetch rides', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Car className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">NIRVAHI</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-semibold text-purple-600 flex items-center gap-1.5"><LayoutDashboard className="w-4 h-4" /> Dashboard</a>
              <a href="#" className="text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-1.5"><Calendar className="w-4 h-4" /> My Rides</a>
              <a href="#" className="text-sm font-semibold text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-1.5"><Users2 className="w-4 h-4" /> Groups</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onCreateRide} className="hidden sm:flex bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
              <Plus className="w-4 h-4 mr-1.5" /> Create Ride
            </button>
            <div className="relative p-2 text-slate-400 hover:text-purple-600 transition-colors cursor-pointer">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-slate-400 font-medium">Welcome,</p>
                <p className="text-sm font-bold text-slate-800">Priya Sharma</p>
              </div>
              <img src="https://picsum.photos/seed/priya/100/100" alt="Profile" className="w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Map / Search card */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 relative group min-h-[400px]">
              <div className="absolute inset-0 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map View" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
                <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 w-72 pointer-events-auto border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-800 mb-3">Find your next ride</h4>
                  <div className="space-y-2">
                    <div className="relative" onClick={onFindRide}>
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" placeholder="Where to?" className="w-full bg-slate-50 text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-100 cursor-pointer" readOnly />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <button onClick={onFindRide} className="flex-1 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-xl transition-all active:scale-95">
                  <Search className="w-5 h-5 text-teal-600" /> Explore Nearby
                </button>
                <button onClick={onCreateRide} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-2 font-bold shadow-xl shadow-purple-900/20 transition-all active:scale-95">
                  <Plus className="w-5 h-5" /> New Ride
                </button>
              </div>
            </div>

            {/* Sustainability impact */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-xl shadow-purple-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <h4 className="text-xl font-bold">Your Sustainability Impact</h4>
                  <p className="text-purple-100 text-sm">You've saved more than 80% of users this month!</p>
                </div>
                <div className="grid grid-cols-3 gap-8 flex-1 w-full max-w-xl">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><Leaf className="w-6 h-6 text-emerald-300" /></div>
                    <span className="text-lg font-bold">{IMPACT.co2Saved}kg</span>
                    <span className="text-xs text-purple-200">CO₂ Saved</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><DollarSign className="w-6 h-6 text-amber-300" /></div>
                    <span className="text-lg font-bold">₹{IMPACT.moneySaved}</span>
                    <span className="text-xs text-purple-200">Earned</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-3"><Car className="w-6 h-6 text-blue-300" /></div>
                    <span className="text-lg font-bold">{IMPACT.carsReduced}</span>
                    <span className="text-xs text-purple-200">Cars Saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Rides */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h4 className="text-lg font-bold text-slate-800">Recent Rides</h4>
              <button onClick={onFindRide} className="text-sm font-bold text-purple-600 hover:underline">View All</button>
            </div>

            {loading ? (
              <div>Loading rides...</div>
            ) : (
              <div className="space-y-4">
                {rides.map(ride => (
                  <div key={ride.id} onClick={onFindRide} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:border-purple-200 transition-all group cursor-pointer hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{ride.from} to {ride.to}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium"><Clock className="w-3.5 h-3.5" /> {ride.time}</span>
                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium"><Users className="w-3.5 h-3.5" /> {ride.passengers} pax</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {ride.avatars.map((url, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm">
                              <img src={url} alt="User" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                        <span className="text-xs text-slate-500 font-semibold">Join them</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {ride.womenOnly && (
                          <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-purple-100">
                            <Shield className="w-3 h-3" /> Women-Priority
                          </span>
                        )}
                        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${ride.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {ride.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <button onClick={onCreateRide} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold hover:border-purple-300 hover:text-purple-500 transition-all flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" /> Post New Request
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-6 inset-x-6 z-50">
        <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl px-8 py-4 flex justify-between items-center shadow-2xl shadow-slate-900/40">
          <MapPin onClick={onFindRide} className="w-6 h-6 text-purple-400" />
          <Calendar className="w-6 h-6 text-slate-400" />
          <div onClick={onCreateRide} className="bg-purple-600 p-3 rounded-xl -mt-10 border-4 border-slate-50 shadow-lg cursor-pointer active:scale-95 transition-transform">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <Users2 className="w-6 h-6 text-slate-400" />
          <User className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </div>
  );
};
