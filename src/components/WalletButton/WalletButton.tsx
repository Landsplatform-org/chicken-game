import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Web3 from "web3";

import { useNavigate } from "react-router-dom";

import Modal from "react-modal";
import MetamaskIsNotInstalled from "../MetamaskIsNotInstalled";
import wallet from "../../assets/icons/metamask-icon.svg";
import user from "../../assets/icons/user-white.svg";

import "./styles.css";

Modal.setAppElement(document.getElementById("root")!);

const styles = {
  wrapper: `
    w-max flex order-3 ml-24
    phone:w-max phone:order-2 phone:mr-1
    tablet:w-max tablet:order-2 tablet:mr-2
    laptop:w-max laptop:order-2 laptop:mr-4
    desktop:ml-10
  `,
  connectBody: `
    py-1 px-9 bg-blue rounded-full wallet-btn
    phone:py-1 phone:px-6
    tablet:py-1 tablet:px-10
    laptop:py-2 laptop:px-10
  `,
  connectedBodyContainer: `flex flex-row gap-1`,
  connectedBody: `
    py-1 px-1 bg-blue rounded-full wallet-btn flex flex-row gap-3 justify-between items-center
    phone:py-1 phone:px-1 phone:gap-1
    tablet:py-1 tablet:px-2
    laptop:py-1 laptop:px-1
  `,
  userPageNavigateBtn: `
    text-blue text-[1.1rem] px-2 rounded-full bg-blue wallet-btn
    phone:px-3
    tablet:px-3
  `,
  buttonSpan: `
    block font-russian text-white font-semibold
    phone:hidden phone:text-[0.8rem]
    tablet:text-[1.2rem]
  `,
  buttonSpanAddress: `
    block font-russian text-white font-semibold
    phone:block phone:text-[0.8rem] phone:w-[93px] phone:overflow-hidden
    tablet:text-[1.2rem]
  `,
  walletIcon: ` 
    hidden 
    phone:block phone:w-[32px] phone:h-[32px]
  `,
  walletBalance: `
    w-max h-max flex flex-row items-center gap-1 bg-white rounded-full px-1 font-rusian text-dark_blue font-semibold
    phone:text-[0.9rem] phone:py-1 phone:px-1
    tablet:text-[1.1rem] tablet:px-1
  `,
  logo: `
    w-[20px] h-[20px]
    phone:w-[20px] phone:h-[20px]
  `,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    padding: 0,
    border: "none",
    zIndex: 1002,
  },
  overlay: {
    overflow: "hidden",
    backgroundColor: "rgba(10, 11, 13, 0.5)",
    backdropFilter: "blur(2px)",
    zIndex: 1001,
  },
};

const WalletButton = () => {
  let navigate = useNavigate();

  const [isMetamask, setIsMetamask] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<string>("");

  const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");

  const getMetamask = useCallback(() => {
    if (typeof window.ethereum !== "undefined") {
      checkIfWalletIsConnected();
      setIsMetamask(true);
      return true;
    } else {
      setIsMetamask(false);
      return false;
    }
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        const account = accounts[0];
        setUserAddress(account);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum account");
    }
  };

  const getWeiBalance = (user: string) => {
    web3.eth.getBalance(user).then((wei) => {
      return getBalance(wei);
    });
  };

  const getBalance = (wei: string) => {
    const balance = web3.utils.fromWei(wei, "ether");
    setUserBalance(balance);
  };

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setUserAddress(account);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object");
    }
  };

  useLayoutEffect(() => {
    if (getMetamask()) {
      window.ethereum.on("accountsChanged", async () => {
        checkIfWalletIsConnected();
      });
    }
  }, [getMetamask]);

  useEffect(() => {
    if (userAddress.length) {
      getWeiBalance(userAddress);
    }
  }, [userAddress, getWeiBalance]);

  if (!isMetamask) {
    return (
      <Modal isOpen={true} style={customStyles}>
        <MetamaskIsNotInstalled />
      </Modal>
    );
  }

  return (
    <div className={styles.wrapper}>
      {!loggedIn ? (
        <button
          onClick={() =>
            connectWallet().then(() => navigate("/chicken-game/user-page"))
          }
          className={styles.connectBody}
        >
          <span className={styles.buttonSpan}>Подключить кошелек</span>
          <img className={styles.walletIcon} src={wallet} alt="wallet icon" />
        </button>
      ) : (
        <div className={styles.connectedBodyContainer}>
          <button className={styles.connectedBody}>
            <div className={styles.walletBalance}>
              <img
                className={styles.logo}
                src="https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png"
                alt="bnb-logo"
              />
              <span>{Math.round(parseFloat(userBalance) * 10000) / 10000}</span>
            </div>
            <span className={styles.buttonSpanAddress}>
              {userAddress?.substring(0, 7)}...{userAddress?.substring(32, 42)}
            </span>
          </button>
          <button
            onClick={() => navigate("/chicken-game/user-page")}
            className={styles.userPageNavigateBtn}
          >
            <img src={user} alt="user-page-navigate-logo" />
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletButton;
