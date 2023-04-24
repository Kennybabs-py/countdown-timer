import { ChangeEvent, useEffect, useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";

import "./home.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const timerInterval = setTimeout(() => {
      if (!isPaused) {
        setCountDown((countDown) => (countDown === 0 ? 0 : countDown - 1));
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [countDown, isPaused]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInputValue(value);
  }

  function getHours() {
    const hours = Math.floor((countDown / 3600) % 24);
    return hours < 10 ? "0" + hours : hours;
  }

  function getMins() {
    const minutes = Math.floor((countDown / 60) % 60);
    return minutes < 10 ? "0" + minutes : minutes;
  }

  function getSecs() {
    const seconds = countDown % 60;
    return seconds < 10 ? "0" + seconds : seconds;
  }

  function startTimer() {
    if (!isRunning) {
      setIsRunning(true);
      setIsPaused(false);
      const newVal = parseInt(inputValue);
      const seconds = newVal * 60;
      setCountDown(seconds);
    }
    setIsRunning(true);
  }

  function resetTimer() {
    setIsPaused(true);
    setIsRunning(false);
    setInputValue("");
    setCountDown(0);
  }

  return (
    <section>
      <div className="timer__display">
        {`${getHours()}:${getMins()}:${getSecs()}`}
      </div>

      <Input value={inputValue} onChange={handleChange} />

      <div className="buttons__container">
        <Button
          label="start"
          onClick={startTimer}
          isDisabled={isRunning || inputValue.length <= 0}
        />
        <Button
          label={isPaused ? "pause" : "resume"}
          onClick={() => {
            setIsPaused(!isPaused);
          }}
          isDisabled={inputValue.length <= 0}
        />
        <Button label="reset" onClick={resetTimer} />
      </div>
    </section>
  );
}
