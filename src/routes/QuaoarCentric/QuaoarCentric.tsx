import { CSSProperties } from "react";
import Bulb from "./Svg/Bulb";
import "./QuaoarCentric.css";

const QuaoarCentric = () => {
  return (
    <div className=" px-5  max-w-screen-xl py-2 mx-auto grid">
      <div className=" text-center pb-6 mx-auto ">
        <h1 className="  text-2xl  font-bold">Quaoar Centric Layout Grid</h1>
        <p className=" max-w-[70ch]">
          Quaoar Centric Layout Grid" is a cutting-edge and user-centric grid
          system designed to provide a seamless and visually appealing layout
          for web applications
        </p>
      </div>
      <div className="wrapper">
        <Box
          Svg={Bulb}
          heading="Project Manager"
          para="Supervise projects, ensuring efficient timelines and code quality for optimal functionality."
          color="red"
          id="one"
        />
        <Box
          Svg={Bulb}
          heading="Development Lead"
          para="Lead the team to create robust solutions, emphasizing clean and maintainable code."
          color="green"
          id="two"
        />
        <Box
          Svg={Bulb}
          heading="Quality Assurance"
          para="Maintain high-quality standards, implementing thorough testing for reliable codebase."
          color="blue"
          id="three"
        />
        <Box
          Svg={Bulb}
          heading="Technical Architect"
          para="Design and oversee system architecture for scalable, flexible codebase."
          color="orange"
          id="four"
        />
      </div>
    </div>
  );
};

export default QuaoarCentric;

type BoxProps = {
  color?: CSSProperties["color"];
  heading: string;
  para: string;
  Svg: () => JSX.Element;
  id: string;
};
const Box = ({ Svg, id, heading, para, color = "red" }: BoxProps) => {
  const dynamicStyle = {
    borderColor: `var(--color, ${color})`,
    "--color": color,
  };
  return (
    <div className={`box ${id} text-black`} style={dynamicStyle}>
      <h2 className=" text-xl font-bold">{heading}</h2>
      <p>{para}</p>
      <Svg />
    </div>
  );
};
