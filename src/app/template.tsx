/** ページを移るたびに作り直される枠。ふわっと切り替える（globals.css の .ag-page） */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="ag-page">{children}</div>;
}
