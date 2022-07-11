import React from "react";

type Props = {
  total: number;
};

const CounterDisplay = ({ total }: Props) => {
  if (total === 0) {
    return <p>{total}</p>;
  }

  if (total % 5 === 0 && total % 7 === 0) {
    return <p>FizzBuzz</p>;
  }

  if (total % 5 === 0) {
    return <p>Fizz</p>;
  }

  if (total % 7 === 0) {
    return <p>Buzz</p>;
  }

  return <p>{total}</p>;
};

export default CounterDisplay;
