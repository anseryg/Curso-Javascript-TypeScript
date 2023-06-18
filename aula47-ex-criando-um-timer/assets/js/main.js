function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (event) {  // Irá escutar todos eventos de click no document/html todo
    const elemento = event.target;  // Verifica onde foi que ocorreu o evento de click

    if (elemento.classList.contains("iniciar")) {  // Se o evento de click foi no elemento que contém a classe iniciar
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (elemento.classList.contains("pausar")) {  // Se o evento de click foi no elemento que contém a classe pausar
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (elemento.classList.contains("zerar")) {  // Se o evento de click foi no elemento que contém a classe zerar
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
      relogio.classList.remove("pausado");
    }
  });
}

relogio();
