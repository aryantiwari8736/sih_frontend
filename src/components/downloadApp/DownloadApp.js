import busImage from "../../assets/busTravel1.png";
import styles from "./Download.module.css";
import img1 from "../../assets/tickets.png";
import img2 from "../../assets/deals.png";
import img3 from "../../assets/notification.png";
import img4 from "../../assets/suppport.png";
import img5 from "../../assets/googlePlay.png";

export default function DownloadApp() {
    return (
        <section className={styles.downloadApp}>
            <div className={styles.left_cont}>
                <img src={busImage} alt="buaImage" />
            </div>
            <div className={styles.right_cont}>
                <h1 className={styles.heading1}>Download B-Live App</h1>
                <div className={styles.container}>
                    <div className={styles.inner_div}>
                        <img src={img1} alt="ticket" className={styles.icon_img}/>
                        <p>Access ticket on your phone</p>
                    </div>
                    <div className={styles.inner_div}>
                        <img src={img2} alt="ticket" className={styles.icon_img}/>
                        <p>Access ticket on your phone</p>
                    </div>
                    <div className={styles.inner_div}>
                        <img src={img3} alt="ticket" className={styles.icon_img}/>
                        <p>Access ticket on your phone</p>
                    </div>
                    <div className={styles.inner_div}>
                        <img src={img4} alt="ticket" className={styles.icon_img}/>
                        <p>Access ticket on your phone</p>
                    </div>
                </div>
                <div>
                    <h1 className={styles.heading2}>Get the App In</h1>
                    <img src={img5} alt="ticket" className={styles.img1}/>
                </div>
            </div>
        </section>
    )
}