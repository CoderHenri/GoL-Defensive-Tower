function Gamestart() {

    var MovementEnemy1 = setInterval(frameDown, 10);

    var StyleposDown1 = window.getComputedStyle(document.getElementById("Gegner1"));
    var posDown1 = StyleposDown1.getPropertyValue("margin-top"); //Ergebnis hat px am Schluss stehen
    var posD1 = parseInt(posDown1, 10); //gibt nur die Number wieder (löscht das px)

    function frameDown() {

        var elem1 = document.getElementById("Gegner1");

        if (posD1 <= 1000) {
            posD1++; 
            elem1.style.top = posD1 + 'px'; 

        } else if(posD1 > 1000){
            posD1 = 0;
            elem1.style.top = posD1 + 'px'; 
            clearInterval(MovementEnemy1);
        }
    }

    var EnemyDetectionTower1 = setInterval(Detect1, 10);

    function Detect1() {

        var elemGegner1 = window.getComputedStyle(document.getElementById("Gegner1"));
        var GX1 = elemGegner1.getPropertyValue("margin-left");
        GX1 = parseInt(GX1, 10);
        var GY1 = elemGegner1.getPropertyValue("margin-top");
        GY1 = parseInt(GY1, 10);

        var elem1 = document.getElementById("Gegner1");
        var EX1 = elem1.style.left;
        EX1 = parseInt(EX1, 10);
        var EY1 = elem1.style.top;
        EY1 = parseInt(EY1, 10);
        var EnemyWidth1 = elem1.offsetWidth;
        var EnemyHeigth1 = elem1.offsetHeight;

        EX1 = EX1 || 0; //Da Gegner 1 kein style left element hat filtern wir so das NaN Ergebnis aus

        var EnemyPosX1 = GX1 + EX1 + 25; //+ Hälfte der Bildhöhr & Breite
        var EnemyPosY1 = GY1 + EY1 + 25;
        //alert(EnemyPosX1 + "X" + EnemyPosY1 + "Y" + EnemyWidth1 + "W" + EnemyHeigth1 + "H");


        var elemTower1 = window.getComputedStyle(document.getElementById("Tower1"));
        var TowerDetecPosX1 = elemTower1.getPropertyValue("margin-left");
        TowerDetecPosX1 = parseInt(TowerDetecPosX1, 10) + 50;       //+ Hälfte von der Bild Höhe, weil der Fokuspunkt links oben und nicht Mitte Mitte ist
        var TowerDetecPosY1 = elemTower1.getPropertyValue("margin-top");
        TowerDetecPosY1 = parseInt(TowerDetecPosY1, 10) + 50;        // selbe wie zwei Zeilen weiter oben
        var TowerDetecRadius1 = 250;
        //alert(TowerDetecPosX1 + " X || " + TowerDetecPosY1 + " Y");

        var circle={x:TowerDetecPosX1,y:TowerDetecPosY1,r:TowerDetecRadius1};
        var rect={x:EnemyPosX1,y:EnemyPosY1,w:EnemyWidth1,h:EnemyHeigth1};

        //Ab hier ist der Kollisionscheck

            var distX = Math.abs((circle.x - circle.r) - (rect.x - rect.w / 2));
            var distY = Math.abs((circle.y - circle.r) - (rect.y - rect.h / 2));

            if (distX <= (rect.w / 2)) {
                alert("Hit");
            } 
            if (distY <= (rect.h / 2)) {
                alert("Hit2");
            }
        
            var dx=distX-rect.w/2;
            var dy=distY-rect.h/2;
            if(dx*dx+dy*dy<=(circle.r*circle.r)) {
                //alert("Hi3");
            };
        
    }
    
}