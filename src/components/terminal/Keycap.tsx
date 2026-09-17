/** キーボードのキーの絵 */
export default function Keycap({ k, big = false }: { k: string; big?: boolean }) {
  return (
    <kbd
      className={`inline-flex items-center justify-center rounded-xl border-2 border-ink bg-card font-round font-extrabold text-ink shadow-[0_4px_0_rgba(35,35,63,0.9)] ${
        big ? "min-w-[3.4rem] px-3 py-2 text-[1.15rem]" : "min-w-[2.2rem] px-2 py-0.5 text-[0.9rem]"
      }`}
    >
      {k}
    </kbd>
  );
}
