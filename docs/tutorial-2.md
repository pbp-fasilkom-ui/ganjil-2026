---
sidebar_label: Tutorial 2
sidebar_position: 4
Path: docs/tutorial-2
---

# Tutorial 2: Form dan Data Delivery

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2025/2026

_Terakhir diperbarui: 27 Agustus 2025, 12:00 WIB_

## Tujuan Pembelajaran​

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:

- Memahami tujuan dan cara implementasi ***skeleton*** sebagai kerangka views
- Mengetahui `XML` dan `JSON` sebagai salah satu metode ***data delivery***
- Memahami cara kerja submisi data yang diberikan oleh pengguna menggunakan elemen `form` pada `HTML`
- Memahami cara mengirimkan data menggunakan format `XML` dan `JSON`
- Memahami cara mengambil data spesifik berdasarkan `ID`
- Memahami penggunaan postman sebagai ***data viewer***

## Pengenalan Data Delivery

Dalam mengembangkan suatu _platform_, ada kalanya kita perlu mengirimkan data dari satu _stack_ ke _stack_ lainnya. Data yang dikirimkan bisa bermacam-macam bentuknya. Beberapa contoh format data yang umum digunakan antara lain HTML, XML, dan JSON. Implementasi _data delivery_ dalam bentuk HTML sudah kamu pelajari pada tutorial sebelumnya. Pada tutorial ini akan diajarkan terkait **XML dan JSON**.

## XML (Extensible Markup Language)

**XML, atau _eXtensible Markup Language_**, adalah sebuah format yang dirancang agar mudah dimengerti hanya dengan membacanya, karena setiap elemen dalam XML mendeskripsikan dirinya sendiri. XML banyak digunakan dalam berbagai aplikasi _web_ dan _mobile_ untuk tujuan penyimpanan dan pertukaran data. File XML hanya berisi data yang dikemas dalam _tag_ tertentu, dan untuk dapat mengirim, menerima, menyimpan, atau menampilkan informasi dari _file_ tersebut, kita perlu membuat program yang dapat memprosesnya.

Contoh Format XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<person>
    <name>Burhan</name>
    <age>25</age>
    <address>
        <street>Jl. PeBePe No.1</street>
        <city>Depok</city>
        <province>Jawa Barat</province>
        <zip>16424</zip>
    </address>
