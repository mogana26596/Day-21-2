var div=document.createElement("div");
div.style.textAlign="center";
div.style.margin= "30px";


var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","co");
input.setAttribute("placeholder","random or all");
input.style.height="35px";
input.style.weight="400px";
input.style.marginBottom="10px";
input.style.marginRight="15px";


var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.style.height="35px";
button.style.padding="5px";
button.style.fontSize="15px";
button.style.marginBottom="20px";
button.addEventListener("click",foo);

let a1=document.createElement("div");
a1.setAttribute("id","a1");

div.append(input,button,a1);
document.body.append(div);

async function foo() {
try {
let res=document.getElementById("co").value;
let url=`https://emojihub.herokuapp.com/api/${res}`;
let result=await fetch(url);
let result1= await result.json();

a1.innerHTML=`<div class="cardboard bg-warning mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Name: ${result1.name}</p>
<p class="card-subtitle mb-3 text-white">Category: ${result1.category}</p>
<p class="card-subtitle mb-3 text-white">Group: ${result1.group}</p>
<p class="card-subtitle mb-3 text-white">HtmlCode: ${result1.htmlCode}</p>
<p class="card-subtitle mb-3 text-white">Unicode: ${result1.unicode}</p>

</div>
</div>`;

} catch (error) {
    console.log(error);
}
}
foo();