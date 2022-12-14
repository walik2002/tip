(function(){
    let array = [],
    tmp;
    let sum = 0;
    do{
        tmp = prompt('Введите число', '');
        if(tmp === '' || tmp === null || isNaN(tmp)) 
        break;
        array.push(+tmp);
        sum += +tmp
    } while (true);

    alert("Сумма значений массива: " + sum)
})();