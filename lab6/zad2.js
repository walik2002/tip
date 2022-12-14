document.querySelector('button').onclick = function(){
    let l = document.querySelector('#lenght').value;
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let input = [];
    let result = [];
    for(let i=0;i<l;i++){
        input.push(randomNum(a,b));
    }
    console.log(input);

    for(let i=0;i<l; i++){
        if(isEven(input[i]) != false){
            result.push(filt(input[i], isEven(input[i])))
        }
        
    }
    console.log(input)
    console.log(result);
    
    return result;
}

function randomNum(a,b){
    var rand = a - 0.5 + Math.random() * (b-a+1)
    rand = Math.round(rand);
    return rand;
}

function isEven(x){
    return x%2==0;
}

function filt(input, isEven){
    if(isEven){
        return input;
    }
}