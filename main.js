window.addEventListener("load", init)
function init() {
    /* változók deklarása/ létrehozása  */
    /*változók inicializálása - értéket adunk egy változónak */
    /*Gyengén típusos nyelv */
    var valt1 = "kettő";
    let valt2 = 2.45;
    const VALT3 = 3; /**A futási időben nem változtathatjuk meg az értéké! */
    //valt3= 4; -> hiba, mert konstansnak nem adhatok lésőbb értéket!
    atalakitott = parseInt(valt1);
    console.log("valt1", valt1, typeof valt1);
    console.log("valt2", parseInt(valt2), typeof parseInt(valt2));
    console.log("valt3", typeof VALT3);

    let logikai = 3 < 5;
    console.log("logikai", logikai, typeof logikai);
    /** Műveletek */
    let eredmeny = valt1 - valt2 //két különböző típus esetén elvégzi a műveletet 
    //Nincs hibaüzenetet, szövvegként egymás után fűzi!
    console.log("eredmeny", eredmeny, typeof eredmeny);
    elagazasok()
    ciklusok()
}


function elagazasok() {
    console.log("*********Elágazások*********")
    var szam = 19;
    /** Ha szám osztható kettővel és hárommal is, akkor írjuk ki, 2-vel 3-mal  
     * különben csak 2-vel, csak 3-mal, vagy egyikkel sem!
    */
    if (szam % 2 == 0 && szam % 3 == 0) {
        console.log("2, vel s 3-mal is osztható");
    } else if (szam % 2 == 0) {
        console.log("páros");
    } else if (szam % 3 == 0) {
        console.log("3-mal osztható");
    } else {
        console.log("Egyikkel sem osztható");
    }
/**Többágú elágazás 
 * Adott egy nap 1-7
*/
/**Generáljunk véletlen számot 1és 7 között [1, 7], [1, 8] */
//return Math.floor(Math.random() * (max - min) ) + min;
var nap = parseInt(Math.random() * 7) + 1;

switch (nap) {
    case 1:
        console.log("Hétfő");
        // code block
        break;
    case 2:
        console.log("Kedd");
        // code block
        break;
    case 3:
        console.log("Szerda");
        // code block
        break;
    case 4:
        console.log("Csütörtök");
        // code block
        break;
    case 5:
        console.log("Péntek");
        // code block
        break;
    case 6:
        console.log("Szombat");
        // code block
        break;
    case 7:
        console.log("Vasárnap");
        // code block
        break;
    default:
        console.log("Ez nem egy hét napja!")
    // code block
}
}
function ciklusok(){
    console.log("**********Ciklusok*********")
    /**Elöltesztelős cikluss
     * Hátul tesztelős ciklus
    * számlálós ciklus -for
     */
    /**Írjunk ki a konzolra 10véletlen számot! 
     * [100, 500]
    */
    /**Generáljunk véletlen számot 1és 7 között [1, 7], [1, 8] */
//return Math.floor(Math.random() * (max - min) ) + min;
    for (let index = 0; index < 10; index++) {
       var vszam = parseInt(Math.random()* 401) + 100;
        console.log(vszam)
    }
    /**Generáljunk véletlen számokat -20 és +10 zárt intervallumban */
    /**Addig generáljuk, amíg pozitív számot  nem kapunk! */
    do{
        var vszam = parseInt(Math.random()* 31) - 20;
        console.log(vszam)
    }while(vszam <= 0);
        
    /**Ha nem akarom, hogy kiírja a 
     * pozitív számot akkor rérdemes 
     * elöltesztelős ciklust használni */
    var vszam = parseInt(Math.random()* 31) - 20;
    while(vszam <= 0){
        console.log(vszam);
        var vszam = parseInt(Math.random()* 31) - 20;
        
    }
    
}
