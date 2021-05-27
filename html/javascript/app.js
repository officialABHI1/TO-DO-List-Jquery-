
/*
$('li').click(function () {
   $(this).toggleClass('completed');
}) 
*/
/*
   After adding the on event listerners to ul it basically adds the its properties also to 
   the new dynamically created elements.
*/


//checked and unchecked functionality
$('ul').on('click', 'li' ,  function () {
   $(this).toggleClass('completed');
})
// delete functionality
$('ul').on('click', 'span' ,  function (event) {
  
    $(this).parent().fadeOut(500, function() {
       $(this).remove();
    })

    // to stop the event bubbling - acting of property to its all parent elements.
    event.stopPropagation();
})

// add todo fucntionality
$('input[type="text"]').keypress(function (e) {
   if(e.which===13)
   {
      const todoText = $(this). val();
      console.log(todoText);
                    // string template literals //
      const todo = `<li><span><i class="far fa-trash-alt"></i></span> ${todoText}</li>`;
      $('ul').append(todo);
      $(this).val("");
   }
    
})

// toggling the add todo box

$('#plus').click(function () {
 $('input[type="text"]').fadeToggle(500);
})