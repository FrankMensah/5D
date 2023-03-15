import { FunctionComponent, useState, useCallback, useEffect } from "react";
import HotOffLoad from "./HotOffLoad";
import PortalPopup from "./PortalPopup";
import Dragon from "./Dragon";
import Trend from "./Trend";
import RecentBet from "./RecentBet";
import Track from "./Track";
import TicketNumbers from "./TicketNumbers";
import Dropdown from "./Dropdown";
import styles from "./Dashboard.module.css";

type DashboardType = {
  onClose?: () => void;
};

const Dashboard: FunctionComponent<DashboardType> = ({ onClose }) => {
  const [isHotOffLoadOpen, setHotOffLoadOpen] = useState(false);
  const [isDragonOpen, setDragonOpen] = useState(false);
  const [isTrendOpen, setTrendOpen] = useState(false);
  const [isRecentBetOpen, setRecentBetOpen] = useState(false);
  const [isTrackOpen, setTrackOpen] = useState(false);
  const [isTicketNumbersOpen, setTicketNumbersOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openHotOffLoad = useCallback(() => {
    setHotOffLoadOpen(true);
  }, []);

  const closeHotOffLoad = useCallback(() => {
    setHotOffLoadOpen(false);
  }, []);

  const openDragon = useCallback(() => {
    setDragonOpen(true);
  }, []);

  const closeDragon = useCallback(() => {
    setDragonOpen(false);
  }, []);

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

  const openTrack = useCallback(() => {
    setTrackOpen(true);
  }, []);

  const closeTrack = useCallback(() => {
    setTrackOpen(false);
  }, []);

  const openTicketNumbers = useCallback(() => {
    setTicketNumbersOpen(true);
  }, []);

  const closeTicketNumbers = useCallback(() => {
    setTicketNumbersOpen(false);
  }, []);

  const openDropdown = useCallback(() => {
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboardChild} />
        <img className={styles.path55Icon} alt="" src="/path-55.svg" />
        <div className={styles.all}>
          <div className={styles.body}>
            <img className={styles.path68Icon} alt="" src="/path-68.svg" />
            <div className={styles.midBet}>
              <div className={styles.midBetChild} />
              <div className={styles.stakeTypeParent}>
                <div className={styles.stakeType}>
                  <button className={styles.allWrapper}>
                    <div className={styles.all1}>All</div>
                  </button>
                  <button className={styles.bigWrapper}>
                    <div className={styles.big}>Big</div>
                  </button>
                  <button className={styles.smallWrapper}>
                    <div className={styles.small}>Small</div>
                  </button>
                  <button className={styles.oddWrapper}>
                    <div className={styles.odd}>Odd</div>
                  </button>
                  <button className={styles.evenWrapper}>
                    <div className={styles.even}>Even</div>
                  </button>
                  <button className={styles.clearWrapper}>
                    <div className={styles.clear}>Clear</div>
                  </button>
                </div>
                <div className={styles.stakeType1}>
                  <button className={styles.allWrapper}>
                    <div className={styles.all1}>All</div>
                  </button>
                  <button className={styles.bigWrapper}>
                    <div className={styles.big}>Big</div>
                  </button>
                  <button className={styles.smallWrapper}>
                    <div className={styles.small}>Small</div>
                  </button>
                  <button className={styles.oddWrapper}>
                    <div className={styles.odd}>Odd</div>
                  </button>
                  <button className={styles.evenWrapper}>
                    <div className={styles.even}>Even</div>
                  </button>
                  <button className={styles.clearWrapper}>
                    <div className={styles.clear}>Clear</div>
                  </button>
                </div>
                <div className={styles.stakeType2}>
                  <button className={styles.allWrapper}>
                    <div className={styles.all1}>All</div>
                  </button>
                  <button className={styles.bigWrapper}>
                    <div className={styles.big}>Big</div>
                  </button>
                  <button className={styles.smallWrapper}>
                    <div className={styles.small}>Small</div>
                  </button>
                  <button className={styles.oddWrapper}>
                    <div className={styles.odd}>Odd</div>
                  </button>
                  <button className={styles.evenWrapper}>
                    <div className={styles.even}>Even</div>
                  </button>
                  <button className={styles.clearWrapper}>
                    <div className={styles.clear}>Clear</div>
                  </button>
                </div>
                <div className={styles.stakeType3}>
                  <button className={styles.allWrapper}>
                    <div className={styles.all1}>All</div>
                  </button>
                  <button className={styles.bigWrapper}>
                    <div className={styles.big}>Big</div>
                  </button>
                  <button className={styles.smallWrapper}>
                    <div className={styles.small}>Small</div>
                  </button>
                  <button className={styles.oddWrapper}>
                    <div className={styles.odd}>Odd</div>
                  </button>
                  <button className={styles.evenWrapper}>
                    <div className={styles.even}>Even</div>
                  </button>
                  <button className={styles.clearWrapper}>
                    <div className={styles.clear}>Clear</div>
                  </button>
                </div>
                <div className={styles.stakeType4}>
                  <button className={styles.allWrapper}>
                    <div className={styles.all1}>All</div>
                  </button>
                  <button className={styles.bigWrapper}>
                    <div className={styles.big}>Big</div>
                  </button>
                  <button className={styles.smallWrapper}>
                    <div className={styles.small}>Small</div>
                  </button>
                  <button className={styles.oddWrapper}>
                    <div className={styles.odd}>Odd</div>
                  </button>
                  <button className={styles.evenWrapper}>
                    <div className={styles.even}>Even</div>
                  </button>
                  <button className={styles.clearWrapper}>
                    <div className={styles.clear}>Clear</div>
                  </button>
                </div>
              </div>
              <div className={styles.downMidInfo}>
                <div className={styles.first3StraightJointWrapper}>
                  <div className={styles.first3Straight}>
                    First 3 Straight (Joint)
                  </div>
                </div>
                <div className={styles.prizeParent}>
                  <div className={styles.prize}>Prize:</div>
                  <div className={styles.div}>196515</div>
                </div>
                <div className={styles.radioBtn}>
                  <input className={styles.radioBtnChild} type="radio" />
                  <div className={styles.hotcold}>Hot/Cold</div>
                </div>
                <div className={styles.radioBtn1}>
                  <input className={styles.radioBtnChild} type="radio" />
                  <div className={styles.hotcold}>Lack</div>
                </div>
                <div className={styles.howToPlay}>
                  <div className={styles.howToPlay1}>How to play</div>
                </div>
                <div className={styles.howToPlay2}>
                  <div className={styles.whatIsSolo}>What is Solo</div>
                </div>
              </div>
              <div className={styles.longLengthSelector}>
                <div className={styles.groupParent}>
                  <button className={styles.first3StraightJointContainer}>
                    <div className={styles.all5Straightmanual}>
                      First 3 Straight (Joint)
                    </div>
                  </button>
                  <button className={styles.all5StraightmanualWrapper}>
                    <div className={styles.all5Straightmanual}>
                      All 5 Straight(Manual)
                    </div>
                  </button>
                  <button className={styles.all5StraightcomboWrapper}>
                    <div className={styles.all5Straightmanual}>
                      All 5 Straight(Combo)
                    </div>
                  </button>
                </div>
                <div className={styles.groupContainer}>
                  <button className={styles.all5Group120Wrapper}>
                    <div className={styles.all5Group}>All 5 Group 120</div>
                  </button>
                  <button className={styles.all5Group10Wrapper}>
                    <div className={styles.all5Group1}>All 5 Group 10</div>
                  </button>
                  <button className={styles.all5Group60Wrapper}>
                    <div className={styles.all5Group1}>All 5 Group 60</div>
                  </button>
                  <button className={styles.all5Group5Wrapper}>
                    <div className={styles.all5Group3}>All 5 Group 5</div>
                  </button>
                  <button className={styles.all5Group30Wrapper}>
                    <div className={styles.all5Group1}>All 5 Group 30</div>
                  </button>
                  <button className={styles.all5Group20Wrapper}>
                    <div className={styles.all5Group1}>All 5 Group 20</div>
                  </button>
                </div>
                <div className={styles.straight}>Straight</div>
                <div className={styles.group}>Group</div>
              </div>
              <div className={styles.sideTextSelectParent}>
                <div className={styles.sideTextSelect}>
                  <div className={styles.first3Straight}>1st</div>
                  <div className={styles.nd}>2nd</div>
                  <div className={styles.rd}>3rd</div>
                  <div className={styles.th}>4th</div>
                  <div className={styles.noRecentActivity}>5th</div>
                </div>
                <div className={styles.component321Parent}>
                  <button className={styles.component321}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component311}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component301}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component281}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component271}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component261}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component251}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component241}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component231}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <div className={styles.div1}>3</div>
                  <div className={styles.div2}>3</div>
                  <div className={styles.div3}>3</div>
                  <div className={styles.div4}>3</div>
                  <div className={styles.div5}>3</div>
                  <div className={styles.div6}>3</div>
                  <div className={styles.div7}>3</div>
                  <div className={styles.div8}>3</div>
                  <div className={styles.div9}>3</div>
                  <div className={styles.div10}>3</div>
                </div>
                <div className={styles.component322Parent}>
                  <button className={styles.component321}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component311}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component301}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component281}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component271}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component261}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component251}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component241}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component231}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <div className={styles.div1}>3</div>
                  <div className={styles.div2}>3</div>
                  <div className={styles.div3}>3</div>
                  <div className={styles.div4}>3</div>
                  <div className={styles.div5}>3</div>
                  <div className={styles.div6}>3</div>
                  <div className={styles.div7}>3</div>
                  <div className={styles.div8}>3</div>
                  <div className={styles.div9}>3</div>
                  <div className={styles.div10}>3</div>
                </div>
                <div className={styles.component323Parent}>
                  <button className={styles.component321}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component311}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component301}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component281}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component271}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component261}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component251}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component241}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component231}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <div className={styles.div1}>3</div>
                  <div className={styles.div2}>3</div>
                  <div className={styles.div3}>3</div>
                  <div className={styles.div4}>3</div>
                  <div className={styles.div5}>3</div>
                  <div className={styles.div6}>3</div>
                  <div className={styles.div7}>3</div>
                  <div className={styles.div8}>3</div>
                  <div className={styles.div9}>3</div>
                  <div className={styles.div10}>3</div>
                </div>
                <div className={styles.component324Parent}>
                  <button className={styles.component321}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component311}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component301}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component281}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component271}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component261}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component251}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component241}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component231}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <div className={styles.div1}>3</div>
                  <div className={styles.div2}>3</div>
                  <div className={styles.div3}>3</div>
                  <div className={styles.div4}>3</div>
                  <div className={styles.div5}>3</div>
                  <div className={styles.div6}>3</div>
                  <div className={styles.div7}>3</div>
                  <div className={styles.div8}>3</div>
                  <div className={styles.div9}>3</div>
                  <div className={styles.div10}>3</div>
                </div>
                <div className={styles.component325Parent}>
                  <button className={styles.component321}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component311}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component301}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component281}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component271}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component261}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component251}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component241}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.component231}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.component321Child}
                      alt=""
                      src="/ellipse-22.svg"
                    />
                  </button>
                  <div className={styles.div1}>3</div>
                  <div className={styles.div2}>3</div>
                  <div className={styles.div3}>3</div>
                  <div className={styles.div4}>3</div>
                  <div className={styles.div5}>3</div>
                  <div className={styles.div6}>3</div>
                  <div className={styles.div7}>3</div>
                  <div className={styles.div8}>3</div>
                  <div className={styles.div9}>3</div>
                  <div className={styles.div10}>3</div>
                </div>
              </div>
            </div>
            <div className={styles.midNav}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.component341}>
                  <button className={styles.hotWrapper} data-animate-on-scroll>
                    <div className={styles.hot}>Hot</div>
                  </button>
                  <button className={styles.allPlayWrapper}>
                    <div className={styles.allPlay}>All Play</div>
                  </button>
                </div>
              </div>
              <button
                className={styles.dropDownButton}
                onClick={openHotOffLoad}
              >
                <img className={styles.path36Icon} alt="" src="/path-36.svg" />
              </button>
              <div className={styles.component351Wrapper}>
                <div className={styles.body}>
                  <div className={styles.all5Wrapper}>
                    <div className={styles.all51}>All 5</div>
                  </div>
                  <div className={styles.all4Wrapper}>
                    <div className={styles.all41}>All 4</div>
                  </div>
                  <div className={styles.all4Container}>
                    <div className={styles.all41}>All 4</div>
                  </div>
                  <div className={styles.all4Frame}>
                    <div className={styles.all41}>All 4</div>
                  </div>
                  <div className={styles.groupDiv}>
                    <div className={styles.all41}>All 4</div>
                  </div>
                  <div className={styles.all4Wrapper1}>
                    <div className={styles.all41}>All 4</div>
                  </div>
                  <div className={styles.all4Wrapper2}>
                    <div className={styles.all41}>All 4</div>
                  </div>
                  <div className={styles.all4Wrapper3}>
                    <div className={styles.all41}>All 4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sided}>
              <div className={styles.hOTWrapper}>
                <div className={styles.hOT}>
                  <p className={styles.h}>H</p>
                  <p className={styles.h}>O</p>
                  <p className={styles.h}>T</p>
                </div>
              </div>
              <div className={styles.aLLWrapper}>
                <div className={styles.aLL}>
                  <p className={styles.h}>A</p>
                  <p className={styles.h}>L</p>
                  <p className={styles.h}>L</p>
                </div>
              </div>
              <div className={styles.path54Parent}>
                <img className={styles.path54Icon} alt="" src="/path-54.svg" />
                <div className={styles.sIDED}>
                  <p className={styles.h}>2</p>
                  <p className={styles.h}>&nbsp;</p>
                  <p className={styles.h}>S</p>
                  <p className={styles.h}>I</p>
                  <p className={styles.h}>D</p>
                  <p className={styles.h}>E</p>
                  <p className={styles.h}>D</p>
                </div>
              </div>
              <div className={styles.sTANDARDWrapper}>
                <div className={styles.sTANDARD}>
                  <p className={styles.h}>S</p>
                  <p className={styles.h}>T</p>
                  <p className={styles.h}>A</p>
                  <p className={styles.h}>N</p>
                  <p className={styles.h}>D</p>
                  <p className={styles.h}>A</p>
                  <p className={styles.h}>R</p>
                  <p className={styles.h}>D</p>
                </div>
              </div>
              <div className={styles.cREDITWrapper}>
                <div className={styles.cREDIT}>
                  <p className={styles.h}>C</p>
                  <p className={styles.h}>R</p>
                  <p className={styles.h}>E</p>
                  <p className={styles.h}>D</p>
                  <p className={styles.h}>I</p>
                  <p className={styles.h}>T</p>
                </div>
              </div>
            </div>
            <div className={styles.bodyChild} />
            <div className={styles.totalBet}>Total Bet</div>
            <div className={styles.totalBettingAmount}>
              Total Betting Amount
            </div>
            <div className={styles.note}>
              <span>0</span>
              <span className={styles.note1}> Note</span>
            </div>
            <div className={styles.yuan}>
              <span>0</span>
              <span className={styles.note1}> Yuan</span>
            </div>
            <div className={styles.bodyItem} />
            <div className={styles.confirmBetWrapper}>
              <div className={styles.confirmBet}>Confirm Bet</div>
            </div>
            <div className={styles.iWantToChaseNumberWrapper}>
              <div className={styles.iWantTo}>I want to Chase Number</div>
            </div>
          </div>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.rightNavBar}>
            <div className={styles.rightNavBarChild} />
          </div>
          <div className={styles.rightLineIn}>
            <div className={styles.rightLineInInner}>
              <div className={styles.body}>
                <div className={styles.g120Wrapper}>
                  <div className={styles.g120}>G120</div>
                </div>
                <div className={styles.g60Wrapper}>
                  <div className={styles.g60}>G60</div>
                </div>
                <div className={styles.g30Wrapper}>
                  <div className={styles.g60}>G30</div>
                </div>
                <div className={styles.g20Wrapper}>
                  <div className={styles.g60}>G20</div>
                </div>
                <div className={styles.g10Wrapper}>
                  <div className={styles.g60}>G10</div>
                </div>
                <div className={styles.g5Wrapper}>
                  <div className={styles.g5}>G5</div>
                </div>
              </div>
            </div>
            <div className={styles.all5GroupWrapper}>
              <div className={styles.all5Group6}>All 5 Group</div>
            </div>
            <div className={styles.drawWrapper}>
              <div className={styles.draw}>Draw</div>
            </div>
            <div className={styles.winningNoWrapper}>
              <div className={styles.winningNo}>Winning No.</div>
            </div>
            <div className={styles.groupParent2}>
              <div className={styles.sumWrapper}>
                <div className={styles.sum}>Sum</div>
              </div>
              <div className={styles.stWrapper}>
                <div className={styles.st1}>1st</div>
              </div>
              <div className={styles.ndWrapper}>
                <div className={styles.nd1}>2nd</div>
              </div>
              <div className={styles.rdWrapper}>
                <div className={styles.st1}>3rd</div>
              </div>
              <div className={styles.thWrapper}>
                <div className={styles.th2}>4th</div>
              </div>
              <div className={styles.thContainer}>
                <div className={styles.st1}>5th</div>
              </div>
            </div>
          </div>
          <div className={styles.markFill}>
            <div className={styles.markNo}>Mark No.</div>
            <div className={styles.fillChart}>Fill Chart</div>
          </div>
          <div className={styles.navRightSelector}>
            <button className={styles.recentDrawWrapper}>
              <div className={styles.recentDraw}>
                <p className={styles.h}>Recent</p>
                <p className={styles.h}>draw</p>
              </div>
            </button>
            <button className={styles.dragonWrapper} onClick={openDragon}>
              <div className={styles.dragon}>Dragon</div>
            </button>
            <button className={styles.trendWrapper} onClick={openTrend}>
              <div className={styles.trend}>Trend</div>
            </button>
            <button className={styles.recentBetWrapper} onClick={openRecentBet}>
              <div className={styles.recentBet}>Recent bet</div>
            </button>
          </div>
          <div className={styles.rightNavResult}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult1}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult2}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult3}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult4}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult5}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult6}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult7}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult8}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult9}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult10}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult11}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult12}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult13}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult14}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavResult15}>
            <img className={styles.path54Icon} alt="" src="/path-48.svg" />
            <div className={styles.div51}>21217</div>
            <div className={styles.div52}>2</div>
            <div className={styles.div53}>1</div>
            <div className={styles.div54}>5</div>
            <div className={styles.div55}>9</div>
            <div className={styles.g101}>G10</div>
            <div className={styles.div56}>50</div>
            <div className={styles.resultData}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent1}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-12.svg"
                />
                <div className={styles.div57}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.markFill1}>
            <div className={styles.road}>Road</div>
            <div className={styles.roadBet}>Road Bet</div>
            <div className={styles.dropDownButton1}>
              <img className={styles.path36Icon1} alt="" src="/path-361.svg" />
            </div>
          </div>
        </div>
        <div className={styles.leftNav}>
          <img className={styles.path54Icon} alt="" src="/left-nav-bar.svg" />
          <button className={styles.searchButton}>
            <img className={styles.path54Icon} alt="" src="/ellipse-24.svg" />
            <img className={styles.searchicon} alt="" src="/searchicon.svg" />
          </button>
          <div className={styles.component71Parent}>
            <button className={styles.component71}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.history}>History</div>
            </button>
            <button className={styles.component81}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.instantGames}>Instant Games</div>
            </button>
            <button className={styles.component91}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.pk10}>PK 10</div>
            </button>
            <button className={styles.component101}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.mark6}>Mark 6</div>
            </button>
            <button className={styles.component111}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.x5}>11 x 5</div>
            </button>
            <button className={styles.component121}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.x5}>Fast 3</div>
            </button>
            <button className={styles.component131}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.d5}>3D</div>
            </button>
            <button className={styles.component141}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.lfLotto}>Happy 8</div>
            </button>
            <button className={styles.component151}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.colorBall}>2 Color Ball</div>
            </button>
            <button className={styles.component161}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.d5}>4D</div>
            </button>
            <button className={styles.component171}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.northVietlott}>North Vietlott</div>
            </button>
            <button className={styles.component181}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.centralVietlott}>Central Vietlott</div>
            </button>
            <button className={styles.component191}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.southVietlott}>South Vietlott</div>
            </button>
            <button className={styles.component201}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.thailott}>Thailott</div>
            </button>
            <button className={styles.component211}>
              <img className={styles.path54Icon} alt="" src="/path-47.svg" />
              <div className={styles.lfLotto}>LF Lotto</div>
            </button>
          </div>
        </div>
        <div className={styles.allBelowData}>
          <div className={styles.groupParent3}>
            <button className={styles.numberBasketWrapper}>
              <div className={styles.numberBasket}>
                <p className={styles.h}>Number</p>
                <p className={styles.h}>Basket</p>
              </div>
            </button>
            <button className={styles.recentBetsWrapper}>
              <div className={styles.recentBets}>
                <p className={styles.h}>Recent</p>
                <p className={styles.h}>Bets</p>
              </div>
            </button>
            <button className={styles.recentChasingNumberWrapper}>
              <div className={styles.recentChasingNumber}>
                <p className={styles.h}>Recent Chasing</p>
                <p className={styles.h}>Number</p>
              </div>
            </button>
            <button className={styles.recentRechargeWrapper}>
              <div className={styles.recentRecharge}>
                <p className={styles.h}>Recent</p>
                <p className={styles.h}>Recharge</p>
              </div>
            </button>
            <button className={styles.recentWithdrawalsWrapper}>
              <div className={styles.recentWithdrawals}>
                <p className={styles.h}>Recent</p>
                <p className={styles.h}>Withdrawals</p>
              </div>
            </button>
            <button className={styles.recentProfitAndLossWrapper}>
              <div className={styles.recentProfitAndLossContainer}>
                <p className={styles.h}>Recent Profit</p>
                <p className={styles.h}>and Loss</p>
              </div>
            </button>
            <button className={styles.planRecordWrapper}>
              <div className={styles.recentBets}>
                <p className={styles.h}>{`Plan `}</p>
                <p className={styles.h}>Record</p>
              </div>
            </button>
            <button className={styles.detailsWrapper}>
              <div className={styles.details}>Details</div>
            </button>
            <button className={styles.allBettingWrapper}>
              <div className={styles.allBetting}>All Betting</div>
            </button>
          </div>
          <div className={styles.infoBelow}>
            <div className={styles.howToPlay3}>How to Play</div>
            <div className={styles.bettingContent}>Betting Content</div>
            <div className={styles.unit}>Unit</div>
            <div className={styles.multiple}>Multiple</div>
            <div className={styles.numberOfBets}>Number of Bets</div>
            <div className={styles.totalAmount}>Total Amount</div>
            <div className={styles.operate}>Operate</div>
          </div>
          <div className={styles.databaseError}>
            <img
              className={styles.databaseErrorChild}
              alt=""
              src="/group-106.svg"
            />
            <div className={styles.noRecentActivity}>No Recent Activity</div>
          </div>
        </div>
        <div className={styles.stakeBet}>
          <div className={styles.amountBetting}>
            <div className={styles.periosParent}>
              <div className={styles.perios}>
                <div className={styles.perios1}>Perios</div>
                <div className={styles.div227}>20221221413</div>
              </div>
              <div className={styles.bonus}>
                <div className={styles.bonus1}>Bonus</div>
                <img className={styles.path40Icon} alt="" src="/path-40.svg" />
                <div className={styles.div228}>19.68-0%</div>
              </div>
            </div>
            <div className={styles.amouBetParent}>
              <div className={styles.amouBet}>
                <div className={styles.amountBetting1}>Amount Betting</div>
                <div className={styles.enterBetAmountWrapper}>
                  <div className={styles.enterBetAmount}>Enter bet amount</div>
                </div>
              </div>
              <div className={styles.betMult}>
                <div className={styles.bettingMultiple}>Betting Multiple</div>
                <div className={styles.groupParent4}>
                  <textarea className={styles.groupTextarea} placeholder="1" />
                  <button className={styles.wrapper}>
                    <div className={styles.div229}>-</div>
                  </button>
                  <button className={styles.container}>
                    <div className={styles.div230}>+</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.amountParent}>
              <div className={styles.amount}>
                <div className={styles.noRecentActivity}>The Amount</div>
                <div className={styles.groupParent5}>
                  <button className={styles.frame}>
                    <div className={styles.div231}>2</div>
                  </button>
                  <button className={styles.x5Wrapper}>
                    <div className={styles.div231}>1</div>
                  </button>
                  <button className={styles.x10Wrapper}>
                    <div className={styles.div233}>0.2</div>
                  </button>
                  <button className={styles.x20Wrapper}>
                    <div className={styles.div233}>0.1</div>
                  </button>
                  <button className={styles.x30Wrapper}>
                    <div className={styles.div235}>0.02</div>
                  </button>
                  <button className={styles.x40Wrapper}>
                    <div className={styles.div235}>0.01</div>
                  </button>
                  <button className={styles.x50Wrapper}>
                    <div className={styles.div237}>0.002</div>
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.path63Icon}
                      alt=""
                      src="/path-63.svg"
                    />
                    <div className={styles.div238}>0.001</div>
                  </button>
                </div>
              </div>
              <div className={styles.multiple1}>
                <div className={styles.model}>Model</div>
                <div className={styles.selected0Note}>
                  selected 0 note, total 0 Yuan. Highest profit 0 Yuan
                </div>
                <div className={styles.groupParent6}>
                  <button className={styles.frame}>
                    <div className={styles.div239}>1/2</div>
                  </button>
                  <button className={styles.x20Wrapper}>
                    <div className={styles.div239}>1/3</div>
                  </button>
                  <button className={styles.x30Wrapper}>
                    <div className={styles.div241}>1/2</div>
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.path63Icon}
                      alt=""
                      src="/path-63.svg"
                    />
                    <div className={styles.allIn}>All-in</div>
                  </button>
                </div>
              </div>
              <div className={styles.multiple2}>
                <div className={styles.model}>Multiple</div>
                <div className={styles.groupParent7}>
                  <button className={styles.frame}>
                    <div className={styles.x1}>X1</div>
                  </button>
                  <button className={styles.x5Wrapper}>
                    <div className={styles.x1}>X5</div>
                  </button>
                  <button className={styles.x10Wrapper}>
                    <div className={styles.x10}>X10</div>
                  </button>
                  <button className={styles.x20Wrapper}>
                    <div className={styles.x10}>X20</div>
                  </button>
                  <button className={styles.x30Wrapper}>
                    <div className={styles.x10}>X30</div>
                  </button>
                  <button className={styles.x40Wrapper}>
                    <div className={styles.x10}>X40</div>
                  </button>
                  <button className={styles.x50Wrapper}>
                    <div className={styles.x10}>X50</div>
                  </button>
                  <button className={styles.path63Parent}>
                    <img
                      className={styles.path63Icon}
                      alt=""
                      src="/path-63.svg"
                    />
                    <div className={styles.allIn}>X100</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.downBut}>
            <button className={styles.addToCart}>
              <img className={styles.path62Icon} alt="" src="/path-62.svg" />
              <div className={styles.addToCart1}>Add to cart</div>
            </button>
            <button className={styles.addToCart2} onClick={openTrack}>
              <img className={styles.path62Icon} alt="" src="/path-621.svg" />
              <div className={styles.track}>Track</div>
            </button>
            <button className={styles.addToCart3}>
              <img className={styles.path62Icon} alt="" src="/path-62.svg" />
              <div className={styles.betNow}>Bet Now</div>
            </button>
          </div>
        </div>
        <div className={styles.timeTicket}>
          <img className={styles.path54Icon} alt="" src="/path-37.svg" />
          <div className={styles.no202303101397}>No: 20230310-1397</div>
          <div className={styles.forSale}>For Sale</div>
          <div className={styles.timeProgress}>
            <div className={styles.time}>
              <div className={styles.div242}>00:00:00</div>
              <div className={styles.hrs}>HRS</div>
              <div className={styles.min}>MIN</div>
              <div className={styles.sec}>SEC</div>
            </div>
            <div className={styles.progreeBar}>
              <div className={styles.progreeBarChild} />
            </div>
          </div>
          <div className={styles.resultDataParent}>
            <div className={styles.resultData16}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-121.svg"
                />
                <b className={styles.b}>3</b>
              </div>
            </div>
            <div className={styles.resultData17}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-121.svg"
                />
                <b className={styles.b}>3</b>
              </div>
            </div>
            <div className={styles.resultData18}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-121.svg"
                />
                <b className={styles.b}>3</b>
              </div>
            </div>
            <div className={styles.resultData19}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-121.svg"
                />
                <b className={styles.b}>3</b>
              </div>
            </div>
            <div className={styles.resultData20}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-121.svg"
                />
                <b className={styles.b}>3</b>
              </div>
            </div>
          </div>
          <div className={styles.dropDownButton2}>
            <img className={styles.path36Icon2} alt="" src="/path-362.svg" />
          </div>
          <div className={styles.flokiLottery}>Floki Lottery</div>
        </div>
        <div className={styles.timeTicket1}>
          <img className={styles.path54Icon} alt="" src="/path-371.svg" />
          <div className={styles.no2023031013971}>No: 20230310-1397</div>
          <div className={styles.forSale1}>For Sale</div>
          <div className={styles.time1}>
            <div className={styles.div243}>00:00:00</div>
            <div className={styles.hrs1}>HRS</div>
            <div className={styles.min1}>MIN</div>
            <div className={styles.sec1}>SEC</div>
          </div>
          <div className={styles.progreeBar1}>
            <div className={styles.progreeBarItem} />
          </div>
          <div className={styles.no2023031013972}>No: 20230310-1397</div>
          <div className={styles.resultDataGroup} onClick={openTicketNumbers}>
            <div className={styles.resultData21}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-122.svg"
                />
                <b className={styles.b5}>3</b>
              </div>
            </div>
            <div className={styles.resultData22}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-122.svg"
                />
                <b className={styles.b5}>3</b>
              </div>
            </div>
            <div className={styles.resultData23}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-122.svg"
                />
                <b className={styles.b5}>3</b>
              </div>
            </div>
            <div className={styles.resultData24}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-122.svg"
                />
                <b className={styles.b5}>3</b>
              </div>
            </div>
            <div className={styles.resultData25}>
              <div className={styles.body}>
                <img
                  className={styles.path54Icon}
                  alt=""
                  src="/ellipse-122.svg"
                />
                <b className={styles.b5}>3</b>
              </div>
            </div>
            <button className={styles.dropDownButton3}>
              <img className={styles.path36Icon3} alt="" src="/path-363.svg" />
            </button>
          </div>
          <div className={styles.flokiLottery1}>Floki Lottery</div>
        </div>
        <div className={styles.topNav}>
          <a className={styles.backToLobby} target="_blank">
            Back to lobby
          </a>
          <a className={styles.callOfHeros} target="_blank">
            Call of Heros
          </a>
          <a className={styles.kzing00kzd9527} target="_blank">
            kzing00kzd9527
          </a>
          <div className={styles.bal38000}>Bal. $ 38.000</div>
          <a className={styles.record1} target="_blank">
            Record
          </a>
          <a className={styles.setting} target="_blank">
            Setting
          </a>
          <button className={styles.english}>English</button>
        </div>
        <div className={styles.dashboardItem} />
        <button className={styles.dropDownButton4}>
          <img
            className={styles.dropDownButtonChild}
            alt=""
            src="/group-228.svg"
          />
        </button>
        <button className={styles.component352} onClick={openDropdown}>
          <div className={styles.component352Inner}>
            <img className={styles.groupIcon} alt="" src="/group-228.svg" />
          </div>
          <div className={styles.component352Child}>
            <img className={styles.groupChild88} alt="" src="/group-228.svg" />
          </div>
        </button>
      </div>
      {isHotOffLoadOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeHotOffLoad}
        >
          <HotOffLoad onClose={closeHotOffLoad} />
        </PortalPopup>
      )}
      {isDragonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDragon}
        >
          <Dragon onClose={closeDragon} />
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
      {isRecentBetOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRecentBet}
        >
          <RecentBet onClose={closeRecentBet} />
        </PortalPopup>
      )}
      {isTrackOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTrack}
        >
          <Track onClose={closeTrack} />
        </PortalPopup>
      )}
      {isTicketNumbersOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTicketNumbers}
        >
          <TicketNumbers onClose={closeTicketNumbers} />
        </PortalPopup>
      )}
      {isDropdownOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdown}
        >
          <Dropdown onClose={closeDropdown} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;
