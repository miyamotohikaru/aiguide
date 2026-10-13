import Link from "next/link";
import J from "@/components/J";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1180px] px-6 py-28 sm:px-10">
      <p className="ag-label">404</p>
      <h1 className="mt-6 text-[2rem] leading-snug sm:text-[2.6rem]">ページが見つかりません</h1>
      <p className="mt-6 max-w-[30em] text-soft">
        <J text="これが、用語集の「404」です。◇URLがまちがっているか、ページが移動しました。" />
      </p>
      <Link href="/" className="ag-btn mt-10">
        トップへ戻る
      </Link>
    </div>
  );
}
