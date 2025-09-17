---
sidebar_label: Tutorial 3
sidebar_position: 5
Path: docs/tutorial-3
---

# Tutorial 3: Autentikasi, Session, Cookies dan Selenium

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2025/2026

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:

- Memahami konsep dasar autentikasi dalam pengembangan web.
- Memahami peran dan fungsi _cookie_ dan _session_ dalam pengembangan web.
- Memahami cara kerja _cookie_ dan _session_ dalam pengembangan web.
- Mengimplementasikan _cookie_ dan _session_ dalam proyek web.
- Mendapatkan pengenalan tentang penggunaan selenium.

## Pengenalan HTTP
HTTP (_HyperText Transfer Protocol_) adalah protokol yang digunakan untuk berkomunikasi antara _client_ dan _server_. HTTP bersifat _stateless_ yang berarti setiap transaksi/aktivitas yang dilakukan dianggap sebagai transaksi/aktivitas yang benar-benar **baru**, sehingga tidak ada data sebelumnya yang **disimpan** untuk transaksi/aktivitas saat ini.

Beberapa konsep dasar mengenai HTTP:

1. **_Client/Server_**: Interaksi dilakukan antar _client/server_. Klien adalah pihak yang melakukan _request_ dan server adalah pihak yang memberikan _response_.

2. **_Stateless_**: Setiap aktivitas (_request/response_) bersifat independen, tidak tersimpan pada aktivitas terdahulu.

3. **_OSI Layer/Model_**: Model _Open Systems Interconnection (OSI)_ menjelaskan 7 lapisan yang digunakan sistem komputer untuk berkomunikasi melalui jaringan. Model 7-layer OSI terdiri dari _Application Layer_, _Presentation Layer_, _Session Layer_, _Transport Layer_, _Network Layer_, _Data Link Layer_, dan _Physical Layer_.

4. **_Application Layer_**: Pada OSI Model yang disinggung di atas, website berjalan pada _application layer_. Sedangkan, proses _request/response_ terjadi pada _transport Layer_ yang umumnya menggunakan protokol TCP yang menentukan bagaimana data akan dikirim. _Application Layer_ tidak peduli apa yang dilakukan oleh _transport Layer_ (bagaimana data dikirim, diolah, dsb) karena _application layer_ hanya berfokus kepada _request_ dan _response_.

:::info
Lapisan OSI lainnya akan diajarkan pada mata kuliah Jaringan Komputer/Jaringan Komunikasi Data. Kamu dapat mencarinya sendiri jika kamu penasaran. 😉
:::

