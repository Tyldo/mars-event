<template>
 <form action="https://httpbin.org/post" method="POST" >
        <div class='frm'>
          <h2>Check in</h2>
          <input type='text' placeholder='First Name'></input>
          <input type='text' placeholder='Last Name'></input>
          <input type='email' placeholder='E-mail'></input>
          <input type='password' placeholder='Password'></input>
          <button tupe='submit'>I will be there!</button>
        </div>

 </form>

</template>

<script>

export default {
	name: 'register'
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
