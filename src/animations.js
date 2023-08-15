export function esconderPaginaIzq(pagina) {
  let currentPageContainer = document.querySelector(`.${pagina}__container`);
  currentPageContainer.animate(
    [
      { transform: "translateX(0)", opacity: 1 },
      { transform: "translateX(-100vw)", opacity: 0 },
    ],
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
  setTimeout(() => {
    currentPageContainer.style.display = "none";
  }, 500);
}

export function esconderPaginaDer(pagina) {
  let currentPageContainer = document.querySelector(`.${pagina}__container`);
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
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
  setTimeout(() => {
    currentPageContainer.style.display = "none";
  }, 500);
}

export function mostrarPaginaIzq(pagina) {
  let nextPageContainer = document.querySelector(`.${pagina}__container`);
  nextPageContainer.style.display = "block";
  nextPageContainer.animate(
    [
      { transform: "translateX(100vw)", opacity: 0 },
      { transform: "translateX(0)", opacity: 1 },
    ],
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
}

export function mostrarPaginaDer(pagina) {
  let prevPageContainer = document.querySelector(`.${pagina}__container`);
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
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
}
