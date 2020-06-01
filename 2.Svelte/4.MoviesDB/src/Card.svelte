<script>
		import Fastfact from './Fastfact.svelte';
		import Flag from './Flag.svelte';
		import CommentBox from './CommentBox.svelte';
	export let Poster;
	export let Comments;
	export let Commentref;
	export let users;
	export let userRef;
	let addComment=false;

		function showComment() {
		addComment=!addComment
	}
//   import { db } from './firebase';
//   import { collectionData } from 'rxfire/firestore';
//   import { startWith } from 'rxjs/operators';



// const query = db.collection('comments') .where('movieId', '==', Poster.id).orderBy('created');

// const Comments = collectionData(query, 'id').pipe(startWith([]));
</script>

<div class="box">
	<h1>{Poster.original_title}<Flag Country={Poster.original_language}></Flag></h1>
	<div class="sidebyside">
			<Fastfact Fact={Poster.vote_average} Smileys={["👎🏽","👍🏽","👊🏽","🤞🏽"]} Parameters={[0,3,7,10]}></Fastfact>
		<Fastfact Fact={Poster.popularity} Smileys={["😿","😸","😹","😻"]} Parameters={[0,60,100,140]}></Fastfact>
	<Fastfact Fact={Poster.vote_count} Smileys={["🙎‍","👯","👪","👪👪"]} Parameters={[0,150,400,1500]}></Fastfact>	

	</div>
	<h2>
			{Poster.release_date}  {Poster.id}
		</h2>
		<button on:click="{showComment}">Comments</button>
	{#if (addComment==true)}
		<h2>Comments</h2>
		{#each Comments as Comment}
<h4><img class="userPic" alt="image" src="{users.find(element => element.id === Comment.userId).photourl}"/> {users.find(element => element.id === Comment.userId).name}: {Comment.headline}</h4>
<p>{Comment.comment}</p>
        
	{/each}

	<CommentBox userRef={userRef} users={users} Commentref={Commentref} movieId={Poster.id}></CommentBox>
	{/if}
	<p>
		{Poster.overview}
	</p>
	<img alt="image of {Poster.orginal_title}" src="http://image.tmdb.org/t/p/w500{Poster.poster_path}">
</div>

<style> 
	.box{
		border: black solid 3px;
		background-color: grey;
/* 		background-image:   url("http://image.tmdb.org/t/p/w500{Poster.backdrop_path}") */
	  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
	}
	.userPic{
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}
h1{
		text-align: center;
	color:white;
	padding-left:25px;
	}
	h2{
	color:white;
	padding-left:25px;
	}
	.sidebyside{
/* 		clear:both; */
		display: flex;
			padding: 0px 0px 5px 50px;
	}
</style>