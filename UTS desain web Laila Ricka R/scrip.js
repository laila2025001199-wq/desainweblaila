document.addEventListener("DOMContentLoaded", function() {
    console.log("Royal Dashboard berhasil dimuat!");

    const menuItems = document.querySelectorAll(".sidebar-menu .menu-item");
    const welcomeTitle = document.getElementById("welcome-title");
    const welcomeClass = document.getElementById("welcome-class");

    // Mengatur interaksi klik pada menu sidebar
    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();

            // Hapus kelas 'active' dari semua menu
            document.querySelectorAll(".sidebar-menu li").forEach(li => li.classList.remove("active"));
            
            // Tambahkan kelas 'active' ke parent dari menu yang diklik
            this.parentElement.classList.add("active");

            // Ambil jenis menu dari atribut data-menu
            const menuType = this.getAttribute("data-menu");

            // Ubah teks sesuai dengan video referensi yang kamu inginkan
            if (menuType === "home") {
                welcomeTitle.textContent = "Selamat Datang, Mahasiswa";
                welcomeClass.textContent = "Kelas SI-3X";
            } else if (menuType === "mahasiswa") {
                welcomeTitle.textContent = "Selamat Datang, Laila Ricka Ramadhani";
                welcomeClass.textContent = "Kelas SI-3X";
            } else if (menuType === "kelas") {
                welcomeTitle.textContent = "Selamat Datang, Laila Ricka Ramadhani";
                welcomeClass.textContent = "Kelas SI-3E"; 
            } else if (menuType === "aktifitas") {
                welcomeTitle.textContent = "Aktivitas Akademik";
                welcomeClass.textContent = "Kelas SI-3E";
            } else if (menuType === "statistik") {
                welcomeTitle.textContent = "Statistik Mahasiswa";
                welcomeClass.textContent = "Kelas SI-3E";
            } else if (menuType === "dokumen") {
                welcomeTitle.textContent = "Lampiran Dokumen";
                welcomeClass.textContent = "Kelas SI-3E";
            } else {
                welcomeTitle.textContent = "Pengaturan Dashboard";
                welcomeClass.textContent = "Kelas SI-3E";
            }
        });
    });

    // Interaksi tombol 'Lihat Dokumen'
    const tombolLihat = document.querySelectorAll(".btn-lihat");
    tombolLihat.forEach((tombol, index) => {
        tombol.addEventListener("click", function() {
            alert("Membuka Lampiran Dokumen " + (index + 1));
        });
    });
});