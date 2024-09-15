import { ReactNode } from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

const Heading = (props: IProps) => {
  console.log(props);
  return (
    <h2>
      {props.title}
      {props.children}
    </h2>
  );
};
export default Heading;
