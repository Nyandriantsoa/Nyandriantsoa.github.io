document.addEventListener("DOMContentLoaded", function(event){
    startGrowing(50, 10, 250);
})

var grow;

function startGrowing(size, growth, rate) {
    
    var myCircle = document.getElementById('circle');
    
    myCircle.style.width = size;
    myCircle.style.height = size;
    myCircle.style.display = 'inline';

    grow = setInterval(function(){
        console.log(size, growth)
        size = parseInt(size) + parseInt(growth);

        myCircle.style.width = ((size) + "px");
        myCircle.style.height = ((size) + "px");
        
    
        //just to make it look good
        if(size >= 600) {
            clearInterval(grow);
        }
    }, rate);
}

function removeCircle(){
    var mycircle = document.getElementById('circle');

    clearInterval(grow);
    mycircle.style.display = 'none';
}

function start(event){
    event.preventDefault();

    clearInterval(grow);
    document.getElementById('circle').style.display = 'none';

    var width = event.target.width.value;
    var growth = event.target.growth.value;
    var rate = event.target.rate.value;
    var num = event.target.number.value;

    var newCircle;
    for(let i = 1; i < num ; i++){
        newCircle = document.createElement('div');
        newCircle.id = 'circle';
        newCircle.className = 'circle';
        newCircle.style.position = 'relative';
        newCircle.style.width = width;
        newCircle.style.height = width;
        newCircle.addEventListener('click', function(){
            removeCircle();
        });

        //'<div id="circle" class="circle" width="' + width + '" height="' + width + '" onclick="removeCircle()"></div>';
        document.getElementById('container').appendChild(newCircle);
    }

    if(num > 0){

        startGrowing(width, growth, rate);
    }
    

}