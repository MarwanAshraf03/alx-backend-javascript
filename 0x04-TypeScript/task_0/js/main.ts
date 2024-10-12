interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const st1: Student = {
	firstName: "bob",
	lastName: "bob",
	age: 18,
	location: "bob's house"
};

const st2: Student = {
	firstName: "bob",
	lastName: "bob",
	age: 18,
	location: "bob's house"
};

const stList: Student[] = [st1, st2]

// Render a table using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

stList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);