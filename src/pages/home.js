import Team from '../containers/Team';
import Carousel from '../containers/carousel';
import About from '../containers/about';
import Projects from '../containers/projects';
import Service from '../containers/service';
import MalocaInfo from "../malocaInfo";

const maloca = new MalocaInfo();

function Home (){
    return (
    <>
      <Carousel destaques={maloca.projetos.splice(0,2)} />
      <About />
      <Projects projetos={maloca.projetos.splice(0,3)} />
      <Service />
      <Team />
    </>
      )
  };
  
  export default Home;