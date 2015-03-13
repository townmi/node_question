
var number = 20;
console.log("开始生成测试数据共"+number+"条");

var a1 = ["node", "js", "python", "java", "c++", "ruby", "html", "css", "c#", "c", "php","swift"];
var a = [];

for(var i=0; i<number; i++){

	var n = Math.floor( Math.random()*120/10 );

	a[i] = a1[n];
}
console.log(a);

console.log("测试开始");

var t1 = new Date().getTime();

console.log("开始计时---------->>>>"+t1);

// var a = ["node", "js", "node", "java", "php", "java", "node", "css", "java", "node", "html5"];
// var a = ["ruby", "node", "c#", "js", "css", "html", "c#", "c", "python", "html", "python", "js", "node", "c#", "html", "js", "c", "c++", "ruby", "html", "ruby", "css", "c#", "c++", "c++", "c", "ruby", "js", "c", "ruby", "c#", "java", "c++", "java", "c", "python", "c", "java", "java", "js", "node", "js", "java", "c", "ruby", "python", "ruby", "java", "java", "ruby", "html", "ruby", "python", "html", "node", "html", "c", "css", "c", "ruby", "html", "java", "python", "java", "html", "node", "c++", "c#", "ruby", "css", "css", "ruby", "node", "c++", "c#", "css", "c#", "ruby", "c", "css", "ruby", "css", "js", "python", "html", "java", "ruby", "c#", "c", "html", "java", "js", "ruby", "js", "java", "node", "python", "ruby", "c", "css"];

var arr = classify(a);

var t2 = new Date().getTime();

console.log("结束计时---------->>>>"+t2);

console.log(t2-t1);


var all = 0;

arr.forEach(function (e){

	all = all + e.num;
	console.log(e);
})

console.log(all);

function classify(arr){
	var a = arr;
	var result =[];

	for(var i=0; i<a.length; i++){
		var b = a.concat();
		result[i] = {};
		result[i].title = a[i];
		result[i].num = 1;

		for(var j=i+1; j<b.length; j++){
			if(result[i].title === a[j]){
				a.splice(j,1);
				result[i].num++;
			}
		}
	}

	return result;
}