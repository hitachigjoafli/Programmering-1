import { writable, derived } from 'svelte/store';

export const pointcounter = writable(0);
export const  Quiz= writable([{Question:"Hur många ben har en anka",Options:["3","2","1"], RightOption:1}
,{Question:"Vem är snurresprätt?",Options:["En kanin som gillar morötter","En anka som spottar mycket","En jägare med vapen"], RightOption:0},{Question:"Vem är Kalle anka?",Options:["En kanin som gillar morötter","En anka som spottar mycket","En jägare med vapen"], RightOption:1 },{Question:"Vem är Superman?",Options:["En man som kan krocka med ett tåg","Ett tåg","En måltid"], RightOption:0 },{Question:"Vem är Kalle anka?",Options:["En kanin som gillar morötter","En anka som spottar mycket","En jägare med vapen"], RightOption:1 }])

// export const getQuestion =  Quiz[0];
// export const getQuestion= function()

// 		{return  Quiz[0];
// 		}
// export const getQuestion = ()=>{
// 	return  Quiz[0];
// }

export const getPoints = derived(
	pointcounter,
	pointcounter => `Points: ${pointcounter}`
);