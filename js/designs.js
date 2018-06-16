
$("input[type='submit']").click(function(evt){
    evt.preventDefault();
    $('#pixelCanvas').children().remove();
    makeGrid();
});
const canvas=$('#pixelCanvas');
const color=$('#colorPicker');
function makeGrid() {
    // Select size input
    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();
    if(height <=0 || width <=0){
      window.alert("Enter a valid input!");
    }
    if (height <= 200 && width <= 200) {
        for (var i = 0; i < height; i++){
            canvas.append("<tr class='row'></tr>");
        }
        for (var j = 0; j < width; j++){
            $('.row').append("<td class='cell'></td>");
        }
    }
    else {
        window.alert("Enter height and width less than 200!");
    }
}
$( 'table' ).on( 'click', 'td' , function() {
    let colour =color.val();
    $(this).css( 'background', colour );
});

canvas.on("dblclick", "td", function(){
    $(this).css("background-color", "");
});

canvas.mousedown(function(e) {
    if (e.which === 1){
        $("td").bind("mouseover", function() {
            let colour = color.val();
            $(this).css("background-color", colour);
        });
    }
});
canvas.mouseup(function(e) {
    if (e.which === 1) {
        $("td").unbind("mouseover");
    }
});
