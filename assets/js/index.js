$.ajax({
    url         : "http://data.go.id/dataset/f44253ab-d2eb-4d2d-8e84-a24c8407910a/resource/01f14641-7437-4c31-bfa4-69efc436d6b4/download/statistik.json",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){
        //menghitung jumlah data
        jmlData = data.length;
        
        //variabel untuk menampung tabel yang akan digenerasikan
        buatTabel = "";
        
        //perulangan untuk menayangkan data dalam tabel
        for(a = 0; a < jmlData; a++){
            
            //mencetak baris baru
            buatTabel += "<tr>"
            
                        //membuat penomoran
                        + "<td>" + (a+1) + "</td>"
                        //mencetak nama instansi
                        + "<td>" + data[a]["InstansiName"] + "</td>"
                        //mencetak jumlah laporan "belum"
                        + "<td>" + data[a]["belum"] + "</td>"
                        //mencetak jumlah laporan "proses"
                        + "<td>" + data[a]["proses"] + "</td>"
                        //mencetak jumlah laporan "selesai"
                        + "<td>" + data[a]["selesai"] + "</td>"
            //tutup baris baru
                + "<tr/>";
        }
        //menayangkan jumlah data
        document.getElementsByTagName('textarea')[0].value = jmlData;
        //mencetak tabel
        document.getElementsByTagName("table")[0].innerHTML += buatTabel;
    }
});