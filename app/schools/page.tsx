import Link from "next/link";
import { schools } from "@/data/schools";

export default function SchoolsPage() {
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
          <Link href="/">首頁</Link>
          <Link href="/map">互動地圖</Link>
          <Link className="active" href="/schools">學校資料庫</Link>
        </nav>
      </header>

      <main className="about">
        <h2>學校資料庫</h2>
        <p>目前先放入示範資料，後續可以擴充成完整基北區高中職與五專清單。</p>
        <div className="about-grid">
          {schools.map((school) => (
            <article key={school.id}>
              <h3>{school.name}</h3>
              <p>{school.city}{school.district}｜{school.type}</p>
              <p>{school.intro}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
