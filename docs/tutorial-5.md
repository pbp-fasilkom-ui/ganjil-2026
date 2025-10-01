---
sidebar_label: Tutorial 5
sidebar_position: 7
Path: docs/tutorial-5
---

# Tutorial 5: JavaScript dan AJAX

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2025/2026

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:

- Memahami fungsi JavaScript pada *front-end development*
- Menggunakan JavaScript secara dasar
- Menerapkan AJAX dan Fetch API dengan aman

## JavaScript

### Pengenalan JavaScript

JavaScript merupakan bahasa pemrograman multi-paradigma tingkat tinggi lintas platform (*cross-platform high-level multi-paradigm programming language*). Sifat multi-paradigma membuat JavaScript mendukung konsep pemrograman berbasis obyek, pemrograman imperatif, dan pemrograman fungsional. JavaScript sendiri merupakan implementasi dari ECMAScript, yang merupakan inti dari bahasa JavaScript. Beberapa implementasi lain dari ECMAScript yang mirip dengan JavaScript antara lain JScript (Microsoft) dan ActionScript (Adobe).

JavaScript, bersama dengan HTML dan CSS, menjadi tiga teknologi utama yang dipakai pada pengembangan web. Pada dasarnya, keuntungan menggunakan JavaScript dalam pengembangan web adalah manipulasi halaman web dapat dilakukan secara dinamis dan interaksi antara halaman web dengan pengguna dapat meningkat. Oleh karena itu, hampir semua situs web modern saat ini menggunakan JavaScript dalam halaman web mereka untuk memberikan pengalaman terbaik kepada pengguna. Beberapa contoh yang dapat kita lakukan dengan menggunakan JavaScript antara lain menampilkan informasi berdasarkan waktu, mengenali jenis peramban pengguna, melakukan validasi form atau data, membuat *cookies* (bukan kue, namun [HTTP *cookies*](https://en.wikipedia.org/wiki/HTTP_cookie)), mengganti *styling* dan CSS suatu *element* secara dinamis, dan lain sebagainya.

Pada pengembangan web umumnya kode JavaScript digunakan pada *client-side* suatu web (*client-side JavaScript*), namun beberapa jenis kode JavaScript saat ini digunakan pada *server-side* suatu web (*server-side JavaScript*) seperti **node.js**. Istilah *client-side* menunjukkan bahwa kode JavaScript akan dieksekusi atau dijalankan pada peramban pengguna, bukan pada server situs web. Hal ini berarti kompleksitas kode JavaScript tidak akan memengaruhi performa server situs web tersebut namun memengaruhi performa peramban web dan komputer; semakin kompleks kode JavaScript, maka semakin banyak memori komputer yang dikonsumsi oleh peramban web.

Pada mata kuliah PBP, kita hanya akan fokus kepada kode *client-side JavaScript*.

### Tahapan Eksekusi JavaScript oleh Peramban

Perhatikan diagram berikut untuk mengamati tahapan eksekusi JavaScript oleh peramban web.



![javascript-works](https://i.imgur.com/PvPYhB5.png)

Setelah peramban mengunduh halaman HTML web maka tepat dimana tag `<script></script>` berada, peramban akan melihat *tag script* tersebut, apakah tag tersebut berisi kode *embedded* JavaScript atau merujuk berkas eksternal JavaScript. Jika merujuk pada berkas eksternal JavaScript, maka peramban akan mengunduh berkas tersebut terlebih dahulu.

### Penulisan JavaScript

Penulisan JavaScript dapat dilakukan dengan ***embedded JavaScript*** atau ***external JavaScript***. Kode JavaScript dapat didefinisikan atau dituliskan secara *embedded* pada berkas HTML maupun secara terpisah pada berkas tersendiri. Jika ditulis dalam berkas terpisah dari HTML, ekstensi berkas yang digunakan untuk berkas JavaScript adalah `.js`. Berikut contoh beberapa pendefinisian dari JavaScript.

JavaScript dapat diletakkan pada *head* atau *body* dari halaman HTML. Selain itu, kode JavaScript **harus** dimasukkan di antara tag `<script>` dan `</script>`. Kamu dapat meletakkan lebih dari satu *tag script* yang berisi JavaScript pada suatu berkas HTML.

#### Embedded JavaScript pada HTML

```html title="index.html"
<script type="text/JavaScript">
    alert("Hello World!");
</script>
```

#### External JavaScript pada HTML

```html title="index.html"
<script type="text/JavaScript" src="js/script.js"></script>
```

```javascript title="js/script.js"
alert("Hello World!");
```

Pada berkas eksternal JavaScript, tag `<script>` tidak perlu lagi ditambahkan.

Memisahkan JavaScript pada berkas tersendiri dapat memberikan beberapa keuntungan seperti kode dapat digunakan di berkas HTML lain, kode JavaScript dan HTML tidak bercampur sehingga lebih fokus saat mengembangkan aplikasi, serta mempercepat proses pemuatan halaman. berkas `.js` biasanya akan di-*cache* oleh peramban sehingga jika kita membuka halaman yang sama dan tidak ada perubahan pada berkas `.js`, maka peramban tidak akan meminta berkas `.js` tersebut kepada server lagi, namun akan menggunakan berkas dari *cache* yang sudah disimpan sebelumnya.

### Eksekusi JavaScript

Setelah JavaScript sudah dimuat dengan sempurna, maka peramban akan langsung mulai mengeksekusi kode JavaScript. Jika kode tersebut BUKAN merupakan *event-triggered*, maka kode langsung dieksekusi. Jika kode tersebut merupakan *event-triggered*, maka kode tersebut hanya akan dieksekusi jika *event* yang didefinisikan terpicu (*triggered*).

```javascript
// langsung dieksekusi
alert("Hello World");

// langsung dieksekusi
var obj = document.getElementById("object");
// langsung dieksekusi, menambahkan event handler onclick untuk element object
obj.onclick = function () {
    // hanya dieksekusi jika element 'object' di klik
    alert("You just clicked the object!");
};
```

### Sintaks JavaScript

#### Variabel

Mendefinisikan variabel pada JavaScript cukup mudah. Contohnya seperti berikut.

```javascript
var example = 0; // var example merupakan sebuah bilangan
var example = "example"; // var example merupakan sebuah string
var example = true; // var example merupakan sebuah boolean
```

JavaScript dapat menampung banyak tipe data; mulai dari string, integer, hingga *object* sekalipun. Berbeda dengan Java yang penandaan tipe datanya dibedakan dengan *head variable* (contohnya kamu ingin membuat variabel dengan tipe data `int`, maka sintaknya seperti `int x = 9`), JavaScript mempunyai ciri khas *loosely typed* atau *dynamic language*, yakni kamu tidak perlu menuliskan tipe data pada *head variable* dan JavaScript nantinya akan secara otomatis membaca tipe data kamu berdasarkan standar yang ada (seperti pada contoh di atas).

Ada beberapa aturan dalam pemilihan *indentifiers* atau nama variabel dalam JavaScript. Karakter pertama **harus** merupakan alfabet, *underscore* (`_`), atau karakter dolar (`$`). Selain itu, JavaScript *identifiers* bersifat *case sensitive*.

#### Penggabungan String

Dalam JavaScript, kita juga dapat menyambungkan `string` dengan `string` lainnya seperti pada Java.

```javascript
var str1 = "PBP" + " " + "Fun";
var str2 = "PBP";
var str3 = "Fun";
var str4 = str2 + " " + str3;
var str5 = "Fun";
var str6 = `PBP ${str5}`;  // Memiliki hasil yang sama seperti "PBP" + " " + str5
```

### Ruang Lingkup JavaScript

#### Variabel Lokal

Variabel yang didefinisikan **di dalam** fungsi bersifat lokal, sehingga hanya dapat diakses oleh kode didalam fungsi tersebut.

```javascript
// kode diluar fungsi thisFunction() tidak dapat mengakses variabel courseName
function thisFunction() {
    var courseName = "PBP";
    // kode di dalam fungsi ini dapat mengakses variabel courseName
}
```

#### Variabel Global

Variabel yang didefinisikan **di luar** fungsi bersifat global dan dapat diakses oleh kode lain dalam berkas JavaScript tersebut.

```javascript
var courseName = "PBP";
function thisFunction() {
    // kode di dalam fungsi ini dapat mengakses variabel courseName
}
```

#### Variabel Auto Global

Value yang di-*assign* pada variabel yang belum dideklarasikan otomatis menjadi variabel global, walaupun variabel tersebut berada di dalam suatu fungsi.

```javascript
thisFunction(); // fungsi thisFunction() perlu dipanggil terlebih dahulu
console.log(courseName); // cetak "PBP" pada JavaScript console
function thisFunction() {
    courseName = "PBP";
}
```

#### Mengakses Variabel Global dari HTML

Kamu dapat mengakses variabel yang berada dalam berkas JavaScript pada berkas HTML yang memuat berkas JavaScript tersebut.

```html
...
<input type="text" onclick="this.value=courseName" />
...
```

```javascript
...
var courseName = "PBP";
...
```

### Function dan Event

*Function* adalah sekumpulan grup dari kode-kode yang bisa dipanggil di mana pun pada bagian kode program (mirip dengan `method` pada Java). Hal ini mengurangi redundansi kode yang ada (mengurangi kode-kode yang dapat sama berulang-ulang). Selain itu, *function* pada JavaScript sangat berguna untuk memudahkan elemen pemanggilan secara dinamis. *Function* dapat dipanggil sesama *function* dan dapat juga dipanggil karena *event* (akan dijelaskan di bawah). Sebagai contoh, berikut kode yang terdapat pada `index.html`.

```html title="index.html"
...
<input type="button" value="magicButton" id="magicButton" onclick="hooray();" />
...
```

Kemudian berikut adalah kode pada `javascript.js`.

```javascript title="javascript.js"
...
function hooray() {
    alert("Yahoo!");
}
...
```

Apabila `magicButton` ditekan, maka fungsi `onclick` akan menjalankan *function* `hooray()` pada `javascript.js`, lalu muncul *alert* sesuai yang sudah di-*assign* sebelumnya.

Kode `onclick` sebenarnya adalah salah satu contoh kemampuan JavaScript yang disebut *event*. *Event* adalah kemampuan JavaScript untuk membuat sebuah situs web dinamis. Maksud dari `onclick` adalah penanda apa yang akan dilakukan JavaScript jika elemen tersebut ditekan. Selain itu, *event* biasanya diberikan sebuah fungsi yang berguna sebagai perintah-perintah untuk JavaScript. Selain itu, banyak contoh-contoh *event* lainnya seperti `onchange`, `onmouseover`, `onmouseout`, dan lain sebagainya yang bisa kamu baca pada tautan [ini](https://www.w3schools.com/js/js_events.asp).

### JavaScript DOM

#### HTML DOM

HTML DOM (*Document Object Model*) adalah standar bagaimana mengubah, mengambil, dan menghapus HTML *elements*. HTML DOM dapat diakses melalui JavaScript atau dengan bahasa pemrograman lainnya. Detail lengkapnya dapat dilihat [di sini](https://www.w3schools.com/js/js_htmldom.asp).

Berikut adalah contoh implementasinya.

```html
...     
<div>
    <p onclick="myFunction()" id="demo">Example of HTML DOM</p>
</div>
...
```

```javascript
...
function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
...
```

#### CSS DOM

Sama dengan HTML DOM, CSS DOM dapat mengubah CSS secara dinamis melalui JavaScript. Detail lengkapnya dapat dilihat [di sini](https://www.w3schools.com/js/js_htmldom_css.asp).

Berikut adalah contoh implementasinya.

```html title="index.html"
...
<p id="blueText" onclick="changeColor()">Click me v2</p>
...
```

```javascript title="javascript.js"
...
function changeColor(){
    document.getElementById("blueText").style.color="blue";
}
...
```

## AJAX

### Pengenalan AJAX

AJAX merupakan singkatan dari ***A**synchronous **J**avaScript **A**nd **X**ML*.

AJAX bukanlah merupakan sebuah bahasa pemrograman, melainkan sebuah teknologi yang memadukan peramban web (untuk meminta data dari *web server*) dengan JavaScript dan HTML DOM (untuk menampilkan data). AJAX dapat menggunakan XML untuk mengirim data, tetapi AJAX juga dapat menggunakan teks ataupun JSON untuk mengirim data. AJAX memungkinkan halaman web untuk memperbarui data secara asinkronus dengan mengirimkan data ke peladen di balik layar. Hal tersebut berarti bahwa kita dapat memperbarui sebagian elemen data pada halaman tanpa harus me-*reload* halaman secara keseluruhan.

Berikut ini adalah diagram cara kerja AJAX.

![ajax-works](https://www.w3schools.com/js/pic_ajax.gif)

1. Sebuah *event* terjadi pada halaman web (contohnya tombol *submit data* ditekan)
2. Sebuah `XMLHttpRequest` *object* dibuat oleh JavaScript
3. `XMLHttpRequest` *object* mengirimkan *request* ke server
4. Server memproses *request* tersebut
5. Server mengembalikan *response* kembali kepada halaman web
6. *Response* dibaca oleh JavaScript
7. Aksi berikutnya akan dipicu oleh JavaScript sesuai dengan langkah yang dibuat (contohnya memperbarui data di halaman tersebut)

`XMLHttpRequest` sebelumnya merupakan cara standar untuk melakukan permintaan AJAX di JavaScript. Namun, XMLHttpRequest memiliki beberapa kelemahan, seperti penanganan yang kurang rapi ketika bekerja dengan _promises_ dan _callback_ serta keterbatasan dalam mendukung alur kode yang lebih modern.

Oleh karena itu, `fetch()` diperkenalkan sebagai API baru untuk melakukan permintaan HTTP dengan sintaks yang lebih sederhana dan mendukung _promises_ secara langsung. Hal ini memungkinkan pengembang menulis kode yang lebih mudah dibaca, dikelola, dan lebih cocok dengan paradigma asinkron modern seperti _async_/_await_. `fetch()` juga lebih fleksibel dalam menangani format data yang berbeda serta mendukung *API* yang lebih baik untuk menangani kesalahan atau respons HTTP. Penjelasan lebih lanjut terhadap perbedaan `fetch` dan `XMLHttpRequest` dapat dilihat di tautan [ini](https://www.tutorialspoint.com/ajax/fetch_api_vs_xmlhttprequest.htm).

Pada PBP kali ini, kamu akan melakukan AJAX pada peramban web dengan menggunakan fungsi `fetch()` yang diberikan oleh JavaScript. Sebagai gambaran besar, penggunaan `fetch()` untuk melakukan pemanggilan AJAX dapat dilihat di tautan [ini](https://www.w3schools.com/jsref/api_fetch.asp).

### Fetch API

Fetch API merupakan API baru yang diperkenalkan pada ECMAScript 2020 sebagai standar baru untuk membuat *request* dengan `Promise`. Fetch API menyediakan antarmuka untuk mengambil sumber daya (termasuk di seluruh jaringan). API ini merupakan pengganti yang lebih kuat dan fleksibel untuk [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). Fetch API secara umum digunakan untuk mengimplementasikan AJAX secara lebih mudah daripada AJAX dengan `XMLHttpRequest`. Fetch API juga mendukung lebih banyak metode HTTP dan header HTTP daripada AJAX biasa.

Fungsi `fetch()` memiliki beberapa parameter, yaitu:

- `url`: URL dari sumber daya yang akan diminta
- `method`: Metode HTTP yang akan digunakan
- `headers`: Header HTTP yang akan dikirim
- `body`: Isi dari permintaan HTTP

Fungsi `fetch()` mengembalikan objek `Response`. Objek `Response` memiliki beberapa properti, yaitu:

- `status`: Kode `status` HTTP dari respons
- `headers`: Header HTTP dari respons
- `body`: Isi dari respons

Kamu dapat mempelajari Fetch API lebih lanjut pada tautan [ini](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Fungsi Async dan Await

Sebelum mempelajari penggunaan fungsi `fetch()`, ada baiknya kita mempelajari fungsi `async` dan `await` yang memungkinkan pengimplementasian AJAX tanpa perlu menggunakan *library* eksternal, seperti [jQuery](https://jquery.com/).

Fungsi `async` dan `await` merupakan fungsi baru yang diperkenalkan di ECMAScript 2017. Fungsi `async` digunakan untuk menandai fungsi sebagai fungsi yang dapat mengembalikan nilai secara asinkronus, sedangkan fungsi `await` digunakan untuk menunggu hasil dari fungsi `async`.

Kamu dapat mempelajari fungsi `async` dan `await` lebih lanjut pada tautan [ini](https://www.w3schools.com/js/js_async.asp).

### Penggunaan Fetch API

Fetch API menyediakan antarmuka JavaScript untuk mengakses dan memanipulasi bagian-bagian protokol, seperti *requests* dan *responses*. API ini juga menyediakan metode `fetch()` global yang menyediakan cara yang mudah dan logis untuk mengambil sumber daya secara asinkronus pada seluruh jaringan.

Tidak seperti `XMLHttpRequest` yang merupakan API berbasis *callback*, Fetch API berbasis `Promise` dan menyediakan alternatif yang lebih baik dan dapat dengan mudah digunakan pada *service worker*. Fetch API juga mengintegrasikan konsep HTTP tingkat lanjut seperti CORS dan ekstensi lain ke HTTP.

Berikut adalah contoh penggunaan Fetch API dengan fungsi `async` dan `await` untuk melakukan AJAX.

```javascript
async function fetchData() {
    const response = await fetch("https://jokes-bapack2-api.yuana.id/v1/text/random");
    const data = await response.json();
    return data;
}

const joke = await fetchData();
console.log(joke);
```

Kode di atas akan melakukan AJAX untuk meminta data dari API lelucon bapak-bapak masa kini secara asinkronus. Hasil dari AJAX akan disimpan dalam variabel `joke`.

Kamu dapat mempelajari penggunaan Fetch API lebih lanjut pada tautan [ini](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

## Pre-Tutorial Notes
Sebelum kamu memulai, serta untuk membantumu mengikuti tutorial 5 dengan baik, kami mengharapkan beberapa hasil berikut dari tutorial 4:
- Struktur direktori `football-news` secara lokal adalah sebagai berikut.
  
  ![image](/img/t5-1.png)

- Struktur repository football-news pada GitHub adalah sebagai berikut.
  
  ![image](/img/t5-2.png)


## Tutorial: Implementasi Notifikasi Toast

Sebagai langkah awal, mari kita lakukan implementasi komponen notifikasi *toast*.

*Toast* adalah elemen antarmuka pengguna (UI) yang dirancang untuk menampilkan pesan singkat atau notifikasi secara non-intrusif. Dalam tutorial ini, kita akan mengembangkan komponen *toast* yang dapat digunakan kembali (*reusable*) dan berfungsi untuk memberikan umpan balik visual, misalnya, saat sebuah berita berhasil dibuat.

### Langkah 1: Konstruksi Komponen Utama Toast

Buka folder **`templates`** pada direktori root proyek kamu. Selanjutnya, buatlah sebuah file baru di dalam folder tersebut dengan nama **`toast.html`**, lalu sisipkan kode berikut:

```html
{% load static %}
<div 
    class="fixed bottom-8 right-8 p-4 px-8 rounded-xl shadow-xl z-50 opacity-0 transition-all duration-300 translate-y-64 flex items-center gap-4"
    id="toast-component"
>
    <span id="toast-icon" class="text-2xl"></span>
    <div>
        <h3 class="font-bold" id="toast-title">
            This is a Sample Title
        </h3>
        <p class="text-gray-700 text-sm line-clamp-3" id="toast-message">
            This is a Sample Message
        </p>
    </div>
</div>
<script src="{% static 'js/toast.js' %}"></script>
```

Kode HTML di atas berfungsi untuk mendefinisikan struktur visual dan penempatan awal komponen *toast*. Properti CSS seperti `fixed`, `bottom-8`, dan `right-8` menempatkan notifikasi secara statis di pojok kanan bawah layar. Kelas `opacity-0` dan `translate-y-64` digunakan untuk menyembunyikan notifikasi pada kondisi awal, menciptakan efek animasi saat ia muncul dan menghilang. Tag `<script>` di akhir kode akan memuat logika JavaScript yang akan mengendalikan perilaku notifikasi.

-----

### Langkah 2: Implementasi Logika JavaScript untuk Toast

Untuk mengimplementasikan fungsionalitas utama dari *toast*, buatlah sebuah file bernama **`toast.js`** di dalam folder **`static/js`**. Kemudian, tambahkan kode berikut ke dalam file tersebut:

```javascript
function showToast(title, message, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toastComponent) return;

    // Remove all type classes first
    toastComponent.classList.remove(
        'bg-red-50', 'border-red-500', 'text-red-600',
        'bg-green-50', 'border-green-500', 'text-green-600',
        'bg-white', 'border-gray-300', 'text-gray-800'
    );

    // Set type styles and icon
    if (type === 'success') {
        toastComponent.classList.add('bg-green-50', 'border-green-500', 'text-green-600');
        toastComponent.style.border = '1px solid #22c55e';
    } else if (type === 'error') {
        toastComponent.classList.add('bg-red-50', 'border-red-500', 'text-red-600');
        toastComponent.style.border = '1px solid #ef4444';
    } else {
        toastComponent.classList.add('bg-white', 'border-gray-300', 'text-gray-800');
        toastComponent.style.border = '1px solid #d1d5db';
    }

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toastComponent.classList.remove('opacity-0', 'translate-y-64');
    toastComponent.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toastComponent.classList.remove('opacity-100', 'translate-y-0');
        toastComponent.classList.add('opacity-0', 'translate-y-64');
    }, duration);
}
```

**Penjelasan Fungsi `showToast`:**

Fungsi `showToast` adalah inti dari komponen ini. Fungsi ini menerima empat parameter:

  * `title`: Judul notifikasi yang akan ditampilkan.
  * `message`: Pesan utama yang akan ditampilkan.
  * `type`: Tipe notifikasi (`'success'`, `'error'`, atau `'normal'`). Parameter ini menentukan skema warna dan ikon notifikasi.
  * `duration`: Durasi notifikasi akan muncul di layar (dalam milidetik).

Logika di dalam fungsi ini secara dinamis mengubah kelas CSS dan konten elemen HTML berdasarkan parameter yang diberikan. Fungsi ini mengelola:

  * **Pemilihan Elemen**: Mengakses elemen-elemen HTML `toast` menggunakan ID-nya.
  * **Penghapusan Kelas**: Menghapus kelas-kelas tipe sebelumnya untuk memastikan notifikasi memiliki gaya yang benar.
  * **Aplikasi Gaya**: Menambahkan kelas CSS yang sesuai dan mengubah warna *border* serta ikon berdasarkan parameter `type`.
  * **Pembaruan Konten**: Memperbarui judul dan pesan notifikasi.
  * **Animasi Tampil**: Menghapus kelas yang menyembunyikan *toast* (`opacity-0`, `translate-y-64`) dan menambah kelas untuk menampilkannya (`opacity-100`, `translate-y-0`), menciptakan efek muncul dari bawah.
  * **Animasi Hilang**: Menggunakan `setTimeout` untuk secara otomatis menyembunyikan *toast* setelah durasi yang ditentukan, mengembalikan properti CSS ke kondisi awal.

-----

### Langkah 3: Integrasi Komponen Toast ke dalam Base Template

Setelah komponen *toast* selesai dibuat, langkah selanjutnya adalah memuatnya ke dalam file **`base.html`** agar fungsi `showToast` dapat diakses dari semua halaman yang mewarisi (*extend*) *base template* tersebut. Pastikan file `base.html` Anda menyertakan baris kode berikut di dalam elemen `<body>`:

```html
...
<body>
    {% block content %}

    {% endblock %}

    {% include 'toast.html' %}
</body>
...
```

-----

### Langkah 4: Pengujian Fungsionalitas Toast

Untuk memverifikasi apakah notifikasi *toast* berfungsi dengan benar, tambahkan kode HTML berikut ke halaman mana pun yang mewarisi `base.html`:

```html
<button
  onclick="showToast('Sample Title', 'This is a sample message for the toast notification.')"
>
  Click to Show Toast
</button>
```

Saat tombol tersebut diklik, sebuah notifikasi *toast* akan muncul di layar. Tampilan yang diharapkan akan terlihat seperti ini:
![image](/img/t5-3.png)

## Tutorial: Menampilkan Data Football News di halaman utama dengan AJAX
Kita akan menampilkan data Football News dengan cara berbeda dari tutorial - tutorial sebelumnya. Kali ini kita membutuhkan bantuan Javascript di dalam berkas HTML kita. Tapi sebelum itu, mari mengubah views kita dahulu.

### Langkah 1: Edit Function `show_json` 
Pertama, tambahkan import `JsonResponse` di bagian atas file `main/views.py`:
```python title="main/views.py"
from django.http import HttpResponseRedirect, JsonResponse
```

Kemudian, edit function `show_json`:
```python title="main/views.py"
def show_json(request):
    news_list = News.objects.all()
    data = [
        {
            'id': str(news.id),
            'title': news.title,
            'content': news.content,
            'category': news.category,
            'thumbnail': news.thumbnail,
            'news_views': news.news_views,
            'created_at': news.created_at.isoformat() if news.created_at else None,
            'is_featured': news.is_featured,
            'user_id': news.user_id,
        }
        for news in news_list
    ]

    return JsonResponse(data, safe=False)
```

**Penjelasan Kode:**
Disini kita menggunakan list comprehension untuk mengubah semua objek News menjadi dictionary. `JsonResponse(data, safe=False)` mengirimkan data dalam format JSON ke client. Parameter `safe=False` diperlukan karena data yang dikirim berupa list, bukan dictionary.

### Langkah 2: Update Template main.html untuk AJAX
Update isi file `main/templates/main.html` dengan kode berikut:

```html title="main/templates/main.html"
{% extends 'base.html' %}
{% load static %}

{% block meta %}
<title>Football News</title>
{% endblock meta %}

{% block content %}
{% include 'navbar.html' %}
<div class="bg-gray-50 w-full pt-16 min-h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Latest Football News</h1>
      <p class="text-gray-600">Stay updated with the latest football stories and analysis</p>
    </div>

    <!-- Filter Section -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 bg-white rounded-lg border border-gray-200 p-4">
      <div class="flex space-x-3 mb-4 sm:mb-0">
        <a id="filter-all" class="bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-700">
          All News
        </a>
        <a id="filter-my" class="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-600 hover:text-white">
          My News
        </a>
      </div>
      {% if user.is_authenticated %}
        <div class="text-sm text-gray-500">Last login: {{ last_login }}</div>
      {% endif %}
    </div>

    <!-- Loading State -->
    <div id="loading" class="bg-white rounded-lg border border-gray-200 p-12 text-center hidden">
      <svg class="animate-spin h-8 w-8 text-green-600 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <p class="text-gray-600 mt-3">Loading news...</p>
    </div>

    <!-- Error State -->
    <div id="error" class="hidden"></div>

    <!-- News Grid -->
    <div id="grid" class="hidden"></div>

    <!-- Empty State -->
    <div id="empty" class="bg-white rounded-lg border border-gray-200 p-12 text-center hidden">
      <div class="w-32 h-32 mx-auto mb-4">
        <img src="{% static 'image/no-news.png' %}" alt="No news available" class="w-full h-full object-contain">
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">No news found</h3>
      <p class="text-gray-500 mb-6">Be the first to share football news with the community.</p>
      <a href="{% url 'main:create_news' %}" class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
        Create News
      </a>
    </div>
  </div>
</div>

{% endblock content %}
```

**Penjelasan Kode:**
Template ini telah dimodifikasi untuk mendukung fungsionalitas AJAX. Setiap container memiliki ID yang spesifik (`loading`, `error`, `grid`, `empty`) dan dimulai dengan class `hidden` sehingga tidak terlihat saat halaman pertama kali dimuat. JavaScript akan menampilkan atau menyembunyikan container yang sesuai berdasarkan kondisi seperti menampilkan loading saat mengambil data, error jika terjadi masalah, empty jika tidak ada data, atau grid untuk menampilkan daftar berita.

### Langkah 3: Menambahkan JavaScript Inline Script ke main.html
Selanjutnya kita perlu menambahkan kode JavaScript di template HTML. tambahkan tag script sebelum tag `{% endblock content %}` di `main/templates/main.html` dengan isi sebagai berikut:

```html title="main/templates/main.html"
....
<script>
// Configuration
const NEWS_API_ENDPOINT = "{% url 'main:show_json' %}";
const CURRENT_USER_ID = "{{ user.id|default_if_none:'' }}";

// DOM Elements
const loadingSpinner = document.getElementById('loading');
const errorMessage = document.getElementById('error');
const emptyStateDisplay = document.getElementById('empty');
const newsGridContainer = document.getElementById('grid');
const showAllNewsButton = document.getElementById('filter-all');
const showMyNewsButton = document.getElementById('filter-my');

// State Variables
let activeFilter = 'all';
let allNewsData = [];

// Update filter button appearance
function updateFilterButtonsAppearance() {
  if (!showAllNewsButton || !showMyNewsButton) return;
  
  if (activeFilter === 'all') {
    showAllNewsButton.className = 'bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-700';
    showMyNewsButton.className = 'bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-600 hover:text-white';
  } else {
    showMyNewsButton.className = 'bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-700';
    showAllNewsButton.className = 'bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-600 hover:text-white';
  }
}

// Show/hide page sections
function displayPageSection({ showLoading = false, showError = false, showEmpty = false, showGrid = false }) {
  loadingSpinner.classList.toggle('hidden', !showLoading);
  errorMessage.classList.toggle('hidden', !showError);
  emptyStateDisplay.classList.toggle('hidden', !showEmpty);
  newsGridContainer.classList.toggle('hidden', !showGrid);
  
  // Add grid classes when showing grid
  if (showGrid) {
    newsGridContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
  }
}

// Get readable category name
function getReadableCategoryName(categoryCode) {
  const categoryMapping = {
    transfer: 'Transfer',
    update: 'Update',
    exclusive: 'Exclusive',
    match: 'Match',
    rumor: 'Rumor',
    analysis: 'Analysis',
  };
  return categoryMapping[categoryCode] || categoryCode;
}

// Create news card element
function buildNewsCardElement(newsItem) {
  const articleElement = document.createElement('article');
  articleElement.className = 'bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full';

  const detailLink = `{% url 'main:show_news' '00000000-0000-0000-0000-000000000000' %}`.replace('00000000-0000-0000-0000-000000000000', newsItem.id);
  const editLink = `{% url 'main:edit_news' '00000000-0000-0000-0000-000000000000' %}`.replace('00000000-0000-0000-0000-000000000000', newsItem.id);
  const deleteLink = `{% url 'main:delete_news' '00000000-0000-0000-0000-000000000000' %}`.replace('00000000-0000-0000-0000-000000000000', newsItem.id);

  const formattedDate = new Date(newsItem.created_at).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  const categoryLabel = getReadableCategoryName(newsItem.category);
  const isFeatured = newsItem.is_featured;
  const isHot = newsItem.news_views > 20;

  const thumbnailHtml = newsItem.thumbnail 
    ? `<img src='${newsItem.thumbnail}' alt='${newsItem.title}' class='w-full h-full object-cover'>` 
    : `<div class='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'></div>`;

  const featuredBadge = isFeatured 
    ? `<span class='inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800'>Featured</span>` 
    : '';
  const hotBadge = isHot 
    ? `<span class='inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800'>Hot</span>` 
    : '';

  const editDeleteButtons = CURRENT_USER_ID && Number(CURRENT_USER_ID) === Number(newsItem.user_id)
    ? `<div class='flex space-x-2'>
        <a href='${editLink}' class='text-gray-600 hover:text-gray-700 text-sm transition-colors'>Edit</a>
        <a href='${deleteLink}' class='text-red-600 hover:text-red-700 text-sm transition-colors' onclick='return confirm("Are you sure you want to delete this article?")'>Delete</a>
      </div>`
    : '';

  const completeCardHtml = `
    <div class="aspect-[16/9] relative overflow-hidden">
      ${thumbnailHtml}
      <div class="absolute top-3 left-3">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white">${categoryLabel}</span>
      </div>
      <div class="absolute top-3 right-3 flex space-x-2">
        ${featuredBadge}
        ${hotBadge}
      </div>
    </div>
    <div class="p-5 flex flex-col flex-1">
      <div class="flex items-center text-sm text-gray-500 mb-3">
        <time>${formattedDate}</time>
        <span class="mx-2">•</span>
        <span>${newsItem.news_views} views</span>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
        <a href="${detailLink}" class="hover:text-green-600 transition-colors">${newsItem.title}</a>
      </h3>
      <p class="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">${newsItem.content}</p>
      <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
        <a href="${detailLink}" class="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">Read more</a>
        ${editDeleteButtons}
      </div>
    </div>
  `;

  articleElement.innerHTML = completeCardHtml;
  return articleElement;
}

// Render all news cards
function renderAllNewsCards(newsItems) {
  newsGridContainer.innerHTML = '';
  newsItems.forEach(newsItem => {
    const cardElement = buildNewsCardElement(newsItem);
    newsGridContainer.appendChild(cardElement);
  });
}

// Filter and display news
function filterAndDisplayNews() {
  updateFilterButtonsAppearance();
  
  const filteredNews = activeFilter === 'all' 
    ? allNewsData 
    : allNewsData.filter(news => Number(news.user_id) === Number(CURRENT_USER_ID));
  
  if (filteredNews.length === 0) {
    displayPageSection({ showEmpty: true });
  } else {
    renderAllNewsCards(filteredNews);
    displayPageSection({ showGrid: true });
  }
}

// Fetch news data from server
async function fetchNewsFromServer() {
  try {
    displayPageSection({ showLoading: true });
    
    const response = await fetch(NEWS_API_ENDPOINT, {
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news data from server');
    }

    const newsData = await response.json();
    allNewsData = newsData || [];
    
    filterAndDisplayNews();
  } catch (error) {
    console.error('Error loading news:', error);
    displayPageSection({ showError: true });
  }
}

// Event handlers
function handleShowAllNewsClick() {
  activeFilter = 'all';
  filterAndDisplayNews();
}

function handleShowMyNewsClick() {
  activeFilter = 'my';
  filterAndDisplayNews();
}

// Initialize page
function initializeNewsPage() {
  showAllNewsButton.addEventListener('click', handleShowAllNewsClick);
  showMyNewsButton.addEventListener('click', handleShowMyNewsClick);
  
  fetchNewsFromServer();
}

// Start application
initializeNewsPage();
</script>
...
```

**Penjelasan Kode JavaScript:**
Kode JavaScript ini berisi logika untuk mengimplementasikan AJAX di halaman berita. Dimulai dengan konfigurasi `NEWS_API_ENDPOINT` untuk mengambil data JSON dari server dan `CURRENT_USER_ID` untuk keperluan filter "My News".

Bagian DOM Elements berisi referensi ke elemen HTML yang akan dimanipulasi seperti loading spinner, error message, dan grid container. Fungsi `updateFilterButtonsAppearance()` mengubah tampilan tombol filter sesuai yang aktif, sedangkan `displayPageSection()` mengatur section mana yang ditampilkan.

Fungsi `buildNewsCardElement()` membuat elemen HTML card untuk setiap berita menggunakan template string. `renderAllNewsCards()` menghapus semua card lama dan merender card baru - inilah yang membuat halaman "refresh" tanpa reload. `filterAndDisplayNews()` mengatur logika filtering data, dan `fetchNewsFromServer()` melakukan request AJAX menggunakan fetch() API.

Dengan implementasi ini, halaman utama sekarang menggunakan AJAX untuk memuat data berita secara dinamis tanpa memerlukan refresh halaman. Data akan dimuat secara asinkron saat halaman pertama kali dibuka dan saat pengguna mengklik tombol filter.

## Tutorial: Implementasi AJAX di halaman detail berita
Kita akan memperbarui halaman detail berita agar menggunakan AJAX untuk memuat data secara dinamis tanpa perlu melakukan refresh halaman.

### Langkah 1: Update Function `show_json_by_id`
Pastikan function `show_json_by_id` sudah ada di `main/views.py`. Kemudian update function tersebut sebagai berikut:

```python title="main/views.py"
def show_json_by_id(request, news_id):
    try:
        news = News.objects.select_related('user').get(pk=news_id)
        data = {
            'id': str(news.id),
            'title': news.title,
            'content': news.content,
            'category': news.category,
            'thumbnail': news.thumbnail,
            'news_views': news.news_views,
            'created_at': news.created_at.isoformat() if news.created_at else None,
            'is_featured': news.is_featured,
            'user_id': news.user_id,
            'user_username': news.user.username if news.user_id else None,
        }
        return JsonResponse(data)
    except News.DoesNotExist:
        return JsonResponse({'detail': 'Not found'}, status=404)
```

### Langkah 2: Update template news_detail.html untuk AJAX
Update file `main/templates/news_detail.html` dengan template yang mendukung AJAX:

```html title="main/templates/news_detail.html"
{% extends 'base.html' %}
{% load static %}

{% block meta %}
<title>News Detail - Football News</title>
{% endblock meta %}

{% block content %}
<div class="bg-gray-50 w-full min-h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <!-- Back Navigation -->
        <div class="mb-6">
            <a href="{% url 'main:show_main' %}" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                ← Back to News
            </a>
        </div>
        
        <!-- Loading State -->
        <div id="loading-state" class="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <svg class="animate-spin h-8 w-8 text-green-600 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            <p class="text-gray-600 mt-3">Loading news detail...</p>
        </div>

        <!-- Error State -->
        <div id="error-state" class="bg-white rounded-lg border border-gray-200 p-12 text-center hidden">
            <div class="w-16 h-16 mx-auto mb-4">
                <div class="text-red-500 text-5xl">⚠️</div>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Failed to load news</h3>
            <p class="text-gray-500">Please try again later.</p>
        </div>
        
        <!-- Article Content -->
        <article id="article-content" class="bg-white rounded-lg border border-gray-200 overflow-hidden hidden">
            
            <!-- Header -->
            <div class="p-6 sm:p-8">
                <div id="badges-container" class="flex flex-wrap items-center gap-2 mb-4">
                    <!-- Dynamic badges will be inserted here -->
                </div>
                
                <h1 id="article-title" class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                    <!-- Title will be inserted here -->
                </h1>
                
                <div class="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                    <time id="article-date">
                        <!-- Date will be inserted here -->
                    </time>
                    <span id="article-views">
                        <!-- Views will be inserted here -->
                    </span>
                </div>
            </div>

            <!-- Featured Image -->
            <div id="featured-image-container" class="px-6 sm:px-8 hidden">
                <img id="featured-image" 
                     src="" 
                     alt="" 
                     class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg">
            </div>

            <!-- Content -->
            <div class="p-6 sm:p-8">
                <div class="prose prose-lg max-w-none">
                    <div id="article-content-text" class="text-gray-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
                        <!-- Content will be inserted here -->
                    </div>
                </div>
            </div>

            <!-- Author Info -->
            <div class="border-t border-gray-200 p-6 sm:p-8 bg-gray-50">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="font-medium text-gray-900">
                            <p id="article-author">Author: Loading...</p>
                        </div>
                        <p class="text-sm text-gray-500">Author</p>
                    </div>
                </div>
            </div>
        </article>
    </div>
</div>
{% endblock content %}
```

**Penjelasan Template:**
Template ini dimodifikasi dari template `news_detail.html` biasa menjadi versi AJAX. Perbedaan utamanya adalah semua konten berita (judul, konten, gambar, dll) tidak lagi diisi langsung dari Django context, melainkan menggunakan placeholder kosong dengan ID tertentu. JavaScript nantinya akan mengisi placeholder ini dengan data yang diambil melalui AJAX dari endpoint `show_json_by_id`.

### Langkah 3: Menambahkan JavaScript untuk AJAX
Tambahkan script JavaScript sebelum tag `{% endblock content %}` di file `main/templates/news_detail.html`:

```html title="main/templates/news_detail.html"
...
<script>
// Configuration
const NEWS_ID = "{{ news.id }}";
const NEWS_DETAIL_ENDPOINT = `{% url 'main:show_json_by_id' '00000000-0000-0000-0000-000000000000' %}`.replace('00000000-0000-0000-0000-000000000000', NEWS_ID);

// DOM Elements
const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const articleContent = document.getElementById('article-content');
const badgesContainer = document.getElementById('badges-container');
const articleTitle = document.getElementById('article-title');
const articleDate = document.getElementById('article-date');
const articleViews = document.getElementById('article-views');
const featuredImageContainer = document.getElementById('featured-image-container');
const featuredImage = document.getElementById('featured-image');
const articleContentText = document.getElementById('article-content-text');
const articleAuthor = document.getElementById('article-author');

// Show/hide page sections
function showState(state) {
    loadingState.classList.toggle('hidden', state !== 'loading');
    errorState.classList.toggle('hidden', state !== 'error');
    articleContent.classList.toggle('hidden', state !== 'ready');
}

// Get readable category name
function getCategoryLabel(categoryCode) {
    const categoryMapping = {
        transfer: 'Transfer',
        update: 'Update',
        exclusive: 'Exclusive',
        match: 'Match',
        rumor: 'Rumor',
        analysis: 'Analysis',
    };
    return categoryMapping[categoryCode] || categoryCode;
}

// Render article content
function renderArticle(news) {
    // Set title
    articleTitle.textContent = news.title;
    document.title = `${news.title} - Football News`;
    
    // Set badges
    badgesContainer.innerHTML = '';
    
    // Category badge
    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-600 text-white';
    categoryBadge.textContent = getCategoryLabel(news.category);
    badgesContainer.appendChild(categoryBadge);
    
    // Featured badge
    if (news.is_featured) {
        const featuredBadge = document.createElement('span');
        featuredBadge.className = 'inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800';
        featuredBadge.textContent = 'Featured';
        badgesContainer.appendChild(featuredBadge);
    }
    
    // Hot badge
    if (news.news_views > 20) {
        const hotBadge = document.createElement('span');
        hotBadge.className = 'inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800';
        hotBadge.textContent = 'Hot';
        badgesContainer.appendChild(hotBadge);
    }
    
    // Set date and views
    const formattedDate = new Date(news.created_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    articleDate.textContent = formattedDate;
    articleViews.textContent = `${news.news_views} views`;
    
    // Set featured image
    if (news.thumbnail) {
        featuredImage.src = news.thumbnail;
        featuredImage.alt = news.title;
        featuredImageContainer.classList.remove('hidden');
    } else {
        featuredImageContainer.classList.add('hidden');
    }
    
    // Set content
    articleContentText.textContent = news.content;
    
    // Set author
    const authorName = news.user_username || 'Anonymous';
    articleAuthor.textContent = `Author: ${authorName}`;
}

// Fetch news detail
async function loadNewsDetail() {
    try {
        showState('loading');
        
        const response = await fetch(NEWS_DETAIL_ENDPOINT, {
            headers: { 'Accept': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch news detail');
        }

        const newsData = await response.json();
        renderArticle(newsData);
        showState('ready');
    } catch (error) {
        console.error('Error loading news detail:', error);
        showState('error');
    }
}

// Initialize page
loadNewsDetail();
</script>
...
```
**Penjelasan Kode:**
Template ini menggunakan pendekatan AJAX untuk memuat detail berita secara dinamis. Terdapat tiga state utama: loading (menampilkan spinner), error (jika gagal memuat data), dan ready (menampilkan konten berita).

JavaScript akan mengambil data detail berita dari endpoint `show_json_by_id` dan merender konten secara dinamis tanpa refresh halaman. Fungsi `renderArticle()` bertugas mengisi elemen-elemen HTML dengan data yang diterima dari server, termasuk gambar, konten, dan informasi author.

## Tutorial: Membuat Modal Sebagai Form untuk Menambahkan Berita

Modal adalah komponen UI yang sangat berguna untuk menampilkan form atau konten tambahan tanpa harus pindah halaman. Pada tutorial ini, kita akan membuat modal yang berisi form untuk menambahkan berita baru menggunakan AJAX.

**Mengapa menggunakan Modal?**
- **User Experience yang lebih baik**: Pengguna tidak perlu pindah halaman untuk mengisi form
- **Fokus pada konten**: Modal membantu pengguna fokus pada form tanpa distraksi dari elemen lain
- **Efisiensi**: Menghemat waktu loading karena tidak perlu memuat halaman baru
- **Interaktif**: Memberikan pengalaman yang lebih dinamis dan modern

### Langkah 1: Membuat Struktur HTML Modal

Buat file `modal.html` pada folder templates di root project:

**templates/modal.html**
```html
<!-- Modal -->
<div id="crudModal" class="hidden fixed inset-0 z-50 w-full flex items-center justify-center bg-gray-800 bg-opacity-50">
  <div id="crudModalContent" class="bg-white rounded-lg shadow-lg w-5/6 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 max-h-screen overflow-y-auto">
    <!-- Modal header -->
    <div class="flex items-center justify-between p-4 border-b">
      <div>
        <h3 class="text-xl font-semibold text-gray-900">
          Create New News
        </h3>
        <p class="text-sm text-gray-600 mt-1">Share your football news and stories with the community</p>
      </div>
      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onclick="hideModal()">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
    </div>
    <!-- Modal body -->
    <div class="px-6 py-4 space-y-6 form-style">
      <form id="newsForm">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Enter news title" required>
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
          <textarea id="content" name="content" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Enter news content" required></textarea>
        </div>
        <div class="mb-4">
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <select id="category" name="category" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" required>
            <option value="">Choose a category</option>
            <option value="transfer">Transfer</option>
            <option value="update">Update</option>
            <option value="exclusive">Exclusive</option>
            <option value="match">Match</option>
            <option value="rumor">Rumor</option>
            <option value="analysis">Analysis</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="thumbnail" class="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input type="url" id="thumbnail" name="thumbnail" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" placeholder="https://example.com/image.jpg">
        </div>
        <div class="mb-4">
          <div class="flex items-center">
            <input id="is_featured" name="is_featured" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
            <label for="is_featured" class="ml-2 text-sm font-medium text-gray-900">Featured News</label>
          </div>
        </div>
      </form>
    </div>
    <!-- Modal footer -->
    <div class="flex flex-col sm:flex-row gap-4 p-6 border-t border-gray-200 rounded-b">
      <button type="button" id="cancelButton" class="order-2 sm:order-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-center" onclick="hideModal()">Cancel</button>
      <button type="submit" id="submitNews" form="newsForm" class="order-1 sm:order-2 flex-1 bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">Publish News</button>
    </div>
  </div>
</div>
```

**Penjelasan struktur modal:**
- **Modal overlay**: `bg-gray-800 bg-opacity-50` memberikan background gelap semi-transparan
- **Modal container**: Responsive dengan ukuran yang berbeda pada setiap breakpoint
- **Modal header**: Berisi judul dan tombol close
- **Modal body**: Berisi form dengan semua field yang diperlukan
- **Modal footer**: Berisi tombol Cancel dan Submit

### Langkah 2: Menambahkan Fungsi JavaScript untuk Menampilkan dan Menyembunyikan Modal

Karena kita menggunakan vanilla Tailwind CSS, tidak ada class modal yang built-in. Oleh karena itu, agar modal dapat berfungsi, kita perlu menambahkan fungsi-fungsi JavaScript berikut.

Tambahkan kode JavaScript berikut pada file `modal.html` yang sebelumnya sudah kita buat:

**templates/modal.html**
```html
...
<script>
  function showModal() {
      const modal = document.getElementById('crudModal');
      const modalContent = document.getElementById('crudModalContent');

      modal.classList.remove('hidden'); 
      setTimeout(() => {
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('opacity-100', 'scale-100');
      }, 50); 
  }

  function hideModal() {
      const modal = document.getElementById('crudModal');
      const modalContent = document.getElementById('crudModalContent');

      modalContent.classList.remove('opacity-100', 'scale-100');
      modalContent.classList.add('opacity-0', 'scale-95');

      setTimeout(() => {
        modal.classList.add('hidden');
      }, 150); 
  }
</script>
```

**Penjelasan kode:**
- `showModal()`: Fungsi untuk menampilkan modal dengan animasi fade-in dan scale-up
- `hideModal()`: Fungsi untuk menyembunyikan modal dengan animasi fade-out dan scale-down
- `setTimeout()`: Memberikan delay untuk efek transisi yang smooth
- Event listeners untuk tombol Cancel dan Close untuk menutup modal

### Langkah 3: Menambahkan tombol untuk membuka modal pada halaman utama

Tambahkan tombol untuk membuka modal tepat di bawah section `header` pada file `main/templates/main.html`:

**main/templates/main.html**
```html
...
 <!-- Header Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Latest Football News</h1>
      <p class="text-gray-600">Stay updated with the latest football stories and analysis</p>
    </div>
  <!-- Button to open modal -->
    <button onclick="showModal()" class="inline-flex items-center px-4 py-2 bg-white text-green-600 font-semibold outline outline-2 outline-green-600 outline-offset-[-2px] rounded-md hover:bg-green-600 hover:text-white transition-colors mb-4">
      Create News by AJAX
    </button>
...
```

### Langkah 4: Menambahkan modal pada base.html
Untuk memastikan modal dapat dibuka dari page manapun yang mengextend `base.html`, termasuk `main.html`. Modifikasi `base.html` untuk include `modal.html`sebagai berikut:
```html
...
<body>
    {% block content %}

    {% endblock %}

    {% include 'toast.html' %}
    {% include 'modal.html' %}
</body>
...
```
Berikut adalah tampilan modal yang berhasil kita integrasikan pada halaman utama:
![image](/img/t5-4.png)


## Tutorial: Menambahkan Data Berita dengan AJAX

Sekarang kita akan membuat fitur untuk menambahkan data berita menggunakan AJAX. Dengan modal yang sudah kita buat, pengguna bisa menambah berita baru tanpa harus pindah ke halaman form terpisah atau reload halaman setelah submit.

### Langkah 1: Membuat View untuk Menangani Request AJAX

Buka file `main/views.py` dan tambahkan import dan view function berikut:

**main/views.py**
```python
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

...

@csrf_exempt
@require_POST
def add_news_entry_ajax(request):
    title = request.POST.get("title")
    content = request.POST.get("content")
    category = request.POST.get("category")
    thumbnail = request.POST.get("thumbnail")
    is_featured = request.POST.get("is_featured") == 'on'  # checkbox handling
    user = request.user

    new_news = News(
        title=title, 
        content=content,
        category=category,
        thumbnail=thumbnail,
        is_featured=is_featured,
        user=user
    )
    new_news.save()

    return HttpResponse(b"CREATED", status=201)
```

**Penjelasan kode:**
- `@csrf_exempt`: Menonaktifkan CSRF protection untuk request AJAX ini
- `@require_POST`: Memastikan hanya HTTP POST yang diterima
- `== 'on'`: Handling khusus untuk checkbox (mengembalikan 'on' jika dicentang)
- Return HTTP response dengan status 201 (Created)

### Langkah 2: Menambahkan URL Pattern

Buka file `main/urls.py` dan tambahkan import serta URL pattern:

**main/urls.py**
```python
from main.views import add_news_entry_ajax

urlpatterns = [
    ...
    path('create-news-ajax', add_news_entry_ajax, name='add_news_entry_ajax'),
]
```

### Langkah 3: Menambahkan Fungsi JavaScript untuk AJAX

Tambahkan fungsi-fungsi JavaScript berikut pada file `templates/modal.html`:

**templates/modal.html**
```html
<script>
...
 async function addNewsEntry() {
    await fetch("{% url 'main:add_news_entry_ajax' %}", {
      method: "POST",
      body: new FormData(document.querySelector('#newsForm')),
    })

    document.getElementById("newsForm").reset();
    hideModal();
      
    // Show toast notification
    showToast('News added successfully!', '', 'success');

    // Dispatch custom event to notify main.html about new data
    document.dispatchEvent(new CustomEvent('newsAdded'));

    return false;
  }
...
</script>
```

**Penjelasan:**
Fungsi `addNewsEntry()` mengirim data form melalui AJAX ke server, kemudian menampilkan toast notification dan mengirim custom event `newsAdded` yang akan didengar oleh halaman main untuk melakukan refresh data secara dinamis tanpa reload halaman.

**Struktur lengkap dalam file `templates/modal.html`:**

```html
<!-- modal HTML section and other content -->
...

<script>
  function showModal() {
    // ...  showModal code
  }

  function hideModal() {
    // ...  hideModal code
  }

  async function addNewsEntry() {
    await fetch("{% url 'main:add_news_entry_ajax' %}", {
      method: "POST",
      body: new FormData(document.querySelector('#newsForm')),
    })

    document.getElementById("newsForm").reset();
    hideModal();
      
    showToast('News added successfully!', '', 'success');


    document.dispatchEvent(new CustomEvent('newsAdded'));

    return false;
  }
</script>
```

### Langkah 5: Menambahkan Event Listener `newsAdded` di main.html

Agar halaman main bisa mendeteksi ketika ada berita baru yang ditambahkan melalui modal, tambahkan event listener pada script di `main/templates/main.html`:
**main/templates/main.html**
```html title="main/templates/main.html"
<script>
...

// Add event listener to detect new news
document.addEventListener('newsAdded', function() {
    // Refresh data without page reload
    fetchNewsFromServer();
});
</script>
```

**Penjelasan:**
- Event listener akan mendengar custom event `newsAdded` yang dikirim dari modal
- Ketika event diterima, langsung panggil `fetchNewsFromServer()` untuk refresh data

Dengan cara ini, data akan ter-update secara real-time tanpa perlu reload halaman.

### Langkah 6: Menambahkan Event Listener untuk Form

Tambahkan event listener untuk menangani submit form pada file `templates/modal.html` didalam bagian blok kode `<script>`:

**templates/modal.html**
```html
<script>
...
document.getElementById("newsForm").addEventListener("submit", function(e) {
    e.preventDefault();
    addNewsEntry();
})
...
</script>
```

**Penjelasan:**
- `e.preventDefault()`: Mencegah form melakukan submit default (reload halaman)
- Memanggil `addNewsEntry()` untuk mengirim data via AJAX



## Tutorial: Melindungi Aplikasi dari Cross Site Scripting (XSS)

### Apa itu Cross-Site Scripting (XSS)

Bayangkan aplikasi kita memiliki fitur komentar. Idealnya, jika seorang pengguna mengirimkan komentar berupa teks, pengguna lain akan melihat teks tersebut persis seperti aslinya. 

Namun, celah XSS muncul jika aplikasi tidak memvalidasi input dari pengguna. Seorang pengguna yang berniat jahat bisa saja memasukkan potongan kode JavaScript sebagai komentar, bukan hanya teks biasa. Contohnya seperti ini:

```javascript
<script>alert('Website ini tidak aman!');</script>
```

Jika aplikasi tidak mengamankan input ini, browser akan salah mengartikannya sebagai perintah yang harus dijalankan, bukan sebagai teks biasa. Akibatnya, kode tersebut dieksekusi dan sebuah kotak alert akan muncul di layar.

Inilah inti dari celah keamanan XSS, input yang tidak aman dari satu pengguna dapat dieksekusi di browser pengguna lain.

### Mencoba Serangan XSS

Untuk melihat celah keamanan ini secara langsung, mari kita coba lakukan serangan sederhana.

1. Buka halaman main dan klik tombol __Create News (AJAX)__ untuk memunculkan modal. Pada _field_ Title, masukkan payload berikut. _Field_ lain bisa diisi sesuai dengan keinginan kalian.

    ```html
    <img src=x onerror="alert('Bad News!');"/>
    ```

    [image](/img/t5-5.png)

2. Klik tombol 'Publish News' untuk mengirim data. Jika aplikasi rentan dan data berhasil disimpan, kamu akan mendapatkan alert dengan nilai Bad News! seperti di gambar berikut.

    [image](/img/t5-6.png)

### Menambahkan `strip_tags` untuk "Membersihkan" Data Baru

Dari percobaan sebelumnya, kita bisa melihat bahwa aplikasi kita menyimpan input berbahaya dari pengguna apa adanya. Tentu saja ini tidak aman. Untuk menutup celah keamanan ini, kita akan melakukan sanitasi data di sisi _backend_ sebelum menyimpannya ke database. Django menyediakan fungsi `strip_tags` yang sangat berguna untuk menghapus semua tag HTML dari teks.

1. Bukalah berkas `views.py` dan `forms.py` pada direktori `main` dan tambahkan import berikut.
    ```python title="main/views.py, main/forms.py"
    from django.utils.html import strip_tags
    ```

2. Pada fungsi `add_news_entry_ajax` di `views.py`, gunakanlah fungsi `strip_tags` pada data `title` dan `content` sebelum data tersebut dimasukkan ke dalam objek `News`.
    ```python title="main/views.py"
    ...
    @csrf_exempt
    @require_POST
    def add_news_entry_ajax(request):
        title = strip_tags(request.POST.get("title")) # strip HTML tags!
        content = strip_tags(request.POST.get("content")) # strip HTML tags!
    ...
    ```

    **Penjelasan Kode**:
    - Fungsi `strip_tags` akan menghilangkan semua *tag* HTML yang terdapat pada data `title` dan `content` yang dikirim pengguna melalui `POST` *request*, sehingga data yang disimpan dalam database adalah data yang sudah "bersih". Misal `data = "<b>Berita</b> <button>Penting</button> <span>Sekali</span>"`, maka `strip_tags(data)` akan mengembalikan `Berita Penting Sekali`.
    - Data lain seperti `category`, `thumbnail`, dan `is_featured` tidak perlu dibersihkan dengan `strip_tags` karena tipe datanya sudah memberikan perlindungan yang kuat. Field `category` dibatasi oleh `choices`, `thumbnail` divalidasi sebagai URL oleh `URLField`, dan `is_featured` hanya menerima nilai `boolean` dari *checkbox*. Hal ini mencegah pengguna menyisipkan kode HTML berbahaya pada field-field tersebut.

3. Pada _class_ `NewsForm` di `forms.py` tambahkan kedua _method_ berikut.
    ```python title="main/forms.py"
    ...
    class NewsForm(ModelForm):
        class Meta:
            ...
        
        def clean_title(self):
            title = self.cleaned_data["title"]
            return strip_tags(title)

        def clean_content(self):
            content = self.cleaned_data["content"]
            return strip_tags(content)
            
    ...
    ```

    **Penjelasan Kode**:
    *   _Method_ `clean_title` dan `clean_content` akan dipanggil secara otomatis saat `form.is_valid()` dijalankan. Dengan menambahkan kedua _method_ ini, kamu memastikan bahwa semua data yang dikirim melalui `NewsForm` (misalnya di halaman `create_news` dan `edit_news`) sudah "bersih" dari tag HTML berbahaya sebelum disimpan.

4. Setelah menambahkan `strip_tags`, hapuslah data `News` berbahaya yang tadi kamu tambahkan dan coba lakukan serangan lagi. Hasilnya akan berbeda tergantung pada cara kamu menambahkannya:

    -   **Jika menggunakan tombol `Create News` (halaman form biasa):** Kamu akan dihadapkan dengan _error_ pada form yang mengatakan _field_ `title` tidak boleh kosong, seperti pada gambar di bawah. Ini terjadi karena `strip_tags` mengubah inputmu menjadi string kosong, sehingga validasi gagal.
    -   **Jika menggunakan tombol `Create News by AJAX` (modal):** _News_ baru akan berhasil dibuat dan muncul di halaman, namun _payload_ seranganmu akan tampil sebagai teks biasa tanpa memunculkan _alert_ apapun.

    Kedua hasil tersebut membuktikan hal yang sama. Selamat! Kamu sudah berhasil menambahkan pertahanan terhadap XSS! Jika kamu tidak mendapatkan salah satu dari kedua hasil ini, periksa kembali apakah kamu sudah mengikuti langkah-langkah sebelumnya dengan sesuai. 


### Membersihkan Data dengan DOMPurify

Fungsi `strip_tags` yang kita tambahkan akan mengamankan semua data **baru** yang masuk. Namun, bagaimana dengan data berbahaya yang mungkin sudah ada di database kita sebelumnya? Kita bisa membersihkannya secara manual, atau kita bisa menambahkan lapisan pertahanan kedua di sisi **frontend** menggunakan _library_ JavaScript DOMPurify.

Perlu diingat bahwa DOMPurify hanya bekerja saat kita menampilkan data sebagai HTML. Jika ada yang mengakses API `/json` atau `/xml` kita, data yang mereka dapatkan masih data yang "kotor".

1. Bukalah berkas `base.html` dan tambahkan _script tag_ untuk DOMPurify di dalam tag `<head>`, bersama dengan aset lainnya seperti CSS.

    ```html title="templates/base.html"
    {% load static %}
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ...
        <script src="https://cdn.tailwindcss.com"></script>
        <!-- Add DOMPurify here -->
        <script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js"></script>
        <link rel="stylesheet" href="{% static 'css/global.css' %}"/>
      </head>
      ...
    </html>
    ```
2. Selanjutnya, kita akan menerapkan sanitasi di dalam halaman `main/templates/main.html`. Cari fungsi `buildNewsCardElement` dan update dengan kode berikut yang sudah menggunakan `DOMPurify.sanitize()`:

    ```javascript title="main/templates/main.html"
    function buildNewsCardElement(item) {
        const article = document.createElement('article');
        article.className = 'bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full';

        const linkDetail = `{% url 'main:show_news' '00000000-0000-0000-0000-000000000000' %}`.replace('00000000-0000-0000-0000-000000000000', item.id);
        const linkEdit = `{% url 'main:edit_news' '00000000-0000-0000-0000-000000000000' %}`.replace('00000000-0000-0000-0000-000000000000', item.id);
        const linkDelete = `{% url 'main:delete_news' '00000000-0000-0000-0000-000000000000' %}`.replace('00000000-0000-0000-0000-000000000000', item.id);

        const title = DOMPurify.sanitize(item.title);
        const content = DOMPurify.sanitize(item.content);
        const category = DOMPurify.sanitize(item.category);
        const thumbnail = DOMPurify.sanitize(item.thumbnail);
        const createdAt = DOMPurify.sanitize(new Date(item.created_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        }));
        const newsViews = DOMPurify.sanitize(item.news_views);
        const isFeatured = item.is_featured;
        const isHot = newsViews > 20;

        const thumbnailHtml = DOMPurify.sanitize(
            item.thumbnail ? `<img src='${thumbnail}' alt='${title}' class='w-full h-full object-cover'>` : `<div class='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'></div>`
        );
        const categoryLabel = DOMPurify.sanitize(getReadableCategoryName(category));
        const featuredLabel = isFeatured ? DOMPurify.sanitize(`<span class='inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800'>Featured</span>`) : '';
        const hotLabel = isHot ? DOMPurify.sanitize(`<span class='inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800'>Hot</span>`) : '';

        const editDeleteHtml = CURRENT_USER_ID && Number(CURRENT_USER_ID) === Number(item.user_id)
            ? `<div class='flex space-x-2'>
                <a href='${linkEdit}' class='text-gray-600 hover:text-gray-700 text-sm transition-colors'>Edit</a>
                <a href='${linkDelete}' class='text-red-600 hover:text-red-700 text-sm transition-colors' onclick='return confirm("Are you sure you want to delete this article?")'>Delete</a>
              </div>`
            : '';

        const cardHtml = `
            <div class="aspect-[16/9] relative overflow-hidden">
              ${thumbnailHtml}
              <div class="absolute top-3 left-3">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white">${categoryLabel}</span>
              </div>
              <div class="absolute top-3 right-3 flex space-x-2">
                ${featuredLabel}
                ${hotLabel}
              </div>
            </div>
            <div class="p-5 flex flex-col flex-1">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <time>${createdAt}</time>
                <span class="mx-2">•</span>
                <span>${newsViews} views</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                <a href="${linkDetail}" class="hover:text-green-600 transition-colors">${title}</a>
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">${content}</p>
              <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
                <a href="${linkDetail}" class="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">Read more</a>
                ${editDeleteHtml}
              </div>
            </div>
        `;
        
        article.innerHTML = cardHtml;
        return article;
    }
    ```
    
    **Penjelasan Kode**:
    -   Fungsi `DOMPurify.sanitize()` akan mem-parsing string HTML dan secara cerdas menghapus semua elemen atau atribut yang berpotensi berbahaya. Ini diterapkan pada `title` dan `content` yang berasal langsung dari input pengguna. Misal `data = "<b>Aman</b> <img src=x onerror='alert(1)'>"` akan menjadi `<b>Aman</b> <img src="x">`. Tag `<b>` yang aman dipertahankan, sementara atribut `onerror` yang berbahaya dihilangkan.
    -   Perhatikan bahwa kita tidak hanya membersihkan `title` dan `content`. Untuk keamanan maksimal (prinsip *defense-in-depth*), semua variabel lain yang akan dimasukkan ke dalam HTML seperti `thumbnailHtml`, `categoryLabel`, dan bahkan `detailUrl` juga disanitasi. Ini adalah praktik yang baik untuk memastikan tidak ada kode tak terduga yang bisa dieksekusi, bahkan jika data tersebut tidak berasal langsung dari input pengguna.
    
    > **CATATAN**
    > Prinsip utamanya adalah untuk selalu membersihkan data yang berasal dari sumber eksternal (seperti API/database) sebelum memasukkannya ke dalam `innerHTML` atau struktur DOM lainnya.

3. _Refresh_ halaman __main__. Jika sebelumnya kamu memiliki data "kotor" yang memunculkan _alert box_, seharusnya _alert box_ tersebut tidak akan muncul lagi di _browser_-mu.

## Akhir Kata
Selamat! Kamu telah menyelesaikan Tutorial 5 dengan baik. 😄

Setelah kamu menyelesaikan seluruh tutorial di atas, harapannya Kamu sekarang lebih paham tentang penggunaan AJAX dan Pencegahan XSS pada framework Django.
1. Setelah menyelesaikan tutorial ini, tampilan halaman web kamu seharusnya terlihat seperti ini (Design web hanya sebagai contoh. Kalian dibebaskan untuk berkreasi masing-masing).
![image](/img/t5-7.png)
![image](/img/t5-8.png)



2. Pada akhir tutorial ini, struktur pada lokalmu terlihat seperti ini.

  ![image](/img/t5-9.png)



3. Sebelum melakukan langkah ini, **pastikan struktur direktori lokal sudah benar**. Selanjunya, lakukan `add`, `commit` dan `push` untuk memperbarui repositori GitHub.

4. Jalankan perintah berikut untuk melakukan `add`, `commit` dan `push` ke GitHub dan PWS.

```
git add .
git commit -m "<pesan_commit>"
git push origin master
git push pws master
```

- Ubah `<pesan_commit>` sesuai dengan keinginan. Contoh: `git commit -m "tutorial 5 selesai"`.

## Referensi Tambahan

- [HackTricks Cross Site Scripting](https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting)
- [OWASP Cross Site Scripting](https://owasp.org/www-community/attacks/xss/)
- [AJAX Learning](https://www.w3schools.com/xml/ajax_intro.asp)

## Kontributor

- Andrew Devito Aryo
- Tristan Agra Yudhistira
- Joe Mathew Rusli
- Bertrand Gwynfory Iskandar

## Credits
Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2025](https://github.com/pbp-fasilkom-ui/ganjil-2025) dan [PBP Ganjil 2024](https://github.com/pbp-fasilkom-ui/ganjil-2024) yang ditulis oleh Tim Pengajar dan Asisten Dosen Pemrograman Berbasis Platform 2025 dan 2024. Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.