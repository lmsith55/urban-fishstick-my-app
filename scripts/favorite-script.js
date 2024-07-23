
 $(document).ready(function(){
  const elephants = [
  ];

  let currentIndex = 0;

  $('#btnElephants').on('click', function(){
    if (currentIndex >= elephants.length) {
      currentIndex = 0;
    }
    $('#elephantImage').attr('src', elephants[currentIndex++]).show(); 
  });


$('#btnBerleezy').on('click', function(){
  console.log("clicked Berleezy");
});
});