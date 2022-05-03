addEventListener("load", inicio, true);

function inicio() {
  document.getElementById("mensaje").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toLowerCase();
    },
    true
  );

  document.getElementById("cifrar").addEventListener(
    "click",
    function () {
      let texto = document.getElementById("mensaje").value;
      let desplazamiento = document.getElementById("desplazamiento").value;
      document.getElementById("textArea").value = cifrar2(
        texto,
        desplazamiento
      );
    },
    true
  );
  document.getElementById("descifrar").addEventListener(
    "click",
    function () {
      let texto = document.getElementById("mensaje").value;
      let desplazamiento = document.getElementById("desplazamiento").value;
      document.getElementById("textArea").value = descifrar(
        texto,
        desplazamiento
      );
    },
    true
  );
}

function cifrar(texto, desplazamiento) {
  if (!texto) return "";
  const letras = "abcdefghijklmnopqrstuvwxyz";

  desplazamiento = ((desplazamiento % 26) + 26) % 26;
  return texto.replace(
    /[A-Z]/gi,
    (c) => letras[(letras.indexOf(c) + desplazamiento) % 26]
  );
}

function descifrar(texto, desplazamiento) {
  if (!texto) return "";
  const letras = "abcdefghijklmnopqrstuvwxyz";

  desplazamiento = ((desplazamiento % 26) - 26) % 26;
  return texto.replace(
    /[A-Z]/gi,
    (c) => letras[(letras.indexOf(c) - desplazamiento) % 26]
  );
}

function cifrar2(texto, desplazamiento) {
  let resultado = "";
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";

  desplazamiento = ((desplazamiento % 26) + 26) % 26;

  if (texto) {
    for (let i = 0; i < texto.length; ++i) {
      if (alfabeto.indexOf(texto[i]) != -1) {
        let posicion = (alfabeto.indexOf(texto[i]) + desplazamiento) % 26;
        resultado += alfabeto[posicion];
      } else resultado += texto[i];
    }
  }
  return resultado;
}

function copyToClipBoard() {
  var content = document.getElementById("textArea");

  content.select();
  document.execCommand("copy");

  alert("Copied!");
}
