import Link from "next/link";
import CurrentTime from "./current-time";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Hello, World!
        </h1>
        <CurrentTime />
        <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="font-semibold text-black hover:underline dark:text-zinc-50">
            샘플 1 (헬로우월드+시간)
          </Link>
          <span>|</span>
          <Link href="/sample-counter" className="hover:underline">
            샘플 2 (카운터)
          </Link>
        </nav>
      </main>
    </div>
  );
}
