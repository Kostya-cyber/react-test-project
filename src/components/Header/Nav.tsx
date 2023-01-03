import { FC } from "react";
import "./Header.css";

const naves = ["home", "services", "portfolio", "about", "contact"];

export const Nav: FC = () => {
  return (
    <nav className="nav_component">
      {naves.map((item, index) => (
        <div key={index}>
          <a href="/">{item}</a>
        </div>
      ))}
    </nav>
  );
};
