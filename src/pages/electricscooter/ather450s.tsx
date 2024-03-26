import styles from "./ather450s.module.css";
import Featured from "@/app/components/featured/featured";
import SpecificationTable from "@/app/components/specifications/specificationTable";
import Related from "@/app/components/cards/related";
import FAQS from "@/app/components/faqs/faqs";
import SimpleSlider from "@/app/components/slider/simpleSlider";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Featured imageURL="/electricscooter/ather/ather450s.png" />
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
