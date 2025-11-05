import { useState } from "react";
import { Link } from "react-router-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react";

function Navbar() {
  //para saber se o menu hamburguer está clicado ou não
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-full flex justify-center py-5 bg-[#031D40] text-[#F3F5F6] shadow-md shadow-[#01B18B]/20">
      <div className="container flex justify-between text-lg mx-8">
        {/* if ternario para garantir que a logo apareca ou não a depender do menu(true ou false) e sm:flex para fazer a logo aparecer mesmo com o menu true */}
        <Link
          to="/home"
          className={`flex items-center space-x-2 text-3xl font-extrabold text-[#01B18B] tracking-wide ${
            !isNavOpen ? "block" : "hidden"
          } sm:flex`}
        >
          <img
            src="https://i.postimg.cc/xTwGDWWk/inova-RH-azivs.png"
            alt="Logo InovaRH"
            className="w-8 h-8 mr-2"
          />
          Inova<span className="text-slate-300">RH</span>
        </Link>

        <div className="sm:hidden">
          {/*Esse é o menu hamburguer, 'prev' é o valor anterior contido no IsNavOpen. Quando é clicado inverte o valor contido em isNavOpen = !prev.*/}
          {/* if ternario para decidir o icone que aparecera */}
          <div
            className="cursor-pointer hover:text-[#01B18B] absolute top-0 right-0 px-6 py-6 z-11"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            {isNavOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
          </div>

          {/* DIV MENU */}
          {/*if ternario, decide quando mostrar o menu dependendo se estiver clicado(true) ou não(false) */}
          <div className={isNavOpen ? "mostraMenuNav" : "escondeMenuNav"}>
            <div className="flex flex-col gap-8">
              <Link
                to="/home"
                className="hover:text-[#01B18B] transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/sobre"
                className="hover:text-[#01B18B] transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                to="/produto"
                className="hover:text-[#01B18B] transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Soluções
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex gap-8 items-center ">
          <Link to="/home" className="hover:text-[#01B18B] transition-colors" onClick={() => setIsNavOpen(false)}>
            Home
          </Link>
          <Link to="/sobre" className="hover:text-[#01B18B] transition-colors" onClick={() => setIsNavOpen(false)}>
            Quem Somos
          </Link>
          <Link
            to="/produto"
            className="hover:text-[#01B18B] transition-colors"
            onClick={() => setIsNavOpen(false)}
          >
            Soluções
          </Link>
        </div>
      </div>

      {/* essas classes apareceram na 'DIV MENU' de acordo com o if ternario */}
      <style>
        {`
        .escondeMenuNav{
          display: none;
        }
        .mostraMenuNav{
          background: #031D40;
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }`}
      </style>
    </div>
  );
}

export default Navbar;
