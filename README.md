# nik_parse.js
Parse & Validasi Nomor Induk Kependudukan (NIK) KTP Menggunakan Javascript.

Sample
------
```html
<script type="text/javascript" src="js/nik_parse.js"></script>
<script>

	const nik = "3204110609970001";

	nikParse(nik, function(result) {
	
		// object
		console.log(JSON.stringify(result, null, 2));
	
	});
	
</script>
```

Result
------
```json
{
  "status": "success",
  "pesan": "NIK valid",
  "data": {
    "nik": "3204110609970001",
    "kelamin": "LAKI-LAKI",
    "lahir": "06/09/1997",
    "provinsi": "JAWA BARAT",
    "kotakab": "KAB. BANDUNG",
    "kecamatan": "KATAPANG",
    "uniqcode": "0001",
    "tambahan": {
      "kodepos": "40921",
      "pasaran": "Sabtu Pahing, 6 September 1997",
      "usia": "23 Tahun 1 Bulan 27 Hari",
      "ultah": "10 Bulan 8 Hari Lagi",
      "zodiak": "Virgo"
    }
  }
}
```

```json
{
  "status": "error",
  "pesan": "NIK tidak valid"
}
```

<h2><a href="http://bachors.com/code/validasi-nik-ktp-menggunakan-javascript-nik_parsejs?embed">DEMO</a></h2>
