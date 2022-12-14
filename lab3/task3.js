function space (obj){
    let x = obj.pointx.value;
    let y = obj.pointy.value;

    obj.res.value = Math.sqrt(x*x+y*y).toFixed(3);
}