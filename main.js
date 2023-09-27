
//add button js
var addbtn = document.getElementById("add");
addbtn.addEventListener('click',additem);

function additem(){
    current_value = document.getElementById("input").value;
    let new_element = document.createElement("li");
    let span1 = document.createElement("span");
    new_element.setAttribute('class','list');
    span1.innerText = current_value;
    new_element.appendChild(span1);
   

    let ul = document.getElementById("todo");
   let div = document.createElement("div");

   let btn1 = document.createElement("button");
   btn1.setAttribute('id','update');
   btn1.setAttribute('onclick','upitem1(this)');
   let img1 = document.createElement("img");
   img1.src="images/update.png";
   btn1.appendChild(img1);

   let btn2 = document.createElement("button");
   btn2.setAttribute('id','delete');
   btn2.setAttribute('onclick','delitem(this)')
   let img2 = document.createElement('img');
   img2.src = "images/delete.png";
   btn2.appendChild(img2);
   div.appendChild(btn1);
   div.appendChild(btn2);
  
   new_element.appendChild(div);
   ul.appendChild(new_element);
}

//delete button js
function delitem(value){
  var e = value.parentElement.parentElement;
  e.remove();
}

//update button
function upitem1(value){
let pre = value.parentElement.parentElement.children[0];
let new1 = document.createElement("input");
new1.setAttribute("placeholder","Enter the Task");
value.parentElement.parentElement.replaceChild(new1,pre);
new1.style.width="350px";
}
