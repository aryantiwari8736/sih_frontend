import Card from "./Card";
import img1 from "../../assets/realTime.png";
import img2 from "../../assets/emmision.png";
import img3 from "../../assets/Notific.png";
import img4 from "../../assets/Seat.png";
import { ImLocation2 } from "react-icons/im";
import styles from "./WhyBlive.module.css";

const data = [
    {
        img: img1,
        title: "Real Time Bus Track",
        text: "With our stringent safety checks, we ensure you travel completely safe"
    }, {
        img: img2,
        title: "Emission",
        text: "With our stringent safety checks, we ensure you travel completely safe"
    }, {
        img: img3,
        title: "Notification",
        text: "With our stringent safety checks, we ensure you travel completely safe"
    }, {
        img: img4,
        title: "Seat Availability",
        text: "With our stringent safety checks, we ensure you travel completely safe"
    }
]
export default function WhyBlive() {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <ImLocation2 />
                <div>Why B-Live</div>
            </div>
            <div className='flex flex-wrap space-x-2 justify-evenly'>
                {data.map((e) => <Card img={e.img} title={e.title} text={e.text} />)}
            </div>

        </section>
    );
}