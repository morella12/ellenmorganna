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
          onClick={(event) => alert('Oi')}
          type={TypeButton.button}
          disabled={false}
          className="fixed bottom-0 right-0 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md"
        > Sou Desenvolvedora Fullstack
        </Button>
        <Button
          onClick={(event) => alert('Oi')}
          type={TypeButton.button}
          disabled={false}
          className="fixed bottom-0 right-0 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md"
        > Sou Desenvolvedora Fullstack
        </Button>
        <Button
          onClick={(event) => alert('Oi')}
          type={TypeButton.button}
          disabled={false}
          className="fixed bottom-0 right-0 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md"
        > Projetos
        </Button>
        <Button
          onClick={(event) => alert('Oi')}
          type={TypeButton.button}
          disabled={false}
          className="fixed bottom-0 right-0 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md"
        > Experiência
        </Button>
        <Button
          onClick={(event) => alert('Oi')}
          type={TypeButton.button}
          disabled={false}
          className="fixed bottom-0 right-0 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md"
        > soft skills
        </Button>
        <Button
          onClick={(event) => alert('Oi')}
          type={TypeButton.button}
          disabled={false}
          className="fixed bottom-0 right-0 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md"
        > Contato
        </Button>
      </body>
    </html>
  );
}
