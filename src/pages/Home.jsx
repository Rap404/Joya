import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Halaman Home</h1>
      <p>Selamat datang di website utama kami!</p>

      <button className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
        Tombol Test
      </button>

      {/* Navigasi */}
      <nav style={{ marginTop: "20px" }}>
        <Link to="/about" style={{ marginRight: "10px" }}>
          Ke Halaman About
        </Link>
      </nav>
    </div>
  );
}
