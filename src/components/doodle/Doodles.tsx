import Doodle, { C, Fill, Line } from "./Doodle";

/**
 * 小さな手描きイラスト。
 * ・線は少なく、形は単純に。塗りは線からすこしはみ出させる。
 * ・1枚につき色は2〜3色まで。
 */

/** 紙ひこうき（届ける） */
export function PaperPlane({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={5}>
      <Fill d="M12 54 L104 22 L70 96 L56 68 Z" fill={C.blue} seed={5} opacity={0.9} />
      <Fill d="M56 68 L104 22 L70 96 Z" fill="#6b8cba" seed={5} opacity={0.55} />
      <Line d="M12 54 L104 22 L70 96 L56 68 Z" seed={5} width={2.4} />
      <Line d="M56 68 L104 22" seed={5} width={2} />
      <Line d="M56 68 L40 82" seed={5} width={2} />
    </Doodle>
  );
}

/** ノートパソコン（自分のパソコン） */
export function Laptop({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={7}>
      <Fill d="M26 28 H96 V74 H26 Z" fill={C.cream} seed={7} />
      <Fill d="M34 36 H70 V44 H34 Z" fill={C.terracotta} seed={7} opacity={0.85} />
      <Fill d="M34 52 H84 V57 H34 Z" fill={C.mustard} seed={7} opacity={0.75} />
      <Fill d="M12 80 H110 L102 92 H20 Z" fill={C.cream} seed={7} />
      <Line d="M26 28 H96 V74 H26 Z" seed={7} />
      <Line d="M12 80 H110 L102 92 H20 Z" seed={7} />
      <Line d="M48 86 H74" seed={7} width={2} />
    </Doodle>
  );
}

/** 雲（置き場所・ホスティング） */
export function Cloud({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={11}>
      <Fill
        d="M34 76 q-16 0 -16 -14 q0 -13 14 -15 q2 -17 20 -17 q15 0 20 13 q4 -4 11 -4 q14 0 15 15 q13 2 13 12 q0 10 -14 10 Z"
        fill={C.blue}
        seed={11}
        opacity={0.55}
      />
      <Line
        d="M34 76 q-16 0 -16 -14 q0 -13 14 -15 q2 -17 20 -17 q15 0 20 13 q4 -4 11 -4 q14 0 15 15 q13 2 13 12 q0 10 -14 10 Z"
        seed={11}
      />
      <Line d="M60 60 V92 M50 70 L60 58 L70 70" seed={11} width={2.4} />
    </Doodle>
  );
}

/** スマートフォン（みんなが見る） */
export function Phone({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={13}>
      <Fill d="M40 14 H82 V106 H40 Z" fill={C.cream} seed={13} />
      <Fill d="M46 26 H76 V62 H46 Z" fill={C.green} seed={13} opacity={0.75} />
      <Fill d="M46 68 H70 V74 H46 Z" fill={C.mustard} seed={13} opacity={0.9} />
      <Fill d="M46 80 H64 V86 H46 Z" fill={C.terracotta} seed={13} opacity={0.8} />
      <Line d="M40 14 H82 V106 H40 Z" seed={13} />
      <Line d="M54 98 H68" seed={13} width={2} />
    </Doodle>
  );
}

/** フォルダ（手元のファイル） */
export function Folder({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={17}>
      <Fill d="M16 34 H52 L60 44 H104 V92 H16 Z" fill={C.mustard} seed={17} opacity={0.85} />
      <Line d="M16 34 H52 L60 44 H104 V92 H16 Z" seed={17} />
      <Line d="M16 54 H104" seed={17} width={2} />
    </Doodle>
  );
}

/** 本（用語集） */
export function Book({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={19}>
      <Fill d="M18 26 H58 V96 H18 Z" fill={C.terracotta} seed={19} opacity={0.75} />
      <Fill d="M62 26 H102 V96 H62 Z" fill={C.pink} seed={19} opacity={0.7} />
      <Line d="M18 26 H58 V96 H18 Z M62 26 H102 V96 H62 Z" seed={19} />
      <Line d="M60 24 V98" seed={19} width={2.2} />
      <Line d="M26 44 H48 M26 56 H44 M72 44 H94 M72 56 H88" seed={19} width={1.8} />
    </Doodle>
  );
}

