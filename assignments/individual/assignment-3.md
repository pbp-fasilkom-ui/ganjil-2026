---
sidebar_label: Tugas 3
sidebar_position: 3
Path: assignments/individual/assignment-3
---

# Tugas 3: Implementasi Form dan Data Delivery pada Django

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2025/2026

---

## Deskripsi Tugas

Pada tugas ini, kamu akan menjalankan implementasi konsep data delivery serta menerapkan beberapa konsep yang telah dipelajari selama sesi tutorial.

## Checklist Tugas

*Checklist* untuk tugas ini adalah sebagai berikut.
- [ ] Tambahkan 4 fungsi `views` baru untuk melihat objek yang sudah ditambahkan dalam format XML, JSON, XML *by ID*, dan JSON *by ID*.
- [ ] Membuat routing URL untuk masing-masing `views` yang telah ditambahkan pada poin 1.
- [ ] Membuat halaman yang menampilkan data objek model yang memiliki tombol "Add" yang akan redirect ke halaman `form`, serta tombol "Detail" pada setiap data objek model yang akan menampilkan halaman detail objek.
- [ ] Membuat halaman `form` untuk menambahkan objek model pada app sebelumnya.
- [ ] Membuat halaman yang menampilkan detail dari setiap data objek model.
- [ ] Menjawab beberapa pertanyaan berikut pada `README.md` pada *root folder*.
    - [ ] Jelaskan mengapa kita memerlukan _data delivery_ dalam pengimplementasian sebuah platform?
    - [ ] Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?
    - [ ] Jelaskan fungsi dari method `is_valid()` pada form Django dan mengapa kita membutuhkan method tersebut?
    - [ ] Mengapa kita membutuhkan `csrf_token` saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan `csrf_token` pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?
    - [ ] Jelaskan bagaimana cara kamu mengimplementasikan *checklist* di atas secara *step-by-step* (bukan hanya sekadar mengikuti tutorial).
    - [ ] Apakah ada feedback untuk asdos di tutorial 2 yang sudah kalian kerjakan?
- [ ] Mengakses keempat URL di poin 2 menggunakan Postman, membuat *screenshot* dari hasil akses URL pada Postman, dan menambahkannya ke dalam `README.md`.
- [ ] Melakukan `add`-`commit`-`push` ke GitHub.

:::info
**Tips** : Kalian dapat melampirkan hanya berupa link ataupun upload image ke file `README.md` kalian untuk soal tentang bagan ataupun gambar
:::

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 3 adalah hari **Rabu, 17 September 2025, pukul 12.00 siang**.