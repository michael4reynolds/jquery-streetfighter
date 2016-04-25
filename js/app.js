$(document).ready(function () {
    $('.ryu')
        .mouseenter(function () {
            $('.ryu .ryu-still').hide();
            $('.ryu .ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu .ryu-ready').hide();
            $('.ryu .ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu .ryu-ready').hide();
            $('.ryu .ryu-cool').hide();
            $('.ryu .ryu-still').hide();
            $('.ryu .ryu-throwing').show();
            $('.hadouken').finish().show().animate(
                { 'left': '1020px' },
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '520px');
                }
            );
        })
        .mouseup(function () {
            $('.ryu .ryu-throwing').hide();
            $('.ryu .ryu-ready').show();
        });
    $('.hulk-ryu')
        .mouseenter(function () {
            $('.hulk-ryu .ryu-still').hide();
            $('.hulk-ryu .ryu-ready').show();
        })
        .mouseleave(function () {
            $('.hulk-ryu .ryu-ready').hide();
            $('.hulk-ryu .ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.hulk-ryu .ryu-ready').hide();
            $('.hulk-ryu .ryu-cool').hide();
            $('.hulk-ryu .ryu-still').hide();
            $('.hulk-ryu .ryu-throwing').show();
            $('.hulk-hadouken').finish().show().animate(
                { 'left': '1020px' },
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '520px');
                }
            );
        })
        .mouseup(function () {
            $('.hulk-ryu .ryu-throwing').hide();
            $('.hulk-ryu .ryu-ready').show();
        });
    $('body').keydown(function (e) {
        if (e.which == 88) {
            $('.ryu .ryu-ready').hide();
            $('.ryu .ryu-still').hide();
            $('.ryu .ryu-cool').show();
        }
        if (e.which == 89) {
            $('.hulk-ryu .ryu-ready').hide();
            $('.hulk-ryu .ryu-still').hide();
            $('.hulk-ryu .ryu-cool').show();
        }
    });
    $('body').keyup(function (e) {
        if (e.which == 88) {
            $('.ryu .ryu-ready').hide();
            $('.ryu .ryu-cool').hide();
            $('.ryu .ryu-still').show();
        }
        if (e.which == 89) {
            $('.hulk-ryu .ryu-ready').hide();
            $('.hulk-ryu .ryu-cool').hide();
            $('.hulk-ryu .ryu-still').show();
        }
    })
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound'[0]).load();
    $('#hadouken-sound')[0].play();
}