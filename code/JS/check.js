function check(link) {
        if (document.referrer !== link) {
          body.style.display = "none";
          window.location.replace('https://www.tkpss.edu.hk');
        }
      }
function run() {
        window.location.replace("https://www.tkpss.edu.hk");
      }
window.addEventListener("pageshow", function(){
        check("https://danshub23.github.io/School/code/test.html")
});
      window.addEventListener("load", function(){
        check("https://danshub23.github.io/School/code/test.html")
});
      document.getElementById("butt1").addEventListener("click", run);
