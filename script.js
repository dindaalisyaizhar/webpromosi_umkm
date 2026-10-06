const nomorWA = "6282144446544";
function buatLinkWA(pesan) {
  return "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
}
const linkWA = buatLinkWA("Halo Mahaja, saya mau pesan");
document.getElementById("wa-sampul").href = linkWA;
document.getElementById("wa-kontak").href = linkWA;

const menu = [
  { grup: "minuman", nama: "Es Teh Original", harga: "Jumbo 5K<br>Reguler 3K", gambar: "es-teh-original.jpg" },
  { grup: "minuman", nama: "Es Teh Hijau", harga: "Jumbo 6K<br>Reguler 4K", gambar: "es-teh-hijau.jpg" },
  { grup: "minuman", nama: "Es Greentea", harga: "Jumbo 10K<br>Reguler 5K", gambar: "es-greentea.jpg" },
  { grup: "minuman", nama: "Es Thaitea", harga: "Jumbo 10K<br>Reguler 5K", gambar: "es-thaitea.jpg" },
  { grup: "minuman", nama: "Es Taro", harga: "10K", gambar: "es-taro.jpg" },
  { grup: "minuman", nama: "Es Lemontea", harga: "10K", gambar: "es-lemontea.jpg" },
  { grup: "minuman", nama: "Es Leci Tea", harga: "8K", gambar: "es-leci.jpg" },
  { grup: "minuman", nama: "Es Milo", harga: "10K", gambar: "es-milo.jpg" },

  { grup: "minuman", nama: "Es Red Velvet", harga: "10K", gambar: "es-red-velvet.jpg" },
  { grup: "minuman", nama: "Es Cappuccino", harga: "10K", gambar: "es-cappuccino.jpg" },
  { grup: "minuman", nama: "Es Kopi Aren", harga: "10K", gambar: "es-kopi-aren.jpg" },


  { grup: "burger", nama: "Ayam Krispi Regular", harga: "13K", gambar: "burger-ayam.jpg" },
  { grup: "burger", nama: "Ayam Krispi Double", harga: "17K", gambar: "burger-ayam.jpg" },
  { grup: "burger", nama: "Beef Regular", harga: "13K", gambar: "burger-beef.jpg" },
  { grup: "burger", nama: "Beef Double", harga: "18K", gambar: "burger-beef.jpg" },
  { grup: "burger", nama: "Kentang Goreng", harga: "12K", gambar: "kentang-goreng.jpg" },
  { grup: "burger", nama: "Sosis Bakar", harga: "12K", gambar: "sosis-bakar.jpg" },

  
  { grup: "paket", nama: "Paket Spesial", isi: "Burger, es teh, dan kentang goreng.",
    harga: "Rp22.000 <s>28K</s>", gambar: "paket-spesial.jpg" },
  { grup: "paket", nama: "Paket Istimewa", isi: "Nasi ayam dan es teh. Pilih saus: Original, Teriyaki, atau Hot Lava.",
    harga: "Rp20.000 <s>23K</s>", gambar: "paket-istimewa.jpg" }
];


menu.forEach(function (item) {
  const kartu = document.createElement("div");
  kartu.className = "produk" + (item.grup === "paket" ? " paket" : "");
  kartu.innerHTML =
    '<img src="img/' + item.gambar + '" alt="' + item.nama + '" loading="lazy">' +
    '<p class="nama">' + item.nama + '</p>' +
    (item.isi ? '<p class="isi">' + item.isi + '</p>' : '') +
    '<p class="harga">' + item.harga + '</p>';
  document.getElementById("daftar-" + item.grup).appendChild(kartu);
});

const semuaTab = document.querySelectorAll(".tab");
const semuaGrup = document.querySelectorAll(".grup");
semuaTab.forEach(function (tab) {
  tab.onclick = function () {
    semuaTab.forEach(function (t) { t.classList.remove("aktif"); });
    tab.classList.add("aktif");
    const pilihan = tab.dataset.pilih;
    semuaGrup.forEach(function (g) {
      g.style.display = (pilihan === "semua" || pilihan === g.dataset.grup) ? "block" : "none";
    });
  };
});

const logoBesar = document.getElementById("logo-besar");
logoBesar.onclick = function () {
  logoBesar.classList.remove("goyang");
  void logoBesar.offsetWidth;
  logoBesar.classList.add("goyang");
};
logoBesar.onanimationend = function () { logoBesar.classList.remove("goyang"); };
const tombolMenu = document.getElementById("tombol-menu");
const menuNav = document.getElementById("menu-nav");
tombolMenu.onclick = function () { menuNav.classList.toggle("buka"); };
menuNav.querySelectorAll("a").forEach(function (link) {
  link.onclick = function () { menuNav.classList.remove("buka"); };
});

document.getElementById("tahun").textContent = new Date().getFullYear();
