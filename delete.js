
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// form submit event    
form.addEventListener('submit', addItem);
//aditem
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;

    //create new li element

    var li = document.createElement('li');
    li.className="list-group-item";
    
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    var deleteBtn =document.createElement('button');
    //add clas nume to delete button
    deleteBtn.className="btn btn-danger btn-sm float-right delete";

    //appending text node
    deleteBtn.appendChild(document.createTextNode("X"));
    //append button to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);
    
}
 //delete event
 itemList.addEventListener('click',removeItem);

 //function to removeitem

 function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li =e.target.parentElement;
            itemList.removeChild(li);

        }
    }
 }


 