/** 吹き出し（プロンプト） */
export function Bubble({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={23}>
      <Fill d="M16 24 H104 V78 H46 L28 96 V78 H16 Z" fill={C.mustard} seed={23} opacity={0.8} />
      <Line d="M16 24 H104 V78 H46 L28 96 V78 H16 Z" seed={23} />
      <Line d="M30 44 H88 M30 58 H70" seed={23} width={2} />
    </Doodle>
  );
}

/** 画面（ターミナル） */
export function Window({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={29}>
      <Fill d="M14 26 H106 V94 H14 Z" fill={C.cream} seed={29} />
      <Fill d="M14 26 H106 V42 H14 Z" fill={C.ink} seed={29} opacity={0.7} />
      <Line d="M14 26 H106 V94 H14 Z" seed={29} />
      <Line d="M14 42 H106" seed={29} width={2} />
      <Line d="M28 58 L38 66 L28 74" seed={29} width={2.8} color={C.green} />
      <Line d="M46 74 H78" seed={29} width={2.8} color={C.green} />
      <Line d="M28 84 H66" seed={29} width={2.2} />
    </Doodle>
  );
}

/** 道具いろいろ（AIの選び方） */
export function Tools({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={31}>
      {/* えんぴつ */}
      <Fill d="M24 86 L30 60 L40 62 L34 88 Z" fill={C.mustard} seed={31} />
      <Fill d="M24 86 L34 88 L26 96 Z" fill={C.ink} seed={31} opacity={0.75} />
      <Line d="M24 86 L30 60 L40 62 L34 88 L26 96 Z" seed={31} width={2.2} />
      {/* 電球 */}
      <Fill d="M72 30 q16 0 16 16 q0 10 -8 14 v8 h-16 v-8 q-8 -4 -8 -14 q0 -16 16 -16 Z" fill={C.mustard} seed={31} opacity={0.8} />
      <Line d="M72 30 q16 0 16 16 q0 10 -8 14 v8 h-16 v-8 q-8 -4 -8 -14 q0 -16 16 -16 Z" seed={31} width={2.2} />
      <Line d="M64 74 h16 M66 80 h12" seed={31} width={2} />
      {/* きらめき */}
      <Line d="M98 26 v8 M94 30 h8" seed={31} width={2} color={C.terracotta} />
    </Doodle>
  );
}

/** スラッシュの札（コマンド） */
export function Slash({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={37}>
      <Fill d="M18 34 H102 V86 H18 Z" fill={C.green} seed={37} opacity={0.62} />
      <Line d="M18 34 H102 V86 H18 Z" seed={37} />
      <Line d="M72 44 L48 78" seed={37} width={4.6} />
      <Line d="M28 52 L36 60 L28 68" seed={37} width={2.6} />
      <Line d="M84 70 h10" seed={37} width={2.6} />
    </Doodle>
  );
}

/** 地図（参考リンク） */
export function Map({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={41}>
      <Fill d="M14 32 L46 22 L76 34 L106 24 V88 L76 98 L46 86 L14 96 Z" fill={C.green} seed={41} opacity={0.6} />
      <Line d="M14 32 L46 22 L76 34 L106 24 V88 L76 98 L46 86 L14 96 Z" seed={41} />
      <Line d="M46 22 V86 M76 34 V98" seed={41} width={2} />
      <Line d="M30 70 q14 -22 32 -10 q14 10 28 -8" seed={41} width={2.2} color={C.terracotta} />
      <Fill d="M86 44 a5 5 0 1 0 0.1 0" fill={C.terracotta} seed={41} />
    </Doodle>
  );
}

/** チェック（できた） */
export function Check({ className = "" }: { className?: string }) {
  return (
    <Doodle viewBox="0 0 120 120" className={className} seed={43}>
      <Fill d="M60 20 a40 40 0 1 0 0.1 0" fill={C.green} seed={43} opacity={0.35} />
      <Line d="M38 62 L54 78 L84 42" seed={43} width={4} />
    </Doodle>
  );
}
