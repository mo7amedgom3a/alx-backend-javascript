// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const firstStudent: Student = {
	firstName: "mohamed",
	lastName: "gomaa",
	age: 21,
	location: "egypt"
}

const secondStudent: Student = {
	firstName: "adel",
	lastName: "awad",
	age: 21,
	location: "egypt"
}
const studentsList: Student[] = [firstStudent, secondStudent];
const body = document.querySelector('body');
const table = document.createElement('table');
body.appendChild(table);

// Create thead element
const thead = document.createElement('thead');
table.appendChild(thead);
const headerRow = document.createElement('tr');
thead.appendChild(headerRow);


// Create and append header cells
const headers = ['Name', 'Age', 'City'];
headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.textContent = student.firstName;
    const age = document.createElement('td');
    age.textContent = student.age.toString();
    const city = document.createElement('td');
    city.textContent = student.location;
    row.appendChild(name);
    row.appendChild(age);
    row.appendChild(city);
    table.appendChild(row);
});