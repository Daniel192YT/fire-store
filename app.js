const packs = [
  {diamonds:"100",detail:"Paquete básico",price:"Consultar precio"},
  {diamonds:"310",detail:"Paquete popular",price:"Consultar precio",featured:true},
  {diamonds:"520",detail:"Paquete avanzado",price:"Consultar precio"},
  {diamonds:"1060",detail:"Paquete especial",price:"Consultar precio"},
  {diamonds:"2180",detail:"Paquete premium",price:"Consultar precio"},
  {diamonds:"5600",detail:"Paquete élite",price:"Consultar precio"},
  {diamonds:"11200",detail:"Paquete legendario",price:"Consultar precio"},
  {diamonds:"Personalizado",detail:"Consulta otros paquetes",price:"Consultar precio"}
];
const products=document.getElementById("products");
packs.forEach((p,i)=>{
  const card=document.createElement("article");
  card.className="product"+(p.featured?" featured":"");
  card.innerHTML=`${p.featured?'<span class="popular">POPULAR</span>':''}<div class="diamond">💎</div><h3>${p.diamonds}</h3><p>${p.detail}</p><div class="price">${p.price} <small>· sujeto a confirmación</small></div><button class="btn btn-red choose" data-pack="${p.diamonds}">Seleccionar ↗</button>`;
  products.appendChild(card);
});
const toastEl=document.getElementById("toast");
let toastTimer;
function toast(msg){toastEl.textContent=msg;toastEl.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.remove("show"),2800)}
function openModal(id){document.getElementById(id).classList.add("show");document.getElementById(id).setAttribute("aria-hidden","false")}
function closeModal(id){document.getElementById(id).classList.remove("show");document.getElementById(id).setAttribute("aria-hidden","true")}
document.addEventListener("click",e=>{
  const choose=e.target.closest(".choose");
  if(choose){document.getElementById("selectedPack").value=choose.dataset.pack+" diamantes";openModal("orderModal")}
  const close=e.target.closest("[data-close]");
  if(close)closeModal(close.dataset.close);
  if(e.target.classList.contains("modal-backdrop"))closeModal(e.target.id);
});
document.getElementById("loginOpen").addEventListener("click",()=>openModal("loginModal"));
document.getElementById("discordLogin").addEventListener("click",()=>toast("El inicio OAuth2 de Discord necesita configuración segura del servidor."));
document.getElementById("emailLogin").addEventListener("click",()=>toast("El registro por correo se activará al conectar un proveedor de autenticación."));
document.getElementById("sendOrder").addEventListener("click",()=>{
  const uid=document.getElementById("playerId").value.trim();
  const pack=document.getElementById("selectedPack").value;
  const user=document.getElementById("discordName").value.trim();
  if(!/^[0-9]{5,20}$/.test(uid)){toast("Escribe un UID numérico válido (5 a 20 dígitos).");return}
  const message=`Hola, quiero solicitar una recarga de Free Fire.%0A%0APaquete: ${encodeURIComponent(pack)}%0AUID: ${encodeURIComponent(uid)}%0ADiscord: ${encodeURIComponent(user||"No indicado")}%0A%0AQuedo pendiente de confirmar disponibilidad y precio.`;
  window.open("https://discord.com/channels/@me?"+ "message="+message,"_blank","noopener");
  toast("Pedido preparado. Envíalo al equipo por Discord.");
  closeModal("orderModal");
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal-backdrop.show").forEach(m=>closeModal(m.id))});
