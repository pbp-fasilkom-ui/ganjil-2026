---
sidebar_label: Proyek Tengah Semester
sidebar_position: 1
Path: assignments/group/midterm
---

# Proyek Tengah Semester

**Membuat Situs Web menggunakan Framework Django (Berkelompok)**

**Tanggal Publish : Rabu, 22 September 2025 12.00 WIB**
*Version 1.0*

---

## Tujuan Pembelajaran Khusus

1. Merancang Halaman Web yang ***Responsive Web Design*** dengan memanfaatkan *framework* CSS
2. Mengimplementasikan situs web menggunakan *framework* Django dengan memenuhi ***Models*, *Views*, dan *Template***
4. Mengimplementasikan ***Unit Test*** dan ***deployment PWS***

## Aturan Umum Tugas Kelompok

1. Satu kelompok terdiri atas 5-6 orang. Pembagian kelompok sudah dapat dilihat di [SCELE & Discord PBP](https://docs.google.com/spreadsheets/d/1_lhNRomzxHXBOtMyXuD9biOAM4HyWhqWED-pHxHhiV8/edit?usp=sharing).
2. Satu kelompok membuat satu repositori Git (Git _repository_) yang digunakan oleh seluruh anggota kelompok untuk bekerja sama. Kumpulkan tautan repositori Git ke SCELE.  
:::info  
Setiap kelompok disarankan untuk menggunakan **GitHub Organizations** untuk mempermudah kolaborasi antar anggota tim. Selain itu, untuk TK Proyek Akhir Semester, setiap kelompok nanti akan diminta untuk membuat repositori baru, dan **GitHub Organizations** dapat membantu 'pengelompokan' repositori-repositori ini.  
:::  
3. Setiap kelompok dipersilakan untuk mencari ide sendiri mengenai aplikasi yang akan dibuat. Tema aplikasi adalah **OLAHRAGA**
4. Tema ini dipilih karena bertepatan dengan momen aktual: putaran keempat *kualifikasi Piala Dunia 2026* yang digelar Oktober 2025. Kalian **bebas memilih olahraga apa saja** (sepak bola, badminton, basket, dll.) dan **bebas bentuk websitenya**, misalnya:  
    - Website toko peralatan olahraga  
    - Fansite olahraga tertentu  
    - Informasi tempat olahraga di kota/provinsi tertentu  
    - Portal berita/komunitas olahraga
5. Setiap kelompok harus menentukan kategori utama produk yang menjadi _initial dataset_ aplikasi kelompok. Kategori utama produk harus berisi minimal 100 jenis produk. 
6. Setiap kelompok mengimplementasikan _initial dataset_ dalam bentuk *class Models* dan menyimpan data dari _initial dataset_ tersebut ke dalam *basis data* Django. Sumber data untuk _initial dataset_ boleh berasal dari mana saja, misalnya dari Kaggle dan Wikipedia.
:::info
**Tips** : Jika dataset tidak tersedia di google maupun sumber manapun, kalian dapat melakukan **teknik scrapping** untuk keperluan dataset kalian.
:::
7. Setiap anggota kelompok mengerjakan modul yang berbeda. Modul ditentukan oleh kelompok yang disesuaikan dengan ide aplikasi yang sudah didiskusikan dalam kelompok.
8. Tugas kelompok di-_deploy_ sebagai kesatuan aplikasi web. Setiap kelompok diharapkan menggunakan PWS sebagai PaaS untuk _deployment_ proyek TK, tetapi setiap kelompok juga diberi kebebasan jika ingin melakukan _deployment_ pada PaaS lain.

9. Dibagian `README.md` kalian **WAJIB** tuliskan :  
    - Deskripsi website kalian,
    - Nama anggota kelompok + NPM,
    - Daftar modul + deskripsi modul,
    - Link sumber dataset,
    - Jenis pengguna website kalian, 
    - Link pws, dan 
    - Link design website (Figma, canva, dll) kelompok kalian [OPTIONAL].

:::info
Jika kalian menerapkan figma untuk desain UI Website kalian, kalian akan mendapatkan nilai bonus untuk proyek ini. Silakan manfaatkan panduan tugas kelompok untuk mengetahui lebih lanjut tentang resources yang dapat kalian gunakan untuk tugas ini.
:::

:::info
**Tips** : Kalian bisa memanfaatkan berbagai teknik penulisan `README.md` agar dapat membuat file `README.md` yang rapi dan terstruktur
:::

## Aturan Khusus per Anggota Kelompok

1. Menerapkan *Models* dengan membuat, memanfaatkan yang sudah disediakan oleh Django, atau memanfaatkan yang sudah dibuat oleh anggota kelompok lain (pada modul lain).
2. Menerapkan *Views* untuk memproses *request* dan mengolah data untuk menghasilkan respons menggunakan templat HTML maupun mengembalikan respons JSON.
3. Menerapkan templat HTML dengan kerangka yang sistematis dan efisien, seperti `base.html`, `header.html`, dan `footer.html`.
4. Menerapkan templat HTML menggunakan *responsive framework* (seperti [Bootstrap](https://getbootstrap.com/) atau [Tailwind](https://tailwindcss.com/)).
5. Memiliki halaman form yang dapat menerima masukan dari pengguna kemudian diproses oleh *Views*. Contoh pemrosesan oleh *Views* adalah *insert* data ke dalam Models, *query* data dari Models, dan *update* data di dalam Models.
6. Menerapkan JavaScript dengan pemanggilan AJAX.
7. Menerapkan filter informasi bagi pengguna yang sudah *log in* saja. **Contohnya** adalah data alamat, umur, dan nomor _handphone_ hanya dapat dilihat oleh pengguna yang sudah *log in* saja.
8. Menerapkan filter pada daftar produk dari _initial dataset_ yang ditampilkan. Contohnya adalah menampilkan daftar produk berdasarkan harga.

## Tahapan Tugas Kelompok

<table>
    <tr>
        <th>Tahapan dan <em>deliverables</em></th>
        <th>Tenggat Waktu dan Keterangan</th>
    </tr>
    <tr>
        <td>
            <b>Tahap I (40%)</b>
            <ul>
                <li>Pembuatan GitHub kelompok</li>
                <li>README.md pada GitHub yang berisi:</li>
                    <ol>
                        <li>Nama-nama anggota kelompok</li>
                        <li>Deskripsi aplikasi (cerita aplikasi yang diajukan serta kebermanfaatannya)</li>
                        <li>Daftar modul yang akan diimplementasikan</li>
                        <li>Sumber <em>initial dataset</em> kategori utama produk</li>
                        <li><em>Role</em> atau peran pengguna beserta deskripsinya (karena bisa saja lebih dari satu jenis pengguna yang mengakses aplikasi)</li>
                        <li>Tautan <em>deployment</em> PWS dan link design </li>
                    </ol>
            </ul>
        </td>
        <td>
            <b>Tenggat Waktu: Rabu, 8 Oktober 2025, pukul 23:55 WIB</b>
            <p><b>Kumpulkan ke SCELE: Tautan GitHub</b> dengan <em>code base</em> proyek Django yang sudah disiapkan di GitHub.</p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Tahap II (60%)</b>
            <p>(Modul sudah terimplementasi dengan baik)</p>
            <p>Checklist:</p>
            <ul>
                <li>Modul aplikasi dari tiap anggota kelompok</li>
                <li><em>URL Mapping</em> untuk modul</li>
                <li><em>Models</em> untuk modul</li>
                <li><em>Views</em> untuk modul</li>
                <li>Terintegrasi sebagai satu kesatuan aplikasi</li>
                <li>Fungsionalitas sesuai dengan rancangan desain</li>
                <li>Unit Test (<em>passed</em>) untuk semua aspek, diharapkan <em>code coverage</em> bisa mencapai minimal 80%</li>
            </ul>
        </td>
        <td>
            <b>Tenggat Waktu: Jumat, 24 Oktober 2024, pukul 23.55 WIB</b>
            <p><b>Kriteria Submisi:</b> Seluruh modul yang dikerjakan oleh setiap anggota kelompok sudah muncul dan dapat diakses.</p>
        </td>
    </tr>
</table>

## Panduan Tugas Kelompok
Untuk mempermudah kalian dalam mengerjakan tugas kelompok, tim asdos telah menyiapkan [panduan lengkap](./midterm-guide.md) yang bisa jadi pegangan selama proses development.