import React, { useState, useEffect } from "react";
import { IUserAddData } from '../interfaces/IUserAddData';

const styles = {
  statsContainer: `
    px-12 py-6 bg-light_blue flex flex-row justify-between items-center shadow shadow-3xl
    phone:px-4
  `,
  stats: `
    font-russian font-normal text-white text-[1.25rem]
    phone:text-[0.85rem]
  `,
}

const UsersAddDataTemplate: React.FC<IUserAddData> = ({ txhash, sum, donated, method, date, status }) => {
  const [user, setUser] = useState(false);
  const [money, setMoney] = useState(false);
  const [donation, setDonation] = useState(false);
  const [way, setWay] = useState(false);
  const [donDate, setDonDate] = useState(false);
  const [txStatus, setTxStatus] = useState(false);

  useEffect(() => {
    if(txhash?.length) setUser(true)
    if(sum?.length) setMoney(true)
    if(donated?.length) setDonation(true)
    if(method?.length) setWay(true)
    if(date?.length) setDonDate(true)
    if(status?.length) setTxStatus(true)
  }, [txhash, sum, donated, method, date, status])

  
  return (
    <div className={styles.statsContainer}>
      {user && <span className={styles.stats}>{txhash}</span>}      
      {money && <span className={styles.stats}>{sum}</span>}
      {donation && <span className={styles.stats}>{donated}</span>}
      {way && <span className={styles.stats}>{method}</span>}
      {donDate && <span className={styles.stats}>{date}</span>}
      {txStatus && <span className={styles.stats}>{status}</span>}
    </div>
  );
};

export default UsersAddDataTemplate;
