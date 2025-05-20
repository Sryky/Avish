window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  (function autoHideZoomOverlayOnReturn() {
  setTimeout(() => {
    const overlay = document.getElementById("zoom-block-overlay");
    if (overlay) {
      overlay.remove();
      window.__overlayDisabled = true;
      console.log("[AutoHide] Overlay odstraněn. Dočasně zakázáno vkládání.");

      // Povolit znovu po 1500 ms
      setTimeout(() => {
        window.__overlayDisabled = false;
        console.log("[AutoHide] Overlay vkládání opět povoleno.");
      }, 1500);
    }
  }, 1500);
})();

}

window.Script2 = function()
{
  (function autoHideZoomOverlayOnReturn() {
  setTimeout(() => {
    const overlay = document.getElementById("zoom-block-overlay");
    if (overlay) {
      overlay.remove();
      window.__overlayDisabled = true;
      console.log("[AutoHide] Overlay odstraněn. Dočasně zakázáno vkládání.");

      // Povolit znovu po 1500 ms
      setTimeout(() => {
        window.__overlayDisabled = false;
        console.log("[AutoHide] Overlay vkládání opět povoleno.");
      }, 1500);
    }
  }, 1500);
})();

}

window.Script3 = function()
{
  (function autoHideZoomOverlayOnReturn() {
  setTimeout(() => {
    const overlay = document.getElementById("zoom-block-overlay");
    if (overlay) {
      overlay.remove();
      window.__overlayDisabled = true;
      console.log("[AutoHide] Overlay odstraněn. Dočasně zakázáno vkládání.");

      // Povolit znovu po 1500 ms
      setTimeout(() => {
        window.__overlayDisabled = false;
        console.log("[AutoHide] Overlay vkládání opět povoleno.");
      }, 1500);
    }
  }, 1500);
})();

}

window.Script4 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script5 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script6 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script7 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script8 = function()
{
  
(function cleanupRepeatedly() {
  const interval = setInterval(() => {
    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) clearInterval(interval); // Stop once cleanup is successful
  }, 100);
})();

}

window.Script9 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script10 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script11 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script12 = function()
{
  (function cleanupRepeatedly() {
  const interval = setInterval(() => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;

    const slideID = player.GetVar("SlideID");
    if (slideID === 1) {
      console.log("[Cleanup] SlideID je 1 – mazání přeskočeno");
      return;
    }

    let removed = false;

    const img = document.getElementById("dynamic-img");
    if (img) {
      img.remove();
      console.log("Removed dynamic image.");
      removed = true;
    }

    const iframe = document.querySelector("iframe");
    if (iframe && iframe.src && iframe.src.includes("upload.wikimedia.org")) {
      iframe.remove();
      console.log("Removed image iframe.");
      removed = true;
    }

    if (removed) {
      const overlay = document.getElementById("zoom-block-overlay");
      if (overlay) {
        overlay.remove();
        console.log("[Cleanup] Overlay odstraněn skriptem cleanupRepeatedly");
      }
      window.__overlayDisabled = true;
      window.__overlayRemovedManually = true;
      clearInterval(interval);
    }
  }, 100);
})();
}

window.Script13 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();




// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "announcement | notification", description: "an important or official statement", imageUrl: "https://media.gettyimages.com/id/2025430078/photo/an-airport-staff-member-talking-on-the-phone.jpg?s=2048x2048&w=gi&k=20&c=PS0GcmKhhGvstgKE7xYSvI6GpLwD_sgp5gppT4wXnKE=" },
  { id: 2, word: "arrivals hall | arrivals", description: "the area of an airport that deals with passengers that have just arrived", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8b/201607_Departure_hall_at_HGH_T2.jpg" },
  { id: 3, word: "baggage | luggage | suitcase", description: "items that contain somebody's clothes and things when they are travelling", imageUrl: "" },
  { id: 4, word: "baggage allowance | baggage weight limit", description: "the weight or number of cases and bags that a passenger is allowed to take onto an aircraft without paying extra", imageUrl: "" },
  { id: 5, word: "baggage drop off zone | baggage drop", description: "a place at an airport, where passengers can leave already checked-in bags to be put on a plane", imageUrl: "" },
  { id: 6, word: "baggage reclaim | baggage claim", description: "a place at an airport where arriving passengers collect their checked cases and bags after a flight", imageUrl: "" },
  { id: 7, word: "baggage tag | bag tags | baggage checks | luggage ticket", description: "a piece of information used by airline carriers to route checked luggage to its final destination", imageUrl: "" },
  { id: 8, word: "baggage wrapping service", description: "a technique used by many travelers to protect their checked luggage", imageUrl: "" },
  { id: 9, word: "boarding pass", description: "an official card that a passenger must have in order to be allowed to get on an aircraft", imageUrl: "" },
  { id: 10, word: "cancellation", description: "a situation in which something that has been arranged is stopped from happening", imageUrl: "" },
  { id: 11, word: "car park | parking lot", description: "an area or a building where people can leave their cars", imageUrl: "" },
  { id: 12, word: "concourse", description: "buildings that provide access to the airplanes (via gates); also a synonym for terminal building", imageUrl: "" },
  { id: 13, word: "corridor", description: "a long narrow passage in a building", imageUrl: "" },
  { id: 14, word: "customs", description: "a place at an airport where bags are checked for illegal or taxable goods", imageUrl: "" },
  { id: 15, word: "delay", description: "when something does not happen or start when it should do", imageUrl: "" },
  { id: 16, word: "departure hall", description: "a place where passengers get after leaving the general public concourse area", imageUrl: "" },
  { id: 17, word: "departures", description: "the section of a transport hub designated for outgoing passengers", imageUrl: "" },
  { id: 18, word: "disembark", description: "to leave a ship or an aircraft", imageUrl: "" },
  { id: 19, word: "duty-free shops", description: "shops selling products tax-free to customers", imageUrl: "" },
  { id: 20, word: "embark", description: "to get onto a ship or a plane", imageUrl: "" },
  { id: 21, word: "escalator", description: "a set of moving stairs", imageUrl: "" },
  { id: 22, word: "excess baggage | excess luggage | oversized luggage", description: "bags exceeding baggage allowance", imageUrl: "" },
  { id: 23, word: "final call | last call | final boarding call", description: "a notice to proceed to the gate", imageUrl: "" },
  { id: 24, word: "flight information display system", description: "screens showing flight status", imageUrl: "" },
  { id: 25, word: "gate | departure gate", description: "a part of an airport for boarding", imageUrl: "" },
  { id: 26, word: "hand luggage | cabin baggage | carry-on", description: "a small bag taken on a plane", imageUrl: "" },
  { id: 27, word: "check-in agent", description: "person verifying tickets and baggage", imageUrl: "" },
  { id: 28, word: "check-in desk", description: "place for ticket/bag verification", imageUrl: "" },
  { id: 29, word: "information desk", description: "counter for public information", imageUrl: "" },
  { id: 30, word: "information kiosk", description: "a synonym for information desk", imageUrl: "" },
  { id: 31, word: "jet lag", description: "tiredness from time zone changes", imageUrl: "" },
  { id: 32, word: "lift | elevator", description: "machine moving between building floors", imageUrl: "" },
  { id: 33, word: "luggage label | luggage tag", description: "ID tag on a bag", imageUrl: "" },
  { id: 34, word: "monorail", description: "single rail transport system", imageUrl: "" },
  { id: 35, word: "one-way ticket", description: "a single-direction travel ticket", imageUrl: "" },
  { id: 36, word: "online check-in", description: "web-based flight confirmation", imageUrl: "" },
  { id: 37, word: "passport", description: "official ID for international travel", imageUrl: "" },
  { id: 38, word: "portable barrier", description: "used to guide or restrict movement", imageUrl: "" },
  { id: 39, word: "priority lane", description: "faster line access", imageUrl: "" },
  { id: 40, word: "queue | line", description: "people waiting in order", imageUrl: "" },
  { id: 41, word: "reservations", description: "booking section of the airport", imageUrl: "" },
  { id: 42, word: "return ticket", description: "ticket for round trip", imageUrl: "" },
  { id: 43, word: "round-trip ticket", description: "a synonym for return ticket", imageUrl: "" },
  { id: 44, word: "self check-in kiosk", description: "automated check-in machine", imageUrl: "" },
  { id: 45, word: "speedy boarding", description: "priority boarding service", imageUrl: "" },
  { id: 46, word: "stand", description: "aircraft waiting/servicing position", imageUrl: "" },
  { id: 47, word: "terminal building", description: "passenger processing building", imageUrl: "" },
  { id: 48, word: "transfer lounge", description: "waiting area for connecting flights", imageUrl: "" },
  { id: 49, word: "transit areas", description: "areas for waiting in-between flights", imageUrl: "" },
  { id: 50, word: "travelator", description: "moving walkway for people", imageUrl: "" },
  { id: 51, word: "vending machine", description: "automated product dispenser", imageUrl: "" },
  { id: 52, word: "VIP lounge", description: "premium airport waiting area", imageUrl: "" }
];


function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);

}

window.Script14 = function()
{
  
(function showImageWhenReady() {
  const player = GetPlayer();

  const tryShow = () => {
    const url = player.GetVar("ImageURL");
    if (!url) {
      return setTimeout(tryShow, 50);
    }

    const slideWidth = 414;
    const slideHeight = 736;

    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const imageX = player.GetVar("ImageX") || 0;
    const imageY = player.GetVar("ImageY") || 0;

    const left = offsetX + imageX * scale;
    const top = imageY * scale;

    const existing = document.getElementById("dynamic-img");
    if (existing) existing.remove();

    const img = document.createElement("img");
    img.id = "dynamic-img";
    img.src = url;
    img.width = 330 * scale;
    img.height = 245 * scale;

    img.style.position = "absolute";
    img.style.left = `${left}px`;
    img.style.top = `${top}px`;
    img.style.zIndex = "9999";
    img.style.objectFit = "fill";

    img.onerror = () => {
      img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
    };

    document.body.appendChild(img);
  };

  tryShow();
})();

}