5. **_Client Actions Method_**: Terdapat metode-metode yang digunakan oleh _client_ saat melakukan _request_. Contoh: GET, POST, PUT, DELETE, dll. Penjelasan lebih detail dapat dibaca [di sini](https://www.restapitutorial.com/lessons/httpmethods.html).

6. **_Server Status Code_**: Merupakan status kode yang diberikan oleh server terhadap suatu _request_ pada sebuah halaman web. Contoh: 200 (OK), 404 (_Page Not Found_), 500 (_Internal Server Error_), dsb. Penjelasan lebih detail dapat dibaca [di sini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

7. **_Headers_**: Merupakan informasi kecil yang dikirim bersamaan dengan _request_ dan _response_. Informasi-informasi tersebut berguna sebagai data tambahan yang digunakan untuk memproses _request/response_. Contoh: Pada _headers_, terdapat `content-type:json`. Artinya, tipe konten yang diminta/dikirim adalah `json`. _Headers_ juga menyimpan data _cookies_.


## Pengenalan Cookies & Session
Semua komunikasi antara klien dan server dilakukan melalui protokol HTTP, di mana HTTP merupakan _stateless protocol_. Artinya _state_ yang satu dengan yang lain tidak berhubungan (independen). Hal ini mengharuskan komputer klien yang menjalankan _browser_ untuk membuat koneksi TCP ke server **setiap kali melakukan _request_**.

Tanpa adanya koneksi persisten antara klien dan server, _software_ pada setiap sisi (_endpoint_) tidak dapat bergantung hanya pada koneksi TCP untuk melakukan _holding state_ atau _holding session state_.

### Apa yang dimaksud dengan _holding state_?

Sebagai contoh, kamu ingin mengakses suatu halaman A pada suatu web yang mensyaratkan pengaksesnya sudah _login_ ke dalam web. Kemudian kamu _login_ ke web tersebut dan berhasil membuka halaman A. Saat ingin pindah ke halaman B pada web yang sama, tanpa adanya suatu proses _holding state_ **maka kamu akan diminta untuk _login_ kembali**. Begitu yang akan terjadi setiap kali kamu mengakses halaman yang berbeda padahal masih pada web yang sama.

Proses memberitahu "siapa" yang sedang _login_ dan menyimpan data ini dikenal sebagai bentuk dialog antara klien-server dan merupakan dasar _session_ - _a semi-permanent exchange of information_. Merupakan hal yang sulit untuk membuat HTTP melakukan _holding state_ (karena HTTP merupakan _stateless protocol_). Oleh karena itu, dibutuhkan teknik untuk mengatasi masalah tersebut, yaitu _Cookie_ dan _Session_.

### Bagaimana cara melakukan _holding state_?

Salah satu cara yang paling banyak digunakan untuk melakukan _holding state_ adalah dengan menggunakan _session ID_ yang disimpan sebagai _cookie_ pada komputer klien. _Session ID_ dapat dianggap sebagai suatu _token_ (barisan karakter) untuk mengenali _session_ yang unik pada aplikasi web tertentu. Daripada menyimpan semua jenis informasi sebagai _cookies_ pada klien seperti _username_, nama, dan password, hanya _Session ID_ yang disimpan.

_Session ID_ ini kemudian dapat dipetakan ke suatu struktur data pada sisi web server. Pada struktur data tersebut, kamu dapat menyimpan semua informasi yang kamu butuhkan. Pendekatan ini jauh lebih aman untuk menyimpan informasi mengenai pengguna, daripada menyimpannya pada _cookie_. Dengan cara ini, informasi tidak dapat disalahgunakan oleh klien atau koneksi yang mencurigakan.

Selain itu, pendekatan ini lebih "tepat" jika data yang akan disimpan ada banyak. Hal itu karena cookie hanya dapat menyimpan maksimal 4 KB data. Bayangkan kamu sudah _login_ ke suatu web/aplikasi dan mendapat _session ID_ (_session identifier_). Untuk dapat melakukan _holding state_ pada HTTP yang _stateless_, browser biasanya mengirimkan suatu _session ID_ ke server pada setiap _request_. Dengan begitu, setiap kali datang suatu _request_, maka server akan bereaksi (kurang lebih) "Oh, ini orang yang tepat!". Kemudian server akan mencari informasi _state_ di memori server atau di _database_ berdasarkan _session ID_ yang didapat, lalu mengembalikan data yang diminta.

Perbedaan penting yang perlu diingat adalah data _cookie_ disimpan pada sisi klien, sedangkan data _session_ biasanya disimpan pada sisi server. Untuk pembahasan lebih detail mengenai _stateless, stateful, cookie_, dan _session_ dapat dibaca [di sini](https://sethuramanmurali.wordpress.com/2013/07/07/stateful-stateless-cookie-and-session/).

Berikut tabel singkat yang menjelaskan perbedaan antara _cookies_, _session_, dan _local storage_ secara singkat.

|                       | **_Cookies_**  | **_Local Storage_** | **_Sessions_**     |
| --------------------- | -------------- | ------------------- | ------------------ |
| **Kapasitas**         | 4 KB           | 5 MB                | 5 MB               |
| **Teknologi Browser** | HTML4/HTML5    | HTML5               | HTML5              |
| **Aksesibilitas**     | Semua _window_ | Semua _window_      | _Tab_ yang sama    |
| **Kedaluwarsa**       | Diatur manual  | Selamanya           | Saat _tab_ ditutup |


## Pre-Tutorial Notes

Sebelum kamu memulai, serta untuk membantumu mengikuti tutorial 3 dengan baik, kami mengharapkan beberapa hasil berikut dari tutorial 2:

- Struktur directory `football_news` secara lokal adalah sebagai berikut

```
   football_news
   ├── env
   ├── football_news
   │   ├── __init__.py
   │   ├── asgi.py
   │   ├── settings.py
   │   ├── urls.py
   │   └── wsgi.py
   ├── main
   │   ├── migrations
   │   │   ├── __init__.py
   │   │   ├── 0001_initial.py
   │   ├── templates
   │   │   ├── create_news.html
   │   │   └── main.html
   │   │   └── news_detail.html
   │   ├── __init__.py
   │   ├── admin.py
   │   ├── apps.py
   │   ├── forms.py
   │   ├── models.py
   │   ├── tests.py
   │   ├── urls.py
   │   └── views.py
   ├── templates
   │   └── base.html
   ├── .gitignore
   ├── manage.py
   └── requirements.txt
```
Untuk lebih jelas, struktur repository `football_news` adalah sebagai berikut.

![Struktur Direktori](/img/t3-1.png)



## Tutorial: Membuat Fungsi dan Form Registrasi

Pada tutorial sebelumnya, kita sudah mencoba membuat sebuah form untuk menambahkan news. Bagaimana? Mudah kan? Pada tutorial ini kita akan membuat halaman utama (`main`) menjadi restricted dengan cara membuat akun untuk pengguna. Sehingga, pengguna yang ingin mengakses halaman utama `main` harus melakukan login terlebih dahulu agar mendapatkan akses.

1. Aktifkan *virtual environment* terlebih dahulu pada terminal. (**Hint: Ingat tutorial 0**!)
2. Buka `views.py` yang ada pada subdirektori main pada proyek kamu. Tambahkan import `UserCreationForm` dan `messages` pada bagian paling atas.

    ```python
    from django.contrib.auth.forms import UserCreationForm
    from django.contrib import messages
    ```
    **Penjelasan Kode:**
    `UserCreationForm` adalah impor formulir bawaan yang memudahkan pembuatan formulir pendaftaran pengguna dalam aplikasi web. Dengan formulir ini, pengguna baru dapat mendaftar dengan mudah di situs web Anda tanpa harus menulis kode dari awal.

3. Tambahkan fungsi `register` di bawah ini ke dalam `views.py`. Fungsi ini berfungsi untuk menghasilkan formulir registrasi secara otomatis dan menghasilkan akun pengguna ketika data di-*submit* dari form.

    ```python
    def register(request):
        form = UserCreationForm()

        if request.method == "POST":
            form = UserCreationForm(request.POST)
            if form.is_valid():
                form.save()
                messages.success(request, 'Your account has been successfully created!')
                return redirect('main:login')
        context = {'form':form}
        return render(request, 'register.html', context)
    ```
    **Penjelasan Kode:**

    * `form = UserCreationForm(request.POST)` digunakan untuk membuat `UserCreationForm` baru dari yang sudah di-impor sebelumnya dengan memasukkan QueryDict berdasarkan input dari *user* pada `request.POST`.
    * `form.is_valid()` digunakan untuk memvalidasi isi input dari *form* tersebut.
    * `form.save()` digunakan untuk membuat dan menyimpan data dari *form* tersebut.
    * `messages.success(request, 'Your account has been successfully created!')` digunakan untuk menampilkan pesan kepada pengguna setelah melakukan suatu aksi.
    * `return redirect('main:show_main')` digunakan untuk melakukan *redirect* setelah data *form* berhasil disimpan.

4. Buatlah berkas HTML baru dengan nama `register.html` pada direktori `main/templates`. Isi dari `register.html` dapat kamu isi dengan template berikut.
    ```html
    {% extends 'base.html' %}

    {% block meta %}
    <title>Register</title>
    {% endblock meta %}

    {% block content %}

    <div>
      <h1>Register</h1>

      <form method="POST">
        {% csrf_token %}
        <table>
          {{ form.as_table }}
          <tr>
            <td></td>
            <td><input type="submit" name="submit" value="Daftar" /></td>
          </tr>
        </table>
      </form>

      {% if messages %}
      <ul>
        {% for message in messages %}
        <li>{{ message }}</li>
        {% endfor %}
      </ul>
      {% endif %}
    </div>

    {% endblock content %}
    ```
    ![image](/img/t3-2.png)

    :::tip
    Kita menggunakan tag `{{ form.as_table }}` untuk memudahkan membuat form yang berbentuk tabel. Untuk informasi lebih lanjut, kamu bisa membacanya [di sini](https://docs.djangoproject.com/en/5.1/topics/forms/#reusable-form-templates)
    :::

5. Buka `urls.py` yang ada pada subdirektori `main` dan impor fungsi yang sudah kamu buat tadi.
    ```python
    from main.views import register
    ```
6. Tambahkan `path url` ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python
     urlpatterns = [
         ...
         path('register/', register, name='register'),
     ]
    ```
Kita sudah menambahkan formulir registrasi akun dan membuat mekanisme `register`. Selanjutnya, kita akan membuat form *login* agar pengguna dapat melakukan autentikasi akun.

## Tutorial: Membuat Fungsi Login
1. Buka kembali `views.py` yang ada pada subdirektori `main`. Tambahkan _import_ `authenticate`,  `login`, dan `AuthenticationForm` pada bagian paling atas.

   ```python
   from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
   from django.contrib.auth import authenticate, login
   ```

   **Penjelasan Kode:**
   Singkatnya, fungsi `authenticate` dan `login` yang di-_import_ di atas adalah fungsi bawaan Django yang dapat digunakan untuk melakukan autentikasi dan login (jika autentikasi berhasil). Selengkapnya dapat dibaca [di sini](https://docs.djangoproject.com/en/4.2/topics/auth/default/).

2. Tambahkan fungsi `login_user` di bawah ini ke dalam `views.py`. Fungsi ini berfungsi untuk mengautentikasi pengguna yang ingin _login_.

   ```python
   def login_user(request):
      if request.method == 'POST':
         form = AuthenticationForm(data=request.POST)

         if form.is_valid():
               user = form.get_user()
               login(request, user)
               return redirect('main:show_main')

      else:
         form = AuthenticationForm(request)
      context = {'form': form}
      return render(request, 'login.html', context)
   ```

   **Penjelasan Kode:**
   - `if request.method == 'POST'` digunakan untuk memeriksa apakah pengguna mengirimkan permintaan login melalui halaman login. Jika ya, form harus divalidasi terlebih dahulu sebelum melakukan login ke sistem Django.
   - `login(request, user)` digunakan untuk melakukan proses login. Jika pengguna valid, fungsi ini akan membuat _session_ untuk pengguna yang berhasil login.
   - Blok `else:` dijalankan ketika pengguna baru mengakses halaman login. Django akan membuat objek `AuthenticationForm` berdasarkan request pengguna, lalu merendernya di halaman melalui context.

3. Buatlah berkas HTML baru dengan nama `login.html` pada direktori `main/templates`. Isi dari `login.html` dapat kamu isi dengan _template_ berikut.

   ```html
   {% extends 'base.html' %}

   {% block meta %}
   <title>Login</title>
   {% endblock meta %}

   {% block content %}
   <div class="login">
     <h1>Login</h1>

     <form method="POST" action="">
       {% csrf_token %}
       <table>
         {{ form.as_table }}
         <tr>
           <td></td>
           <td><input class="btn login_btn" type="submit" value="Login" /></td>
         </tr>
       </table>
     </form>

     {% if messages %}
     <ul>
       {% for message in messages %}
       <li>{{ message }}</li>
       {% endfor %}
     </ul>
     {% endif %} Don't have an account yet?
     <a href="{% url 'main:register' %}">Register Now</a>
   </div>

   {% endblock content %}
   ```
   ![image](/img/t3-3.png)

4. Buka `urls.py` yang ada pada subdirektori `main` dan _import_ fungsi yang sudah kamu buat tadi.

   ```python
   from main.views import login_user
   ```

5. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

   ```python
   urlpatterns = [
      ...
      path('login/', login_user, name='login'),
   ]
   ```

Kita sudah menambahkan form _login_ akun dan membuat mekanisme `login`. Selanjutnya, kita akan membuat mekanisme _logout_ dan menambahkan tombol _logout_ pada halaman _main_.
## Tutorial: Membuat Fungsi Logout
1. Buka kembali `views.py` yang ada pada subdirektori `main`. Tambahkan _import_ `logout` ini pada bagian paling atas, bersama dengan `authenticate` dan `login`.

   ```python
   from django.contrib.auth import authenticate, login, logout
   ```

2. Tambahkan fungsi di bawah ini ke dalam fungsi `views.py`. Fungsi ini berfungsi untuk melakukan mekanisme _logout_.

   ```python
   def logout_user(request):
       logout(request)
       return redirect('main:login')
   ```

   **Penjelasan Kode:**

   - `logout(request)` digunakan untuk menghapus sesi pengguna yang saat ini masuk.
   - `return redirect('main:login')` mengarahkan pengguna ke halaman login dalam aplikasi Django.

3. Bukalah berkas `main.html` yang ada pada direktori `main/templates` dan tambahkan potongan kode di bawah ini setelah _hyperlink tag_ untuk _Add News_.
   ```html
   ...
   <a href="{% url 'main:logout' %}">
     <button>Logout</button>
   </a>
   ...
   ```

   **Penjelasan Kode:**

   - `{% url 'main:logout' %}` digunakan untuk mengarah ke URL secara dinamis berdasarkan `app_name` dan `name` yang sudah didefinisikan di `urls.py`.
      Secara umum, penulisannya adalah dengan `{% url 'app_name:view_name' %}`:
      - `app_name` merupakan nama *app* yang didefinisikan di dalam berkas `urls.py`. Jika *app* menggunakan atribut `app_name` di `urls.py`, maka ini akan dipakai untuk merujuk pada *app* tersebut. Jika `app_name` tidak didefinisikan maka nama *app* yang digunakan adalah nama dari folder *app* yang dibuat.
      - `view_name` merupakan nama dari URL yang diinginkan, didefinisikan melalui parameter `name` dalam `path()` di `urls.py`.


4. Buka `urls.py` yang ada pada subdirektori `main` dan _import_ fungsi yang sudah kamu buat sebelumnya.

   ```python
   from main.views import logout_user
   ```

5. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah di-_import_ sebelumnya.

   ```python
   urlpatterns = [
      ...
      path('logout/', logout_user, name='logout'),
   ]
   ```

Kita sudah membuat mekanisme `logout` dan menyelesaikan sistem autentikasi dalam proyek ini.

## Tutorial: Merestriksi Akses Halaman Main dan News Detail
:::info
Merestriksi akses halaman tersebut berarti membatasi siapa saja yang boleh membuka halaman tersebut, misalnya hanya pengguna yang sudah login atau admin.
:::
1. Buka kembali `views.py` di subdirektori `main`. Tambahkan import `login_required` pada bagian paling atas.

    ```python
    from django.contrib.auth.decorators import login_required
    ```

    **Penjelasan Kode:**
    - Baris kode ini melakukan import decorator `login_required` dari sistem autentikasi milik Django.
    - Decorators dapat kita gunakan untuk menambahkan fungsionalitas ke suatu fungsi tanpa mengubah isi kode fungsi tersebut.
        - Penjelasan lebih lanjut tentang decorators dapat dibaca [di sini](https://www.geeksforgeeks.org/python/decorators-in-python/).


2. Tambahkan potongan kode ``@login_required(login_url='/login')`` di atas fungsi `show_main` dan `show_news` untuk mengimplementasikan decorator yang baru saja kita import.

    ```python
    ...
    @login_required(login_url='/login')
    def show_main(request):
    ...
    @login_required(login_url='/login')
    def show_news(request):
    ...
    
    ```

    **Penjelasan Kode:**
    - Baris kode tersebut mengaplikasikan decorator `login_required` untuk fungsi `show_main` dan `show_news`, sehingga halaman utama dan news detail hanya dapat diakses oleh pengguna yang sudah *login* (terautentikasi).
        - Penjelasan lebih lanjut tentang `login_required` dapat dibaca [di dokumentasi Django](https://docs.djangoproject.com/en/5.2/topics/auth/default/#the-login-required-decorator).

Setelah menambahkan pembatasan akses halaman tersebut, jalankan proyek Django dengan perintah `python manage.py runserver` dan bukalah `http://localhost:8000/` di *web browser* pilihanmu. Seharusnya halaman yang muncul bukanlah halaman *main*, namun halaman *login* apabila pengguna sedang dalam keadaan *logout*.


## Tutorial: Menggunakan Data Dari _Cookies_

1. Lakukan *logout* terlebih dahulu apabila kamu sedang menjalankan aplikasi Django.
3. Buka kembali `views.py` di subdirektori `main`. Tambahkan import `HttpResponseRedirect`, `reverse`, dan `datetime` pada bagian paling atas.

    ```python
    import datetime
    from django.http import HttpResponseRedirect
    from django.urls import reverse
    ```

3. Ubah bagian kode di fungsi `login_user` untuk menyimpan *cookie* baru bernama `last_login` yang berisi *timestamp* terakhir kali pengguna melakukan *login*. Kita dapat memperoleh ini dengan mengganti kode yang ada pada blok `if form.is_valid()` menjadi seperti berikut.

    ```python
    ...
    if form.is_valid():
        user = form.get_user()
        login(request, user)
        response = HttpResponseRedirect(reverse("main:show_main"))
        response.set_cookie('last_login', str(datetime.datetime.now()))
        return response
    ...
    ```
    
    :::warning
    Perhatikan indentasi kode kamu yang telah dimodifkasi!
    :::

    **Penjelasan Kode:**
    - `login(request, user)` berfungsi untuk melakukan *login* menggunakan sistem autentikasi Django.
    - `response = HttpResponseRedirect(reverse("main:show_main"))` akan menetapkan *redirect* ke halaman *main* setelah `response` diterima.
    - `response.set_cookie('last_login', str(datetime.datetime.now()))` berfungsi untuk mendaftarkan *cookie* `last_login` di `response` dengan isi *timestamp* terkini.
    
4. Pada fungsi `show_main`, tambahkan potongan kode `'last_login': request.COOKIES['last_login']` ke dalam variabel `context`. Berikut contoh kode yang sudah diubah.

    ```python
    context = {
        'npm' : '240123456',
        'name': 'Haru Urara',
        'class': 'PBP A',
        'news_list': news_list,
        'last_login': request.COOKIES.get('last_login', 'Never')
    }
    ```
    
    **Penjelasan Kode:**
    - Kita mengakses *cookie* yang terdaftar di `request` dengan `request.COOKIES.get('last_login', 'Never')`.
    - Method `.get()` digunakan untuk mengambil nilai cookie dengan aman - jika cookie `last_login` tidak ada atau sudah dihapus, akan mengembalikan nilai default `Never`.
    - Waktu terakhir pengguna *login* sekarang dapat ditampilkan di halaman *web* dengan mengakses *key* `last_login`.

5. Ubah fungsi `logout_user` untuk menghapus *cookie* `last_login` setelah melakukan *logout*.

    ```python
    def logout_user(request):
        logout(request)
        response = HttpResponseRedirect(reverse('main:login'))
        response.delete_cookie('last_login')
        return response
    ```
    
    **Penjelasan Kode:**
    - `response.delete_cookie('last_login')` berfungsi untuk menghapus *cookie* `last_login` dari daftar *cookies* di `response`.

6. Buka berkas `main.html` di direktori `main/templates` dan tambahkan potongan kode berikut di setelah tombol *logout* untuk menampilkan data waktu terakhir pengguna *login*.

    ```html
    ...
    <h5>Sesi terakhir login: {{ last_login }}</h5>
    ...
    ```

7. Silakan *refresh* halaman *login* (atau jalankan proyek Django-mu dengan perintah `python manage.py runserver` jika proyek Django belum dijalankan) dan cobalah untuk *login*. Data `last_login` kamu akan muncul di halaman main.

8. Jika kamu menggunakan *browser* Chromium seperti Google Chrome atau Microsoft Edge, kamu dapat melihat data *cookie* `last_login` dengan mengakses panel Developer Tools (<kbd>Ctrl + Shift + I</kbd> atau <kbd>Cmd + Option + I</kbd>) dan membuka tab `Application`.
    - Klik bagian `Cookies` di grup `Storage` dan kamu dapat melihat data *cookies* yang tersedia. Selain `last_login`, kamu juga dapat melihat data `sessionid` dan `csrftoken`. Berikut contoh tampilannya.

    ![Gambar Halaman Main beserta Data Cookie last_login](/img/t3-4.png)


9. Jika kamu melakukan *logout* dan membuka bagian riwayat *cookie*, *cookie* `last_login` yang dibuat sebelumnya akan hilang dan dibuat ulang ketika kamu *login* kembali.

:::info
Sebelum melanjutkan ke tutorial berikutnya, cobalah untuk **membuat setidaknya satu akun** di proyek Django.
:::

## Tutorial: Menghubungkan Model `News` dengan `User`

Terakhir, kita akan menghubungkan setiap objek `News` dengan pengguna yang membuatnya. Dengan begitu, setiap pengguna yang sedang login hanya dapat melihat *news* yang ia buat sendiri.

Untuk melakukan hal tersebut, ikuti langkah-langkah berikut:

1. Buka file `models.py` pada subdirektori `main`, kemudian tambahkan baris berikut di bagian import (bersama dengan import lain yang sudah ada):
    ```python
    ...
    from django.contrib.auth.models import User
    ...
    ```
2. Pada model `News` yang sudah dibuat, tambahkan potongan kode berikut:
    ```python
    class News(models.Model):
         user = models.ForeignKey(User, on_delete=models.CASCADE, null=True) # tambahkan ini
    ...
    ```
    
    **Penjelasan Kode:**
    - Potongan kode di atas berfungsi untuk menghubungkan satu *news* dengan satu user melalui sebuah relationship
    - Setiap *news* dapat terasosiasi dengan seorang user (many-to-one relationship)
    - `null=True` memungkinkan news yang sudah ada sebelumnya tetap valid tanpa harus memiliki user
    - `on_delete=models.CASCADE` berarti jika user dihapus, semua news milik user tersebut juga akan ikut terhapus

    :::success
    💡 **TIPS**
    Kamu akan mempelajari lebih lanjut terkait `ForeignKey` pada mata kuliah Basis Data.  
    Penjelasan lebih lanjut terkait `ForeignKey` pada Django dapat dibaca [di sini](https://docs.djangoproject.com/en/4.2/topics/db/examples/many_to_one/).
    :::

3. Buat file migrasi model dengan `python manage.py makemigrations`. Selanjutnya jalankan migrasi model dengan `python manage.py migrate`. 
    :::success
    💡 **Reminder**
    Setiap kali kamu melakukan perubahan pada model, seperti menambahkan atau mengubah atribut, kamu WAJIB melakukan migrasi untuk merefleksikan perubahan tersebut.
    :::
4. Buka kembali `views.py` yang ada pada subdirektori `main`, dan ubah potongan kode pada fungsi `create_news` menjadi sebagai berikut:
    ```python
    def create_news(request):
        form = NewsForm(request.POST or None)

        if form.is_valid() and request.method == 'POST':
            news_entry = form.save(commit = False)
            news_entry.user = request.user
            news_entry.save()
            return redirect('main:show_main')

        context = {
            'form': form
        }

        return render(request, "create_news.html", context)
    ```

    **Penjelasan Kode:**

    - Parameter `commit=False` pada potongan kode di atas digunakan agar Django tidak langsung menyimpan objek hasil form ke database. Dengan begitu, kita memiliki kesempatan untuk memodifikasi objek tersebut terlebih dahulu sebelum disimpan.
    - Pada kasus ini, kita memanfaatkan kesempatan tersebut untuk mengisi field `user` dengan nilai `request.user`, yaitu pengguna yang sedang login. Dengan cara ini, setiap objek yang dibuat akan secara otomatis terhubung dengan pengguna yang membuatnya.
    
4. Modifikasi fungsi `show_main` sehingga bentuk akhirnya menjadi seperti berikut:
    ```python
    ...
    @login_required(login_url='/login')
    def show_main(request):
    filter_type = request.GET.get("filter", "all")  # default 'all'

    if filter_type == "all":
        news_list = News.objects.all()
    else:
        news_list = News.objects.filter(user=request.user)

    context = {
        'npm': '240123456',
        'name': request.user.username,
        'class': 'PBP A',
        'news_list': news_list,
        'last_login': request.COOKIES.get('last_login', 'Never')
    }
    return render(request, "main.html",context)
    ...
    ```
    **Penjelasan Kode:**
 

    * Fungsi `show_main` menampilkan halaman utama setelah user login dan dilengkapi dengan **filter artikel** berdasarkan penulis. Filter ini diambil dari query parameter `filter` pada URL, dengan dua opsi: `"my"` untuk menampilkan hanya artikel yang ditulis oleh user yang sedang login, dan `"all"` untuk menampilkan semua artikel. 
    * Selain itu, informasi user seperti `name` diambil langsung dari **username** user yang sedang login.
    
5. Tambahkan tombol filter My dan All pada halaman `main.html`
    ```html
    {% extends 'base.html' %}
    {% block content %}
    <h1>Football News</h1>

    <h5>NPM: </h5>
    <p>{{ npm }}</p>

    <h5>Name:</h5>
    <p>{{ name }}</p>

    <h5>Class:</h5>
    <p>{{ class }}</p>


    <a href="{% url 'main:create_news' %}">
      <button>+ Add News</button>
    </a>
    <a href="{% url 'main:logout' %}">
      <button>Logout</button>
    </a>
    <h5>Sesi terakhir login: {{ last_login }}</h5>
    <hr>
    <!-- Tambahkan kode ini -->
    <a href="?filter=all">
        <button type="button">All Articles</button>
    </a>
    <a href="?filter=my">
        <button type="button">My Articles</button>
    </a> 
    ...
    ```
    ![image](/img/t3-5.png)


6. Kemudian tampilkan nama author di`news_detail.html`
    ```html
    {% extends 'base.html' %}
    {% block content %}
    <p><a href="{% url 'main:show_main' %}"><button>← Back to News List</button></a></p>

    <h1>{{ news.title }}</h1>
    <p><b>{{ news.get_category_display }}</b>{% if news.is_featured %} | 
        <b>Featured</b>{% endif %}{% if news.is_news_hot %} | 
        <b>Hot</b>{% endif %} | <i>{{ news.created_at|date:"d M Y, H:i" }}</i> 
        | Views: {{ news.news_views }}</p>

    {% if news.thumbnail %}
    <img src="{{ news.thumbnail }}" alt="News thumbnail" width="300">
    <br /><br />
    {% endif %}

    <p>{{ news.content }}</p>

    <!-- Tambahkan kode ini -->
    {% if news.user %}
        <p>Author: {{ news.user.username }}</p>
    {% else %}
        <p>Author: Anonymous</p>
    {% endif %}

    {% endblock content %}
    ```
    ![image](/img/t3-6.png)

    Informasi author merefleksikan pembuat artikel, bukan user yang sedang login. Silakan coba menggunakan dua akun berbeda untuk memastikan.
    
7. Jalankan proyek Django-mu dengan perintah python `manage.py runserver` dan bukalah http://localhost:8000/ di browser favoritmu untuk melihat hasilnya. Cobalah untuk membuat akun baru dan login dengan akun yang baru dibuat. Amatilah halaman utama, `news` yang tadi telah dibuat dengan akun sebelumnya tidak akan ditampilkan di halaman pengguna akun yang baru saja kamu buat. Hal tersebut berarti kamu sudah berhasil menghubungkan objek `News` dengan `User` yang membuatnya.

    
## Tutorial: Pengenalan Selenium (OPSIONAL)
Selenium adalah sebuah alat gratis yang digunakan untuk mengotomatisasi web browser. Dengan Selenium, kita bisa menulis program yang mampu **mengendalikan browser seolah-olah sedang digunakan manusia**, misalnya untuk mengklik tombol, mengisi formulir, berpindah halaman, hingga mengambil data dari sebuah website. Kelebihan Selenium adalah dapat digunakan di berbagai browser besar seperti Chrome, Firefox, Edge, dan Safari tanpa harus banyak mengubah kode, karena mengikuti standar resmi W3C WebDriver.

### Apa itu webdriver?
WebDriver adalah komponen utama di Selenium yang berfungsi sebagai “**jembatan**” antara kode program yang kita tulis dengan browser yang kita kendalikan. Dengan kata lain, WebDriver memungkinkan kode berkomunikasi dengan browser sehingga proses otomatisasi dapat berjalan secara nyata.

### Contoh Penggunaan Selenium WebDriver

Kode berikut adalah cara sederhana menggunakan **Selenium WebDriver** untuk membuka browser Chrome, mengunjungi sebuah halaman, lalu menutup browser.

```python
from selenium import webdriver

# Membuat instance WebDriver untuk Chrome
driver = webdriver.Chrome()

# Membuka halaman web selenium.dev
driver.get("http://selenium.dev")

# Menutup browser setelah selesai
driver.quit()
```
Berbeda dengan unit test yang menguji fungsi secara individual, Selenium digunakan untuk **functional testing** - yaitu menguji aplikasi web seperti yang dilakukan pengguna sebenarnya.

Selenium dapat melakukan:
- Membuka halaman web
- Mengklik tombol atau link
- Mengisi form kemudian submit
- Berpindah antar halaman
- Memverifikasi tampilan yang muncul

Dengan demikian, kita dapat menguji **keseluruhan alur aplikasi** dari awal hingga akhir. Frontend, backend, dan database dapat diuji secara bersamaan, bukan hanya satu komponen saja.

### Membuat Functional Test di Django
1. Tambahkan `selenium` ke `requirements.txt`. Selanjutnya jalankan `pip install -r requirements.txt`.
2. Buka `tests.py` di direktori `main` dan tambahkan import sebagai berikut:
    ```python
    from django.test import TestCase, Client
    from .models import News
    from django.test import LiveServerTestCase
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.support.ui import Select
    from django.contrib.auth.models import User
    ```

3. Selanjutnya buat kelas test `FootballNewsFunctionalTest` sebagai berikut setelah blok kode`MainTest`:

    ```python
    class FootballNewsFunctionalTest(LiveServerTestCase):
        @classmethod
        def setUpClass(cls):
            super().setUpClass()
            # Create single browser instance for all tests
            cls.browser = webdriver.Chrome()

        @classmethod
        def tearDownClass(cls):
            super().tearDownClass()
            # Close browser after all tests complete
            cls.browser.quit()

        def setUp(self):
            # Create user for testing
            self.test_user = User.objects.create_user(
                username='testadmin',
                password='testpassword'
            )

        def tearDown(self):
            # Clean up browser state between tests
            self.browser.delete_all_cookies()
            self.browser.execute_script("window.localStorage.clear();")
            self.browser.execute_script("window.sessionStorage.clear();")
            # Navigate to blank page to reset state
            self.browser.get("about:blank")

        def login_user(self):
            """Helper method to login user"""
            self.browser.get(f"{self.live_server_url}/login/")
            username_input = self.browser.find_element(By.NAME, "username")
            password_input = self.browser.find_element(By.NAME, "password")
            username_input.send_keys("testadmin")
            password_input.send_keys("testpassword")
            password_input.submit()

        def test_login_page(self):
            # Test login functionality
            self.login_user()

            # Check if login is successful
            wait = WebDriverWait(self.browser, 120)
            wait.until(EC.presence_of_element_located((By.TAG_NAME, "h1")))
            h1_element = self.browser.find_element(By.TAG_NAME, "h1")
            self.assertEqual(h1_element.text, "Football News")

            logout_link = self.browser.find_element(By.PARTIAL_LINK_TEXT, "Logout")
            self.assertTrue(logout_link.is_displayed())

        def test_register_page(self):
            # Test register functionality
            self.browser.get(f"{self.live_server_url}/register/")

            # Check if register page opens
            h1_element = self.browser.find_element(By.TAG_NAME, "h1")
            self.assertEqual(h1_element.text, "Register")

            # Fill register form
            username_input = self.browser.find_element(By.NAME, "username")
            password1_input = self.browser.find_element(By.NAME, "password1")
            password2_input = self.browser.find_element(By.NAME, "password2")

            username_input.send_keys("newuser")
            password1_input.send_keys("complexpass123")
            password2_input.send_keys("complexpass123")
            password2_input.submit()

            # Check redirect to login page
            wait = WebDriverWait(self.browser, 120)
            wait.until(EC.text_to_be_present_in_element((By.TAG_NAME, "h1"), "Login"))
            login_h1 = self.browser.find_element(By.TAG_NAME, "h1")
            self.assertEqual(login_h1.text, "Login")

        def test_create_news(self):
            # Test create news functionality (requires login)
            self.login_user()

            # Go to create news page
            add_button = self.browser.find_element(By.PARTIAL_LINK_TEXT, "Add News")
            add_button.click()

            # Fill form
            title_input = self.browser.find_element(By.NAME, "title")
            content_input = self.browser.find_element(By.NAME, "content")
            category_select = self.browser.find_element(By.NAME, "category")
            thumbnail_input = self.browser.find_element(By.NAME, "thumbnail")
            is_featured_checkbox = self.browser.find_element(By.NAME, "is_featured")

            title_input.send_keys("Test News Title")
            content_input.send_keys("Test news content for selenium testing")
            thumbnail_input.send_keys("https://example.com/image.jpg")

            # Set category (select 'match' from dropdown)

            select = Select(category_select)
            select.select_by_value("match")

            # Check is_featured checkbox
            is_featured_checkbox.click()

            # Submit form
            title_input.submit()

            # Check if returned to main page and news appears
            wait = WebDriverWait(self.browser, 120)
            wait.until(EC.text_to_be_present_in_element((By.TAG_NAME, "h1"), "Football News"))
            h1_element = self.browser.find_element(By.TAG_NAME, "h1")
            self.assertEqual(h1_element.text, "Football News")

            # Check if news title appears on page
            wait.until(EC.element_to_be_clickable((By.PARTIAL_LINK_TEXT, "Test News Title")))
            news_title = self.browser.find_element(By.PARTIAL_LINK_TEXT, "Test News Title")
            self.assertTrue(news_title.is_displayed())

        def test_news_detail(self):
            # Test news detail page

            # Login first because of @login_required decorator
            self.login_user()

            # Create news for testing
            news = News.objects.create(
                title="Detail Test News",
                content="Content for detail testing",
                user=self.test_user
            )

            # Open news detail page
            self.browser.get(f"{self.live_server_url}/news/{news.id}/")

            # Check if detail page opens correctly
            self.assertIn("Detail Test News", self.browser.page_source)
            self.assertIn("Content for detail testing", self.browser.page_source)

        def test_logout(self):
            # Test logout functionality
            self.login_user()

            # Click logout button - text is inside button, not link
            logout_button = self.browser.find_element(By.XPATH, "//button[contains(text(), 'Logout')]")
            logout_button.click()

            # Check if redirected to login page
            wait = WebDriverWait(self.browser, 120)
            wait.until(EC.text_to_be_present_in_element((By.TAG_NAME, "h1"), "Login"))
            h1_element = self.browser.find_element(By.TAG_NAME, "h1")
            self.assertEqual(h1_element.text, "Login")

        def test_filter_main_page(self):
            # Test filter functionality on main page
            #         
            # Create news for testing
            News.objects.create(
                title="My Test News",
                content="My news content",
                user=self.test_user
            )
            News.objects.create(
                title="Other User News", 
                content="Other content",
                user=self.test_user  # Same user for simplicity
            )

            self.login_user()

            # Test filter "All Articles"
            wait = WebDriverWait(self.browser, 120)
            wait.until(EC.element_to_be_clickable((By.PARTIAL_LINK_TEXT, "All Articles")))
            all_button = self.browser.find_element(By.PARTIAL_LINK_TEXT, "All Articles")
            all_button.click()
            self.assertIn("My Test News", self.browser.page_source)
            self.assertIn("Other User News", self.browser.page_source)

            # Test filter "My Articles"  
            my_button = self.browser.find_element(By.PARTIAL_LINK_TEXT, "My Articles")
            my_button.click()
            self.assertIn("My Test News", self.browser.page_source)
    ```

4. Selanjutnya, jalankan functional test tersebut `python manage.py test main.tests.FootballNewsFunctionalTest`.
![image](/img/t3-7.png)



Dan voila!! kamu sudah berhasil menggunakan **Selenium** dalam website mu 🎉.

:::info
**Perhatian**: Selenium functional test dapat mengalami **flaky behavior** (hasil tidak konsisten) karena faktor resource usage dan network latency. Jika test terkadang gagal tanpa perubahan kode, coba jalankan ulang beberapa kali.
:::


## Akhir Kata
Selamat! Kamu telah menyelesaikan Tutorial 3 dengan baik. 😄

Setelah kamu menyelesaikan seluruh tutorial di atas, harapannya Kamu sekarang lebih paham tentang penggunaan _form_, autentikasi, _session_, dan _cookie_ pada _framework_ Django.

1. Setelah menyelesaikan tutorial ini, tampilan halaman web kamu seharusnya terlihat seperti ini.
   - Tampilan halaman Login
   ![image](/img/t3-8.png)
   - Tampilan halaman register
   ![image](/img/t3-9.png)

   - Tampilan halaman main setelah berhasil Login
   ![After Login](/img/t3-10.png)
   - Tampilan halaman news detail
   ![image](/img/t3-11.png)



      
2. Pada akhir tutorial ini, struktur pada lokalmu terlihat seperti ini.

    ![Struktur akhir](/img/t3-12.png)

   

3. Sebelum melakukan langkah ini, **pastikan struktur direktori lokal sudah benar**. Selanjunya, lakukan `add`, `commit` dan `push` untuk memperbarui repositori GitHub.

4. Jalankan perintah berikut untuk melakukan `add`, `commit` dan `push` ke GitHub dan PWS.

   ```shell
   git add .
   git commit -m "<pesan_commit>"
   git push origin master
   git push pws master
   ```

   - Ubah `<pesan_commit>` sesuai dengan keinginan. Contoh: `git commit -m "tutorial 3 selesai"`.
:::danger
Saat menuliskan komentar pada commit, pastikan komentar tersebut **jelas, ringkas, dan formal**. Dengan begitu, developer lain dapat dengan mudah memahami maksud dan perubahan yang kamu lakukan di commit tersebut.
:::


## Referensi Tambahan
- [Session & Cookies](https://www.youtube.com/watch?v=64veb6tKTm0&t=10s)
- [Cookies History](https://www.youtube.com/watch?v=I01XMRo2ESg)
- [Cookies vs. Local Storage vs. Session](https://www.youtube.com/watch?v=AwicscsvGLg)
- [Selenium Documentation](https://www.selenium.dev/documentation/)

## Kontributor

- Marla Marlena (NDF)
- Farrell Zidane Raihandrawan (REL)
- Ezar Akhdan (EZR)
- Nevin Thang (FDN)
- Muhammad Milian Alkindi (MMA)
- Grace Karina (GAE)

## Credits

Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2025](https://github.com/pbp-fasilkom-ui/ganjil-2025) dan [PBP Ganjil 2024](https://github.com/pbp-fasilkom-ui/ganjil-2024) yang ditulis oleh Tim Pengajar dan Asisten Dosen Pemrograman Berbasis Platform 2025 dan 2024. Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.
