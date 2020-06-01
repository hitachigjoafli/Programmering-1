<script>

	export let userRef;
	let name = '';
    let photourl = '';


</script>



<label><input bind:value={name} placeholder="name"></label>
<label><input bind:value={photourl} placeholder="Photo url"></label>
  <button
   disabled="{!name || !photourl}"
          on:click={() => userRef.add({
              name: name,
			  photourl: photourl,
            })}>
          Add User
        </button>