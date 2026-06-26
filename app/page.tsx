import Link from "next/link";
import { schools } from "@/data/schools";

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <Link href="/" className="brand">
          <div className="logo">🧭</div>
          <div>
            <h1>升學指南針</h1>
            <p>Admission Compass</p>
          </div>
        </Link>
        <nav className="nav">
          <Link className="active" href="/">首頁</Link>
          <Link href="/map">互動地圖</Link>
          <Link href="/schools">學校資料庫</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <span className="tag">基北區升學探索平台｜Clean V1</span>
            <h2>用一張地圖，看懂孩子的升學選擇。</h2>
            <p>整合基隆、臺北、新北高中職資訊，讓學生與家長依地理位置、學校類型、課程特色與適合特質進行探索。</p>
            <div className="hero-actions">
              <Link href="/map" className="primary-btn">開始探索地圖</Link>
              <Link href="/schools" className="secondary-btn">查看學校資料庫</Link>
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-map">
              <div className="pin p1">普</div>
              <div className="pin p2">技</div>
              <div className="pin p3">普</div>
              <div className="mini-card">
                <strong>目前收錄 {schools.length} 所示範學校</strong>
                <span>首頁・課程計畫・特色課程・適合特質</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <h2>網站定位</h2>
          <p>這是「升學指南針」的正式版起始架構，適合後續擴充完整基北區學校資料、歷年錄取分數、志願序分析、AI落點分析、升學文章與會員功能。</p>
          <div className="about-grid">
            <article><h3>互動地圖</h3><p>以視覺化方式理解學校分布，適合升學講座與學生探索。</p></article>
            <article><h3>學校資料庫</h3><p>集中管理學校資訊，未來可匯入完整高中、高職與五專資料。</p></article>
            <article><h3>可擴充架構</h3><p>採用 Next.js，適合未來接 GitHub、Vercel、資料庫與 AI 功能。</p></article>
          </div>
        </section>
      </main>

      <footer>© 2026 升學指南針 Admission Compass</footer>
    </>
  );
}
