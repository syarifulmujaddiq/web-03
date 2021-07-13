const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
    const parsedURL = url.parse(request.url,true);
    console.log(parsedURL);
 
   if (parsedURL.pathname === '/') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write(`
      <h1 align="center">BIODATA MAHASISWA</h1>
<table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
<tr align="center" bgcolor="#6495ED">
<td>Mahasiswa Laki-Laki</td>
<td>Mahasiswa Perempuan</td>
</tr>


<tr>
<td><a href="profil?nama=Andi Muharram&nim=105841100719&kelas=4A&jurusan=Informatika&jk=Laki-Laki&asal=Wajo&hobi=Ngoding&agama=Islam">Andi Muharram</a></td>
<td><a href="profil?nama=Siti Hajar Hamzah&nim=105841103419&kelas=4A&jurusan=Informatika&jk=Perempuan&asal=Gowa&hobi&agama=Islam&hobi=Membaca">Siti Hajar Hamzah</a></td>

</tr>
<tr>
<td><a href="profil?nama=Reski Agus J&nim=105841102719&kelas=4A&jurusan=Informatika&jk=Laki-Laki&asal=Makassar&hobi=Ngoding&agama=Islam">Reski Agus</a></td>
<td><a href="profil?nama=Marlina&nim=105841102419&kelas=4A&jurusan=Infrmatika&jk=Perempuan&asal=Jeneponto&hobi=Nonton&agama=Islam">Marlina</a></td>
</tr>

<tr>
<td><a href="profil?nama=Yusril Mahendra&nim=105841101319&kelas=4A&jurusan=Informatika&jk=Laki-Laki&asal=Flores&hobi=Main Game&agama=Islam">Yusril Mahendra</a></td>
<td><a href="profil?nama=Astri Sofianti&nim=105841101219&kelas=4A&jurusan=Informatika&jk=Perempuan&asal&asal=Palopo&hobi=Organisasi&agama=Islam">Astri Sofianti</a></td>
</tr>

<tr>
<td><a href="profil?nama=Arjun A&nim=105841100519&kelas=4A&jurusan=Informatika&jk=Laki-Laki&asal=Barru&hobi=Jalan-Jalan&agama=Islam">Arjun A</a></td>
<td><a href="profil?nama=Suriani&nim=105841100419&kelas=4A&jurusan=Informatika&jk=Perempuan&asal=Pangkep&hobi=Nonton&agama=Islam">Suriani</a></td>
</tr>

<tr>
<td><a href="profil?nama=Muh Alamsyah&nim=10581101719&kelas=4A&jurusan=Informatika&jk=Laki-Laki&asal=Sinjai&hobi=Jalan-Jalan&agama=Islam">Muh Alamsyah</a></td>
<td><a href="profil?nama=Muhtamirah&nim=105841103019&kelas=4A&jurusan=Informatika&jk=Perempuan&asal=Makassar&hobi=Jalan-Jalan&agama=Islam">Muhtamirah</a></td>
</tr>

</table>
  `);
      response.end();
  }else if (parsedURL.pathname === '/profil') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write(`
      <body>
	<h1 align="center">BIODATA MAHASISWA</h1>
<table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
<tr align="center" bgcolor="#6495ED">
<td width="174">DATA DIRI</td>
<td width="353">KETERANGAN</td>
<td width="232">FOTO</td>
</tr>
<tr>
<td>Nama</td>
<td>${parsedURL.query.nama}</td>
<td rowspan="10" align="center"><img src="https://simak.unismuh.ac.id/upload/mahasiswa/${parsedURL.query.nim}.jpg"></td>
</tr>
<tr>
<td>NIM</td>
<td>${parsedURL.query.nim}</td>
</tr>
<tr>
<td>Jurusan</td>
<td>${parsedURL.query.jurusan}</td>
</tr>
<tr>
<td>Kelas</td>
<td>${parsedURL.query.kelas}</td>
</tr>
<tr>
<td>Jenis Kelamin</td>
<td>${parsedURL.query.jk}</td>
</tr>
<tr>
<td>Daerah Asal</td>
<td>${parsedURL.query.asal}</td>
</tr>
<tr>
<td>Agama</td>
<td>${parsedURL.query.agama}</td>
</tr>
<tr>
<td>Hobi</td>
<td>${parsedURL.query.hobi}</td>
</tr>
</table>
 `);
      response.end();
  }else {
   response.statusCode = 404;
   response.setHeader('Content-Type', 'text/html');
   response.write('halaman tdk di temukan');
   response.end();
  }
});

server.listen(4003, () => {
    // Console will print the message
    console.log(`Server running at https://129.213.54.196:4003`);
 });
