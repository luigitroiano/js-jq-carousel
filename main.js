// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
$(function () {
  //funzione per scorrere in avanti le img attraverso l' icona freccia dx
  function goForward(){
    var firstImg = $('img.first');
    var activeImg = $('img.active');
    var firstDot = $('.fa-circle.first');
    var activeDot = $('.fa-circle.active');

    activeImg.removeClass('active');
    activeDot.removeClass('active');

    if (activeImg.hasClass('last')){
        firstImg.addClass('active');
        firstDot.addClass('active');
    }else {
        activeImg.next().addClass('active');
        activeDot.next().addClass('active');
    }
  }
  //invoco funzione goForward
  var viewNext = $('.fa-angle-right');
  viewNext.click(function () { 
    goForward();
  });

});