</person>
```

XML di atas sangatlah _self-descriptive_:

- Ada informasi nama (`name`)
- Ada informasi umur (`age`)
- Ada informasi alamat (`address`)
  - Ada informasi jalan (`street`)
  - Ada informasi kota (`city`)
  - Ada informasi provinsi (`province`)
  - Ada informasi kode pos (`zip`)

Dokumen XML membentuk struktur seperti _tree_ yang dimulai dari _root_, lalu _branch_, hingga berakhir pada _leaves_. Dokumen XML **harus mengandung sebuah _root element_** yang merupakan _parent_ dari elemen lainnya. Pada contoh di atas, `<person>` adalah _root element_.

Baris `<?xml version="1.0" encoding="UTF-8"?>` biasanya disebut sebagai **XML Prolog**. XML Prolog bersifat opsional, akan tetapi jika ada maka posisinya harus berada di awal dokumen XML. Pada dokumen XML, **semua elemen wajib memiliki** **closing tag**. **Tag** pada XML sifatnya **case sensitive**, sehingga tag `<person>` dianggap **berbeda** dengan tag `<Person>`.

## JSON (JavaScript Object Notation)

JSON, atau _JavaScript Object Notation_, adalah sebuah format yang dirancang agar mudah dimengerti karena setiap elemennya mendeskripsikan dirinya sendiri atau _self describing_. JSON banyak digunakan dalam berbagai aplikasi _web_ dan _mobile_ untuk menyimpan dan mentransfer data. Meskipun sintaks JSON berasal dari objek JavaScript, JSON sebenarnya adalah format _text_. Oleh karena itu, banyak bahasa pemrograman yang memiliki dukungan untuk membaca dan membuat JSON.

Contoh format JSON:

```json
{
  "name": "Burhan",
  "age": 25,
  "address": {
    "street": "Jl. PeBePe No.1",
    "city": "Depok",
    "province": "Jawa Barat",
    "zip": "16424"
  }
}
```

Data pada JSON disimpan dalam bentuk _key_ dan _value_. Pada contoh di atas yang menjadi _key_ adalah `name`, `age`, dan `address`. _Value_ dapat berupa tipe data primitif (_string, number, boolean_) ataupun berupa objek.

## Pre-Tutorial Notes

Sebelum kamu memulai, serta untuk membantumu mengikuti tutorial 2 dengan baik, **kami mengharapkan beberapa hasil berikut dari tutorial 1**:

- Struktur direktori `football-news` secara lokal adalah sebagai berikut.

![Struktur Direktori Lokal](/img/t2-1.png)


- Struktur repository `football-news` pada GitHub adalah sebagai berikut.

![Struktur Direktori Repo](/img/t2-2.png)


## Tutorial: Implementasi _Skeleton_ sebagai Kerangka _Views_

Sebelum kita membuat form, kita perlu membuat suatu _skeleton_ yang berfungsi sebagai kerangka _views_ dari situs web kita. Dengan kerangka _views_ ini, kita dapat memastikan adanya konsistensi dalam desain situs web kita serta memperkecil kemungkinan terjadinya redundansi kode. Pada tutorial ini, kita akan membuat _skeleton_ untuk situs web yang akan kita buat pada tutorial selanjutnya.

1. Buat direktori `templates` pada direktori utama (**_root folder_**) dan buatlah sebuah berkas HTML baru bernama `base.html`. Berkas `base.html` berfungsi sebagai _template_ dasar yang dapat digunakan sebagai kerangka umum untuk halaman web lainnya di dalam proyek. Isilah berkas `base.html` tersebut dengan kode berikut:

    ```html
    {% load static %}
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {% block meta %} {% endblock meta %}
    </head>

    <body>
        {% block content %} {% endblock content %}
    </body>
    </html>
    ```

   Baris-baris yang dikurung dalam `{% ... %}` disebut dengan _**template tags**_ Django. Baris-baris inilah yang akan berfungsi untuk memuat data secara dinamis dari Django ke HTML.

   Pada contoh diatas, tag `{% block %}` di Django digunakan untuk mendefinisikan area dalam template yang dapat diganti oleh template turunan. Template turunan akan me-_extend_ template dasar (pada contoh ini `base.html`) dan mengganti konten di dalam block ini sesuai kebutuhan.

3. Buka `settings.py` yang ada pada direktori proyek (`football_news`) dan carilah baris yang mengandung variabel `TEMPLATES`. Sesuaikan kode yang ada dengan potongan kode berikut agar berkas `base.html` terdeteksi sebagai berkas _template_.

   ```python
   ...
   TEMPLATES = [
       {
           'BACKEND': 'django.template.backends.django.DjangoTemplates',
           'DIRS': [BASE_DIR / 'templates'], # Tambahkan konten baris ini
           'APP_DIRS': True,
           ...
       }
   ]
   ...
   ```
   :::info
   Dalam beberapa kasus, `APP_DIRS` pada konfigurasi `TEMPLATES` kamu dapat bernilai `False`. Apabila nilainya `False`, ubah menjadi `True`. `APP_DIRS` **harus** bernilai `True`. Hal ini dilakukan agar `templates` milik app (contohnya `main`) diprioritaskan daripada `admin/base_site.html` milik **django.contrib.admin**. Untuk informasi lebih lanjut, kamu dapat mengakses halaman [ini](https://docs.djangoproject.com/en/5.1/ref/templates/api/#loading-templates).
   :::

4. Pada subdirektori `templates` yang ada pada direktori `main` (`main/templates/`), ubahlah kode berkas `main.html` yang telah dibuat di tutorial sebelumnya menjadi sebagai berikut.

   ```html
    {% extends 'base.html' %}
    {% block content %}
    <h1>Football News</h1>

    <h5>NPM: </h5>
    <p>{{ npm }}<p>

    <h5>Name:</h5>
    <p>{{ name }}</p>

    <h5>Class:</h5>
    <p>{{ class }}</p>
    {% endblock content %}
   ```

    Perhatikan bahwa kode diatas merupakan kode yang sama dengan kode pada `main.html` pada tutorial sebelumnya. Perbedaannya adalah pada kode diatas, kita menggunakan `base.html` sebagai _template_ utama.

## Tutorial: Membuat Form Input Data dan Menampilkan Data Football News Pada HTML

Sampai saat ini, belum ada data yang ditambahkan dan dimunculkan ke dalam aplikasi. Sekarang, kita akan membuat sebuah _form_ sederhana untuk menginput data _Football News_ pada aplikasi sehingga nantinya kamu dapat menambahkan data baru untuk ditampilkan pada halaman utama.

1. Buat berkas baru pada direktori `main` dengan nama `forms.py` untuk membuat struktur _form_ yang dapat menerima data _News_ baru. Tambahkan kode berikut ke dalam berkas `forms.py`.

    ```python
    from django.forms import ModelForm
    from main.models import News

    class NewsForm(ModelForm):
        class Meta:
            model = News
            fields = ["title", "content", "category", "thumbnail", "is_featured"]
    ```

    **Penjelasan Kode:**

    - `model = News` untuk menunjukkan model yang akan digunakan untuk _form_. Ketika data dari _form_ disimpan, isi dari _form_ akan disimpan menjadi sebuah objek `News`.
    - `fields = ["title", "content", "category", "thumbnail", "is_featured"]` untuk menunjukkan _field_ dari model `News` yang digunakan untuk _form_. _Field_ `created_at` dan `news_views` tidak dimasukkan ke _list_ `fields` karena ditambahkan secara otomatis.

2. Buka berkas `views.py` yang ada pada direktori `main` dan tambahkan beberapa _import_ berikut pada bagian paling atas, kemudian perbarui dan tambahkan fungsi-fungsi berikut:

    ```python
    from django.shortcuts import render, redirect, get_object_or_404
    from main.forms import NewsForm
    from main.models import News

    def show_main(request):
        news_list = News.objects.all()

        context = {
            'npm' : '240123456',
            'name': 'Haru Urara',
            'class': 'PBP A',
            'news_list': news_list
        }

        return render(request, "main.html", context)

    def create_news(request):
        form = NewsForm(request.POST or None)

        if form.is_valid() and request.method == "POST":
            form.save()
            return redirect('main:show_main')

        context = {'form': form}
        return render(request, "create_news.html", context)

    def show_news(request, id):
        news = get_object_or_404(News, pk=id)
        news.increment_views()

        context = {
            'news': news
        }

        return render(request, "news_detail.html", context)
    ```

    **Penjelasan Kode:**

    - Fungsi `show_main` diperbarui dengan menambahkan `News.objects.all()` untuk mengambil seluruh objek `News` yang tersimpan pada _database_.
    - Fungsi `create_news` digunakan untuk menghasilkan _form_ yang dapat menambahkan data _News_ secara otomatis ketika data di-_submit_ dari _form_.
    - Fungsi `show_news` menggunakan `get_object_or_404(News, pk=id)` untuk mengambil objek `News` berdasarkan primary key (id). Jika objek tidak ditemukan, akan mengembalikan halaman 404.
    - `news.increment_views()` digunakan untuk menambah jumlah views pada berita tersebut.

3. Buka `urls.py` yang ada pada direktori `main` dan _import_ fungsi-fungsi yang sudah kamu buat tadi, kemudian tambahkan _path_ URL ke dalam variabel `urlpatterns`:

    ```python
    from django.urls import path
    from main.views import show_main, create_news, show_news

    app_name = 'main'

    urlpatterns = [
        path('', show_main, name='show_main'),
        path('create-news/', create_news, name='create_news'),
        path('news/<str:id>/', show_news, name='show_news'),
    ]

    ```


6. Buka `main.html`pada direktori `main/templates` dan update kode di dalam blok `content` untuk menampilkan data _news_ serta tombol "Add News" yang akan _redirect_ ke halaman _form_:

    ```html
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

    <hr>

    {% if not news_list %}
    <p>Belum ada data berita pada football news.</p>
    {% else %}

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

      <p><a href="{% url 'main:show_news' news.id %}"><button>Read More</button></a></p>
    </div>

    <hr>
    {% endfor %}

    {% endif %}
    ```

5. Buat dua berkas HTML baru pada direktori `main/templates` untuk halaman form input dan detail berita:

    **create_news.html:**
    ```html
    {% extends 'base.html' %} 
    {% block content %}
    <h1>Add News</h1>

    <form method="POST">
      {% csrf_token %}
      <table>
        {{ form.as_table }}
        <tr>
          <td></td>
          <td>
            <input type="submit" value="Add NEWS" />
          </td>
        </tr>
      </table>
    </form>

    {% endblock %}
    ```

    **Penjelasan Kode:**

    - `{% csrf_token %}` adalah token yang berfungsi sebagai _security_. Token ini di-_generate_ secara otomatis oleh Django untuk mencegah serangan berbahaya.
    - `{{ form.as_table }}` adalah _template tag_ yang digunakan untuk menampilkan _fields_ form yang sudah dibuat pada `forms.py` sebagai _table_.

    **news_detail.html:**
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

    {% endblock content %}
    ```