window.Script15 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

window.Script16 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script17 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();




// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "air stairs", description: "a set of steps built into an aircraft so that passengers may board and leave the aircraft", imageUrl: "https://www.aerospecialties.com/wp-content/uploads/2015/04/001746_AERO_Passenger-Stairs-88-161in_2014_10.jpg" },
  { id: 2, word: "passenger boarding bridge | PBB | air bridge | airbridge | jetway | jetty | sky bridge | skybridge", description: "an enclosed, elevated passageway between a gate and airplane that allows passengers to board and unboard aircraft without going outside to be exposed to the weather", imageUrl: "https://www.adelte.com/wp-content/uploads/2023/10/airport-passenger-boarding-bridge-noseloader.jpg" },
  { id: 3, word: "baggage cart | baggage truck | bag cart", description: "designed for baggage, mail and other packaged cargo transportation around airport terminals", imageUrl: "https://denge.aero/wp-content/uploads/2023/10/BA240B_5-1350x860.jpg" },
  { id: 4, word: "baggage trolley | luggage trolley | trolley", description: "small vehicles pushed by travelers (human-powered) to carry individual luggage", imageUrl: "https://p.turbosquid.com/ts-thumb/3C/O3MdEX/AyDiOVuY/baggage_with_airport_luggage_trolley_360/jpg/1538430850/1920x1080/turn_fit_q99/0010a34cdb52c36fe2e372bcd24dfc12ab675c76/baggage_with_airport_luggage_trolley_360-1.jpg" },
  { id: 5, word: "baggage carousel | round conveyor belt | luggage conveyor", description: "a device that delivers checked luggage to the passengers at the baggage reclaim area at their final destination", imageUrl: "https://thumbs.dreamstime.com/b/airport-baggage-claim-transporter-colorful-cases-d-illustration-96934761.jpg" },
  { id: 6, word: "bird control | wildlife control", description: "a service preventing any bird-related incidents", imageUrl: "https://images.ctfassets.net/biom0eqyyi6b/3ZT4JXeugmAK8ESA64YwTC/1c2d4d71466975ff0e4a76093a0f8a81/blog_birdcontroller_990.jpg" },
  { id: 7, word: "catering truck | catering vehicle", description: "a vehicle delivering food and beverages to an airplane", imageUrl: "https://www.milesgse.com/uploads/product/catering-truck-1.jpg" },
  { id: 8, word: "belt loader | conveyor belt loader | mobile belt loader", description: "a vehicle with a conveyor belt for un/loading baggage and cargo onto aircraft, positioned at the door sill of an aircraft hold", imageUrl: "https://powerstow.com/wp-content/uploads/2020/03/United-Airlines.jpg" },
  { id: 9, word: "conveyor belt | conveyer belt", description: "a continuous moving strip or surface that is used for transporting objects from one place to another", imageUrl: "https://as2.ftcdn.net/jpg/01/64/11/17/1000_F_164111750_FVu5XXsB0JuKX1upXuChBLQlus4pePjj.jpg" },
  { id: 10, word: "crane", description: "a tall machine with a long arm, used for lifting and moving heavy objects", imageUrl: "https://www.cranesandlifting.com.au/wp-content/uploads/2024/06/Grove.-Aircraft-Rescue.-1-1024x874.jpg" },
  { id: 11, word: "de-icer | de-icing truck | de-icing vehicle", description: "a vehicle with a hose spraying a special mixture that melts current ice on aircraft and also prevents some ice from building up while waiting on the ground   ", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Aeroflot_Airbus_A330-200_de-icing_Pereslavtsev.jpg" },
  { id: 12, word: "fire truck | fire lorry | fire engine", description: "a large vehicle that carries firefighters and their equipment to a fire; helps put out (extinguish) fire", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/MAN_Ziegler_FLF_60-1_airport_crash_tender_stuttgart_airport_2.jpg/1280px-MAN_Ziegler_FLF_60-1_airport_crash_tender_stuttgart_airport_2.jpg" },
  { id: 13, word: "fire engine | fire lorry", description: "a synonym for fire truck", imageUrl: "https://hwfrs.delivr.media/wFArfs56krnrNyYEUbEUsbPUEmE=/fit-in/1024x1707/https%3A%2F%2Fwww.hwfire.org.uk%2Fwp-content%2Fuploads%2F2023%2F08%2Fpershore-scania-scaled.jpg" },
  { id: 14, word: "flat-bed truck", description: "a vehicle for carrying cargo, often used for carrying oversized loads or products with unusual shapes", imageUrl: "https://imtbc.com/wp-content/uploads/bfi_thumb/Oversized-Helicopter-Transport-o94wnrlibymj0ah76r1psipjojwyd35h1rgl5sv9lw.jpg" },
  { id: 15, word: "follow me car | follow-me vehicle | follow me", description: "a vehicle which guides aircraft to/from a parking location if the pilot is not familiar with the airport or under difficult conditions", imageUrl: "https://thumbs.dreamstime.com/b/follow-me-airport-car-services-painted-yellow-black-checkered-pattern-63109416.jpg" },
  { id: 16, word: "forklift | forklift truck", description: "a vehicle with two bars in the front for moving and lifting heavy goods", imageUrl: "https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/e_truck-loading-freight_forwarding-3699_8872_16x9w1920.jpg" },
  { id: 17, word: "fuel truck | fuel tanker", description: "a motor vehicle designed to carry liquefied loads or gases", imageUrl: "https://skymarkrefuelers.com/wp-content/uploads/SkyMark-Worlds-largest-fuel-tanker-1.jpg" },
  { id: 18, word: "refueling truck | refueler | airport fuel truck", description: "a motor vehicle designed to carry liquefied loads or gases, especially kerosene to aircraft", imageUrl: "https://airportindustry-news.com/wp-content/uploads/sites/2/2024/03/24DT037_024-scaled.jpg" },
  { id: 19, word: "Ground Power Unit | GPU", description: "a vehicle capable of supplying power to aircraft parked on the ground; it may also be built into a jetway", imageUrl: "https://cdn.prod.website-files.com/628905bae461d31c437ea344/63f109f148a58bba2a9de34d_Ground%20Power%20Unit%20(GPU).jpg" },
  { id: 20, word: "Auxiliary Power Unit | APU ", description: "a device on an aircraft that provides energy for functions other than propulsion", imageUrl: "https://www.flightradar24.com/blog/wp-content/uploads/2024/03/DSC01805-scaled.jpg" },
  { id: 21, word: "heavy plant | heavy equipment", description: "machines and vehicles used in industry for transporting construction materials", imageUrl: "https://www.grounddevelopments.co.uk/wp-content/uploads/2014/08/earthworks-contractors-Scotland.jpg" },
  { id: 22, word: "high-speed tug", description: "a tow vehicle used to tow aircraft over long distances", imageUrl: "https://airportindustry-news.com/wp-content/uploads/sites/2/2021/01/Munich-Electric-Pushback-Tug.jpg" },
  { id: 23, word: "hydraulic platform | hydraulic lift", description: "a type of mechanical lifting device designed for the transportation of cargo, lifting its platform to great heights", imageUrl: "https://www.liftaloft.com/wp-content/uploads/2024/02/Scissors-with-powered-xtd-and-rear-tail-lift-1600x1200.jpg" },
  { id: 24, word: "chocks", description: "a block of wood that can be put under a wheel to prevent an aircraft from moving while parked at the gate or in a hangar", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Chocks.JPG" },
  { id: 25, word: "nose-in docking system | nose-in parking system", description: "an airport system which gives information to pilots parking an aircraft and allows them to remain clear of obstructions, ensures that jetways can reach the aircraft precisely", imageUrl: "https://airportsolutions.tkelevator.com/media/products_1/pbb/as_vdgs_slide2_image_w662_h497.jpg" },
  { id: 26, word: "push-back tug | tow truck", description: "a vehicle used to push an aircraft away from the gate when it is ready to leave, or to pull aircraft in various situations, e.g. to a hangar", imageUrl: "https://aviationlearnings.com/wp-content/uploads/2021/05/01r-1024x576.jpg" },
  { id: 27, word: "pylon | cone | safety cone", description: "a preventive measure device, its purpose is to avoid aircraft damage and to create a safety buffer around specific areas of an aircraft", imageUrl: "https://thumbs.dreamstime.com/b/worker-carrying-traffic-cone-chocks-airplane-runway-rear-view-male-worker-carrying-traffic-cone-chocks-100378749.jpg" },
  { id: 28, word: "scissor lift | self-propelled platform", description: "a motorized vehicle with a criss-crossing (scissor) metal platform that can be raised straight up", imageUrl: "https://www.airport-suppliers.com/wp-content/uploads/2021/06/miles-gse-scissor-deck-mpl-1.jpg" },
  { id: 29, word: "shuttle bus", description: "a bus that travels regularly between two places", imageUrl: "https://bus-news.com/wp-content/uploads/sites/4/2021/02/BYD-ANA-Airport-Bus.jpg" },
  { id: 30, word: "snowplough", description: "a vehicle or device for removing snow or compacted ice from surfaces on the ground", imageUrl: "https://sweetwaternow.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/02/snow-removal.jpg" },
  { id: 31, word: "sweeper", description: "a vehicle that cleans paved surfaces at an airport, e.g. from debris, burst tyres etc.", imageUrl: "https://www.tymco.com/wp-content/uploads/hsp-overview.jpg" },
  { id: 32, word: "tow bar | tow hitch", description: "a device attached to an aircraft nose gear so that it can be towed from its position", imageUrl: "https://www.shutterstock.com/image-photo/modern-passenger-jet-engine-airplane-600nw-655046893.jpg" },
  { id: 33, word: "tractor", description: "a vehicle at an airport which are used to move all equipment that can not move itself, e.g. bag carts, mobile air conditioning units, air starters, lavatory carts etc.", imageUrl: "https://www.mulag.de/typo3temp/fl_realurl_image/mulag-170401851dv-comet3e-4e-6-gruppenbild-chambery-f7.jpg" },
  { id: 34, word: "ambulance", description: "a special vehicle equipped to take people who are injured or ill to hospital", imageUrl: "https://live.staticflickr.com/65535/49492247623_59f19328ce_b.jpg" },
  { id: 35, word: "jack | a hydraulic jack", description: "a piece of equipment used to lift a heavy weight off the ground and support it while it is in the air", imageUrl: "https://flytekgse.com/wp-content/uploads/2024/10/WhatsApp-Image-2021-05-24-at-12.18.14-PM-35.jpeg" },
  { id: 36, word: "passenger stairs | passenger steps", description: "a machin that enables to embark/disembark passengers", imageUrl: "https://www.airport-suppliers.com/wp-content/uploads/2019/11/Metaltech-Stairs.jpg" },
  { id: 37, word: "light pole | light mast ", description: "a raised source of light ", imageUrl: "https://5.imimg.com/data5/AR/JJ/MY-35538115/lighting-pole.jpg" },
  { id: 38, word: "dolly | container dolly | pallet dolly", description: "a flatbed platform on wheels used for moving heavy objects, large loads, aircraft cargo", imageUrl: "https://www.knott.sk/storage/cache/global/Web/Produkty/Letiskova%20technika/Kontajnerove%20voziky/Knott_Kontajnerovy_Letisko_crop500350.jpg" },
  { id: 39, word: "airfield rubber removal | runway rubber removal", description: "the use of high pressure water, abrasives, chemicals and/or other mechanical means to remove the rubber from tyres that builds up on airport runwas", imageUrl: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/03/stripe-hog-e1588673026207.jpg" }
];

function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);

}

window.Script18 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script19 = function()
{
  (function showImageAlignedToSlide() {
  const player = GetPlayer();
  const url = player.GetVar("ImageURL");

  const slideWidth = 414;
  const slideHeight = 736;

  const scale = window.innerHeight / slideHeight;
  const offsetX = (window.innerWidth - slideWidth * scale) / 2;

  const imageX = player.GetVar("ImageX") || 0;
  const imageY = player.GetVar("ImageY") || 0;

  const left = offsetX + imageX * scale;
  const top = imageY * scale;

  const existing = document.getElementById("dynamic-img");
  if (existing) existing.remove();
  if (!url) return;

  const img = document.createElement("img");
  img.id = "dynamic-img";
  img.src = url;
  img.width = 330 * scale;
  img.height = 245 * scale;

  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;
  img.style.zIndex = "9999";
  img.style.objectFit = "fill";  // ← správná uvozovka!

  img.onerror = () => {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  document.body.appendChild(img);
})();

}

window.Script20 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

window.Script21 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();



// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "patrol", description: "a person who goes around an area or a building to see if there is any trouble or danger", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/CLE_Airport_Police_on_Patrol.jpg/640px-CLE_Airport_Police_on_Patrol.jpg" },
  { id: 2, word: "escort", description: "a person or vehicle that goes somewhere with someone to protect or guard them", imageUrl: "https://theaviationist.com/wp-content/uploads/2016/10/BAF-Mig-29s-welcome-A380-top-860x573.jpg" },
  { id: 3, word: "metal detector frame | walkthrough metal detector", description: "a special frame that you walk through at an airport, used to detect the presence of hidden metal", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/3/397491395/HS/IG/LZ/34583643/door-frame-metal-detector-dfmd-500x500.jpg" },
  { id: 4, word: "handheld body scanner | handheld metal detector", description: " a unit (in shape of wand) for quick and efficient body search scanning for knives, weapons and concealed metal objects", imageUrl: "https://img.fruugo.com/product/0/35/1652163350_max.jpg" },
  { id: 5, word: "x-ray machine", description: "a type of device with radiation that can go through many solid substances, allowing hidden objects such as bones and organs in the body to be photographed", imageUrl: "https://tsi-mag.com/wp-content/uploads/2022/03/Air-Cargo-Screening.jpg" },
  { id: 6, word: "full body scanner | backscatter x-ray", description: "a device that detects objects on a person's body for security screening purposes, without physically removing clothes or making physical contact", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/NRW-Verkehrsminister_Hendrik_W%C3%BCst_-_Vorstellung_Easy_Security-6294.jpg" },
  { id: 7, word: "ePassport gate | Automated Easy Pass border check system | facial recognition", description: "a technology using facial recognition to identify or verify a person from a digital image or a video", imageUrl: "https://www.futuretravelexperience.com/wp-content/uploads/2023/02/Lithuanian-Airports-EES-768x403.jpg" },
  { id: 8, word: "security", description: "protection of a person, building, organization, or country against threats such as crime or attacks by foreign countries", imageUrl: "https://airmanex.com/wp-content/uploads/2024/05/uk-airport-security-checkpoint-1024x640.jpg" },
  { id: 9, word: "security", description: "the group of people responsible for protecting a building", imageUrl: "https://wheelchairtravel.org/content/images/wp-content/uploads/2020/01/faq-air-tsa-security-v2020-header-scaled.jpg" },
  { id: 10, word: "safety", description: "the state of being protected from danger or harm", imageUrl: "https://stjohnsairport.com/wp-content/uploads/2013/11/Air-Safe-logo.jpg" },
  { id: 11, word: "security officer", description: "a person at an airport who checks with a special machine to detect prohibited and dangerous items", imageUrl: "https://heathrow.promotingpeople.net/wp-content/uploads/sites/6/2021/01/XCHE28932d-1.jpg" },
  { id: 12, word: "screener", description: "a synonym for security officer", imageUrl: "https://heathrow.promotingpeople.net/wp-content/uploads/sites/6/2021/01/XCHE28932d-1.jpg" },
  { id: 13, word: "inspection", description: "a careful examination by an official to make certain that something is in good condition, or that rules are being obeyed", imageUrl: "https://www.frankfurt-airport.com/content/dam/fraport-travel/airport/reisevorbereitung/check-in-gep%C3%A4ck-und-kontrollen/gep%C3%A4ck/Sicherheitskontrolle.jpg/_jcr_content/renditions/original./Sicherheitskontrolle.jpg" },
  { id: 14, word: "prohibited | forbidden | banned", description: "to say that an action is illegal or not allowed; not permitted by authority", imageUrl: "https://m.media-amazon.com/images/I/71UsnIM78cL._AC_UF1000,1000_QL80_.jpg" },
  { id: 15, word: "restriction", description: "an official limit on what people or companies are allowed to do", imageUrl: "https://blog.aph.com/wp-content/uploads/2015/04/header1.jpg" },
  { id: 16, word: "dangerous goods | hazardous goods | hazardous materials | hazmat (AmE, uncount.)", description: "substances that when transported are a risk to health, safety, property or the environment", imageUrl: "https://www.deniint.com.mk/wp-content/uploads/2019/03/Ultimate-Guide-Transport-of-Dangerous-Goods-and-Hazardous-Materials.jpg" },
  { id: 17, word: "smuggle", description: "to take things or people to or from a country or place illegally and secretly", imageUrl: "https://cdn.cultofmac.com/wp-content/uploads/2015/01/iphone_smuggle003.jpg" },
  { id: 18, word: "declare", description: "to officially tell someone the value of goods you have bought, you might have to pay tax", imageUrl: "https://www.customs.gov.hk/hcms/filemanager/en/content_53/red_channel_1.jpg" },
  { id: 19, word: "visa", description: "an official mark, usually made in a passport, that allows you to enter or leave a particular country", imageUrl: "https://acutrans.com/wp-content/uploads/2021/07/Passport-w-visa-stamps-scaled.jpg" },
  { id: 20, word: "random check", description: "a check on items and/or people taken from a group without any special selection", imageUrl: "https://www.explore.com/img/gallery/additional-airport-screening-isnt-totally-random-heres-why-you-may-have-been-selected/intro-1709147813.jpg" },
  { id: 21, word: "sniffer dog | detection dog | drug sniffing dog | explosives sniffing dog  | bomb sniffing dog", description: "a dog that is trained to recognize and follow scents especially for the purpose of locating people or drugs and explosives", imageUrl: "https://www.dogforceaustralia.com.au/wp-content/uploads/2020/03/detection-dog-side7.jpg" },
  { id: 22, word: "detection dog", description: "a synonym for sniffer dog", imageUrl: "https://www.dogforceaustralia.com.au/wp-content/uploads/2020/03/detection-dog-side7.jpg" },
  { id: 23, word: "priority lane | fast lane | fast track", description: "a pass to skip the queue at the security check; allows to access the security check directly without having to join the usual queue", imageUrl: "https://www.theflightclub.it/wp-content/uploads/2021/12/IMG_4174-2.jpeg" },
  { id: 24, word: "priority boarding | speedy boarding ", description: "a limited service, available for 100 passengers per flight, which promises travellers they can board the plane first as well as bring more luggage", imageUrl: "https://news.alaskaair.com/wp-content/uploads/2017/02/flight-boarding.jpg" },
  { id: 25, word: "CCTV ", description: "the abbreviation for a system that sends television signals to a limited number of screens  to prevent crime in public places", imageUrl: "https://clarionuk.com/wp-content/uploads/2021/08/what-is-cctv.jpg" },
  { id: 26, word: "perimeter fence", description: "a thing that serves as a boundary around something", imageUrl: "https://airport-world.com/wp-content/uploads/2021/11/Landing-Plane-scaled.jpeg" },
  { id: 27, word: "suspicious", description: "feeling that something illegal is happening or that something is wrong", imageUrl: "https://t4.ftcdn.net/jpg/06/61/09/47/360_F_661094720_Jr0G12L4Jz0nY07fg7eaW0Up11ajVCSj.jpg" },
  { id: 28, word: "pat down | frisk ", description: "to use hands to search someone's body with clothes to see if they are hiding illegal objects or weapons", imageUrl: "https://thumb.spokesman.com/MqcwK4BxjBgasgTt_k-eOs55Qss=/2500x1875/smart/media.spokesman.com/photos/2017/03/03/Airport_Security.JPG_GUFXEqp.jpg" },
  { id: 29, word: "manual body search", description: "an act of searching a person for concealed items such as weapons or illegal drugs, made by passing the hands over their clothing", imageUrl: "https://thumb.spokesman.com/MqcwK4BxjBgasgTt_k-eOs55Qss=/2500x1875/smart/media.spokesman.com/photos/2017/03/03/Airport_Security.JPG_GUFXEqp.jpg" },
  { id: 30, word: "passport control", description: "the place at an airport or border where an official checks your ID when you leave or enter a country", imageUrl: "https://i.dailymail.co.uk/i/pix/2017/09/09/13/44118D9F00000578-0-image-a-5_1504960615198.jpg" },
  { id: 31, word: "screen ", description: "to check things to see whether they are acceptable or suitable", imageUrl: "https://www.tsa.gov/sites/default/files/tso-at-ct-at-ttn-4-10-23.jpg" },
  { id: 32, word: "scan", description: "to look at something carefully, with the eyes or with a machine, in order to get information", imageUrl: "https://www.lju-airport.si/assets/News-photos/FRAPORT_SKLENER-001__ScaleMaxWidthWzEzNzBd.jpg" },
  { id: 33, word: "security check", description: " a combination of techniques and methods used in an attempt to protect passengers, staff, aircraft and airport property against unlawful interference", imageUrl: "https://static.politico.com/bd/5f/37d3bc394e6aa805242fba5542aa/gettyimages-475634294.jpg" },
  { id: 34, word: "biometric technology", description: "referring to detailed information about someone's body, such as eyes or fingerprints", imageUrl: "https://onlinelibrary.wiley.com/cms/asset/56c75b91-4778-4c33-a769-9d95917670fa/bmri490362-fig-0001-m.jpg" },
  { id: 35, word: "explosives trace detection | explosives test", description: "equipment able to detect explosives of small magnitude", imageUrl: "https://www.adsadvance.co.uk/media/images/2020%20SUMMER/Smiths%20Detection%20500DT_2-HR.jpg" },
  { id: 36, word: "customs", description: "the place at an airport through which people and goods arriving in a country must pass and where any tax must be paid", imageUrl: "https://www.dhs.gov/medialibrary-ns-assets/prod/dhs/1/1/d/5/9/e/f/d/6037/090819-h-cbpxx999-0003.jpg" },
  { id: 37, word: "security measures", description: "the steps taken to prevent or minimize criminal acts, espionage, terrorism or sabotage", imageUrl: "https://cdn.britannica.com/32/166332-050-E38E3AC3/Timeline-aviation-security.jpg" }
];

function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);

}

window.Script22 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script23 = function()
{
  (function showImageAlignedToSlide() {
  const player = GetPlayer();
  const url = player.GetVar("ImageURL");

  const slideWidth = 414;
  const slideHeight = 736;

  const scale = window.innerHeight / slideHeight;
  const offsetX = (window.innerWidth - slideWidth * scale) / 2;

  const imageX = player.GetVar("ImageX") || 0;
  const imageY = player.GetVar("ImageY") || 0;

  const left = offsetX + imageX * scale;
  const top = imageY * scale;

  const existing = document.getElementById("dynamic-img");
  if (existing) existing.remove();
  if (!url) return;

  const img = document.createElement("img");
  img.id = "dynamic-img";
  img.src = url;
  img.width = 330 * scale;
  img.height = 245 * scale;

  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;
  img.style.zIndex = "9999";
  img.style.objectFit = "fill";  // ← správná uvozovka!

  img.onerror = () => {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  document.body.appendChild(img);
})();

}

window.Script24 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

window.Script25 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();




// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "flammable | inflammable", description: "something that can burn easily", imageUrl: "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/i-fell-into-a-burning-ring-of-fire-1708-021f107b2f4b37ca3273401a72b4fa18@1x.jpg" },
  { id: 2, word: "non-flammable", description: "Something that cannot burn or is very difficult to burn", imageUrl: "https://static.vecteezy.com/system/resources/previews/025/410/807/non_2x/no-fire-flame-icon-restriction-sign-free-vector.jpg" },
  { id: 3, word: "HAZMAT", description: "an abbreviation for hazardous material", imageUrl: "https://assets.fishersci.com/TFS-Assets/CCG/product-images/F452882~p.eps-650.jpg" },
  { id: 4, word: "Company Material | COMAT", description: " the shipment of non revenue materials and supplies owned by the operator that are shipped by the operator", imageUrl: "" },
  { id: 5, word: "Hazardous Material | HAZMAT", description: "a dangerous substance", imageUrl: "https://assets.fishersci.com/TFS-Assets/CCG/product-images/F452882~p.eps-650.jpg" },
  { id: 6, word: "explosives", description: "substances or pieces of equipment that can cause explosions", imageUrl: "https://www.quirkyscience.com/wp-content/uploads/2012/06/Explosion-Image-by-US-Department-of-Defense.jpg" },
  { id: 7, word: "gas", description: "a substance in a form like air that is neither solid nor liquid", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Purplesmoke.jpg" },
  { id: 8, word: "liquid", description: "a substance that flows freely and is not a solid or a gas", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Water_drop_001.jpg/1280px-Water_drop_001.jpg" },
  { id: 9, word: "solid", description: "not liquid or gas", imageUrl: "https://cdn.britannica.com/32/157932-004-593ADF1E.jpg" },
  { id: 10, word: "corrosives | acids", description: " harmful materials that can attack and chemically destroy body tissues, can react with and dissolve other materials, or even destroy metal", imageUrl: "https://www.northridgepumps.com/upload/editor/20010215072807288.jpg" },
  { id: 11, word: "clinical waste | biological waste | biohazard", description: "waste produced from healthcare that may pose a risk of infection, a risk to human health or to the environment from a biological source", imageUrl: "https://www.ecosteryl.com/app/uploads/2021/05/boite-seringue.jpg" },
  { id: 12, word: "radioactive", description: "substances having or producing the energy that comes from the breaking up of atoms", imageUrl: "https://be3corp.com/wp-content/uploads/2019/12/29-1_07_19_small.jpg" },
  { id: 13, word: "ore", description: "rock or soil from which metal can be obtained", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Anglesite-Galena-249200.jpg" },
  { id: 14, word: "to pose a risk | to pose a threat", description: "to cause something, especially a problem or difficulty", imageUrl: "https://st.depositphotos.com/1000423/4111/i/450/depositphotos_41111879-stock-photo-challenge-overcoming.jpg" },
  { id: 15, word: "kerosene | petrol | kerosine", description: "a type of fuel that is used in the engines of planes", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Kerosene_Storage_Tank.jpg" },
  { id: 16, word: "lithium ion batteries", description: "an advanced battery technology that uses lithium ions as a key component of its electrochemistry", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/12/475655053/WK/MM/UH/1225448/aa-size-lithium-battery-500x500.jpg" },
  { id: 17, word: "fire extinguisher", description: "a metal container with water or chemicals inside for putting out small fires", imageUrl: "https://www.coopersfire.com/wp-content/uploads/2022/06/Fire-Extinguisher-Guide.jpg" },
  { id: 18, word: "lighter", description: "a small device for providing a flame for a cigarette, etc.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/White_lighter_with_flame.JPG/1024px-White_lighter_with_flame.JPG" },
  { id: 19, word: "e-cigarette", description: "an electronic device in shape of a cigarette, allows someone to breathe in nicotine, produces vapour that looks like cigarette smoke ", imageUrl: "https://cdn.alza.cz/Foto/ImgGalery/Image/co-je-vaping.jpg" },
  { id: 20, word: "ignition ", description: "the act or process of something starting to burn", imageUrl: "https://c4.wallpaperflare.com/wallpaper/962/793/240/fire-flame-match-ignition-wallpaper-preview.jpg" },
  { id: 21, word: "chemical reaction", description: "a process that occurs when two or more molecules interact to form a new product(s)", imageUrl: "https://cdn.britannica.com/51/196751-131-CED1DE53/exposure-science-laboratory-test-tubes-chemical-reaction.jpg" },
  { id: 22, word: "short circuit", description: "a bad electrical connection that causes the current to flow in the wrong direction, often having the effect of stopping the power supply", imageUrl: "https://crowe-electric.com/wp-content/uploads/2023/12/what-causes-a-short-circuit-1024x512.jpg" },
  { id: 23, word: "sniffer dog | detection dog | drug sniffing dog | explosives sniffing dog  | bomb sniffing dog", description: "a dog that is trained to recognize and follow scents especially for the purpose of locating people or drugs and explosives", imageUrl: "https://e3.365dm.com/24/08/2048x1152/skynews-south-korea-ceco-dog_6654519.jpg" },
  { id: 24, word: "explosives trace detection | explosives test", description: "equipment able to detect explosives of small magnitude", imageUrl: "https://www.smiths.com/media/pgskdsu5/smiths-detection-500dt.jpg" },
  { id: 25, word: "toxic", description: "poisonous", imageUrl: "https://images.squarespace-cdn.com/content/v1/63bd810bc84e6c4c5f396e08/c83c2103-5a77-4a0c-80f2-a608b834420b/%2378+Toxic+Waste+2-+HEAL+THE+PLANET.jpg" },
  { id: 26, word: "solution", description: "a liquid in which something is dissolved (= mixed in)", imageUrl: "https://www.thoughtco.com/thmb/rWBcxdQx2d4NeZkU4Va48zZ3mvM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79588918-56a1323e5f9b58b7d0bcf3a1.jpg" },
  { id: 27, word: "weapon", description: "any object used in fighting or war, such as a gun, bomb, knife, etc.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Dangerous_weapons_seized_from_holiday_flights_at_Manchester_Airport.jpg" },
  { id: 28, word: "compressed air", description: "air kept under a pressure that is greater than atmospheric pressure", imageUrl: "https://caloxinc.com/wp-content/uploads/2022/07/blog-compressed-air-gauge-1080x675.jpg" },
  { id: 29, word: "forbidden | prohibited | banned", description: "​not allowed", imageUrl: "https://cdn.vectorstock.com/i/1000v/43/50/prohibition-forbidden-sign-vector-8854350.jpg" },
  { id: 30, word: "substance", description: "material with particular physical characteristics, qualities", imageUrl: "https://www.umweltbundesamt.de/sites/default/files/medien/bilder/Chemikalien_Reagenzglaeser_Fluessigkeit_Bunt_CC-Vision_18_15056.jpg" },
  { id: 31, word: "precaution", description: "an action that is done in advance to prevent problems or to avoid danger", imageUrl: "https://thumbs.dreamstime.com/b/attention-icon-sign-exclamation-mark-symbol-warning-danger-precaution-alert-icon-354506405.jpg" },
  { id: 32, word: "switchblade | automatic knife | ejector knife", description: "a type of knife with a folding or sliding blade contained in the handle which is extended automatically when a button is activated", imageUrl: "https://www.wholesaleblades.com/assets/images/198BK.jpg" }
];

function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);

}

window.Script26 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script27 = function()
{
  (function showImageAlignedToSlide() {
  const player = GetPlayer();
  const url = player.GetVar("ImageURL");

  const slideWidth = 414;
  const slideHeight = 736;

  const scale = window.innerHeight / slideHeight;
  const offsetX = (window.innerWidth - slideWidth * scale) / 2;

  const imageX = player.GetVar("ImageX") || 0;
  const imageY = player.GetVar("ImageY") || 0;

  const left = offsetX + imageX * scale;
  const top = imageY * scale;

  const existing = document.getElementById("dynamic-img");
  if (existing) existing.remove();
  if (!url) return;

  const img = document.createElement("img");
  img.id = "dynamic-img";
  img.src = url;
  img.width = 330 * scale;
  img.height = 245 * scale;

  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;
  img.style.zIndex = "9999";
  img.style.objectFit = "fill";  // ← správná uvozovka!

  img.onerror = () => {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  document.body.appendChild(img);
})();

}

window.Script28 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

window.Script29 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();




// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "air traffic control tower | ATC tower | control tower | tower", description: "a tall building at an airport from which people direct the movement of aircraft on the ground and in the air", imageUrl: "https://www.jacobs.com/sites/default/files/2022-04/Phoenix%20Sky%20Harbor%20International%20Airport.jpg" },
  { id: 2, word: "airport lighting | lighting", description: "a visual aid that helps guide planes using the runways and taxiways at night, in rain or fog", imageUrl: "https://www.transcon.cz/media/zoo/images/05-svetelne-systemy-2_8da47198a6f30947baaf00a0f14ec6a5.jpg" },
  { id: 3, word: "airside", description: "an area that includes all parts of the airport around the aircraft, an airport terminal that are accessible beyond security checks and passport control only to passengers and staff", imageUrl: "https://to70.com/wp-content/uploads/2023/01/Cover-Pic.jpg" },
  { id: 4, word: "apron | airpot apron  | ramp  | tarmac", description: "an area of an airport where aircraft are parked, unloaded or loaded, refilled, or boarded", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Vienna_International_Airport_from_the_Air_Traffic_Control_Tower_06.jpg/1280px-Vienna_International_Airport_from_the_Air_Traffic_Control_Tower_06.jpg" },
  { id: 5, word: "car park | parking lot", description: "an area or a building where people can leave their cars", imageUrl: "https://blog.getmyparking.com/wp-content/uploads/2018/07/airport-parking-1.jpg" },
  { id: 6, word: "de-icing area | de-icing station | de-icing facility | de-icing pad", description: "a separate area, also with fixed special equipment on site, to prevent or eliminate snow or ice from building on aircraft", imageUrl: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/11/112922_airfield-035.jpg" },
  { id: 7, word: "taxiway", description: "a path which an aircraft drives on to get to and from the runway", imageUrl: "https://media.flighttrainingcentral.com/wp-content/uploads/2022/12/21132237/Video-Tip-2023-Taxiway-Markings-copy-2-scaled.jpg" },
  { id: 8, word: "fire station | firehouse", description: "a building in which firefighting apparatus and usually fire department personnel are housed", imageUrl: "https://www.fireapparatusmagazine.com/wp-content/uploads/2024/08/minn-stpaul.jpg" },
  { id: 9, word: "intersection", description: "a place where two or more roads, lines, etc. meet or cross each other", imageUrl: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/01/shutterstock_1536220085.jpg" },
  { id: 10, word: "hangar", description: "a closed building structure to hold aircraft ", imageUrl: "https://g.denik.cz/63/e0/praha-hangar-s-otevreni-letadlo-letectvi-oprava-doprava-08.jpg" },
  { id: 11, word: "hardstand | hard standing", description: "a paved area for parking heavy aircraft", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/F-4G_81st_TFS_serviced_at_Spangdahlem_1990.JPEG/1280px-F-4G_81st_TFS_serviced_at_Spangdahlem_1990.JPEG" },
  { id: 12, word: "helipad", description: "a landing area or platform for helicopters and powered lift aircraft", imageUrl: "https://helidex.com/wp-content/uploads/2023/09/DSCN1912-1024x768.jpg" },
  { id: 13, word: "heliport | helidrome", description: "an area of land, water, or structure used for the landing and takeoff of helicopters", imageUrl: "https://www.helitom.cz/templates/yootheme/cache/heliport-b85401fd.jpeg" },
  { id: 14, word: "runway", description: "a defined rectangular area on a land aerodrome prepared for the landing and takeoff of aircraft", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/McDonnell_Douglas_MD-11_KLM_-_Royal_Dutch_Airlines%2C_AMS_Amsterdam_%28Schiphol%29%2C_Netherlands_PP1151411211.jpg/250px-McDonnell_Douglas_MD-11_KLM_-_Royal_Dutch_Airlines%2C_AMS_Amsterdam_%28Schiphol%29%2C_Netherlands_PP1151411211.jpg" },
  { id: 15, word: "hotspot", description: "a location on an aerodrome movement area with a potential risk of collision or runway incursion", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibNqEPxAackFZlwrh_ZeQVzovTsWrWM7yQi_PGqjHObCt96hfvROal-diBUEwYQVzyHKhY5bnK-3Uu_wFJGkcKGAIxljmT2RfGHCrIYDqVLGbC03KcWWYOGn6gneBlmVcbM9dG/s1600/STP-airport-diagram.jpg" },
  { id: 16, word: "landside", description: "an airport area open to the public", imageUrl: "https://www.respec.com/wp/wp-content/uploads/2021/03/22405212661_9394217f30_o-scaled-e1615852272163.jpg" },
  { id: 17, word: "light pole | light mast | high-mast lighting", description: "a raised source of light, used at sites that require lighting over a large area", imageUrl: "https://5.imimg.com/data5/AR/JJ/MY-35538115/lighting-pole.jpg" },
  { id: 18, word: "manouevring area | maneuvering area", description: "a part of an aerodrome to be used by aircraft for takeoff, landing and taxiing, excluding aprons and areas designed for maintenance of an aircraft", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Stuttgart_Flughafen_Rollfeld_Luftaufnahme_2008_by-RaBoe_02.jpg/1200px-Stuttgart_Flughafen_Rollfeld_Luftaufnahme_2008_by-RaBoe_02.jpg" },
  { id: 19, word: "monorail", description: "a transport system that uses a single rail, usually high above the ground", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Bham3.jpg" },
  { id: 20, word: "movement area", description: "a part of an aerodrome to be used for the takeoff, landing and taxiing of aircraft, consisting of the maneuvering area and apron(s)", imageUrl: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2024/02/sfo-runways.jpeg" },
  { id: 21, word: "paved", description: "a quality of surface at an airport, covered with a hard, flat material to make it solid, firm and level ", imageUrl: "https://www.ciconstructors.com/wp-content/uploads/2020/07/AdobeStock_3940810.jpeg" },
  { id: 22, word: "cone | safety cone | pylon ", description: "an object used as a preventive measure, in order to avoid aircraft damage and to create a safety buffer around specific areas", imageUrl: "https://thumbs.dreamstime.com/b/worker-carrying-traffic-cone-chocks-airplane-runway-rear-view-male-worker-carrying-traffic-cone-chocks-100378749.jpg" },
  { id: 23, word: "remote stand", description: "an area where passengers are either escorted from the gate out onto the tarmac, or exit the aircraft to be escorted across the tarmac back into the terminal building", imageUrl: "https://live.staticflickr.com/814/27081537018_fc7285d639_b.jpg" },
  { id: 24, word: "stand", description: "a place where aircraft stop and wait for passengers, designed for handling and servicing of planes by the airport", imageUrl: "https://www.shutterstock.com/image-photo/24-march-2019-amsterdam-holland-600nw-1352937218.jpg" },
  { id: 25, word: "tarmac  ", description: "a word used as a synonym for apron at airports (by some in the general public and news media)", imageUrl: "https://www.flywichita.com/wp-content/uploads/2022/03/Aircraft-on-ramp-1200x630-1.jpg" },
  { id: 26, word: "terminal building | airport terminal | terminal | concourse | airport terminal building", description: "a building at an airport where passengers purchase tickets, transfer their luggage and go through security", imageUrl: "https://files.structurae.net/files/photos/wikipedia/St._Louis_Lambert_T1_from_West.jpg" },
  { id: 27, word: "unpaved", description: "the opposite of paved; a surface at an airport that is not solid and covered with a hard, flat material", imageUrl: "https://www.aerotime.aero/images/embraer_c-390_millennium_completes_gravel_runway_tests-1024x682.jpg" },
  { id: 28, word: "Work In Progress | WIP ", description: "something that is being developed or suggested but that is not yet complete", imageUrl: "https://arunachalobserver.org/wp-content/uploads/2021/12/Hollongi-airport.jpg" },
  { id: 29, word: "cargo terminal | freight terminal", description: "areas at airports where international cargo has to be stored after customs clearance and prior to loading on the aircraft", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Ok%C4%99cie_-_terminal_CARGO_z_g%C3%B3ry.JPG" },
  { id: 30, word: "clearway", description: "an area beyond the paved runway, free of obstructions and under the control of the airport authorities", imageUrl: "https://i.sstatic.net/6a9mh.jpg" },
  { id: 31, word: "run-up area | engine run-up area", description: "a location at an airport where pilots can perform run-up checks of their aircraft", imageUrl: "https://www.iacacoustics.global/wp-content/uploads/GRE4.jpg" },
  { id: 32, word: "general aviation terminal", description: "a separate airport building from the passenger terminal serving to business jets or air taxies", imageUrl: "https://flyshd.com/wp-content/uploads/2021/09/general-aviation-header.jpg" },
  { id: 33, word: "perimeter fence | perimeter fencing", description: "a thing that serves as a boundary around something", imageUrl: "https://chainlinkinfo.org/wp-content/uploads/2018/09/aiport-photo-ASIS-Booth-e1537340101903.jpg" },
  { id: 34, word: "wind direction indicator | windsock | wind sack | wind sleeve | wind bag | wind meter", description: "a device used to tell wind speed and the direction of the wind speed itself", imageUrl: "https://solutions4ga.com/wp-content/uploads/2018/05/S4GA-Solar-Wind-direction-indicator-2.jpg" },
  { id: 35, word: "obstacle free zone", description: " a three dimensional volume of airspace which protects for the transition of aircraft to and from the runway", imageUrl: "https://www.airsight.de/fileadmin/airsight/examples/Obstacle-2.jpg" },
  { id: 36, word: "fuel depot", description: "premises used primarily for the storage of petrol, gas, oils or other petroleum products", imageUrl: "https://storageterminalsmag.com/wp-content/uploads/2020/05/PHOTO-2020-04-30-10-40-12.jpg" },
  { id: 37, word: "aerodrome beacon", description: "a device installed at an airport or aerodrome to indicate its location to aircraft pilots at night", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/KBTP_Beacon.jpg/250px-KBTP_Beacon.jpg" }
];


function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);

}

window.Script30 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script31 = function()
{
  (function showImageAlignedToSlide() {
  const player = GetPlayer();
  const url = player.GetVar("ImageURL");

  const slideWidth = 414;
  const slideHeight = 736;

  const scale = window.innerHeight / slideHeight;
  const offsetX = (window.innerWidth - slideWidth * scale) / 2;

  const imageX = player.GetVar("ImageX") || 0;
  const imageY = player.GetVar("ImageY") || 0;

  const left = offsetX + imageX * scale;
  const top = imageY * scale;

  const existing = document.getElementById("dynamic-img");
  if (existing) existing.remove();
  if (!url) return;

  const img = document.createElement("img");
  img.id = "dynamic-img";
  img.src = url;
  img.width = 330 * scale;
  img.height = 245 * scale;

  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;
  img.style.zIndex = "9999";
  img.style.objectFit = "fill";  // ← správná uvozovka!

  img.onerror = () => {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  document.body.appendChild(img);
})();

}

window.Script32 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

window.Script33 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();



// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "airfield rubber removal | runway rubber removal", description: "the use of high pressure water, abrasives, chemicals and/or other mechanical means to remove the rubber from tyres that builds up on airport runwas", imageUrl: "https://www.airport-technology.com/wp-content/uploads/sites/14/2020/03/stripe-hog-e1588673026207.jpg" },
  { id: 2, word: "centreline | centerline", description: "a line that divides runway into two equal parts", imageUrl: "https://www.ciconstructors.com/wp-content/uploads/2020/07/AdobeStock_3940810.jpeg" },
  { id: 3, word: "designator", description: "a symbol representing or referring to something using a particular sign, name etc. (e.g. RWY)", imageUrl: "https://images.hive.blog/0x0/https://steemitimages.com/DQme686LRVoW41YukCdYt4zvUhUEmheyioAbtEd1JAhSaCL/main-qimg-516d7595e0f72727a9e18808389e6570-c.jpg" },
  { id: 4, word: "high-speed taxiway | high-speed exit | high-speed turnoff | rapid exit taxiway | turnoff taxiway", description: "designed to allow aircraft to leave the runway at higher speeds and expedite turning off the runway after landing to reduce runway occupancy time", imageUrl: "https://global.discourse-cdn.com/infiniteflight/original/4X/9/b/7/9b72cab6b4883926b7b8bd6678e74d7fc2757f01.jpeg" },
  { id: 5, word: "holding bay | holding area", description: "a defined area at or near the end of a runway where aircraft can be held to make final checks and await clearance for takeoff or accommodate the queue for takeoff", imageUrl: "https://images.newscientist.com/wp-content/uploads/2022/07/22152610/SEI_115884016.jpg" },
  { id: 6, word: "holding position", description: "a position at which taxiing aircraft and vehicles may be required to stop and await further clearance to enter a runway", imageUrl: "https://thewisepilot.com/wp-content/uploads/2021/06/holdmarkingrunway111.jpeg" },
  { id: 7, word: "marking", description: "lines, colours or shapes painted on surfaces", imageUrl: "https://jointline.co.uk/images/uploads/Airfield_Line_Marking.jpg" },
  { id: 8, word: "blast pad ", description: "an area just before the start of a runway where jet blast produced during the takeoff roll could damage the ground and eventually the runway", imageUrl: "https://www.shutterstock.com/image-photo/runway-yellow-chevrons-used-blast-260nw-1708467295.jpg" },
  { id: 9, word: "parallel runways", description: "two or more landing strips at the same airport whose centerlines are pointing in the same direction; are designated as L (left), R (right), or C (centre)", imageUrl: "https://www.airporthistory.org/uploads/1/2/1/4/121407428/dus-aerial-950-bar_orig.jpg" },
  { id: 10, word: "precision approach path indicator | PAPI", description: "a visual aid located on the left-hand side of the runway, provides guidance information to help a pilot with the correct approach to an airport ", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/PAPI_Jersey_Airport.JPG" },
  { id: 11, word: "runway inspection", description: "a check of runways and taxiways at regular intervals to ensure that the surface complies with the criteria for use by aircraft", imageUrl: "https://www.cad.gov.hk/reports/an2017-2018/images/chapter8/c07.jpg" },
  { id: 12, word: "runway markings", description: "symbols written on a landing strip (in colour) indicating crucial information", imageUrl: "https://i.redd.it/mtwa7poud0u61.jpg" },
  { id: 13, word: "sign", description: "a (vertical) notice giving information, directions, a warning, etc.", imageUrl: "https://www.atgairports.com/wp-content/uploads/2017/01/atg-airports-taxiway-guidance-signs.jpg" },
  { id: 14, word: "skidmarks | skid marks | tyre marks | scuff marks", description: "black marks made by tyres that are left on the ground when a vehicle is moving (accelerating or stopping) very quickly", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Continental_Airlines_Flight_1404_runway_skid_marks.jpg/640px-Continental_Airlines_Flight_1404_runway_skid_marks.jpg" },
  { id: 15, word: "stop bar", description: "a series of unidirectional red lights, embedded in the pavement, at the associated runway holding position to indicate where to stop or yield", imageUrl: "https://www.bne.com.au/sites/default/files/Stop-Bars-2.jpg" },
  { id: 16, word: "tarmac | bitumen | asphalt | concrete", description: "specific materials made by combining macadam surfaces, tar, and sand used to pave areas at an airport", imageUrl: "https://www.flywichita.com/wp-content/uploads/2022/03/Aircraft-on-ramp-1200x630-1.jpg" },
  { id: 17, word: "threshold", description: "markings across the runway that denote the beginning and end of the designated space for landing and takeoff under non-emergency conditions", imageUrl: "https://images.interestingengineering.com/img/iea/3oOpmMdGWK/airport-markings-threshold.jpg" },
  { id: 18, word: "touchdown zone", description: "the portion of a runway, beyond the threshold, where it is intended that landing airplanes first contact the runway", imageUrl: "https://pilotteacher.com/wp-content/uploads/2022/06/Runway-Touchdown-Zone-1024x502.jpg" },
  { id: 19, word: "blast fence | jet blast deflector ", description: "a safety device that redirects the high energy exhaust from a jet engine to prevent damage and injury; the structure must be strong enough to withstand heat and high speed air streams as well as dust and debris carried by the turbulent air", imageUrl: "https://www.woolacotts.com.au/images/banner1.jpg" },
  { id: 20, word: "runway in use | active runway", description: "any runway currently being used for takeoff or landing", imageUrl: "https://www.adsadvance.co.uk/media/images/2021%20SUMMER/Gatwick-VINCI-A380takingoff-25082021.jpg" },
  { id: 21, word: "taxiway", description: "a path for aircraft at an airport connecting runways with aprons, hangars, terminals and other facilities", imageUrl: "https://www.aviationtoday.com/wp-content/uploads/2019/05/electric_taxiing-1-1.jpg" },
  { id: 22, word: "overrun area | stopway | RESA", description: "constructed at the end of runways as emergency space to stop planes that overrun the runway on a landing, or to stop a plane on a rejected takeoff", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palm_Springs_International_Airport_photo_Don_Ramey_Logan.jpg/1200px-Palm_Springs_International_Airport_photo_Don_Ramey_Logan.jpg" }
];


function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);

}

window.Script34 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script35 = function()
{
  (function showImageAlignedToSlide() {
  const player = GetPlayer();
  const url = player.GetVar("ImageURL");

  const slideWidth = 414;
  const slideHeight = 736;

  const scale = window.innerHeight / slideHeight;
  const offsetX = (window.innerWidth - slideWidth * scale) / 2;

  const imageX = player.GetVar("ImageX") || 0;
  const imageY = player.GetVar("ImageY") || 0;

  const left = offsetX + imageX * scale;
  const top = imageY * scale;

  const existing = document.getElementById("dynamic-img");
  if (existing) existing.remove();
  if (!url) return;

  const img = document.createElement("img");
  img.id = "dynamic-img";
  img.src = url;
  img.width = 330 * scale;
  img.height = 245 * scale;

  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;
  img.style.zIndex = "9999";
  img.style.objectFit = "fill";  // ← správná uvozovka!

  img.onerror = () => {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  document.body.appendChild(img);
})();

}

window.Script36 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

window.Script37 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();



// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "abeam", description: "ABM", imageUrl: "https://www.aviationfile.com/wp-content/uploads/2020/06/standard-holding-pattern-1024x561.jpg" },
  { id: 2, word: "aerodrome", description: "AD", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Heathrow_Airport_010.jpg/1280px-Heathrow_Airport_010.jpg" },
  { id: 3, word: "alternate", description: "ALTN", imageUrl: "https://brilliantmaps.com/wp-content/uploads/major-airports-of-europe.jpg" },
  { id: 4, word: "apron", description: "APN", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Vienna_International_Airport_from_the_Air_Traffic_Control_Tower_06.jpg/1280px-Vienna_International_Airport_from_the_Air_Traffic_Control_Tower_06.jpg" },
  { id: 5, word: "Aerodrome reference point", description: "ARP", imageUrl: "https://www.euroga.org/system/1/user_files/files/000/025/323/25323/90d322ee5/large/131729-67913.jpg" },
  { id: 6, word: "Category", description: "CAT", imageUrl: "https://aasinternational.nl/resized/main/_900xAUTO_crop_center-center_none/IMG_5929-liggend.jpg" },
  { id: 7, word: "Closed", description: "CLSD", imageUrl: "https://s3.amazonaws.com/assets.safetyflag.com/product_images/1001/Runway_Marker.jpg" },
  { id: 8, word: "Control area", description: "CTA", imageUrl: "https://www.theairlinepilots.com/forumarchive/al/tma.jpg" },
  { id: 9, word: "Control zone", description: "CTR", imageUrl: "https://www.theairlinepilots.com/forumarchive/al/tma.jpg" },
  { id: 10, word: "Estimated off−block time", description: "EOBT", imageUrl: "https://as1.ftcdn.net/jpg/02/10/52/12/1000_F_210521281_fEoPpy3Vp53BEveNxXstt60SeE9WIMfn.jpg" },
  { id: 11, word: "Final approach fix", description: "FAF", imageUrl: "https://aviationandaccessories.tpub.com/TM-1-1510-218-10/img/TM-1-1510-218-10_488_1.jpg" },
  { id: 12, word: "Glide path", description: "GP", imageUrl: "https://img.tfd.com/mgh/av/th/f0313-01.jpg" },
  { id: 13, word: "Instrument landing system", description: "ILS", imageUrl: "https://www.aopa.org/-/media/Images/AOPA-Main/News-and-Media/Publications/Flight-Training-Magazine/2024/2403/2403f_preflight/2403f_howitworks/2403f_howitworks_16x9.jpg" },
  { id: 14, word: "Intersection", description: "INT", imageUrl: "https://unbelievable-facts.com/wp-content/uploads/2022/08/Gibraltar-Airport-The-Worlds-Only-Airport-Runway-that-Intersects-a-Road.jpg" },
  { id: 15, word: "Localizer", description: "LOC", imageUrl: "https://t4.ftcdn.net/jpg/01/23/14/69/360_F_123146941_k5AEkP37BEVteJTEHwIw0ocvDxh6964k.jpg" },
  { id: 16, word: "Mid−point  | midpoint", description: "MID", imageUrl: "" },
  { id: 17, word: "Microwave landing system", description: "MLS", imageUrl: "" },
  { id: 18, word: "Precision approach", description: "PA", imageUrl: "" },
  { id: 19, word: "Precision approach path indicator", description: "PAPI", imageUrl: "" },
  { id: 20, word: "Precision approach radar", description: "PAR", imageUrl: "" },
  { id: 21, word: "Pavement classification number", description: "PCN", imageUrl: "" },
  { id: 22, word: "Runway end safety area", description: "RESA", imageUrl: "" },
  { id: 23, word: "Runway", description: "RWY", imageUrl: "" },
  { id: 24, word: "Standard instrument departure", description: "SID", imageUrl: "" },
  { id: 25, word: "Straight-in approach | straight in approach", description: "STA", imageUrl: "" },
  { id: 26, word: "Standard instrument arrival", description: "STAR", imageUrl: "" },
  { id: 27, word: "Stopway", description: "SWY", imageUrl: "" },
  { id: 28, word: "Touchdown zone", description: "TDZ", imageUrl: "" },
  { id: 29, word: "Threshold", description: "THR", imageUrl: "" },
  { id: 30, word: "Taxiway", description: "TWY", imageUrl: "" },
  { id: 31, word: "Work in progress", description: "WIP", imageUrl: "" },
  { id: 32, word: "Crossbar", description: "XBAR", imageUrl: "" },
  { id: 33, word: "Company Material", description: "COMAT", imageUrl: "" }
];

function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);


}

window.Script38 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script39 = function()
{
  (function showImageAlignedToSlide() {
  const player = GetPlayer();
  const url = player.GetVar("ImageURL");

  const slideWidth = 414;
  const slideHeight = 736;

  const scale = window.innerHeight / slideHeight;
  const offsetX = (window.innerWidth - slideWidth * scale) / 2;

  const imageX = player.GetVar("ImageX") || 0;
  const imageY = player.GetVar("ImageY") || 0;

  const left = offsetX + imageX * scale;
  const top = imageY * scale;

  const existing = document.getElementById("dynamic-img");
  if (existing) existing.remove();
  if (!url) return;

  const img = document.createElement("img");
  img.id = "dynamic-img";
  img.src = url;
  img.width = 330 * scale;
  img.height = 245 * scale;

  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;
  img.style.zIndex = "9999";
  img.style.objectFit = "fill";  // ← správná uvozovka!

  img.onerror = () => {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  document.body.appendChild(img);
})();

}

window.Script40 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

window.Script41 = function()
{
  (function disableZoomAndScroll() {
  let meta = document.querySelector("meta[name=viewport]");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("gesturechange", e => e.preventDefault());
  document.addEventListener("gestureend", e => e.preventDefault());

  let lastTouchEnd = 0;
  document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", e => e.preventDefault(), { passive: false });

  // ❗ Zamezení víceprstového zoomování
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
      showZoomBlockMessage();
    }
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // 💬 Upozornění pro uživatele při pokusu o pinch zoom
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      transition: "opacity 0.3s ease",
      opacity: 1
    });

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  // 🔒 Overlay pro zachycení víceprstových doteků a blokaci pinch zoomu
  function createZoomBlockOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9998,
      backgroundColor: "transparent",
      touchAction: "none"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
  }

  window.addEventListener("load", () => {
    document.body.style.touchAction = "manipulation"; // ✅ varianta 2: povolit swipe, zakázat pinch
    createZoomBlockOverlay(); // ✅ varianta b: overlay s blokací pinch
  });
})();




// Kompletní výběr – přidáno imageUrl ke každému záznamu
const words = [
  { id: 1, word: "construction site | building site", description: "​an area of land where something is being built", imageUrl: "https://static01.nyt.com/images/2023/10/10/multimedia/10jfk-01-twhc/10jfk-01-twhc-superJumbo.jpg" },
  { id: 2, word: "debris", description: "broken or torn pieces of something larger that are left after something has been destroyed", imageUrl: "https://statik.tempo.co/data/2025/02/01/id_1373956/1373956_720.jpg" },
  { id: 3, word: "Work In Progress | WIP ", description: "something that is being developed or suggested but that is not yet complete", imageUrl: "https://s3-ap-southeast-1.amazonaws.com/sun.assets/uploads/l_2018_08_06_104856_do5v4t2benm7iw9c3pryjfksu1gxa8qzhl6_EN_.jpg" },
  { id: 4, word: "delay", description: "when something does not happen or start when it should do", imageUrl: "https://i.cdn.newsbytesapp.com/images/l69220240116183655.jpeg" },
  { id: 5, word: "to skid", description: "to slide along a surface so that you have no control", imageUrl: "https://i2-prod.mirror.co.uk/incoming/article31241366.ece/ALTERNATES/n615/0_Autumn-weather-October-20th-2023.jpg" },
  { id: 6, word: "bog down", description: "to make something sink into mud or wet ground", imageUrl: "https://cdn.abcotvs.com/dip/images/656237_041315-ktrk-planeskids-11-img.jpg" },
  { id: 7, word: "fuel leak", description: "to get in or out unintentionally through a small hole in something", imageUrl: "https://pbs.twimg.com/media/C8aLAKAXYAAv5UO.jpg" },
  { id: 8, word: "fuel spillage | spill", description: "an act of letting a liquid come or fall out of a container", imageUrl: "https://cloudfront.bernews.com/wp-content/uploads/2018/05/Fuel-Spill-Plane-Bermuda-May-28-2018-7620.jpg" },
  { id: 9, word: "laser attack | laser strike", description: "when a bright visible laser light causes distraction or temporary flash blindness to a pilot, during a critical phase of flight such as landing or takeoff", imageUrl: "https://cdn.boldmethod.com/images/learn-to-fly/aeromedical-factors/why-laser-strikes-are-hazardous-to-pilots/primary.jpg" },
  { id: 10, word: "drone sighting", description: "spotting of unmanned aircraft from pilots, citizens and law enforcement ", imageUrl: "https://patch.com/img/cdn20/users/22821257/20241206/121346/styles/patch_image/public/patch-stock-drone-schiavone-20-1___06121130790.jpg" },
  { id: 11, word: "obstacle ", description: "an object that is in your way and that makes it difficult for you to move forward", imageUrl: "https://media.cntraveler.com/photos/59f348b2d2b9967ad8d2c64a/master/pass/Alaska-Seal-AP_17298747235915.jpg" },
  { id: 12, word: "obstruction", description: "something that blocks a road, an entrance, etc", imageUrl: "https://thefourthrevolution.org/wordpress/wp-content/uploads/2012/03/obstacle-on-your-road.jpg" },
  { id: 13, word: "grass margin", description: "a strip of unfertilised land covered with a common wild plant with narrow green leaves", imageUrl: "https://www.sehinc.com/hubfs/Website/Blog-News/Header_PrivateRunways.jpg" },
  { id: 14, word: "drainage ", description: "the system of water or waste liquids flowing away from somewhere into the ground or down pipes", imageUrl: "https://www.hauraton.com/wp-content/uploads/2021/09/apron-airside-airport-drainage-channel-hauraton1.jpg" }
];


function clampId(id) {
  return Math.min(Math.max(id, 1), words.length);
}

function fetchWikipediaImage(term, callback) {
  const cleanTerm = term.split('|')[0].trim();
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTerm)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.thumbnail && data.thumbnail.source) {
        callback(data.thumbnail.source);
      } else {
        callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
      }
    })
    .catch(() => callback("https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"));
}

window.updateContentById = function(id) {
  const player = GetPlayer();
  const safeId = clampId(id);
  player.SetVar("CurrentID", safeId);

  const match = words.find(entry => entry.id === safeId);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  if (match) {
    player.SetVar("Word", match.word);
    player.SetVar("Description", match.description);

    if (match.imageUrl) {
      player.SetVar("ImageURL", match.imageUrl);
    } else {
      fetchWikipediaImage(match.word, (imgUrl) => {
        player.SetVar("ImageURL", imgUrl);
      });
    }
  } else {
    player.SetVar("Word", "Unknown");
    player.SetVar("Description", "No description found.");
    player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");
  }
};

(function setupSwipeHandler() {
  if (window._storylineSwipeStart)
    document.removeEventListener("touchstart", window._storylineSwipeStart);
  if (window._storylineSwipeEnd)
    document.removeEventListener("touchend", window._storylineSwipeEnd);

  let startX = 0;
  const threshold = window.innerWidth * 0.1;

  window._storylineSwipeStart = e => {
    startX = e.changedTouches[0].screenX;
  };

  window._storylineSwipeEnd = e => {
    const endX = e.changedTouches[0].screenX;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      const current = GetPlayer().GetVar("CurrentID");
      updateContentById(current + (diff > 0 ? 1 : -1));
    }
  };

  document.addEventListener("touchstart", window._storylineSwipeStart);
  document.addEventListener("touchend", window._storylineSwipeEnd);
})();

function waitForCurrentIDAndInit() {
  const player = GetPlayer();
  const currentId = player.GetVar("CurrentID");

  if (typeof updateContentById === "function") {
    player.SetVar("CurrentID", 1); // reset na začátek
    updateContentById(1);
  } else {
    setTimeout(waitForCurrentIDAndInit, 100);
  }
}


waitForCurrentIDAndInit();

function waitForUpdateFunctionAndRefresh(currentId) {
  if (typeof updateContentById === 'function') {
    updateContentById(currentId);
  } else {
    setTimeout(() => waitForUpdateFunctionAndRefresh(currentId), 100);
  }
}

function refreshContent() {
  const player = GetPlayer();
  const currentId = clampId(player.GetVar("CurrentID"), 52);

  player.SetVar("Word", "Načítání...");
  player.SetVar("Description", "Prosím čekejte...");
  player.SetVar("ImageURL", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

  setTimeout(() => {
    waitForUpdateFunctionAndRefresh(currentId);
  }, 200);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshContent();
  }
});

setTimeout(() => refreshContent(), 300);

}

window.Script42 = function()
{
  (function insertZoomBlockOverlayForStoryline() {
  function showZoomBlockMessage() {
    const existing = document.getElementById("zoom-block-msg");
    if (existing) return;

    const msg = document.createElement("div");
    msg.id = "zoom-block-msg";
    msg.innerText = "Přiblížení dvěma prsty není podporováno.";
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 300);
    }, 1500);
  }

  function insert() {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return;
    const slideID = player.GetVar("SlideID");
    if (slideID !== 1) return;

    if (window.__overlayDisabled) return;
    if (window.__overlayRemovedManually) return;
    if (document.getElementById("zoom-block-overlay")) return;

    const slideWidth = 414;
    const slideHeight = 736;
    const scale = window.innerHeight / slideHeight;
    const offsetX = (window.innerWidth - slideWidth * scale) / 2;

    const overlay = document.createElement("div");
    overlay.id = "zoom-block-overlay";

    Object.assign(overlay.style, {
      position: "absolute",
      left: `${offsetX}px`,
      top: "100px",
      width: `${slideWidth * scale}px`,
      height: `${slideHeight * scale}px`,
      zIndex: "9998",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      touchAction: "pan-x pan-y",
      pointerEvents: "auto"
    });

    overlay.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        showZoomBlockMessage();
      }
    }, { passive: false });

    overlay.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.appendChild(overlay);
    console.log("[Overlay] vložen + 2prstová blokace aktivní:", overlay.style);
  }

  const checkPlayer = () => {
    const player = window.GetPlayer && GetPlayer();
    if (!player) return setTimeout(checkPlayer, 50);
    insert();
  };

  checkPlayer();

  const observer = new MutationObserver(() => {
    if (!document.getElementById("zoom-block-overlay")) {
      if (window.__overlayRemovedManually) return;
      insert();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(() => {
    if (!document.getElementById("zoom-block-overlay") && window.__overlayRemovedManually === false) {
      insert();
      console.log("[Overlay] Vynucené vložení overlaye intervalem");
    }
  }, 1000);

  (function enableOverlayOnAllQuestionsClick() {
    const observer = new MutationObserver(() => {
      const button = document.querySelector('[alt="ALLQUESTIONS"]');
      if (button) {
        button.addEventListener("click", () => {
          if (window.__overlayRemovedManually !== false) {
            window.__overlayRemovedManually = false;
            console.log("[Overlay] Reset přes tlačítko ALLQUESTIONS");
          }
        }, { once: true });

        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  })();

  (function autoResetOverlayFlagsOnSlideChange() {
    let previousSlideID = null;

    setInterval(() => {
      const player = window.GetPlayer && GetPlayer();
      if (!player) return;

      const currentSlideID = player.GetVar("SlideID");
      if (currentSlideID !== previousSlideID) {
        if (currentSlideID === 1) {
          window.__overlayDisabled = false;
          window.__overlayRemovedManually = false;
          console.log("[Overlay] 🔁 SlideID 1 → overlay flagy resetovány");
        }
        previousSlideID = currentSlideID;
      }
    }, 500);
  })();
})();

}

window.Script43 = function()
{
  (function showImageAlignedToSlide() {
  const player = GetPlayer();
  const url = player.GetVar("ImageURL");

  const slideWidth = 414;
  const slideHeight = 736;

  const scale = window.innerHeight / slideHeight;
  const offsetX = (window.innerWidth - slideWidth * scale) / 2;

  const imageX = player.GetVar("ImageX") || 0;
  const imageY = player.GetVar("ImageY") || 0;

  const left = offsetX + imageX * scale;
  const top = imageY * scale;

  const existing = document.getElementById("dynamic-img");
  if (existing) existing.remove();
  if (!url) return;

  const img = document.createElement("img");
  img.id = "dynamic-img";
  img.src = url;
  img.width = 330 * scale;
  img.height = 245 * scale;

  img.style.position = "absolute";
  img.style.left = `${left}px`;
  img.style.top = `${top}px`;
  img.style.zIndex = "9999";
  img.style.objectFit = "fill";  // ← správná uvozovka!

  img.onerror = () => {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  document.body.appendChild(img);
})();

}

window.Script44 = function()
{
  const imageUrl = GetPlayer().GetVar("ImageURL");
const iframe = document.querySelector("iframe");
if (iframe) iframe.src = imageUrl;

}

};
