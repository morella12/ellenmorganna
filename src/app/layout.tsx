import "./globals.scss";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar/navbar.component";
import Logo from "../../public/images/logo.svg";
import cochetesAbre from "../../public/images/conchetesAbre.png";
import folhasVerdes from "../../public/images/folhasVerdes.png";
import ellenMorganna from "../../public/images/ellenMorganna.png";
import asteristicoGreen from "../../public/images/asteristicoGreen.png";
import asteristicoPink from "../../public/images/asteristicoPink.png";
import Image from "next/image";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Ellen Morganna",
  description: "Web Development Profissinal",
};

export default function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { lang: string } }>) {
  return (
    <html lang={params.lang}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Ellen Morganna Fullstack Developer</title>
        <meta name="description" content="Web Development Profissinal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Ellen Morganna, Web Developer, Freelance Web Developer, Remote Fullstack Developer, Fullstack Developer for Hire, Web Application Development, SaaS Development, E-commerce Development, Scalable Web Applications, Cloud (AWS, Azure), API Development, Open Source Contributor, Agile, DevOps, App Developer, Frontend, Backend, Fullstack, React.js, React Native, Next.js, Node.js, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Sass, TailwindCSS, RESTful API, SQL, NoSQL" />
        <meta name="author" content="Ellen Morganna" />
      </Head>
      <body className="flex flex-col items-start rounded mx-4">
        <Image className="folhas-rosas float-left absolute" src={folhasVerdes} alt="Folhas Rosas" width={150} height={150} />
        <Image src={cochetesAbre} className="conchetes mt-11 ml-1" alt="Conchetes abre"/>
        <header className="flex flex-col items-start justify-start ml-3.5 w-max">
          <Navbar className="w-max mb-10"/>            
          <Logo className="logo w-1/3 h-1/3" width={0} height={0}/>
          <h1 className="name-logo flex flex-row-reverse items-start justify-start yellow ml-10">
            Ellen Morganna
          </h1>
        </header>
        <div className="relative text-center mt-50 w-full">
          <p className="text-init-header">
            Transformando <span className="destaque">café</span> em <span className="destaque">código</span> e <span className="destaque">ideias</span> em realidade digital
          </p>
          <div className="profile-image flex flex-col items-center justify-center">
            <Image className="ellen-morganna" src={ellenMorganna} alt="Ellen Morganna" width={250} height={250} />
            <span  id="web">Web Developer</span>
            <span  id="app">App Developer</span>
          </div>
          <div className="bar w-full mt-10"></div>
          <div className="intro-bar ">
            <Image className="asteristico-green" src={asteristicoGreen} alt="Asterístico Green" width={20} height={20} />
            <Image className="asteristico-pink" src={asteristicoPink} alt="Asterístico Pink" width={20} height={20} />
          </div>
        </div>
      </body>
    </html>
  );
}
