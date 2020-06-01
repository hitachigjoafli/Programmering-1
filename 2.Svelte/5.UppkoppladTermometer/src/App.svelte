<script>
  // import { onMount } from "svelte";
  import Table from "./Table.svelte";
  import TempChart from "./TempChart.svelte";
  import { db, firebase } from "./firebase.js";
  import { ExampleRead, ExampleWrite } from "./store.js";
  // https://firebase.google.com/docs/database/web/read-and-write
  // https://github.com/mobizt/Firebase-ESP8266
  // https://softauthor.com/javascript-firebase-get-logged-in-user-data-real-time-database
  let name = "";
  let currentTemp = 0;
  let log = [];
  let updatedTime = [];
  let LogTimeData = [];
  let Loaded = false;

  var getfromDB = db.ref("Temp");
  getfromDB.on("value", function(snapshot) {
    console.log(snapshot.val());
    name = snapshot.val().Name || "Anonymous";
    currentTemp = snapshot.val().Current || 0;
    log = Object.keys(snapshot.val().Log).map(function(key) {
      return snapshot.val().Log[key];
    });
    updatedTime = Object.keys(snapshot.val().Updated).map(function(key) {
      return new Date(snapshot.val().Updated[key]).toLocaleString();
    });
    let index = 0;
    log.forEach(Tempvalue => {
      LogTimeData.push({
        value: Tempvalue,
        label: updatedTime[index] || "Missing timeslot"
      });
      index += 1;
    });
    Loaded = true;
    console.log(LogTimeData);
    // console.log(updatedTime)
    // console.log(log)
  });
  // function GetTempdata() {
  //   console.log("Kör")
  //     db.ref('Temp').once("value", snap => {
  //   // console.log("Kört")
  //         console.log(snap.val())
  //     })
  // }
  // function writeTempData() {
  //     firebase.database().ref('Temp/Current').set(21).catch(error => {
  //         console.log(error.message)
  //     });
  // }

  function ClearLog() {
    db.ref("Temp/Log")
      .remove()
      .then(function() {
        console.log("Remove succeeded.");
        log = [];
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message);
      });
    db.ref("Temp/Updated")
      .remove()
      .then(function() {
        console.log("Remove succeeded.");
        updatedTime = [];
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message);
      });
  }

  // onMount(() => {
  //   // GetTempdata();
  //   // writeTempData();
  // });
</script>

<div class="container2">
  <h1>Mätare: {name}</h1>
  <h2>Nuvarande temperatur: {currentTemp}</h2>
  {#if Loaded == true}
    <TempChart data={LogTimeData} />
    <Table {log} {updatedTime} />

    <button on:click={ClearLog}>Clear log</button>
  {/if}

</div>

<style>
  .container2 {
    background-image: url("https://p1.pxfuel.com/preview/303/988/972/tree-banch-plant-nature.jpg");
    width: 100%;
  }
  /* .container {
    background-image: url("https://images.unsplash.com/photo-1522988796650-2cc783a2a4b3?dpr=1&auto=compress,format&w=1920&q=80&cs=tinysrgb");

    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
  } */
</style>