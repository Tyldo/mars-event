<template>
  <div id="app">
    <Event/>
    <Registr/>
  </div>
</template>

<script>
import Event from '@/components/event'
import Registr from '@/components/register'

export default {
  components: {
    Event, Registr
  }

}
</script>

<style>
body {
  margin: 0;
    background-image: url("./../static/30-seconds-to-mars-thirty.jpg");
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


@media (max-width:479px) {
  p {
      font-size: 0.5em;
      text-align: left;

  }
  body {
    background-size: 100%;
  }
}





</style>
