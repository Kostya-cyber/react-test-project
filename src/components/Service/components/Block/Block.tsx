import { ReactComponent as Circle } from "../../../../assets/svg/circle.svg";
import "./Block.css";

export interface BlockParameters {
  image: string;
  title: string;
  description: string;
}

export const Block: React.FC<BlockParameters> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="block_container">
      <div>
        <Circle></Circle>
      </div>
      <div className="block_content">
        <div>Custom Design</div>
        <div className="block_description">
          Curabitur vestibulum eget mauris quis laoreet. Phasellus in
          quamlaoreet, viverra lacus ut, ultrices velit.
        </div>
      </div>
    </div>
  );
};
