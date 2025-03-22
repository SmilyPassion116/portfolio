import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import Portfolio from './portfolio';
const home = () => {
  return (
    <div className="Home-Page -z-10 bg-cover bg-center h-full">
      <Banner />
      <MyExpertise />
      <Recommendations />
      <Portfolio />
    </div>
  );
};

export default home;
