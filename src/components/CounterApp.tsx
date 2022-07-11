import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import Button from "./Button";

type Props = {
  message: string;
};

type State = {
  count: number;
};

export default class CounterApp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0,
    };

    // binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <>
        <Button eventHandler={this.onIncreaseEventHandler} text="+ increase" />
        <CounterDisplay total={this.state.count} />
        <Button eventHandler={this.onResetEventHandler} text="Reset" />
      </>
    );
  }
}
