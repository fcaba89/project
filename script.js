function saveProfile() {
    const employeeId = document.getElementById('employeeId').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    const data = {
        employeeId,
        firstName,
        lastName,
        age
    };

    fetch('https://hfs2p8upk2.execute-api.us-east-2.amazonaws.com/project/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => alert(result.message))
        .catch(error => console.error('Error:', error));
}

function showEmployees() {
    fetch('https://hfs2p8upk2.execute-api.us-east-2.amazonaws.com/project/')
        .then(response => response.json())
        .then(profiles => {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';

            profiles.forEach(profile => {
                const employeeInfo = document.createElement('div');
                employeeInfo.innerHTML = `<strong>Employee ID:</strong> ${profile.employeeId}, <strong>Name:</strong> ${profile.firstName} ${profile.lastName}, <strong>Age:</strong> ${profile.age}`;
                employeeList.appendChild(employeeInfo);
            });
        })
        .catch(error => console.error('Error:', error));
}
