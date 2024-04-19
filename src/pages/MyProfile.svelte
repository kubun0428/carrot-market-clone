<script>
  import Footer from "../components/Footer.svelte";
  import { user$ } from "../store";
  const signout = () =>{
    user$.set(null);
    localStorage.removeItem("token");
  }
</script>

<div>My Profile</div>
<button on:click={signout}>Sign Out</button>
<Footer location = "myprofile"/>

<style>
    button{
        background-color: white;
        width: 200px;
        height: 50px;
        border: 1px solid gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
    }
</style>