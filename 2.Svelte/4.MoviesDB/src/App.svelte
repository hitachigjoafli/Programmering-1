<script>  
	import { onMount } from "svelte";
  import Card from './Card.svelte';
  import { FirebaseApp, Doc, Collection, User, UploadTask, StorageRef } from "sveltefire";
import {db,firebase} from './firebase.js'
	import { MoviePosters } from './store.js';
//https://github.com/codediodeio/sveltefire/blob/master/README.md Sveltefire doc!

  let Posters= $MoviePosters // Ladda in data från store, använd när du joxar
// let ref={db}

	//   let Posters = getPoster();
  // async function getPoster() {
	// 	console.log()
  //   const res = await fetch(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"
  //   );
  //   const posters = await res.json();
	// 	console.log(posters)
  //   return posters;
  // }
	
</script>

<div class="container">
<FirebaseApp {firebase}>

        <!--  = -->
  <Collection
        path={db.collection('comments')}
    
        let:data={comments}
        let:ref={commentsRef}
        log>
  <Collection
        path={db.collection('users')}
    
        let:data={users}
        let:ref={userRef}
        log>

        <div slot="loading">Loading...</div>

        <div slot="fallback">Unable to display comments...</div>

<!-- {#await Posters}
    Loading....
  {:then data}
    {#each data.results as Poster, index}
    <div class="inner">
<Card userRef={userRef} users={users} Commentref={commentsRef} Comments={comments.filter(element => element.movieId == Poster.id)} Poster={Poster}></Card>  
  
    </div> 
    {/each}
  {/await} -->

   {#each Posters.results as Poster, index}
	<Card userRef={userRef} users={users} Commentref={commentsRef} Comments={comments.filter(element => element.movieId == Poster.id)} Poster={Poster}></Card>  
    {/each}
    
    
      </Collection>
      </Collection>
</FirebaseApp>
</div>

<style>
	.container {
    background-image: url("https://images.unsplash.com/photo-1522988796650-2cc783a2a4b3?dpr=1&auto=compress,format&w=1920&q=80&cs=tinysrgb");
    /* background-color: aquamarine; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* fraction*/
}
</style>