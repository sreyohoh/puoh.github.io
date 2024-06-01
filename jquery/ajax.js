$(document).ready(function(){
   $.ajax({
       url:'https://dummyjson.com/products',
       method:"GET",
       contentType:"application/json; charset=utf-8",
       success:function(data){
           let title = data.title
           $('body').html("<h5>+ title + </h5>");
       }

   })

});