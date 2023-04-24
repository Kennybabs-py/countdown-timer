import { ChangeEvent } from "react";
import "./input.css";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props) {
  const { value, onChange } = props;
  return (
    <input type="number" value={value} placeholder="Mins" onChange={onChange} />
  );
}
