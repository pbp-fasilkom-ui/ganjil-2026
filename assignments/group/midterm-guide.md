# Panduan Tugas Kelompok
Untuk mempermudah kalian dalam mengerjakan tugas kelompok, tim asdos telah menyiapkan panduan lengkap yang bisa jadi pegangan selama proses development. Panduan ini disusun berdasarkan pengalaman dan *best practice* untuk kerja sama tim yang umum digunakan dalam pengembangan *software*.

Tugas kelompok memiliki kompleksitas tersendiri dibanding tugas individu. Diperlukan pemahaman mendalam tentang  *workflow* yang mendukung kolaborasi secara efektif. Tanpa *workflow* yang terstruktur, berbagai masalah teknis kerap muncul seperti konflik kode, duplikasi pekerjaan, bahkan kehilangan progress kerja yang telah dibuat. Pada panduan ini, Panduan ini akan menguraikan *workflow* standar yang dapat kalian terapkan, mencakup setup organisasi tim, desain arsitektur, branch management, hingga implementasi CI/CD untuk deployment otomatis.

Tujuan dari panduan ini adalah memastikan setiap anggota tim dapat berkontribusi secara optimal, proses kerja sama berjalan lancar tanpa hambatan teknis, dan menghasilkan output yang maksimal. Kemampuan kerja sama tim yang kalian pelajari di sini juga akan sangat berguna untuk project-project selanjutnya, baik di mata kuliah lain maupun di masa depan.

## GitHub Organization
GitHub Organization merupakan workspace bersama yang memungkinkan tim untuk mengelola berbagai repository dalam satu tempat.

### Langkah-langkah Membuat GitHub Organization
1. Login ke akun GitHub kalian
2. Klik foto profil di pojok kanan atas
3. Pilih "organizations" dari dropdown menu
4. Klik tombol "New organization"
5. GitHub akan menampilkan pilihan plan, pilih "Create a free organization"
6. Klik "Continue" untuk melanjutkan
7. Isi form organization details:
    * Organization account name: Buat nama yang representatif untuk tim kalian (contoh: pbp-kelompok-a1)
    * Contact email: Gunakan email salah satu anggota tim
    * This organization belongs to: Pilih "My personal account"
8. Di bagian "Add organization members", masukkan username GitHub anggota tim
9. Klik "Invite" untuk setiap anggota
10. Klik "Complete setup" setelah selesai

### Membuat Repository di Organization

1. Di halaman organization, klik "New repository"
2. Isi Repository name sesuai project kalian
3. Pilih Public atau Private sesuai kebutuhan
4. Klik "Create repository"

### Mengatur Member Permissions

1. Klik tab "People" di organization
2. Cari nama anggota yang ingin diatur
3. Klik dropdown di sebelah nama mereka
Pilih role yang sesuai:
    * Owner: Full access, bisa manage organization
    * Member: Access sesuai permission yang diberikan

Dengan mengikuti langkah-langkah di atas, tim kalian akan memiliki workspace GitHub yang terorganisir untuk mengerjakan tugas kelompok.

## Figma
![image](/img/guide-1.png)
Figma adalah salah satu alat desain berbasis cloud yang banyak digunakan untuk membuat tampilan antarmuka (UI) dan pengalaman pengguna (UX) pada website maupun aplikasi. Keunggulan utama Figma dibandingkan software desain lain adalah sifatnya yang kolaboratif. Banyak desainer, developer, maupun stakeholder dapat bekerja bersama pada satu file secara real-time, mirip seperti Google Docs. Hal ini memudahkan tim dalam melakukan diskusi, revisi, dan persetujuan desain tanpa perlu mengirim file bolak-balik.

Dalam mempelajari figma adapun beberapa hal yang dapat kalian lakukan, yaitu

1. **Persiapan & buat akun / file baru**
Pertama buka dulu Figma (bisa lewat browser atau aplikasinya). Kalau belum punya akun, daftar dulu. Kalau sudah, langsung aja klik New File buat mulai dan kalian bisa mulai bereksperimen. 

:::info
**Tips**
Kalian juga bisa mengklaim Figma Education untuk fitur Figma Pro yaa
:::


