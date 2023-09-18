import styles from "./WhyBlive.module.css";

export default function Card(props) {
    return (
        <section className={styles.container}>
            <div>
                <img src={props.img} alt="image"  className={styles.image}/>
            </div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text}>{props.text}</div>
        </section>
    );
}