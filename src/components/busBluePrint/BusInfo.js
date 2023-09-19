import styles from "./BusInfo.module.css";
import img1 from "../../assets/busBluePrint.png";

export default function BusInfo() {
    return (
        <section className={styles.container}>
            <div className={styles.left_cont}>
                <div className={styles.lll}>
                    <h1 className={styles.head1}>Real-Time  <span className={styles.special}> Vehicle Tracking, </span>
                    System <span className={styles.special}></span></h1>
                    <button className={styles.button23}>Register</button>
                </div>
            </div>
            <div className={styles.right_cont}>
                <img src={img1} alt="bluePrint" className={styles.image} />
            </div>
        </section>
    );
}