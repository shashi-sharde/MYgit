
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event    
form.addEventListener('submit', addItem);
//aditem
function addItem(e){
    e.preventDefault();
    //create new li element

    var li = document.createElement('li');
    //get input value
    var newItem=document.getElementById('item').value;
    //take description of the item too in the input box where you are creating the item. 
    var description=document.getElementById('description').value;
    //now geeting the vallue afrom item and description and adding them together 
    var newtext=document.createTextNode(newItem);
    var DescriptionNode=document.createTextNode(" " +description);
    //add text node with input value
    li.appendChild(newtext);
    li.appendChild(DescriptionNode);
    
    li.className="list-group-item";
    

    

    // create del button element
    var deleteBtn =document.createElement('button');
    //add clas nume to delete button
    deleteBtn.className="btn btn-danger btn-sm float-right delete";

    //appending text node
    deleteBtn.appendChild(document.createTextNode("X"));
    //append button to li
    li.appendChild(deleteBtn);
    // create edit button
    var editbtn =document.createElement("button");
    //add clas nume to edit button button
    editbtn.className="btn  btn-sm float-right Edit";
    //appending text node
    editbtn.appendChild(document.createTextNode('Edit'));
    //append edit button
    li.appendChild(editbtn);
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


 
// using filter 
var filter= document.getElementById('filter');

//filter event
filter.addEventListener('keyup', filterItems);
//filter function
function filterItems(e){
    //converting to lowercase
    var text =e.target.value.toLowerCase();
    //getting lis
    var items =itemList.getElementsByTagName('li');
    //converting them in to array
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        var descriptionName=item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 ||descriptionName.toLowerCase().indexOf(text) != -1 ) {
            item.style.display="block";
        }else{
            item.style.display="none";
        }

    })

}

