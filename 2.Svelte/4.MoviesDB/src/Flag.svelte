<script>
	export let Country;
// 	let emojis[name:"EN",emoji:""]
	
function setFlag(){
	let flag=Country
	if(Country=="en")
	flag="us"
	else if (Country=="ja")
		flag="jp"
		else if (Country=="ko")
		flag="kr"
		let url="https://www.countryflags.io/"+flag+"/flat/64.png"
	
	return url;
}
	
</script>

<span>
<img alt={Country} src="{setFlag()}">
</span>
	
<style>
	span{
		margin-left: 30px;
	}
	</style>