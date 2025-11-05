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
            className="w-full bg-[#031D40] text-white text-sm py-6"
        >
            <div className="max-w-full mx-auto flex items-center justify-between px-6" >
                {/* "max-w-full mx-auto flex items-center justify-between px-6" */}
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="Logo Commit8"
                        className="w-9 h-9 object-contain"
                    />
                    <p className="font-bold text-base">
                        InovaRH | Copyright: Commit8 {data}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="font-bold text-base">Venha nos conhecer</p>

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