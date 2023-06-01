import React from "react";
import { render } from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class AppState {
  timer = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    setInterval(this.increaseTimer, 1000);
  }

  increaseTimer() {
    this.timer++;
  }

  reset() {
    this.timer = 0;
  }
}

const TimerView = observer(({ appState }) => (
  <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));

render(
  <div>
    <TimerView appState={new AppState()} />
  </div>,
  document.getElementById("root")
);
