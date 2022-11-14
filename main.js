const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
let search = document.querySelector(".icon");
let clientID = "8I6_-D0o3xQe4yea7QOVlhQAiseOZnrEH5L-Q3dAOQE";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=Ed0qvd9WyNFqkIRJnPytgIFcixTCL9Niqm1zoBte_5U`;
fetch(endpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (Data) {
    console.log(Data);
    document.body.style.background = `url(${Data["urls"]["raw"]})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
