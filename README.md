# nik_parse.js
Parse NIK Menggunakan Javascript.

Kodevikasi/menterjemahkan NIK untuk memvalidasi asli atau palsu untuk menghindari penipuan.

<img src="kodenik.jpg"/>

Sample
------
```html
<script type="text/javascript" src="js/nik_parse.js"></script>
<script>

	const nik = "xxxxxxxxxxxxxxxx";
	
	// parse
	const result = nikParse(nik);
	
	// object
	console.log(JSON.stringify(result, null, 2));
	
</script>
```

Result
------
```json
{
  "nik": "xxxxxxxxxxxxxxxx",
  "wilayah": {
    "provinsi": "JAWA BARAT",
    "kotakab": "KAB. BANDUNG",
    "kecamatan": "KATAPANG"
  },
  "kelamin": "L",
  "lahir": {
    "tanggal": "06",
    "bulan": "09",
    "tahun": "1997"
  },
  "uniqcode": "0004"
}
```
