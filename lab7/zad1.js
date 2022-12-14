let button = document.querySelector('input[class = "submit"]')

button.onclick = function(){
    let name = document.querySelector('input[name = "name"]').value;
    let surname = document.querySelector('input[name = "surname"]').value;

    if(name ==null || name =='' || surname ==null || surname ==''){
        alert("Не введены все значения")
        return;
    }
    let zad_arrs = []
    

    zad_arrs.push(document.querySelectorAll('input[name = "zad1"]'));
    zad_arrs.push(document.querySelectorAll('input[name = "zad2"]'));
    zad_arrs.push(document.querySelectorAll('input[name = "zad3"]'));
    zad_arrs.push(document.querySelectorAll('input[name = "zad4"]'));
    zad_arrs.push(document.querySelectorAll('input[name = "zad5"]'));
    zad_arrs.push(document.querySelectorAll('input[name = "zad6"]'));

    let grades = []

    zad_arrs.forEach(element => {
        let isSelected = false
        for (let i = 0; i < element.length; i++) {
            
            if(element[i].checked){
                if(i == +2){
                    grades.push(+1);
                    isSelected =true;
                }
                else{
                    isSelected = true
                    grades.push( 1/3 + 1/3*i)
                }
            }
            
        }
        if(!isSelected)
            grades.push(0)           
    });

    console.log("Номер школы: " + name + "\nФамилия ученика: " + surname + "\nСумма баллов: " + sum(grades) + "\nКатегория: " + category(grades))

}

function category(grades){

    let first = true
    for (let i = 0; i < grades.length; i++) {
        if(grades[i] != +1)
        first = false;
    }

    if(first)
        return "1 категория";

    let hasOne = false
    let second = true

    for (let i = 0; i < grades.length; i++) {
        if(grades[i] == +1)
            hasOne = true;
        if(grades[i]< 2/3)
            second = false
    }

    if(second && hasOne)
        return "2 категория";

    let third = true

    for (let i = 0; i < grades.length; i++) {

        if(grades[i]< 2/3)
            third = false
    }
    if(third)
        return "3 категория"
    
    return "4 категория"
}

function sum(grades){
    let summ = +0
    for (let i = 0; i < grades.length; i++) {
        summ += grades[i]
    }
    return summ;
}