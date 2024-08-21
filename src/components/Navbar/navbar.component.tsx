import "./style.scss";
import { Button } from "@/components/Button/button.component";
import { TypeButton } from "@/components/Button/interfaces";
import { NavbarPros } from "./interface";

export const Navbar: React.FC<NavbarPros> = ({
  onClick,
  children,
  disabled = false,
  className = ''
}) => {
  return (
    <nav
      id="nav-fullscreen"
      className="bg-dark-gray size-full flex flex-auto py-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
    >
      <Button
        type={TypeButton.button}
        disabled={false}
        className="uppercase"
      > Sou Desenvolvedora Fullstack
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className="uppercase"
      > Sou Desenvolvedora Fullstack
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className="uppercase"
      > Projetos
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className="uppercase"
      > Experiência
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className="uppercase"
      > soft skills
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className="uppercase"
      > Contato
      </Button>
    </nav>
  );
};