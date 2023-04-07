var collection = document.querySelectorAll('.ntf, .pm_ntf');
var unreadCount = 0;

function setStyle(){
    for(var i = 0; i < collection.length; i++){
        if(collection[i].id == "unseen"){
            collection[i].style.backgroundColor = "var(--lightGrayBlue1)";
            collection[i].getElementsByClassName('status')[0].style.opacity = "1";
            unreadCount ++;
        }
        else{
            collection[i].style.backgroundColor = "white";
            var x = collection[i].getElementsByClassName('status');
            collection[i].getElementsByClassName('status')[0].style.opacity = "0";
        }
    }
    document.getElementById('unreadCount').innerHTML = unreadCount;
}

function markAsRead(){
    for(var i = 0; i < collection.length; i++){
        if(collection[i].id == "unseen"){
            collection[i].id = 'seen';
        }
    }
    unreadCount = 0;
    setStyle();
}