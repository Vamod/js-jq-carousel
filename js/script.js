$(document).ready(function(){
    //al click del pulsante prev richiamo la funzione che mi scorre le immagini a sx
    $('.prev').click(function(){
        prevImage();
    });


    //al click del pulsante prev richiamo la funzione che mi scorre le immagini a dx
    $('.next').click(function(){
        nextImage();
    });


    //funzioni

    //funzione prev
    function prevImage(){
        var activeImage = $('.images img.active');
        var cerchioAttivo = $('.nav i.active');

        activeImage.removeClass('active');
        cerchioAttivo.removeClass('active');

        if(activeImage.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else {
            activeImage.prev().addClass('active');
            cerchioAttivo.prev().addClass('active');
        }
    }

    //funzione next
    function nextImage(){
        //rimuovi la classe aggiungi la classe
        //memorizzo in una variabile immagine attiva
        var activeImage = $('.images img.active');

        var cerchioAttivo = $('.nav i.active');
        //devo togliere la classe dall'oggetto
        activeImage.removeClass('active');
        cerchioAttivo.removeClass('active');

        if(activeImage.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
        // aggiungo la classe active alla prossima image
        activeImage.next().addClass('active');
        cerchioAttivo.next().addClass('active');
        }
    }

});
