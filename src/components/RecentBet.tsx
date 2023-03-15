import { FunctionComponent, useState, useCallback } from "react";
import Dashboard from "F$659cdb0d-13f8-4525-9cd7-bde0b8859de3$";
import PortalPopup from "./PortalPopup";
import Trend from "./Trend";
import RecentBetDrop from "./RecentBetDrop";
import styles from "./RecentBet.module.css";

type RecentBetType = {
  onClose?: () => void;
};

const RecentBet: FunctionComponent<RecentBetType> = ({ onClose }) => {
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isTrendOpen, setTrendOpen] = useState(false);
  const [isRecentBetDropOpen, setRecentBetDropOpen] = useState(false);

  const openDashboard = useCallback(() => {
    setDashboardOpen(true);
  }, []);

  const closeDashboard = useCallback(() => {
    setDashboardOpen(false);
  }, []);

  const openTrend = useCallback(() => {
    setTrendOpen(true);
  }, []);

  const closeTrend = useCallback(() => {
    setTrendOpen(false);
  }, []);

  const openRecentBetDrop = useCallback(() => {
    setRecentBetDropOpen(true);
  }, []);

  const closeRecentBetDrop = useCallback(() => {
    setRecentBetDropOpen(false);
  }, []);

  return (
    <>
      <div className={styles.recentBet}>
        <div className={styles.rightNavBarParent}>
          <div className={styles.rightNavBar}>
            <div className={styles.rightNavBarChild} />
          </div>
          <div className={styles.rightNav}>
            <div className={styles.unsettledFill}>
              <div className={styles.unsettled}>Unsettled</div>
              <div className={styles.all}>All</div>
              <div className={styles.dropDownButton}>
                <img className={styles.path36Icon} alt="" src="/path-364.svg" />
              </div>
            </div>
            <div className={styles.navRightSelector}>
              <div className={styles.path52Parent} onClick={openDashboard}>
                <img className={styles.path52Icon} alt="" src="/path-52.svg" />
                <div className={styles.recentDraw}>
                  <p className={styles.recent}>Recent</p>
                  <p className={styles.recent}>draw</p>
                </div>
              </div>
              <div className={styles.dragonWrapper}>
                <div className={styles.dragon}>Dragon</div>
              </div>
              <div className={styles.trendWrapper} onClick={openTrend}>
                <div className={styles.trend}>Trend</div>
              </div>
              <div className={styles.recentBetWrapper}>
                <div className={styles.recentBet1}>Recent bet</div>
              </div>
            </div>
            <div className={styles.settledFill}>
              <div className={styles.unsettled}>Settled Order</div>
              <div className={styles.all}>All</div>
              <div className={styles.dropDownButton1}>
                <img className={styles.path36Icon} alt="" src="/path-361.svg" />
              </div>
            </div>
            <img
              className={styles.databaseErrorIcon}
              alt=""
              src="/databaseerror.svg"
            />
            <div className={styles.noUnsettledOrders}>No Unsettled Orders</div>
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
                  <div className={styles.dropDownButton2}>
                    <img
                      className={styles.path36Icon2}
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
          <img className={styles.groupChild} alt="" src="/group-158.svg" />
          <img className={styles.groupItem} alt="" src="/group-158.svg" />
          <img className={styles.groupInner} alt="" src="/group-158.svg" />
          <img className={styles.groupIcon} alt="" src="/group-158.svg" />
          <img className={styles.groupChild1} alt="" src="/group-158.svg" />
          <div className={styles.displayAllWrapper} onClick={openRecentBetDrop}>
            <div className={styles.displayAll}>Display All</div>
          </div>
          <div className={styles.rightLineIn1}>
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
      </div>
      {isDashboardOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDashboard}
        >
          <Dashboard onClose={closeDashboard} />
        </PortalPopup>
      )}
      {isTrendOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTrend}
        >
          <Trend onClose={closeTrend} />
        </PortalPopup>
      )}
      {isRecentBetDropOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRecentBetDrop}
        >
          <RecentBetDrop onClose={closeRecentBetDrop} />
        </PortalPopup>
      )}
    </>
  );
};

export default RecentBet;
