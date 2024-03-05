import styles from "./page.module.css";
import Featured from "./components/featured";
import SpecificationTable from "./components/specifications/specificationTable";
import Related from "./components/cards/related";
import PriceCard from "./components/cards/price";
import FAQS from "./components/faqs/faqs";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Featured />
      </div>

      <div className={styles.left}>
        <SpecificationTable />
      </div>

      <div className="row align-self-start">
        <div className="col-lg-6 col-sm-12 col-md-6">
        <Related></Related>
        </div>

        <div className="col-lg-6 col-sm-12 col-md-6">
        <Related></Related>
        </div>
      </div>

      <div className={styles.left}>
        <PriceCard></PriceCard>
      </div>

      <div>
        <FAQS></FAQS>
      </div>
      
    </main>
  );
}
