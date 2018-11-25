const printNames = arr => {
  arr.forEach(element => {
    console.log("Name:" + element.name + ", Cohort: " + element.cohort);
  });
};

let students = [
  { name: "Remy", cohort: "Jan" },
  { name: "Genevieve", cohort: "March" },
  { name: "Chuck", cohort: "Jan" },
  { name: "Osmund", cohort: "June" },
  { name: "Nikki", cohort: "June" },
  { name: "Boris", cohort: "June" }
];

printNames(students);

const employeesManagers = arr => {
  let n = 1;
  console.log("EMPLOYEES");
  arr.employees.forEach(element => {
    console.log(
      n +
        " - " +
        element.last_name.toUpperCase() +
        ", " +
        element.first_name.toUpperCase()
    );
    n++;
  });
  n = 1;
  console.log("MANAGERS");
  arr.managers.forEach(element => {
    console.log(
      n +
        " - " +
        element.last_name.toUpperCase() +
        ", " +
        element.first_name.toUpperCase()
    );
    n++;
  });
};

let users = {
  employees: [
    { first_name: "Miguel", last_name: "Jones" },
    { first_name: "Ernie", last_name: "Bertson" },
    { first_name: "Nora", last_name: "Lu" },
    { first_name: "Sally", last_name: "Barkyoumb" }
  ],
  managers: [
    { first_name: "Lillian", last_name: "Chambers" },
    { first_name: "Gordon", last_name: "Poe" }
  ]
};

employeesManagers(users);
