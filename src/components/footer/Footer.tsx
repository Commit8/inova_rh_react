import {
  GithubLogoIcon,
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";
import logo from "../../assets/commit8logo.png";
import type { ReactNode } from "react";

function Footer() {
  const data = new Date().getFullYear();

  const component: ReactNode = (
    <div
      className="flex flex-col items-center justify-center text-white py-6"
      style={{ backgroundColor: "#031D40" }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={logo}
          alt="Logo Commit8"
          className="w-12 h-12 object-contain"
        />
        <p className="text-xl font-inter font-bold">InovaRH | Copyright: Commit8 {data}</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-base font-inter font-semibold mb-2">Venha nos conhecer</p>
        <div className="flex gap-3">
          <a href="https://github.com/Commit8" target="_blank" rel="noreferrer">
            <GithubLogoIcon
              size={40}
              weight="bold"
              className="text-white hover:text-withe/70 transition-colors"
            />
          </a>

          <a
            href="https://instagram.com/commit8"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogoIcon
              size={40}
              weight="bold"
              className="text-white hover:text-white/70 transition-colors"
            />
          </a>

          <a href="mailto:commit8@email.com" target="_blank" rel="noreferrer">
            <EnvelopeSimpleIcon
              size={40}
              weight="bold"
              className="text-white hover:text-white/70 transition-colors"
            />
          </a>
        </div>
      </div>
    </div>
  );

  return <>{component}</>;
}

export default Footer;
