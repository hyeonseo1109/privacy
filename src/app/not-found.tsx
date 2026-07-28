import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-bold tracking-wider text-teal-700">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        정책을 찾을 수 없습니다
      </h1>
      <p className="mt-3 leading-7 text-slate-600">
        요청한 앱의 개인정보처리방침이 아직 등록되지 않았습니다.
      </p>
      <Link
        className="mt-7 inline-flex min-h-11 items-center rounded-full bg-teal-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
        href="/"
      >
        메인으로 이동
      </Link>
    </div>
  );
}
