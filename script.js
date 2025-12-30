// Palette casuale
const palettes = [
    { bg: "#1e272e", p: "#ff6b6b", s: "#feca57" },
    { bg: "#2d3436", p: "#74b9ff", s: "#55efc4" },
    { bg: "#130f40", p: "#e056fd", s: "#686de0" },
    { bg: "#000000", p: "#00ffcc", s: "#ffcc00" }
  ];
  
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  document.documentElement.style.setProperty("--bg", palette.bg);
  document.documentElement.style.setProperty("--primary", palette.p);
  document.documentElement.style.setProperty("--secondary", palette.s);
  
  // Genera titoli
  const songList = document.getElementById("songList");
  for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Titolo ${i}`;
    li.onclick = () => openDetail(i);
    songList.appendChild(li);
  }
  
  const home = document.getElementById("home");
  const detail = document.getElementById("detail");
  const img = document.getElementById("songImage");
  
  function openDetail(index) {
    home.classList.add("hidden");
    detail.classList.remove("hidden");
    img.src = `images/${index}.jpg`;
  }
  
  document.getElementById("backBtn").onclick = () => {
    detail.classList.add("hidden");
    home.classList.remove("hidden");
  };
  