"use client";

import Link from "next/link";
import { useState } from "react";
import CounterDisplay from "./counter-display";

const BUTTON_CLASS_NAME =
  "rounded-lg px-5 py-2.5 font-medium bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700";

export default function SampleCounter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const decrement = () => {
    setHistory((h) => [...h, count]);
    setCount((c) => c - 1);
  };

  const increment = () => {
    setHistory((h) => [...h, count]);
    setCount((c) => c + 1);
  };

  const reset = () => {
    setHistory((h) => [...h, count]);
    setCount(0);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          카운터 샘플
        </h1>
        {/* 부모(SampleCounter)에서 자식(CounterDisplay)으로 count/label/history를 prop으로 전달 */}
        <CounterDisplay count={count} label="현재 카운트" history={history} />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrement}
            className={BUTTON_CLASS_NAME}
          >
            -1
          </button>
          <button type="button" onClick={reset} className={BUTTON_CLASS_NAME}>
            Reset
          </button>
          <button
            type="button"
            onClick={increment}
            className={BUTTON_CLASS_NAME}
          >
            +1
          </button>
        </div>
        <Link
          href="/"
          className="text-sm text-zinc-600 hover:underline dark:text-zinc-400"
        >
          홈으로 돌아가기
        </Link>
      </main>
    </div>
  );
}
