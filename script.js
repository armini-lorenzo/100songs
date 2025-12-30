// ==========================
// PALETTE CASUALE
// ==========================
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
  
  // ==========================
  // ELENCO CANZONI (MODIFICA QUI)
  // ==========================
  const songs = [
    { title: "Il posto più freddo", image: "titolo3.jpg" },
    { title: "Ballavi", image: "titolo3.jpg" },
    { title: "ladri di lenzuola", image: "titolo3.jpg" },
    { title: "dimmi che provi quello che provo io", image: "titolo3.jpg" },
    { title: "quando non parli", image: "titolo3.jpg" },
    { title: "Miss", image: "titolo3.jpg" },
    { title: "Che serata stupida", image: "titolo3.jpg" },
    { title: "Futuri Posibili", image: "titolo3.jpg" },
    { title: "LA FRETTA", image: "titolo3.jpg" },
    { title: "Mal di gola", image: "titolo3.jpg" },
    { title: "Agosto", image: "titolo3.jpg" },
    { title: "ti amo", image: "titolo3.jpg" },
    { title: "Se avessi saputo", image: "titolo3.jpg" },
    { title: "Contenta Tu", image: "titolo3.jpg" },
    { title: "La prima notte insieme", image: "titolo3.jpg" },
    { title: "Sempre peggio", image: "titolo3.jpg" },
    { title: "Tinder", image: "titolo3.jpg" },
    { title: "non chiamarmi amore", image: "titolo3.jpg" },
    { title: "Parole vuote", image: "titolo3.jpg" },
    { title: "Lascia", image: "titolo3.jpg" },
    { title: "Paglie", image: "titolo3.jpg" },
    { title: "Solo Guai", image: "titolo3.jpg" },
    { title: "Rosso così", image: "titolo3.jpg" },
    { title: "Sayonara", image: "titolo3.jpg" },
    { title: "GUARDA COSA HAI FATTO", image: "titolo3.jpg" },
    { title: "Immagina", image: "titolo3.jpg" },
    { title: "Sfiorivano le viole", image: "titolo3.jpg" },
    { title: "Le biciclette", image: "titolo3.jpg" },
    { title: "SOLAMENTE DI TE", image: "titolo3.jpg" },
    { title: "SENZA FIATO", image: "titolo3.jpg" },
    { title: "Sempre la stessa storia", image: "titolo3.jpg" },
    { title: "parlami di +", image: "titolo3.jpg" },
    { title: "Manzarek", image: "titolo3.jpg" },
    { title: "Sei acqua", image: "titolo3.jpg" },
    { title: "In Questa Casa", image: "titolo3.jpg" },
    { title: "Boy, don't cry", image: "titolo3.jpg" },
    { title: "Persi da un po'", image: "titolo3.jpg" },
    { title: "Cosa mi manchi a fare", image: "titolo3.jpg" },
    { title: "10K Scale", image: "titolo3.jpg" },
    { title: "LA MACCHINA", image: "titolo3.jpg" },
    { title: "Ho Capito Che Non Eravamo", image: "titolo3.jpg" },
    { title: "Due punti", image: "titolo3.jpg" },
    { title: "Tutti", image: "titolo3.jpg" },
    { title: "Con la lingua", image: "titolo3.jpg" },
    { title: "Forse", image: "titolo3.jpg" },
    { title: "Punk", image: "titolo3.jpg" },
    { title: "Remember", image: "titolo3.jpg" },
    { title: "Non sei tu", image: "titolo3.jpg" },
    { title: "Passerà", image: "titolo3.jpg" },
    { title: "Escluso il cane", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    { title: "", image: "titolo3.jpg" },
    


    {
        title: "mozzicone",
        image: "mozzicone.jpg"
      },
      {
        title: "CORNFLAKES",
        image: "cornflakes.jpeg"
      },
    
  ];
  
  
  // ==========================
  // GENERAZIONE LISTA
  // ==========================
  const songList = document.getElementById("songList");

  songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => openDetail(song);
    songList.appendChild(li);
  });
  
  function openDetail(song) {
    home.classList.add("hidden");
    detail.classList.remove("hidden");
    img.src = `images/${song.image}`;
  }
  
  
  // ==========================
  // NAVIGAZIONE
  // ==========================
  const home = document.getElementById("home");
  const detail = document.getElementById("detail");
  const img = document.getElementById("songImage");

  
  document.getElementById("backBtn").onclick = () => {
    detail.classList.add("hidden");
    home.classList.remove("hidden");
  };
  