$(document).ready(function() {
    $("input[type='checkbox']").on("change", function() {
        if ($(this).is(':checked')) {
            odpoved = true;
            console.log(odpoved);
            $('#email').addClass('required error');
            console.log(email);
        }else{
            odpoved = false;
            console.log(odpoved);
            $('#email').removeClass('required error');
            console.log(email);
        }
    });
});

$('form').on('submit',function(event) {
    let 
});