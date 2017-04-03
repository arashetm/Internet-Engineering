$(document).ready(function(){
	$('.choice').mouseover(function(){
		$('body').css('cursor', 'pointer');
	});

	$('#d1').click(function(){
		$("#course_table").append("<table class='table' border='1' style='width: 50%;''><thead><tr><td align='center'>نمره</td><td align='center'>دانشجو</td></tr></thead><tbody><tr class=success'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>الیکا ناوی</td></tr><tr class='warning'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>پویا پاکشاد</td></tr></tbody></table>");
	});	
	$('#d2').click(function(){
		$("#course_table").append("<table class='table' border='1' style='width: 50%;''><thead><tr><td align='center'>نمره</td><td align='center'>دانشجو</td></tr></thead><tbody><tr class=success'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>الیکا ناوی</td></tr><tr class='warning'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>پویا پاکشاد</td></tr></tbody></table>");
	});
	$('#d3').click(function(){
		$("#course_table").append("<table class='table' border='1' style='width: 50%;''><thead><tr><td align='center'>نمره</td><td align='center'>دانشجو</td></tr></thead><tbody><tr class=success'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>الیکا ناوی</td></tr><tr class='warning'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>پویا پاکشاد</td></tr></tbody></table>");
	});
	$('#d4').click(function(){
		$("#course_table").append("<table class='table' border='1' style='width: 50%;''><thead><tr><td align='center'>نمره</td><td align='center'>دانشجو</td></tr></thead><tbody><tr class=success'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>الیکا ناوی</td></tr><tr class='warning'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>پویا پاکشاد</td></tr></tbody></table>");
	});
	$('#d5').click(function(){
		$("#course_table").append("<table class='table' border='1' style='width: 50%;''><thead><tr><td align='center'>نمره</td><td align='center'>دانشجو</td></tr></thead><tbody><tr class=success'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>الیکا ناوی</td></tr><tr class='warning'><td align='center' id='td1'><input type='button' name='change_grade' value='change'>&nbsp;&nbsp;<input type='text' name='text'></td><td align='center' id='td1'>پویا پاکشاد</td></tr></tbody></table>");
	});
});



/*
$('tbody').mouseover(function(){
		$('body').css('cursor', 'pointer');
		//$("#r2").addClass('active');
	});
	$('#td1').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td2').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td3').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td4').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td5').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td6').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td7').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td8').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});
	$('#td9').click(function(){
		$('#input_feild').append("<br><br><br><br><br><br><table class='table container' border='1' style='width: 50%;'><thead><tr><th>استاد</th><th align='center'>واحد</th><th align='center'>نمره</th><th align='center'>درس</th></tr></thead><tbody><tr class='success'></tr><tr class='warning'></tr></tbody></table>");
	});*/