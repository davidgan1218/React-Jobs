import Hero from "../components/hero.jsx";
import HomeCards from "../components/homecard.jsx";
import Jobs from "../components/Jobs.jsx";
import Footer from "../components/footer.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Jobs isHome = {true}/>
      <Footer/>
    </>
  );
};

export default HomePage;