2. **Membuat Frame (artboard)** 
<p>
   Frame di Figma bisa dianggap sebagai “wadah” atau “kanvas” tempat menaruh elemen desain, mirip artboard di Photoshop atau slide di PowerPoint. Setiap layar aplikasi atau halaman website biasanya dibuat dalam satu frame, sehingga elemen seperti teks, gambar, dan tombol tersusun rapi di dalamnya. Frame juga mendukung pengaturan responsif lewat constraints atau auto layout, jadi desain bisa menyesuaikan ukuran saat layar berubah. Selain itu, frame bisa bersarang (frame di dalam frame) sehingga memudahkan pengaturan struktur, misalnya frame besar untuk layar utama dan frame kecil untuk card atau tombol.

**Contoh Implementasi**
- Pilih Frame tool (ikon Frame atau tekan F/A).
- Tentukan ukuran dengan memilih preset (contoh: iPhone, Desktop) atau bikin ukuran custom.
- Frame berfungsi sebagai layar/halaman, jadi setiap screen prototype harus berada di dalam frame.
- Kalau sudah ada kumpulan objek, bisa dijadikan satu frame dengan cara seleksi objek → Frame selection. 
</p>

3. **Membuat elemen dasar: shape, text, gambar**
<p>
    Elemen dasar di Figma mencakup shape (rectangle, ellipse, line, polygon), text, image, frame, dan vector/pen tool. Shape dipakai untuk membuat bentuk sederhana, text untuk menambahkan tulisan, image untuk menyisipkan gambar, frame sebagai wadah atau artboard, dan vector/pen tool untuk menggambar bentuk custom. Semua elemen ini menjadi bahan utama dalam membangun layout, komponen, maupun desain antarmuka di Figma.
    
**Contoh Implementasi**
- Tambahkan rectangle ( R ), ellipse (O), line (L), dan text (T) melalui toolbar atau shortcut.
- Atur properti seperti warna, border, radius, dan elevation di panel kanan.
- Untuk gambar, gunakan menu Place image atau cukup drag-drop ke kanvas.
</p>

:::info
Selalu beri nama layer yang jelas dan logis (contoh: btn-primary, hero-title) agar mudah dikelola saat proyek besar. 
:::



4. **Mengatur struktur: group, frame nesting, dan constraints**
<p>
    Mengatur struktur di Figma berarti menyusun elemen-elemen desain agar lebih rapi, teratur, dan mudah dikelola. Frame nesting, yaitu menempatkan frame di dalam frame lain untuk membuat hierarki desain yang jelas (misalnya frame besar untuk layar utama, frame kecil untuk card atau tombol) sedangkan constraints, yaitu aturan posisi elemen terhadap frame induknya sehingga elemen tetap proporsional atau responsif ketika ukuran layar berubah. Kombinasi ketiganya membantu menjaga konsistensi layout sekaligus memudahkan proses editing maupun handoff ke developer.
    
**Contoh Implementasi**
- Kelompokkan elemen menggunakan Group atau Frame agar lebih rapi dan mudah dikelola.
- Pelajari Constraints (misalnya left, right, center, stretch) supaya elemen bereaksi dengan benar saat ukuran frame berubah.
</p>


5. **Auto Layout**
<p>
    Auto Layout di Figma adalah fitur yang memungkinkan elemen dalam sebuah frame tersusun otomatis mengikuti aturan arah (horizontal atau vertikal), jarak antar elemen, serta padding di dalam wadahnya. Dengan Auto Layout, desain menjadi lebih fleksibel karena ukuran dan posisi elemen bisa menyesuaikan secara dinamis saat isi bertambah, berkurang, atau berubah. Fitur ini sangat berguna untuk membuat komponen yang konsisten dan responsif, seperti tombol, kartu, daftar, atau navbar, tanpa perlu mengatur ulang posisi elemen satu per satu.
    
**Contoh Implementasi**
- Pilih beberapa objek, lalu aktifkan Auto Layout (di panel kanan atau tekan Shift + A). Auto Layout membuat elemen tersusun otomatis dalam arah horizontal, vertical, atau grid.
- Spacing antar elemen akan menyesuaikan otomatis ketika isi bertambah atau berkurang.
</p>

