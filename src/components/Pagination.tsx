import React from 'react';
import { IPagination } from '../interfaces/IPagination';

const styles = {
  body: `w-full flex items-center`,
  pagination: `flex flex-row gap-2`,
  pageItem: `font-english font-bold w-[40px] h-[40px] flex flex-row items-center justify-center border-2 border-blue bg-transparent text-blue rounded-full hover:bg-blue hover:text-white transition duration-100`,
}

const Pagination: React.FC<IPagination> = ({ sizePerPage, totalNews, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalNews / sizePerPage); i++) {
    pageNumbers.push(i)
  }
  
  return (
    <div className={styles.body}>
      <ul className={styles.pagination}>
        {pageNumbers?.map(number => (
          <li key={number}>
            <a href="#" className={styles.pageItem} onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination