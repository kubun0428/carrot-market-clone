const calcTime = (timeStamp) => {
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timeStamp);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  if (hour > 0) return `${hour}시간 전`;
  else if (minute > 0) return `${minute}분 전`;
  else if (second > 0) return `${second}초 전`;
  else return "방금 전";
};

const renderData = (data) => {
  const main = document.querySelector("main");
  data.reverse().forEach(async (obj) => {
    const itemListDiv = document.createElement("div");
    itemListDiv.className = "item-list";

    const itemListImgDiv = document.createElement("div");
    itemListImgDiv.className = "item-list__img";
    const img = document.createElement("img");
    const res = await fetch(`/images/${obj.id}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    img.src = url;

    const itemListInfoDiv = document.createElement("div");
    itemListInfoDiv.className = "item-list__info";

    const itemListInfoTitleDiv = document.createElement("div");
    itemListInfoTitleDiv.className = "item-list__info-title";
    itemListInfoTitleDiv.innerText = obj.title;

    const itemListInfoMetaDiv = document.createElement("div");
    itemListInfoMetaDiv.className = "item-list__info-meta";
    itemListInfoMetaDiv.innerText = obj.place + " - " + calcTime(obj.insertAt);

    const itemListInfoPriceDiv = document.createElement("div");
    itemListInfoPriceDiv.className = "item-list__info-price";
    itemListInfoPriceDiv.innerText = obj.price;

    itemListImgDiv.appendChild(img);
    itemListDiv.appendChild(itemListImgDiv);
    itemListInfoDiv.appendChild(itemListInfoTitleDiv);
    itemListInfoDiv.appendChild(itemListInfoMetaDiv);
    itemListInfoDiv.appendChild(itemListInfoPriceDiv);
    itemListDiv.appendChild(itemListInfoDiv);
    main.appendChild(itemListDiv);
  });
};

const fetchList = async () => {
  const access_token = window.localStorage.getItem("token");
  const response = await fetch("/items", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 401) {
    alert("로그인이 필요합니다");
    window.location.pathname = "/signin.html";
    return;
  }

  const data = await response.json();
  renderData(data);
};

fetchList();
