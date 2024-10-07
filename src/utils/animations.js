const animationDuration = 400;

function ajustarAltura(pagina) {
  let container = document.querySelector(".page");
  let pageContent = document.querySelector(`.${pagina}__container`);
  // Ajustar la altura del contenedor a la de la página que se va a mostrar
  container.style.height = `${pageContent.offsetHeight}px`;
}

export function esconderPaginaIzq(pagina) {
  let currentPageContainer = document.querySelector(`.${pagina}__container`);
  ajustarAltura(pagina); // Ajustar la altura antes de animar
  currentPageContainer.animate(
    [
      { transform: "translateX(0)", opacity: 1 },
      { transform: "translateX(-100vw)", opacity: 0 },
    ],
    {
      duration: animationDuration,
      fill: "forwards",
      easing: "ease",
    }
  );
  setTimeout(() => {
    currentPageContainer.style.display = "none";
  }, animationDuration);
}

export function esconderPaginaDer(pagina) {
  let currentPageContainer = document.querySelector(`.${pagina}__container`);
  ajustarAltura(pagina); // Ajustar la altura antes de animar
  currentPageContainer.animate(
    [
      {
        transform: "translateX(0)",
        opacity: "1",
      },
      {
        transform: "translateX(100vw)",
        opacity: "0",
      },
    ],
    {
      duration: animationDuration,
      fill: "forwards",
      easing: "ease",
    }
  );
  setTimeout(() => {
    currentPageContainer.style.display = "none";
  }, animationDuration);
}

export function mostrarPaginaIzq(pagina) {
  let nextPageContainer = document.querySelector(`.${pagina}__container`);
  ajustarAltura(pagina); // Ajustar la altura antes de mostrar la nueva página
  nextPageContainer.style.display = "block";
  nextPageContainer.animate(
    [
      { transform: "translateX(100vw)", opacity: 0 },
      { transform: "translateX(0)", opacity: 1 },
    ],
    {
      duration: animationDuration,
      fill: "forwards",
      easing: "ease",
    }
  );
  setTimeout(() => {
    ajustarAltura(pagina); // Ajustar la altura al terminar la animación
  }, animationDuration);
}

export function mostrarPaginaDer(pagina) {
  let prevPageContainer = document.querySelector(`.${pagina}__container`);

  ajustarAltura(pagina); // Ajustar la altura antes de mostrar la nueva página
  prevPageContainer.style.display = "block";
  prevPageContainer.animate(
    [
      {
        transform: "translateX(-100vw)",
        opacity: "0",
        display: "none",
      },
      {
        transform: "translateX(0)",
        opacity: "1",
        display: "block",
      },
    ],
    {
      duration: animationDuration,
      fill: "forwards",
      easing: "ease",
    }
  );
  setTimeout(() => {
    ajustarAltura(pagina); // Ajustar la altura al terminar la animación
  }, animationDuration);
}
