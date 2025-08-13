# Challenge1-AmigoSecreto
<p align="left"><img src="https://img.shields.io/badge/Status-Completed-green"></p><!--En progreso-->
En este repositorio, subiré mi solución al challenge junto a todos los cambio que he realizado.<br>

## Funciones dentro del proyecto
* [Almacenamiento de nombres](###Almacenamiento-de-Nombres) ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)<!--Completo-->
* [Agregar amigos](###Agregar-amigos) ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)
* [Actualización de lista](###Actualización-de-lista) ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)
* [Sorteo de amigos](###Sorteo-de-amigos) ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)

### Almacenamiento-de-Nombres ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)<!--Completo-->
Para esta parte inicilizamos un Array ``let friends=[]``, donde almacenaremos los nombres de amigos que iremos agregando. Tambien se extraeran de aquí los nombres para la función de sorteo de amigo secreto.
<br>

### Agregar-amigos ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)
Creamos la función ``addFriend()``, al llamarla a través del boton "Añadir" en nuestro index se agrega el texto escrito en el input a nuestro array ``friends``. Cuando el campo de input está vacio se muestra una alerta que solicita poner un nombre.
<br>

### Actualización-de-lista ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)
Creamos la función ``updateFriend()``, una función que es llamada al mismo tiempo que ``addFriend()`` y muestra la lista de todos los amigos en el array ``friends``. En una posible actualización, se podría agregar un numero al lado de un nombre que ya se haya repetido.
<br>

### Sorteo-de-amigos ![Static Badge](https://img.shields.io/badge/Status-Completed-Green)
Creamos la función ``sortFriend()``, una función que es llamada al dar click al botón "Sortear amigo", esta función muestra un nombre al azar del array ``friends`` en el index con el texto "Tu amigo secreto es [Friend]".
