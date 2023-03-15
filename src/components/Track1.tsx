import { FunctionComponent, useState, useCallback } from "react";
import Track from "./Track";
import PortalPopup from "./PortalPopup";
import styles from "./Track1.module.css";

type Track1Type = {
  onClose?: () => void;
};

const Track1: FunctionComponent<Track1Type> = ({ onClose }) => {
  const [isTrackOpen, setTrackOpen] = useState(false);

  const openTrack = useCallback(() => {
    setTrackOpen(true);
  }, []);

  const closeTrack = useCallback(() => {
    setTrackOpen(false);
  }, []);

  return (
    <>
      <div className={styles.track1}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.curentParent}>
              <div className={styles.curent}>Curent</div>
              <div className={styles.trackNo}>Track No.</div>
              <div className={styles.multi}>Multi.</div>
              <div className={styles.betAmount}>Bet Amount</div>
              <div className={styles.estimateDrawTime}>Estimate Draw Time</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>1</div>
              <div className={styles.div1}>20230214-008</div>
              <div className={styles.div2}>0.0010</div>
              <div className={styles.div3}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input
                className={styles.rectangleInput}
                type="checkbox"
                defaultChecked={true}
              />
            </div>
            <div className={styles.group}>
              <div className={styles.div4}>2</div>
              <div className={styles.div5}>20230214-008</div>
              <div className={styles.div6}>0.0010</div>
              <div className={styles.div7}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.groupChild3} type="checkbox" />
            </div>
            <div className={styles.container}>
              <div className={styles.div4}>3</div>
              <div className={styles.div5}>20230214-008</div>
              <div className={styles.div6}>0.0010</div>
              <div className={styles.div7}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.groupChild3} type="checkbox" />
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.div4}>4</div>
              <div className={styles.div5}>20230214-008</div>
              <div className={styles.div6}>0.0010</div>
              <div className={styles.div7}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.groupChild3} type="checkbox" />
            </div>
            <div className={styles.parent1}>
              <div className={styles.div4}>5</div>
              <div className={styles.div5}>20230214-008</div>
              <div className={styles.div6}>0.0010</div>
              <div className={styles.div7}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.groupChild3} type="checkbox" />
            </div>
            <div className={styles.parent2}>
              <div className={styles.div4}>6</div>
              <div className={styles.div5}>20230214-008</div>
              <div className={styles.div6}>0.0010</div>
              <div className={styles.div7}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.groupChild3} type="checkbox" />
            </div>
            <div className={styles.parent3}>
              <div className={styles.div4}>7</div>
              <div className={styles.div5}>20230214-008</div>
              <div className={styles.div6}>0.0010</div>
              <div className={styles.div7}>2023-03-14 00:27:55</div>
              <textarea className={styles.rectangleTextarea} />
              <img className={styles.lineIcon} alt="" src="/line-3.svg" />
              <input className={styles.groupChild3} type="checkbox" />
            </div>
          </div>
          <div className={styles.firstDrawParent}>
            <div className={styles.firstDraw}>First Draw</div>
            <div className={styles.firstMult}>First Mult:</div>
            <div className={styles.trackDraw}>Track Draw</div>
            <div className={styles.every}>Every</div>
            <textarea className={styles.groupChild19} />
            <textarea className={styles.groupChild20} />
            <textarea className={styles.groupChild21} />
            <div className={styles.drawsMaximumTrack}>
              draws (Maximum track 120 draws)
            </div>
            <div className={styles.hintEachDraws}>
              Hint: each draws 1 implies equal track
            </div>
            <div className={styles.drawS}>draw (s)</div>
            <div className={styles.multX}>Mult. X</div>
            <textarea className={styles.groupChild22} />
            <textarea className={styles.groupChild23} />
          </div>
          <div className={styles.totalTrackParent}>
            <div className={styles.totalTrack}>Total Track</div>
            <div className={styles.total}>Total</div>
            <div className={styles.totalAmount}>Total Amount</div>
            <div className={styles.balance}>Balance</div>
            <div className={styles.div28}>10</div>
            <div className={styles.div29}>10</div>
            <div className={styles.div30}>10</div>
            <div className={styles.div31}>32.0014</div>
            <div className={styles.totalTrack1}>Total Track</div>
            <div className={styles.betS}>Bet (s)</div>
          </div>
          <div className={styles.stopIfWinParent}>
            <div className={styles.estimateDrawTime}>Stop if Win</div>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.stopIfNotWinParent}>
            <div className={styles.estimateDrawTime}>Stop if not Win</div>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.trackConfirmWrapper}>
            <div className={styles.trackConfirm}>Track Confirm</div>
          </div>
          <div className={styles.no202303140023}>No: 20230314-0023</div>
          <div className={styles.endTime000000}>End time 00:00:00</div>
          <div className={styles.x}>X</div>
        </div>
        <button className={styles.trackWrapper} onClick={openTrack}>
          <div className={styles.track}>Track</div>
        </button>
        <button className={styles.profitMarginChasingNumberWrapper}>
          <div className={styles.profitMarginChasing}>
            Profit Margin Chasing Number
          </div>
        </button>
      </div>
      {isTrackOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTrack}
        >
          <Track onClose={closeTrack} />
        </PortalPopup>
      )}
    </>
  );
};

export default Track1;
