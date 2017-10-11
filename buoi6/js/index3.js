function getData(){
    var soa = document.getElementsByClassName('soa')
    //console.log(soa)
    for(var i = 0; i < soa.length; i++){
        console.log(soa[i].innerHTML)
    }
    
}
function getData02(){
    var data = document.getElementsByTagName('p')
    console.log(data);
    for(var i = 0; i < data.length; i++){
        console.log(data[i].innerHTML)
    }
}


function inSo(so=7){
    return so;
}

var b = inSo(9);
console.log(b);

//console.log(typeof(b))