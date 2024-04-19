<script>
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    setInterval(() => {
        min = min+1
    }, 1000*60);
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
    <div></div>
  </header>
  <main>
    <a class="write-button" href="#/write">+ write</a>
  </main>
  <footer>
    <div class="footer-block">
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/house.svg" alt="" />
        </div>
        <div>Home</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/document.svg" alt="" />
        </div>
        <div>Local Community</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/location.svg" alt="" />
        </div>
        <div>Nearby</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/chat.svg" alt="" />
        </div>
        <div>Chat</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/person.svg" alt="" />
        </div>
        <div>My Profile</div>
      </div>
    </div>
  </footer>
  <div class="media-info-msg">The screen is too small.</div>