import styles from "./footer.module.css";

export default function Footer() {
    return (
        <section className={styles.footer_main}>
            <div className={styles.footer_details}>
                <section className={styles.col_detail}>
                    <div>
                        <h1 className={styles.heading}>B-Travel</h1>
                        <ul>
                            <p className={styles.para}>Sign In</p>
                            <p className={styles.para}>All Bus Destination</p>
                            <p className={styles.para}>Offers</p>
                            <p className={styles.para}>Partner with Us</p>
                        </ul>
                    </div>
                    <div>
                        <h1 className={styles.heading}>More on B-Live</h1>
                        <p className={styles.para}>About us</p>
                        {/* <li></li>
                        <li></li>
                        <li></li>
                        <li></li> */}
                    </div>
                    <div>
                        <h1 className={styles.heading}>Help Centre</h1>
                        <p className={styles.para}>Support</p>
                        <p className={styles.para}>FAQ</p>
                    </div>
                </section>
                <section className={styles.col_detail}>
                    <div>
                        <h1 className={styles.heading}>Contact Us</h1>
                        <p className={styles.para}></p>
                        <p className={styles.para}>Random021@gamil.com</p>
                    </div>
                    <div>
                        <h1 className={styles.heading}>Follow Us</h1>
                        <p>Socil-media-icon</p>
                    </div>
                </section>
            </div>
            <div className={styles.footer_terms}>
                <p>© Kamal Coders SIH 2023</p>
                <div className={styles.term}>
                    <p className={styles.term_li}>Terms & Conditions</p>
                    <p className={styles.term_li}>Privacy Policy</p>
                </div>
            </div>
        </section>
    )
}