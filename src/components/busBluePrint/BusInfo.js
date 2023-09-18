import styles from "./BusInfo.module.css";
import img1 from "../../assets/busBluePrint.png";

export default function BusInfo() {
    return (
        <section className={styles.container}>
            <div className={styles.left_cont}>
                <div className={styles.lll}>
                    <h1 className={styles.head1}>Nue and Safe <span className={styles.special}>Electric , </span>
                        Saving the <span className={styles.special}>Green</span></h1>
                    <button className={styles.button23}>Button 23</button>
                </div>
            </div>
            <div className={styles.right_cont}>
                <img src={img1} alt="bluePrint" className={styles.image} />
            </div>
        </section>
    );
}