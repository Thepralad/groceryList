class ItemModule{
    constructor(item, price){
        this.item = item;
        this.price = price;
    }
}

function InputForm(){
    document.getElementById('submitBtn').addEventListener('click', function(e){

        const itemName = document.getElementById('itemName');
        const itemPrice = document.getElementById('itemPrice');

        const newItem = new ItemModule(itemName.value, itemPrice.value)
        ItemManager.pushItems(newItem);

        console.clear();
        ItemManager.getTasks();

        itemName.value = '';
        itemPrice.value = '';
        e.preventDefault();

    })
}

// This module is used for adding an item to the `mainList[]` array
const ItemManager = (function(){
    var mainList = []

    function pushItems(item){
        mainList.push(item);
    }

    function getTasks(){
        console.table(mainList);
    }

    return {
        pushItems,
        getTasks,
    }
})();



InputForm();
