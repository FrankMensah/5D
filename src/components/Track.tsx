import { FunctionComponent, useState, useCallback } from "react";
import Track1 from "./Track1";
import PortalPopup from "./PortalPopup";
import styles from "./Track.module.css";

type TrackType = {
  onClose?: () => void;
};

const Track: FunctionComponent<TrackType> = ({ onClose }) => {
  const [isTrack1Open, setTrack1Open] = useState(false);

  const openTrack1 = useCallback(() => {
    setTrack1Open(true);
  }, []);

  const closeTrack1 = useCallback(() => {
    setTrack1Open(false);
  }, []);

  return (
    <>
      <div className={styles.track}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.noParent}>
              <div className={styles.no}>No.</div>
              <div className={styles.type}>Type</div>
              <div className={styles.detail}>Detail</div>
              <div className={styles.bets}>Bets</div>
              <div className={styles.units}>Units</div>
              <div className={styles.betAmount}>Bet Amount</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>1</div>
              <div className={styles.all5Group}>All 5 Group 120</div>
              <div className={styles.div1}>56789</div>
              <div className={styles.div2}>1</div>
              <div className={styles.div3}>0.001</div>
              <div className={styles.div4}>0.0010</div>
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
            </div>
            <div className={styles.group}>
              <div className={styles.div5}>1</div>
              <div className={styles.all5Group1}>All 5 Group 120</div>
              <div className={styles.div6}>56789</div>
              <div className={styles.div7}>1</div>
              <div className={styles.div8}>0.001</div>
              <div className={styles.div9}>0.0010</div>
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
            </div>
            <div className={styles.container}>
              <div className={styles.div10}>1</div>
              <div className={styles.all5Group2}>All 5 Group 120</div>
              <div className={styles.div11}>56789</div>
              <div className={styles.div12}>1</div>
              <div className={styles.div13}>0.001</div>
              <div className={styles.div14}>0.0010</div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.curentParent}>
              <div className={styles.no}>Curent</div>
              <div className={styles.trackNo}>Track No.</div>
              <div className={styles.multi}>Multi.</div>
              <div className={styles.betAmount1}>Bet Amount</div>
              <div className={styles.betAmount}>Estimate Draw Time</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.div15}>1</div>
              <div className={styles.div16}>20230214-008</div>
              <div className={styles.div17}>0.0010</div>
              <div className={styles.div18}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.rectangleInput} type="checkbox" />
            </div>
            <div className={styles.parent1}>
              <div className={styles.div19}>2</div>
              <div className={styles.div20}>20230214-008</div>
              <div className={styles.div21}>0.0010</div>
              <div className={styles.div22}>2023-03-14 00:27:55</div>
              <textarea className={styles.path69} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.groupChild4} type="checkbox" />
            </div>
            <div className={styles.parent2}>
              <div className={styles.div23}>3</div>
              <div className={styles.div24}>20230214-008</div>
              <div className={styles.div25}>0.0010</div>
              <div className={styles.div26}>2023-03-14 00:27:55</div>
              <textarea className={styles.groupChild5} />
              <input className={styles.groupChild6} type="checkbox" />
            </div>
          </div>
          <div className={styles.firstDraw}>First Draw</div>
          <div className={styles.firstMult}>First Mult:</div>
          <div className={styles.trackDraw}>Track Draw</div>
          <div className={styles.every}>Every</div>
          <textarea className={styles.groupChild7} />
          <textarea className={styles.groupChild8} />
          <textarea className={styles.groupChild9} />
          <div className={styles.drawsMaximumTrack}>
            draws (Maximum track 120 draws)
          </div>
          <div className={styles.hintEachDraws}>
            Hint: each draws 1 implies equal track
          </div>
          <div className={styles.drawS}>draw (s)</div>
          <div className={styles.multX}>Mult. X</div>
          <textarea className={styles.groupChild10} />
          <textarea className={styles.groupChild11} />
          <div className={styles.groupChild12} />
          <div className={styles.totalTrack}>Total Track</div>
          <div className={styles.total}>Total</div>
          <div className={styles.totalAmount}>Total Amount</div>
          <div className={styles.balance}>Balance</div>
          <div className={styles.div27}>10</div>
          <div className={styles.div28}>10</div>
          <div className={styles.div29}>10</div>
          <div className={styles.div30}>32.0014</div>
          <div className={styles.totalTrack1}>Total Track</div>
          <div className={styles.betS}>Bet (s)</div>
          <div className={styles.stopIfWin}>Stop if Win</div>
          <div className={styles.stopIfNot}>Stop if not Win</div>
          <input className={styles.groupChild13} type="checkbox" />
          <input className={styles.groupChild14} type="checkbox" />
          <button className={styles.trackConfirmWrapper}>
            <div className={styles.trackConfirm}>Track Confirm</div>
          </button>
          <div className={styles.no202303140023}>No: 20230314-0023</div>
          <div className={styles.endTime000000}>End time 00:00:00</div>
          <div className={styles.x}>X</div>
        </div>
        <button className={styles.trackWrapper}>
          <div className={styles.track1}>Track</div>
        </button>
        <button
          className={styles.profitMarginChasingNumberWrapper}
          onClick={openTrack1}
        >
          <div className={styles.profitMarginChasing}>
            Profit Margin Chasing Number
          </div>
        </button>
      </div>
      {isTrack1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTrack1}
        >
          <Track1 onClose={closeTrack1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Track;
