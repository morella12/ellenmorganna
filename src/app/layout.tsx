import "./globals.scss";
import { Metadata } from "next";
import Logo from "../../public/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "@/components/Navbar/navbar.component";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Ellen Morganna",
  description: "Web Development Profissinal",
};

export default function RootLayout({ }: Readonly<{}>) {
  return (
    <html lang="pt">
      <body className="container bg-medium-gray mx-auto mt-10">
        <header className="text-center border-t-4 border-r-4 border-l-4 border-white py-10 h-screen">
          <div className="inline-block">
            <Logo className="logo" />
            <h1 className="text-sm name-logo flex flex-row-reverse">Ellen Morganna</h1>
          </div>
          <Navbar className="" />
          <div className="icons flex flex-row-reverse">
            <FontAwesomeIcon className="size-9" icon={faLinkedin} />
            <FontAwesomeIcon className="size-9" icon={faWhatsapp} />
            <FontAwesomeIcon className="size-9	" icon={faGithub} />
            <FontAwesomeIcon className="size-9" icon={faEnvelope} />
          </div>
        </header>
        <Navbar className="hidden md:block" />
        <div id="ellen-morganna" className="container text-pretty columns-2">
          <div id="profile">
            <h2 className="uppercase w-full"> Sou Desenvolvedora Fullstack </h2>
            <p>
              Minha jornada na tecnologia começou com um curso de programação que despertou minha paixão
              por essa área dinâmica. Desde então, mergulhei de cabeça no universo da tecnologia e
              nunca mais olhei para trás. Ao longo da minha trajetória, tive o privilégio de participar de
              três maratonas de programação e três Hacktowns, onde minha equipe sempre conquistou um lugar entre as
              três primeiras. Essas experiências não apenas aprimoraram minhas habilidades técnicas,
              mas também fortaleceram minha capacidade de trabalhar em equipe e encontrar soluções inovadoras sob pressão.
            </p>
          </div>
          <div id="photos" className="w-full">
            <Image src="/images/notebook.jpg" width={250} height={250} alt="Pictura of th author"/>
            <Image src="/images/author.jpg" width={250} height={250} alt="Pictura of th author"/>
            <Image src="/images/vscode-code.jpg" width={250} height={250} alt="Pictura of th author" />
          </div>
        </div>
        <div id="resume">
          <h2 className="uppercase text-xl">Experiência</h2>
          <div className="container">
            <div id="jobs">
              <h3 className="text-sm">Hacktown #3 - Fullstack Developer</h3>
              <p className="text-sm">
                Hacktown é um evento de inovação e desenvolvimento de software, 
                onde pessoas se reúnem para trabalhar em projetos inovadores e 
                resolver problemas. Atualmente, estou participando da Hacktown #3, 
                onde estou desenvol
              </p>
            </div>
            <div>
              <Image src="/images/notebook-2.jpg" width={250} height={250} alt="Pictura of th author"/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
