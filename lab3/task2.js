function square(obj){
    let x1 = obj.pointx1.value;
    let x2 = obj.pointx2.value;
    let x3 = obj.pointx3.value;
    let y1 = obj.pointy1.value;
    let y2 = obj.pointy2.value;
    let y3 = obj.pointy3.value;
    
    obj.res.value = Math.abs(
        ((x2-x1)*(y3-y1)-(x3-x1)*(y2-y1))
        )/2
}