function myFunction(){
    alert("Welcome!");
}

function changeColor(){
    var color = document.getElementById("color").value;

    if(color=="white"){
        document.body.style.backgroundColor="white";
    }else if(color=="yellow"){
        document.body.style.backgroundColor="yellow";
    }else if(color=="pink"){
        document.body.style.backgroundColor="pink";
    }else if(color=="red"){
        document.body.style.backgroundColor="red";
    }else if(color=="green"){
        document.body.style.backgroundColor="green";
    }else if(color=="purple"){
        document.body.style.backgroundColor="lavender";
    }else if(color=="black"){
        document.body.style.backgroundColor="black";
    }else if(color=="orange"){
        document.body.style.backgroundColor="orange";
    }else if(color=="gray"){
        document.body.style.backgroundColor="gray";
    }else{
        document.body.style.backgroundColor="blue";
    }
   }

   function myPictureFunction(){
    document.getElementById("pumpkin").src="candy.webp";
}

var ischicken=true; 

function myPictureFunction(){
if(ischicken){ 
    document.getElementById("chicken").src="leaf.gif";
    ispumpkin = false;
}else{ 
    document.getElementById("chicken").src="chicken.gif";
    ispumpkin=true;
}
}