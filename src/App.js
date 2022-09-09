import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer.js/Footer";
import FooterImage from "./Components/Footerimage/FooterImage";
import MainContainer from "./Components/MainContainer/MainContainer";
import CompanyRatings from "./Components/CompanyRatings/CompanyRatings";
function App() {
  return (
    <div >
      <NavBar/>
      <MainContainer />
      <CompanyRatings />
      <FooterImage/>
      <Footer/>
    </div>
  );
}
export default App;
