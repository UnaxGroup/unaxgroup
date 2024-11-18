(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);



// Função para formatar a hora e minutos no formato pt-BR (HH:mm)
function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// Função para obter o nome do dia da semana em pt-BR
function getDayName(date) {
  const daysOfWeek = [
    "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
  ];
  return daysOfWeek[date.getDay()];
}

// Função para atualizar o horário
function updateTime() {
  const now = new Date();
  const dayName = getDayName(now);  // Obtém o nome do dia da semana
  const timeString = formatTime(now);  // Obtém o horário formatado
  const timeElement = document.getElementById('current-time');

  // Exibe a informação no formato: Dia da Semana - Horário de funcionamento
  timeElement.textContent = `${dayName} - Sex : ${timeString}`;
}

// Atualizar o horário a cada minuto (60000 ms)
setInterval(updateTime, 60000);
updateTime(); // Atualizar imediatamente ao carregar a página

