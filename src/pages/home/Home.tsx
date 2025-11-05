import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-[linear-gradient(130deg,#00A597_0%,#f3f5f6_80%)] flex justify-center h-screen font-inter bg-cover bg-no-repeat">
        <div className="grid grid-cols-1 place-items-center overflow-hidden lg:grid-cols-2 w-full h-full text-black">
          <div className="flex flex-col gap-4 items-center justify-center p-15">
            <h2 className="text-3xl text-center lg:text-left lg:text-6xl font-bold text-shadow-lg/17">Simplifique a gestão de pessoas na sua <span className="text-[#f3f5f6]">empresa</span> </h2>

            <p className="text-center mt-8">
              O InovaRH é uma plataforma prática e intuitiva para gerenciar colaboradores e otimizar processos de Recursos Humanos.
            </p>

            <div className="flex justify-around gap-4 mt-4">
              <button className="border-2 bg-[#f3f5f6] text-[#031D40] px-4 py-3 hover:text-[#f3f5f6] hover:bg-[#145764] rounded-full shadow-lg shadow-[#031D40] text-xl">
                    <Link to='/produto'>Quero saber mais!</Link> 
                </button>
            </div>
          </div>
          <div className="flex rounded-full items-center flex-col justify-center">
            <img
              src="https://i.imgur.com/7MmjNh9.png"
              alt="Imagem Página Home"
              className="w-3/4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


