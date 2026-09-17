import { Browser, App, Hot, Line } from "./Frame";
import Icon from "../illust/Icons";

/* ---------- ルートA ---------- */
export function SignUpMock() {
  return (
    <Browser url="app.netlify.com">
      <div className="grid gap-2.5">
        <p className="font-round text-[16px] font-extrabold">Netlify</p>
        <Line w="80%" />
        <Line w="60%" />
        <div className="mt-2 flex gap-2">
          <Hot>Sign up</Hot>
          <span className="rounded-lg border-2 border-line px-3 py-1.5 font-bold text-soft">Log in</span>
        </div>
      </div>
    </Browser>
  );
}

export function DropMock() {
  return (
    <Browser url="app.netlify.com/drop">
      <div className="relative flex h-40 flex-col items-center justify-center gap-2 rounded-xl border-[3px] border-dashed border-sky bg-sky-bg text-center">
        <Icon name="cloud" className="h-9 w-9 text-sky" />
        <p className="font-bold text-sky">ここにフォルダを落とす</p>
        {/* 落ちてくるフォルダ */}
        <div className="ag-float absolute -right-2 -top-3 flex items-center gap-1.5 rounded-xl border-[3px] border-ink bg-sun px-2.5 py-1.5 font-bold shadow-[0_4px_0_rgba(35,35,63,0.9)]">
          <Icon name="folder" className="h-4 w-4" strokeWidth={2.6} />
          mysite
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] text-soft">中に index.html があるフォルダ</p>
    </Browser>
  );
}

export function DoneMock({ url }: { url: string }) {
  return (
    <div className="relative" aria-hidden>
      <Browser url={url}>
        <div className="grid gap-2">
          <span className="block h-16 rounded-lg bg-gradient-to-br from-sky-bg to-pink-bg" />
          <Line w="70%" />
          <Line w="50%" />
        </div>
      </Browser>
      <div className="absolute -bottom-4 -right-2 flex h-24 w-14 flex-col gap-1 rounded-xl border-[3px] border-ink bg-card p-1.5 shadow-[0_4px_0_rgba(35,35,63,0.9)]">
        <span className="block h-7 rounded bg-gradient-to-br from-sky-bg to-pink-bg" />
        <Line w="90%" />
        <Line w="60%" />
      </div>
      <span className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mint text-white shadow-[0_3px_0_rgba(35,35,63,0.9)]">
        <Icon name="check" className="h-5 w-5" strokeWidth={3.2} />
      </span>
    </div>
  );
}

