<script>

	export let updatedTime;
	export let log;
</script>
<table  id="Logger"> 
<tr>
<th>Tid</th><th>Temperatur</th>
</tr>
{#each log as TemperaturValue, index}
<tr>
<td>
{updatedTime[index]|| 'Missing timeslot'}
</td>
<td>
{TemperaturValue}
</td>
</tr>
{/each}
</table>


<style>
#Logger {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  max-width: 600px;
}

#Logger td, #Logger th {
  border: 1px solid #ddd;
  padding: 8px;
}

#Logger tr:nth-child(even){background-color: #f2f2f2;}
#Logger tr:nth-child(odd){background-color: #4CAF50;}

#Logger tr:hover {background-color: #ddd;}

#Logger th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

</style>