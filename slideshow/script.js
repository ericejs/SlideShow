const slides = [
  {
    src: "src/img/Matrix-em-Ultra-HD.webp",
    alt: "Arte em alta definição com o código verde de Matrix",
    caption: "O código que revela outra realidade",
  },
  {
    src: "src/img/0f164bf0ef9f9f875ab4b2d5d3d1f137.jpg",
    alt: "Imagem inspirada no universo Matrix",
    caption: "Entre o real e o virtual",
  },
  {
    src: "src/img/imagens-matriciais-dvfxd08moa4d5hy8.jpg",
    alt: "Composição visual com referências matriciais",
    caption: "Uma perspectiva além da tela",
  },
  {
    src: "src/img/matrix.jpg",
    alt: "Imagem Matrix com tons escuros e verdes",
    caption: "Bem-vindo à Matrix",
  },
];

const image = document.querySelector(".slideshow__image");
const caption = document.querySelector(".slideshow__caption");
const counter = document.querySelector(".slideshow__counter");
const dotsContainer = document.querySelector(".slideshow__dots");
const previousButton = document.querySelector(".slideshow__arrow--previous");
const nextButton = document.querySelector(".slideshow__arrow--next");

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];

  image.src = slide.src;
  image.alt = slide.alt;
  caption.textContent = slide.caption;
  counter.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

  dotsContainer.querySelectorAll(".slideshow__dot").forEach((dot, dotIndex) => {
    dot.setAttribute("aria-current", String(dotIndex === currentSlide));
  });
}

slides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.className = "slideshow__dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Ir para imagem ${index + 1}`);
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.append(dot);
});

previousButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
  if (event.key === "ArrowRight") showSlide(currentSlide + 1);
});

showSlide(currentSlide);
