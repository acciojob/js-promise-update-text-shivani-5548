//your JS code here. If required.
function returnPromise() {
	let pro=new Promise((resolve)=>{
		setTimeout(()=>{resolve("Hello, world!")},1000);
	})
	return pro;
}

let ele=document.getElementById("output");
returnPromise().then((data)=>{ele.innerText=data;})