const images = document.querySelectorAll("img[data-src]")

const obsever = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // pega o valor que esta guardado no dataset.src
            entry.target.src = entry.target.dataset.src
            // para de ser observada
            obsever.unobserve(entry.target)
        }
    })
})

images.forEach(img => {
    obsever.observe(img)
})

// OBS: Cada entry é uma cada imagem específica!

// Como funciona?
// 1. Pagina carrega -> carrega com imagem em 10px
// 2. Passa pelo JS-API IntersectionObserver -> pega o valor do dataset.src guardado
// 3. Exibe no site a imagem 100% carregada em tamanho 1000px