/**
 * ショートカットキー。マウスを使わずに、キーの組み合わせで一瞬で済ませる。
 * mac / win はキーの並び。ない場合は空の配列（画面では「—」）。
 * Mac の記号：⌘ コマンド、⇧ シフト、⌥ オプション、⌃ コントロール。
 */
export type Shortcut = { act: string; mac: string[]; win: string[]; tip?: string };

export const SHORTCUT_GROUPS: { id: string; label: string; lead: string; items: Shortcut[] }[] = [
  {
    id: "basic",
    label: "まず覚える6つ",
    lead: "どのアプリでも使える。これだけで、毎日の作業がかなり速くなります。",
    items: [
      { act: "コピー", mac: ["⌘", "C"], win: ["Ctrl", "C"] },
      { act: "貼り付け", mac: ["⌘", "V"], win: ["Ctrl", "V"] },
      { act: "切り取り", mac: ["⌘", "X"], win: ["Ctrl", "X"] },
      { act: "元に戻す", mac: ["⌘", "Z"], win: ["Ctrl", "Z"], tip: "まちがえたら、まずこれ。何回か押すと、さかのぼれる。" },
      { act: "すべて選ぶ", mac: ["⌘", "A"], win: ["Ctrl", "A"] },
      { act: "保存", mac: ["⌘", "S"], win: ["Ctrl", "S"] },
    ],
  },
  {
    id: "text",
    label: "文字を打つとき",
    lead: "文章を直すときに、マウスに持ちかえなくて済みます。",
    items: [
      { act: "やり直す（戻しすぎたとき）", mac: ["⇧", "⌘", "Z"], win: ["Ctrl", "Y"] },
      { act: "ページの中を検索", mac: ["⌘", "F"], win: ["Ctrl", "F"] },
      { act: "行の頭・終わりへ", mac: ["⌘", "← / →"], win: ["Home / End"] },
      { act: "1語ずつ動く", mac: ["⌥", "← / →"], win: ["Ctrl", "← / →"] },
      { act: "1語まとめて消す", mac: ["⌥", "Delete"], win: ["Ctrl", "Backspace"] },
      { act: "書式なしで貼り付け", mac: ["⌥", "⇧", "⌘", "V"], win: ["Ctrl", "⇧", "V"], tip: "色や大きさを持ちこまずに、文字だけ貼る。使えないアプリもある。" },
      { act: "コピーの履歴から貼る", mac: [], win: ["Win", "V"], tip: "Windows だけ。前にコピーしたものも選べる。" },
      { act: "絵文字を入れる", mac: ["⌃", "⌘", "Space"], win: ["Win", "."] },
    ],
  },
  {
    id: "browser",
    label: "ブラウザ",
    lead: "Chrome・Safari・Edge で使えます。作ったサイトを確かめるときにも。",
    items: [
      { act: "新しいタブ", mac: ["⌘", "T"], win: ["Ctrl", "T"] },
      { act: "タブを閉じる", mac: ["⌘", "W"], win: ["Ctrl", "W"] },
      { act: "閉じたタブを開き直す", mac: ["⇧", "⌘", "T"], win: ["Ctrl", "⇧", "T"], tip: "まちがえて閉じても、これで戻る。" },
      { act: "となりのタブへ", mac: ["⌃", "Tab"], win: ["Ctrl", "Tab"] },
      { act: "アドレスバーへ", mac: ["⌘", "L"], win: ["Ctrl", "L"], tip: "すぐにURLや検索の言葉を打てる。" },
      { act: "再読み込み", mac: ["⌘", "R"], win: ["Ctrl", "R"] },
      { act: "古い表示を捨てて再読み込み", mac: ["⇧", "⌘", "R"], win: ["Ctrl", "⇧", "R"], tip: "公開したのに直っていないときに。" },
      { act: "拡大・縮小・元に戻す", mac: ["⌘", "+ / − / 0"], win: ["Ctrl", "+ / − / 0"] },
      { act: "開発者ツール", mac: ["⌥", "⌘", "I"], win: ["Ctrl", "⇧", "I"], tip: "エラーの文を見るところ。AIに貼るときに使う。" },
    ],
  },
  {
    id: "screen",
    label: "画面とアプリ",
    lead: "スクリーンショットは、AIに「ここが変」と見せるときの必需品です。",
    items: [
      { act: "画面の一部を撮る", mac: ["⇧", "⌘", "4"], win: ["Win", "⇧", "S"], tip: "AIに見せるなら、これがいちばん使う。" },
      { act: "画面全体を撮る", mac: ["⇧", "⌘", "3"], win: ["Win", "PrtSc"] },
      { act: "アプリを切りかえる", mac: ["⌘", "Tab"], win: ["Alt", "Tab"] },
      { act: "アプリやファイルを探して開く", mac: ["⌘", "Space"], win: ["Win"], tip: "押してから名前を打つ。ターミナルもこれで開ける。" },
      { act: "アプリを終わる", mac: ["⌘", "Q"], win: ["Alt", "F4"] },
      { act: "画面をロックする", mac: ["⌃", "⌘", "Q"], win: ["Win", "L"], tip: "席を立つときに。" },
    ],
  },
  {
    id: "files",
    label: "ファイルとフォルダ",
    lead: "Mac は Finder、Windows はエクスプローラーで使えます。",
    items: [
      { act: "新しいフォルダ", mac: ["⇧", "⌘", "N"], win: ["Ctrl", "⇧", "N"] },
      { act: "名前を変える", mac: ["Return"], win: ["F2"] },
      { act: "ゴミ箱へ入れる", mac: ["⌘", "Delete"], win: ["Delete"] },
      { act: "中身をちらっと見る", mac: ["Space"], win: [], tip: "Mac だけ。開かずに中身を確かめられる。" },
    ],
  },
  {
    id: "claude",
    label: "Claude Code",
    lead: "ターミナルで Claude Code を使っているときのキー。Mac も Windows も同じです。",
    items: [
      { act: "AIの作業をとめる", mac: ["Esc"], win: ["Esc"] },
      { act: "前の時点に巻き戻す", mac: ["Esc", "Esc"], win: ["Esc", "Esc"], tip: "Esc を2回続けて押す。" },
      { act: "モードを切りかえる", mac: ["⇧", "Tab"], win: ["⇧", "Tab"], tip: "毎回聞く・編集はおまかせ・計画だけ、など。" },
      { act: "送らずに改行する", mac: ["⇧", "Enter"], win: ["⇧", "Enter"] },
      { act: "前に打った言葉を出す", mac: ["↑"], win: ["↑"] },
      { act: "動きっぱなしの命令を止める", mac: ["⌃", "C"], win: ["Ctrl", "C"], tip: "Mac でも ⌘ ではなく Ctrl。" },
    ],
  },
];
