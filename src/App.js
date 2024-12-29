import "./App.css";
import StartNow from "./Components/slider/StartNow";
import Pricing from "./Components/pricing/pricing";
import ChooseUs from "./Components/choose-us/chooseUs";
import BusinessAfz from "./Components/business/afz/businessAfz";
import BusinessUae from "./Components/business/uae/businessUae";
import Footer from "./Components/footer/Footer";
import { Layout } from "antd";
import FAQ from "./Components/faq/FAQ";
import AjmanPaySection from "./Components/pay-section/PaySection";
import BankingSolutionsSection from "./Components/banking/BankingSolution";
import ReviewSection from "./Components/review/ReviewSection";
import SetupBusiness from "./Components/setup-business/SetupBusiness";
import KnowYourBusiness from "./Components/know-your-business/KnowYourBusiness";

function App() {
  return (
    <Layout>
      <StartNow />
      <Pricing />
      <ChooseUs />
      <BusinessAfz />
      <BusinessUae />
      <KnowYourBusiness />
      <SetupBusiness />
      <ReviewSection />
      <BankingSolutionsSection />
      <AjmanPaySection />
      <FAQ />
      <Footer />
    </Layout>
  );
}

export default App;
