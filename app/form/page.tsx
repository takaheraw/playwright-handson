import type { Metadata } from "next"
import { ShuffleMemberForm } from "./form"

export const metadata: Metadata = {
  title: "入力フォーム",
  description: "Playwrightハンズオン"
}

export default function Home() {
  return (
    <main>
      <h1>入力フォーム</h1>
      <ShuffleMemberForm />
    </main>
  )
}
