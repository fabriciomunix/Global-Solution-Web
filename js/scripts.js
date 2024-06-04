// Função para mostrar um alerta
function showAlert() {
    alert('Este é um alerta do OceanoGuard!');
}

// Carrossel de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function voltar() {
    window.location.href = "pagina-inicial.html";
}

// Inicializar o carrossel
showSlide(currentSlide);

// Função de validação de login
function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = "oceansguard.html";
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

//-----------------------------------------------------------------------//

// Define um array com os caminhos das imagens para o slide show
let imagens = ['./images/ajuda.jpg', './images/beneficios.jpg', './images/objetivos.jpg', './images/problema.jpg', './images/publico.jpg', './images/tecnologia.jpg',];
let index = 0; // Índice da imagem atual
let time = 3000; // Tempo de transição entre imagens em milissegundos

// Função para o slide show
function slideShow(){
    // Define a imagem do elemento com o ID 'imgbanner' para a imagem atual
    document.getElementById("imgbanner").src = imagens[index];
    index++; // Incrementa o índice para a próxima imagem

    // Verifica se atingiu o final do array de imagens
    if(index == imagens.length){
        index = 0; // Reinicia o índice para o início do array
    }

    // Configura um temporizador para chamar recursivamente a função slideShow após o tempo especificado
    setTimeout(slideShow, time);
}

// Inicia o slide show
slideShow();
