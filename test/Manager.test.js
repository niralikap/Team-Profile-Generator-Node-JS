const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
//const { describe, it } = require("node:test");
//const { hasUncaughtExceptionCaptureCallback } = require("process");

describe("Set Office Number", () => {
    it('Set the office number value via the constructor', () => {
        const testValue = 100;
        const emp = new Manager("Foo", 1, "nirali@test.com", testValue);
        expect(emp.officeNumber).toBe(testValue);
    })
});

describe("Manager from getRole()", () => {
    it('Retrieves the role Manager via getRole()', () => {
        const testValue = "Manager";
        const emp = new Manager("Foo", 1, "nirali@test.com", 100);
        expect(emp.getRole()).toBe(testValue);
    })
});

describe("Get Office number", () => {
    it('Retrieves the office number via getOffice()', () => {
        const testValue = 100;
        const emp = new Manager("Foo", 1, "nirali@test.com", testValue);
        expect(emp.getOfficeNumber()).toBe(testValue);
    })
});