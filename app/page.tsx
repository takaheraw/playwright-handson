import type { Metadata } from "next"
import { mainModule } from "process"

export const metadata: Metadata = {
  title: "最初のページ",
  description: "Playwrightハンズオン"
}

export default function Home() {
  return (
    <main>
      <h1>Playwrightのハンズオン</h1>
      <p>あなたはE2E</p>
      <p>
        <button>操作ボタン</button>
      </p>
    </main>
  )
}
