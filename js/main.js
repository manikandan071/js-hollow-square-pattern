
let show=document.getElementById("addval")

let start=5;
let last=start;
let show1="";

for(var i=0;i<=start;i++){
    for(var j=0;j<=start;j++){
        if(i==0 || i==last || j == 0 || j==last){
            show1 += "*";
        }
        else{
            show1 += "#";
        }
    }
    show1 += "\n"
}
console.log(show1);
let h=document.createElement("h3");
h.innerText=show1;
show.append(h);