import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";
import WalletButton from "./WalletButton/WalletButton";

const styles = {
  wrapper: `
    fixed w-full h-max bg-white flex justify-center py-4 z-[1000]
    phone:py-0
    tablet:py-0
    laptop:py-0
  `,
  container: `
    w-[75%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-row justify-between items-center
    phone:p-4
    tablet:p-6
    laptop:p-6
  `,
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo color="#0C2B3C" />
          <NavBar />
          <WalletButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
