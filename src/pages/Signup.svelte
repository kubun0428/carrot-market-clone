<script>
  import Footer from "../components/Footer.svelte";

</script>
<div>Sign-Up</div>
<form id="signup-form" action="\signup" method="POST">
    <div>
    <label for="id">id</label>
    <input type="text" id="id" name="id" required />
    </div>
    <div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" required />
    </div>
    <div>
    <label for="confirm-password">confirm password</label>
    <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        required
    />
    </div>
    <div>
    <label for="name">name</label>
    <input type="text" id="name" name="name" required />
    </div>
    <div>
    <label for="email">e-mail</label>
    <input type="email" id="email" name="email" required />
    </div>
    <div>
    <button type="submit">submit!</button>
    </div>
    <div id="info"></div>
</form>

<Footer location="signup"/>