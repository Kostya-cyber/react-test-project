import "./Slider.css";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrow-right.svg";
import { ReactComponent as LeftRight } from "../../assets/svg/arrow-left.svg";

export const Slider: React.FC = () => {
  return (
    <div className="slider_container">
      <div className="slider">
        <LeftRight />
        <ArrowRight />
      </div>
    </div>
  );
};
