$(document).ready(function(){
	
	//getXMLHttpRequestObject();
	//test();

	Set_value();
	SetCalendar();
	startTime();	
	CheckDate();

	$("#exit_id").click(function(){
		if (confirm("آیا میخواهید خارج شوید؟")) {
    	close();
  		}
  		//alert(window.history.back());

	});

	$("#input_text1").keydown(function(event){
		var str1,str2;
		if(event.which == 8) { //BackSpace
			var bck_spc;
			bck_spc = $(this).val().toString();
			bck_spc = bck_spc.substr(0, bck_spc.length-1);
			$("#login_data").data("username_text",bck_spc);
		}
		else if(event.which == 9){ //TAB
			$("#input_text2").focus();
			event.preventDefault();
		}
		else if((event.which >= 48) && (event.which <= 57) && ($(this).val().length < $(this).attr('maxlength'))){
			str1 = ($("#login_data").data("username_text")).toString();
			str2 = String.fromCharCode(event.which);
			str1 = str1.concat(str2);
			$("#login_data").data("username_text" , str1);
			$(this).val($("#login_data").data("username_text"));
			event.preventDefault();
		}
		else{
			event.preventDefault();
		//event.stopPropagation();
		}
	});
	$("#input_text2").keydown(function(event){
		if(event.which == 8) {
			var bck_spc;
			bck_spc = $(this).val().toString();
			bck_spc = bck_spc.substr(0, bck_spc.length-1);
			$("#login_data").data("password_text",bck_spc);
		}
		else if(event.which == 9){ //TAB
			$("#login_id").focus();
			event.preventDefault();
		}
		else if($(this).val().length < $(this).attr('maxlength')) {
			var str1,str2;
			str1 = ($("#login_data").data("password_text")).toString();
			str2 = String.fromCharCode(event.which);
			str1 = str1.concat(str2);
			$("#login_data").data("password_text" , str1);
			$(this).val($("#login_data").data("password_text"));
			event.preventDefault();
	}
	else{
			event.preventDefault();
		//event.stopPropagation();
		}
	});
	$("#login_id").keydown(function(event){
		if(event.which == 9){
			$("#exit_id").focus();
			event.preventDefault();
		}
	});
	$("#login_id").click(function(){
		if((!($("#input_text1").val())) || (!($("#input_text2").val()))) {
			alert("شناسه کاربری و گذر واژه را وارد نمایید");
		}
		else{
			if(($("#login_data").data("username_text") == '91213100') && ($("#login_data").data("password_text") == '1234567890')) {
				window.location.pathname="C:/Users/Vaio/Desktop/Golestan/Profile/Profile.html";
			}
			else{
				alert("شناسه کاربری یا گذرواژه صحیح نیست!");
			}
		}
	});


});	

function startTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $("#t1").text(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}
function CheckDate(){
	var myDate = new Date();	
		$("#lb1").text($("#day_data").data(myDate.getDay().toString()));
		$("#lb2").text(myDate.getFullYear());
		$("#lb3").text(" / " + myDate.getDate());
		$("#lb4").text(" / " + $("#month_data").data(myDate.getMonth().toString()));
}
function SetCalendar() {
	//for Day of Week
		$("#day_data").data("0","یکشنبه");
		$("#day_data").data("1","دوشنبه");
		$("#day_data").data("2","سه شنبه");
		$("#day_data").data("3","چهارشنبه");
		$("#day_data").data("4","پنجشنبه");
		$("#day_data").data("5","جمعه");
		$("#day_data").data("6","شنبه");
	//for Month Of Year
		$("#month_data").data("0","January");
		$("#month_data").data("1","February");
		$("#month_data").data("2","March");
		$("#month_data").data("3","April");
		$("#month_data").data("4","May");
		$("#month_data").data("5","June");
		$("#month_data").data("6","July");	
		$("#month_data").data("7","August");
		$("#month_data").data("8","September");
		$("#month_data").data("9","October");
		$("#month_data").data("10","November");
		$("#month_data").data("11","December");
}

function Set_value(){
	$("#login_data").data("username_text" , "");
	$("#login_data").data("password_text" , "");
}






/*
function test() {
	$.ajax({
	        url : "Users.txt",
            dataType: "text",
            success : function (data) {
                alert("success!!");
            }
        });
	/*
	jQuery.get("C:/Users/Vaio/Desktop/Golestan/DataFile/Users.txt", function(data) {
   	alert(data);
   //process text file line by line
});
}*/
/*
function getXMLHttpRequestObject() {
	var xmlhttp = null;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4){
			alert(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET","Users.txt",true);
	xmlhttp.send();
}*/