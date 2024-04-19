<script>
  import Main from "./pages/Main.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Signin from "./pages/Signin.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from 'svelte-spa-router';
  import "./css/style.css"

  const routes = {
    '/': Main,
    '/signup': Signup,
    '/write': Write,
    '/Signin': Signin,
    '*': NotFound
  }
</script>
<Router routes = {routes}/>