import "./globals.scss";
import { Metadata } from "next";
import Logo from "../../public/images/logo.svg";
import cochetesAbre from "../../public/images/conchetesAbre.png";
import folhasVerdes from "../../public/images/folhasVerdes.png";
import ellenMorganna from "../../public/images/ellenMorganna.png";
import asteristicoGreen from "../../public/images/asteristicoGreen.png";
import asteristicoPink from "../../public/images/asteristicoPink.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Navbar } from "@/components/Navbar/navbar.component";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ellen Morganna",
  description: "Web Development Profissinal",
};

export default function RootLayout({}: Readonly<{}>) {
  return (
    <html lang="pt">
      <body className="mx-auto mt-10">
        <div className="relative text-center">
          <Image className="folhas-rosas" src={folhasVerdes} alt="Folhas Rosas" width={150} height={150} />
          <div className="flex flex-col items-start rounded py-10 mx-10">
            <div className="flex flex-col fle items-start">
              <div className="conchetes-abre">
                <Image src={cochetesAbre} alt="Conchetes abre" width={40} height={40} />
              </div>
              <Logo
                className="logo"
                width={80}
                height={62}
                y={200}
                aria-label="Logo Ellen Morganna"
              />
              <h1 className="name-logo flex flex-row-reverse mb-12 pl-12">
                Ellen Morganna
              </h1>
              <p className="text-init-header">
                Transformando <span>café</span> em <span>código</span> e <span>ideias</span> em realidade digital
              </p>
              <div className="profile-image">
                <Image className="ellen-morganna" src={ellenMorganna} alt="Ellen Morganna" width={250} height={250} />
                <span className="plates">Web Developer</span>
                <span className="plates">App Developedr</span>
              </div>
              <div className="intro-bar ">
                <Image className="asteristico-green" src={asteristicoGreen} alt="Asterístico Green" width={20} height={20} />
                <Navbar className="content-center text-white grid grid-cols-3 gap-3" />
                <Image className="asteristico-pink" src={asteristicoPink} alt="Asterístico Pink" width={20} height={20} />
              </div>
            </div>
            {/* <Navbar className="content-center text-white grid grid-cols-5 gap-5" />
            <div className="icons flex flex-row-reverse">
              <a className="mx-1">
                <FontAwesomeIcon className="size-9" icon={faEnvelope} />
              </a>
              <a className="mx-1">
                <FontAwesomeIcon className="size-9" icon={faGithub} />
              </a>
              <a className="mx-1">
                <FontAwesomeIcon
                  className="size-9"
                  color="#25d366"
                  icon={faWhatsapp}
                />
              </a>
              <a className="mx-1">
                <FontAwesomeIcon
                  className="size-9"
                  color="#0274b3"
                  icon={faLinkedin}
                />
              </a>
            </div>
            <Navbar className="hamburger-menu sm:px-6 md:hidden lg:hidden xl:hidden 2xl:hidden" /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
