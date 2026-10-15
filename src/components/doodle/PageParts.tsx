import Doodle, { C, Fill, Line } from "./Doodle";

/**
 * ページの部位の図。
 * 左にパソコンで見たページ全体、右下にスマホ。
 * 各部位に点を打ち、引き出し線の先に番号と名前を置く。
 * 番号は下の一覧（PARTS の並び）と対応させる。
 *
 * compact … スマホ用。名前と引き出し線を省き、番号の丸を大きくして部位の上に直接置く。
 *           名前まで描くと、狭い幅では字が読めない大きさになるため。
 */

const S = 131; // フィルターの seed
const SOFT = "#8a867d";

/** 引き出し線の先の、番号と名前 */
function Tag({
  x,
  y,
  no,
  name,
  side,
}: {
  x: number;
  y: number;
  no: number;
  name: string;
  side: "left" | "right";
}) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={12}
        fill="var(--ag-paper)"
        stroke={C.ink}
        strokeWidth={1.3}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={13}
        fontFamily="var(--ag-mono)"
        fill={C.ink}
      >
        {no}
      </text>
      <text
        x={side === "left" ? x - 18 : x + 18}
        y={y}
        textAnchor={side === "left" ? "end" : "start"}
        dominantBaseline="central"
        fontSize={18}
        fill={C.ink}
      >
        {name}
      </text>
    </g>
  );
}

/** 指している場所の点 */
function Dot({ x, y }: { x: number; y: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={4.5}
      fill={C.ink}
      stroke="var(--ag-paper)"
      strokeWidth={1.5}
    />
  );
}

/** 引き出し線（細く、すこし揺らす） */
function Lead({ d, seed }: { d: string; seed: number }) {
  return <Line d={d} seed={seed} width={1.3} />;
}

/** スマホ用の番号の丸 */
function Badge({ x, y, no }: { x: number; y: number; no: number }) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={19}
        fill="var(--ag-paper)"
        stroke={C.ink}
        strokeWidth={2}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={22}
        fontFamily="var(--ag-mono)"
        fill={C.ink}
      >
        {no}
      </text>
    </g>
  );
}

/** スマホ用の、番号の丸の位置（部位の上） */
const BADGES: [number, number][] = [
  [352, 91], // 1 ヘッダー
  [589, 91], // 2 ナビゲーション
  [815, 470], // 3 ハンバーガーメニュー（スマホの上。線で指す）
  [284, 200], // 4 ヒーロー
  [702, 200], // 5 ファーストビュー（括弧の上）
  [346, 277], // 6 CTA
  [345, 411], // 7 カード
  [650, 380], // 8 グリッド／カラム
  [300, 693], // 9 フッター
];

