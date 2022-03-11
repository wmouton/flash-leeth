import Web3 from "web3";
import checkNetworkMatch from "./checkNetworkMatch";

const loadWindowEthereum = async ({
  onLoadingFailure,
  setAccount,
  onNetworkFailure,
}) => {
  if (window.isBnb === !1 || window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else {
    if (!window.web3) {
      onLoadingFailure("NO_ETHEREUM_BROWSER");
      return;
    }
    window.web3 = new Web3(window.web3.currentProvider);
  }

  checkNetworkMatch({
    onSuccess: async () => {
      window.contract
        ? await window.web3.eth.getAccounts().then(function (e) {
            try {
              setAccount(e[0]);
            } catch (e) {}
          })
        : alert("Error loading contract data");
    },
    onFailure: onNetworkFailure,
  });
};

export default loadWindowEthereum;
