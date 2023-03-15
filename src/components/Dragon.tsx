import { FunctionComponent, useState, useCallback } from "react";
import Trend from "./Trend";
import PortalPopup from "./PortalPopup";
import RecentBet from "./RecentBet";
import styles from "./Dragon.module.css";

type DragonType = {
  onClose?: () => void;
};

const Dragon: FunctionComponent<DragonType> = ({ onClose }) => {
  const [isTrendOpen, setTrendOpen] = useState(false);
  const [isRecentBetOpen, setRecentBetOpen] = useState(false);

  const openTrend = useCallback(() => {
    setTrendOpen(true);
  }, []);

  const closeTrend = useCallback(() => {
    setTrendOpen(false);
  }, []);

  const openRecentBet = useCallback(() => {
    setRecentBetOpen(true);
  }, []);

  const closeRecentBet = useCallback(() => {
    setRecentBetOpen(false);
  }, []);

  return (
    <>
      <div className={styles.dragon}>
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
              <div className={styles.dragonWrapper}>
                <div className={styles.dragon1}>Dragon</div>
              </div>
              <div className={styles.trendWrapper} onClick={openTrend}>
                <div className={styles.trend}>Trend</div>
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
          <div className={styles.repeatGrid15}>
            <div className={styles.path50Parent}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Group}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Container}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.groupDiv}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent1}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent2}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent3}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent4}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent5}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent6}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent7}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent8}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent9}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent10}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent11}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent12}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent13}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent14}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent15}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent16}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent17}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent18}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent19}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
            <div className={styles.path50Parent20}>
              <img className={styles.path50Icon} alt="" src="/path-50.svg" />
              <div className={styles.lucky4dParent}>
                <div className={styles.lucky4d}>Lucky 4D</div>
                <div className={styles.oe1stOdd}>o/E 1st-Odd</div>
              </div>
              <div className={styles.row11Draw}>Row 11 Draw</div>
              <div className={styles.div}>00:00:00</div>
              <div className={styles.dropDownButton1}>
                <img
                  className={styles.path36Icon1}
                  alt=""
                  src="/path-365.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTrendOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTrend}
        >
          <Trend onClose={closeTrend} />
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

export default Dragon;
