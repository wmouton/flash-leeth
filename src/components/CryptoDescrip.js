import React from "react";
import "../css/CryptoFilter.css";

function CryptoDescrip(props) {
  return (
    <div className="cryptofilter">
      <div className="cryptodesc">
        <p className="crypto-desc-list">
          <span>Token Deployment Fee</span>{" "}
          <span>
            {props?.tokenFee} {props?.currency}
          </span>
        </p>
        <p className="crypto-desc-list">
          <span>{props?.dex} Swapping Fee</span>{" "}
          <span>
            {props.swapFee} {props?.currency}
          </span>
        </p>
        <p className="crypto-desc-list">
          <span>Total Cost</span>{" "}
          <span>
            {props.totalFee} {props?.currency}
          </span>
        </p>
        <hr />
        <p className="crypto-desc-list">
          <span>Profit from Arbitrage</span>{" "}
          <span>
            {props.gain} {props?.currency}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CryptoDescrip;
