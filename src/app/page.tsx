import styles from "./page.module.css";
import Featured from "./components/featured/featured";
import Related from "./components/cards/related";
import FAQS from "./components/faqs/faqs";
import SimpleSlider from "./components/slider/simpleSlider";
import BrandSelector from "./components/brands/BrandSelector";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Featured imageURL="/scooter/honda-activa-6g-scooter.jpg" />
      </div>

      <BrandSelector></BrandSelector>

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
