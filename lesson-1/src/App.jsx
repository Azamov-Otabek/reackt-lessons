import { useState } from 'react';
import Header from "@sm/header";
import Intro from "@ui/intro-section";
import Chalishma from "@ui/chalishma";
import Urununuz from "./components/UI/uzununuz";
import Section4 from "@ui/section4";
import Yopiyoruz from "@ui/yopiyoruz";
import Section6 from "@ui/section6";
import Slider from "@ui/slider";
import Footer from "@sm/footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main>
     <Intro/>
 
     <Chalishma/>

     <Urununuz/>

     <Section4/>

     <Yopiyoruz/>

     <Section6/>

     <Slider/>
    </main>

    <Footer/>
    </>
  )
}

export default App;
