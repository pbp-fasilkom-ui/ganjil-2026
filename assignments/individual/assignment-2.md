---
sidebar_label: Tugas 2
sidebar_position: 2
Path: assignments/individual/assignment-2
---

# Tugas 2: Implementasi *Model-View-Template* (MVT) pada Django

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2025/2026

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengimplementasikan konsep *Model-View-Template* serta beberapa hal yang sudah kamu pelajari di kelas dan tutorial. Perlu diperhatikan bahwa proyek yang dibuat pada tugas **berbeda** dengan proyek yang digunakan pada tutorial.

## Tema Aplikasi

Tema besar aplikasi untuk tugas PBP adalah aplikasi ***Football Shop***. Kamu diberikan kebebasan dalam memilih nama dan tema kecil aplikasi. Buatlah tugasmu sekreatif mungkin. Pastikan juga bahwa tugasmu sudah sesuai dengan tema yang telah ditentukan ya.

:::danger
Pastikan nama dan konten dari tugasmu **TIDAK** mengandung unsur **NSFW/18+** dan menyinggung SARA. Apabila aturan ini dilanggar, ada kemungkinan terjadi konsekuensi yang berpotensi mempengaruhi mata kuliah lain nantinya, misalnya seperti akun GitHub yang diblokir.
:::

Aplikasi dari tugas kamu harus memiliki atribut-atribut berikut pada modelnya.

- `name` sebagai nama *item* dengan tipe `CharField`.
- `price` sebagai harga *item* dengan tipe `IntegerField`.
- `description` sebagai deskripsi *item* dengan tipe `TextField`.
- `thumbnail` sebagai gambar *item* dengan tipe `URLField`.
- `category` sebagai kategori *item* dengan tipe `CharField`.
- `is_featured` sebagai status unggulan *item* dengan tipe `BooleanField`.

Kamu dipersilakan untuk menambahkan atribut lainnya jika diinginkan, seperti `stock`, `rating`, `brand`, dan lain-lain. Namun, model aplikasi kamu wajib memiliki keenam atribut wajib di atas (`name`, `price`, `description`, `thumbnail`, `category`, `is_featured`). Nama dari keenam atribut di atas dapat disesuaikan lagi dengan kebutuhan aplikasimu.

Beberapa contoh ide aplikasi yang dapat kamu buat:

- *Sigma Sportswear*: `nama`, `harga`, `description`, `thumbnail`, `rating`, `size`.
- *Garuda Shop*: `name`, `price`, `description`, `thumbnail`, `category`, `stock`.
- Toko Bola: `name`, `price`, `description`, `thumbnail`, `quantity`, `brand`.

## Checklist Tugas

*Checklist* untuk tugas ini adalah sebagai berikut.

- [ ] Membuat sebuah proyek Django baru.
- [ ] Membuat aplikasi dengan nama `main` pada proyek tersebut.
- [ ] Melakukan *routing* pada proyek agar dapat menjalankan aplikasi `main`.
- [ ] Membuat model pada aplikasi `main` dengan nama `Product` dan memiliki atribut wajib sebagai berikut.
    - `name` sebagai nama *item* dengan tipe `CharField`.
    - `price` sebagai harga *item* dengan tipe `IntegerField`.
    - `description` sebagai deskripsi *item* dengan tipe `TextField`.
    - `thumbnail` sebagai gambar *item* dengan tipe `URLField`.
    - `category` sebagai kategori *item* dengan tipe `CharField`.
    - `is_featured` sebagai status unggulan *item* dengan tipe `BooleanField`.
- [ ] Membuat sebuah fungsi pada `views.py` untuk dikembalikan ke dalam sebuah *template* HTML yang menampilkan nama aplikasi serta nama dan kelas kamu.
- [ ] Membuat sebuah *routing* pada `urls.py` aplikasi `main` untuk memetakan fungsi yang telah dibuat pada `views.py`.
- [ ] Melakukan *deployment* ke PWS terhadap aplikasi yang sudah dibuat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
- [ ] Membuat sebuah `README.md` yang berisi tautan menuju aplikasi PWS yang sudah di-*deploy*, serta jawaban dari beberapa pertanyaan berikut.
    - Jelaskan bagaimana cara kamu mengimplementasikan *checklist* di atas secara *step-by-step* (**bukan hanya sekadar mengikuti tutorial**).
    - Buatlah bagan yang berisi *request client* ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara `urls.py`, `views.py`, `models.py`, dan berkas `html`.
    - Jelaskan peran `settings.py` dalam proyek Django!
    - Bagaimana cara kerja migrasi database di Django?
    - Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?
    - Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?

:::info
**Tips** : Kalian dapat melampirkan hanya berupa link ataupun upload image ke file `README.md` kalian untuk soal tentang bagan / gambar. 
:::

:::danger
Perhatikan bahwa kamu harus mengerjakan tugas ini menggunakan repositori yang **berbeda** dengan tutorial. Repositori yang tidak sesuai dengan ketentuan maka tidak akan dinilai. 
:::

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 2 adalah hari **Rabu, 10 September, pukul 12.00 siang.**

Harap mengumpulkan link repositori yang kamu gunakan ke dalam slot submisi yang telah disediakan di SCELE.

:::warning
Jika mahasiswa terlambat mengumpulkan, nilai akan dikurangi 10 poin. Plagiarisme dalam bentuk apapun tidak akan ditoleransi. 
:::