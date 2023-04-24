import { useState } from "react";
import "./home.css";
import Button from "../../components/Button";

export default function Home() {
  const [minutes, setMinutes] = useState("");

  return (
    <section>
      <div className="timer__display">00:00:00:00</div>

      <div className="buttons__container">
        <Button />
      </div>
    </section>
  );
}
