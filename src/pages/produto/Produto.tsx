function Produto() {
  return (
    <>
      <div className="bg-white-900 flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
              InovaRH — A evolução na gestão de pessoas começa aqui
            </h2>
            <p className="text-xl">
              O InovaRH é muito mais do que um sistema de cadastro de Recursos
              Humanos, é uma solução inteligente criada para modernizar e
              simplificar a forma como as empresas gerenciam seus talentos.
            </p>
          </div>
          <div className="flex justify-center ">
            <img
              src="https://i.postimg.cc/ZY1Swdmc/Company-amico-1.png"
              alt="Imagem Página Soluções"
              className="w-2/3 py-5"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#00A597] flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex justify-center ">
            <img
              src="https://i.postimg.cc/zftCN5XD/Selecting-team-amico-1.png"
              alt="Imagem 2 Página Soluções"
              className="w-2/3 my-7"
            />
          </div>
          <div className="flex flex-col gap-4 justify-center py-7 pb-12">
            <h2 className="text-5xl font-bold">Por que escolher o InovaRH?</h2>
            <p className="text-xl">
              O InovaRH é muito mais do que um sistema de cadastro de Recursos
              Humanos, é uma solução inteligente criada para modernizar e
              simplificar a forma como as empresas gerenciam seus talentos.
            </p>
            <p className="text-xl">
              Desenvolvimento continuo: acompanhe o crescimento da sua equipe e
              fortaleça a cultura organizacional
            </p>
            <div className="flex flex-col gap-4 justify-center py-4">
              <h2 className="text-5xl font-bold">
                Transforme sua gestão de talentos
              </h2>
              <p className="text-xl">
                Dê um passo à frente e invista em uma solução que entende
                pessoas tanto quanto entende tecnologia.
              </p>
              <p className="text-xl">
                O InovaRH é o parceiro ideal para empresas que desejam unir eficiência
                operacional e valorização humana em um só sistema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produto;
