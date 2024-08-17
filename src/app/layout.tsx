import { Button } from "@/components/button.component";
import "./globals.css";
import { TypeButton } from "@/components/interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ellen Morganna",
  description: "Web Development Profissinal",
};

export default function RootLayout({}: Readonly<{}>) {
  return (
    <html lang="pt">
      <body className="">
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
      </body>
    </html>
  );
}
