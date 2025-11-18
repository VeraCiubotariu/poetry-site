/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef } from "react";

export const useDebounce = (cb: any, delay: number) => {
  const timeoutId = useRef<number | undefined>(undefined);

  return function debouncedFunction(...args: any[]) {
    if (timeoutId.current !== undefined) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(() => cb(...args), delay);
  };
};
