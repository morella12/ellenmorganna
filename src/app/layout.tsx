import "./globals.scss";
import { Metadata } from "next";
import Logo from "../../public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Navbar } from "@/components/Navbar/navbar.component";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Ellen Morganna",
  description: "Web Development Profissinal",
};

export default function RootLayout({ }: Readonly<{}>) {
  return (
    <html lang="pt">
      <body className="bg-medium-gray mx-auto mt-10">
        <header className="relative text-center">
          <div className="flex flex-col items-center border-t-4 border-x-4 border-white rounded py-10 mx-10">
            <Image
              src={Logo}
              alt="Logo Ellen Morganna"
              width={300}
              height={171}
              className="mt-14"
            />
            <h1 className="name-logo flex flex-row-reverse mt-1 mb-12">Ellen Morganna</h1>
          </div>
          <Navbar className="menu-first-page content-center text-white grid grid-cols-5 gap-5 bg-dark-gray py-4 px-2 lg:px-8" />
          <div className="icons flex flex-row-reverse mx-11 mt-5">
            <a className="mx-1">
              <FontAwesomeIcon className="size-9" icon={faEnvelope} />
            </a>
            <a className="mx-1">
              <FontAwesomeIcon className="size-9" icon={faGithub} />
            </a>
            <a className="mx-1">
              <FontAwesomeIcon className="size-9" color="#25d366" icon={faWhatsapp} />
            </a>
            <a className="mx-1">
              <FontAwesomeIcon className="size-9" color="#0274b3" icon={faLinkedin} />
            </a>
          </div>
          <Navbar className="hamburger-menu sm:px-6 md:hidden lg:hidden xl:hidden 2xl:hidden" />
        </header>
      </body>
    </html>
  );
}
