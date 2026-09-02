import type { NextConfig } from "next";

// 환경별(plan/dev/prod) 빌드 산출물을 분리 보관하기 위한 distDir 설정.
// .env.{plan|dev|prod}의 NEXT_DIST_DIR 값을 `dotenv -e .env.{plan|dev|prod} -- next build`로 로드해서 사용한다.
// (Next.js 16 `next build`/`next start`는 `--env-file` 옵션을 지원하지 않아 dotenv-cli로 대체)
// (docs/05-deployment/phase-1/environment-setup-plan.md "프론트엔드" 절)
const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
