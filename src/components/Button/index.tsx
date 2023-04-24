import styles from "./button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const { label, onClick, isDisabled } = props;

  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
}
