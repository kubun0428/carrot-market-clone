<script>
    import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
    import { user$ } from "../store";

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signinWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            user$.set(user);
            localStorage.setItem("token", token);
        } catch (error){
            console.error(error);
        }
    }
</script>
{#if $user$}
<div>{$user$?.displayName}</div>
{/if}
<div>Sign In</div>
<button class = "signin-btn" on:click={signinWithGoogle}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fYwewemkxU23tQQ-5rb9Vf3tglFVxw6FDLyM3fxVJQ&s" class = "google-img" alt=""/>
    <div>Sign in with Google</div>
</button>

<style>
    .signin-btn{
        background-color: white;
        width: 200px;
        height: 50px;
        border: 1px solid gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
    }
    .signin-btn img{
        width: 25px;
    }
</style>