import { FunctionComponent } from "react";
import styles from "./HotOffLoad.module.css";

type HotOffLoadType = {
  onClose?: () => void;
};

const HotOffLoad: FunctionComponent<HotOffLoadType> = ({ onClose }) => {
  return (
    <div className={styles.hotOffload}>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.all4Wrapper}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Container}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Frame}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper1}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper2}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper3}>
            <div className={styles.all4}>All 4</div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.all4Wrapper}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Container}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Frame}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper1}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper2}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper3}>
            <div className={styles.all4}>All 4</div>
          </div>
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.all4Wrapper}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Container}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Frame}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper1}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper2}>
            <div className={styles.all4}>All 4</div>
          </div>
          <div className={styles.all4Wrapper3}>
            <div className={styles.all4}>All 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotOffLoad;
