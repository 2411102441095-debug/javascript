

// Fungsi ubah teks & warna menggunakan getElementById()
function ubahDenganId() {
  const paragrafId = document.getElementById("teks");
  paragrafId.textContent = "✅ Teks ini diubah dengan getElementById()";
  paragrafId.style.color = "green";
  paragrafId.style.fontWeight = "bold";
  console.log("Berhasil ubah dengan getElementById()");
}

// Fungsi ubah teks & warna menggunakan querySelector()
function ubahDenganQuery() {
  const paragrafClass = document.querySelector(".paragraf");
  paragrafClass.textContent = "🔵 Teks ini diubah dengan querySelector()";
  paragrafClass.style.color = "blue";
  paragrafClass.style.fontStyle = "italic";
  console.log("Berhasil ubah dengan querySelector()");
}