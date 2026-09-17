import Link from "next/link";
import J from "@/components/J";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-[4rem] font-semibold leading-none">404</p>
      <h1 className="mt-4 text-[1.5rem] font-bold">ページが見つかりません</h1>
      <p className="mt-3 text-soft">
        <J text="これが、用語集の「404」です。◇URLがまちがっているか、ページが移動しました。" />
      </p>
      <Link href="/" className="mt-8 inline-block rounded-full border-2 border-ink bg-ink px-6 py-2 font-bold text-white">
        トップへ戻る
      </Link>
    </div>
  );
}