:::info
**TIPS**
Gunakan fitur Suggest Auto Layout untuk mengonversi desain ke auto layout secara otomatis.
:::


6. **Components & Variants**
<p>
    Components & Variants di Figma adalah fitur untuk membuat elemen desain yang konsisten dan mudah digunakan kembali. Component berfungsi sebagai “master” dari sebuah elemen, misalnya tombol atau card, sehingga setiap kali digunakan (instance), perubahan pada master akan otomatis memengaruhi semua instance-nya. Sementara itu, Variants memungkinkan satu component memiliki beberapa versi atau state, seperti tombol default, hover, dan disabled, yang bisa digabung dalam satu set.

**Contoh Implementasi**
- Ubah elemen (misalnya tombol) menjadi Component dengan menu Create component.
- Kelompokkan variasi ke dalam Variants (contoh: default, hover, disabled) untuk mempermudah swap instance.    
</p>

:::info
Component + Variants membantu menjaga konsistensi desain dan mempercepat perubahan massal. Gunakan interactive components untuk langsung menangani state seperti hover atau click di prototype.
:::


7. **Styles & Design System sederhana**

Dengan menyimpan elemen ini sebagai Styles, desainer tidak perlu mengatur ulang setiap kali ingin menggunakan warna atau teks yang sama, cukup terapkan style yang sudah ada. Pendekatan ini juga memudahkan pembaruan, karena perubahan pada style akan otomatis diterapkan ke semua elemen yang terhubung.



8. **Prototyping: menghubungkan frame & membuat interaksi**
<p>
    Prototyping di Figma adalah proses menghubungkan frame atau elemen untuk mensimulasikan alur dan interaksi dalam sebuah aplikasi atau website. Dengan fitur ini, desainer bisa menentukan bagaimana pengguna berpindah dari satu layar ke layar lain, menambahkan interaksi seperti klik, hover, atau transisi animasi, hingga membuat pengalaman seolah-olah aplikasi sudah berfungsi. Prototyping membantu tim dan stakeholder memahami flow, menguji pengalaman pengguna, serta memberikan feedback sebelum desain masuk ke tahap pengembangan.
    
**Contoh Implementasi**
- Masuk ke tab Prototype di panel kanan.
- Tarik node dari elemen (misalnya tombol) ke frame tujuan untuk membuat navigasi.
- Pilih trigger: On Click, On Hover, dll.
- Tentukan action: Navigate, Open overlay, Change to.
- Atur animation: Instant, Smart Animate, dll.
- Gunakan tombol Present untuk preview flow seolah aplikasi benar-benar berjalan.
    
</p>


9. **Preview di device / share prototype**
<p>
    Figma menyediakan fitur untuk mencoba dan membagikan hasil desain dalam bentuk simulasi interaktif. Dengan preview, desainer bisa melihat langsung bagaimana prototype tampil dan berfungsi di perangkat nyata melalui aplikasi Figma Mirror atau mode Present. Sementara fitur share memungkinkan desain dibagikan lewat link, dengan pengaturan izin (view atau edit), sehingga tim maupun stakeholder bisa memberikan feedback secara langsung melalui komentar di dalam file.Kamu bisa share link prototype (atur permission: view / edit) dan mencatat komentar langsung di file menggunakan Comment tool. 
</p>



10. **Developer handoff (Inspect / Dev Mode)**
<p>
    Developer handoff (Inspect / Dev Mode) di Figma adalah tahap ketika desain yang sudah final disiapkan untuk digunakan oleh developer. Melalui fitur Inspect atau Dev Mode, developer bisa melihat detail teknis desain seperti ukuran, posisi, spacing, warna lengkap dengan kode CSS, serta langsung mengekspor aset gambar atau ikon yang dibutuhkan. Desainer juga bisa menandai elemen sebagai Ready for Dev agar tim developer tahu bagian mana yang siap diimplementasikan.  
</p>
 
