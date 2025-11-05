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
        <div className="bg-[#031D40] flex lg:flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center gap-2">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="" />
          </div>
          <div>
            {" "}
            <h2 className="text-3xl font-inter font-bold">{cardDev.nome}</h2>
            <h3 className="text-3xl font-inter font-bold" >Dev.</h3>
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-15 duration-500"
              />
            </a>
          </div>
        </div>
      );
      break;

    case "azuver":
      component = (
        <div className="bg-[#145764] flex lg:flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center gap-2">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="" />
          </div>
          <div>
            {" "}
            <h2 className="text-3xl font-inter font-bold">{cardDev.nome}</h2>
            <h3 className="text-3xl font-inter font-bold" >Dev.</h3>
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-15 duration-500"
              />
            </a>
          </div>
        </div>
      );
      break;

    case "verazu":
      component = (
        <div className="bg-[#00A597] flex lg:flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center gap-2">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="" />
          </div>
          <div>
            {" "}
            <h2 className="text-3xl font-inter font-bold">{cardDev.nome}</h2>
            <h3 className="text-3xl font-inter font-bold">Dev.</h3>
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-15 duration-500"
              />
            </a>
          </div>
        </div>
      );
      break;

    case "verde":
      component = (
        <div className="bg-[#01B18B] flex lg:flex-col rounded-3xl justify-center items-center mx-4 text-white my-6 p-6 text-center gap-2">
          <div>
            <img src={cardDev.foto} className="rounded-full pb-3" alt="Foto do Dev" />
          </div>
          <div>
            {" "}
            <h2 className="text-3xl font-inter font-bold" >{cardDev.nome}</h2>
            <h3 className="text-3xl font-inter font-bold">Dev.</h3>
            <p>{cardDev.descricao}</p>
            <a href={cardDev.link} target="_blank">
              <GithubLogoIcon
                size={35}
                weight="bold"
                className="mx-auto mt-6 hover:size-15 duration-500"
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
