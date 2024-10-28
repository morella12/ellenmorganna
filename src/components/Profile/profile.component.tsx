import Image from "next/image";

export default function RootLayout({ }: Readonly<{}>) {
  return (
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
        <Image src="/images/notebook.jpg" width={250} height={250} alt="Pictura of th author" />
        <Image src="/images/author.jpg" width={250} height={250} alt="Pictura of th author" />
        <Image src="/images/vscode-code.jpg" width={250} height={250} alt="Pictura of th author" />
      </div>
    </div>
  );
}