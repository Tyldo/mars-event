 <template>

<div>

  <h1 v-on:click="al">{{ msg }}</h1>

</div>

</template>

<script>

export default {

name: 'About',

data: function(){

  return {
    msg: 'Назад',
  }
},
methods: {
  al: function(){
    this.$router.go(-1)
  }
}


}

</script> 

<style scoped>
  h1 {
    color: pink;
    background: grey;

  }
  h1:hover {
    cursor: pointer;
  }

</style>                                                                                                                                                                                                                            
