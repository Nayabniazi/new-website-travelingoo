

import "../css/Navbar.css";  // Import the CSS file


import ParagraphSection from "../Components/ParagraphSection.js";
import Footer from "../Components/Footer.js";


import Header from "../Components/Header";

import "react-datepicker/dist/react-datepicker.css";
import Brands from '../Components/Brands.js';
import CardSection from '../Components/CardSection.js';
import ServicesCards from '../Components/ServicesCards.js';
import Slider from '../Components/Slider.js';
import Reviews  from "../Components/Reviews.js";


const Home = () => {
   // Define the content sections
   const sectionsData = [
    {
      heading: "Get Your World-class Chauffeur Service",
      content: "There is never more easy planning your transportation. Showing a refined reserve system...",
    },
    {
      heading: "Reliability and Safety",
      content: "Our customers can rely on consistent and comfortable trips from well-trained chauffeurs...",
    },
    {
      heading: "Customizable Fleet Solutions",
      content: "Our consumers choose Vans, SUVs, and business sedans among other choices...",
    },
  ];
return(

<>


<Header imgSrc="/imgs/Header.png" h1="Book your chauffeurrr service" />
<ParagraphSection
        sections={sectionsData}
        containerStyle={{ marginLeft: "150px", marginRight: "150px", marginTop: "100px" }}
      />
<CardSection />
<ServicesCards />
<Brands />
<Slider />
<Reviews />
<Footer />
   </>
  );
};

export default Home;