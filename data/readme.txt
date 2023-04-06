Welcome to Assignment 2 By Akmal Maulfi Anwar - INJS-KS05-008

Cara Akses API:
[NOTE: JANGAN LUPA UNTUK UNTUK MENYALAKAN SERVER DENGAN CARA NPM/NODEMON app di Terminal]

* Login dan Generate Token :
1. Masuk ke Postman, lalu tuliskan ke url localhost:3000/login dengan Method POST.
2. Klik Tab Body, pilih 'x-www-form-url-encoded'. lalu tambahkan :
[Key:Value]
username : john_doe
password: rahasia
Kemudian centang ke 2 key tsb.
3. Klik Send, maka akan muncul pesan 'Keterangan: Berhasil Login.' di Postman.
4. Cek Terminal VSCode, maka akan muncul Token Anda. 
5. Selesai.

* Get All Data teachers dengan Token.
1. Setelah selesai generate token di route login, Copy token yang anda dapat dari terminal.
2. Pada Postman, ketikkan url localhost:3000/teachers dengan Method GET.
3. Pilih Tab Headers, lalu masukkan :
[Key:Value]
auth : masukkan_token_disini
4. Klik Send, maka akan muncul data teachers di Postman.
5. Selesai.
