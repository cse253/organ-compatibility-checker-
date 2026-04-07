import { useState, useEffect } from 'react';
import ResultCard from './ResultCard';

const CompatibilityDashboard = () => {
  const [selectedDonor, setSelectedDonor] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [result, setResult] = useState(null);
  const [isComputing, setIsComputing] = useState(false);
  const [donors, setDonors] = useState([]);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [donorsRes, recipientsRes] = await Promise.all([
          fetch('http://localhost:5000/api/donors'),
          fetch('http://localhost:5000/api/recipients')
        ]);

        if (donorsRes.ok && recipientsRes.ok) {
          const donorsData = await donorsRes.json();
          const recipientsData = await recipientsRes.json();
          setDonors(donorsData);
          setRecipients(recipientsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback to defaults or empty if server is down
        setDonors([
          { id: 'd1', _id: 'd1', name: 'John Doe', bloodGroup: 'O+', organ: 'Kidney' },
          { id: 'd2', _id: 'd2', name: 'Alice Smith', bloodGroup: 'A-', organ: 'Liver' },
        ]);
        setRecipients([
          { id: 'r1', _id: 'r1', name: 'Jane Smith', bloodGroup: 'A+', requiredOrgan: 'Kidney', severity: 'High' },
          { id: 'r2', _id: 'r2', name: 'Bob Johnson', bloodGroup: 'O+', requiredOrgan: 'Liver', severity: 'Medium' },
        ]);
      }
    };

    fetchData();
  }, []);

  const handleCompute = () => {
    if (!selectedDonor || !selectedRecipient) {
      alert("Please select both a donor and a recipient to compute compatibility.");
      return;
    }

    setIsComputing(true);
    // Simulate network request/processing delay
    setTimeout(() => {
      // Dummy logic for prototype demonstration
      const score = Math.floor(Math.random() * (99 - 40 + 1) + 40);
      let riskLevel = 'High';
      if (score > 85) riskLevel = 'Low';
      else if (score > 60) riskLevel = 'Medium';

      setResult({ score, riskLevel });
      setIsComputing(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto mt-16 p-8 sm:p-12 bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-indigo-500/10 blur-[80px] pointer-events-none"></div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">Compatibility Matcher</h2>
        <p className="text-slate-500 mt-3 text-lg font-medium">Select a donor and recipient to initialize the synchronization algorithm.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 relative z-10">
        {/* Donor Selection Panel */}
        <div className="bg-slate-50/80 p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur-xl">
          <label className="flex items-center gap-2 text-sm font-bold text-indigo-600 mb-4 uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            Donor Identity
          </label>
          <select 
            className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 bg-white shadow-sm appearance-none cursor-pointer transition-colors hover:bg-slate-50"
            value={selectedDonor}
            onChange={(e) => {
              setSelectedDonor(e.target.value);
              setResult(null);
            }}
          >
            <option value="" className="bg-white">-- Select Registered Donor --</option>
            {donors.map(d => (
              <option key={d.id} value={d.id} className="bg-white">{d.name} ({d.bloodGroup} | {d.organ})</option>
            ))}
          </select>
        </div>

        {/* Recipient Selection Panel */}
        <div className="bg-slate-50/80 p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur-xl">
          <label className="flex items-center gap-2 text-sm font-bold text-fuchsia-600 mb-4 uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></div>
            Recipient Identity
          </label>
          <select 
            className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-700 bg-white shadow-sm appearance-none cursor-pointer transition-colors hover:bg-slate-50"
            value={selectedRecipient}
            onChange={(e) => {
              setSelectedRecipient(e.target.value);
              setResult(null);
            }}
          >
            <option value="" className="bg-white">-- Select Waitlisted Patient --</option>
            {recipients.map(r => (
               <option key={r.id} value={r.id} className="bg-white">{r.name} ({r.bloodGroup} | {r.requiredOrgan})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Compute Action */}
      <div className="flex justify-center my-10 relative z-10">
        <button 
          onClick={handleCompute}
          disabled={isComputing}
          className={`group relative flex items-center justify-center px-10 py-5 rounded-full text-white font-black text-lg transition-all duration-500 overflow-hidden shadow-xl ${isComputing ? 'bg-slate-400 cursor-wait' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 hover:shadow-indigo-500/40'}`}
        >
          {/* Button Glow Background */}
          {!isComputing && <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
          
          <span className="relative z-10 flex items-center gap-3 tracking-wide">
            {isComputing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Matrix...
              </>
            ) : (
              <>
                Execute Synchronization <span className="text-yellow-300">⚡</span>
              </>
            )}
          </span>
        </button>
      </div>

      {/* Display Results */}
      {result && !isComputing && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
          <ResultCard score={result.score} riskLevel={result.riskLevel} />
        </div>
      )}
    </div>
  );
};

export default CompatibilityDashboard;
