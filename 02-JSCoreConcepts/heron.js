// boki trójkąta
        //a = 3;
        b = 4;
        c = 5;
        h = 7

        // Pole trókąta o bokach ..., ... oraz ... wynosi ... .

        let a = () => {

        let o = (b+c+h)/2;

        let p = Math.sqrt(o*(o-b)*(o-c)*(o-h));

        return p;
        }

        console.log(`Pole trójkąta o bokach 4, 5 oraz 7 wynosi ${a()}` );