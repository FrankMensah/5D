import { FunctionComponent, useState, useCallback } from "react";
import RecentBet from "./RecentBet";
import PortalPopup from "./PortalPopup";
import styles from "./RecentBetDrop.module.css";

type RecentBetDropType = {
  onClose?: () => void;
};

const RecentBetDrop: FunctionComponent<RecentBetDropType> = ({ onClose }) => {
  const [isRecentBetOpen, setRecentBetOpen] = useState(false);

  const openRecentBet = useCallback(() => {
    setRecentBetOpen(true);
  }, []);

  const closeRecentBet = useCallback(() => {
    setRecentBetOpen(false);
  }, []);

  return (
    <>
      <div className={styles.recentBetDrop}>
        <div className={styles.rightNavBarParent}>
          <div className={styles.rightNavBar}>
            <div className={styles.rightNavBarChild} />
          </div>
          <div className={styles.rightNav}>
            <div className={styles.navRightSelector}>
              <div className={styles.path52Parent}>
                <img className={styles.path52Icon} alt="" src="/path-52.svg" />
                <div className={styles.recentDraw}>
                  <p className={styles.recent}>Recent</p>
                  <p className={styles.recent}>draw</p>
                </div>
              </div>
              <div className={styles.dragonWrapper}>
                <div className={styles.dragon}>Dragon</div>
              </div>
              <div className={styles.trendWrapper}>
                <div className={styles.trend}>Trend</div>
              </div>
              <div className={styles.recentBetWrapper}>
                <div className={styles.recentBet}>Recent bet</div>
              </div>
            </div>
            <div className={styles.settledFill}>
              <div className={styles.settledOrder}>Settled Order</div>
              <div className={styles.all}>All</div>
              <div className={styles.dropDownButton}>
                <img className={styles.path36Icon} alt="" src="/path-361.svg" />
              </div>
            </div>
            <div className={styles.scrollGroup4}>
              <div className={styles.groupParent}>
                <div className={styles.path50Parent}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Parent}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div1}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Group}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div3}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Container}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div3}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent1}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent2}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent3}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent4}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent5}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent6}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent7}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent8}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Parent}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div1}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent9}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div3}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent10}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div3}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent11}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent12}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent13}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent14}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent15}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent16}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent17}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent18}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent19}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Parent}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div1}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent20}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div3}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent21}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$50.00</div>
                  <div className={styles.div3}>$5100.00</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent22}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent23}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent24}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent25}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent26}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent27}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent28}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
                  <div className={styles.dropDownButton1}>
                    <img
                      className={styles.path36Icon1}
                      alt=""
                      src="/path-365.svg"
                    />
                  </div>
                </div>
                <div className={styles.path50Parent29}>
                  <img
                    className={styles.path52Icon}
                    alt=""
                    src="/path-501.svg"
                  />
                  <div className={styles.royal5Group}>
                    <div className={styles.royal5}>Royal 5</div>
                    <div className={styles.no20221130203}>No: 20221130-203</div>
                  </div>
                  <div className={styles.all5StraightParent}>
                    <div className={styles.all5Straight}>All 5 Straight</div>
                    <div className={styles.no20221130203}>(Combo) - 9 ...</div>
                  </div>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.notWin}>Not Win</div>
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
            <div className={styles.rightLineIn}>
              <div className={styles.gamesWrapper}>
                <div className={styles.games}>Game(s)</div>
              </div>
              <div className={styles.typesWrapper}>
                <div className={styles.types}>Types</div>
              </div>
              <div className={styles.betAmtWrapper}>
                <div className={styles.betAmt}>Bet Amt.</div>
              </div>
              <div className={styles.prizeWrapper}>
                <div className={styles.prize}>Prize</div>
              </div>
            </div>
          </div>
          <div className={styles.dissolveWrapper} onClick={openRecentBet}>
            <div className={styles.dissolve}>Dissolve</div>
          </div>
        </div>
      </div>
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

export default RecentBetDrop;
