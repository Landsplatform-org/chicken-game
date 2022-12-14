import React from 'react';
import UserData from './UserData';
import UserPageHeader from './UserPageHeader';

const styles = {
  wrapper: `flex flex-col gap-40`,
};

const UserPageMain = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageHeader />
      <UserData />
    </div>
  )
}

export default UserPageMain