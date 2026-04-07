import React from 'react';

const ResultCard = ({ score, riskLevel }) => {
  // Determine styles based on risk level
  let containerStyle, textGlowStyle, ringStyle, pulseStyle;
  
  if (riskLevel === 'Low') {
    containerStyle = 'bg-emerald-50/80 border-emerald-200';
    textGlowStyle = 'text-emerald-700';
    ringStyle = 'border-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.2)] shadow-inner bg-white/90';
    pulseStyle = 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300';
  } else if (riskLevel === 'Medium') {
    containerStyle = 'bg-amber-50/80 border-amber-200';
    textGlowStyle = 'text-amber-700';
    ringStyle = 'border-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.2)] shadow-inner bg-white/90';
    pulseStyle = 'bg-amber-100 text-amber-800 ring-1 ring-amber-300';
  } else {
    containerStyle = 'bg-rose-50/80 border-rose-200';
    textGlowStyle = 'text-rose-700';
    ringStyle = 'border-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.2)] shadow-inner bg-white/90';
    pulseStyle = 'bg-rose-100 text-rose-800 ring-1 ring-rose-300';
  }

  return (
    <div className={`mt-8 p-8 rounded-3xl border backdrop-blur-xl ${containerStyle} transition-all duration-500 relative overflow-hidden group`}>
      {/* Background sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

      <h3 className={`text-2xl font-black mb-8 text-center uppercase tracking-widest ${textGlowStyle}`}>
        Compatibility Nexus
      </h3>
      
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        
        {/* Score Circle */}
        <div className="flex flex-col items-center">
          <div className={`relative w-32 h-32 flex items-center justify-center rounded-full border-4 ${ringStyle}`}>
            <span className={`text-4xl font-black ${textGlowStyle}`}>
              {score}%
            </span>
          </div>
          <span className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">Match Affinity</span>
        </div>

        {/* Risk Status */}
        <div className="flex flex-col items-center text-center max-w-[200px]">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3">Calculated Risk Profile</span>
          <div className={`px-6 py-2 rounded-full text-lg font-black tracking-wide ${pulseStyle}`}>
            {riskLevel} RISK
          </div>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed font-medium">
            Estimated biological synchronization heuristic. Pending final physician approval before procedure initiation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ResultCard;
