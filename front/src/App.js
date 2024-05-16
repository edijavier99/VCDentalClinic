import './App.css';
import {Navbar} from "./components/navbar"
import { Introduction } from './components/introduction';
import { Especialitations } from './components/especialitations';
import { WhyUs } from './components/whyus';

function App() {
  return (
    <>
    <Introduction/>
    <Especialitations/>
    <WhyUs />
    </>
  );
}

export default App;
