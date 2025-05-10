function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", padding: "24px" }}>
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        Distribusi Buletin Organisasi
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {/* Form Distribusi Buletin */}
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "24px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Form Distribusi
          </h2>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <label htmlFor="nama">Nama Anggota</label>
              <input
                id="nama"
                type="text"
                placeholder="Masukkan nama anggota"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email anggota"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="buletin">Judul Buletin</label>
              <input
                id="buletin"
                type="text"
                placeholder="Masukkan judul buletin"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="tanggal">Tanggal Distribusi</label>
              <input id="tanggal" type="date" style={inputStyle} />
            </div>
            <button style={buttonStyle}>Distribusikan Buletin</button>
          </form>
        </div>

        {/* Daftar Buletin Terbaru */}
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "24px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Daftar Buletin Terbaru
          </h2>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Buletin Edisi Januari 2025</li>
            <li>Buletin Kegiatan Sosial Q1</li>
            <li>Newsletter Kepemudaan Maret</li>
            <li>Buletin Ramadan Spesial</li>
            <li>Laporan Tengah Tahun Organisasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "4px",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "600",
  cursor: "pointer",
};

export default App;
