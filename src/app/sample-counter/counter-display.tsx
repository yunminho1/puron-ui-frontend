interface CounterDisplayProps {
  count: number;
  label: string;
  history: number[];
}

// 자식 컴포넌트: 부모(SampleCounter)로부터 전달받은 count/label/history 값을 표시만 하는 순수 표시 컴포넌트.
// 내부에 상태(useState)나 별도 계산 로직을 갖지 않는다.
export default function CounterDisplay({
  count,
  label,
  history,
}: CounterDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <p className="text-7xl font-bold tabular-nums text-black dark:text-zinc-50">
        {count}
      </p>
      {history.length > 0 && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {history.map((value, index) => `${index + 1}. ${value}`).join(" → ")}
        </p>
      )}
    </div>
  );
}
