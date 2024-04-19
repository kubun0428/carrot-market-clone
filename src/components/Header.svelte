<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  setInterval(() => {
      min = min+1
  }, 1000*60);

  let startX;
  let scrollLeft;
  let isDown = false;

  function handleMousedown(event) {
    isDown = true;
    startX = event.pageX - event.currentTarget.offsetLeft;
    scrollLeft = event.currentTarget.scrollLeft;
  }

  function handleMouseleave() {
    isDown = false;
  }

  function handleMouseup() {
    isDown = false;
  }

  function handleMousemove(event) {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - event.currentTarget.offsetLeft;
    const walk = (x - startX) * 3;
    event.currentTarget.scrollLeft = scrollLeft - walk;
  }
</script>

<header>
  <div>
    <div class="info-bar">
      <div class="info-bar__time">{hour}:{min}</div>
      <button class="info-bar__island"></button>
      <div class="info-bar__icons">
        <img src="assets/signal.svg" alt =""/>
        <img src="assets/wifi.svg" alt =""/>
        <img src="assets/battery.svg" alt =""/>
      </div>
    </div>
    <div class="menu-bar1">
      <div class="menu-bar1__location">
        방이2동
        <img src="assets/arrow.svg" alt =""/>
      </div>
      <div class="menu-bar1__icons">
        <img src="assets/magnifier.svg" alt =""/>
        <img src="assets/bell.svg" alt =""/>
      </div>
    </div>
    <div class="menu-bar2">
      <button><img src="assets/bars.svg" alt =""/> All</button>
      <button><img src="assets/magnifier.svg" alt =""/> Part-time Jobs</button>
      <button><img src="assets/house.svg" alt =""/> Real Estate</button>
      <button><img src="assets/car.svg" alt =""/> Used Cars</button>
    </div>
  </div>
</header>