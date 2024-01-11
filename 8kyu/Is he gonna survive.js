function hero(bullets, dragons){
    let qnt = bullets / dragons;
    if (qnt >= 2 || dragons === 0) {
        return true;
    } return false;
    };

    console.log(hero(0, 0))