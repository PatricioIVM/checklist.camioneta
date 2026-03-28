// FIRMA DIGITAL
const canvas = document.getElementById("firma");
const ctx = canvas.getContext("2d");

let dibujando = false;

canvas.addEventListener("mousedown", () => dibujando = true);
canvas.addEventListener("mouseup", () => dibujando = false);
canvas.addEventListener("mousemove", dibujar);

function dibujar(e){
  if(!dibujando) return;
  ctx.lineWidth = 2;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

function limpiarFirma(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// PDF
function generarPDF(){
  const elemento = document.getElementById("formulario");

  html2pdf().set({
    margin: 5,
    filename: "checklist.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  }).from(elemento).save();
}

// IMAGEN
function generarImagen(){
  html2canvas(document.getElementById("formulario"))
  .then(canvas => {
    let link = document.createElement("a");
    link.download = "checklist.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
