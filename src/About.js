import { useProductContext } from './context/productcontext';
import HeroSection from './components/HeroSection'


const About = () => {
  const { myName } = useProductContext();

  const data= {
    name: "Raj Ecommerce",
  }

  return (
    <>
      {myName}
      <HeroSection myData={data}/>{" "}
    </>
  )
};
export default About