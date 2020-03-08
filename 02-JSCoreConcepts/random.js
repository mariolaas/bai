let array = () => {

    let arr = new Array();

    for(let i=1;i<=10;i++){
        arr.push(Math.floor(Math.random()*(20-5+1)) + 5);
        
    }
    return arr;
}

let wynik = () => {
    console.log(array());
}

wynik();
