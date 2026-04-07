import { useState } from 'react';

const RecipientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    requiredOrgan: '',
    severity: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/recipients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Recipient successfully registered and synchronized with the matching system!');
        setFormData({ name: '', age: '', bloodGroup: '', requiredOrgan: '', severity: '' });
      } else {
        const data = await response.json();
        alert(`Error: ${data.message || 'Failed to register recipient'}`);
      }
    } catch (error) {
      console.error('Error registering recipient:', error);
      alert('Network error. Is the backend server running?');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-10 bg-white/60 backdrop-blur-3xl border border-slate-200 rounded-[2rem] shadow-xl shadow-slate-200/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-300/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="mb-10 border-b border-slate-200 pb-6 text-left relative z-10">
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600 tracking-tight">Recipient Registration</h2>
        <p className="text-slate-500 mt-2 font-medium">Enter the specific biological requirements for a waitlisted patient.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-fuchsia-600 mb-2 uppercase tracking-widest">Full Name</label>
            <input 
              type="text" 
              name="name"
              required 
              onChange={handleChange}
              className="w-full px-5 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none text-slate-800 placeholder-slate-400 transition-all shadow-sm" 
              placeholder="e.g., Jane Smith" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-fuchsia-600 mb-2 uppercase tracking-widest">Age</label>
            <input 
              type="number" 
              name="age"
              required 
              onChange={handleChange}
              className="w-full px-5 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none text-slate-800 placeholder-slate-400 transition-all shadow-sm" 
              placeholder="45" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-fuchsia-600 mb-2 uppercase tracking-widest">Blood Group</label>
            <select name="bloodGroup" required onChange={handleChange} className="w-full px-5 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none text-slate-800 appearance-none cursor-pointer transition-all shadow-sm">
              <option value="" className="bg-white">Select Blood Group</option>
              <option value="A+" className="bg-white">A+</option>
              <option value="A-" className="bg-white">A-</option>
              <option value="B+" className="bg-white">B+</option>
              <option value="B-" className="bg-white">B-</option>
              <option value="AB+" className="bg-white">AB+</option>
              <option value="AB-" className="bg-white">AB-</option>
              <option value="O+" className="bg-white">O+</option>
              <option value="O-" className="bg-white">O-</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-fuchsia-600 mb-2 uppercase tracking-widest">Required Organ</label>
            <select name="requiredOrgan" required onChange={handleChange} className="w-full px-5 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none text-slate-800 appearance-none cursor-pointer transition-all shadow-sm">
              <option value="" className="bg-white">Select Organ</option>
              <option value="Kidney" className="bg-white">Kidney</option>
              <option value="Liver" className="bg-white">Liver</option>
              <option value="Heart" className="bg-white">Heart</option>
              <option value="Lung" className="bg-white">Lung</option>
              <option value="Pancreas" className="bg-white">Pancreas</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-fuchsia-600 mb-2 uppercase tracking-widest">Severity Level</label>
          <select name="severity" required onChange={handleChange} className="w-full px-5 py-3 bg-white/80 border border-slate-200 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none text-slate-800 appearance-none cursor-pointer transition-all shadow-sm">
            <option value="" className="bg-white">Select Severity</option>
            <option value="Low" className="bg-white">Low - Elective</option>
            <option value="Medium" className="bg-white">Medium - Required soon</option>
            <option value="High" className="bg-white">High - Urgent</option>
            <option value="Critical" className="bg-white">Critical - Life saving immediately</option>
          </select>
        </div>

        <div className="pt-6">
          <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-black tracking-wide py-4 px-4 rounded-xl transition-all duration-300 shadow-md shadow-fuchsia-600/30 hover:shadow-lg hover:shadow-fuchsia-600/40 transform hover:-translate-y-1">
            Submit Recipient Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipientRegistrationForm;
