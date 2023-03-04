class BasicGrid{

    constructor(o){

    }
/**
 *  Lerendereli a gridet, hasznalva a this.#createHeader es this.#createBody lehetosegeket
 *  Azért van különszedve, hogy a header külön életet élhessen, ne kelljen mindeig újrarenderelni pl rendezéskor
 */
    render(){

    }
/**
 * Létrhozza a grid fejlécét, a header options lehetőségből
 */
    #createHeader(){

    }
/**
 * Létrehozza a body részt, azaz az adatokat
 */
    #createBody(){

    }
/**
 * 
 * @param {String} key - a kulcs, ami alapján rendezzük a gridet
 * @param {String} order - a rendezés sorrendje
 * 
 * rendezi az adathalmazt, és ujra rendereli a bodyt. A header-ben meg elvégzi a szükséges módosításokat.
 */
    sortByKey(key, order = "asc"){

    }
/**
 * visszaadja a kiválasztott sor object adatstrukturáját
 * valójában végrehajt egy find keresést a tömbön, a kiválasztott sor id-ja szerint
 */
    get selected(){

    }
/**
 * @param {*} id - egy id alapján beállítja a kiemelt sort
 */
    set selected(id){

    }

/**
 * Visszaadja a kiemelt sor DOM HTML elemét
 */
    get selectedElement(){

    }
/**
 * 
 * @param {*} id - alapján kitürül egy sort a táblázatból. Ezt a HTML sorral is megteszi, vagy újrarendereli a gridBodyt
 */
    deleteById(id){

    }
/**
 * 
 * @param {*} data - obejct | beszúrja az adatot a grid adathalmazába, majd újrarendereli a bodyt.
 * Persze lehet csinálni egy createRow metódust is, ekkor csak a grid HTML DOM elementhez, ezt hozzá kell adni, és kész.
 * 
 */
    insertRow(data){

    }
/**
 * 
 * @param {Array} data - Megcsinálja több elemmel azt, amit az insertRow egy elemmel, 
 * valójában egy ciklusban meghívogatja az insertRow függvényt
 */
    insertRows(data){

    }

    editRowById(id){

    }

    editSelectedRow(){

    }

    prevPage(){

    }

    nextPage(){

    }

    get pagenumber(){

    }

    get page(){

    }

    get pervPageNumber(){ 

    }

    get nextPageNumber(){

    }
}