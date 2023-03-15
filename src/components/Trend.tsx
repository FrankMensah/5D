import { FunctionComponent, useState, useCallback } from "react";
import Dragon from "./Dragon";
import PortalPopup from "./PortalPopup";
import RecentBet from "./RecentBet";
import styles from "./Trend.module.css";

type TrendType = {
  onClose?: () => void;
};

const Trend: FunctionComponent<TrendType> = ({ onClose }) => {
  const [isDragonOpen, setDragonOpen] = useState(false);
  const [isRecentBetOpen, setRecentBetOpen] = useState(false);

  const openDragon = useCallback(() => {
    setDragonOpen(true);
  }, []);

  const closeDragon = useCallback(() => {
    setDragonOpen(false);
  }, []);

  const openRecentBet = useCallback(() => {
    setRecentBetOpen(true);
  }, []);

  const closeRecentBet = useCallback(() => {
    setRecentBetOpen(false);
  }, []);

  return (
    <>
      <div className={styles.trend}>
        <div className={styles.rightNavBarParent}>
          <div className={styles.rightNavBar}>
            <div className={styles.rightNavBarChild} />
          </div>
          <div className={styles.rightNav}>
            <div className={styles.rightNav1}>
              <div className={styles.rightNavBar1}>
                <div className={styles.rightNavBarItem} />
              </div>
            </div>
            <div className={styles.groupParent}>
              <div className={styles.recentDrawWrapper}>
                <div className={styles.recentDraw}>
                  <p className={styles.recent}>Recent</p>
                  <p className={styles.recent}>draw</p>
                </div>
              </div>
              <div className={styles.dragonWrapper} onClick={openDragon}>
                <div className={styles.dragon}>Dragon</div>
              </div>
              <div className={styles.trendWrapper}>
                <div className={styles.trend1}>Trend</div>
              </div>
              <div className={styles.recentBetWrapper} onClick={openRecentBet}>
                <div className={styles.recentBet}>Recent bet</div>
              </div>
            </div>
            <div className={styles.rightLineIn}>
              <div className={styles.currentWrapper}>
                <div className={styles.current}>Current</div>
              </div>
              <div className={styles.dWrapper}>
                <div className={styles.d}>5D</div>
              </div>
              <div className={styles.customgamesWrapper}>
                <div className={styles.customgamesContainer}>
                  <p className={styles.recent}>Custom/Games</p>
                  <p className={styles.recent}> 28</p>
                </div>
              </div>
              <div className={styles.rowDrawWrapper}>
                <div className={styles.rowDraw}>Row Draw</div>
              </div>
              <div className={styles.dropDownButton}>
                <img className={styles.path36Icon} alt="" src="/path-364.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDragonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDragon}
        >
          <Dragon onClose={closeDragon} />
        </PortalPopup>
      )}
      {isRecentBetOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRecentBet}
        >
          <RecentBet onClose={closeRecentBet} />
        </PortalPopup>
      )}
    </>
  );
};

export default Trend;
