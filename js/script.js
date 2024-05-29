var siteName = document.getElementById('siteName')
var siteUrl = document.getElementById('siteUrl')
var addBtn = document.getElementById('addBtn')
var Index = document.getElementById('Index')
var webName = document.getElementById('webName')
var Visit = document.getElementById('Visit')
var Delete = document.getElementById('Delete')
var tablecontent= document.getElementById('tablecontent')
var bookmarkList =[]



function addUrl(){
   
    var info = {
    sName : siteName.value,
    sUrl : siteUrl.value,  
    Index : Index.value

 
    }
    bookmarkList.push(info)
    display()
    clear()
    console.log(bookmarkList);
}

 //display url
var Index
function display(Index){
    var box=''
    for (var i=0 ; i<bookmarkList.length; i++){
    box +=`<tr>
    <td>
    <p>${i+1}</p>
    </td>
    <td>
        <p>${bookmarkList[i].sName}</p>
    </td> 
    <td>
        <button  onclick="visitSite(${i})"class="btn btn-visit"> <i class="fa-solid fa-eye bg-"></i> Visit</button>
        
    </td>
    <td>
        <button  onclick="delet(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i>Delete</button>
    </td>
</tr>`    
   }
   tablecontent.innerHTML = box;
} 
//clear
function clear(){
    siteName.value=''
    siteUrl.value='' 
}    
// delet
function delet(Index){
    bookmarkList.splice(Index,1)
    display()
} 

//validation 
var selectedInput = document.querySelectorAll('.selectedInput')
//console.log(selectedInput)

for(var i=0;i<selectedInput.length;i++){
    selectedInput[i].addEventListener('input', function(e){
        var inputId =e.target.id;
        var inputValue = e.target.value; 
       
        validationInput(inputId,inputValue)
    })
}

function validationInput(id,value){
var regex={
    siteName :/^[a-z]{5,10}$/,
    siteUrl :/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/ 
}
console.log(value)
console.log(regex[id]) 
var elm = document.getElementById(id);
console.log(elm.nextElementSibling) 
var nextElm= elm.nextElementSibling
if (regex[id].test(value) == true ){ 
    console.log('match')
    elm.classList.add('is-valid')
    elm.classList.remove('is-invalid')
    return true ;
}else {
   console.log('nomatch')
   elm.classList.add('is-invalid')
    elm.classList.remove('is-valid') 
 return false;
   
}

}
// visit 
function visitSite() {
    var url = siteUrl.value;
    window.open(url, '_siteUrl')
}
  
