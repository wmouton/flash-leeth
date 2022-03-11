import React, { useState } from "react";
import NameSymbol from "./NameSymbol";
import CryptoFilter from "./CryptoFilter";
import checkNetworkMatch from "../helpers/checkNetworkMatch";
import Loader from "./Loader";
import bnbIcon from "../icons/bnbIcon.png";
import ethIcon from "../icons/eth_icon.png";

function FormScreen(props) {
  const [btnErr, setBtnErr] = useState("");
  const [isEstimateLoading, setIsLoadingEstimate] = useState(false);

  const isFormFilled = () => {
    for (let key of Object.keys(props?.formData)) {
      if (props?.formData[key] === "") {
        setBtnErr(
          `Please add the value for token ${
            key === "tokenName" ? "name" : "symbol"
          } to continue.`
        );
        return false;
      }
    }
    return true;
  };
  const handleKeyDown = (e) => {
    var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (/\d/.test(charStr)) {
      return e.preventDefault();
    }
  };

  const onFailure = (networkFail) => {
    if (networkFail === "UNSUPPORTED_NETWORK")
      setBtnErr(
        "Unsupported network detected by FlashLeeth. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Ethereum Mainnet \n- Binance Smart Chain Mainnet"
      );
    setIsLoadingEstimate(false);
  };

  const onInitiate = async () => {
    if (window.isBnb && props?.formData?.network) {
      setBtnErr(
        "Network Mismatch. Set MetaMask network to Ethereum and reload the page."
      );
    } else if (!window.isBnb && !props?.formData?.network) {
      setBtnErr(
        "Network Mismatch. Set MetaMask network to Special Chain and reload the page."
      );
    } else if (isFormFilled()) {
      setIsLoadingEstimate(true);
      checkNetworkMatch({
        onSuccess: () => {
          props.onInitiate();
          setIsLoadingEstimate(false);
        },
        onFailure,
      });
    }
  };
  return (
    <div>
      <NameSymbol
        label="TOKEN NAME"
        input="Enter Name"
        handleKeyDown={handleKeyDown}
        handleInputChange={(e) => {
          props.handleFormChange(e.target.value?.trim(), "tokenName");
        }}
      />
      <NameSymbol
        label="TOKEN SYMBOL"
        input="Enter Symbol"
        handleKeyDown={handleKeyDown}
        handleInputChange={(e) => {
          props.handleFormChange(e.target.value?.trim(), "tokenSymbol");
        }}
      />
      <CryptoFilter
        handleOptionChange={(type) => props.setCryptoType(type === "ETH")}
        selectedItem={props?.formData?.network ? "ETH" : "BNB"}
        selectedImg={props?.formData?.network ? ethIcon : bnbIcon}
        optionsList={[
          { text: "ETH", img: ethIcon },
          { text: "BNB", img: bnbIcon },
        ]}
      />
      {btnErr && <p className="error-text-mesg">{btnErr}</p>}
      {isEstimateLoading ? (
        <Loader />
      ) : (
        <button onClick={onInitiate}>INITIATE</button>
      )}
    </div>
  );
}

export default FormScreen;
