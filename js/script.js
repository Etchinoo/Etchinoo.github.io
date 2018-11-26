var addFormX = document.getElementById("addForm");
var newMemberX = document.getElementById("newMember");
var membersX = document.getElementById("members");
var filterX = document.getElementById("filter");

// Members
var group = ["2ahwa", "shay", "3ennab", "nescafe"];
// Events
addFormX.addEventListener('submit', addMember);
// membersX.addEventListener('click', removeMember);
// filterX.addEventListener('keyup', filterMembers);

for (i = 0; i < group.length; i++) {
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = group[i];

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right deleteX';
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);
    membersX.appendChild(li);
}


function addMember(e) {
    e.preventDefault();
    group.push(newMemberX.value);
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = group[i];
    newMemberX.value = '';
}
