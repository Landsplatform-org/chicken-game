import React, { useContext } from "react";

import SideBar from "../components/SideBar/SideBar";
import UserPageMain from "../components/UserPageMain";
import ChickensShop from "../components/ChickensShop/ChickensShop"; 
import ChickensFarm from "../components/ChickensFarm/ChickensFarm";
import ChickensUpgrade from "../components/ChickensUpgrade/ChickensUpgrade";

import { SidebarContext } from "../context/UserPageSidebarContext";

const styles = {
  wrapper: `flex flex-col gap-40 mt-36`,
};

const UserPage = () => {
  const { component } = useContext(SidebarContext)
  
  return (
    <div className={styles.wrapper}>
      <SideBar />
      {component === "main-page" && <UserPageMain />}
      {component === "farm-page" && <ChickensFarm />}
      {component === "shop-page" && <ChickensShop />}
      {component === "upgrade-page" && <ChickensUpgrade />}
    </div>
  );
};

export default UserPage;
