let myFriends = [];

function addFriend(x){
    console.log(x);
    myFriends.push(x);
    printFriends();
}

function removeFriend(){

}

function sortFriends(){
    
}

function printFriends(){
    let html = '';
    for(let i=0; i < myFriends.length; i++){
        html = html + myFriends[i] + '<br>';
    }
    document.getElementById('printti').innerHTML = html;
}