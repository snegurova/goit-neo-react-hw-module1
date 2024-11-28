import React from 'react';
import clsx from 'clsx';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.cell}>Type</th>
            <th className={styles.cell}>Amount</th>
            <th className={styles.cell}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr className={styles.row} key={id}>
              <td className={clsx(styles.cell, styles.firstCol)}>{type}</td>
              <td className={styles.cell}>{amount}</td>
              <td className={styles.cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
