$(document).ready(function () {
    // $.ajax({
    //     type: "GET",
    //     dataType: "json",
    //     url: "module/song_list/controller/controller_song_list.php?op=dades",
    //     success: function (data) {
    //         console.log(data);

    //     }
        
    // })



    var url = "module/song_list/controller/controller_song_list.php?op=dades";  
    // prepare the data
    var source =
    {
        dataType: "json",
        dataFields: [
            { name: 'id_song', type: 'string' },
            { name: 'song_name', type: 'string' },
            { name: 'singer', type: 'string' },
            { name: 'album', type: 'string' }
        ],
        id: 'id',
        url: url
    };
    
    var dataAdapter = new $.jqx.dataAdapter(source);
    $("#contenido_list").jqxDataTable(
    {
        width: getWidth("dataTable"),
        pageable: true,
        pagerButtonsCount: 10,
        source: dataAdapter,
        sortable: true,
        pageable: true,
        altRows: true,
        filterable: true,
        columnsResize: true,
        pagerMode: 'advanced',
        columns: [
          { text: 'Reference Code', dataField: 'id_song'},
          { text: 'Brand', dataField: 'song_name' },
          { text: 'Model', dataField: 'singer'},
          { text: 'Price', dataField: 'album' }
      ]
    });
    
});