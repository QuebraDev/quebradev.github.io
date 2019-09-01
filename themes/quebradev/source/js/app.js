require('bootstrap/dist/js/bootstrap')
var $ = require('jquery')

$(function (){
    $('.support-list').hide();
    
    $('#select-podcast-type').change(function () {
        var epCount = (this.value == 'all') ? $('[data-post-type]').length : $('[data-post-type="'+this.value+'"]').length
        $('.ep-count').html(epCount + ' episódios encontrados.')

        $('[data-description-type]').css('display', 'none')
        $('[data-description-type="'+this.value+'"]').css('display', 'block')

        $('[data-post-type]').each(function () {
            if ($('#select-podcast-type').val() == 'all') {
                $(this).removeClass('d-none')
                return
            }

            if ($(this).data('post-type') != $('#select-podcast-type').val()) {
                $(this).addClass('d-none')
            } else {
                $(this).removeClass('d-none')
            }
        })
    })

    $('.supporters h4').click(function () {
        $('.support-list').fadeToggle();
    });
})