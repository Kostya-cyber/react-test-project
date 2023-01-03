import { FC } from "react";
import { Header } from "../../components/Header";
import { Slider } from "../../components/Slider";
import { Service } from "../../components/Service";

export const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Service />
    </div>
  );
};
