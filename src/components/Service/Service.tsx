import { Block } from "./components/Block";
import "./Service.css";
import { Content } from "./components/Content";

export const Service: React.FC = () => {
  return (
    <div className="service_container">
      <div className="service_block">
        <Content />
      </div>
      <div className="service">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Block
            key={index}
            image="asdfasdf"
            description="asdfasdf"
            title="asdfasdfasdf"
          />
        ))}
      </div>
    </div>
  );
};
