<script>
    import { onMount } from "svelte";
    import Footer from "../components/Footer.svelte";
    import { getDatabase, ref, onValue } from "firebase/database";
  import Header from "../components/Header.svelte";

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

<Header />

<main>
    {#each items as item}
    <div class = "item-list">
        <div class = "item-list__img">
            <img src = {item.imgURL} alt=""/>
        </div>
        <div class = "item-list__info">
            <div class = "item-list__info-title">{item.title}</div>
            <div class = "item-list__info-meta">{item.place} - {calcTime(item.insertAt)}</div>
            <div class = "item-list__info-price">{item.price.toLocaleString()}원</div>
            <div>{item.description}</div>
        </div>
    </div>
    {/each}
    <a class="write-button" href="#/write">+ write</a>
</main>

<div class="media-info-msg"></div>

<Footer location="home"/>
