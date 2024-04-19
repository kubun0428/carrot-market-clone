<script>
  import Main from "./pages/Main.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Signin from "./pages/Signin.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from 'svelte-spa-router';
  import MyProfile from "./pages/MyProfile.svelte";
  import "./css/style.css"
  import {user$} from "./store"
  import { GoogleAuthProvider, getAuth, signInWithCredential } from "firebase/auth/web-extension";
  import { onMount } from "svelte";
  import Loading from "./pages/Loading.svelte";

  let isLoading = true;

  const auth = getAuth();

  const checkSignin = async () =>{
    try{
      const token = localStorage.getItem("token");
      if (!token) return (isLoading=false);
  
      const credential = GoogleAuthProvider.credential(null, token);
      const result = await signInWithCredential(auth, credential);
      const user = result.user;
      user$.set(user);
    } catch (error){
      console.error("Login failed: ", error);
    } finally{
      isLoading = false;
    }
  }

  const routes = {
    '/': Main,
    '/signup': Signup,
    '/write': Write,
    '/myprofile': MyProfile,
    '*': NotFound
  }

  onMount(()=>checkSignin());
</script>

{#if isLoading}
<Loading />
{:else if !$user$}
  <Signin />
{:else}
  <Router routes = {routes} />
{/if}