import { Button } from "@/components/button.component";
import "./globals.scss";
import { TypeButton } from "@/components/interfaces";
import { Metadata } from "next";
import Logo  from "../../public/images/logo.svg";

export const metadata: Metadata = {
  title: "Ellen Morganna",
  description: "Web Development Profissinal",
};

export default function RootLayout({ }: Readonly<{}>) {
  return (
    <html lang="pt">
      <body className="container bg-medium-gray mx-auto">
        <header className="text-center border-t-4 border-r-4 border-l-4 border-white py-10">
          <div className="inline-block">
            <Logo className="logo" />
            <h1 className="text-sm name-logo">Ellen Morganna</h1>
          </div>
          <nav
            id="nav-fullscreen"
            className="bg-dark-gray text-white text-center size-full py-4"
          >
            <Button
              type={TypeButton.button}
              disabled={false}
              className=""
            > Sou Desenvolvedora Fullstack
            </Button>
            <Button
              type={TypeButton.button}
              disabled={false}
              className=""
            > Sou Desenvolvedora Fullstack
            </Button>
            <Button
              type={TypeButton.button}
              disabled={false}
              className=""
            > Projetos
            </Button>
            <Button
              type={TypeButton.button}
              disabled={false}
              className=""
            > Experiência
            </Button>
            <Button
              type={TypeButton.button}
              disabled={false}
              className=""
            > soft skills
            </Button>
            <Button
              type={TypeButton.button}
              disabled={false}
              className=""
            > Contato
            </Button>
          </nav>
          <div className="icons border-b-4 border-white py-10">
            
          </div>
        </header>
      </body>
    </html>
  );
}
