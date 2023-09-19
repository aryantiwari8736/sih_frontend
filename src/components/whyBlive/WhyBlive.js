import Card from "./Card";
import img1 from "../../assets/luggage.png";
import { ImLocation2 } from "react-icons/im";
import styles from "./WhyBlive.module.css";

const data = [
    {
        img: img1,
        title: "Safety",
        text: "With our stringent safety checks, we ensure you travel completely safe"
    }, {
        img: img1,
        title: "Safety",
        text: "With our stringent safety checks, we ensure you travel completely safe"
    }, {
        img: img1,
        title: "Safety",
        text: "With our stringent safety checks, we ensure you travel completely safe"
    }, {
        img: img1,
        title: "Safety",
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