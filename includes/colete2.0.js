(function () {
  "use strict";

  let cltEnabled = false;
  const [iconId, cltSlot] = ["cltIcon", document.getElementById("ehp2")];

  const cltObserver = new MutationObserver((mutations) => {
    if (cltEnabled)
      mutations.forEach(() => {
        const idxOfFullClt = getIndexOfFullClt();
        if (idxOfFullClt === -1) return console.warn("Acabou os coletes.");

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
    } else console.warn("Elemento não encontrado: ", selector);
  }

  function toggleEnabled(event) {
    const selectedValue = event.target.value;
    if (selectedValue === "0") return;

    cltEnabled = Boolean(selectedValue);
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

  function replaceInventoryTitle() {
    const divTitle = $(".titulo-inv")[0];
    const font = divTitle.querySelector("font");
    const select = document.createElement("select");
    
    select.style.fontWeight = font.style.fontWeight
    select.style.margin = font.style.margin
    select.style.fontSize = font.style.fontSize
    select.style.marginLeft = font.style.marginLeft
    select.style.padding = font.style.padding
    select.style.top = font.style.top
    select.style.borderRadius = font.style.borderRadius
    select.style.width = font.style.width
    select.style.height = font.style.height
    select.style.textAlign = font.style.textAlign
    select.style.cursor = font.style.cursor

    select.onchange = toggleEnabled;
    select.innerHTML = `
      <option value="0" selected>Inventário</option>
      <option value="">No</option>
      <option value="1">Yes</option>
    `;

    font.remove();
    divTitle.appendChild(select);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    div.titulo-inv > select {
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      color: #fff !important;
      background-color: transparent !important;
      overflow: hidden !important;
      border: 0px !important;
      outline: 0px !important;
    }
  `;

  replaceInventoryTitle();
  document.head.appendChild(style);
})();