<script>
    import { onMount } from "svelte";
    import Footer from "../components/Footer.svelte";
    import { getDatabase, ref, onValue } from "firebase/database";

    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    setInterval(() => {
        min = min+1
    }, 1000*60);

    $: items = [];

    const db = getDatabase();
    const itemsRef = ref(db, "items/");
    onMount(()=>
        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();
            items = Object.values(data).reverse();
        })
    );

    const calcTime = (timeStamp) => {
        const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
        const time = new Date(curTime - timeStamp);
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();

        if (hour > 0) return `${hour} hours ago`;
        else if (minute > 0) return `${minute} minutes ago`;
        else if (second > 0) return `${second} seconds ago`;
        else return "just now";
    };
</script>

<header>
    <div>
      <div class="info-bar">
        <div class="info-bar__time">{hour}:{min}</div>
        <button class="info-bar__island"></button>
        <div class="info-bar__icons">
          <img src="assets\signal.svg" alt =""/>
          <img src="assets\wifi.svg" alt =""/>
          <img src="assets\battery.svg" alt =""/>
        </div>
      </div>
      <div class="menu-bar1">
        <div class="menu-bar1__location">
          방이2동
          <img src="assets\arrow.svg" alt =""/>
        </div>
        <div class="menu-bar1__icons">
          <img src="assets\magnifier.svg" alt =""/>
          <img src="assets\bell.svg" alt =""/>
        </div>
      </div>
      <div class="menu-bar2">
        <button><img src="assets\bars.svg" alt =""/> ALL</button>
        <button><img src="assets\magnifier.svg" alt =""/> Part-time Jobs</button>
        <button><img src="assets\house.svg" alt =""/> Real Estate</button>
        <button><img src="assets\car.svg" alt =""/> Used Cars</button>
      </div>
    </div>
</header>

<main>
    {#each items as item}
    <div class = "item-list">
        <div class = "item-list__img">
            <img src = {item.imgURL} alt=""/>
        </div>
        <div class = "item-list__info">
            <div class = "item-list__info-title">{item.title}</div>
            <div class = "item-list__info-meta">{item.place} - {calcTime(item.insertAt)}</div>
            <div class = "item-list__info-price">{item.price}</div>
            <div>{item.description}</div>
        </div>
    </div>
    {/each}
    <a class="write-button" href="#/write">+ write</a>
</main>

<div class="media-info-msg">The screen is too small.</div>

<Footer location="home"/>