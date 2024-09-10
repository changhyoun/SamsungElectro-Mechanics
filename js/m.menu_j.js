document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion-item');

    // JavaScript로 숨김 처리
    accordions.forEach(function(accordion) {
        var panel = accordion.querySelector('.accordion-panel');
        panel.style.display = 'none';

        var nestedPanels = accordion.querySelectorAll('.nested-accordion-panel');
        nestedPanels.forEach(function(nestedPanel) {
            nestedPanel.style.display = 'none'; // nested-accordion-panel을 숨김 처리
        });

        accordion.addEventListener('click', function() {
            var thisAccordion = this;

            // 현재 클릭한 아코디언만 열도록 설정
            if (!thisAccordion.classList.contains('active')) {
                accordions.forEach(function(otherAccordion) {
                    otherAccordion.classList.remove('active');
                    var otherPanel = otherAccordion.querySelector('.accordion-panel');
                    otherPanel.style.display = 'none';

                    var otherNestedPanels = otherAccordion.querySelectorAll('.nested-accordion-panel');
                    otherNestedPanels.forEach(function(otherNestedPanel) {
                        otherNestedPanel.style.display = 'none'; // 다른 아코디언의 nested-accordion-panel을 숨김 처리
                    });
                });

                thisAccordion.classList.add('active');
                panel.style.display = 'block';
            } else {
                thisAccordion.classList.remove('active');
                panel.style.display = 'none';
            }
        });

        var nestedAccordions = accordion.querySelectorAll('.nested-accordion-item');

        nestedAccordions.forEach(function(nestedAccordion) {
            nestedAccordion.addEventListener('click', function(event) {
                event.stopPropagation(); // 이벤트 버블링을 막음
                this.classList.toggle('active');
                var nestedPanel = this.querySelector('.nested-accordion-panel');
                if (nestedPanel.style.display === 'block') {
                    nestedPanel.style.display = 'none';
                } else {
                    nestedPanel.style.display = 'block';
                }
            });
        });
    });

    $('.accordion-header').click(function(){
        var spanElement = $(this).find('span.material-symbols-rounded');

        if (!spanElement.length || spanElement.text() === 'keyboard_control_key') {
            $(this).find('span').html('expand_more');
        } else {
            $(this).find('span').html('keyboard_control_key');
        }
    });

    $('.nested-accordion-header').click(function(){
        var spanElement = $(this).find('span.material-symbols-rounded');

        if (!spanElement.length || spanElement.text() === 'remove') {
            $(this).find('span').html('add');
        } else {
            $(this).find('span').html('remove');
        }
    });
    $('#nav_left').click(function() {
        window.location.href = '../index.html';
    });

    
   
});

document.addEventListener("DOMContentLoaded", function() {
    var navRightButton = document.getElementById("nav_right");

    navRightButton.addEventListener("click", function() {
        // 전화 걸기
        window.location.href = "tel:010-6636-5780";
    });
});