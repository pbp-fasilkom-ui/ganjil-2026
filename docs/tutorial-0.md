---
sidebar_label: Tutorial 0
sidebar_position: 2
Path: docs/tutorial-0
---

# Tutorial 0: Konfigurasi dan Instalasi Git dan Django

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2025/2026

_Terakhir diperbarui: 27 Agustus, pukul 09.00 WIB_


---
### Tujuan Pembelajaran
Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:

- Mengerti **perintah-perintah dasar Git** yang perlu diketahui untuk mengerjakan proyek aplikasi.
- Membuat **repositori Git lokal dan daring (GitHub)**.
- **Menambahkan _remote_** antara repositori Git lokal dan repositori daring pada GitHub.
- **Memahami _branching_ pada Git** dan mampu melakukan _merge request_/_pull request_.
- Memahami konsep dan implementasi ***environment variable***.
- **Men-deploy proyek** tutorial Django ke **PWS**.

## Tutorial: Pembuatan Akun GitHub (Lewati Jika Sudah Ada)

### Pengenalan Tentang Git dan GitHub

Pengenalan awal ini akan membantumu memahami dasar-dasar mengenai Git dan platform git hosting berbasis web yang dikenal sebagai GitHub.

#### Git: Sistem Kontrol Version untuk Codebase

- **Git** adalah sistem kontrol versi yang membantumu melacak perubahan pada kode sumber proyek.
- Dengan Git, kamu dapat memantau semua revisi yang telah dilakukan pada proyekmu seiring waktu.

#### GitHub: Platform Kolaborasi Menggunakan Git

- **GitHub** adalah platform berbasis web yang memungkinkanmu untuk menyimpan, mengelola, dan berkolaborasi pada proyek-proyek menggunakan Git.
- Ini memberikan wadah yang aman untuk meng-_host_ proyekmu dan berinteraksi dengan rekan tim melalui Git.

#### Mengapa Penting?

- Git dan GitHub memainkan peran penting dalam pengembangan perangkat lunak modern dan kolaborasi tim.
- Keduanya memungkinkan tim untuk melacak perubahan kode, menyimpan versi, dan bekerja bersama dalam proyek secara efisien.

Dengan pemahaman dasar mengenai Git dan GitHub, kamu siap untuk melangkah lebih jauh dalam dunia pengembangan perangkat lunak yang kolaboratif dan terstruktur.

### Langkah 1: Membuat Akun di GitHub

Langkah selanjutnya adalah membuat akun di GitHub, yang akan memungkinkanmu untuk mulai berkolaborasi pada proyek-proyek menggunakan Git.

