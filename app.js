const navItems = document.querySelectorAll(".nav-item"),
stats = document.querySelectorAll(".content-stats"),

getData = async ()=>{
  const t = await fetch("./data.json");
  return await t.json()};

  navItems.forEach(( t => {
    t.addEventListener("click",
    ( e => {
    const r = document.querySelector(".active");
    
    t&&r.classList.remove("active"),e.target.classList.add("active"),
    getData().
      then(( t=> {
        t.forEach((({
        title:t,
        timeframes:r
      }) => {
      stats.forEach( ( n => 
        {const a = n.querySelector("h1").textContent,
        o=n.querySelector(".stats-text");
        "Daily"===e.target.textContent&&a===t ? (o.querySelector("h3").

      textContent=`${r.daily.current}hrs`,
          o.querySelector("span").textContent = `Yesterday - ${r.daily.previous}hrs`): "Weekly"===e.target.textContent&&a===t ? (o.querySelector("h3").textContent = `${r.weekly.current}hrs`,
          o.querySelector("span").textContent = `Last Week - ${r.weekly.previous}hrs`): "Monthly"===e.target.textContent&&a===t && (o.querySelector("h3").textContent = `${r.monthly.current}hrs`,
          o.querySelector("span").textContent=`Last Month - ${r.monthly.previous}hrs`
          )
        }))
      }))
    }))
  }))
}));


