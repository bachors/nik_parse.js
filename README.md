# nik_parse.js
Parse Nomor Induk Kependudukan (NIK) KTP Menggunakan Javascript.

Sample
------
```html
<script type="text/javascript" src="js/nik_parse.js"></script>
<script>

	const nik = "3204110609970004";
	
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
  "nik": "3204110609970004",
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

<h2><a href="http://jsfiddle.net/p2vdjfch/5/">DEMO</a></h2>
