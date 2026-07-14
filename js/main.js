// Navbar: fundo ao rolar
const navbar = document.getElementById("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll);
onScroll();

// Menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("active");
});
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("active");
  })
);

// Animação de revelar ao rolar
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Formulário -> WhatsApp
const waForm = document.getElementById("waForm");
if (waForm) {
  waForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const phone = waForm.dataset.phone;
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const linhas = [
      `Olá! Meu nome é ${nome}.`,
      `Telefone: ${telefone}`,
      mensagem ? `Mensagem: ${mensagem}` : null,
      "Gostaria de agendar uma avaliação.",
    ].filter(Boolean);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}

// Ano atual no rodapé
document.getElementById("year").textContent = new Date().getFullYear();
