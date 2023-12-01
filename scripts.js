$(document).ready(function() {
    $(window).on('scroll', function() {
      var scrollPosition = $(window).scrollTop();
      var opacity = scrollPosition / 100; // Altere conforme necessário
      $('.navbar').css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const slidesList = document.querySelector(".slides-list");
    let currentIndex = 0;

    function showSlide(index) {
      slidesList.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slidesList.children.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slidesList.children.length) % slidesList.children.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000); // Altere o intervalo conforme necessário (em milissegundos)
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de clique aos botões
    document.querySelectorAll('.buttons-container button').forEach(function (button) {
      button.addEventListener('click', function () {
        // Obtém o valor do atributo 'data-target'
        var targetId = button.getAttribute('data-target');
  
        // Obtém a posição da seção de destino
        var targetSection = document.getElementById(targetId);
        var targetPosition = targetSection.offsetTop;
  
        // Rola a página até a posição da seção de destino
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Adiciona um efeito de rolar suave
        });
      });
    });
  });