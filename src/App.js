import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Shop from "./components/shop";
import Saving from "./components/saving";
import Gift from "./components/gift";
import Contact from "./components/contact";
import Client from "./components/client";

function App() {
  return (
    <div classNameName="header_section">  
    <Navbar />
    <Section />
    <Shop />
    <Saving />
    <Gift />
    <Contact/>
    <Client />
    <Footer />
    
</div>
   
  );
}

export default App;