export default function PageParts({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  // PC用とスマホ用の2枚が同じページに載るので、フィルターの id がぶつからないよう seed を分ける
  const s = compact ? S + 2 : S;
  return (
    <Doodle
      viewBox={compact ? "250 0 640 760" : "110 0 880 760"}
      size={1000}
      seed={s}
      className={className}
      title="ページの部位の図"
    >
      {/* ===== パソコンで見たページ ===== */}
      {/* ブラウザの枠 */}
      <Fill d="M260 40 H680 V70 H260 Z" fill={C.cream} seed={s} />
      <circle cx={278} cy={55} r={4} fill={C.terracotta} />
      <circle cx={292} cy={55} r={4} fill={C.mustard} />
      <circle cx={306} cy={55} r={4} fill={C.green} />
      <Line d="M330 49 H560 V61 H330 Z" seed={s} width={1.4} />

      {/* ヘッダー */}
      <Fill
        d="M260 70 H680 V112 H260 Z"
        fill={C.cream}
        seed={s}
        opacity={0.55}
      />
      <Fill
        d="M282 84 H334 V98 H282 Z"
        fill={C.terracotta}
        seed={s}
        opacity={0.85}
      />
      <Line d="M530 91 H556 M576 91 H602 M622 91 H648" seed={s} width={3} />
      <Line d="M260 112 H680" seed={s} width={1.6} />

      {/* ヒーロー */}
      <Fill d="M290 148 H560 V168 H290 Z" fill={C.ink} seed={s} opacity={0.8} />
      <Fill d="M290 178 H470 V198 H290 Z" fill={C.ink} seed={s} opacity={0.8} />
      <Line d="M290 222 H520 M290 238 H460" seed={s} width={2} color={SOFT} />
      <Fill
        d="M584 150 q36 -14 62 12 q20 30 -4 58 q-30 22 -60 2 q-22 -30 2 -72 Z"
        fill={C.green}
        seed={s}
        opacity={0.65}
      />
      {/* CTA ボタン */}
      <Fill d="M290 262 H402 V292 H290 Z" fill={C.terracotta} seed={s} />
      <Line d="M290 262 H402 V292 H290 Z" seed={s} width={1.8} />
      <Line d="M314 277 H378" seed={s} width={2.4} color={C.cream} />

      {/* 最初の画面の下端 */}
      <path
        d="M250 330 H690"
        stroke={SOFT}
        strokeWidth={1.3}
        strokeDasharray="6 5"
        fill="none"
      />

      {/* カードの節 */}
      <Fill
        d="M290 352 H400 V364 H290 Z"
        fill={C.ink}
        seed={s}
        opacity={0.75}
      />
      {[
        { x: 290, fill: C.blue },
        { x: 415, fill: C.mustard },
        { x: 540, fill: C.pink },
      ].map((c) => (
        <g key={c.x}>
          <Fill
            d={`M${c.x} 386 H${c.x + 110} V436 H${c.x} Z`}
            fill={c.fill}
            seed={s}
            opacity={0.8}
          />
          <Line
            d={`M${c.x} 386 H${c.x + 110} V516 H${c.x} Z`}
            seed={s}
            width={1.8}
          />
          <Line d={`M${c.x + 10} 454 H${c.x + 78}`} seed={s} width={3} />
          <Line
            d={`M${c.x + 10} 474 H${c.x + 96} M${c.x + 10} 490 H${c.x + 70}`}
            seed={s}
            width={1.8}
            color={SOFT}
          />
        </g>
      ))}
      {/* グリッド（見えないマス目） */}
      <path
        d="M290 374 V528 M400 374 V528 M415 374 V528 M525 374 V528 M540 374 V528 M650 374 V528"
        stroke={C.blue}
        strokeWidth={1.4}
        strokeDasharray="5 4"
        fill="none"
      />

      {/* 文章の節 */}
      <Line
        d="M290 560 H610 M290 578 H640 M290 596 H560 M290 614 H600"
        seed={s}
        width={1.8}
        color={SOFT}
      />

      {/* フッター */}
      <Fill
        d="M260 656 H680 V730 H260 Z"
        fill={C.ink}
        seed={s}
        opacity={0.72}
      />
      <Line
        d="M290 684 H360 M290 702 H340"
        seed={s}
        width={2.2}
        color={C.cream}
      />
      <Line d="M560 693 H650" seed={s} width={2.2} color={C.cream} />

      {/* ページの外枠 */}
      <Line d="M260 40 H680 V730 H260 Z" seed={s} />

      {/* ===== スマホ ===== */}
      <Fill
        d="M768 515 H862 V725 H768 Z"
        fill={C.cream}
        seed={s}
        opacity={0.45}
      />
      <Fill d="M768 515 H862 V542 H768 Z" fill={C.cream} seed={s} />
      <Fill
        d="M776 523 H802 V533 H776 Z"
        fill={C.terracotta}
        seed={s}
        opacity={0.85}
      />
      <Line
        d="M836 522 H854 M836 528 H854 M836 534 H854"
        seed={s}
        width={2.2}
      />
      <Fill d="M776 558 H842 V567 H776 Z" fill={C.ink} seed={s} opacity={0.8} />
      <Fill d="M776 573 H822 V582 H776 Z" fill={C.ink} seed={s} opacity={0.8} />
      <Fill d="M776 594 H822 V608 H776 Z" fill={C.terracotta} seed={s} />
      <Fill
        d="M776 622 H854 V662 H776 Z"
        fill={C.blue}
        seed={s}
        opacity={0.7}
      />
      <Line d="M776 622 H854 V700 H776 Z" seed={s} width={1.6} />
      <Line d="M760 498 H870 V745 H760 Z" seed={s} />
      <Line d="M800 735 H830" seed={s} width={2} />

      {/* ===== 番号（スマホ用） ===== */}
      {compact && (
        <>
          <Line d="M690 72 H702 V328 H690" seed={s} width={1.6} />
          <Lead seed={s} d="M815 489 V500 M845 503 V518" />
          {BADGES.map(([x, y], i) => (
            <Badge key={i} x={x} y={y} no={i + 1} />
          ))}
        </>
      )}

      {/* ===== 引き出し線と名前（PC用） ===== */}
      {!compact && (
        <>
          {/* 1 ヘッダー */}
          <Lead seed={s} d="M234 91 H352" />
          <Dot x={352} y={91} />
          <Tag x={222} y={91} no={1} name="ヘッダー" side="left" />

          {/* 2 ナビゲーション */}
          <Lead seed={s} d="M589 86 V22 H738" />
          <Dot x={589} y={91} />
          <Tag x={750} y={22} no={2} name="ナビゲーション" side="right" />

          {/* 3 ハンバーガーメニュー */}
          <Lead seed={s} d="M750 482 V490 H845 V518" />
          <Dot x={845} y={522} />
          <Tag
            x={750}
            y={470}
            no={3}
            name="ハンバーガーメニュー"
            side="right"
          />

          {/* 4 ヒーロー */}
          <Lead seed={s} d="M234 200 H284" />
          <Dot x={284} y={200} />
          <Tag x={222} y={200} no={4} name="ヒーロー" side="left" />

          {/* 5 ファーストビュー（最初の画面に入る範囲を括弧で） */}
          <Line d="M690 72 H702 V328 H690" seed={s} width={1.6} />
          <Lead seed={s} d="M702 200 H738" />
          <Tag x={750} y={200} no={5} name="ファーストビュー" side="right" />

          {/* 6 CTA */}
          <Lead seed={s} d="M234 277 H300" />
          <Dot x={300} y={277} />
          <Tag x={222} y={277} no={6} name="CTA" side="left" />

          {/* 7 カード */}
          <Lead seed={s} d="M234 454 H304" />
          <Dot x={304} y={454} />
          <Tag x={222} y={454} no={7} name="カード" side="left" />

          {/* 8 グリッド／カラム */}
          <Lead seed={s} d="M650 410 H738" />
          <Dot x={650} y={410} />
          <Tag x={750} y={410} no={8} name="グリッド／カラム" side="right" />

          {/* 9 フッター */}
          <Lead seed={s} d="M234 693 H300" />
          <Dot x={300} y={693} />
          <Tag x={222} y={693} no={9} name="フッター" side="left" />
        </>
      )}
    </Doodle>
  );
}
