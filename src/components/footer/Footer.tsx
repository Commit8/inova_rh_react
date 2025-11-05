import {
    EnvelopeSimpleIcon,
    GithubLogoIcon,
    InstagramLogoIcon,
} from "@phosphor-icons/react";
import logo from "../../assets/commit8logo.png";
import type { ReactNode } from "react";


function Footer() {
    const data = new Date().getFullYear();

    const component: ReactNode = (
        <div
            className="flex flex-col items-center justify-center text-white py-3"
            style={{ backgroundColor: "#031D40" }}
        >
            <div className="flex items-center gap-3 mb-3">
                <img
                    src={logo}
                    alt="Logo Commit8"
                    className="w-8 h-8 object-contain"
                />
                <p className="text-white-300 font-bold">
                    InovaRH | Copyright: Commit8 {data}
                </p>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-base font-inter font-semibold mb-2">
                    Venha nos conhecer
                </p>
                <div className="flex gap-3">
                    <a
                        href="https://github.com/Commit8"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubLogoIcon
                            size={30}
                            weight="bold"
                            className="transition-transform duration-300 hover:scale-125 hover:translate-x-1"
                        />
                    </a>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramLogoIcon
                            size={30}
                            weight="bold"
                            className="transition-transform duration-300 hover:scale-125 hover:translate-x-1"
                        />
                    </a>

                    <a
                        href="mailto:https://devteam01.js09@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <EnvelopeSimpleIcon
                            size={30}
                            weight="bold"
                            className="transition-transform duration-300 hover:scale-125 hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </div>
    );

    return <>{component}</>;
}

export default Footer;
