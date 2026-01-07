import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Source, Layer } from "react-map-gl";
import axios from "axios";
import { ArrowLeft, MapPin, Calendar, Clock, Users, IndianRupee, Shield, CheckCircle2, ChevronDown } from "lucide-react";

interface CreateRideProps { onBack: () => void; }
type Step = "details" | "safety" | "preview";

// Mapbox Token
const MAPBOX_TOKEN = "pk.eyJ1IjoiZXJhbWsxMiIsImEiOiJjbWs0YjRvZjUwNHJjM2Rxc2diOWhiMTR0In0.A81lPbvYFQ12-pwZbW8_Pg"; // <-- replace with your Mapbox token

export const CreateRide: React.FC<CreateRideProps> = ({ onBack }) => {
  const [step, setStep] = useState<Step>("details");
  const [isWomenOnly, setIsWomenOnly] = useState(false);

  // Ride info
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
  const [toSuggestions, setToSuggestions] = useState<string[]>([]);
  const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
  const [toCoords, setToCoords] = useState<[number, number] | null>(null);
  const [routeGeoJSON, setRouteGeoJSON] = useState<any>(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState(2);
  const [cost, setCost] = useState(12);

  // --------------------------
  // Mapbox Autocomplete
  // --------------------------
  const fetchSuggestions = async (query: string, setter: (arr: string[]) => void) => {
    if (!query) return setter([]);
    try {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`,
        { params: { access_token: MAPBOX_TOKEN, autocomplete: true, limit: 5 } }
      );
      setter(res.data.features.map((f: any) => f.place_name));
    } catch (err) { console.error(err); setter([]); }
  };

  const selectPlace = async (
    place: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    coordSetter: React.Dispatch<React.SetStateAction<[number, number] | null>>,
    suggestionSetter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(place);
    suggestionSetter([]);
    try {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json`,
        { params: { access_token: MAPBOX_TOKEN, limit: 1 } }
      );
      if (res.data.features.length > 0) {
        const [lon, lat] = res.data.features[0].geometry.coordinates;
        coordSetter([lat, lon]);
      }
    } catch (err) { console.error(err); }
  };

  // --------------------------
  // Fetch Route
  // --------------------------
  useEffect(() => {
    const fetchRoute = async () => {
      if (!fromCoords || !toCoords) return;
      try {
        const res = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${fromCoords[1]},${fromCoords[0]};${toCoords[1]},${toCoords[0]}`,
          { params: { geometries: "geojson", access_token: MAPBOX_TOKEN } }
        );
        setRouteGeoJSON(res.data.routes[0].geometry);
      } catch (err) { console.error(err); }
    };
    fetchRoute();
  }, [fromCoords, toCoords]);

  // --------------------------
  // UI Components
  // --------------------------
  const renderProgress = () => {
    const steps: Step[] = ["details", "safety", "preview"];
    const currentIndex = steps.indexOf(step);
    return (
      <div className="flex gap-2 w-full px-6 mb-8">
        {steps.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= currentIndex ? 'bg-purple-600' : 'bg-slate-100'}`} />
        ))}
      </div>
    );
  };

  const renderHeader = () => (
    <div className="px-6 py-6 flex items-center gap-4">
      <button onClick={() => step === "details" ? onBack() : setStep(step === "safety" ? "details" : "safety")}
        className="p-2 hover:bg-slate-100 rounded-full transition-colors">
        <ArrowLeft className="w-5 h-5 text-slate-600"/>
      </button>
      <div>
        <h2 className="text-xl font-bold text-slate-800">Create Ride</h2>
        <p className="text-sm text-slate-400">Share your journey and save costs</p>
      </div>
    </div>
  );

  // --------------------------
  // Step 1: Details
  // --------------------------
  const StepDetails = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-6">
        <h3 className="text-lg font-bold text-slate-800">Route Details</h3>
        <div className="space-y-4">

          {/* From */}
          <div className="space-y-2 relative">
            <label className="text-sm font-semibold text-slate-500">From</label>
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 w-5 h-5"/>
            <input
              type="text"
              placeholder="Enter pickup location"
              value={from}
              onChange={e => { setFrom(e.target.value); fetchSuggestions(e.target.value, setFromSuggestions); }}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {fromSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded-xl mt-1 z-50">
                {fromSuggestions.map((s, i) => (
                  <div key={i} className="p-2 hover:bg-slate-100 cursor-pointer"
                    onClick={() => selectPlace(s, setFrom, setFromCoords, setFromSuggestions)}>
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* To */}
          <div className="space-y-2 relative">
            <label className="text-sm font-semibold text-slate-500">To</label>
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 w-5 h-5"/>
            <input
              type="text"
              placeholder="Enter destination"
              value={to}
              onChange={e => { setTo(e.target.value); fetchSuggestions(e.target.value, setToSuggestions); }}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {toSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded-xl mt-1 z-50">
                {toSuggestions.map((s, i) => (
                  <div key={i} className="p-2 hover:bg-slate-100 cursor-pointer"
                    onClick={() => selectPlace(s, setTo, setToCoords, setToSuggestions)}>
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-500">Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"/>
                <input type="date" value={date} onChange={e=>setDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 outline-none text-sm"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-500">Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"/>
                <input type="time" value={time} onChange={e=>setTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 outline-none text-sm"/>
              </div>
            </div>
          </div>

          {/* Seats & Cost */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-500">Available Seats</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"/>
                <select value={seats} onChange={e=>setSeats(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 appearance-none focus:ring-2 focus:ring-purple-500 outline-none text-sm font-medium">
                  {[1,2,3,4].map(n=><option key={n} value={n}>{n} seat{n>1?'s':''}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-500">Cost per Person</label>
              <div className="relative">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"/>
                <input type="number" value={cost} onChange={e=>setCost(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 outline-none text-sm"/>
              </div>
            </div>
          </div>

        </div>
      </div>
      <button onClick={()=>setStep("safety")} className="w-full bg-purple-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-purple-700 transition-all">Continue</button>
    </div>
  );

  // --------------------------
  // StepSafety
  // --------------------------
  const StepSafety = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-6">
        <h3 className="text-lg font-bold text-slate-800">Safety Preferences</h3>
        <div className={`p-6 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${isWomenOnly ? 'border-purple-200 bg-purple-50/30' : 'border-slate-50 bg-white'}`}
          onClick={()=>setIsWomenOnly(!isWomenOnly)}>
          <div className="flex gap-4">
            <div className="p-2 bg-purple-100 rounded-lg h-fit"><Shield className="w-5 h-5 text-purple-600"/></div>
            <div>
              <h4 className="font-bold text-slate-800">Women-Only Ride</h4>
              <p className="text-xs text-slate-400 font-medium">Only women can request to join this ride</p>
            </div>
          </div>
          <div className={`w-12 h-6 rounded-full relative transition-colors ${isWomenOnly ? 'bg-purple-600' : 'bg-slate-200'}`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isWomenOnly ? 'right-1':'left-1'}`}/>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={()=>setStep("details")} className="flex-1 bg-slate-100 text-slate-600 font-bold py-5 rounded-2xl hover:bg-slate-200 transition-all">Back</button>
        <button onClick={()=>setStep("preview")} className="flex-[2] bg-purple-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-purple-700 transition-all">Preview</button>
      </div>
    </div>
  );

  // --------------------------
  // StepPreview
  // --------------------------
  const StepPreview = () => (
    <div className="space-y-6 animate-fadeIn pb-10">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-6">
        <h3 className="text-lg font-bold text-slate-800">Route Preview</h3>
        <div className="aspect-[1.5/1] rounded-2xl overflow-hidden border border-slate-100">
          {fromCoords && toCoords && routeGeoJSON ? (
            <ReactMapGL
              initialViewState={{ latitude: fromCoords[0], longitude: fromCoords[1], zoom: 12 }}
              mapboxAccessToken={MAPBOX_TOKEN}
              style={{ width: "100%", height: "100%" }}
            >
              <Marker longitude={fromCoords[1]} latitude={fromCoords[0]} anchor="bottom">
                <MapPin className="w-6 h-6 text-purple-600"/>
              </Marker>
              <Marker longitude={toCoords[1]} latitude={toCoords[0]} anchor="bottom">
                <MapPin className="w-6 h-6 text-teal-600"/>
              </Marker>
              <Source id="route" type="geojson" data={routeGeoJSON}>
                <Layer
                  id="routeLine"
                  type="line"
                  paint={{ "line-color": "#7c3aed", "line-width": 4 }}
                />
              </Source>
            </ReactMapGL>
          ) : <div className="w-full h-full flex items-center justify-center text-slate-400">Enter addresses to see route</div>}
        </div>

        {/* Ride Info */}
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-slate-50/50 p-4 rounded-xl">
            <span className="text-sm font-semibold text-slate-400">Route</span>
            <span className="text-sm font-bold text-slate-700">{from} → {to}</span>
          </div>
          <div className="flex justify-between items-center bg-slate-50/50 p-4 rounded-xl">
            <span className="text-sm font-semibold text-slate-400">Date & Time</span>
            <span className="text-sm font-bold text-slate-700">{date} {time}</span>
          </div>
          <div className="flex justify-between items-center bg-slate-50/50 p-4 rounded-xl">
            <span className="text-sm font-semibold text-slate-400">Available Seats</span>
            <span className="text-sm font-bold text-slate-700">{seats} seat{seats>1?'s':''}</span>
          </div>
          <div className="flex justify-between items-center bg-slate-50/50 p-4 rounded-xl">
            <span className="text-sm font-semibold text-slate-400">Cost per Person</span>
            <span className="text-sm font-bold text-slate-700">₹{cost}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button onClick={()=>setStep("safety")} className="flex-1 bg-slate-100 text-slate-600 font-bold py-5 rounded-2xl hover:bg-slate-200 transition-all">Back</button>
          <button onClick={async ()=>{
            try {
              await axios.post('http://localhost:5000/api/rides', {
                from, to, date, time, availableSeats: seats,
                costPerPerson: cost, womenOnly: isWomenOnly, route: routeGeoJSON
              });
              alert("Ride Published!");
              setStep("details"); setFrom(""); setTo(""); setDate(""); setTime(""); setSeats(2); setCost(12); setIsWomenOnly(false); setRouteGeoJSON(null);
            } catch(err:any){ alert(err.message); console.error(err); }
          }} className="flex-[2] bg-gradient-to-r from-purple-600 to-teal-600 text-white font-bold py-5 rounded-2xl shadow-xl transition-all">Publish Ride</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto min-h-screen bg-slate-50 pb-20">
      {renderHeader()}
      {renderProgress()}
      <div className="px-6">
        {step==="details" && <StepDetails />}
        {step==="safety" && <StepSafety />}
        {step==="preview" && <StepPreview />}
      </div>
    </div>
  );
};
