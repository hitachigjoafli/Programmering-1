<script>

	import AddUser from './AddUser.svelte';
	export let Commentref;
	export let movieId;
	export let users;
	export let userRef;
	let headline = '';
    let comment = '';
	let i = 0;
	let Addu=false;

		function showUserBox() {
		Addu=!Addu
	}

	$: selected = users[i];

    	// $: filteredPeople = prefix
		// ? people.filter(person => {
		// 	const name = `${person.last}, ${person.first}`;
		// 	return name.toLowerCase().startsWith(prefix.toLowerCase());
		// })
		// : users;



</script>


<select bind:value={i} size={5}>
	{#each users as person, i}
		<option value={i}>{person.name}</option>
	{/each}
</select>
 <button on:click="{showUserBox}"> Add new user?   </button>
{#if (Addu==true)}
<AddUser userRef={userRef}></AddUser>
{/if}
<label><input bind:value={headline} placeholder="Headline"></label>
<label><input bind:value={comment} placeholder="Commment"></label>

  <button
   disabled="{!comment || !headline}"
          on:click={() => Commentref.add({
              headline: headline,
              comment: comment,
			  movieId: movieId.toString(),
			  userId: selected.id
            })}>
          Add Comment
        </button>