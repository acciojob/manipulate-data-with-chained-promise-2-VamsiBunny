const output=document.getElementById("output");

let array=[1,2,3,4];
let result=[];
let Promise1=new Promise((resolve,reject)=>{
	for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
			result.push(array[i]);
		}
	} resolve(result)
})
Promise1.then((res)=>{
	setTimeout(()=>{
		output.innerText=`${result}`
	},1000);
	return result;
	
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






