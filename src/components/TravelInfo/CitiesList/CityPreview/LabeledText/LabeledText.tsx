import styles from "./LabeledText.module.css";

type LabeledTextProps = {
  label: string;
  children: any;
};

function LabeledText({ label, children }: LabeledTextProps) {
  return (
    <div className={styles.textContainer}>
      <p style={{ color: "#AAAAAA" }}>{label}</p>
      <div className={styles.description}>{children}</div>
    </div>
  );
}

export default LabeledText;
