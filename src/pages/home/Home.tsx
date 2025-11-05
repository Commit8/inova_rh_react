import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-[linear-gradient(137deg,#00A597_0%,#ffffff_50%)] flex justify-center h-screen font-inter">
        <div className="grid grid-cols-2 w-full h-full text-black">
          <div className="flex flex-col gap-4 items-center justify-center p-15">
            <h2 className="text-5xl font-bold text-shadow-lg/17">Simplifique a gestão de pessoas na sua <span className="text-[#145764]">empresa</span> </h2>

            <p className="text-xl mt-8">
              O InovaRH é uma plataforma prática e intuitiva para gerenciar colaboradores e otimizar processos de Recursos Humanos.
            </p>

            <div className="flex justify-around gap-4 mt-8">
              <button className=" bg-[#031D40] text-white px-4 py-2 hover:bg-[#145764] rounded-full shadow-lg shadow-[#031D40]">
                    <Link to='/produto'>Quero saber mais!</Link> 
                </button>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center bg-white">
            <img
              src="https://i.imgur.com/nKl4Nsh.png"
              alt="Imagem Página Home"
              className="w-7/3"
            />
            <span className="font-inter text-[#031D40] text-7xl mt-4 pb-42 font-bold">inovaRH</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
