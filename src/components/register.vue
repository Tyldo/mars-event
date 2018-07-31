<template>
 <form v-on:submit.prevent="postData"  >
        <div class='frm'>
          <h2 v-on:click="push">Check in</h2>
          <input v-model='form.firstName' type='text' placeholder='First Name' name='firstName'></input>
          <input v-model='form.lastName' type='text' placeholder='Last Name' name='lastName'></input>
          <input v-model='form.pass' type='password' placeholder='Password ' name='pass'></input>
          <input v-model='form.mail' type='email' placeholder='Your e-mail' name='mail'></input>

          <button  type='submit'>I will be there!</button>


        </div>

 </form>

</template>

<script>
var api = require('../../api.js')
export default {
	name: 'register',
  data: function() {
    return {

      name: 'Soslan',
      form: {
        firstName:'',
        lastName: '',
        pass: '',
        mail:''
      }
    }
  },
  methods: {
    postData:function(){
      return api().post('user',this.form)
        .then(function(res){
          alert(res.data)
        })
    },
    push: function(){
      this.$router.push('About')
    }
  }
}
</script>

<style scoped>
input {
        display: block;
        margin-bottom: 15px;
      }
      form {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0px;
        background: rgba(19, 35, 47, 0.9);

      }
      input {
        font-family: inherit;
        font-size: 22px;
        display: block;
        width: 100%;
        height: 100%;
        background: none;
        border: 1px solid #a0b3b0;
        color: #ffffff;
        border-radius: 0;
        padding: 15px 5px;
        box-sizing: border-box;
      }
      input:focus {
        outline: 0;
        border-color: #1ab188;
      }
      button {
        width: 100%;
        height: 100%;
        font-size: 22px;
        padding: 15px 0px;
        background: #1ab188;
        border: none;
        color: #ffffff;
        font-family: inherit;
      }
      button:hover {
        cursor: pointer;
      }
      .frm {
        text-align: center;
        width: 500px;
        color: #ffffff;
      }
      @media (max-width: 700px) {
        .frm {
          width: 100%;
          box-sizing: border-box;

        }
        input {
          width: 80%;
          margin: 15px auto;

        }
      }
</style>
