const cursor = document.querySelector(".cursor");

const text = document.querySelector(".text");

cursor.style.visibility = "hidden";

document.addEventListener("mousemove", (event) => {
  cursor.setAttribute(
    `style`,
    `top: ${event.clientY - 6}px; left: ${event.clientX - 6}px`
  );
});

text.addEventListener("mouseenter", () => {
  cursor.classList.add("cursor-hover");
});

text.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor-hover");
});


$(document).ready(function() {

    var arrLang={
        
        'tr':{

            '0':'Sitemiz bir süreliğine bakımdadır.',
 


        },


        'en':{
            '0':'Our site is under maintenance for a while.',
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
   