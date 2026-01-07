
import React from 'react';
import { ArrowLeft, Users, Shield, Smartphone, CreditCard, Wallet, CheckCircle2, IndianRupee } from 'lucide-react';

interface PaymentProps {
  onBack: () => void;
  onPay: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ onBack, onPay }) => {
  return (
    <div className="max-w-xl mx-auto min-h-screen bg-slate-50 pb-24 animate-fadeIn">
      <div className="bg-white px-6 py-6 flex items-center gap-4 sticky top-0 z-30 border-b border-slate-100">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full"><ArrowLeft className="w-5 h-5 text-slate-600" /></button>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Payment</h2>
          <p className="text-sm text-slate-400 font-medium">Confirm and pay for your ride</p>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Cost Split Preview */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 space-y-6">
           <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Cost Split Preview</h4>
           <div className="flex justify-center -space-x-4">
             <img src="https://picsum.photos/seed/esha/100/100" className="w-14 h-14 rounded-full border-4 border-white shadow-md z-10" />
             <div className="w-14 h-14 rounded-full bg-purple-100 border-4 border-white shadow-md z-20 flex flex-col items-center justify-center text-[10px] font-black text-purple-600">
                <img src="https://picsum.photos/seed/priya/100/100" className="w-full h-full rounded-full object-cover" />
                <span className="absolute bottom-[-18px] bg-purple-600 text-white px-2 py-0.5 rounded-full text-[8px]">YOU</span>
             </div>
             <div className="w-14 h-14 rounded-full bg-slate-50 border-4 border-white shadow-md flex items-center justify-center">
                <Users className="w-6 h-6 text-slate-300" />
             </div>
           </div>
           <div className="text-center">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Total Trip Cost</p>
              <p className="text-4xl font-black text-slate-800">₹36</p>
           </div>
           <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-2xl flex items-center justify-center gap-2">
              <IndianRupee className="w-4 h-4 text-purple-600" />
              <p className="text-xs font-bold text-purple-700">Split equally among 3 passengers</p>
           </div>
           <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center font-bold text-slate-800">
                <span className="text-sm">Your Share</span>
                <span className="text-lg">₹12</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-slate-400">
                <span>Platform Fee</span>
                <span className="text-green-600">$0 (Free)</span>
              </div>
              <div className="bg-purple-100/50 p-5 rounded-2xl border border-purple-200 flex justify-between items-center">
                 <span className="text-sm font-black text-purple-900 uppercase">Amount to Pay</span>
                 <span className="text-2xl font-black text-purple-600">$12</span>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3">
                 <CheckCircle2 className="w-4 h-4 text-green-600" />
                 <p className="text-xs font-bold text-green-700">You're saving ₹8 compared to a solo ride</p>
              </div>
           </div>
        </div>

        {/* Select Payment Method */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 space-y-6">
           <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Select Payment Method</h4>
           <div className="space-y-4">
              <div className="p-5 border-2 border-purple-600 bg-purple-50/30 rounded-3xl flex items-center justify-between cursor-pointer">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                       <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="font-black text-slate-800">UPI Payment</p>
                       <p className="text-xs text-slate-400 font-medium">Google Pay, PhonePe, Paytm</p>
                    </div>
                 </div>
                 <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                 </div>
              </div>
              <div className="p-5 border-2 border-slate-50 rounded-3xl flex items-center gap-4 cursor-pointer hover:border-slate-200 transition-colors">
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                    <CreditCard className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="font-bold text-slate-700">Credit / Debit Card</p>
                    <p className="text-xs text-slate-400 font-medium">Visa, Mastercard, Amex</p>
                 </div>
              </div>
              <div className="p-5 border-2 border-slate-50 rounded-3xl flex items-center gap-4 cursor-pointer hover:border-slate-200 transition-colors">
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                    <Wallet className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="font-bold text-slate-700">SafeRide Wallet</p>
                    <p className="text-xs text-slate-400 font-medium">Balance: ₹45.00</p>
                 </div>
              </div>
           </div>
        </div>

        {/* UPI ID Input */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 space-y-4">
           <label className="text-xs font-black text-slate-400 uppercase tracking-widest">UPI ID</label>
           <input type="text" placeholder="yourname@upi" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 outline-none font-medium focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 p-6 bg-white border-t border-slate-100 z-40 max-w-xl mx-auto">
        <button onClick={onPay} className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-black py-5 rounded-[2rem] shadow-2xl transition-all active:scale-95 text-lg">
          Pay ₹12
        </button>
        <div className="bg-emerald-50 text-emerald-600 text-[10px] font-bold py-2 px-4 rounded-xl mt-4 flex items-center justify-center gap-2">
           <Shield className="w-3.5 h-3.5" /> Your payment is secured with 256-bit encryption
        </div>
      </div>
    </div>
  );
};
