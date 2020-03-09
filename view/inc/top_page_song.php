<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Alta de Song</title>
		<!-- <link rel="stylesheet" href="view/assets/css/main.css" /> -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.css" />
		<link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" />
		<link rel="stylesheet" href="view/js/jqwidgets/jqwidgets/styles/jqx.base.css" type="text/css" />


		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>
		<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>

		


        <!-- <script src="view/assets/js/jquery.min.js"></script> -->
        <script src="view/assets/js/jquery.dropotron.min.js"></script>
        <script src="view/assets/js/browser.min.js"></script>
        <script src="view/assets/js/breakpoints.min.js"></script>
        <script src="view/assets/js/util.js"></script>
        <script src="view/assets/js/main.js"></script>


        <script src="view/js/translate.js"></script>
        <script src="view/js/current.js"></script>



		<link rel="stylesheet" href="view/assets/css/main.css" />
	    <script src="module/song/model/validate_song_create.js"></script>
		<script src="module/song/model/validate_song_deleteall.js"></script>
		<script src="module/song/model/validate_song_update.js"></script>
		<script src="module/song/model/validate_song_delete.js"></script>
		<script src="module/song/model/validate_song_list.js"></script>
		<script src="view/js/translate.js"></script>
		<script src="view/js/current.js"></script>
        <script src="module/search/view/search.js"></script>
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxcore.js"></script>
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxbuttons.js"></script>
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxscrollbar.js"></script>
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxdata.js"></script> 
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxdatatable.js"></script> 
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxcheckbox.js"></script>
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxlistbox.js"></script>
		<script type="text/javascript" src="view/js/jqwidgets/jqwidgets/jqxdropdownlist.js"></script>
		<script type="text/javascript" src="view/js/jqwidgets/scripts/demos.js"></script>

    	<script type="text/javascript">
        	$(function() {
        		$('#relase_date').datepicker({
        			dateFormat: 'dd/mm/yy', 
        			changeMonth: true, 
        			changeYear: true, 
        			yearRange: '1900:2016',
        			onSelect: function(selectedDate) {
        			}
        		});
			});	
	    </script>
    </head>
    <body>