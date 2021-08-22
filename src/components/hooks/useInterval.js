/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

/**
 * useInterval - Helper of setInterval()
 * @param {function} callback
 * @param {number} delay
 */
export default function useInterval(callback, delay) {
  const timerRef = useRef();

  // Remember the function
  useEffect(() => {
    timerRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // If delay !== null then set the interval or simply call the function
    function callFunc() {
      timerRef.current();
    }
    if (delay !== null) {
      const timer = setInterval(callFunc, delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
}
