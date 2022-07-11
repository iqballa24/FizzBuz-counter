import React from "react";

type Props = {
  eventHandler: any;
  text: any;
};

const Button = ({ eventHandler, text }: Props): JSX.Element => {
  return <button onClick={eventHandler}>{text}</button>;
};

export default Button;
