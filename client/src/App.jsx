import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import DonorRegistrationForm from './components/donor/DonorRegistrationForm';
import RecipientRegistrationForm from './components/recipient/RecipientRegistrationForm';
import CompatibilityDashboard from './components/matching/CompatibilityDashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-500/20 overflow-hidden relative">
      {/* Dynamic Mid-tone Background */}
      <div className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] z-[-1] bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_40%)] animate-spin-[120s_linear_infinite]"></div>
      
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-10 w-full px-4 text-center z-10 pt-24">
        <Routes>
          <Route path="/" element={
            <div className="relative isolate px-6 pt-10">
              <div className="mx-auto max-w-3xl">
                <div className="text-center">
                  <div className="mb-8 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold leading-6 text-indigo-700 ring-1 ring-indigo-200 bg-white/80 backdrop-blur-md shadow-sm">
                    System Online & Verified
                  </div>
                  <h1 className="text-5xl font-black tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 pb-2 drop-shadow-sm">
                    System Dashboard
                  </h1>
                  <p className="mt-8 text-lg md:text-xl leading-8 text-slate-600 font-medium">
                    Next-generation biological synchronization interface. Select a module below to proceed.
                  </p>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Link to="/donor-registration" className="group p-8 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-100 to-indigo-50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-blue-600">👤</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg tracking-wide">Register Donor</h3>
                  <p className="text-sm text-slate-500 mt-3 font-medium">Log a new organ donor into the global system matrix.</p>
                </Link>
                
                <Link to="/recipient-registration" className="group p-8 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-fuchsia-100 to-pink-50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-fuchsia-600">🏥</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg tracking-wide">Register Recipient</h3>
                  <p className="text-sm text-slate-500 mt-3 font-medium">Add a patient to the waitlist and define their biological requirements.</p>
                </Link>

                <Link to="/match" className="group p-8 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-100 to-violet-50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-indigo-600">⚡</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg tracking-wide">Compatibility Matcher</h3>
                  <p className="text-sm text-slate-500 mt-3 font-medium">Initialize the correlation algorithm to find compatible matches.</p>
                </Link>
              </div>

            </div>
          } />
          <Route path="/donor-registration" element={<DonorRegistrationForm />} />
          <Route path="/recipient-registration" element={<RecipientRegistrationForm />} />
          <Route path="/match" element={<CompatibilityDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
