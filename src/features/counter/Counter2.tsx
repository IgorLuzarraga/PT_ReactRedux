// import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectAmount,
  setAmount,
} from "./counterSlice2";
import styles from "./Counter.module.css";

export function Counter2() {
  return (
    <div>
      <div className={styles.row}>
        <DecrementBtn />
        <CounterBox />
        <IncrementBtn />
      </div>
      <div className={styles.row}>
        <AmountBox />
        <AddAmountBtn />
        <AddAsyncBtn />
        <AddIfOddBtn />
      </div>
    </div>
  );
}

const DecrementBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.button}
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
    >
      -
    </button>
  );
};

const IncrementBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.button}
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
      +
    </button>
  );
};

const CounterBox = () => {
  const count = useAppSelector(selectCount);

  return <span className={styles.value}>{count}</span>;
};

const AmountBox = () => {
  const dispatch = useAppDispatch();
  const incrementValue = useAppSelector(selectAmount);
  return (
    <input
      className={styles.textbox}
      aria-label="Set increment amount"
      value={incrementValue.toString()}
      onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
    />
  );
};

const AddAmountBtn = () => {
  const dispatch = useAppDispatch();
  const incrementValue = useAppSelector(selectAmount);
  return (
    <button
      className={styles.button}
      onClick={() => dispatch(incrementByAmount(incrementValue))}
    >
      Add Amount
    </button>
  );
};

const AddAsyncBtn = () => {
  const dispatch = useAppDispatch();
  const incrementValue = useAppSelector(selectAmount);
  return (
    <button
      className={styles.asyncButton}
      onClick={() => dispatch(incrementAsync(incrementValue))}
    >
      Add Async
    </button>
  );
};

const AddIfOddBtn = () => {
  const dispatch = useAppDispatch();
  const incrementValue = useAppSelector(selectAmount);
  return (
    <button
      className={styles.button}
      onClick={() => dispatch(incrementIfOdd(incrementValue))}
    >
      Add If Odd
    </button>
  );
};
