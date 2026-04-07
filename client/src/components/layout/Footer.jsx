const Footer = () => {
  return (
    <footer className="bg-white/50 border-t border-slate-200 py-6 backdrop-blur-md z-10 w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-2">
        <p className="text-sm text-slate-500 font-medium tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Virtual Organ Compatibility Matrix. All system rights fully synchronized.
        </p>
        <p className="text-xs text-indigo-400/80 font-bold uppercase tracking-widest">
          Classified Demo Construct
        </p>
      </div>
    </footer>
  );
};

export default Footer;
