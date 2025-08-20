// assets/app.js
(function(){
  // Active link highlight
  const here = location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll("nav a").forEach(a=>{
    let href = a.getAttribute("href");
    if(!href) return;
    // normalize relative links
    const url = new URL(href, location.origin + location.pathname).pathname.replace(/\/index\.html$/, "/");
    if (here.endsWith(url) || (url !== "/" && here.includes(url))) {
      a.classList.add("active");
    }
  });

  // Sidebar collapse (mobile)
  const toggle = document.getElementById("navToggle");
  const aside = document.querySelector("aside");
  if(toggle && aside){
    toggle.addEventListener("click", ()=>{
      aside.style.display = (aside.style.display === "none" ? "" : "none");
    });
  }

  // Theme toggle with persistence
  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn){
    let mode = localStorage.getItem("theme"); // "light" | "dark" | null (system)
    const apply = (m)=>{
      if(m==="light"){ document.documentElement.style.colorScheme="light"; document.documentElement.dataset.theme="light"; }
      else if(m==="dark"){ document.documentElement.style.colorScheme="dark"; document.documentElement.dataset.theme="dark"; }
      else { document.documentElement.style.colorScheme="normal"; document.documentElement.dataset.theme=""; }
      localStorage.setItem("theme", m||"");
    };
    themeBtn.addEventListener("click", ()=>{
      mode = (mode==="dark" ? "light" : "dark");
      apply(mode);
    });
    if(mode) apply(mode);
  }
})();
