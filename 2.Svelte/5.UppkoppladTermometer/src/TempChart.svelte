<!-- https://fusioncharts.github.io/svelte-fusioncharts/ -->
<script>
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

// Add dependencies
fcRoot(FusionCharts, Charts);
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
  fcRoot(FusionCharts, Charts, FusionTheme);
	export let data;
  let dataSource = {"chart": {
    "caption": "Temperaturen i Joakims arbetsrum",
    "subCaption": "Obs, detta är fakevärden",
    "xAxisName": "Mättillfällen",
    "yAxisName": "Temperatur",
    "numberSuffix": " grader",
    "theme": "fusion"
  },
  "data":data
}

   const chartConfig = {
      type: 'column2d',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
    dataFormat: 'json',
      dataSource
    };
</script>

<div id="chart-container" >
  <SvelteFC {...chartConfig} />
</div>