//const { describe, it } = require("node:test");
//const { hasUncaughtExceptionCaptureCallback } = require("process");
const Intern = require("../lib/Intern");

describe("Set School", () => {
    it('Retrieves the school name via the constructor', () => {
    const testValue = "UC Berkeley";
    const emp = new Intern("Foo", 1, "nirali@test.com", "UC Berkeley");
    expect(emp.school).toBe(testValue);
})
});

describe("getRole Intern", () => {
    it('Retrieves Intern from getRole()', () => {
        const testValue = "Intern";
        const emp = new Intern("Foo", 1, "nirali@test.com", "UC Berkeley");
        expect(emp.getRole()).toBe(testValue);
    })
});

describe("School from getSchool()", () => {
    it('Retrieves the school name from getSchool()', () => {
        const testValue = "UC Berkeley";
        const emp = new Intern("Foo", 1, "nirali@test.com", testValue);
        expect(emp.getSchool()).toBe(testValue);
    })
});