import Image from "next/image";

export default function RootLayout({ }: Readonly<{}>) {
  return (
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
  );
}