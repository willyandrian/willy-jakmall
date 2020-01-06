# Form Order (Overview)
Form Order pada repository berikut dibangun dengan stack: Vue.js (Js Framework), Stylus (CSS Pre-processor), NPM & Webpack. Arsitektur CSS yang digunakan dalam development menggunakan metode BEM (Block, Element, Modifier)

Terdapat 3 halaman sebagai konten Form Order:
1. Halaman Delivery
   Halaman delivery mengharuskan user untuk menginput email, phone number dan alamat pengiriman. Adapun inputan lain yang bersifat            mandatory yaitu dropshipper name dan dropshipper phone number. Namun input ini hanya menjadi mandatory, jika tombol Send as Dropshipper    dicentang. Setiap input memiliki validasi sesuai kebutuhan dan jenis data yang diinput. 
   
   Pembuatan validasi menggunakan plugin 'VeeValidate' versi 2.1.6
   
   Email: required|email
   Dropshipper Name: required|min:6|max:30 (Hanya required jika 'Send as dropshipper == true')
   Phone Number: required|min: 6}max: 20|regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
   Dropshipper Phone Number: required|min: 6|max: 20|regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/                                      (Hanya required jika 'Send as dropshipper == true')
   Delivery Address: required|min:6|max:120 (Dengan live remaining characters counter disamping label input)
   
   NB: Ketika melakukan toggle checkbox 'Send as dropshipper', perhatikan bahwa panel summary akan terupdate dengan data baru.

2. Halaman Payment
   Halaman payment untuk memilih metode pengiriman serta metode pembayaran. Pada halaman payment, jika sebelumnya Anda mencentang 'Send    as dropshipper', maka Anda akan melihat data tersebut tetap muncul di panel summary.
   
   NB: Ketika memilih shipment method / payment method, perhatikan bahwa panel summary akan terupdate dengan data baru.

3. Halaman Finish
   Halaman finish sebagai sum up dari input yang telah diberikan pada halaman-halaman sebelumnya. Setiap masuk ke halaman finish, Anda      akan mendapati 5 kode unik yang digenerate secara random dengan ketentuan mengecualikan l (huruf L kecil), 0 (Angka nol),                O (Huruf o kapital) dan 1 (Angka 1)

State yang telah diupdate tidak akan hilang walaupun direfresh sampai tombol "Go to homepage" ditekan. Ketika ditekan storage akan dibersihkan dan Js akan redirect ke halaman utama dengan state awal. Fungsi persistent state ini dibuat dengan bantuan plugin vue-persistent-state. Untuk file production (dist/) dapat berjalan dengan baik jika dijanlankan diatas http. Persistent state tidak bekerja jika dilakukan pembukaan program dengan double-click (non-http)
   
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
"# test-jakmall" 
