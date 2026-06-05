function check(link) {
        if (document.referrer !== link) {
          body.style.display = "none";
          window.location.replace('https://www.tkpss.edu.hk');
        }
      }
function run() {
        window.location.replace("https://www.tkpss.edu.hk");
      }
window.addEventListener("pageshow", check);
      window.addEventListener("load", check);
      document.getElementById("butt1").addEventListener("click", run);
