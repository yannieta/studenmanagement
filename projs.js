const table = document.getElementById("tbody");

const listInfo = [
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Nguyen Van B", age: 28 },
    { id: 3, name: "Nguyen Van C", age: 26 },
    { id: 4, name: "Nguyen Van D", age: 25 },
    { id: 5, name: "Nguyen Van E", age: 24 },
    { id: 6, name: "Nguyen Van F", age: 23 },
    { id: 7, name: "Nguyen Van G", age: 22 },
    { id: 8, name: "Nguyen Van H", age: 21 },
];

function renderDataToTable() {
    let html = "";

    for (let i = 0; i < listInfo.length; i++) {
        let item = listInfo[i];

        html += "<tr>";
        html += "<td>" + item.id + "</td>";
        html += "<td>" + item.name + "</td>";
        html += "<td>" + item.age + "</td>";
        html +=
            `<td> <button class='btn btn-danger' onclick ='updateinfo(${i})'>Edit</button>` +
            `<button class='btn btn-warning' onclick='deleteData(${i})'>Delete</button>` +
            "</td>";
        html += "</tr>";
    }

    table.innerHTML = html;
}

renderDataToTable();

function addInfo() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let newData = {
        id: 0,
        name,
        age,
    };

    newData.name = name;
    newData.age = age;
    newData.id = listInfo.length + 1;
    if (name != "" && age != "") {
        listInfo.push(newData);
        renderDataToTable();
    } else {
        alert('please enter name and age');
    }
}

function deleteData(index) {
    listInfo.splice(index, 1);
    renderDataToTable();
}

/**
 *
 * Edit clicked => Add button cannot click
 * Update text convert to "save"
 * After update done , add button click like normal
 *
 * When name or input value is blank , cannot add
 *
 * ** Advanced **
 * Update id after delete
 *
 * FYI : css or js
 *          css => counter increment
 */
function updateinfo(index) {
    document.querySelector('.add').classList.add('isUpdatingMode');
    let updatebtn = document.querySelector('.update');
    updatebtn.innerHTML = "Save";
    updatebtn.addEventListener('click', function() {
        let update = listInfo.map(function() {
            let updateName = document.getElementById("name").value;
            let updateAge = document.getElementById("age").value;
            if (updateName != "" && updateAge != "") {
                listInfo[index].name = updateName;
                listInfo[index].age = updateAge;
                renderDataToTable();
            } else {
                alert("please enter name and age");
            }
        })
        document.querySelector('.add').classList.remove('isUpdatingMode');
        updatebtn.innerHTML = "Update";
    })
}