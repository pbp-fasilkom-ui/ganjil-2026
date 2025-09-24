---
sidebar_label: Tutorial 4
sidebar_position: 6
Path: docs/tutorial-4
---

# Tutorial 4: Desain Web Menggunakan HTML dan CSS3 & Metode Update dan Delete pada Data

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2025/2026

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:

- Memahami susunan tag pada HTML5
- Mengetahui berbagai jenis tag HTML5
- Memahami sintaks penulisan CSS
- Pengenalan framework CSS, yaitu Bootstrap dan Tailwind
- Memahami konsep _static files_ pada Django
- Memahami penggunaan _selector_ pada CSS
- Memahami implementasi _update_ dan _delete_ pada Django
- Melakukan _styling_ Django dengan Tailwind



## Pengenalan HTML

HyperText Markup Language (HTML) adalah bahasa _markup_ standar untuk dokumen agar dapat ditampilkan dalam _browser_ web. HTML mendefinisikan struktur dari konten suatu _website_.

Silakan melakukan eksplorasi mandiri mengenai HTML pada referensi [berikut](https://www.w3schools.com/html/default.asp).

Perbedaan antara HTML dan HTML5 dapat dibaca pada referensi [berikut](https://www.geeksforgeeks.org/difference-between-html-and-html5/).

## Pengenalan CSS

### Apa itu CSS?

Cascading Style Sheets (CSS) adalah bahasa yang digunakan untuk mendeskripsikan tampilan dan format dari sebuah situs web yang ditulis pada _markup language_ (seperti HTML). CSS berguna untuk membuat tampilan situs web menjadi lebih menarik.

Untuk mempelajari perbedaan antara CSS dan CSS3 dapat dibaca pada referensi [berikut](https://www.geeksforgeeks.org/difference-between-css-and-css3/).

### Cara Penulisan CSS

Secara umum, CSS dapat dituliskan dalam bentuk sebagai berikut.

```css
selector {
  properties: value;
}
```

Silakan melakukan eksplorasi mandiri terkait CSS pada referensi [berikut](https://www.w3schools.com/css/).

Terdapat tiga jenis cara penulisan CSS:

1. **_Inline Styles_**
2. **_Internal Style Sheet_**
3. **_External Style Sheet_**

Silakan melakukan eksplorasi mandiri tentang ketiga jenis CSS tersebut pada referensi [berikut](https://www.geeksforgeeks.org/types-of-css-cascading-style-sheet/).

Perlu diperhatikan, jika kamu membuat jenis _External Style Sheet_, kamu perlu menambahkan _tag_ `{% load static %}` pada halaman HTML kamu. Contohnya seperti potongan kode di bawah ini.

```html
{% load static %}
<html>
  <head>
    <title>Penggunaan External Style Sheet</title>
    <link rel="stylesheet" href="{% static 'style.css' %}" />
  </head>
  <body>
    <div>
      <h1>CSS itu asik! :D</h1>
    </div>
    <div id="main">
      <div>
        <p>Ini Tutorial 4</p>
        <h1><a href="">Mantap</a></h1>
        <p>Tutorial yang ez</p>
      </div>
    </div>
  </body>
</html>
```

Hal ini dapat terjadi karena CSS merupakan _static files_ di Django. _Static files_ akan dijelaskan pada bagian selanjutnya.

### Catatan Tambahan

Jika terdapat lebih dari satu _style_ yang didefinisikan untuk suatu elemen, maka _style_ yang akan diterapkan adalah yang memiliki prioritas yang lebih tinggi. Berikut ini urutan prioritasnya, nomor 1 yang memiliki prioritas paling tinggi.

1. _Inline style_
2. _External_ dan internal _style sheets_
3. _Browser default_

## *Static files* pada Django

Pada _framework_ Django, terdapat _file-file_ yang disebut dengan _static files_. _Static files_ merupakan _file-file_ pendukung HTML pada suatu situs web. Contoh _static files_ adalah CSS, JavaScript, dan gambar. 

Pengaturan untuk _static files_ terletak pada _file_ **`settings.py`**:

```html 
...
# Static files (CSS, JavaScript, Images)
# Dokumentasi: https://docs.djangoproject.com/en/5.1/howto/static-files/
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'
...
```
Pada `settings.py`, terdapat:

- `STATIC_ROOT` yang menentukan _absolute path_ ke direktori _static files_ ketika menjalankan perintah `collectstatic` pada proyek. `STATIC_ROOT` ini nantinya berguna untuk melakukan menyediakan *path* konten statis pada akses production (`DEBUG=False` pada `settings.py`)
- `STATIC_URL` yang merupakan URL yang dapat diakses publik untuk memperoleh _static files_ tersebut. Contohnya: `http://localhost:8000/static/image/example-image.png`

Perintah `collectstatic` adalah perintah untuk mengumpulkan _static files_ dari semua _app_ sehingga mempermudah akses untuk semua _app_.

Penjelasan lebih lengkap mengenai static files dapat kamu baca pada referensi [berikut](https://docs.djangoproject.com/en/5.1/ref/contrib/staticfiles/).

## _Selector_ pada CSS

Pada tutorial ini, kita akan mengenak tiga jenis _selector_: **_Element Selector_**, **ID _Selector_**, dan **_Class Selector_**.

1. **_Element Selector_**

    _Element Selector_ memungkinkan kita mengubah properti untuk semua elemen yang memiliki tag HTML yang sama.
    
    Contoh penggunaan _Element Selector_:
    ```html 
    <body>
      <div>
        <h1>Aku h1 ges</h1>
        <h2>Aku h2 ges, beda sama h1 :D</h2>
      </div>
      ...
    </body>
    ```
    
    Kita dapat menggunakan _element_ sebagai _selector_ dalam **_file_ CSS**. _Element selector_ menggunakan format *[id_name]* (tanpa diawali oleh sebuah simbol)
    
    ```html 
    h1 {
      color: #5bc933;
      font-family: "Times New Roman";
      font-style: normal;
    }
    ```
2. **ID _Selector_**

    ID _selector_ menggunakan ID pada _tag_ sebagai _selector_-nya. ID bersifat unik dalam satu halaman web. ID dapat ditambahkan pada halaman template HTML.
    
    Contoh penggunaan ID _Selector_ pada **_template_ HTML**:
    
    ```html 
    <body>
      <div id="header">
        <h1>Bermain bersama ID header</h1>
      </div>
      ...
    </body>
    ```
    
    Kemudian, kita dapat menggunakan ID tersebut sebagai _selector_ dalam **_file_ CSS**. ID _selector_ menggunakan format *#[id_name]* (selalu diawali #)
    ```html 
    #header {
      background-color: #a3b90e;
      margin-top: 0;
      padding: 20px 20px 20px 40px;
    }
    ```
    
3. **_Class Selector_**
    
    _Class Selector_ memungkinkan kita untuk mengelompokkan elemen dengan karakteristik yang sama.
    
    Contoh penggunaan _Class Selector_ pada **_template_ HTML**:
    
    ```html
    ...
    <div id="main">
        <div class="parent_content">
            <p class="date">Tanggal 9 September 2024</p>
            <h2><a href="">Subjek: Keseruan PBP</a></h2>
            <p id="content_1">Materi PBP sangat seru!</p>
        </div>
        <div class="parent_content">
            <p class="date">Tanggal 10 September 2024</p>
            <h2><a href="">Subjek: Review PBP</a></h2>
            <p id="content_2">Biar lebih gacor aku review materi PBP</p>
        </div>
        <div class="parent_content">
            <p class="date">Tanggal 11 September 2024</p>
            <h2><a href="">Subjek: Ikut Tutorial PBP</a></h2>
            <p id="content_3">Tutorial PBP sangat seru!</p>
        </div>
    </div>
    ...
    ```
    
    Kemudian, kita dapat menggunakan _Class_ tersebut sebagai _selector_ dalam **_file_ CSS**. _Class selector_ menggunakan format *.[class_name]* (diawali .)
    
    ```html
    .content_section {
      background-color: #112a33;
      margin-bottom: 30px;
      color: #0F0F0F;
      font-family: cursive;
      padding: 20px 20px 20px 40px;
    }
    ```
    
Untuk lebih memahami terkait CSS _Selector Reference_, kamu dapat membaca referensi [berikut](https://www.w3schools.com/cssref/css_selectors.php).

## Tips & trik CSS

### Mengenal _Combinator_ pada CSS
_Combinator_ dalam CSS menghubungkan dua atau lebih _selector_ untuk merincikan lebih lanjut elemen-elemen yang di-*select*.

Terdapat empat *combinators* pada CSS. Berikut ringkasan pemakaiannya: 
    
| *Combinator* | Contoh pemakaian | Penjelasan contoh |
| -------- | -------- | -------- |
| Descendant selector (space) | `div p`     | Menyeleksi semua elemen `p` yang merupakan keturunan dari elemen `div` |
| Child selector (>) | `div > p`     | Menyeleksi semua elemen `p` yang merupakan anak dari elemen `div` |
| Adjacent sibling selector (+) | `div + p` | Menyeleksi elemen `p` pertama yang berada tepat setelah elemen `div` (harus memiliki elemen induk yang sama) |
| General sibling selector (~) | `div ~ p` | Menyeleksi semua elemen `p` yang sejajar dan berada setelah elemen `div` |

Silakan melakukan eksplorasi mandiri mengenai *combinator*  melalui [referensi berikut](https://www.w3schools.com/css/css_combinators.asp).

### Mengenal *Pseudo-class* pada CSS
*Pseudo-class* digunakan untuk mendefinisikan *state* khusus dari suatu elemen. Sintaks pemakaian *pseudo-class* adalah sebagai berikut:

```css
selector:pseudo-class {
  property: value;
}
```


Beberapa contoh *pseudo-class*:
| Pseudo-class | Mengaplikasikan *style* pada .. |
| -------- | -------- |
| `:link` | tautan yang belum pernah dikunjungi |
| `:visited` | tautan yang sudah pernah dikunjungi |
| `:hover` | saat pengguna mengarahkan kursor di atas elemen tersebut |
| `:active` | saat elemen diaktifkan (biasanya saat pengguna mengklik elemen tersebut) |
| `:focus` | saat elemen fokus (seperti saat pengguna mengklik *input field*) |
| `:checked` | elemen yang telah dicentang |
| `:disabled` | elemen yang telah dibuat tidak responsif (misalnya tombol yang tidak bisa diklik) |

Silakan melakukan eksplorasi mandiri terkait *pseudo-class*  melalui [referensi ini](https://www.w3schools.com/css/css_pseudo_classes.asp).

### Mengenal Box Model pada CSS

![image](/img/t4-1.png)

*Box model* pada CSS pada dasarnya merupakan suatu *box* yang membungkus setiap elemen HTML dan terdiri atas:

* *Content*: isi dari *box* (tempat terlihatnya teks dan gambar)
* *Padding*: mengosongkan area di sekitar konten (transparan)
* *Border*: garis tepian yang membungkus konten dan *padding*-nya
* *Margin*: mengosongkan area di sekitar *border* (transparan)

Silakan melakukan eksplorasi mandiri terkait *margin*, *border*, dan *padding* melalui [referensi berikut](https://w3schools.com/css/css_boxmodel.asp).

## Pengenalan Bootstrap & Tailwind

Pada bidang pengembangan web, terdapat banyak *framework* CSS yang sering digunakkan. Fungsi sebuah *framework* adalah untuk mempermudah pekerjaan *programmer* pada saat mengerjakan pekerjaan mereka. *Framework* CSS yang populer saat ini adalah **Bootstrap** dan juga **Tailwind**. Kedua *framework* ini memberikan banyak kelebihan dibandingkan CSS yang biasa kita gunakan. Berikut adalah kelebihan-kelebihan penggunaan *framework* yang diperoleh dibandingkan CSS biasa:

1. Proses Pengembangan Lebih Cepat: *Framework* seperti Bootstrap menyediakan komponen siap pakai sehingga tanpa harus menulis kode CSS dari awal. 
2. Responsif secara Bawaan: *Framework* seperti Bootstrap dan Tailwind telah dirancang dengan responsif.
3. Kustomisasi Mudah: Tailwind memungkinkan kustomisasi yang mendalam. Sementara itu, Bootstrap juga menawarkan opsi kustomisasi tetapi dengan pendekatan yang lebih terbatas.
4. Skalabilitas Besar: *Framework* CSS memberikan struktur yang baik untuk proyek yang berkembang seiring waktu. 

Bootstrap dan Tailwind tentu saja sebagai *framework* memiliki perbedaan yang signifikan antara satu sama lain, yaitu:


| Tailwind | Bootstrap |
| -------- | --------- |
| Tailwind CSS membangun tampilan dengan menggabungkan kelas-kelas utilitas yang telah didefinisikan sebelumnya.     | Bootstrap menggunakan gaya dan komponen yang telah didefinisikan, yang memiliki tampilan yang sudah jadi dan dapat digunakan secara langsung.      |
| Tailwind CSS memiliki _file_ CSS yang lebih kecil sedikit dibandingkan Bootstrap dan hanya akan memuat kelas-kelas utilitas yang ada | Bootstrap memiliki _file_ CSS yang lebih besar dibandingkan dengan Tailwind CSS karena termasuk banyak komponen yang telah didefinisikan. |
| Tailwind CSS memiliki memberikan fleksibilitas dan adaptabilitas tinggi terhadap proyek | Bootstrap sering kali menghasilkan tampilan yang lebih konsisten di seluruh proyek karena menggunakan komponen yang telah didefinisikan. |
| Tailwind CSS memiliki pembelajaran yang lebih curam karena memerlukan pemahaman terhadap kelas-kelas utilitas yang tersedia dan bagaimana menggabungkannya untuk mencapai tampilan yang diinginkan. | Bootstrap memiliki pembelajaran yang lebih cepat untuk pemula karena dapat mulai dengan komponen yang telah didefinisikan. |

## Responsive Web Design

*Responsive web design* merupakan metode sistem desain web yang memiliki tujuan untuk menghasilkan tampilan web yang terlihat baik pada seluruh perangkat seperti *desktop*, *tablet*, *mobile*, dan sebagainya. *Responsive web design* tidak mengubah isi dari situs web, tetapi hanya mengubah tampilan dan penataan pada setiap perangkat agar sesuai dengan lebar layar dan kemampuan perangkat tersebut. Dalam *responsive web design* tampilan-tampilan tertentu membutuhkan bantuan CSS (seperti mengecilkan atau membesarkan) suatu elemen. 

Salah satu cara untuk menguji apakah suatu situs web menggunakan *responsive web design* adalah dengan mengakses situs web tersebut dan mengaktifkan fitur `Toggle Device Mode` pada *browser*. Fitur ini memungkinkan kamu untuk melihat bagaimana situs web tersebut ditampilkan pada berbagai perangkat, seperti komputer, tablet, atau *smartphone*, tanpa harus mengubah ukuran jendela *browser*. 

Berikut adalah cara untuk mengakses fitur tersebut pada *browser* **Google Chrome**.
* Windows/Linux: Tekan `CTRL + SHIFT + I` untuk membuka Dev Tools, lalu tekan `CTRL + SHIFT + M` untuk mengaktifkan `Toggle Device Mode`.
* Mac : `Command + Shift + M`
 
Cara lain yang lebih praktis adalah dengan melakukan klik kanan pada *browser* dan memilih *Inspect Element/Inspect* untuk membuka *Dev Tools* yang berguna.

Untuk mempelajari lebih lengkap mengenai *Reponsive Web Design*, kamu dapat membuka referensi [ini](https://web.dev/responsive-web-design-basics/).

## Tutorial: Menambahkan Tailwind ke Aplikasi
Pada tutorial ini, kita akan berfokus menggunakan Tailwind dalam melakukan styling terhadap aplikasi Django kita.

1. Buka project Django kalian **(football-news)**, lalu buka _file_ `base.html` yang telah dibuat sebelumnya pada templates folder yang berada di root project kalian. 

2. Didalam `templates/base.html`, tambahkan tag `<meta name="viewport">` agar halaman web kamu dapat menyesuaikan ukuran dan perilaku perangkat mobile **(apabila belum)**.

    ```html
    <head>
        {% block meta %}
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
        {% endblock meta %}
    </head>
    ```

3. Untuk menyambungkan template django dengan taiwind, kita dapat memanfaatkan script CDN (*Content Delivery Network*) dari Tailwind untuk diletakkan di dalam html template Django kita. Di `base.html`, kamu perlu menambahkan script cdn tailwind di bagian head. 

    ```html
    <head>
    {% block meta %}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    {% endblock meta %}
    <script src="https://cdn.tailwindcss.com">
    </script>
    </head>
    ```

## Tutorial: Menambahkan Bootstrap ke Aplikasi (Skip jika Memilih Tailwind)
:::warning 
***Penting***: Jika kamu memilih Bootstrap, kamu harus *skip* tutorial Tailwind karena dapat terjadi konflik kelas CSS jika digabungkan dengan Bootstrap.
:::

1. Buka project Django kalian **(football-news)**, lalu buka _file_ `base.html` yang telah dibuat sebelumnya pada templates folder yang berada di root project kalian. 

2. Didalam `templates/base.html`, tambahkan tag `<meta name="viewport">` agar halaman web kamu dapat menyesuaikan ukuran dan perilaku perangkat mobile **(apabila belum)**.

    ```html
    <head>
        {% block meta %}
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
        {% endblock meta %}
    </head>
    ```

3. Tambahkan Bootstrap CSS dan juga JS. 

    **CSS:**
    ```html
    <head>
        {% block meta %}
            ...
        {% endblock meta %}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>
    ```

    **JS:**
    ```html
    <head>
        ...
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha384-KyZXEAg3QhqLMpG8r+J4jsl5c9zdLKaUk5Ae5f5b1bw6AUn5f5v8FZJoMxm6f5cH1" crossorigin="anonymous"></script>
    </head>
    ```


4. **(Opsional)** Apabila kalian ingin menggunakan dropdowns, popover, tooltips yang disediakan framework Bootstrap, maka kalian perlu menambahkan 2 baris *script* JS ini dibawah *script* JS yang sudah kalian buat sebelumnya.

    ```html
    <head>
        ...
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    </head>
    ```

## Tutorial: Menambahkan Fitur *Edit News* pada Aplikasi

Berikut ini hal-hal yang perlu kamu lakukan untuk menambahkan fitur mengubah data *news*:

1. Buka `views.py` yang ada pada subdirektori `main`, dan buatlah fungsi baru bernama `edit_news` yang menerima parameter `request` dan `id` seperti berikut.

    ```python
    def edit_news(request, id):
        news = get_object_or_404(News, pk=id)
        form = NewsForm(request.POST or None, instance=news)
        if form.is_valid() and request.method == 'POST':
            form.save()
            return redirect('main:show_main')

        context = {
            'form': form
        }

        return render(request, "edit_news.html", context)
    ```

3. Buatlah berkas HTML baru dengan nama `edit_news.html` pada subdirektori `main/templates`. Isi berkas tersebut dengan template berikut.

    ```html 
    {% extends 'base.html' %}

    {% load static %}

    {% block content %}

    <h1>Edit News</h1>

    <form method="POST">
        {% csrf_token %}
        <table>
            {{ form.as_table }}
            <tr>
                <td></td>
                <td>
                    <input type="submit" value="Edit News"/>
                </td>
            </tr>
        </table>
    </form>

    {% endblock %}
    ```

4. Buka `urls.py` yang berada pada direktori `main` dan *import* fungsi `edit_news` yang sudah dibuat.

    ```python
    from main.views import edit_news
    ```

5. Tambahkan *path* url ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python 
    ...
    path('news/<uuid:id>/edit', edit_news, name='edit_news'),
    ...
    ```

6. Buka `main.html` yang berada pada subdirektori `main/templates`. Pada loop `news_list`, perbarui potongan kode berikut untuk memunculkan tombol *edit* pada setiap artikel berita.
     ```html
    ...
    {% for news in news_list %}
    <div>
     <h2><a href="{% url 'main:show_news' news.id %}">{{ news.title }}</a></h2>

     <p><b>{{ news.get_category_display }}</b>{% if news.is_featured %} | 
       <b>Featured</b>{% endif %}{% if news.is_news_hot %} | 
       <b>Hot</b>{% endif %} | <i>{{ news.created_at|date:"d M Y H:i" }}</i> 
       | Views: {{ news.news_views }}</p>

     {% if news.thumbnail %}
     <img src="{{ news.thumbnail }}" alt="thumbnail" width="150" height="100">
     <br />
     {% endif %}

     <p>{{ news.content|truncatewords:25 }}...</p>
     
     <p>
         <a href="{% url 'main:show_news' news.id %}"><button>Read More</button></a>
         {% if user.is_authenticated and news.user == user %}
         <a href="{% url 'main:edit_news' news.pk %}">
             <button>
                 Edit
             </button>
         </a>
         {% endif %}
     </p>
     
    </div>
    <hr>
    {% endfor %}
    ...
     ```

7. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000](http://localhost:8000) di browser favoritmu. Setelah *login*, cobalah untuk klik tombol `edit` pada suatu *news* dan ubah datanya sesukamu. Apabila perubahan tersimpan dan terlihat pada halaman utama aplikasi tanpa *error*, maka selamat, kamu berhasil menambahkan fitur *edit*!

## Tutorial: Menambahkan Fitur Hapus *News* pada Aplikasi
Berikut ini hal-hal yang perlu kamu lakukan untuk menambahkan fitur menghapus data *news*:

1. Buat fungsi baru dengan nama `delete_news` yang menerima parameter `request` dan `id` pada `views.py` di folder `main` untuk menghapus data news. Kamu dapat menggunakan kode berikut.
    > Jangan lupa untuk memahami isi kodenya ya😅
    ```python
    def delete_news(request, id):
        news = get_object_or_404(News, pk=id)
        news.delete()
        return HttpResponseRedirect(reverse('main:show_main'))
    ```

2. Buka `urls.py` yang ada pada *folder* `main` dan import fungsi yang sudah kamu buat tadi.
    ```python
    from main.views import delete_news
    ```

3. Tambahkan *path url* ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor.
    ```python
    ...
    path('news/<uuid:id>/delete', delete_news, name='delete_news'),
    ...
    ```

4. Bukalah berkas `main.html` yang ada pada folder `main/templates` dan pada loop `news_list`, perbarui potongan kode berikut agar terdapat tombol hapus untuk setiap artikel berita.
    ```html 
    ...
    {% for news in news_list %}
    <div>
     <h2><a href="{% url 'main:show_news' news.id %}">{{ news.title }}</a></h2>

     <p><b>{{ news.get_category_display }}</b>{% if news.is_featured %} | 
       <b>Featured</b>{% endif %}{% if news.is_news_hot %} | 
       <b>Hot</b>{% endif %} | <i>{{ news.created_at|date:"d M Y H:i" }}</i> 
       | Views: {{ news.news_views }}</p>

     {% if news.thumbnail %}
     <img src="{{ news.thumbnail }}" alt="thumbnail" width="150" height="100">
     <br />
     {% endif %}

     <p>{{ news.content|truncatewords:25 }}...</p>
     
     <p>
         <a href="{% url 'main:show_news' news.id %}"><button>Read More</button></a>
         {% if user.is_authenticated and news.user == user %}
         <a href="{% url 'main:edit_news' news.pk %}">
             <button>
                 Edit
             </button>
         </a>
         <a href="{% url 'main:delete_news' news.pk %}">
          <button>
              Delete
          </button>
      </a>
         {% endif %}
     </p>
     
    </div>
    <hr>
    {% endfor %}
    ...
    ```

5. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000](http://localhost:8000) di *browser* favoritmu. Setelah *login*, cobalah untuk hapus data suatu *news* dan *refresh* halaman. Apabila *news* tersebut hilang dari halaman utama aplikasi kamu tanpa *error*, maka selamat, kamu berhasil menambahkan fitur *delete*!

## Tutorial: Menambahkan *Navigation Bar* pada Aplikasi
*Navigation Bar* (navbar) adalah elemen yang biasanya digunakan untuk menavigasi berbagai halaman atau fitur dalam sebuah aplikasi web. Navbar biasanya ditempatkan di bagian atas halaman dan berisi tautan atau tombol yang mengarah ke halaman-halaman lain dalam aplikasi.

- Buatlah berkas HTML baru dengan nama `navbar.html` pada folder `templates/` di root directory. Isi dari `navbar.html` dapat kamu isi dengan template berikut.
    ```html
    <nav>
      <h1>Football News</h1>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="{% url 'main:create_news' %}">Create News</a></li>
      </ul>

      {% if user.is_authenticated %}
        <div>
          <span>Welcome, {{ name|default:user.username }}</span>
          <span>{{ npm|default:"Student" }} - {{ class|default:"Class" }}</span>
          <a href="{% url 'main:logout' %}">Logout</a>
        </div>
      {% else %}
        <div>
          <a href="{% url 'main:login' %}">Login</a>
          <a href="{% url 'main:register' %}">Register</a>
        </div>
      {% endif %}
    </nav>
    ```
- Kemudian, tautkan navbar tersebut ke dalam `main.html` yang berada di subdirektori `main/templates/` dengan menggunakan tags `include`:
    ```html
    {% extends 'base.html' %}
    {% block content %}
    {% include 'navbar.html' %}
    ...
    {% endblock content%}
    ```

:::note Tanda `...` menandakan kode lainnya dalam berkas yang tidak perlu diubah
:::

## Tutorial: Konfigurasi _Static Files_ pada Aplikasi

1. Pada `settings.py`, tambahkan _middleware_ WhiteNoise. 
```python
...
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', #Tambahkan tepat di bawah SecurityMiddleware
    ...
]
...
```
Dengan menambahkan _middleware_ WhiteNoise pada `settings.py`, Django dapat mengelola _file_ statis secara otomatis dalam mode produksi (`DEBUG=False`) tanpa perlu konfigurasi yang kompleks. Hal ini berguna agar _file_ statis tersebut bisa diakses di deployment kamu sebab secara default, apabila `DEBUG=False` maka Django tidak akan menyediakan akses ke _file_ statis.

2. Pada `settings.py`, pastikan variabel `STATIC_ROOT`, `STATICFILES_DIRS`, dan `STATIC_URL` dikonfigurasikan seperti ini (jika belum ada, bisa ditambahkan saja):
```python
...
STATIC_URL = '/static/'
if DEBUG:
    STATICFILES_DIRS = [
        BASE_DIR / 'static' # merujuk ke /static root project pada mode development
    ]
else:
    STATIC_ROOT = BASE_DIR / 'static' # merujuk ke /static root project pada mode production
...
```

## Styling pada Aplikasi dengan Tailwind dan External CSS

### Menambahkan `global.css`
Buatlah _file_ `global.css` di `/static/css` pada root directory seperti ini:
  
![image](/img/t4-2.png)

Pada _file_ `global.css` ini, kamu bisa menambahkan kelas _custom_ atau _style_ css yang sudah kamu definisikan sendiri.

### Menghubungkan `global.css` dan *script* Tailwind ke base.html
Agar _style_ CSS yang ditambahkan di `global.css` dapat digunakan dalam template Django, kamu perlu menambahkan _file_ tersebut ke `base.html`.
Modifikasi _file_ `base.html` kamu seperti berikut:
```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {% block meta %} {% endblock meta %}
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="{% static 'css/global.css' %}"/>
  </head>
  <body>
    {% block content %} {% endblock content %}
  </body>
</html>
```

### Menambahkan _custom styling_ ke global.css
Modifikasi _file_ `global.css` pada `static/css/global.css` seperti berikut: 
```css 
.form-style form input, form textarea, form select {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #bcbcbc;
    border-radius: 0.375rem;
}
.form-style form input:focus, form textarea:focus, form select:focus {
    outline: none;
    border-color: #16a34a;
    box-shadow: 0 0 0 3px #16a34a;
}

.form-style input[type="checkbox"] {
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;
    border: 2px solid #d1d5db;
    border-radius: 0.375rem;
    background-color: white;
    cursor: pointer;
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.form-style input[type="checkbox"]:checked {
    background-color: #16a34a;
    border-color: #16a34a;
}

.form-style input[type="checkbox"]:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 0.875rem;
}

.form-style input[type="checkbox"]:focus {
    outline: none;
    border-color: #16a34a;
    box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
}

```
CSS di atas digunakan untuk mengatur tampilan form yang memiliki class form-style. Kode CSS ini akan membuat semua input memiliki lebar penuh, padding, border abu-abu, dan sudut melengkung. Ketika pengguna mengklik atau fokus pada input, border akan berubah warna menjadi hijau dengan efek shadow untuk menunjukkan bahwa input tersebut sedang aktif.
### Styling Navbar
Setelah membuat navbar dasar, sekarang kita akan menambahkan styling agar navbar terlihat lebih menarik dan responsif. Perbarui kode navbar pada template `navbar.html` menjadi seperti berikut:
```html
<nav class="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-semibold text-gray-900">
            <span class="text-green-600">Football</span> News
          </h1>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="/" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Home
          </a>
          <a href="{% url 'main:create_news' %}" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Create News
          </a>
        </div>
        
        <!-- Desktop User Section -->
        <div class="hidden md:flex items-center space-x-6">
          {% if user.is_authenticated %}
            <div class="text-right">
              <div class="text-sm font-medium text-gray-900">{{ name|default:user.username }}</div>
              <div class="text-xs text-gray-500">{{ npm|default:"Student" }} - {{ class|default:"Class" }}</div>
            </div>
            <a href="{% url 'main:logout' %}" class="text-red-600 hover:text-red-700 font-medium transition-colors">
              Logout
            </a>
          {% else %}
            <a href="{% url 'main:login' %}" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Login
            </a>
            <a href="{% url 'main:register' %}" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors">
              Register
            </a>
          {% endif %}
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <span class="sr-only">Open menu</span>
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"></span>
              <span class="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5"></span>
              <span class="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="mobile-menu hidden md:hidden bg-white border-t border-gray-200">
      <div class="px-6 py-4 space-y-4">
        <!-- Mobile Navigation Links -->
        <div class="space-y-1">
          <a href="/" class="block text-gray-600 hover:text-gray-900 font-medium py-3 transition-colors">
            Home
          </a>
          <a href="{% url 'main:create_news' %}" class="block text-gray-600 hover:text-gray-900 font-medium py-3 transition-colors">
            Create News
          </a>
        </div>
        
        <!-- Mobile User Section -->
        <div class="border-t border-gray-200 pt-4">
          {% if user.is_authenticated %}
            <div class="mb-4">
              <div class="font-medium text-gray-900">{{ name|default:user.username }}</div>
              <div class="text-sm text-gray-500">{{ npm|default:"Student" }} - {{ class|default:"Class" }}</div>
            </div>
            <a href="{% url 'main:logout' %}" class="block text-red-600 hover:text-red-700 font-medium py-3 transition-colors">
              Logout
            </a>
          {% else %}
            <div class="space-y-3">
              <a href="{% url 'main:login' %}" class="block text-gray-600 hover:text-gray-900 font-medium py-3 transition-colors">
                Login
              </a>
              <a href="{% url 'main:register' %}" class="block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded text-center transition-colors">
                Register
              </a>
            </div>
          {% endif %}
        </div>
      </div>
    </div>
    <script>
      const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");
    
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    </script>
  </nav>
```
Navbar di atas menggunakan Tailwind CSS dengan posisi fixed di atas halaman. Struktur navbar terdiri dari title di kiri, menu navigasi di tengah, dan user section di kanan. Pada tampilan mobile, menu navigasi disembunyikan dan diganti dengan tombol hamburger. JavaScript digunakan untuk menampilkan/menyembunyikan mobile menu saat tombol diklik.

:::note Untuk tutorial kali ini Anda tidak harus dapat memahami cara kerja `<script>`. Penggunaan `<script>` akan Anda pelajari di tutorial 5 minggu depan.
:::

Berikut beberapa referensi tambahan terkait cara membuat *navigation bar* yang dapat kamu gunakan: 

- Menggunakan Tailwind: dapat diakses melalui [tautan berikut](https://tailwindui.com/components/application-ui/navigation/navbars)
- Menggunakan Bootstrap: dapat diakses melalui [tautan berikut](https://getbootstrap.com/docs/5.3/components/navbar/)
- Menggunakan CSS manual: dapat diakses melalui [tautan berikut](https://www.w3schools.com/css/css_navbar.asp)

### _Styling_ Halaman Login
Ubah berkas `login.html` pada subdirektori `main/templates/` menjadi seperti berikut:
``` html
{% extends 'base.html' %}

{% block meta %}
<title>Login - Football News</title>
{% endblock meta %}

{% block content %}
<div class="bg-gray-50 w-full min-h-screen flex items-center justify-center p-8">
  <div class="max-w-md w-full">
    <div class="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 form-style">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Sign In</h1>
        <p class="text-gray-600">Welcome back to Football News</p>
      </div>

      <!-- Form Errors Display -->
      {% if form.non_field_errors %}
        <div class="mb-6">
          {% for error in form.non_field_errors %}
            <div class="px-4 py-3 rounded-md text-sm border bg-red-50 border-red-200 text-red-700">
              {{ error }}
            </div>
          {% endfor %}
        </div>
      {% endif %}

      {% if form.errors %}
        <div class="mb-6">
          {% for field, errors in form.errors.items %}
            {% if field != '__all__' %}
              {% for error in errors %}
                <div class="px-4 py-3 rounded-md text-sm border bg-red-50 border-red-200 text-red-700 mb-2">
                  <strong>{{ field|title }}:</strong> {{ error }}
                </div>
              {% endfor %}
            {% endif %}
          {% endfor %}
        </div>
      {% endif %}

      <form method="POST" action="" class="space-y-6">
        {% csrf_token %}
        
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <input 
            id="username" 
            name="username" 
            type="text" 
            required 
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 transition-colors" 
            placeholder="Enter your username">
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            required 
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 transition-colors" 
            placeholder="Enter your password">
        </div>

        <button 
          type="submit" 
          class="w-full bg-green-600 text-white font-medium py-3 px-4 rounded-md hover:bg-green-700 transition-colors">
          Sign In
        </button>
      </form>

      <!-- Messages Display -->
      {% if messages %}
        <div class="mt-6">
          {% for message in messages %}
            <div 
              class="
                px-4 py-3 rounded-md text-sm border
                {% if message.tags == 'success' %}
                  bg-green-50 border-green-200 text-green-700
                {% elif message.tags == 'error' %}
                  bg-red-50 border-red-200 text-red-700
                {% else %}
                  bg-gray-50 border-gray-200 text-gray-700
                {% endif %}
              ">
              {{ message }}
            </div>
          {% endfor %}
        </div>
      {% endif %}

      <div class="mt-6 text-center pt-6 border-t border-gray-200">
        <p class="text-gray-500 text-sm">
          Don't have an account? 
          <a href="{% url 'main:register' %}" class="text-green-600 hover:text-green-700 font-medium">
            Register Now
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
{% endblock content %}
```
![Contoh Tampilan Halaman Login](/img/t4-3.png)


### _Styling_ Halaman Register
Ubah berkas `register.html` pada subdirektori `main/templates/` menjadi seperti berikut:
``` html
{% extends 'base.html' %}

{% block meta %}
<title>Register - Football News</title>
{% endblock meta %}

{% block content %}
<div class="form-style">
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-8">
    <div class="max-w-md w-full relative z-10">
      <div class="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Join Us</h2>
        <p class="text-gray-500">Create your Football News account</p>
      </div>

      <!-- Form Errors Display -->
      {% if form.non_field_errors %}
        <div class="mb-6">
          {% for error in form.non_field_errors %}
            <div class="px-4 py-3 rounded text-sm border bg-red-50 border-red-200 text-red-700">
              {{ error }}
            </div>
          {% endfor %}
        </div>
      {% endif %}

      {% if form.errors %}
        <div class="mb-6">
          {% for field, errors in form.errors.items %}
            {% if field != '__all__' %}
              {% for error in errors %}
                <div class="px-4 py-3 rounded text-sm border bg-red-50 border-red-200 text-red-700 mb-2">
                  <strong>{{ field|title }}:</strong> {{ error }}
                </div>
              {% endfor %}
            {% endif %}
          {% endfor %}
        </div>
      {% endif %}

      <form method="POST" action="" class="space-y-5">
        {% csrf_token %}
        
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <input 
            id="username" 
            name="username" 
            type="text" 
            required 
            class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-200" 
            placeholder="Choose a username">
        </div>

        <div>
          <label for="password1" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            id="password1" 
            name="password1" 
            type="password" 
            required 
            class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-200" 
            placeholder="Create a password">
        </div>

        <div>
          <label for="password2" class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input 
            id="password2" 
            name="password2" 
            type="password" 
            required 
            class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 transition duration-200" 
            placeholder="Confirm your password">
        </div>

        <button 
          type="submit" 
          class="w-full bg-green-600 text-white font-medium py-3 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200">
          Create Account
        </button>
      </form>

      <!-- Messages Display -->
      {% if messages %}
        <div class="mt-6">
          {% for message in messages %}
            <div 
              class="
                px-4 py-3 rounded text-sm border
                {% if message.tags == 'success' %}
                  bg-green-50 border-green-200 text-green-700
                {% elif message.tags == 'error' %}
                  bg-red-50 border-red-200 text-red-700
                {% else %}
                  bg-gray-50 border-gray-200 text-gray-700
                {% endif %}
              ">
              {{ message }}
            </div>
          {% endfor %}
        </div>
      {% endif %}

      <div class="mt-6 text-center">
        <p class="text-gray-500 text-sm">
          Already have an account? 
          <a href="{% url 'main:login' %}" class="text-green-600 hover:text-green-700 font-medium">
            Sign In
          </a>
        </p>
      </div>
      </div>
    </div>
  </div>
</div>
{% endblock content %}
```
![image](/img/t4-4.png)


### _Styling_ Halaman Home

1. Buat _file_ `card_news.html` di directory `main/templates`, lalu tambahkan kode html sebagai berikut:
    ```html
    {% load static %}
    <article class="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <!-- Thumbnail -->
      <div class="aspect-[16/9] relative overflow-hidden">
        {% if news.thumbnail %}
          <img src="{{ news.thumbnail }}" alt="{{ news.title }}" class="w-full h-full object-cover">
        {% else %}
          <div class="w-full h-full bg-gray-200"></div>
        {% endif %}

        <!-- Category Badge -->
        <div class="absolute top-3 left-3">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-600 text-white">
            {{ news.get_category_display }}
          </span>
        </div>

        <!-- Status Badges -->
        <div class="absolute top-3 right-3 flex space-x-2">
          {% if news.is_featured %}
            <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
              Featured
            </span>
          {% endif %}
          {% if news.is_news_hot %}
            <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
              Hot
            </span>
          {% endif %}
        </div>
      </div>

      <!-- Content -->
      <div class="p-5">
        <div class="flex items-center text-sm text-gray-500 mb-3">
          <time datetime="{{ news.created_at|date:'c' }}">
            {{ news.created_at|date:"M j, Y" }}
          </time>
          <span class="mx-2">•</span>
          <span>{{ news.news_views }} views</span>
        </div>

        <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
          <a href="{% url 'main:show_news' news.id %}" class="hover:text-green-600 transition-colors">
            {{ news.title }}
          </a>
        </h3>

        <p class="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {{ news.content|truncatewords:20 }}
        </p>

        <!-- Action Buttons -->
        {% if user.is_authenticated and news.user == user %}
          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <a href="{% url 'main:show_news' news.id %}" class="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
              Read more
            </a>
            <div class="flex space-x-2">
              <a href="{% url 'main:edit_news' news.id %}" class="text-gray-600 hover:text-gray-700 text-sm transition-colors">
                Edit
              </a>
              <a href="{% url 'main:delete_news' news.id %}" class="text-red-600 hover:text-red-700 text-sm transition-colors">
                Delete
              </a>
            </div>
          </div>
        {% else %}
          <div class="pt-4 border-t border-gray-100">
            <a href="{% url 'main:show_news' news.id %}" class="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
              Read more →
            </a>
          </div>
        {% endif %}
      </div>
    </article>
    ```
    ![image](/img/t4-5.png)

    > **Note:** Ini adalah contoh tampilan dari elemen card_news.html
3. Selanjutnya, kita memerlukan tampilan jika news masih kosong. Pilihlah satu foto atau *icon* _empty_ dan namakan `no-news.png`. Kamu dibebaskan memilih foto apa saja. Tambahkan foto `no-news.png` tadi ke direktori `static/image` yang berada di *root project*.
4. Setelah semuanya selesai, kita perlu menggunakan `card_news.html` dan `no-news.png` tersebut ke template `main.html`. Pada directory `main/templates`, modifikasi `main.html` seperti ini:
    ```html 
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
            <a href="?" class="{% if request.GET.filter == 'all' or not request.GET.filter  %} bg-green-600 text-white{% else %}bg-white text-gray-700 border border-gray-300{% endif %} px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-600 hover:text-white">
              All News
            </a>
            <a href="?filter=my" class="{% if request.GET.filter == 'my' %} bg-green-600 text-white{% else %}bg-white text-gray-700 border border-gray-300{% endif %} px-4 py-2 rounded-md font-medium transition-colors hover:bg-green-600 hover:text-white">
              My News
            </a>
          </div>
          {% if user.is_authenticated %}
            <div class="text-sm text-gray-500">
              Last login: {{ last_login }}
            </div>
          {% endif %}
        </div>

        <!-- News Grid -->
        {% if not news_list %}
          <div class="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div class="w-32 h-32 mx-auto mb-4">
              <img src="{% static 'image/no-news.png' %}" alt="No news available" class="w-full h-full object-contain">
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No news found</h3>
            <p class="text-gray-500 mb-6">Be the first to share football news with the community.</p>
            <a href="{% url 'main:create_news' %}" class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Create News
            </a>
          </div>
        {% else %}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {% for news in news_list %}
              {% include 'card_news.html' with news=news %}
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>
    {% endblock content %}
    ```

    Tampilan dari [http://localhost:8000](http://localhost:8000) akan berubah seperti ini:
![image](/img/t4-6.png)
![image](/img/t4-7.png)

### _Styling_ Halaman Detail News
Ubah berkas `news_detail.html` pada subdirektori `main/templates` menjadi seperti berikut:
```html
{% extends 'base.html' %}
{% load static %}

{% block meta %}
<title>{{ news.title }} - Football News</title>
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
        
        <!-- Article -->
        <article class="bg-white rounded-lg border border-gray-200 overflow-hidden">
            
            <!-- Header -->
            <div class="p-6 sm:p-8">
                <div class="flex flex-wrap items-center gap-2 mb-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-green-600 text-white">
                        {{ news.get_category_display }}
                    </span>
                    {% if news.is_featured %}
                        <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800">
                            Featured
                        </span>
                    {% endif %}
                    {% if news.is_news_hot %}
                        <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800">
                            Hot
                        </span>
                    {% endif %}
                </div>
                
                <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                    {{ news.title }}
                </h1>
                
                <div class="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                    <time datetime="{{ news.created_at|date:'c' }}">
                        {{ news.created_at|date:"M j, Y g:i A" }}
                    </time>
                    <span>{{ news.news_views }} views</span>
                </div>
            </div>

            <!-- Featured Image -->
            {% if news.thumbnail %}
                <div class="px-6 sm:px-8">
                    <img src="{{ news.thumbnail }}" 
                         alt="{{ news.title }}" 
                         class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg">
                </div>
            {% endif %}

            <!-- Content -->
            <div class="p-6 sm:p-8">
                <div class="prose prose-lg max-w-none">
                    <div class="text-gray-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
                        {{ news.content }}
                    </div>
                </div>
            </div>

            <!-- Author Info -->
            <div class="border-t border-gray-200 p-6 sm:p-8 bg-gray-50">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="font-medium text-gray-900">
                            {% if news.user %}
                                <p>Author: {{ news.user.username }}</p>
                            {% else %}
                                <p>Author: Anonymous</p>
                            {% endif %}
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
![image](/img/t4-8.png)


### _Styling_ Halaman Create News
Ubah berkas `create_news.html` pada subdirektori `main/templates` menjadi seperti berikut:
```html
{% extends 'base.html' %}
{% block meta %}
<title>Create News - Football News</title>
{% endblock meta %}

{% block content %}
<div class="bg-gray-50 w-full min-h-screen">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
    <!-- Back Navigation -->
    <div class="mb-6">
      <a href="{% url 'main:show_main' %}" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
        ← Back to News
      </a>
    </div>
    
    <!-- Form -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 form-style">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Create New News</h1>
        <p class="text-gray-600">Share your football news and stories with the community</p>
      </div>
      
      <form method="POST" class="space-y-6">
        {% csrf_token %}
        {% for field in form %}
          <div>
            <label for="{{ field.id_for_label }}" class="block text-sm font-medium text-gray-700 mb-2">
              {{ field.label }}
            </label>
            <div class="w-full">
              {{ field }}
            </div>
            {% if field.help_text %}
              <p class="mt-1 text-sm text-gray-500">{{ field.help_text }}</p>
            {% endif %}
            {% for error in field.errors %}
              <p class="mt-1 text-sm text-red-600">{{ error }}</p>
            {% endfor %}
          </div>
        {% endfor %}
        
        <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <a href="{% url 'main:show_main' %}" class="order-2 sm:order-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-center">
            Cancel
          </a>
          <button type="submit" class="order-1 sm:order-2 flex-1 bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
            Publish News
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
{% endblock %}
```
![image](/img/t4-9.png)


### _Styling_ Halaman Edit News
Ubah berkas `edit_news.html` pada subdirektori `main/templates` menjadi seperti berikut:
```html
{% extends 'base.html' %}
{% load static %}

{% block meta %}
<title>Edit News - Football News</title>
{% endblock meta %}

{% block content %}
<div class="bg-gray-50 w-full min-h-screen">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
    <!-- Back Navigation -->
    <div class="mb-6">
      <a href="{% url 'main:show_main' %}" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
        ← Back to News
      </a>
    </div>
    
    <!-- Form -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 form-style">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Edit News</h1>
        <p class="text-gray-600">Update your football news and stories</p>
      </div>
      
      <form method="POST" class="space-y-6">
        {% csrf_token %}
        {% for field in form %}
          <div>
            <label for="{{ field.id_for_label }}" class="block text-sm font-medium text-gray-700 mb-2">
              {{ field.label }}
            </label>
            <div class="w-full">
              {{ field }}
            </div>
            {% if field.help_text %}
              <p class="mt-1 text-sm text-gray-500">{{ field.help_text }}</p>
            {% endif %}
            {% for error in field.errors %}
              <p class="mt-1 text-sm text-red-600">{{ error }}</p>
            {% endfor %}
          </div>
        {% endfor %}
        
        <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <a href="{% url 'main:show_main' %}" class="order-2 sm:order-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-center">
            Cancel
          </a>
          <button type="submit" class="order-1 sm:order-2 flex-1 bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
            Update News
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
{% endblock %}
```
![image](/img/t4-10.png)

## Referensi Tambahan
- [Get Started with Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
## Penutup
- Setelah menjalankan tutorial di atas, Anda seharusnya memiliki struktur direktori lokal seperti berikut.
 
   ```
   football-news
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
   │   │   └── 0002_news_user.py   
   │   ├── templates
   │   │   ├── card_news.html
   │   │   ├── create_news.html
   │   │   ├── edit_news.html
   │   │   ├── login.html
   │   │   ├── main.html
   │   │   ├── news_detail.html
   │   │   └── register.html
   │   ├── __init__.py
   │   ├── admin.py
   │   ├── apps.py
   │   ├── forms.py
   │   ├── models.py
   │   ├── tests.py
   │   ├── urls.py
   │   └── views.py
   ├── static
   │   └── css
   │       └── global.css
   │   └── image
   │       └── no-news.png
   ├── templates
   │   └── base.html
   │   └── navbar.html
   ├── .gitignore
   ├── manage.py
   └── requirements.txt
   ```

## Kontributor

- Isa Citra Buana (ISA)
- Yudayana Arif Prasojo (YAP)
- Siti Shofi Nadhifa (SHF)
- Abhiseka Susanto (BHI)

## Credits

Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2025](https://github.com/pbp-fasilkom-ui/ganjil-2025) dan [PBP Ganjil 2024](https://github.com/pbp-fasilkom-ui/ganjil-2024) yang ditulis oleh Tim Pengajar dan Asisten Dosen Pemrograman Berbasis Platform 2025 dan 2024. Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.