import CardDevs from "../../components/cardDevs/CardDevs";

function Sobre() {
  return (
    <>
      {" "}
      <div className="container"></div>
      <div className="bg-[linear-gradient(135deg,#0B4F50_0%,#137D7D_40%,#17C8C0_80%,#B2FFF6_100%)] text-black">
        <h2 className="text-5xl font-bold text-center pt-10">Quem somos</h2>
        <div className="flex justify-center">
          <div className="container grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/0QXJHP2y/logo-maria-gasolina-removebg-preview.png"
                alt="Logo da Commit8"
                className="w-full p-0 m-0"
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-3xl font-semibold pb-8 text-center">
                <span className="text-[#011e6d]">Commit8 </span> é um coletivo
                formado por oito desenvolvedores em início de carreira, unidos
                por um propósito comum: aprender, crescer e construirtecnologia
                com propósito. Acreditamos que cada linha de código pode
                transformar ideias em impacto real e é com essa visão que unimos
                nossas habilidades e criatividade para desenvolver soluções
                inovadoras, colaborativas e acessíveis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0E294C] flex justify-center text-center pt-2">
        <div className="container flex flex-col-reverse lg:grid lg:grid-cols-2 text-[#5ad4ca] text-xl font-semibold">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-3xl font-bold text-white py-4 pt-6">
              No que acreditamos
            </h2>
            <p className="pb-10 text-xl">
              Valorizamos o trabalho em equipe, o aprendizado contínuo e a
              diversidade de experiências que cada integrante traz. Juntos,
              exploramos diferentes áreas da tecnologia do front-end ao
              back-end, do design de interfaces à arquitetura de sistemas sempre
              buscando aprimorar nossas práticas e contribuir com a comunidade
              dev.
              <br />
              Nosso nome, Commit8, simboliza nosso compromisso duplo: com o
              código e com as pessoas. Cada commit que fazemos representa não
              apenas uma contribuição técnica, mas também um passo em direção ao
              nosso crescimento coletivo
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.postimg.cc/xdmrN7vt/Team-page-amico.png"
              alt="inlustração equipe"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="text-3xl font-bold py-4 text-center">
          <h1>
            <span className="text-[#00A597]">Coletivo</span> Commit8
          </h1>
          <p className="text-[#00A597]"> código, colaboração e propósito.</p>
          <div
            className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-4 gap-4"
          >
            <CardDevs
              bg="azul"
              foto="https://i.postimg.cc/3wjsZqRw/IMG-3370.png"
              nome="Pedro"
              descricao="Amanha nois escreve"
              link="https://github.com/pe3dru"
            />
            <CardDevs
              bg="azuver"
              foto="https://i.postimg.cc/mDpBQnpf/AP1Gcz-P13BKj8DKMb-Vd7Wv5-MVlqh-Pyh-b-MZ19v4e-Snwsc6Be-Kligbl-IA7ar-EAw694-h925-s-no-gm.png"
              nome="Dandara"
              descricao="Amanha nois escreve"
              link="https://github.com/dan-olivnas"
            />
            <CardDevs
              bg="verazu"
              foto="https://i.postimg.cc/JnHM5qfw/IMG-20201009-235956-286.png"
              nome="Laish"
              descricao="Amanha nois escreve"
              link="https://github.com/L4ish"
            />
            <CardDevs
              bg="verde"
              foto="https://i.postimg.cc/0QS1wNSv/IMG-20250315-013235-785.png"
              nome="Gabriella"
              descricao="Amanha nois escreve"
              link="https://github.com/gabiparra05"
            />
            <CardDevs
              bg="azul"
              foto="https://i.postimg.cc/QxmCt6sk/foto-apresentacao.png"
              nome="Gabriel"
              descricao="Amanha nois escreve"
              link="https://github.com/gabrielmessias-dev"
            />
            <CardDevs
              bg="azuver"
              foto="https://i.postimg.cc/NGpv2Z9p/1746464117666-1.png"
              nome="Akanni"
              descricao="Amanha nois escreve"
              link="https://github.com/Akanni-Silva"
            />
            <CardDevs
              bg="verazu"
              foto="https://i.postimg.cc/QxTSZTrR/perfil-Linkedin.png"
              nome="Janielle"
              descricao="Amanha nois escreve"
              link="https://github.com/JanielleOliveira"
            />
            <CardDevs
              bg="azuver"
              foto="https://i.postimg.cc/2jqg33DH/20230407-153224.png"
              nome="Vitor"
              descricao="Amanha nois escreve"
              link="https://github.com/DisturbedMoss"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