4. Buka `settings.py` pada direktori root project dan kemudian tambahkan entri url proyek pws kamu pada `CSRF_TRUSTED_ORIGINS` tepat setelah `ALLOWED_HOSTS`:
    ```python
    ...
    CSRF_TRUSTED_ORIGINS = [
        "<url-deployment-pws-kamu>"
    ]
    ...
    ```
    Perlu diingat bahwa url deployment untuk CSRF_TRUSTED_ORIGINS harus mengandung protokol, sehingga urlnya akan dimulai dengan `https://` contohnya `https://isa-citra-footballnews.pbp.cs.ui.ac.id`.
    
6. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000/](http://localhost:8000/) di browser favoritmu. Coba tambahkan beberapa data news baru dan klik link judul atau tombol "Read More" untuk melihat detail berita. Seharusnya kamu dapat melihat data yang ditambahkan pada halaman utama aplikasi serta dapat mengakses halaman detail untuk setiap berita.

## Tutorial Mengembalikan Data dalam Bentuk XML

1. Buka `views.py` yang ada pada direktori `main` dan tambahkan _import_ `HttpResponse` dan `Serializer` pada bagian paling atas.

   ```python
   from django.http import HttpResponse
   from django.core import serializers
   ```
   
   :::info
   `HttpResponse` merupakan *class* yang digunakan untuk menyusun respon yang ingin dikembalikan oleh server ke *user*. Kamu dapat mengakses materi lebih dalam terkait `HttpRequest` dan `HttpResponse` pada halaman berikut [ini](https://docs.djangoproject.com/en/5.2/ref/request-response/).
   :::

2. Buatlah sebuah fungsi baru yang menerima parameter _request_ dengan nama `show_xml` dan buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil _query_ dari seluruh data yang ada pada `News`.

   ```python
   def show_xml(request):
       news_list = News.objects.all()
   ```

3. Tambahkan _return function_ berupa `HttpResponse` yang berisi parameter data hasil _query_ yang sudah diserialisasi menjadi XML dan parameter `content_type="application/xml"`.

   ```python
   def show_xml(request):
        news_list = News.objects.all()
        xml_data = serializers.serialize("xml", news_list)
        return HttpResponse(xml_data, content_type="application/xml")
   ```

   **Penjelasan Kode:**

   `serializers` digunakan untuk _translate_ objek model menjadi format lain seperti dalam fungsi ini adalah XML.

4. Buka `urls.py` yang ada pada direktori `main` dan _import_ fungsi yang sudah kamu buat tadi.

   ```python
   from main.views import show_main, create_news, show_news, show_xml
   ```

5. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

   ```python
   ...
   path('xml/', show_xml, name='show_xml'),
   ...
   ```

6. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000/xml/](http://localhost:8000/xml/) di browser favoritmu untuk melihat hasilnya.

## Tutorial: Mengembalikan Data dalam Bentuk JSON

1. Buka `views.py` yang ada pada direktori `main` dan buatlah sebuah fungsi baru yang menerima parameter _request_ dengan nama `show_json` dengan sebuah variabel di dalamnya yang menyimpan hasil _query_ dari seluruh data yang ada pada `News`.

    ```python
    def show_json(request):
        news_list = News.objects.all()
    ```

2. Tambahkan _return function_ berupa `HttpResponse` yang berisi parameter data hasil _query_ yang sudah diserialisasi menjadi JSON dan parameter `content_type="application/json"`.

    ```python
    def show_json(request):
        news_list = News.objects.all()
        json_data = serializers.serialize("json", news_list)
        return HttpResponse(json_data, content_type="application/json")
    ```

3. Buka `urls.py` yang ada pada direktori `main` dan _import_ fungsi yang sudah kamu buat tadi.

    ```python
    from main.views import show_main, create_news, show_news, show_xml, show_json
    ```

4. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

   ```python
   ...
   path('json/', show_json, name='show_json'),
   ...
   ```

5. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000/json/](http://localhost:8000/json/) (sesuaikan dengan _path url_ yang dibuat) di browser favoritmu untuk melihat hasilnya.

## Tutorial: Mengembalikan Data Berdasarkan ID dalam Bentuk XML dan JSON

1. Buka `views.py` yang ada pada direktori `main` dan buatlah dua fungsi baru yang menerima parameter `request` dan `news_id` dengan nama `show_xml_by_id` dan `show_json_by_id`.

2. Buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil _query_ dari data dengan id tertentu yang ada pada `News`.

   ```python
   news_item = News.objects.filter(pk=news_id)
   ```

3. Tambahkan _return function_ berupa `HttpResponse` yang berisi parameter data hasil _query_ yang sudah diserialisasi menjadi JSON atau XML dan parameter `content_type` dengan _value_ `"application/xml"` (untuk format XML) atau `"application/json"` (untuk format JSON).

   - XML

     ```python
     def show_xml_by_id(request, news_id):
        news_item = News.objects.filter(pk=news_id)
        xml_data = serializers.serialize("xml", news_item)
        return HttpResponse(xml_data, content_type="application/xml")
     ```

   - JSON

     ```python
     def show_json_by_id(request, news_id):
        news_item = News.objects.get(pk=news_id)
        json_data = serializers.serialize("json", [news_item])
        return HttpResponse(json_data, content_type="application/json")
     ```
   :::info
   Untuk mendapatkan data berdasarkan ID, kita dapat menggunakan berbagai jenis method milik **Django**, dua di antaranya adalah `filter()` dan `get()`. Namun, kedua method ini memiliki perbedaan yang cukup signifikan. `filter()` dapat digunakan untuk mengambil data satu objek atau berbagai objek yang memenuhi kondisi yang ditetapkan, sedangkan `get()` dapat digunakan untuk mengambil data satu objek saja. Kamu dapat membaca lebih lanjut terkait hal ini pada halaman berikut [ini](https://docs.djangoproject.com/en/5.2/topics/db/queries/#retrieving-a-single-object-with-get).
   :::
         
4. Tambahkan blok `try except` pada fungsi untuk mengantisipasi kondisi ketika data dengan `news_id` tertentu tidak ditemukan dalam basis data. Jika data tidak ditemukan, kembalikan `HttpResponse` dengan status 404 sebagai tanda data tidak ada.
   
   - XML

     ```python
     def show_xml_by_id(request, news_id):
        try:
            news_item = News.objects.filter(pk=news_id)
            xml_data = serializers.serialize("xml", news_item)
            return HttpResponse(xml_data, content_type="application/xml")
        except News.DoesNotExist:
            return HttpResponse(status=404)
     ```

   - JSON

     ```python
     def show_json_by_id(request, news_id):
        try:
            news_item = News.objects.get(pk=news_id)
            json_data = serializers.serialize("json", [news_item])
            return HttpResponse(json_data, content_type="application/json")
        except News.DoesNotExist:
            return HttpResponse(status=404)
     ```


5. Buka `urls.py` yang ada pada direktori `main` dan _import_ fungsi yang sudah kamu buat tadi.

   ```python
   from main.views import show_main, create_news, show_news, show_xml, show_json, show_xml_by_id, show_json_by_id
   ```

6. Tambahkan _path_ URL ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

   ```python
   ...
    path('xml/<str:news_id>/', show_xml_by_id, name='show_xml_by_id'),
    path('json/<str:news_id>/', show_json_by_id, name='show_json_by_id'),
   ...
   ```

7. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000/xml/[news_id]/](http://localhost:8000/xml/[news_id]/) atau [http://localhost:8000/json/[news_id]/](http://localhost:8000/json/[news_id]/) di browser favoritmu untuk melihat hasilnya.

   :::warning
   Sesuaikan `[news_id]` pada URL di atas dengan id objek yang ingin dilihat. Kamu dapat mengambil salah satu ID objek yang ditampilkan ketika mengakses _endpoint_ `/xml/` dan `/json/`.
   :::

## Tutorial: Penggunaan Postman Sebagai _Data Viewer_

1. Pastikan server kamu sudah berjalan dengan perintah `python manage.py runserver`.

2. Buka Postman dan buatlah sebuah _request_ baru dengan _method_ `GET` dan _url_ [http://localhost:8000/xml/](http://localhost:8000/xml/) atau [http://localhost:8000/json/](http://localhost:8000/json/) untuk mengetes apakah data terkirimkan dengan baik.

   > Panduan Instalasi Postman dapat dilihat pada [Laman Resmi Postman](#referensi-tambahan).

   Contoh:
   - XML
    ![image](/img/t2-3.png)
    
   - JSON
    ![image](/img/t2-4.png)


3. Klik tombol `Send` untuk mengirimkan _request_ tersebut.

4. Kamu akan melihat hasil _response_ dari _request_ tersebut pada bagian bawah Postman.

   - XML
    ![image](/img/t2-5.png)
    
   - JSON
    ![image](/img/t2-6.png)



5. Kamu juga dapat mengubah _url_ menjadi [http://localhost:8000/xml/[news_id]](http://localhost:8000/xml/[news_id]) atau [http://localhost:8000/json/[news_id]](http://localhost:8000/json/[news_id]) untuk mengetes fungsi pengambilan data News berdasarkan ID.
    
   - XML
    ![image](/img/t2-7.png)
    
   - JSON
    ![image](/img/t2-8.png)



## Penutup

1. Setelah menyelesaikan tutorial ini, tampilan halaman web kamu seharusnya terlihat seperti ini.

   ![image](/img/t2-9.png)
   ![image](/img/t2-10.png)



2. Pada akhir tutorial ini, struktur direktori lokalmu akan terlihat seperti ini.

    ![Struktur Direktori](/img/t2-11.png)


3. Sebelum melakukan langkah ini, **pastikan struktur direktori lokal sudah benar**. Selanjutnya, lakukan `add`, `commit` dan `push` untuk memperbarui repositori GitHub.

4. Jalankan perintah berikut untuk melakukan `add`, `commit` dan `push` ke GitHub dan PWS.

   ```shell
   git add .
   git commit -m "<pesan_commit>"
   git push origin master
   git push pws master
   ```

   - Ubah `<pesan_commit>` sesuai dengan keinginan. Contoh: `git commit -m "tutorial 2 selesai"`.

## Referensi Tambahan

- [Install and update Postman](https://learning.postman.com/docs/getting-started/installation/installation-and-updates)
- [Retrieving a single object with get()](https://docs.djangoproject.com/en/5.2/topics/db/queries/#retrieving-a-single-object-with-get)
- [Request and Response objects](https://docs.djangoproject.com/en/5.2/ref/request-response/)
- [Django Request and Response cycle](https://www.geeksforgeeks.org/python/django-request-and-response-cycle-httprequest-and-httpresponse-objects/)

## Kontributor

- Fiona Ratu Maheswari (FIO)
- Anthony Edbert Feriyanto (ANT)
- Meutia Fajriyah (MEW)
- Yeshua Marco Gracia (ACO)

## Credits

Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2025](https://github.com/pbp-fasilkom-ui/ganjil-2025) dan [PBP Ganjil 2024](https://github.com/pbp-fasilkom-ui/ganjil-2024) yang ditulis oleh Tim Pengajar dan Asisten Dosen Pemrograman Berbasis Platform 2025 dan 2024. Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.