1. Buka Situs Web GitHub
    - Buka peramban web dan akses [GitHub](https://github.com).

2. Membuat Akun
    - Di halaman beranda GitHub, cari tombol **`Sign up`** di pojok kanan atas halaman.
    - Klik tombol tersebut untuk memulai proses pendaftaran akun.

3. Isi Formulir Pendaftaran
    - Isi formulir pendaftaran dengan informasi yang diperlukan, seperti nama pengguna yang ingin digunakan, alamat _email_ yang valid, dan kata sandi yang aman.
    - Pastikan kamu menyimpan informasi ini dengan aman untuk masuk ke akunmu di masa mendatang.

4. Verifikasi Akun Melalui _Email_
    - Setelah mengisi formulir, GitHub akan mengirimkan _email_ verifikasi ke alamat _email_ yang kamu berikan.
    - Buka _email_ tersebut dan ikuti instruksi untuk verifikasi akunmu.

5. Akun GitHub Siap Digunakan
    - Setelah verifikasi selesai, kamu akan memiliki akun GitHub yang siap digunakan untuk berkolaborasi dalam proyek dan melacak perubahan menggunakan Git.

:::info
- Akun GitHub adalah pintu yang membantu kalian dalam kolaborasi proyek dan menyimpan proyekmu di platform ini.
- Pastikan informasi pendaftaran yang kamu berikan akurat dan aman.
- Jika kamu kebingungan, kamu bisa mengikuti tutorial di [link ini](https://www.youtube.com/watch?v=Gn3w1UvTx0A).
:::

### Selamat, Kamu Telah Membuat Akun GitHub

Kamu sekarang telah memiliki akun GitHub yang dapat digunakan untuk menyimpan proyek, berkolaborasi dengan orang lain, dan masih banyak lagi.

## Tutorial: Instalasi IDE

IDE (_Integrated Development Environment_) adalah perangkat lunak yang membantu para pengembang dalam menulis, mengedit, dan mengelola kode. Berikut adalah langkah-langkah untuk memasang IDE.

### Langkah 1: Pemilihan _Text Editor_ atau IDE

Pilihlah _text editor_ atau IDE yang sesuai dengan preferensimu. Beberapa pilihan populer yang dapat kamu pertimbangkan meliputi:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [PyCharm](https://www.jetbrains.com/pycharm/)
- [Neovim](https://neovim.io/)

### Langkah 2: Proses Instalasi

1. Pergi ke situs web resmi IDE yang kamu pilih.
2. Ikuti petunjuk yang diberikan untuk mengunduh _installer_ IDE.
3. Jalankan _installer_ dan ikuti instruksi di layar untuk menyelesaikan proses instalasi.

### Langkah 3: Memulai Menggunakan IDE

1. Setelah proses instalasi selesai, buka IDE yang telah terinstal.
2. Eksplorasi antarmuka dan fitur yang disediakan oleh IDE untuk membantumu dalam pengembangan proyek.

:::info

- Pastikan kamu memilih IDE yang sesuai dengan jenis proyek yang akan dikerjakan.
- Jangan ragu untuk mengeksplorasi fitur-fitur IDE (contoh: _extensions_ atau _plugin_) dan memanfaatkan sumber daya pendukung, seperti dokumentasi dan tutorial, untuk meningkatkan produktivitas dalam pengembangan perangkat lunak.
:::

## Tutorial: Instalasi dan Konfigurasi Git

### Langkah 1: Instalasi Git

Jika Git belum terpasang pada sistem, kamu dapat mengikuti langkah-langkah berikut untuk menginstalnya.

1. Buka situs web resmi Git di [sini](https://git-scm.com/downloads).
2. Pilih sistem operasi yang sesuai (Windows, macOS, atau Linux) dan unduh _installer_ yang sesuai.
3. Jalankan _installer_ yang telah diunduh dan ikuti petunjuk di layar untuk menyelesaikan proses instalasi.
4. Sebagai tambahan, jangan lupa untuk mencentang "Git Credential Manager Core" untuk mempermudah integrasi Git dengan GitHub.

![Gambar opsi Git Credential Manager Core](https://user-images.githubusercontent.com/5658207/140082529-1ac133c1-0922-4a24-af03-067e27b3988b.png)

### Langkah 2: Konfigurasi Awal Git

Setelah Git terpasang, langkah-langkah berikut akan membantumu mengatur konfigurasi awal sebelum mulai menggunakan Git.

1. Buatlah sebuah _folder_/direktori baru untuk menyimpan proyek Git kamu, kemudian masuklah ke direktori tersebut.
2. Salinlah _path_ ke direktori yang sudah kamu buat.
3. Buka terminal atau _command prompt_ pada sistem, kemudian pindah ke direktori yang sudah kamu buat dengan menjalankan perintah `cd <path_direktori>`
4. Inisiasi repositori baru dengan perintah `git init`. Perintah ini akan membuat repositori Git kosong di dalam direktori yang kamu tentukan.

### Langkah 3: Konfigurasi Nama Pengguna dan _Email_

Sebelum mulai berkontribusi ke repositori, konfigurasikan nama pengguna dan alamat _email_ agar terhubung dengan _commit_-mu.

Atur _username_ dan _email_ yang akan diasosiasikan dengan pekerjaanmu ke repositori Git ini dengan menjalankan perintah di bawah ini. Sesuaikan dengan _username_ dan _email_ yang kamu gunakan pada [GitHub](https://github.com).

```bash
git config --global user.name "<NAME>"
git config --global user.email "<EMAIL>"
```

Contoh:

```bash
git config --global user.name "pakbepe"
git config --global user.email "pak.bepe@cs.ui.ac.id"
```

Perlu diketahui bahwa _flag_ `--global` akan mengubah konfigurasi global untuk seluruh sistem. Yang dimaksud konfigurasi global adalah kamu sedang bilang ke Git: "Kalau aku pakai Git di komputer ini, anggap saja namaku dan emailku selalu ini."

Jadi:
`--global` = berlaku untuk semua project Git yang kamu buka di komputer itu.


:::warning
- Pastikan untuk mengganti `<NAME>` dan `<EMAIL>` dengan informasi pribadimu
- Jika kalian **hanya membutuhkan konfigurasi internal** kalian hanya perlu cukup menggunakan kode ini 

```bash
git config user.name "<NAME>"
git config user.email "<EMAIL>"
```

Contoh:

```bash
git config  user.name "pakbepe"
git config  user.email "pak.bepe@cs.ui.ac.id"
```
- Konfigurasi internal yaitu nama dan email yang kalian gunakan untuk login itu hanya berlaku untuk project Git yang sekarang kamu buka.Jadi cuma untuk folder Git yang kamu lagi aktif di dalamnya (misalnya: 1 project saja).
:::

### Langkah 4: Konfigurasi Autentikasi

Untuk nantinya menghubungkan akun Git kamu dengan akun GitHub, terdapat konfigurasi ekstra yang perlu kamu tambahkan. Kamu hanya perlu menjalankan kedua perintah dibawah ini:

**Windows**
```bash
git credential-manager configure
git config --global credential.credentialStore wincredman
```

**Unix (macOS, Linux)**
```bash
git credential-manager configure
git config --global credential.credentialStore keychain
```

:::tip
- Apabila perintah `git credential-manager` tidak bisa dijalankan, kamu bisa coba perintah `git-credential-manager` atau `git-credential-manager-core`.
- Pada macOS, jika kedua perintah tersebut tidak berhasil, kamu bisa mencoba mengunduh git credential manager menggunakan *Homebrew* dengan perintah `brew install git-credential-manager-core`.
- Jika macOS tidak memiliki *Homebrew*, kamu bisa mengunduhnya dengan mengikuti instruksi dari [web ini](https://brew.sh).
:::

### Langkah 5: Verifikasi Konfigurasi

Untuk memastikan konfigurasi telah diatur dengan benar pada repositori lokal, kamu dapat menjalankan perintah berikut.

```bash
git config --list
```

## Tutorial: Penggunaan Dasar Git

**Repositori** adalah tempat penyimpanan untuk proyek perangkat lunak, yang mencakup semua revisi dan perubahan yang telah dilakukan pada kode. Untuk mengeksekusi perintah-perintah Git, kamu dapat melakukannya pada repositori di GitHub, platform kolaboratif untuk mengelola proyek menggunakan Git.

:::info
Perlu kamu ketahui bahwa tutorial penggunaan dasar Git ini tidak akan dikumpulkan dan hanya bersifat latihan. Berkas yang akan kamu kumpulkan hanyalah proyek Django yang langkah pembuatannya juga terdapat di tutorial ini.
:::

### Langkah 1: Melakukan Inisiasi Repositori di GitHub

Langkah pertama dalam penggunaan Git adalah melakukan inisiasi repositori di GitHub untuk memulai pelacakan perubahan pada proyekmu.

1. Buka [GitHub](https://github.com) melalui peramban web.

2. Buat Repositori Baru
	- Pada halaman beranda GitHub, buat repositori baru dengan nama `my-first-repo`.
	- Buka halaman repositori yang baru kamu buat. Pastikan untuk mengatur visibilitas proyek sebagai "Public" dan biarkan pengaturan lainnya pada nilai _default_.

3. Tentukan Direktori Lokal
	- Pilih direktori lokal di komputermu yang telah diinisiasi dengan Git. Inilah tempat kamu akan menyimpan versi lokal dari proyek.

4. Tambahkan Berkas `README.md`
	- Buat berkas baru dengan nama `README.md` dalam direktori lokal proyekmu.
	- Isi berkas `README.md` dengan informasi seperti nama, NPM, dan kelas. Contoh:
		```md
		Nama : Pak Bepe

		NPM : 2401234567

		Kelas : PBP A
		```

5. Cek Status dan Lakukan _Tracking_
	- Buka _command prompt_ atau terminal, lalu jalankan `git status` pada direktori yang sudah kamu pilih. Perintah ini akan menampilkan berkas-berkas yang belum di-_track_ (_untracked_).
	- Gunakan perintah `git add README.md` untuk menandai berkas README.md sebagai berkas yang akan di-_commit_ (_tracked_).

6. _Commit_ Perubahan
	- Jalankan kembali `git status` dan pastikan berkas README.md sudah ditandai sebagai berkas yang akan di-_commit_.
	- Lanjutkan dengan menjalankan `git commit -m "<KOMENTAR KAMU>"` untuk membuat _commit_ dengan pesan komentar yang sesuai dengan perubahan yang kamu lakukan.


:::warning
Langkah ini akan membuat kamu siap untuk mulai melacak perubahan pada proyek menggunakan Git.
:::

:::info
- **_Good practice_** dalam memberikan komentar _commit_ adalah menjelaskan dengan singkat apa yang kamu lakukan. Pada umumnya, komentar _commit_ ditulis menggunakan bahasa Inggris. Salah satu contoh komentar _commit_ yang bisa kamu gunakan untuk contoh di atas adalah `Create README.md file` atau `Membuat berkas README.md`.
- Komentar _commit_ yang baik dapat membantu kamu dan rekan-rekan tim kamu dalam memahami tujuan perubahan tersebut.
- **Hindari** komentar yang terlalu umum atau ambigu, seperti `Perbaikan bug` (`Fix bugs`) atau `Update file`.
:::

### Langkah 2: Menghubungkan Repositori Lokal dengan Repositori di GitHub

Setelah melakukan inisiasi repositori lokal, langkah selanjutnya adalah menghubungkannya dengan repositori di GitHub agar kamu dapat berkolaborasi dan menyimpan perubahan di platform daring tersebut.

1. Buat **_Branch_ Utama** Baru
	- Di terminal atau _command prompt_, jalankan perintah `git branch -M main` untuk membuat _branch_ utama baru dengan nama "main".
	- Pastikan huruf "M" pada perintah `-M` ditulis dengan **huruf kapital**.

2. Hubungkan dengan Repositori di GitHub

- Gunakan perintah `git remote add <NAMA_REMOTE> <URL_REPO>` untuk menghubungkan repositori lokal dengan repositori di GitHub.
- `<NAMA_REMOTE>` adalah nama yang akan kamu gunakan untuk mereferensikan repositori remote tersebut. Secara konvensi, nama `origin` digunakan untuk repositori utama/primer.
- `<URL_REPO>` adalah URL HTTPS repositori yang telah kamu buat di GitHub.
- URL repositori ini bisa kamu dapatkan di halaman GitHub ketika kamu berhasil membuat repositori baru di GitHub.

    Contoh penggunaan:
    ```bash
    git remote add origin https://github.com/pakbepe/test.git
    ```

    Pada contoh di atas:
    - `origin` = nama remote (bisa diganti dengan nama lain jika diinginkan)
    - `https://github.com/pakbepe/test.git` = URL repositori GitHub

    Tips Tambahan:
    - Untuk melihat daftar remote yang sudah ditambahkan: `git remote -v`
    - Untuk menghapus remote: `git remote remove <NAMA_REMOTE>`
    - Untuk mengganti URL remote: `git remote set-url <NAMA_REMOTE> <URL_BARU>`
    
3. Lakukan Penyimpanan Pertama ke GitHub
	- Terakhir, lakukan penyimpanan pertama ke GitHub dengan menjalankan perintah `git push -u origin main`.
	- Perintah ini akan mengirimkan semua perubahan yang ada pada _branch_ saat ini (dalam hal ini adalah _branch_ utama) di repositori lokal ke _branch_ main di repositori GitHub.
	- Apabila ini pertama kalinya kamu melakukan push ke GitHub dan kamu menggunakan OS Windows, setelah melakukan instalasi, seharusnya akan muncul _window_ yang meminta kamu untuk _sign in_ ke GitHub. Klik "_Sign in with your browser_", kemudian ikuti instruksi yang terdapat pada _window_ tersebut.


4. Lakukan Pengecekan Kembali
	- Lakukan _refresh_ pada halaman repositori kamu, seharusnya berkas `README.md` kamu sudah dapat terlihat.

:::info
- Langkah ini penting untuk menjaga konsistensi antara repositori lokal dan repositori di GitHub.
- Proses ini memungkinkanmu untuk mulai berkolaborasi dan menyimpan perubahan proyek secara terstruktur di platform GitHub.
- `README.md` adalah file yang berisi penjelasan singkat tentang proyek, seperti tujuan, cara menjalankan, dan fitur utamanya, agar orang lain mudah memahami dan menggunakan proyek tersebut.
- Informasi lebih lanjut tentang **git master / main** serta branching nya bisa dilihat di [sini](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).
:::


### Langkah 3: Melakukan _Cloning_ terhadap Suatu Repositori

**_Cloning_ repositori** adalah proses menduplikasi seluruh konten dari repositori yang ada di platform GitHub ke komputer lokal agar bisa dilihat, diedit, dan dijalankan secara offline di komputer mu. Langkah-langkahnya adalah sebagai berikut.

1. Buka halaman repositori di [GitHub](https://github.com) yang telah kamu buat sebelumnya.

2. Salin URL _Clone_
	- Klik tombol **`Code`** di pojok kanan atas halaman repositori di GitHub.
	- Pilih opsi HTTPS untuk salin URL _clone_.

3. _Clone_ Repositori ke Komputer Lokal
	- Buka terminal atau _command prompt_ di direktori yang **berbeda** dari tempat repositori lokalmu sebelumnya.
	- Jalankan perintah `git clone <URL_CLONE>` (gantilah URL_CLONE dengan URL yang telah kamu salin).
	- Perintah ini akan menduplikasi seluruh repositori ke komputer lokalmu.

Saat ini, kamu memiliki tiga repositori:

1. **Repositori asli** di komputer lokal.
2. **Repositori daring** di GitHub yang terhubung dengan repositori lokal.
3. **Repositori baru hasil dari proses _cloning_** yang terhubung dengan repositori GitHub.

:::info
- Langkah ini memungkinkanmu untuk bekerja dengan repositori di berbagai tempat dengan mudah.
:::

### Langkah 4: Melakukan _Branching_ pada Suatu Repositori

Pada tahap ini kamu akan mempelajari tentang penggunaan _branch_ dalam Git. Penggunaan _branch_ memungkinkan kamu untuk mengembangkan fitur atau memperbaiki _bug_ di lingkungan terpisah sebelum menggabungkannya kembali ke _branch_ utama.

**Apa Itu _Branch_ di Git?**

- _Branch_ di Git adalah cabang terpisah dari _source code_ yang memungkinkan pengembangan independen dari fitur atau perubahan.
- Hal ini memungkinkan tim untuk bekerja pada fitur atau perbaikan _bug_ tanpa mengganggu kode yang ada di _branch_ utama.

1. Membuat dan Mengganti _Branch_ Baru
	- Pada direktori repositori lokal asli (bukan _clone_), jalankan perintah `git checkout -b <NAMA_BRANCH>` di terminal atau _command prompt_ untuk membuat dan beralih ke _branch_ baru. Contoh: `git checkout -b jurusan_branch`
	- Tambahkan atribut jurusan pada berkas `README.md`. Contoh:

		```md
		Nama : Pak Bepe

		NPM : 2401234567

		Kelas : PBP A

		Hobi : Tidur

		Jurusan : Ilmu Sistem Informasi Komputer
		```

2. Menyimpan Perubahan dan _Push_ ke GitHub
	- Setelah menambahkan atribut jurusan, simpan berkas tersebut.
	- Lakukan `add`, `commit`, dan `push` ke GitHub dengan menjalankan perintah yang sudah kamu kuasai sebelumnya.
	- Jalankan perintah `git push -u origin <NAMA_BRANCH>`. Pastikan untuk mengganti `<NAMA_BRANCH>` sesuai dengan nama branch baru yang telah dibuat.

3. Menggabungkan _Branch_ Menggunakan _Pull Request_

	- Buka kembali halaman repositori kamu pada GitHub.
	- Secara otomatis, pop-up dengan tombol **`Compare & pull request`** akan muncul. Jika tidak, alternatifnya adalah dengan menekan tombol **`Pull Request`** dan kemudian memilih opsi **`New pull request`**.
	- Setelah itu, GitHub akan membandingkan perubahan yang ada di kedua _branch_ yang ingin digabungkan.
	- Apabila tidak terdapat konflik, tekan tombol **`Merge pull request`** yang akan menggabungkan perubahan dari _branch_ yang ingin digabungkan ke dalam _branch_ utama (`main`).
	- **Jika terdapat konflik**, kamu harus melihat di file yang biasanya berwarna merah pada text editor mu dan selesaikan conflict nya bisa dengan memilih merge atau salah satunya sesuai kebutuhan baru menyetujui **`Merge pull request`** nya.
	- Dengan melakukan langkah di atas, semua perubahan dari kedua _branch_ akan diintegrasikan ke dalam _branch_ utama, menciptakan kesatuan antara perubahan tersebut.

:::info
- Jika kamu ingin berpindah antar _branch_ yang sudah ada, jalankan `git checkout <NAMA_BRANCH>` pada terminal. Flag `-b` pada perintah sebelum-sebelumnya digunakan untuk membuat _branch_ baru dan beralih ke _branch_ tersebut dalam satu langkah.
- **Konflik** terjadi ketika perubahan yang dilakukan pada satu _branch_ bertabrakan dengan perubahan yang dilakukan pada _branch_ lain. Misalnya, jika dua pengembang mengubah bagian yang sama dari berkas yang sama dalam waktu bersamaan, Git tidak dapat dengan otomatis memutuskan perubahan mana yang harus diterapkan.
- Jika terdapat konflik atau perubahan yang saling bertabrakan, platform ini akan meminta kamu untuk menentukan perubahan mana yang sebaiknya diambil.
- **Penting** untuk memahami konsep _branching_ dalam Git, karena ini memungkinkan **pengembangan yang terorganisir dan terpisah**, sebelum semua perubahan dikombinasikan kembali ke dalam kode utama.
:::

## Tutorial: Instalasi Django dan Inisiasi Proyek Django

**Django** adalah kerangka kerja (_framework_) yang populer untuk pengembangan aplikasi web dengan bahasa pemrograman Python. Dalam tutorial ini, kamu akan mempelajari langkah-langkah instalasi Django dan inisiasi proyek demo sebagai _starter_.

:::warning
Proyek Django ini harus kamu buat pada folder yang kedepannya akan disebut **direktori** yang berbeda dengan `my-first-repo` seperti yang diajarkan pada langkah-langkah sebelumnya. Pastikan kamu sudah berpindah direktori pada terminal dan sudah tidak berada di dalam `my-first-repo`.

Untuk berpindah direktori silakan gunakan kode ini
```bash
cd ~
mkdir <NAMA_FOLDER_BARU>
cd <NAMA_FOLDER_BARU>
```

Notes : 
- `Mkdir` berfungsi untuk membuat suatu folder baru
- `cd` berfungsi untuk berpindah folder
- `cd ~` berfungsi untuk berpindah folder utama pada komputermu
:::

### Langkah 1: Membuat Direktori dan Mengaktifkan _Virtual Environment_

1. Buat direktori baru dengan nama `football-news` dan masuk ke dalamnya.
2. Di dalam direktori tersebut, buka _command prompt_ (Windows) atau _terminal shell_ (Unix).
3. Buat _virtual environment_ dengan menjalankan perintah berikut.

	Windows:

	```bash
	python -m venv env
	```

	Unix (macOS, Linux):
	```bash
	python3 -m venv env
	```

4. **_Virtual environment_** ini berguna untuk mengisolasi _package_ serta _dependencies_ dari aplikasi agar tidak bertabrakan dengan versi lain yang ada pada komputermu. Kamu dapat mengaktifkan _virtual environment_ dengan perintah berikut.

	- Windows :

		```bash
		env\Scripts\activate
		```

	- Unix (Mac/Linux):

		```bash
		source env/bin/activate
		```
	
	:::tip
	Bagi pengguna Windows, apabila kamu mengalami masalah dengan kata-kata `PSSecurityException`, `UnauthorizedAccess`, _running scripts is disabled on this system_,lakukan langkah berikut.
	1. Buka PowerShell dengan akses _administrator_.
	2. Jalankan perintah `Set-ExecutionPolicy Unrestricted -Force`.
	3. Silakan coba lagi aktifkan _virtual environment_ di terminal kamu.
	:::

5. _Virtual environment_ akan aktif dan ditandai dengan `(env)` di baris _input_ terminal.

### Langkah 2: Menyiapkan _Dependencies_ dan Membuat Proyek Django

**_Dependencies_** adalah komponen atau modul yang diperlukan oleh suatu perangkat lunak untuk berfungsi, termasuk _library_, _framework_, atau _package_. Hal tersebut memungkinkan pengembang memanfaatkan kode yang telah ada, mempercepat pengembangan, tetapi juga memerlukan manajemen yang hati-hati untuk memastikan kompatibilitas versi yang tepat. Penggunaan _virtual environment_ membantu mengisolasi _dependencies_ antara proyek-proyek yang berbeda.

1. Di dalam direktori yang sama, buat berkas `requirements.txt` dan tambahkan beberapa _dependencies_.

	```text
	django
	gunicorn
	whitenoise
	psycopg2-binary
	requests
	urllib3
    python-dotenv
	```

2. Lakukan instalasi terhadap _dependencies_ yang ada dengan perintah berikut. Jangan lupa jalankan _virtual environment_ terlebih dahulu sebelum menjalankan perintah berikut.

	```bash
	pip install -r requirements.txt
	```

3. Buat proyek Django bernama `football_news` dengan perintah berikut.

	```bash
	django-admin startproject football_news .
	```

	:::warning
	Pastikan karakter `.` tertulis di akhir perintah.
	:::

### Langkah 3: Konfigurasi Environment Variables dan Proyek

1. Buat file `.env` di dalam direktori root proyek (di mana file `manage.py` berada).
<br/>
   ![root proyek](/img/t0-1.png)


2. Buka file `.env` dan tambahkan konfigurasi berikut:
   ```env
   PRODUCTION=False
   ```
   
   **Environment variables** adalah variabel yang disimpan di luar kode program dan digunakan untuk menyimpan informasi konfigurasi seperti kredensial database, API keys, atau pengaturan environment. Ini memungkinkan kode yang sama berjalan di environment berbeda tanpa perlu mengubah kode.

3. Buat juga file `.env.prod` di direktori yang sama untuk konfigurasi production:
   ```env
   DB_NAME=<nama database>
   DB_HOST=<host database>
   DB_PORT=<port database>
   DB_USER=<username database>
   DB_PASSWORD=<password database>
   SCHEMA=tutorial
   PRODUCTION=True
   ```
   
   **Perbedaan .env dan .env.prod:**
   - **`.env`**: Digunakan untuk development lokal. Karena `PRODUCTION=False`, aplikasi akan menggunakan database SQLite yang lebih simple untuk testing dan development
   - **`.env.prod`**: Digunakan untuk production deployment. Karena `PRODUCTION=True`, aplikasi akan menggunakan database PostgreSQL dengan kredensial yang disediakan ITF Fasilkom UI
   
   **Kredensial database** untuk variabel `DB_NAME`, `DB_HOST`, `DB_PORT`, `DB_USER`, dan `DB_PASSWORD` dapat diperoleh dari email ITF Fasilkom UI (noreply@cs.ui.ac.id) yang dikirimkan kepadamu. Kredensial ini akan digunakan saat deployment di PWS.
   
   :::info
   **Penjelasan setiap variabel:**
   - `DB_NAME`: Nama database PostgreSQL
   - `DB_HOST`: Host/alamat server database
   - `DB_PORT`: Port koneksi database
   - `DB_USER`: Username untuk koneksi database
   - `DB_PASSWORD`: Password untuk koneksi database
   - `SCHEMA`: Nama schema database. ITF menyediakan 3 schema: `tutorial`, `tugas_individu`, dan `tugas_kelompok`. Untuk tutorial ini kita gunakan `tutorial`, untuk tugas lain sesuaikan dengan schema yang diperlukan
   - `PRODUCTION`: Menentukan mode aplikasi (`False` = development dengan SQLite, `True` = production dengan PostgreSQL)
   :::
   
   **Contoh konfigurasi .env.prod:**
   ```env
   DB_NAME=d1a2b3c4d5e6f7
   DB_HOST=192.168.1.100
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=ABCdef123456
   SCHEMA=tutorial
   PRODUCTION=True
   ```

4. Modifikasi file `settings.py` untuk menggunakan environment variables. Tambahkan kode berikut di bagian atas file (setelah import `Path`):
   ```python
   import os
   from dotenv import load_dotenv
   # Load environment variables from .env file
   load_dotenv()
   ```

5. Tambahkan kedua string berikut pada `ALLOWED_HOSTS` di `settings.py` untuk keperluan *development*:
   ```python
   ...
   ALLOWED_HOSTS = ["localhost", "127.0.0.1"]
   ...
   ```
   
   Dalam konteks *deployment*, `ALLOWED_HOSTS` berfungsi sebagai daftar *host* yang diizinkan untuk mengakses aplikasi web. Dengan menetapkan nilai di atas, kamu mengizinkan akses dari *host* lokal, artinya hanya bisa diakses dari jaringan kamu saja. Namun, apabila kamu men-*deploy* aplikasi ke suatu *server*, pastikan bahwa kamu menambahkan *host* dari *server* tersebut pada `ALLOWED_HOSTS`.

6. Tambahkan konfigurasi `PRODUCTION` tepat di atas code `DEBUG` di `settings.py`.
   ```python
   PRODUCTION = os.getenv('PRODUCTION', 'False').lower() == 'true'
   ```

7. Ubah konfigurasi database di `settings.py`. Cari bagian `DATABASES` dan ganti dengan:
   ```python
   # Database configuration
   if PRODUCTION:
       # Production: gunakan PostgreSQL dengan kredensial dari environment variables
       DATABASES = {
           'default': {
               'ENGINE': 'django.db.backends.postgresql',
               'NAME': os.getenv('DB_NAME'),
               'USER': os.getenv('DB_USER'),
               'PASSWORD': os.getenv('DB_PASSWORD'),
               'HOST': os.getenv('DB_HOST'),
               'PORT': os.getenv('DB_PORT'),
               'OPTIONS': {
                   'options': f"-c search_path={os.getenv('SCHEMA', 'public')}"
               }
           }
       }
   else:
       # Development: gunakan SQLite
       DATABASES = {
           'default': {
               'ENGINE': 'django.db.backends.sqlite3',
               'NAME': BASE_DIR / 'db.sqlite3',
           }
       }
   ```

### Langkah 4: Menjalankan Server

1. Pastikan bahwa berkas `manage.py` ada pada direktori yang aktif pada terminal kamu saat ini. Jalankan migrasi database terlebih dahulu dengan perintah:
	- Windows:
		```bash
		python manage.py migrate
		```
	- Unix:
		```bash
		python3 manage.py migrate
		```

2. Setelah migrasi selesai, jalankan *server* Django dengan perintah:
	- Windows:
		```bash
		python manage.py runserver
		```
	- Unix:
		```bash
		python3 manage.py runserver
		```

3. Buka http://localhost:8000 pada peramban web untuk melihat animasi roket sebagai tanda aplikasi Django kamu berhasil dibuat.
![image](/img/t0-2.png)

### Langkah 5: Menghentikan _Server_ dan Menonaktifkan _Virtual Environment_

1. Untuk menghentikan _server_, tekan `Ctrl+C` (Windows/Linux) atau `Control+C` (Mac) pada terminal.
2. Nonaktifkan _virtual environment_ dengan perintah:

	```bash
	deactivate
	```

   	**Selamat! Kamu telah berhasil membuat aplikasi Django dari awal.**
    
## Tutorial: Unggah Proyek ke Repositori GitHub
1. Buatlah repositori GitHub baru bernama `football-news` dengan visibilitas *public*.

2. Inisiasi direktori lokal `football-news` sebagai repositori Git.
	:::tip
	Ingat kembali tahap tutorial sebelumnya. Pastikan pula bahwa kamu menjalankan perintah `git init` pada direktori `football-news`, bukan di luarnya ataupun di direktori lain di dalam `football-news`.
	:::
	Jalankan perintah berikut di terminal:
	```bash
	git init
	```
    Perintah ini membuat folder .git yang digunakan untuk melacak perubahan file secara lokal.
3. Tambahkan berkas `.gitignore`
   	- Tambahkan berkas `.gitignore` dan isilah berkas tersebut dengan teks berikut.
		```yaml
		# Django
		*.log
		*.pot
		*.pyc
		**pycache**
		db.sqlite3
		media
		# Backup files
		*.bak
		# If you are using PyCharm
		# User-specific stuff
		.idea/**/workspace.xml
		.idea/**/tasks.xml
		.idea/**/usage.statistics.xml
		.idea/**/dictionaries
		.idea/**/shelf
		# AWS User-specific
		.idea/**/aws.xml
		# Generated files
		.idea/**/contentModel.xml
		.DS_Store
		# Sensitive or high-churn files
		.idea/**/dataSources/
		.idea/**/dataSources.ids
		.idea/**/dataSources.local.xml
		.idea/**/sqlDataSources.xml
		.idea/**/dynamic.xml
		.idea/**/uiDesigner.xml
		.idea/**/dbnavigator.xml
		# Gradle
		.idea/**/gradle.xml
		.idea/**/libraries
		# File-based project format
		*.iws
		# IntelliJ
		out/
		# JIRA plugin
		atlassian-ide-plugin.xml
		# Python
		*.py[cod]
		*$py.class
		# Distribution / packaging
		.Python build/
		develop-eggs/
		dist/
		downloads/
		eggs/
		.eggs/
		lib/
		lib64/
		parts/
		sdist/
		var/
		wheels/
		*.egg-info/
		.installed.cfg
		*.egg
		*.manifest
		*.spec
		# Installer logs
		pip-log.txt
		pip-delete-this-directory.txt
		# Unit test / coverage reports
		htmlcov/
		.tox/
		.coverage
		.coverage.*
		.cache
		.pytest_cache/
		nosetests.xml
		coverage.xml
		*.cover
		.hypothesis/
		# Jupyter Notebook
		.ipynb_checkpoints
		# pyenv
		.python-version
		# celery
		celerybeat-schedule.*
		# SageMath parsed files
		*.sage.py
		# Environments
		.env*
        !.env.example*
		.venv
		env/
		venv/
		ENV/
		env.bak/
		venv.bak/
		# mkdocs documentation
		/site
		# mypy
		.mypy_cache/
		# Sublime Text
		*.tmlanguage.cache
		*.tmPreferences.cache
		*.stTheme.cache
		*.sublime-workspace
		*.sublime-project
		# sftp configuration file
		sftp-config.json
		# Package control specific files Package
		Control.last-run
		Control.ca-list
		Control.ca-bundle
		Control.system-ca-bundle
		GitHub.sublime-settings
		# Visual Studio Code
		.vscode/*
		!.vscode/settings.json
		!.vscode/tasks.json
		!.vscode/launch.json
		!.vscode/extensions.json
		.history
		```
	- Berkas `.gitignore` adalah berkas konfigurasi yang digunakan dalam repositori Git untuk menentukan berkas-berkas dan direktori-direktori yang harus diabaikan oleh Git.
	- Berkas-berkas yang tercantum di dalam `.gitignore` **tidak** akan dimasukkan ke dalam versi kontrol Git (tidak di-*push* ke repositori GitHub).
	- Berkas ini perlu dibuat karena terkadang ada berkas-berkas yang tidak perlu dilacak oleh Git, seperti berkas-berkas yang dihasilkan oleh proses kompilasi, berkas sementara, atau berkas konfigurasi pribadi.

4. Hubungkan repositori lokal dengan repositori GitHub yang telah dibuat.
	```bash
	git remote add origin https://github.com/username/football-news.git
	```
	Ganti `username` dengan username GitHub kamu.
	
	Perintah ini menambahkan *remote* bernama `origin` yang menunjuk ke repositori GitHub kamu. Dengan menambahkan *remote* ini, Git akan tahu ke mana harus mengirim kode kamu saat melakukan *push*.

5. Buat branch utama bernama master.
	```bash
	git branch -M master
	```

6. Lakukan `add`, `commit`, dan `push` dari direktori repositori lokal.
	```bash
	git add .
	git commit -m "Tutorial 0"
	git push origin master
	```

:::info
- Repositori **`football-news`** yang baru saja kamu buat akan menjadi landasan untuk tutorial-tutorial berikutnya. **Repositori ini akan terus digunakan** dan berkembang seiring tutorial yang kamu ikuti.
- Pada akhir semester, kamu akan melihat bahwa repositori tutorial ini telah berkembang menjadi aplikasi yang utuh, buatan kamu sendiri. Sehingga, kamu bisa saja memasukkan ini ke dalam portofolio kamu!
- Oleh karena itu, pastikan kamu mengelola repositori ini dengan baik dan mengikuti tutorial-tutorial selanjutnya untuk mengembangkan kemampuan kamu dalam pemrograman berbasis platform.
:::

## Tutorial: Pembuatan Akun dan Deployment melalui PWS (Pacil _Web Service_)
1. Akses halaman PWS pada https://pbp.cs.ui.ac.id. Kamu akan diarahkan ke halaman login with SSO.
2. Login dengan akun SSO UI kamu.
3. Apabila proses _login_ berhasil, kamu akan diarahkan ke _home page_ dari PWS.

    ![Home PWS](/img/t0-3.png)

5. Buat proyek baru dengan menekan tombol `Create New Project`. Kamu akan diarahkan ke halaman untuk membuat proyek baru. Pada halaman ini, isi `Project Name` dengan `footballnews`. Setelah itu, tekan `Create New Project` di bawahnya.

	![Halaman Create Project PWS](/img/t0-4.png)



	:::info
	Dalam membuat proyek lain nantinya seperti tugas atau TK, kamu bisa mengisi `Project Name` dengan nama lain sesukamu. Akan tetapi, terdapat limitasi bahwa nama proyek harus terdiri dari karakter _alphanumeric_ saja.
	:::

6. Akan muncul dua informasi baru, yaitu mengenai _Project Credentials_ dan _Project Command_. **Simpan _credentials_ yang kamu peroleh** di tempat yang aman, karena seterusnya _credentials_ ini **tidak akan bisa kamu lihat lagi**. **Jangan jalankan dulu instruksi _Project Command_**.
    
    ![image](/img/t0-5.png)


7. Kemudian, pada sidebar, klik proyek yang kamu buat. Pilih tab Environment. 
![image](/img/t0-6.png)
    Pada tab tersebut, klik Raw Editor dan copy paste isi file dari **.env.prod** yang sebelumnya kamu buat.
![image](/img/t0-7.png)
Jangan lupa pastikan bahwa ```SCHEMA=tutorial``` dan ```PRODUCTION=True```, selanjutnya klik Update All Variables. Selanjutnya pastikan bahwa environment variable di proyek PWS kamu sudah tersimpan dengan baik.
![image](/img/t0-8.png)



7. Pada `settings.py` di proyek Django yang sudah kamu buat tadi, tambahkan URL *deployment* PWS pada `ALLOWED_HOSTS`.
	:::info
	URL *deployment* PWS memiliki format `<username-sso>-<nama proyek>.pbp.cs.ui.ac.id`. Apabila pada username SSO kamu terdapat karakter titik (.), gantilah karakter tersebut menjadi *hyphen* (-). Sebagai contoh, apabila username SSO kamu adalah `pak.bepe25` dan nama proyek kamu adalah `footballnews`, URL *deployment* PWS kamu adalah `pak-bepe25-footballnews.pbp.cs.ui.ac.id`.
	:::
	```python
	...
	ALLOWED_HOSTS = ["localhost", "127.0.0.1", "<URL deployment PWS kamu>"]
	...
	```
	Langkah ini perlu kamu lakukan agar proyek Django kamu dapat diakses melalui URL *deployment* PWS. Lakukan `git add`, `commit`, dan `push` perubahan ini ke repositori GitHub kamu.
	:::warning
	Sebelum kamu ke langkah selanjutnya, pastikan struktur repositorimu sama seperti ![image](/img/t0-12.png)
	:::

8. Jalankan perintah yang terdapat pada informasi *Project Command* pada halaman PWS. Ketika kamu melakukan push ke PWS, akan ada *window* yang meminta `username` dan `password`. Gunakan *credentials* yang kamu terima dari proyek tutorial kamu di PWS, **bukan *credentials* SSO**.
![image](/img/t0-13.png)

9. Pada *side bar* situs PWS, klik proyek yang telah kamu buat. Kamu dapat melihat status *deployment* kamu saat ini. Apabila statusnya `Building`, artinya proyek kamu masih dalam proses *deployment*. Apabila statusnya `Running`, maka proyek kamu sudah bisa diakses pada URL *deployment*. Kamu bisa menekan tombol `View Project` yang terdapat pada halaman proyek kamu.

![image](/img/t0-14.png)


11. Apabila kedepannya ada perubahan pada proyek Django kamu yang ingin kamu *push* ke PWS, kamu hanya perlu menjalankan perintah:
	```bash
	git push pws master
	```
	**setelah melakukan `add` dan `commit`**. Kamu tidak perlu mengulang perintah yang ada di informasi *Project Command* lagi.

## Tambahan: _Troubleshooting_ PWS

### Build Gagal 
Apabila ada kendala seperti build yang gagal, terdapat beberapa solusi yang dapat kamu coba.

- Coba untuk kembali perhatikan struktur _file_ proyek Djangomu. Biasanya menandakan bahwa _file_-_file_ pada proyek Djangomu kurang lengkap, sehingga proyek Djangomu tidak terdeteksi oleh PWS. Terdapat beberapa hal yang dapat kamu coba periksa:
	- Isi Repositori: Pastikan struktur repositorimu sudah sama dengan contoh tampilan repositori yang dilampirkan pada langkah 7 di bagian tutorial _deployment_ ke PWS.
	- Berkas `requirements.txt`: Pastikan nama berkas tersebut sama persis, bukan `requirement.txt` (kurang huruf 's') atau `requirements.txt.txt` (double extension)
	- Berkas `.gitignore`: Pastikan bahwa berkas `.gitignore` diawali dengan titik dan tidak memwliki ekstensi apa-apa di akhir. Pastikan pula bahwa berkas `.gitignore` terletak di _root folder_ bersama dengan berkas `manage.py`, direktori `env`, direktori `footballnews`, berkas `requirements.txt`, direktori tersembunyi `.git`, dan berkas basis data `db.sqlite3`.
	:::info
	Apabila kamu pengguna Windows, centang opsi `File name extensions` pada Windows Explorer untuk melihat ekstensi berkas-berkas yang kamu miliki. Dengan ini, kamu bisa melakukan _troubleshooting_ dengan lebih mudah.
    
	    ![file extension](/img/t0-15.png)

	:::
	- Pastikan bahwa direktori `env` dan berkas basis data `db.sqlite3` tidak ikut dilacak/tidak ikut di-_push_ oleh Git. Apabila sudah telanjur terjadi, kamu bisa menambahkan berkas `.gitignore`, kemudian menjalankan perintah `git rm --cached -r env db.sqlite3` sebelum melakukan `add`, `commit`, dan `push`. Hal ini perlu dilakukan agar direktori `env` dan berkas `db.sqlite3` selanjutnya tidak ikut dilacak oleh Git.
    - Apabila kamu sudah yakin bahwa struktur _file_ proyek Djangomu sudah lengkap tetapi _deployment_ masih gagal, pastikan bahwa kamu melakukan _push_ ke PWS menggunakan branch `master`.

### Tidak Menyimpan _Credentials_

Apabila kamu lupa untuk menyimpan _credentials_ yang kamu dapatkan saat membuat proyek di PWS, yang bisa kamu lakukan adalah dengan me-regenerate credential pada tab Settings di proyek tersebut. 
![image](/img/t0-16.png)

Jangan lupa ikuti langkah-langkah yang dijelaskan pada tab tersebut. Solusi lain adalah dengan membuat proyek baru.

### Mengganti _Remote_ URL PWS pada Repositori Lokal

Jika kamu membuat proyek baru di PWS untuk mengatasi masalah pada proyek sebelumnya, kamu perlu mengganti _remote_ URL di repositori lokalmu menjadi _remote_ URL dari proyek yang baru. Apabila tidak kamu ganti, maka perintah `git push pws master` yang nantinya akan kamu jalankan tidak akan melakukan push ke proyek barumu, melainkan akan tetap mencoba melakukan push ke proyekmu yang lama.

Untuk melakukan penggantian _remote_ URL, kamu hanya perlu mengganti perintah pertama yang terdapat pada tampilan proyek baru PWS. Ganti perintah `git remote add pws <link>` menjadi `git remote set-url pws <link>`, lalu jalankan perintah-perintah selanjutnya seperti biasa.

### Error 502 (Bad Gateway) pada web

Pada saat deployment pertama kali, kamu mungkin akan melihat error 502 (Bad Gateway) di browser. Ini normal terjadi karena PWS sedang menjalankan proses migrasi database sebelum server aplikasi (gunicorn) siap menerima request.
![image](/img/t0-17.png)

Kamu bisa cek progress di tab Logs pada dashboard proyek PWS. Tunggu hingga muncul log Listening at (biasanya 15-20 detik). Karena log tidak update secara streaming, refresh halaman log jika diperlukan.

![image](/img/t0-18.png)


## Akhir Kata

**Selamat!** Kamu sudah menyelesaikan tutorial tentang penggunaan Git, GitHub, instalasi IDE, pengembangan proyek dengan Django, serta _deployment_ ke PWS!

Pesan tambahan, pastikan kamu memahami setiap kode yang kamu tulis, ya. **Jangan sampai hanya asal _copy-paste_ tanpa memahaminya terlebih dahulu.** Apabila nanti kamu mengalami kesulitan, jangan ragu untuk bertanya ke asisten dosen ataupun teman. Semangat terus dalam menjalani perkuliahan PBP selama satu semester ke depan, dan jangan lupa untuk menikmati setiap prosesnya. _Good luck_!

## Referensi Tambahan

- [About pull request merges](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [Resolving a merge conflict on GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)
- [Git Guides Full Version](https://github.com/git-guides/git-pull)
- [Github Issue Tracker](https://docs.github.com/en/issues/tracking-your-work-with-issues)

## Kontributor

- Marla Marlena
- Isa Citra Buana
- Regina Meilani Aruan (English Translator)

## Credits

Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2025](https://github.com/pbp-fasilkom-ui/ganjil-2025) dan [PBP Ganjil 2024](https://github.com/pbp-fasilkom-ui/ganjil-2024) yang ditulis oleh Tim Pengajar dan Asisten Dosen Pemrograman Berbasis Platform 2025 dan 2024. Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.