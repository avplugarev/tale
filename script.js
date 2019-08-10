const dataurl="https://api.myjson.com/bins/jcmhn";
let tale = "";

// перебираем массив

function textTransform(item, index) {
	let var1 = $("input[name=var1]")[0].value;
	let var2 = $("input[name=var2]")[0].value;
	let var3 = $("input[name=var3]")[0].value;
	let var4 = $("input[name=var4]")[0].value;
	let var5 = $("input[name=var5]")[0].value;
	let var6 = $("input[name=var6]")[0].value;
	let speach = $("input[name=speach]")[0].value;

	item = item.replace(/{var1}/g, var1);
	item = item.replace(/{var2}/g, var2);
	item = item.replace(/{var3}/g, var3);
	item = item.replace(/{var4}/g, var4);
	item = item.replace(/{var5}/g, var5);
	item = item.replace(/{var6}/g, var6);
	item = item.replace(/{speach}/g, speach);
	tale=tale+item+'<br>';
}
//печатаем 
function print (tale) {

	$(".resultat").html(tale);
	
}


//получаем данные и выводим на страницу
function getMyData (dataurl) {
	$.getJSON(dataurl, function (data) {
		data['text'].forEach(textTransform); 
		print(tale);
	});
};

$(".getTale").on('click',function() {
	tale = "";
	getMyData(dataurl);
	
});



