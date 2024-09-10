$(function(){
   

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000, // 5초 간격으로 변경
        },
      
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        progressBar: {
            el: '.swiper-progressbar .progress', // 프로그래스 바 요소
            hide: false, // 프로그래스 바 감추기 여부 (기본값: false)
          },
        on: {
            
            paginationRender: function () {
                // 각 슬라이드 변경 시 이미지에 대한 효과를 적용
                $("#main .swiper-container .swiper-wrapper .swiper-slide .mn_slide_txbox > *").css({
                    "transform": "scale(1.4)",
                    "transform": "translateY(0%)",
                    "opacity": "1"
                });
            },
            slideChangeTransitionStart: function () {
                // 각 슬라이드 변경 시 이미지에 대한 효과를 적용
                $(".swiper-slide-active img").css({
                    "transform": "scale(1)",
                    "transition": "transform 3s ease"
                });
                $("#main .swiper-container .swiper-wrapper .swiper-slide .mn_slide_txbox > *").css({
                    "transform": "translateY(0%)",
                    "opacity": "1"
                });
                updateProgressBar();
            },
            slidePrevTransitionStart: function () {
                $(".swiper-slide-active img").css({
                    "transform": "scale(1.4)"
                });
                resetProgressBar();
            },
            slideNextTransitionStart: function () {
                resetProgressBar();
            },
            slideChangeTransitionEnd: function () {
                // 이전 슬라이드에 대한 효과를 제거
                $(".swiper-slide-prev .mn_slide_txbox > *").css({
                    "transform": "translateY(40%)",
                    "opacity": "0"
                });
                // 다음 슬라이드에 대한 효과를 제거
                $(".swiper-slide-next .mn_slide_txbox > *").css({
                    "transform": "translateY(40%)",
                    "opacity": "0"
                });
                $(".swiper-slide-active img").css({
                    "transform": "scale(1)"
                });
            },
        }
    });

    function updateProgressBar() {
        var progressBar = $('.swiper-progressbar .progress');
        progressBar.stop().css('width', '0%').animate({ width: '100%' }, mySwiper.params.autoplay.delay, 'linear');
    }

    function resetProgressBar() {
        var progressBar = $('.swiper-progressbar .progress');
        progressBar.stop().css('width', '0%');
    }
    $("#nav .zoom_cl").css("color", "#f5f5f5");
    $("#nav").hover(
        function() {
            // 호버 상태일 때의 처리
            $(this).css("background-color", "white");
            $("#menu h1 a").css("color", "black");
            $("#logo img").attr("src", "img/logo.svg");
            $("#nav #mn_rt span").css("color", "black");
            $("#nav #mn_rt p").css("color", "black");
            $("#nav .zoom_cl").css("color", "#f5f5f5");
        },
        function() {
            // 호버 상태가 아닐 때의 처리
            $(this).css("background-color", ""); // 원래의 백그라운드 색상으로 되돌리기
            $("#menu h1 a").css("color", "#f5f5f5"); // 원래의 텍스트 색상으로 되돌리기
            $("#logo img").attr("src", "img/logo_white.svg"); // 로고 이미지 속성 변경
            $("#nav #mn_rt span").css("color", "#f5f5f5");
            $("#nav #mn_rt p").css("color", "#f5f5f5");
        }
    );

      $(".sub").hover(
        function(){
          $("#nav").css("background-color", "white"); 
          $("#menu h1 a").css("color", "black");
          $("#logo img").attr("src", "img/logo.svg"); 
          $("#nav #mn_rt span").css("color", "black");
          $("#nav #mn_rt p").css("color", "black");
          $("#nav .zoom_cl").css("color", "#f5f5f5");
          
          
        },
        function(){
          $("#nav").css("background-color", ""); // 원래의 백그라운드 색상으로 되돌리기
          $("#menu h1 a").css("color", "#f5f5f5"); // 원래의 텍스트 색상으로 되돌리기
          $("#logo img").attr("src", "img/logo_white.svg"); // 로고 이미지 속성 변경
          $("#nav #mn_rt span").css("color", "#f5f5f5");
          $("#nav #mn_rt p").css("color", "#f5f5f5");
        }
      );
      $(".sub_mn_1,.sub_mn_2 ,.sub_mn_3 ,.sub_mn_4, .sub_mn_5 ").hide();
      
      $('#nav #menu h1:nth-of-type(1)').hover(function() {
        handleMenuHover($(this), $('.sub_mn_1'));
    });

    // 메뉴 2 호버 이벤트 처리
    $('#nav #menu h1:nth-of-type(2)').hover(function() {
        handleMenuHover($(this), $('.sub_mn_2'));
    });
    // 메뉴 3 호버 이벤트 처리
    $('#nav #menu h1:nth-of-type(3)').hover(function() {
        handleMenuHover($(this), $('.sub_mn_3'));
    });

    $('#nav #menu h1:nth-of-type(4)').hover(function() {
        handleMenuHover($(this), $('.sub_mn_4'));
    });

    $('#nav #menu h1:nth-of-type(5)').hover(function() {
        handleMenuHover($(this), $('.sub_mn_5'));
    });

    // 서브 메뉴 호버 및 떠남 이벤트 처리
    $('.sub_mn_1, .sub_mn_2, .sub_mn_3 , .sub_mn_4, .sub_mn_5').hover(function() {
        $(this).stop(true, true);
    }, function() {
        $(this).stop(true, true).slideUp();
        $(this).siblings('h1').css('border-bottom', '0px');
    });

    // 메뉴와 서브 메뉴의 호버 상태를 처리하는 함수
    function handleMenuHover(menu, submenu) {
        menu.css('border-bottom', '3px solid #2C7CD8');
        submenu.stop(true, true).slideDown();
        menu.siblings('h1').css('border-bottom', '');
        submenu.siblings('.sub_mn_1, .sub_mn_2, .sub_mn_3 , .sub_mn_4 ,.sub_mn_5').stop(true, true).slideUp();
    }
    $('.mn_rt_dn1 , .mn_rt_dn2').hide();
    $('#mn_rt p:nth-of-type(1)').hover(function() {
        $('.mn_rt_dn1').stop(true, true).fadeIn();
    }, function() {
        $('.mn_rt_dn1').stop(true, true).fadeOut();
    });

    // .mn_rt_dn1 요소와 해당 요소의 자식 요소에 호버 이벤트 처리
    $('.mn_rt_dn1').hover(function() {
        $(this).stop(true, true).show();
    }, function() {
        $(this).stop(true, true).fadeOut();
    });

    $('#mn_rt p:nth-of-type(2)').hover(function() {
        $('.mn_rt_dn2').stop(true, true).fadeIn();
    }, function() {
        $('.mn_rt_dn2').stop(true, true).fadeOut();
    });

    // .mn_rt_dn1 요소와 해당 요소의 자식 요소에 호버 이벤트 처리
    $('.mn_rt_dn2').hover(function() {
        $(this).stop(true, true).show();
    }, function() {
        $(this).stop(true, true).fadeOut();
    });
    
    $('#mn_rt span:nth-of-type(2)').click(function() {
        $("#nav").show();
        $("#nav .zoom_menu_pc").fadeIn();
        if (!$(this).hasClass('clicked')) {
            // 처음 클릭할 때 수행할 동작
            $(this).html('<span class="material-symbols-rounded zoom_cl">close</span>');
            $(this).css({
                "background-color": "#043285",
                "font-size": "1.5em",
                "color":"#f5f5f5 !important" 
            });
            $("#nav .zoom_menu_pc").css({
                "display": "flex",
                
            });
         
            
         
            
            $("#menu, #main").css({
                "pointer-events": "none",
                "backgrond-color": "#111"
            });
            $("#menu, #nav #logo").css({
                "filter": "blur(5px)",
    
            });
            $("#nav").css("background-color", "white"); 
            $("#menu h1 a").css("color", "black");
            $("#logo img").attr("src", "img/logo.svg"); 
            $("#nav #mn_rt span").css("color", "black");
            $("#nav #mn_rt p").css("color", "black");
    
            $(this).addClass('clicked');
        } else {
            $("#nav .zoom_menu_pc").hide();
            $("#nav .zoom_menu_pc").css({
                "display": "",
                
            });
            // 두 번째 클릭할 때 수행할 동작
            $(this).html(' <span class="material-symbols-rounded">search </span>');
            $(this).css({
                "background-color": "",
                "font-size": "1em"
            });
         
            
            $("#menu, #main").css({
                "pointer-events": "",
                "backgrond-color": "",
                "color":""
            });
            $("#menu, #nav #logo").css({
                "filter": "",
    
            });
            $("#nav").css("background-color", ""); 
            $("#menu h1 a").css("color", "");
            $("#logo img").attr("src", ""); 
            $("#nav #mn_rt span").css("color", "");
            $("#nav #mn_rt p").css("color", "");
    
            $(this).removeClass('clicked');
        }
    });
    var lastScrollTop = 0;
    var nav = document.getElementById("nav");
    var navHeight = nav.offsetHeight;
    var isNavVisible = false;
    
    
    // 클릭 이벤트 핸들러
    $('#mn_rt span:nth-of-type(2)').click(function(event) {
      event.stopPropagation(); // 이벤트 전파 중지
      if (isNavVisible) {
        nav.style.top = "-" + navHeight + "px"; // 네비게이션 바 숨김
      } else {
        nav.style.top = "0"; // 네비게이션 바 표시
      }
      isNavVisible = !isNavVisible; // 네비게이션 바 상태 토글
    });
    
    // 스크롤 이벤트 핸들러
    window.addEventListener("scroll", function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
      if (!isNavVisible) {
        if (scrollTop > lastScrollTop) {
          // 스크롤을 내릴 때
          nav.style.top = "-" + navHeight + "px"; // 네비게이션 바 숨김
        } else {
          // 스크롤을 올릴 때
          nav.style.top = "0"; // 네비게이션 바 표시
        }
      }
    
      lastScrollTop = scrollTop;
    });
    
    // #container 클릭 이벤트 핸들러
    $('#container').click(function() {
      if (isNavVisible) {
        nav.style.top = "-" + navHeight + "px"; // 네비게이션 바 숨김
        isNavVisible = false; // 네비게이션 바 상태 토글
      }
     $('.zoom_menu_pc').hide(); 
     $("#mn_rt span:nth-of-type(2").html(' <span class="material-symbols-rounded">search </span>');
     $("#mn_rt span:nth-of-type(2)").css({"background-color":"transparent"});
     $("#mn_rt span:nth-of-type(2)").css({"font-size":"1em"});
    });

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var page2Height = $('#page2').outerHeight();
        var twoThirdsPage2Height = (2 * page2Height) / 3;
    
        var page3Height = $('#page3').outerHeight();
        var page3Height1_3 = page3Height / 3; // 페이지3의 1/3 지점
        var page3Height1_5 = page3Height * 1.5 / 3; // 페이지3의 1.5/3 지점
    
        // 페이지2 요소들에 대한 애니메이션
        if (scrollPosition > page2Height / 3) {
            $('#page2_warp_boxwrap1 .boxwarp1_box1, #page2_warp_boxwrap1 .boxwarp1_box2').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    
        if (scrollPosition > twoThirdsPage2Height) {
            $('#page2_warp_boxwrap2 > div').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    
        // 페이지3 요소들에 대한 애니메이션
        if (scrollPosition > page3Height1_3) {
            $('#page3_warp_boxwrap1').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    
        if (scrollPosition > page3Height1_5) {
            $('#page3_warp_boxwrap2, #page3_warp_boxwrap3').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    });
    $('.page3_warp_boxwrap2_box1').hover(function() {
        $('.page3_warp_boxwrap2_box1_txbox p').css({
            'opacity': '1'
        });
    }, function() {
        // 마우스가 요소 위에서 벗어날 때 실행되는 함수
        $('.page3_warp_boxwrap2_box1_txbox p').css({
            'opacity': '0'
        });
    });

    $('.page3_warp_boxwrap2_box2').hover(function() {
        $('.page3_warp_boxwrap2_box2_txbox p').css({
            'opacity': '1'
        });
    }, function() {
        // 마우스가 요소 위에서 벗어날 때 실행되는 함수
        $('.page3_warp_boxwrap2_box2_txbox p').css({
            'opacity': '0'
        });
    });
    $('.page3_warp_boxwrap2_box3').hover(function() {
        $('.page3_warp_boxwrap2_box3_txbox p').css({
            'opacity': '1'
        });
    }, function() {
        // 마우스가 요소 위에서 벗어날 때 실행되는 함수
        $('.page3_warp_boxwrap2_box3_txbox p').css({
            'opacity': '0'
        });
    });

    $('#page3_warp_boxwrap3 > div').hover(function() {
        $(this).css({
            'background-color': '#2C7CD8'
        });
        $(this).find('span').css({
            'color': '#f5f5f5'
        });
        $(this).find('div h3, div p').css({
            'color': '#f5f5f5',
            
        });
        
    }, function() {
        $(this).css({
            'background-color': ''
        });
        $(this).find('span').css({
            'color': ''
        });
        $(this).find('div h3, div p').css({
            'color': '',
            
        });
        
    });
    $('#page4 #page4_warp #page4_warp_boxwrap2 #page4_warp_boxwrap2_box1').hover(
        function() {
            // 호버 인 시
            $(this).find('img').css({
                'transform': 'scale(1.1)'
            });
        },
        function() {
            // 호버 아웃 시
            $(this).find('img').css({
                'transform': 'scale(1)'
            });
        }
    );

    $('#page4 #page4_warp #page4_warp_boxwrap2 #page4_warp_boxwrap2_box2 > div').hover(
        function() {
            // 호버 인 시
            $(this).find('img').css({
                'transform': 'scale(1.1)'
            });
        },
        function() {
            // 호버 아웃 시
            $(this).find('img').css({
                'transform': 'scale(1)'
            });
        }
    );

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var page4Top = $('#page4').offset().top;
        var page4Height = $('#page4').outerHeight();
        var page4Middle = page4Top + page4Height / 2;
        var page4Bottom = page4Top + page4Height;

        // #page4_warp_boxwrap1 h2 요소에 대한 애니메이션
        if (scrollPosition >= page4Top && scrollPosition <= page4Middle) {
            $('#page4 #page4_warp #page4_warp_boxwrap1 h2').css({
                'transform': 'translateY(0%)',
                'opacity': '1'
            });
            $('#page4 #page4_warp #page4_warp_boxwrap2 #page4_warp_boxwrap2_box1, #page4 #page4_warp #page4_warp_boxwrap2 #page4_warp_boxwrap2_box2').css({
                'transform': 'translateY(0%)',
                'opacity': '1'
            });
        }
    });

    $(window).scroll(function() {
        var nav = $("#nav");
        var page2OffsetTop = $("#page2").offset().top;
        var scrollTop = $(window).scrollTop();
    
        // #page2의 첫 부분을 넘어갈 때
        if (scrollTop > page2OffsetTop) {
            nav.css("background-color", "white");
            $("#menu h1 a").css("color", "black");
            $("#logo img").attr("src", "img/logo.svg");
            $("#nav #mn_rt span").css("color", "black");
            $("#nav #mn_rt p").css("color", "black");
            $("#nav .zoom_cl").css("color", "#f5f5f5");

            $("#nav .zoom_cl span").css("color","black")

            $("#nav_m_left span").css("color","black")
            $("#nav_m_right span").css("color","black")
            $("#nav_m_center img").attr("src", "img/logo.svg");

        } else {
            nav.css("background-color", "transparent");
            $("#menu h1 a").css("color", "white");
            $("#logo img").attr("src", "img/logo_white.svg");
            $("#nav #mn_rt span").css("color", "white");
            $("#nav #mn_rt p").css("color", "white");
            $("#nav .zoom_cl").css("color", "white");

            $("#nav .zoom_cl span").css("color","white")

            $("#nav_m_left span").css("color","white")
            $("#nav_m_right span").css("color","white")
            $("#nav_m_center img").attr("src", "img/logo_white.svg");
        }
    });
    
    $(".sub, #nav").hover(
        function() {
            $("#nav").css("background-color", "white");
            $("#menu h1 a").css("color", "black");
            $("#logo img").attr("src", "img/logo.svg");
            $("#nav #mn_rt span").css("color", "black");
            $("#nav #mn_rt p").css("color", "black");
            $("#nav .zoom_cl").css("color", "#f5f5f5");
        },
        function() {
            var scrollTop = $(window).scrollTop();
            var page2OffsetTop = $("#page2").offset().top;
    
            if (scrollTop > page2OffsetTop) {
                $("#nav").css("background-color", "white");
                $("#menu h1 a").css("color", "black");
                $("#logo img").attr("src", "img/logo.svg");
                $("#nav #mn_rt span").css("color", "black");
                $("#nav #mn_rt p").css("color", "black");
                $("#nav .zoom_cl").css("color", "#f5f5f5");
            } else {
                $("#nav").css("background-color", "transparent");
                $("#menu h1 a").css("color", "white");
                $("#logo img").attr("src", "img/logo_white.svg");
                $("#nav #mn_rt span").css("color", "white");
                $("#nav #mn_rt p").css("color", "white");
                $("#nav .zoom_cl").css("color", "white");
            }
        }
    );

    $('#nav_m #nav_m_left').click(function() {
        window.location.href = 'html/m.menu.html';
    });
    $('.zoom_menu_m').hide();
    $('#nav_m #nav_m_right').click(function() {
        // 클릭 이벤트 핸들러 내에서 상태를 확인하여 동작을 분기
        if ($('.zoom_menu_m').is(':visible')) {
            // zoom_menu_m이 보이는 상태일 때
            $('.zoom_menu_m').fadeOut();
            $('#nav_m #nav_m_right').css({
                'background-color': '',
            });
            $('#nav_m #nav_m_right span').css({
                'color': '',
                'font-size': '1em',
            }).html('<span class="material-symbols-rounded">search</span>');
        } else {
            // zoom_menu_m이 보이지 않는 상태일 때
            $('.zoom_menu_m').fadeIn();
            $('#nav_m #nav_m_right').css({
                'background-color': '#043285',
            });
            $('#nav_m #nav_m_right span').css({
                'color': '#f5f5f5',
                'font-size': '1em',
            }).html('<span class="material-symbols-rounded cl_m">close</span>');
        }
    });




    $(document).ready(function() {
        // 페이지 로드시 한 번 체크
        checkWidth();

        // 윈도우 크기 변경시 체크
        $(window).resize(checkWidth);

        function checkWidth() {
            // 윈도우 너비 가져오기
            var windowWidth = $(window).width();
            
            // 너비가 1000px 이하일 때 #nav를 숨김

        

            if (windowWidth <= 1000) {
                $('#nav').hide();
                $('#nav_m').show();
       
            } else {
                $('#nav').show();
                $('#nav_m').hide();
    
            }
        }
    });

    
 
    


  
        
    
        
   
    
});