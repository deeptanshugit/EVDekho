import styles from "./page.module.css";
import Featured from "./components/featured/featured";
import SpecificationTable from "./components/specifications/specificationTable";
import Related from "./components/cards/related";
import PriceCard from "./components/cards/price";
import FAQS from "./components/faqs/faqs";
import SimpleSlider from "./components/slider/simpleSlider";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.center}>
        <Featured imageURL="/scooter/honda-activa-6g-scooter.jpg" />
      </div>

      <div className={styles.left}>
        <SpecificationTable />
      </div>

      <div className="row align-self-start">
        <div className="col-lg-6 col-sm-12 col-md-6 ">
        <Related></Related>
        </div>

        <div className="col-lg-6 col-sm-12 col-md-6">
        <Related></Related>
        </div>
      </div>

      <div className="mt-5">
        <FAQS></FAQS>
      </div>

      <div className={styles.left}>
        <SimpleSlider></SimpleSlider>
      </div>
      
    </main>
  );
}
