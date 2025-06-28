import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; // Linkコンポーネントを追加

export default function LowCodeDevPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 w-full bg-white/95 text-gray-800 px-4 py-3 border-b z-50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="OPEN FACE LLC Logo"
              width={100}
              height={25}
              priority
            />
            <span className="font-montserrat text-2xl">OPEN FACE LLC</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#services" className="font-montserrat hover:text-gold transition-colors">
              OUR SERVICE
            </Link>
            <Link href="/#about" className="font-montserrat hover:text-gold transition-colors">
              ABOUT US
            </Link>
            <Link href="/#contact" className="font-montserrat hover:text-gold transition-colors">
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-[72px]"> {/* ヘッダーの高さ分パディングを追加 */}
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">ローコード開発プラットフォーム</h1>
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/LowCode.jpeg"
                  alt="LowCode Development"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">迅速なアプリケーション開発</h2>
                <p className="mb-4">
                  当社のローコードプラットフォームで、ビジネスニーズに即したアプリケーションを迅速に開発できます。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ドラッグ＆ドロップ式のビジュアル開発</li>
                  <li>最小限のコーディングで実装可能</li>
                  <li>既存システムとの連携機能</li>
                  <li>モバイル対応アプリも作成可能</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* フッター - 必要に応じて追加 */}
      {/* <footer className="bg-white py-8 border-t mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">Copyright © 2025 OpenFace LLC All rights reserved</p>
        </div>
      </footer> */}
    </div>
  );
}
