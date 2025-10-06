// Simulasi data cuaca
const weatherData = {
  "Jakarta": { temperature: 30, condition: "Cerah" },
  "Bandung": { temperature: 25, condition: "Hujan Ringan" },
  "Surabaya": { temperature: 33, condition: "Panas Terik" },
  "Samarinda": { temperature: 28, condition: "Mendung" },
  "Medan": { temperature: 31, condition: "Berawan" },
};

// Fungsi utama untuk menampilkan cuaca
function showWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const data = weatherData[city];

  if (data) {
    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
  } else {
    console.log(`Data cuaca untuk kota "${city}" tidak ditemukan.`);
  }
}

// Pastikan tombol baru bisa di-klik setelah halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCuaca");
  btn.addEventListener("click", showWeather);
});
