// const notifBanner1 = document.getElementById("banner1");

// de notif script

document.addEventListener(
  "DOMContentLoaded",
  function () {
    function timeForBanner() {
      document.getElementById("banner1").style.display = "block";
      document.getElementById("banner1").classList.add("slide-down");
      document.getElementById("banner2").style.display = "block";
      document.getElementById("banner2").classList.add("slide-down");
    }

    const timeFilter = new Date("May 10, 2022 01:00:00 AM").getTime(),
      currentTime = new Date().getTime(),
      subtractMilliSecondsValue = timeFilter - currentTime;
    setTimeout(timeForBanner, subtractMilliSecondsValue);
  },
  false
);
