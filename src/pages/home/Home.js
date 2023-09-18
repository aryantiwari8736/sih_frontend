import Form from '../../Form';
import ImageSlider from '../../Imageslider';
import Navbar from '../../components/navbar/Navbar';
import OurRoutes from '../../OurRoutes';
import Safety from '../../Safety';
import Footer from '../../components/footer/Footer1.js';
import DownloadApp from '../../components/downloadApp/DownloadApp';
import BusInfo from '../../components/busBluePrint/BusInfo';
import WhyBlive from '../../components/whyBlive/WhyBlive';

export default function Home() {
    return (
        <>
            <Navbar />
            <ImageSlider />
            <Form />
            {/* <OurRoutes /> */}
            {/* <Safety /> */}
            <WhyBlive />
            <BusInfo />
            <DownloadApp />
            <Footer />
        </>
    )
}