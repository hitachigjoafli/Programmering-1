<script>
		import Quizcard from './Quizcard.svelte';
	import { onMount } from "svelte";
	import { Quiz,pointcounter } from './stores.js';
  import { fade, blur } from "svelte/transition";
	
  let activeQuestion = 0;
// 	let Quiz=[{Question:"Hur många ben har en anka",Options:["3","2","1"], RightOption:1},{Question:"Vem är snurresprätt?",Options:["En kanin som gillar morötter","En anka som spottar mycket","En jägare med vapen"], RightOption:0}];
	let Q2= $Quiz.sort(randomOrder);
let resetOption=false
function randomOrder(a, b) {  
  return 0 - Math.random();
}  
	  function nextQuestion() {
    activeQuestion += 1;
  }  
	function reset() {
		$pointcounter=0;
    activeQuestion = 0;
		 Q2= $Quiz.sort(randomOrder);
  }
	
	
//   let quiz = getQuiz();
//   async function getQuiz() {
//     const res = await fetch(
//       "https://opentdb.com/api.php?amount=2&category=20&type=multiple"
//     );
//     const quiz = await res.json();
		
//     return quiz;
//   }

	  $: questionNumber = activeQuestion + 1;
	
// 	onMount( {
// 		console.log("tjio")
//   })
	
</script>

<h1>
	Quiz Party
</h1>
<!-- {#await quiz}
    Loading....
  {:then data}
    {#each data.results as question, index} -->
<!--     {#each $Quiz as question, index} -->
  {#each Q2 as question, index}
   {#if index === activeQuestion}
        <div transition:blur={{ amount: 10 }} class="fade-wrapper">
  <h4>Question: #{questionNumber}</h4>
<Quizcard  {nextQuestion} QuizData={question}></Quizcard>   
</div>
      {/if}
    {/each}
<!--   {/await} -->
   {#if activeQuestion == Q2.length}
<h1>
	Du fick {$pointcounter} poäng, bra jobbat!
</h1>
<button  on:click={reset}>
	Börja om
</button>
      {/if}
