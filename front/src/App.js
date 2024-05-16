import './App.css';
import {Navbar} from "./components/navbar"
import { Introduction } from './components/introduction';
import { Especialitations } from './components/especialitations';
import { WhyUs } from './components/whyus';
import { Services } from './components/services';
import { Reviews } from './components/reviews';
import { Footer } from './components/footer';
function App() {
  return (
    <>
    <Introduction/>
    <Especialitations/>
    <WhyUs />
    <Services/>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default App;
