let names="";
while(true){
    let name = prompt("Вводите фамилии, нажмите отмена для остановки ввода");
    if(name!=null){
        names += name+"<br>";
    }else{
        break;
    }
}
document.write(names);