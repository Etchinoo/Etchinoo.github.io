var addFormX = document.getElementById("addForm");
var newMemberX = document.getElementById("newMember");
var membersX = document.getElementById("members");
var filterX = document.getElementById("filter");

// Members
var group = ["2ahwa", "shay", "3ennab", "nescafe"];
// Events
addFormX.addEventListener('submit', addMember);
filterX.addEventListener('keyup', filterMembers);

function readMembers() {
    membersX.innerHTML = '';

    for (let i = 0; i < group.length; i++) {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = group[i];

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-md float-right deleteX';
        deleteBtn.textContent = 'X';

        let editBtn = document.createElement('button');
        editBtn.className = 'btn btn-primary btn-md float-right mr-2 editX';
        editBtn.textContent = 'Edit';

        
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        membersX.appendChild(li);
        
        deleteBtn.onclick = function () {
            membersX.removeChild(li);
            group.splice(group[i], 1);
            console.log(group);
        }
        // edit
        editBtn.addEventListener('click', editMember);

        function editMember() {
            editBtn.removeEventListener('click', editMember);
        
            var textX = membersX.children[i].firstChild.textContent;
            membersX.children[i].firstChild.textContent = '';
        
            let editInput = document.createElement('input');
            editInput.className = 'col-md-7 form-control';
            editInput.value = textX;
            li.appendChild(editInput);
            editInput.focus();
        
            // save
            editInput.addEventListener("keydown", saveMember);
        
            function saveMember(e) {
                if (e.keyCode === 13) {
                    group.splice(i, 1, editInput.value);
                    readMembers();
                }
            }
        }
    }
}


function addMember(e) {
    e.preventDefault();

    group.unshift(newMemberX.value);
    newMemberX.value = '';
    console.log(group);

    readMembers();
}

// Filter Members
function filterMembers(e) {
    var resultsX = e.target.value.toLowerCase();
    var membersListX = membersX.getElementsByTagName('li');

    for(let i = 0; i < membersListX.length; ++i ) {
        membersListX[i]   
    }

    for (let member of membersListX) {
        let memberName = member.firstChild.textContent;
        if (memberName.toLowerCase().indexOf(resultsX) != -1) {
            member.style.display = 'block';
        } else {
            member.style.display = 'none';
        }
    }
}

// Start App
readMembers();