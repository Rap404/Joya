import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Halaman About</h1>
      <p>Ini adalah halaman tentang kami.</p>

      {/* Navigasi */}
      <nav style={{ marginTop: "20px" }}>
        <Link to="/">Kembali ke Home</Link>
      </nav>
    </div>
  );
}
