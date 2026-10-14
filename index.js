function addMission() {
    const input = document.getElementById("missiontext");
    const name = input.value.trim();

    if (!name) {
        alert("Enter a mission!");
        return;
    }
    const mission = document.createElement("p");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.onchange = count;

    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteMission(this);
    }
    mission.appendChild(checkbox);
    mission.appendChild(document.createTextNode(" " + name + " "));
    mission.appendChild(deleteButton);

    document.getElementById("missions").appendChild(mission);
    input.value = "";
    count();
}
function addMisson() {
    addMission();
}
function add() {
    addMission();
}
function deleteMission(button) {
    if (button && button.parentElement) {
        button.parentElement.remove();
    }
    count();
}
function count() {
    const boxes = document.querySelectorAll("#missions input[type='checkbox']");
    const total = boxes.length;
    const completed = document.querySelectorAll("#missions input:checked").length;

    document.getElementById("total").textContent = total;
    document.getElementById("completed").textContent = completed;
    document.getElementById("pending").textContent = total - completed;
}
document.addEventListener("DOMContentLoaded", count);