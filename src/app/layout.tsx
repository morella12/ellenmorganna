import "./globals.scss";
import { Metadata } from "next";
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
        <link rel="icon" href="../../public/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Ellen Morganna, Web Developer, Freelance Web Developer, Remote Fullstack Developer, Fullstack Developer for Hire, Web Application Development, SaaS Development, E-commerce Development, Scalable Web Applications, Cloud (AWS, Azure), API Development, Open Source Contributor, Agile, DevOps, App Developer, Frontend, Backend, Fullstack, React.js, React Native, Next.js, Node.js, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Sass, TailwindCSS, RESTful API, SQL, NoSQL" />
        <meta name="author" content="Ellen Morganna" />
      </Head>
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
                <Image className="asteristico-pink" src={asteristicoPink} alt="Asterístico Pink" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
