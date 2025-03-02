import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
const home = () => {
  return (
    <div
      className="Home-Page -z-10 bg-cover bg-center h-full"
      style={{ backgroundImage: "url('/images/200w.gif')" }}
    >
      <Banner />
      <MyExpertise />
      <Recommendations />
      <ClientReviews />
      <Footer />
    </div>
  );
};

export default home;
