import Image from "./components/Image";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {


  return (

      <div className="flex flex-col">

        <Image/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>



  );
}

export default App;
