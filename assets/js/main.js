localStorage.setItem('name', 'Bo')
localStorage.removeItem('name')

sessionStorage.setItem('name', 'Bo')
sessionStorage.setItem('name', 'Bob')

document.cookie = 'name=Bo; expires=' + new Date(9999, 0, 1)
    .toUTCString()

document.cookie = 'lastName=Andersen; expires' + new Date(9999, 0, 1)
    .toUTCString()


let myObj = {
    name: "Bo",
    age: 56
};

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObj", myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

console.log(myObj_deserialized);