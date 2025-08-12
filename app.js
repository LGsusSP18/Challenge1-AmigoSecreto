// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends=[];

function addFriend(){
    let NFriend=document.getElementById("friend").value;
    if(NFriend==""){
        alert("Por favor ingrese un nombre")
    }
    else{
        friends.push(NFriend);
        console.log(friends);
        updateFriend();
        document.getElementById("friend").value="";
    }
    return;
}

function updateFriend(){
    let list=document.getElementById("listaAmigos");
    list.innerHTML="";
    list.innerHTML=listFriends();
    console.log(listFriends());
    return;
}

function listFriends() {
    var text="";
    for (let i =0;i<friends.length;i++){
        text=text+"<li>"+friends[i]+"</li>";
    }
    return text;
}

function sortFriend(){
    return;
}