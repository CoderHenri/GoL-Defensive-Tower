function Gamestart() {

    var MovementEnemy1 = setInterval(frameDown, 3);

    var posDown1 = 0;

    function frameDown() {

        var elem1 = document.getElementById("Gegner1");   

        if (posDown1 <= 1000) {
            posDown1++; 
            elem1.style.top = posDown1 + 'px'; 

        } else if(posDown1 > 1000){
            posDown1 = 0;
            elem1.style.top = posDown1 + 'px'; 
            clearInterval(MovementEnemy1);
        }
    }

    
}