import Appdetails from '../../Appdetails';
import Emission from '../../Emission';
import Form from '../../Form';
import ImageSlider from '../../Imageslider';
import Navbar from '../../components/navbar/Navbar';
import OurRoutes from '../../OurRoutes';
import Safety from '../../Safety';
import Footer from '../../components/footer/Footer1.js';
import DownloadApp from '../../components/downloadApp/DownloadApp';

export default function Home() {
    return (
        <>
            <Navbar />
            <ImageSlider />
            <Form />
            <Emission />
            <OurRoutes />
            <Safety />
            {/* <Appdetails /> */}
            <DownloadApp />
            <Footer />
        </>
    )
}