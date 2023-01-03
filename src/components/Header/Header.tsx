import { ReactComponent as MySvg } from "../../assets/icons/logo.svg";
import "./Header.css";
import { Nav } from "./Nav";

export const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="header_component">
        <MySvg />
        <Nav />
      </div>
    </div>
  );
};
