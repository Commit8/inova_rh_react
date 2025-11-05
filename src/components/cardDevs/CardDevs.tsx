/* eslint-disable prefer-const */
import { GithubLogoIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

interface CardPDevsProps {
  bg: string;
  foto: string;
  nome: string;
  descricao: string;
  link: string;
}

function CardDevs(cardDev: CardPDevsProps) {
  let component: ReactNode;
  let cor: string;
  cor = cardDev.bg;

  switch (cor) {
    case "azul":
      component = (
        <div className="bg-[#031D40] flex flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="" />
          </div>
          <div>
            {" "}
            <h2>{cardDev.nome}</h2>
            <h3 className="text-[#01B18B]">Desenvolvedor</h3>
            <br />
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-10 duration-500"
              />
            </a>
          </div>
        </div>
      );
      break;

    case "azuver":
      component = (
        <div className="bg-[#145764] flex flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="" />
          </div>
          <div>
            {" "}
            <h2>{cardDev.nome}</h2>
            <h3 className="text-[#01B18B]">Desenvolvedor</h3>
            <br />
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-10 duration-500"
              />
            </a>
          </div>
        </div>
      );
      break;

    case "verazu":
      component = (
        <div className="bg-[#00A597] flex flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="" />
          </div>
          <div>
            {" "}
            <h2>{cardDev.nome}</h2>
            <h3 className="text-[#031D40]">Desenvolvedor</h3>
            <br />
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-10 duration-500"
              />
            </a>
          </div>
        </div>
      );
      break;

    case "verde":
      component = (
        <div className="bg-[#01B18B] flex flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="" />
          </div>
          <div>
            {" "}
            <h2>{cardDev.nome}</h2>
            <h3 className="text-[#031D40]">Desenvolvedor</h3>
            <br />
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-10 duration-500"
              />
            </a>
          </div>
        </div>
      );
      break;
  }
  return <>{component}</>;
}

export default CardDevs;
