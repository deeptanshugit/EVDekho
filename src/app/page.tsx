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
      
    </main>
  );
}
