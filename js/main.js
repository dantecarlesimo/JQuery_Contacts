
$(document).ready(function(){
  $('#newContact').click(function(e){
      e.preventDefault();
      var name = $('#name').val(),
          number = $('#number').val(),
          email = $('#email').val(),
          image = $('#image').val();
      // $('.info').val('');
      if(!name.length || !email.length){
        return;
      }
      else {
       $('.info').val('');
      addContact(name,number,email,image);
      }

  });
  
  var addContact = function(name,number,email,image){
    var newContact = "<li>" + name + "<br>" + number + "<br>" + email + "<br>" + image + "<br><span class = 'delete'>Delete</span><span class = 'edit'>Edit</span></li>";
    $(newContact).hide().appendTo('ul').fadeIn(1000);
  };

  
  $('ul').on('click', 'span.delete', function(){
    $(this).parent().fadeOut(1000, function(){
      $(this).remove();
    });
  });

   // $('ul').on('click', 'span.edit', function(){
   //    $(this).parent().get();
   //    });
   $('ul').on('click', 'span.edit', function(){
    var name = $(this).parent();
      $('#name').val(name);
      var number = $(this).parent();
      $('#number').val(number);

      var email = $(this).parent();
      $('#email').val(email);

      var image = $(this).parent();
      $('#image').val(image);



    $(this).parent().fadeOut(1000, function (){
      $(this).remove();
      // this.reset;
    });

   });
      
  // });
  // });
      

  });

  