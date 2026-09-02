"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    // 1. 컴포넌트가 언마운트될 때 fetch 요청을 취소하기 위한 내장 API
    const controller = new AbortController();

    async function fetchTime() {
      try {
        const res = await fetch("/api/sample/current-time", {
          signal: controller.signal, // 취소 신호 연결
        });
        const data: { currentTime: string } = await res.json();
        setCurrentTime(data.currentTime);
      } catch (error) {
        const err = error as { name?: string };
        if (err.name !== "AbortError") {
          setCurrentTime(null);
        }
      }
    }

    fetchTime();

    // 2. 컴포넌트가 사라질 때 요청 취소 및 메모리 누수 방지
    return () => controller.abort();
  }, []);

  return (
    <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      {currentTime ?? "불러오는 중..."}
    </p>
  );
}