(function () {
    "use strict";
    
    console.log("By ksmode");
    let cltEnabled = false;
    const [iconId, cltSlot] = ["cltIcon", document.getElementById("ehp2")];
  
    const cltObserver = new MutationObserver((mutations) => {
      if (cltEnabled)
        mutations.forEach(() => {
          const idxOfFullClt = getIndexOfFullClt();
          if (idxOfFullClt === -1) return console.log("Acabou os coletes.");
  
          const cltHealth = document.querySelector("#eh2").style.height;
          const isEquipped =
            document.querySelector("#ehp2").style.display === "block" &&
            cltHealth !== "0%";
  
          if (isEquipped) {
            if (parseInt(cltHealth) < 92) {
              clickElement("#eslot_2");
            }
          } else clickElement(`#rr${idxOfFullClt + 1}`);
        });
    });
  
    function getIndexOfFullClt() {
      const namedSlots = $(".sltimg").splice(2);
  
      return Object.entries($("[id^=whp]")).findIndex(
        ([index, div]) =>
          div.style &&
          namedSlots[index].attributes["data-title"]?.value?.includes("Colete") &&
          div.style.display !== "none" &&
          parseInt(div.children[0].style.height) === 100
      );
    }
  
    function clickElement(selector) {
      const element = document.querySelector(selector);
  
      if (element) {
        console.warn(`Clicando em ${selector}`);
        element.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
        element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      } else console.log("Elemento não encontrado: ", selector);
    }
  
    function toggleEnabled() {
      cltEnabled = !cltEnabled;
      updateIconState(); // Atualiza a cor da bolinha após o clique
  
      if (cltEnabled) {
        cltObserver.observe(cltSlot, {
          childList: true,
          attributes: true,
          subtree: true,
        });
        console.warn("Script ativado.");
      } else {
        cltObserver.disconnect();
        console.warn("Script desativado.");
      }
    }
  
    function updateIconState() {
      const statusBall = document.querySelector(".statusBall");
      if (statusBall) {
        if (cltEnabled) {
          statusBall.style.backgroundColor = "green"; // Ativo (verde)
        } else {
          statusBall.style.backgroundColor = "red"; // Inativo (vermelho)
        }
      }
    }
  
    function createActivatorIcon() {
      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.top = "69%"; // Posição em porcentagem
      container.style.left = "0%"; // Posição em porcentagem
      container.style.transform = "translate(0, -50%)"; // Centraliza verticalmente com base na altura do container
      container.style.display = "flex";
      container.style.alignItems = "center";
      container.style.zIndex = "9999"; // Garante que o ícone fique por cima de outros elementos
  
      // Ícone do colete
      const coleteIcon = document.createElement("img");
      coleteIcon.src = "https://brasilrpg.io/static/img/item/colete2.png";
      coleteIcon.style.width = "32px";
      coleteIcon.style.height = "32px";
      coleteIcon.title = "Ativar/Desativar Script de Colete";
  
      // Bolinha de status (vermelha por padrão)
      const statusBall = document.createElement("div");
      statusBall.classList.add("statusBall");
      statusBall.style.width = "12px";
      statusBall.style.height = "12px";
      statusBall.style.borderRadius = "50%";
      statusBall.style.marginLeft = "10px"; // Espaço entre o ícone e a bolinha
      statusBall.style.backgroundColor = "red"; // Inicia vermelha (desativado)
  
      coleteIcon.onclick = toggleEnabled; // Ativa/desativa o script ao clicar no ícone de colete
  
      container.appendChild(coleteIcon);
      container.appendChild(statusBall);
  
      document.body.appendChild(container); // Adiciona o container com o ícone e a bolinha ao corpo
    }
  
    const style = document.createElement("style");
    style.innerHTML = `
      .statusBall {
        transition: background-color 0.3s ease; /* Transição suave para mudança de cor */
      }

      .vestActivator:hover {
        cursor: pointer;
      }

      /* Media queries para tornar o layout responsivo */
      @media (max-width: 768px) {
        /* Para telas pequenas, o ícone e a bolinha podem ter tamanhos menores */
        .vestActivator {
          width: 24px;
          height: 24px;
        }
        .statusBall {
          width: 10px;
          height: 10px;
          margin-left: 8px;
        }
        /* Ajuste o posicionamento em telas menores */
        div {
          top: 85%;
          left: 5%;
        }
      }

      @media (max-width: 480px) {
        /* Para telas muito pequenas, como smartphones, o ícone e a bolinha são ainda menores */
        .vestActivator {
          width: 20px;
          height: 20px;
        }
        .statusBall {
          width: 8px;
          height: 8px;
          margin-left: 6px;
        }
        /* Ajuste o posicionamento em telas muito pequenas */
        div {
          top: 90%;
          left: 8%;
        }
      }
    `;
  
    createActivatorIcon(); // Cria o ícone e a bolinha
    document.head.appendChild(style);
})();
