import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { navItems } from "./items-list";
import "./styles.css";

const styles = {
  wrapper: `
    w-max order-2
    phone:order-3
    tablet:order-3
    laptop:order-3
  `,
  content: `
    flex flex-row gap-10 
    phone:hidden
    tablet:hidden
    laptop:hidden
  `,
  contentPhone: `
    relative hidden 
    phone:flex phone:flex-col phone:gap-5
    tablet:flex tablet:flex-col tablet:gap-5
    laptop:flex laptop:flex-col laptop:gap-5
  `,
  link: `
    font-russian text-dark_blue nav-link
    phone:text-[1.1rem]
    tablet:text-[1.4rem]
    laptop:text-[1.4rem]
  `,
  phoneNavbar: `
    hidden 
    phone:absolute
    phone:flex phone:flex-col phone:w-max phone:h-max phone:p-4 phone:gap-2
    phone:bg-white phone:top-[56px] phone:left-[-76px] phone:shadow phone:shadow-pnav
    phone:rounded-b-2xl
    tablet:absolute
    tablet:flex tablet:flex-col tablet:w-max tablet:h-max tablet:p-6 tablet:gap-2
    tablet:bg-white tablet:top-[64px] tablet:left-[-110px] tablet:shadow tablet:shadow-pnav
    tablet:rounded-b-3xl
    laptop:absolute
    laptop:flex laptop:flex-col laptop:w-max laptop:h-max laptop:p-6 tablet:gap-2
    laptop:bg-white laptop:top-[62px] laptop:left-[-106px] laptop:shadow laptop:shadow-pnav
    laptop:rounded-b-3xl
    transition duration-300
  `,
  phoneNavBarButton: `
    w-max h-max py-2 px-2 rounded-full bg-gray-200
    tablet:py-3 tablet:px-3
    laptop:py-3 laptop:px-3
  `,
};

const NavBar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    if (clicked) {
      return setClicked(false);
    }
    return setClicked(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {navItems?.map((item) => (
          <Link className={styles.link} key={item.id} to={item.to}>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className={styles.contentPhone}>
        <button className={styles.phoneNavBarButton} onClick={handleClick}>
          <IoIosArrowUp
            style={{ transition: "all 300ms ease-in-out" }}
            className={clicked ? "rotate-90" : "-rotate-90"}
          />
        </button>
        <div className={`${styles.phoneNavbar} ${clicked ? "translate-x-0" : "translate-x-[150%]"}`}>
          {navItems?.map((item) => (
            <Link onClick={() => setClicked(false)} className={styles.link} key={item.id} to={item.to}>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
