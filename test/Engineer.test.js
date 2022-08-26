//const { describe, it, default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

describe("GitHub", () => {
    it('Retrieves the GitHub account value via constructor', () => {
        const testValue = "GithubUsername";
        const emp = new Engineer("Foo", 1, "nirali@test.com", testValue);
        expect(emp.githubUsername).toBe(testValue);    
    })
});

describe("getRole()", () => {
    it('Retrieves the value from getRole()', () => {
        const testValue = "Engineer";
        const emp = new Engineer("Foo", 1, "nirali@test.com", testValue);
        expect(emp.getGithub()).toBe(testValue);
    })
});

describe("GitHub username via getGithub()", () => {
    it('Retrieves the GitHub username via getGithub()', () => {
        const testValue = "GitHubUser";
        const emp = new Engineer("Foo", 1, "nirali@test.com", testValue);
        expect(emp.getGithub()).toBe(testValue);
    })
});