Referensi : [Figma Tutorial](https://www.youtube.com/watch?v=HoKD1qIcchQ&pp=ygUOZmlnbWEgdHV0b3JpYWw%3D)


## Pull Request
Pull Request (PR) adalah mekanisme untuk mengajukan perubahan dari feature branch ke main branch. Melalui PR, anggota tim lain bisa melihat, review, dan memberikan feedback terhadap code yang akan di-merge sebelum masuk ke branch utama.
### Membuat Pull Request

1. Setelah push feature branch ke remote, buka repository di GitHub
2. GitHub biasanya akan menampilkan banner kuning dengan tombol **"Compare & pull request"** - klik tombol tersebut

![image](/img/guide-2.png)


3. Jika banner tidak muncul, klik tab **"Pull requests"** lalu klik **"New pull request"**

4. Pastikan pengaturan branch sudah benar:
   - **Base**: `main` (branch tujuan)
   - **Compare**: `feat/nama-fitur` (branch sumber)


5. Isi informasi PR:
   - **Title**: Berikan judul yang jelas dan deskriptif
   - **Description**: Jelaskan perubahan yang dilakukan atau fitur yang ditambahkan

![image](/img/guide-3.png)

6. Klik **"Create pull request"**

### Review Process

#### Sebagai Reviewer

1. Buka PR yang perlu di-review
2. Klik tab **"Files changed"** untuk melihat semua perubahan code
3. Berikan komentar pada baris code tertentu jika diperlukan
4. Setelah review selesai, klik **"Review changes"** di pojok kanan atas
5. Pilih **"Approve"** jika code sudah ok, atau **"Request changes"** jika perlu perbaikan

#### Sebagai Author PR

Jika ada request changes:
1. Lakukan perbaikan di local
2. Commit dan push perubahan ke branch yang sama:
```bash
git add .
git commit -m "Fix review comments"
git push origin feat/nama-fitur
```
3. PR akan otomatis terupdate dengan commit baru

### Merge Pull Request

Setelah PR di-approve:

1. Klik tombol **"Merge pull request"** di bagian bawah PR
2. Konfirmasi dengan klik **"Confirm merge"**

![image](/img/guide-4.png)


### Mengatasi Conflicts

Jika PR memiliki conflict, GitHub akan menampilkan pesan error. Untuk resolve:

1. Di local, pull update dari main ke feature branch:
```bash
git checkout feat/nama-fitur
git pull origin main
```
2. Resolve conflicts manually di code editor
3. Commit dan push:
```bash
git add .
git commit -m "Resolve merge conflicts"
git push origin feat/nama-fitur
```

Dengan menggunakan Pull Request, tim kalian bisa memastikan semua perubahan sudah di-review sebelum masuk ke branch utama.

## Merge Conflict
Merge conflict terjadi ketika Git tidak bisa otomatis menggabungkan perubahan dari dua branch yang berbeda karena ada perubahan pada baris code yang sama. Hal ini sering terjadi dalam kerja tim ketika dua atau lebih developer mengubah file yang sama secara bersamaan.

### Kapan Merge Conflict Terjadi?

Conflict biasanya muncul saat:
- Dua developer mengubah baris yang sama dalam file yang sama
- Satu developer menghapus file sementara yang lain memodifikasinya
- Ada perubahan pada struktur project yang bertabrakan

## Mengidentifikasi Merge Conflict

Ketika terjadi conflict, Git akan memberikan pesan error seperti:
```
Auto-merging views.py
CONFLICT (content): Merge conflict in views.py
Automatic merge failed; fix conflicts and then commit the result.
```
![image](/img/guide-5.png)


Untuk melihat file mana saja yang conflict:
```bash
git status
```
![image](/img/guide-6.png)

Output akan menampilkan file dengan status **"both modified"**.
### Mengatasi Merge Conflict dengan VS Code

1. Buka file yang mengalami conflict di VS Code
2. VS Code akan otomatis mendeteksi dan highlight area conflict dengan warna berbeda
3. Klik **"Resolve in Merge Editor"**

    ![image](/img/guide-7.png)


4. Di Merge Editor, kalian akan melihat tiga panel:
   - **Incoming**: Perubahan dari branch yang di-merge
   - **Current**: Perubahan dari branch saat ini  
   - **Result**: Hasil akhir setelah resolve conflict

    ![image](/img/guide-8.png)


5. Untuk setiap conflict, pilih salah satu opsi:
   - **Accept Incoming**: Gunakan versi dari branch yang di-merge
   - **Accept Current**: Gunakan versi dari branch saat ini
   - **Accept Combination**: Gabungkan kedua versi (jika memungkinkan)

6. Setelah semua conflict resolved, klik **"Complete Merge"**
7. Save file yang sudah di-resolve
8. Commit perubahan:

```bash
git add .
git commit -m "Resolve merge conflict"
```
## Git Feature Branch Workflow
Git Feature Branch Workflow adalah metodologi pengembangan dimana setiap fitur atau task dikerjakan di branch terpisah dari branch utama. Setelah selesai, branch tersebut di-merge kembali ke main melalui pull request. Workflow ini memungkinkan beberapa developer bekerja secara paralel tanpa mengganggu satu sama lain.

Dalam workflow ini, terdapat beberapa jenis branch:
* Main/Master Branch: Branch utama yang selalu dalam kondisi stabil dan siap deploy
* Feature Branch: Branch sementara untuk mengembangkan satu fitur atau modul spesifik
* Hotfix Branch: Branch untuk perbaikan bug urgent di production (opsional)

## Implementasi Git Feature Branch Workflow

### Clone Repository

1. Clone repository organization ke local:
```bash
git clone https://github.com/nama-organization/nama-repository.git
cd nama-repository
```

2. Pastikan kalian berada di branch main dan update ke versi terbaru:
```bash
git checkout main
git pull origin main
```

### Membuat Feature Branch

3. Buat branch baru untuk fitur yang akan dikerjakan:
```bash
git checkout -b feat/nama-fitur
```

Contoh nama branch yang baik:
- `feat/user-authentication`
- `feat/product-catalog`

### Development di Feature Branch

4. Lakukan development seperti biasa di branch tersebut
5. Commit perubahan secara berkala dengan pesan yang jelas:
```bash
git add .
git commit -m "Add user registration form"
git commit -m "Implement password validation"
```

6. Push feature branch ke remote repository:
```bash
git push origin feat/nama-fitur
```

### Sinkronisasi dengan Main Branch

Selama development, main branch mungkin sudah ada update dari anggota tim lain. Untuk menghindari conflict besar, lakukan sinkronisasi secara berkala:

7. Pastikan kalian berada di feature branch:
```bash
git branch
```

8. Jika belum di feature branch, checkout ke branch feature tersebut:
```bash
git checkout feat/nama-fitur
```

9. Update main branch dan merge ke feature branch:
```bash
git pull origin main
```

10. Jika ada conflict, resolve terlebih dahulu, lalu commit hasil merge

### Menyelesaikan Feature

9. Setelah fitur selesai dan sudah di-test, pastikan branch sudah up-to-date dengan main
10. Push final version ke remote:
```bash
git push origin feat/nama-fitur
```

11. Buat Pull Request di GitHub untuk merge ke main branch
12. Setelah PR di-approve dan di-merge, feature branch tetap dibiarkan ada untuk tracking history

Dengan mengikuti Git Feature Branch Workflow, tim kalian bisa bekerja secara paralel dengan risiko conflict yang minimal dan kode yang lebih terorganisir.



## Branch Protection Rules

Branch Protection Rules adalah fitur GitHub yang memungkinkan kalian melindungi branch penting (terutama main/master) dari perubahan yang tidak terkontrol. Dengan protection rules, kalian bisa memastikan bahwa setiap perubahan di branch utama harus melalui pull request dan review terlebih dahulu.

### Mengapa Perlu Branch Protection?

Dalam kerja tim, branch utama seperti `main` atau `master` harus selalu dalam kondisi stabil dan bisa di-deploy kapan saja. Tanpa protection, anggota tim bisa langsung push code ke branch utama yang mungkin masih buggy atau belum di-review, yang berpotensi merusak project.

### Mengatur Branch Protection Rules

1. Masuk ke repository di GitHub Organization kalian
2. Klik tab "Settings" di repository
3. Di sidebar kiri, pilih "Branches"
4. Klik "Add classic branch protection rule"
![image](/img/guide-9.png)
5. Di field "Branch name pattern", masukkan nama branch utama yang ingin dilindungi (biasanya `main` atau `master`)
6. Centang opsi-opsi berikut:
    - "Require a pull request before merging": Wajib buat PR, nggak bisa langsung push ke main/master
    - "Require approvals": PR harus di-approve dulu sebelum bisa di-merge
    - "Do not allow bypassing the above settings": Memastikan bahkan admin/owner tidak bisa bypass rules yang sudah dibuat
7. Klik "Create" untuk menyimpan rules
![image](/img/guide-10.png)
![image](/img/guide-11.png)



## GitHub Issue Tracker
Issue tracker (atau bug / issue tracking system) adalah alat terpusat yang digunakan tim untuk mencatat, mengorganisir, melacak, dan menyelesaikan pekerjaan berupa bug, tugas, permintaan fitur, atau masalah operasional sepanjang siklus hidup proyek. 

Tujuannya adalah 
1. Memastikan setiap masalah terdokumentasi dengan baik (judul, deskripsi, langkah reproduksi, bukti), 
2. Pengelolaan backlog
3. Memantau progress dan elakukan kolaborasi (komentar, attachment, link ke commit/PR).

Step-by Step penggunaan
1. Buka/repo/proyek di platform issue tracker (mis. Jira, GitHub Issues, GitLab Issues) dan pilih New Issue.
2. Tulis judul singkat dan jelas yang langsung menggambarkan masalah.
3. Tulis deskripsi lengkap: ringkasan, langkah reproduksi, hasil yang diharapkan, hasil aktual. Lampirkan bukti pendukung (screenshot, log, video, sample file).
4. Tandai tipe isu (bug/feature/task/documentation) dan beri label yang konsisten.
5. Assign isu ke pemilik/penanggung jawab yang sesuai. Tambahkan assignees, watchers atau tim yang perlu diberi notifikasi.
7. Hubungkan issue dengan branch/commit/PR ketika mulai dikerjakan.
8. Kemudian klik create

**Contoh Penggunaan**

![Screenshot 2025-09-20 at 13.46.52](/img/guide-12.png)
![Screenshot 2025-09-20 at 13.47.41](/img/guide-13.png)

Referensi : [Github Docs Issue Tracker](https://docs.github.com/en/issues/tracking-your-work-with-issues)


## Integrasi CI/CD untuk push PWS di GitHub
Sebelumnya, apabila kalian ingin melakukan push ke GitHub dan deployment ke PWS, kalian perlu melakukan push sebanyak dua kali, yaitu ke GitHub (git push origin main) dan ke PWS (git push pws main). Hal ini tentu saja tidak efisien dan rawan error, terutama dalam kerja tim dimana setiap anggota harus melakukan deployment manual.

### Apa itu CI/CD?
Continuous Integration (CI) adalah praktik dimana developer secara rutin menggabungkan code mereka ke repository bersama, dan sistem otomatis akan menjalankan tests untuk memastikan code tidak merusak aplikasi.
Continuous Deployment (CD) adalah praktik dimana setiap perubahan yang sudah melalui CI akan otomatis di-deploy ke production server tanpa intervensi manual.


### Mengapa Perlu CI/CD untuk Deployment Otomatis?
Dalam kerja tim, setiap kali ada perubahan di branch utama (main), seluruh tim harus melakukan deployment manual ke PWS. Hal ini menimbulkan beberapa masalah:

* Inkonsistensi: Tidak semua anggota tim melakukan deployment, sehingga versi di PWS bisa tertinggal
* Duplikasi effort: Setiap anggota tim harus push ke PWS secara terpisah dari local masing-masing
* Human error: Lupa melakukan deployment atau salah branch yang di-deploy
* Koordinasi sulit: Sulit menentukan siapa yang bertanggung jawab untuk deployment

Dengan CI/CD, setiap kali ada perubahan di branch main (melalui merge pull request), sistem akan otomatis melakukan deployment ke PWS. Ini memastikan versi di PWS selalu up-to-date dengan branch utama dan mengurangi beban kerja tim.

### Setup GitHub Actions untuk PWS Deployment

1. Di repository local kalian, buat folder `.github/workflows/` jika belum ada
2. Buat file baru dengan nama `deploy.yml` di dalam folder tersebut
3. Isi file dengan konfigurasi berikut (sesuaikan dengan nama branch utama repository kalian):

```yaml
name: Push to PWS

on:
  push:
    branches: [ main ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
      with:
        fetch-depth: 0
        
    - name: Set up Git
      run: |
        git config --global user.name 'github-actions[bot]'
        git config --global user.email 'github-actions[bot]@users.noreply.github.com'
        
    - name: Push to PWS
      env:
        PWS_URL: ${{ secrets.PWS_URL }}
      run: |
          # Get current branch name
          current_branch=$(git branch --show-current)
          echo "Current branch: $current_branch"
          
          # Push current branch to PWS master branch
          push_output=$(git push $PWS_URL $current_branch:master 2>&1)
          if [[ $? -ne 0 ]]; then
            echo "Push failed with output: $push_output"
            echo "Error: Unable to push changes. Please check the error message above and resolve any conflicts manually."
            exit 1
          fi
          echo "Push successful with output: $push_output"
```

**Note**: Sesuaikan nama branch di `branches: [ main ]` dengan nama branch utama repository kalian (bisa `main` atau `master`).

![image](/img/guide-14.png)


**PENTING: Jangan push file ini terlebih dahulu ke GitHub. Setup secrets dulu pada tahap berikutnya.**

4. Pada repository kalian di GitHub, buka halaman **Settings** > **Secrets and variables** > **Actions**

![image](/img/guide-15.png)


5. Klik **"New repository secret"** untuk menambahkan variabel "rahasia" baru di repository kalian
6. Isi **Name** dengan `PWS_URL`. Kemudian, isi **Secret** dengan data menggunakan format berikut:

    `https://<username sso>:<password proyek PWS>@pbp.cs.ui.ac.id/<username sso>/<nama proyekmu>`

Sebagai contoh, apabila username SSO kalian adalah `hanni.pham`, password proyek kalian adalah `abcd1234`, dan nama proyek kalian adalah `supernatural`, maka kalian perlu mengisi **Secret** seperti ini:

```
https://hanni.pham:abcd1234@pbp.cs.ui.ac.id/hanni.pham/supernatural
```

![image](/img/guide-16.png)


7. Push workflow file ke GitHub:
```bash
git add .
git commit -m "Add CI/CD workflow for PWS deployment"
git push origin main
```

8. Setiap kali ada push ke branch main, GitHub Actions akan otomatis menjalankan deployment ke PWS. Cek tab **"Actions"** di repository untuk melihat status deployment


## Database untuk Tugas Kelompok

Untuk keperluan database yang digunakan dalam tugas kelompok, kamu dapat menggunakan schema `tugas_kelompok` dari salah satu database anggota kelompok kamu yang sebelumnya sudah diberikan oleh tim ITF.

:::warning
Pastikan kalian telah menggunakan schema yang telah ditentukan diatas untuk pengerjaan tugas kelompok ini.
:::

# Rekomendasi Project Management Tools

:::warning
Project management tools ini bersifat **TIDAK WAJIB**, namun hanya mempermudah kalian dalam tugas proyek nantinya. Selain itu kalian juga diperkenankan menggunakan tools lainnya.  
:::

## 1. Microsoft Planner
![Gambar MS Planner](https://www.timeneye.com/hs-fs/hubfs/microsoft%20planner%20ui%202025.png?width=1431&height=670&name=microsoft%20planner%20ui%202025.png)
### Pengenalan
Microsoft Planner adalah aplikasi manajemen tugas yang terintegrasi dengan Microsoft 365. Cocok untuk mengatur to-do list, membagi tugas, dan memantau progres lewat tampilan board (Kanban), kalender, dan grafik.

### Tujuan
Membantu tim merencanakan dan mengelola proyek sederhana dengan integrasi penuh di Microsoft Teams, Outlook, dan To Do.

### Tutorial YouTube
- [How to use the NEW Microsoft Planner in Teams](https://www.youtube.com/watch?v=r3dpzqttDuA)

### Kelebihan
- Terintegrasi erat dengan ekosistem Microsoft 365.  
- Tampilan sederhana (board, kalender, grafik).  
- Cocok untuk kolaborasi tim skala kecil-menengah.  

### Kekurangan
- Fitur lengkap (seperti roadmap & AI Copilot) berbayar.  
- Kurang fleksibel untuk metode Agile/Scrum yang kompleks.  

---

## 2. Linear.app
![Gambar Dashboard Linear App](https://www.figma.com/community/resource/956bf56e-ed4c-4fdd-af69-a13a9ccded49/thumbnail)
### Pengenalan
Linear adalah tool modern untuk tim pengembang software. Fokus pada kecepatan, desain minimalis, dan alur kerja agile seperti sprint, issue tracking, dan roadmap.

### Tujuan
Membantu tim developer mengelola task teknis, sprint, dan bug tracking dengan cepat dan terfokus.

### Tutorial YouTube
[How to Use Linear App](https://www.youtube.com/watch?v=UoGl5suIfgM)

### Kelebihan
- Cepat, responsif, dan UI minimalis.  
- Integrasi GitHub, Slack, dan automation.  
- Cocok untuk workflow developer modern.  

### Kekurangan
- Fitur laporan dan dashboard terbatas.  
- Kurang cocok untuk tim non-teknis.  

---

## 3. Notion
![Gambar Notion](https://res.cloudinary.com/zapier-media/image/upload/f_auto/q_auto/v1707419888/Blog/what-is-notion/what-is-notion-image11_mxqioe.png)
### Pengenalan
Notion adalah all-in-one workspace yang menggabungkan catatan, database, wiki, dan manajemen proyek dalam satu aplikasi.

### Tujuan
Membantu tim mendokumentasikan ide, membuat to-do list, hingga mengelola project board secara fleksibel dalam satu platform.

### Tutorial YouTube
- [Notion for Project Management](https://youtube.com/playlist?list=PLzaYMdbJMZW3DeRQ_uxdl4DFHFumE_D9Q&si=jXMRs2B1gqYjBst8)

### Kelebihan
- Sangat fleksibel (catatan, tabel, kanban, database).  
- Bisa dipakai untuk personal maupun tim.  
- Banyak template gratis siap pakai.  

### Kekurangan
- Bisa terasa rumit untuk pemula.  
- Tidak secepat Linear untuk issue-tracking teknis.  

---

## 4. ClickUp
![Gambar Click Up](https://blog.rimbahouse.com/wp-content/uploads/2024/04/demo-clickup.png)
### Pengenalan
ClickUp adalah platform manajemen kerja yang serbaguna, bisa digunakan untuk task management, goal setting, docs, chat, dan timeline.

### Tujuan
Membantu tim mengelola proyek dari yang sederhana sampai kompleks, dengan banyak fitur bawaan tanpa perlu banyak integrasi tambahan.

### Tutorial YouTube
- [ClickUp Project Management Tutorial for Beginners](https://www.youtube.com/watch?v=JmcVjP8m02k&pp=ygURY2xpY2sgdXAgdHV0b3JpYWzSBwkJrQkBhyohjO8%3D)

### Kelebihan
- Fitur sangat lengkap (task, docs, chat, goal, whiteboard).  
- Cocok untuk tim lintas divisi (bukan hanya developer).  
- Tampilan bisa disesuaikan dengan kebutuhan tim.  

### Kekurangan
- Bisa terasa “overwhelming” karena terlalu banyak fitur.  
- Performa bisa melambat jika workspace terlalu besar.  

---

## Kesimpulan
- **Microsoft Planner** → cocok untuk yang sudah memakai Microsoft 365.  
- **Linear.app** → ideal untuk tim developer yang butuh kecepatan & workflow agile.  
- **Notion** → fleksibel untuk dokumentasi + manajemen proyek ringan.  
- **ClickUp** → lengkap untuk tim lintas divisi dengan kebutuhan kompleks.  

## Kontributor

- Marla Marlena
- Isa Citra Buana
- Regina Meilani Aruan