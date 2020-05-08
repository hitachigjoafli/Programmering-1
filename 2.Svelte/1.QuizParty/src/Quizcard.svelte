<script>
	export let QuizData;
  export let nextQuestion;
	import { pointcounter, getPoints, Quiz } from './stores.js';
	
	let alternativ=["A","B","C"]
		let count = 30;
let Choosen=""
  let isAnswered = false;
		let showtext=true;

	function AnswerQuestion(Choice,text) {
		isAnswered = true;
		if(QuizData.RightOption== Choice)
		{
		Choosen=text+ " var rätt svar.Bra jobbat"
		$pointcounter+=1
	
		}
		else
		Choosen=text+ " var fel svar."
		showtext=true;
		const interval = setInterval(() => {
			console.log('bee11p');
			if(showtext==false)
				{
				nextQuestion()
					isAnswered=false
				clearInterval(interval)
				}
			showtext=false
		}, 1000);
	}
</script>

<div>
<!-- 	<h1>{QuizData.Question}?</h1>
	{#each QuizData.Options as option, i}	
	<h1 on:click={event => AnswerQuestion(i,option)}>Alternativ {alternativ[i]}: {option}</h1>
	{/each} -->
{#if isAnswered==false}
	<h1>{QuizData.Question}?</h1>
	{#each QuizData.Options as option, i}	
	<h1 on:click={event => AnswerQuestion(i,option)}>Alternativ {alternativ[i]}: {option}</h1>
	{/each}

{:else}
<h2 id="Points">
	{Choosen}
	<span >{$getPoints}</span>
	</h2>
{/if}
</div>

<style> 
	div{
		border: black solid 3px;
		background-color: grey;
	}
h1{
	color:white;
	padding-left:25px;
	}
	#Points{
/* 	right:10px;	 */
		text-align: right;
		
	}
</style>