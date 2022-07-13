/*******************************************************
 * #### nik_parse.js ####
 * Parse & Validasi Nomor Induk Kependudukan (NIK) KTP
 * Coded by @bachors 2018.
 * https://github.com/bachors/nik_parse.js
 * Updates will be posted to this site.
 *******************************************************/


const nikParse = function(nik, callback) {
    const U = require('../data/data.js')
	// Output NIK tidak valid
	let res = {
        status: "error",
        pesan: "NIK tidak valid"
    };
    const isNikValid = (nik.toString()).length == 16 &&  U.provinsi[nik.substring(0, 2)] && U.kabkot[nik.substring(0, 4)] && U.kecamatan[nik.substring(0, 6)]
	// validasi NIK
    if (isNikValid) {
        const N = (new Date).getFullYear().toString().substr(-2), // tahun sekarang
            E = nik.substring(10, 12), // tahun NIK
            O = nik.substring(6, 8), // tanggal NIK
            K = U.kecamatan[nik.substring(0, 6)].toUpperCase().split(" -- "); // kecamatan & kodepos
			
		// Kecamatan
        const L = K[0];
		
		// Kode POS
        const B = K[1];
			
		// Jenis kelamin
        let M = "LAKI-LAKI";
        O > 40 && (M = "PEREMPUAN");
		
		// tanggal lahir
        let S = O;
        O > 40 && (S = (O - 40).toString().length > 1 ? (O - 40).toString() : `0${(O-40).toString()}`);
		
		// bulan lahir
        const P = nik.substring(8, 10);
		
		// tahun lahir
        let D = `19${E}`;
        E < N && (D = `20${E}`);
		
		// Menerjemahkan tanggal lahir ke pasaran, usia, zodiak & ulang tahun
        const H = function(A) {
            const N = new Date,
                U = N.getFullYear(),
                I = N.getMonth(),
                E = A.split("-"),
                O = I < E[1] ? U : U + 1;
				
			// Ulang tahun counter
            const K = function(A) {
                    const N = new Date,
                        U = function(A) {
                            const N = A.split(/\D/),
                                U = new Date(N[2], --N[1], N[0]);
                            //return U && U.getMonth() == N[1] ? U : new Date(NaN)
                            return U && U.getMonth() == N[1] || U.getMonth() == ++N[1] ? U : new Date(NaN)
                        }(A) - N,
                        I = Math.floor(U / 2592e6),
                        G = Math.floor(U % 2592e6 / 864e5);
                    return `${I} Bulan ${G} Hari`
                }(`${parseInt(E[0])+1}/${E[1]}/${O}`);
			
            const L = T(E[0]), // int tanggal lahir
                B = T(E[1]), // int bulan lahir
                M = E[2]; // int tahun lahir
            
			// Pasaran
			const S = new Date(70, 0, 2),
				P = new Date(M, B-1, L),
				V = (P.getTime() - S.getTime() + 864e5) / 432e6,
				D = Math.round(10 * (V - Math.floor(V))) / 2,
				H = ["Wage", "Kliwon", "Legi", "Pahing", "Pon"][D],
				Z = `${["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"][R("w",G(0,0,0,B,L,M))]} ${H}, ${L} ${["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"][B-1]} ${M}`;
								
			// Usia				
            utahun = R("Y") - M, ubulan = R("m") - B, uhari = R("j") - L, uhari < 0 && (uhari = R("t", G(0, 0, 0, B - 1, R("m"), R("Y"))) - Math.abs(uhari), ubulan -= 1);
            ubulan < 0 && (ubulan = 12 - Math.abs(ubulan), utahun -= 1);
			const X = `${utahun} Tahun ${ubulan} Bulan ${uhari} Hari`;
			
			// Zodiak
			let W = "";
            (1 == B && L >= 20 || 2 == B && L < 19) && (W = "Aquarius");
            (2 == B && L >= 19 || 3 == B && L < 21) && (W = "Pisces");
            (3 == B && L >= 21 || 4 == B && L < 20) && (W = "Aries");
            (4 == B && L >= 20 || 5 == B && L < 21) && (W = "Taurus");
            (5 == B && L >= 21 || 6 == B && L < 22) && (W = "Gemini");
            (6 == B && L >= 21 || 7 == B && L < 23) && (W = "Cancer");
            (7 == B && L >= 23 || 8 == B && L < 23) && (W = "Leo");
            (8 == B && L >= 23 || 9 == B && L < 23) && (W = "Virgo");
            (9 == B && L >= 23 || 10 == B && L < 24) && (W = "Libra");
            (10 == B && L >= 24 || 11 == B && L < 23) && (W = "Scorpio");
            (11 == B && L >= 23 || 12 == B && L < 22) && (W = "Sagitarius");
            (12 == B && L >= 22 || 1 == B && L < 20) && (W = "Capricorn");
			
            return {
                pasaran: Z,
                usia: X,
                ultah: K,
                zodiak: W
            }
        }(`${S}-${P}-${D}`);
		
		// Output NIK valid
        res = {
            status: "success",
            pesan: "NIK valid",
            data: {
                nik: nik,
                kelamin: M,
                lahir: `${S}/${P}/${D}`,
                provinsi: U.provinsi[nik.substring(0, 2)],
                kotakab: U.kabkot[nik.substring(0, 4)],
                kecamatan: L,
                uniqcode: nik.substring(12, 16),
                tambahan: {
                    kodepos: B,
                    pasaran: H.pasaran,
                    usia: H.usia,
                    ultah: `${H.ultah} Lagi`,
                    zodiak: H.zodiak
                }
            }
        }
    }

	// get Time
    function G(...e){const t=new Date,n=e;let r=0;const s=["Hours","Minutes","Seconds","Month","Date","FullYear"];for(r=0;r<s.length;r++)if(void 0===n[r])n[r]=t[`get${s[r]}`](),n[r]+=3===r;else if(n[r]=parseInt(n[r],10),isNaN(n[r]))return!1;return n[5]+=n[5]>=0?n[5]<=69?2e3:n[5]<=100?1900:0:0,t.setFullYear(n[5],n[3]-1,n[4]),t.setHours(n[0],n[1],n[2]),(t.getTime()/1e3>>0)-(t.getTime()<0)}
	
	// get Date
	function R(e,t){let n,r,s=this;const o=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],a=/\\?(.?)/gi,u=(e,t)=>r[e]?r[e]():t,i=(e,t)=>{for(e=String(e);e.length<t;)e=`0${e}`;return e};return r={d:()=>i(r.j(),2),D:()=>r.l().slice(0,3),j:()=>n.getDate(),l:()=>`${o[r.w()]}day`,N:()=>r.w()||7,S(){const e=r.j();let t=e%10;return t<=3&&1==parseInt(e%100/10,10)&&(t=0),["st","nd","rd"][t-1]||"th"},w:()=>n.getDay(),z(){const e=new Date(r.Y(),r.n()-1,r.j()),t=new Date(r.Y(),0,1);return Math.round((e-t)/864e5)},W(){const e=new Date(r.Y(),r.n()-1,r.j()-r.N()+3),t=new Date(e.getFullYear(),0,4);return i(1+Math.round((e-t)/864e5/7),2)},F:()=>o[6+r.n()],m:()=>i(r.n(),2),M:()=>r.F().slice(0,3),n:()=>n.getMonth()+1,t:()=>new Date(r.Y(),r.n(),0).getDate(),L(){const e=r.Y();return e%4==0&e%100!=0|e%400==0},o(){const e=r.n(),t=r.W();return r.Y()+(12===e&&t<9?1:1===e&&t>9?-1:0)},Y:()=>n.getFullYear(),y:()=>r.Y().toString().slice(-2),a:()=>n.getHours()>11?"pm":"am",A:()=>r.a().toUpperCase(),B(){const e=3600*n.getUTCHours(),t=60*n.getUTCMinutes(),r=n.getUTCSeconds();return i(Math.floor((e+t+r+3600)/86.4)%1e3,3)},g:()=>r.G()%12||12,G:()=>n.getHours(),h:()=>i(r.g(),2),H:()=>i(r.G(),2),i:()=>i(n.getMinutes(),2),s:()=>i(n.getSeconds(),2),u:()=>i(1e3*n.getMilliseconds(),6),e(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:()=>new Date(r.Y(),0)-Date.UTC(r.Y(),0)!=new Date(r.Y(),6)-Date.UTC(r.Y(),6)?1:0,O(){const e=n.getTimezoneOffset(),t=Math.abs(e);return(e>0?"-":"+")+i(100*Math.floor(t/60)+t%60,4)},P(){const e=r.O();return`${e.substr(0,3)}:${e.substr(3,2)}`},T:()=>"UTC",Z:()=>60*-n.getTimezoneOffset(),c:()=>"Y-m-d\\TH:i:sP".replace(a,u),r:()=>"D, d M Y H:i:s O".replace(a,u),U:()=>n/1e3|0},this.date=function(e,t){return s=this,n=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),e.replace(a,u)},this.date(e,t)}
	
	// String to Integer
	function T(e,t){let n;const r=typeof e;return"boolean"===r?+e:"string"===r?(n=parseInt(e,t||10),isNaN(n)||!isFinite(n)?0:n):"number"===r&&isFinite(e)?0|e:0}
	
	// callback
	callback(res);
	
};

module.exports = {nikParse};