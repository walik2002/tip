let d = document;
let imgs = d.getElementsByClassName("img");
let arrows = d.getElementsByClassName("arrow")

function img(n) {

    document.images[6].src = "p" + n + ".jpg"
    console.log(imgs)
}


function onMoveImg(a){
    console.log("mouse over")
    arrows[a].style.visibility = "visible"
	if(imgs[a].style.width = "100px"){
        console.log(imgs[a].style.width)
        let scale = 1.0
		function fun(){
            if(scale < 1.2)
			{
                scale +=0.05
                imgs[a].style.scale = scale
                setTimeout(fun,20)
            }
		}
		fun();
	}
}
function onOutImg(a){
    console.log("out")
    arrows[a].style.visibility = "hidden"
    let scale = imgs[a].style.scale
    console.log(scale)
		function fun2(){
			if(scale > 1.0)
            {
                scale-=0.05
                imgs[a].style.scale = scale
                setTimeout(fun2,20)
            }
		}
		fun2();
}
