import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <span className="text-white text-lg">🫀</span>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 group-hover:text-slate-950 transition-colors">
                VOC
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="pr-4 border-r border-slate-200 mr-2">
              <Link to="/" className="relative group inline-flex items-center justify-center px-6 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-md shadow-indigo-200 bg-gradient-to-tr from-blue-600 to-indigo-600 border-blue-700 text-white rounded-full transition-all duration-200 hover:from-blue-500 hover:to-indigo-500 hover:-translate-y-0.5">
                <span className="text-sm font-bold tracking-wide">Dashboard</span>
              </Link>
            </div>
            <Link to="/donor-registration" className="text-sm font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50/80 px-4 py-2 rounded-full transition-all duration-200">
              Register Donor
            </Link>
            <Link to="/recipient-registration" className="text-sm font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50/80 px-4 py-2 rounded-full transition-all duration-200">
              Register Recipient
            </Link>
            <Link to="/match" className="text-sm font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50/80 px-4 py-2 rounded-full transition-all duration-200">
              Matching Hub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
