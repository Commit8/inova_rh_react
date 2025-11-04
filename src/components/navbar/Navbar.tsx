import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-5 bg-[#031D40] text-[#F3F5F6] shadow-md shadow-[#01B18B]/20">
      <div className="container flex justify-between text-lg mx-8">
       
        
        <Link 
          to="/home"
          className="flex items-center space-x-2 text-3xl font-extrabold text-[#01B18B] tracking-wide"
        >
          <img
            src="https://i.postimg.cc/xTwGDWWk/inova-RH-azivs.png"
            alt="Logo InovaRH"
            className="w- h-8 mr-2"
         />
          Inova<span className="text-slate-300">RH</span>
        </Link>

        <div className="flex gap-8 items-center">
           <Link to="/home" className="hover:text-[#01B18B] transition-colors">Home</Link>
           <Link to="/sobre" className="hover:text-[#01B18B] transition-colors">Sobre</Link>
           <Link to="/produto" className="hover:text-[#01B18B] transition-colors">Produto</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
