export function generate_adding() {
    let d = Math.floor(Math.random() * 10 +1);
    if(d == 10) {
         d = Math.floor(Math.random() * 10 +1);
    }
    let d1 = 10 - d;
    return [d1, d, d +" + ? = 10" ];
}

export function generate_multiply50() {
    let d1, d2;
    do {
        d1 = Math.floor(Math.random() * 10 + 1);
        d2 = Math.floor(Math.random() * 10 + 1);
    } while (d1 * d2 >= 50);
    if(d1 == 1 || d2 == 1) {
          do {
            d1 = Math.floor(Math.random() * 10 + 1);
            d2 = Math.floor(Math.random() * 10 + 1);
        } while (d1 * d2 >= 50);   
    }
    return [d1, d2, d2 + " x " + " ? = " + d1*d2];
}

export function generate_multiply100() {
    let d1, d2;
    do {
        d1 = Math.floor(Math.random() * 10 + 1);
        d2 = Math.floor(Math.random() * 10 + 1);
    } while (d1 * d2 >= 100);
    if(d1 == 1 || d2 == 1) {
          do {
            d1 = Math.floor(Math.random() * 10 + 1);
            d2 = Math.floor(Math.random() * 10 + 1);
        } while (d1 * d2 >= 100);   
    }
    return [d1*d2, d1, d2, d1 + " x " + d2 +" = ?"];
}

export function generate_divide100() {
    let d1, d2;
    do {
        d1 = Math.floor(Math.random() * 10 + 1);
        d2 = Math.floor(Math.random() * 10 + 1);
    } while (d1 * d2 >= 100);
    if(d1 == 1 || d2 == 1) {
          do {
            d1 = Math.floor(Math.random() * 10 + 1);
            d2 = Math.floor(Math.random() * 10 + 1);
        } while (d1 * d2 >= 100);   
    }
    return [d2, d1, d2, d1*d2 + " : " + d1 +" = ?"];
}