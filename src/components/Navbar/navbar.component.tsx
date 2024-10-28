'use client'

import "./style.scss";
import { Button } from "@/components/Button/button.component";
import { TypeButton } from "@/components/Button/interfaces";
import { NavbarPros } from "./interface";

export const Navbar: React.FC<NavbarPros> = ({
  className = ''
}) => {
  const classButton = 'uppercase border-r-2 border-white text-lg hover:text-light-gray';

  return (
    <nav
      id="nav-fullscreen"
      className={className}
    >
      <Button
        type={TypeButton.button}
        disabled={false}
        className={classButton}
      > Sou Desenvolvedora Fullstack
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className={classButton}
      > Projetos
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className={classButton}
      > Experiência
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className={classButton}
      > soft skills
      </Button>
      <Button
        type={TypeButton.button}
        disabled={false}
        className="uppercase text-lg hover:text-light-gray"
      > Contato
      </Button>
    </nav>
  );
};