function check(link) {
        if (document.referrer !== link) {
          document.body.style.display = "none";
          window.location.replace('https://danshub23.github.io/School/less/Chinese/Chinese.html');
        }
      }
function run() {
        window.location.replace("https://danshub23.github.io/School/less/Chinese/Chinese.html");
      }
window.addEventListener("pageshow", function(){
        check("https://danshub23.github.io/School/code/test.html")
});
      window.addEventListener("load", function(){
        check("https://danshub23.github.io/School/code/test.html")
});
      document.getElementById("butt1").addEventListener("click", run);
