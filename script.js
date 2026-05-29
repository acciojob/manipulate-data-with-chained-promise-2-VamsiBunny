const output=document.getElementById("output");

let array=[1,2,3,4];

let Promise1=new Promise((resolve,reject)=>{
	let result=[];
	for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
			result.push(array[i]);
		}
	} resolve(result)
})
Promise1.then((result)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		output.innerText=`${result}`
	},1000);
	resolve(result);
	})
	
	
}).then((result)=>{
	let mult=[];
	for(let i=0;i<result.length;i++){
		mult.push(result[i]*2);
	}
	setTimeout(()=>{
		output.innerText=`${mult}`
	},3000);
})
	.catch((e)=>{
	output.innerHTML=`${e}`;
})

