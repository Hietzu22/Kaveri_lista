let myFriends = [];

var input = document.getElementById("nimet");
input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add").click();
    }
});

function addFriend(x){
    console.log(x);
    myFriends.push(x);
    printFriends();
}

function removeFriend(){
    myFriends.pop();
    printFriends();
}

function sortFriends(){
    myFriends.sort();
    printFriends();
}

function printFriends(){
    let html = '';
    for(let i=0; i < myFriends.length; i++){
        html = html + myFriends[i] + '<br>';
    }
    document.getElementById('printti').innerHTML = html;
}