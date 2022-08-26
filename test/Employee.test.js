//const { describe, it } = require("node:test");
const Employee = require("../lib/Employee");

describe("Employee instance", () => {
    it('Instantiates the employee instance', () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    })
});

describe("Name", () => {
    it('Assigns the name via the constructor arguments', () => {
        const name = "Nirali"
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    })
});

describe("ID", () => {
    it('Assigns the ID via the constructor arguments', () => {
        const testValue = 100;
        const emp = new Employee("Foo", testValue);
        expect(emp.id).toBe(testValue);
    })
});

describe("Email", () => {
    it('Assigns the email id via the constructor arguments', () => {
        const testValue = "nirali@test.com";
        const emp = new Employee("Foo", 1, testValue);
        expect(emp.email).toBe(testValue);
    })
});

describe("Name from getName", () => {
    it('Retrieves name via getName()', () => {
        const testValue = "Nirali";
        const emp = new Employee(testValue);
        expect(emp.getName()).toBe(testValue);
    })
});

describe("ID from getID", () => {
    it('Retrieves the id via getId()', () => {
        const testValue = 100;
        const emp = new Employee("Foo", testValue);
        expect(emp.getID()).toBe(testValue);
    })
});

describe("Email from getEmail()", () => {
    it('Retrieves the email via getEmail()', () => {
        const testValue = "nirali@test.com";
        const emp = new Employee("Foo", 1, testValue);
        expect(emp.getEmail()).toBe(testValue);
    })
});

describe("Role from getRole()", () => {
    it('Retrieves the role from getRole()', () => {
        const testValue = "Employee";
        const emp = new Employee("Nirali", 1, "nirali@test.com");
        expect(emp.getRole()).toBe(testValue);
    })
});