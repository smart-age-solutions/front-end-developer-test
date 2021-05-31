import AboutUs from './components/about_us';
import Category from './components/category';
import ClassicBridal from './components/classic_bridal';
import Collections from './components/collections';
import Events from './components/events';
import Footer from './components/footer';
import Header from './components/header';
import Instagram from './components/instagram';
import JewelryStore from './components/jewelry_store';
import OriginalDesign from './components/original_design';
import SelectedForYou from './components/selected_for_you';
import Showcase from './components/showcase';
import Stores from './components/stores';

function App() {
  
  return (
    <>
      <Header/>
      <Showcase/>
      <OriginalDesign/>
      <JewelryStore/>
      <ClassicBridal/>
      <Category/>
      <SelectedForYou/>
      <Collections/>
      <AboutUs/>
      <Events/>
      <Instagram/>
      <Stores/>
      <Footer/>
    </>
  );
}

export default App;
