let btn = document.querySelector(".toggle");

const theme = document.getElementById("dark-theme")



btn.addEventListener("click", function () {
 
  if (theme.getAttribute("href") == "darkmode.css") {
   
    theme.href = "style.css";
    
  } else {
    
    theme.href = "darkmode.css";
  }
});