import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Hireme from './component/Hireme';
import Bot from './component/Bot';
import Navbar from './component/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
       
    </div>


  );
};

export default App;
