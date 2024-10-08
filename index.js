var employee = {
    name: "Alice",
    streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
    }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: omitted, ...newEmployee } = employee; 
        return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


var updatedEmployee = updateEmployeeWithKeyAndValue(employee, "jobTitle", "Developer");
console.log("Updated Employee (non-destructive):", updatedEmployee);
console.log("Original Employee after non-destructive update:", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "jobTitle", "Manager");
console.log("Employee after destructive update:", employee);

var employeeWithoutStreet = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without street address (non-destructive):", employeeWithoutStreet);
console.log("Original Employee after non-destructive delete:", employee);

destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Employee after destructive delete:", employee);
