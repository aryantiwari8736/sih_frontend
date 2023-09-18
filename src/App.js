
import './App.css';
import Appdetails from './Appdetails';
import Emission from './Emission';
import Form from './Form';
import ImageSlider from './Imageslider';
import Navbar from './Navbar';
import OurRoutes from './OurRoutes';
import Safety from './Safety';

function App() {
  return (
    <div > 
      <Navbar/>
   <ImageSlider/>
      <Form/>
      <Emission/>
      <OurRoutes/>
      <Safety/>
      <Appdetails/>

    </div>
  );
}

export default App;
