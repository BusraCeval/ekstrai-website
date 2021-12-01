$(document).ready(function() {

    var arrLang={
        
        'tr':{
            '1': 'Web Sitemiz',
            '2' : 'Yeniden tasarlanıyor',
            '3' : 'Pek çok iyileştirme yapıyoruz ve yakında geri döneceğiz.',
            '4' : 'E-postanızı girin ve sizinle iletişime geçelim.'
        },


        'en':{
            '1': 'our new website',
            '2' : 'under construction',
            '3' : 'We are making lots of improvements and will be back soon.',
            '4' : 'Enter Your Email and Get Notified.'
        },
        
        
    };


    
$('.dropdown-item').click(function() {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
    location.reload();
  });

    var lang =JSON.parse(localStorage.getItem('dil'));

    if(lang=="en"){
        $("#drop_yazı").html("English");
    }
    else{
        $("#drop_yazı").html("Türkçe");

    }

    $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index,element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    
  });

});
   

/* Under Construction Template
 * by: Aleks Bella
 */

$(function(){

  
    $('#btn-ok').on('click',function(){
     
      if($('#emailadd').val().length === 0){
        alert('Please enter your email to subscribe.');
      }else{
         $(".input-group-lg").css('color', '#f90').html("Thanks for the subscription.");
        $("#myModal").modal("show");
      }
      
      
    });
    
  });