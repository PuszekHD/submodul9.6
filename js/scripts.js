var list = document.getElementById('list')

var add = document.getElementById('addElem')

add.addEventListener('click', function(element) {
    var element = document.createElement('li');

    var liLength = document.getElementsByTagName('li');
    console.log(liLength.length);

    element.innerHTML = 'item ' + liLength.length;
    list.appendChild(element);
});