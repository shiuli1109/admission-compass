"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { schools, type School } from "@/data/schools";

const cities = ["全部", ...Array.from(new Set(schools.map((school) => school.city)))];
const types = ["全部", ...Array.from(new Set(schools.map((school) => school.type)))];

function colorByType(type: string) {
  return type === "技術型高中" ? "#059669" : "#7c3aed";
}

function labelByType(type: string) {
  return type === "技術型高中" ? "技" : "普";
}

function positionByLatLng(school: School) {
  const minLat = 24.98;
  const maxLat = 25.13;
  const minLng = 121.44;
  const maxLng = 121.75;

  const x = ((school.lng - minLng) / (maxLng - minLng)) * 82 + 8;
  const y = (1 - (school.lat - minLat) / (maxLat - minLat)) * 72 + 14;

  return {
    left: `${Math.max(6, Math.min(94, x))}%`,
    top: `${Math.max(8, Math.min(92, y))}%`,
  };
}

export default function MapClient() {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("全部");
  const [type, setType] = useState("全部");
  const [selectedSchool, setSelectedSchool] = useState<School>(schools[0]);

  const filteredSchools = useMemo(() => {
    const kw = keyword.trim();
    return schools.filter((school) => {
      const matchKeyword =
        kw === "" ||
        school.name.includes(kw) ||
        school.shortName.includes(kw) ||
        school.city.includes(kw) ||
        school.district.includes(kw);
      const matchCity = city === "全部" || school.city === city;
      const matchType = type === "全部" || school.type === type;
      return matchKeyword && matchCity && matchType;
    });
  }, [keyword, city, type]);

  function reset() {
    setKeyword("");
    setCity("全部");
    setType("全部");
  }

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
          <Link className="active" href="/map">互動地圖</Link>
          <Link href="/schools">學校資料庫</Link>
        </nav>
      </header>

      <main className="map-page">
        <section className="map-layout">
          <aside className="panel left-panel">
            <div className="search">
              <span>🔍</span>
              <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="搜尋學校或行政區..." />
            </div>

            <div className="filters">
              <label>
                縣市
                <select value={city} onChange={(event) => setCity(event.target.value)}>
                  {cities.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>

              <label>
                類型
                <select value={type} onChange={(event) => setType(event.target.value)}>
                  {types.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>

            <button className="reset" onClick={reset}>清除篩選</button>

            <div className="list-title">
              <h3>學校列表</h3>
              <span>共 {filteredSchools.length} 所</span>
            </div>

            <div className="school-list">
              {filteredSchools.map((school) => (
                <button
                  key={school.id}
                  className={`school-card ${selectedSchool.id === school.id ? "selected" : ""}`}
                  onClick={() => setSelectedSchool(school)}
                >
                  <div className="card-badge" style={{ background: colorByType(school.type) }}>
                    {labelByType(school.type)}
                  </div>
                  <div>
                    <div className="card-title">{school.name}</div>
                    <div className="card-meta">{school.city}{school.district}｜{school.type}</div>
                  </div>
                  <div>›</div>
                </button>
              ))}
            </div>
          </aside>

          <section className="map-panel">
            <div className="chips">
              {types.map((item) => (
                <button key={item} className={type === item ? "active" : ""} onClick={() => setType(item)}>
                  {item}
                </button>
              ))}
            </div>

            <div className="mock-map">
              <div className="region-label taipei">臺北市</div>
              <div className="region-label newtaipei">新北市</div>
              <div className="region-label keelung">基隆市</div>

              {filteredSchools.map((school) => (
                <button
                  key={school.id}
                  className="map-school-pin"
                  style={{ ...positionByLatLng(school), background: colorByType(school.type) }}
                  title={school.name}
                  onClick={() => setSelectedSchool(school)}
                >
                  {labelByType(school.type)}
                </button>
              ))}
            </div>

            <div className="legend">
              <div><i className="purple" />普通型高中</div>
              <div><i className="green" />技術型高中</div>
            </div>
          </section>

          <aside className="panel right-panel">
            <div className="detail-head">
              <div className="badge" style={{ background: colorByType(selectedSchool.type) }}>
                {labelByType(selectedSchool.type)}
              </div>
              <span className="pill">{selectedSchool.type}</span>
            </div>

            <h3>{selectedSchool.name}</h3>
            <p className="muted">{selectedSchool.city}{selectedSchool.district}</p>

            <div className="info-box">
              <strong>地址</strong>
              <p>{selectedSchool.address}</p>
            </div>

            <div className="actions">
              <a href={selectedSchool.website} target="_blank" rel="noreferrer">學校首頁 ↗</a>
              <a href={selectedSchool.curriculum} target="_blank" rel="noreferrer">課程計畫 ↗</a>
            </div>

            <section>
              <h4>學校簡介</h4>
              <p>{selectedSchool.intro}</p>
            </section>

            <section>
              <h4>特色課程與資源</h4>
              <div className="tags">
                {selectedSchool.features.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>

            <section>
              <h4>適合學生特質</h4>
              <div className="tags traits">
                {selectedSchool.suitableFor.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>
          </aside>
        </section>
      </main>
    </>
  );
}
