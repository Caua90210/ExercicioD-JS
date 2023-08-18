'use strict'

      function calcularMedia() {
        const n1 = parseFloat(document.getElementById("n1").value);
        const n2 = parseFloat(document.getElementById("n2").value);
        const n3 = parseFloat(document.getElementById("n3").value);
        const n4 = parseFloat(document.getElementById("n4").value);
        const md1 = (n1 + n2 + n3 + n4) / 4;
        const mediaEl = document.getElementById("media");
        const statusEl = document.getElementById("status");

        mediaEl.textContent = md1.toFixed(1);

        if (md1 >= 7) {
          statusEl.textContent = "Aprovado";
          statusEl.classList.add("aprovado");
          statusEl.classList.remove("reprovado");
        } else {
          const NE = parseFloat(
            prompt("Digite a nota do exame (entre 0 e 10)")
          );
          const md2 = (NE + md1) / 2;
          mediaEl.textContent = md2.toFixed(1);

          if (md2 >= 5) {
            statusEl.textContent = "Aprovado em exame";
            statusEl.classList.add("aprovado");
            statusEl.classList.remove("reprovado");
          } else {
            statusEl.textContent = "Reprovado";
            statusEl.classList.add("reprovado");
            statusEl.classList.remove("aprovado");
          }
        }
      }