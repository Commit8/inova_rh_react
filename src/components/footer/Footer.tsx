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
        <footer
            className="w-full bg-[#031D40] text-white text-sm py-2"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Logo Commit8"
                        className="w-5 h-5 object-contain"
                    />
                    <p className="font-semibold">
                        InovaRH | Copyright: Commit8 {data}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <p className="font-semibold text-base">Venha nos conhecer</p>

                    <a
                        href="https://github.com/Commit8"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubLogoIcon
                            size={24}
                            weight="bold"
                            className="transition-transform duration-300 hover:scale-125"
                        />
                    </a>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramLogoIcon
                            size={24}
                            weight="bold"
                            className="transition-transform duration-300 hover:scale-125"
                        />
                    </a>

                    <a
                        href="mailto:devteam01.js09@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <EnvelopeSimpleIcon
                            size={24}
                            weight="bold"
                            className="transition-transform duration-300 hover:scale-125"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );

    return <>{component}</>;
}

export default Footer;