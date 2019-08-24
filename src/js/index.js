let btn =document.getElementById('btn');
btn.onclick= function(){
let title = document.getElementById('title').value;
let blog = document.getElementById('blog').value;
console.log(title ,blog);
let  blogdata=localStorage.getItem('blogdata');
console.log(blogdata);
let blogdataobj;
 if(blogdata===null){
    blogdataobj=[];
} else {
    blogdataobj = JSON.parse(blogdata);
    console.log(blogdataobj);
}
 
tempblogstate={
    title:title,
    blog:blog
}
//let blogdataobj=[];
blogdataobj.push(tempblogstate)
console.log(blogdataobj)

localStorage.setItem('blogdata',JSON.stringify(blogdataobj));


}