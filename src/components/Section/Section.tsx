import styles from "./Section.module.css";

type SectionProps = {
  title: string;
  text: string;
  image: string;
  reversePos?: boolean;
};

function Section({ title, text, image, reversePos = false }: SectionProps) {
  return (
    <section
      className={styles.section}
      style={{ flexDirection: reversePos ? "row-reverse" : "row" }}
    >
      <div className={styles.imageContainer}>
        <img src={image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default Section;