export function RedropMock() {
  return (
    <Browser url="app.netlify.com/…/deploys">
      <p className="font-bold">Deploys</p>
      <div className="mt-2 grid gap-1.5">
        {["Published", "", ""].map((t, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-paper px-2 py-1.5">
            <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-mint" : "bg-line"}`} />
            <Line w={i === 0 ? "40%" : "55%"} />
            {t && <span className="ml-auto text-[10px] font-bold text-mint">{t}</span>}
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-14 items-center justify-center rounded-xl border-[3px] border-dashed border-sky bg-sky-bg font-bold text-sky">
        直したフォルダをここへ
      </div>
    </Browser>
  );
}

/* ---------- ルートB ---------- */
export function GitignoreMock() {
  return (
    <App title="mysite">
      <ul className="grid gap-1 font-mono text-[12px]">
        {[
          ["folder", "src", ""],
          ["folder", "node_modules", "上げない"],
          ["key", ".env", "上げない"],
          ["check", ".gitignore", "←ここに書く"],
          ["check", "package.json", ""],
        ].map(([ic, n, note]) => (
          <li key={n} className={`flex items-center gap-2 rounded-md px-2 py-1 ${note === "上げない" ? "bg-coral-bg" : note ? "bg-mint-bg" : ""}`}>
            <Icon name={ic as "folder"} className="h-3.5 w-3.5" strokeWidth={2.6} />
            <span className={note === "上げない" ? "line-through decoration-coral decoration-2" : ""}>{n}</span>
            {note && <span className={`ml-auto font-sans text-[11px] font-bold ${note === "上げない" ? "text-coral" : "text-mint"}`}>{note}</span>}
          </li>
        ))}
      </ul>
    </App>
  );
}

export function AddRepoMock() {
  return (
    <App title="GitHub Desktop">
      <div className="flex gap-3">
        <div className="grid w-28 flex-none gap-1 rounded-lg bg-paper p-2 text-[12px]">
          <span className="rounded bg-ink px-1.5 py-0.5 font-bold text-white">File</span>
          <span className="px-1.5 text-soft">New repository…</span>
          <span className="rounded bg-sky-bg px-1.5 font-bold text-sky">Add local repository…</span>
          <span className="px-1.5 text-soft">Clone repository…</span>
        </div>
        <div className="grid min-w-0 flex-1 content-start gap-2">
          <Line w="70%" />
          <div className="flex items-center gap-1.5 rounded-lg border-2 border-line px-2 py-1 text-[11px]">
            <Icon name="folder" className="h-3.5 w-3.5" />
            <span className="truncate">/Users/you/mysite</span>
          </div>
          <div>
            <Hot>Add repository</Hot>
          </div>
        </div>
      </div>
    </App>
  );
}

export function PublishMock() {
  return (
    <App title="GitHub Desktop">
      <div className="grid grid-cols-3 gap-1.5 rounded-lg bg-paper p-1.5 text-[11px]">
        <span className="rounded bg-card px-1.5 py-1">Current repository<br /><b>mysite</b></span>
        <span className="rounded bg-card px-1.5 py-1">Current branch<br /><b>main</b></span>
        <span className="flex items-center justify-center">
          <Hot>Publish repository</Hot>
        </span>
      </div>
      <div className="mt-5 grid gap-1.5">
        <Line w="50%" />
        <Line w="80%" />
      </div>
    </App>
  );
}

export function VercelSignUpMock() {
  return (
    <Browser url="vercel.com/signup">
      <div className="grid gap-2">
        <p className="font-round text-[16px] font-extrabold">▲ Vercel</p>
        <div>
          <Hot>
            <Icon name="github" className="mr-1.5 h-4 w-4" />
            Continue with GitHub
          </Hot>
        </div>
        <span className="mt-2 block rounded-lg border-2 border-line px-3 py-1.5 text-soft">Continue with Google</span>
      </div>
    </Browser>
  );
}

export function ImportMock() {
  return (
    <Browser url="vercel.com/new">
      <p className="font-bold">Import Git Repository</p>
      <div className="mt-2 grid gap-1.5">
        {["mysite", "old-project"].map((n, i) => (
          <div key={n} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${i === 0 ? "bg-sky-bg" : "bg-paper"}`}>
            <Icon name="github" className="h-4 w-4" />
            <span className="font-bold">{n}</span>
            {i === 0 && <span className="ml-auto rounded bg-ink px-2 py-0.5 text-[11px] font-bold text-white">選ぶ</span>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Hot>Deploy</Hot>
      </div>
    </Browser>
  );
}

export function EnvMock() {
  return (
    <Browser url="vercel.com/…/settings/environment-variables">
      <p className="font-bold">Environment Variables</p>
      <div className="mt-2 grid grid-cols-2 gap-1.5 font-mono text-[11px]">
        <span className="rounded-md border-2 border-line px-2 py-1">OPENAI_API_KEY</span>
        <span className="rounded-md border-2 border-line px-2 py-1 text-soft">••••••••</span>
      </div>
      <div className="mt-3 flex justify-end">
        <Hot>Save</Hot>
      </div>
    </Browser>
  );
}

export function CommitMock() {
  return (
    <App title="GitHub Desktop">
      <div className="grid grid-cols-[1fr_1.2fr] gap-3">
        <div className="grid content-start gap-1 text-[11px]">
          {["index.html", "style.css"].map((f) => (
            <span key={f} className="flex items-center gap-1.5 rounded bg-sun-bg px-1.5 py-0.5">
              <span className="h-2 w-2 rounded-sm bg-sun" />
              {f}
            </span>
          ))}
          <span className="mt-2 rounded-md border-2 border-line px-1.5 py-1 text-soft">見出しを直した</span>
          <span className="mt-1">
            <Hot>Commit to main</Hot>
          </span>
        </div>
        <div className="grid content-start gap-1.5 rounded-lg bg-paper p-2">
          <Line c="rgba(15,159,118,0.4)" />
          <Line c="rgba(240,83,63,0.35)" w="70%" />
          <Line c="rgba(15,159,118,0.4)" w="85%" />
        </div>
      </div>
    </App>
  );
}

export function PushMock() {
  return (
    <App title="GitHub Desktop">
      <div className="grid grid-cols-3 gap-1.5 rounded-lg bg-paper p-1.5 text-[11px]">
        <span className="rounded bg-card px-1.5 py-1">Current repository<br /><b>mysite</b></span>
        <span className="rounded bg-card px-1.5 py-1">Current branch<br /><b>main</b></span>
        <span className="flex items-center justify-center">
          <Hot>Push origin ↑1</Hot>
        </span>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 text-[12px] font-bold text-soft">
        <Icon name="github" className="h-5 w-5" />
        <Icon name="arrow" className="h-4 w-4 text-sky" strokeWidth={3} />
        ▲ Vercel
        <Icon name="arrow" className="h-4 w-4 text-sky" strokeWidth={3} />
        <Icon name="globe" className="h-5 w-5 text-mint" />
      </div>
    </App>
  );
}

/* ---------- ルートC ---------- */
export function AskAiMock() {
  return (
    <App title="Claude">
      <div className="grid gap-2">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-sky px-3 py-2 text-white">このサイトを公開したい。ターミナルは使えません。</div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-paper px-3 py-2">
          フォルダを見ました。これは HTML だけのサイトなので、ドラッグで公開できます。まず…
        </div>
      </div>
    </App>
  );
}
