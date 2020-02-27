const functions = require("./functions");


// toBeNull
test("Returns Null", () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test("checkValue Should be falsy when argument is undefined", () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

//toEqual
test("User should be Brad Traversy object", () => {
    expect(functions.createUser()).toStrictEqual({ firstName: "Brad", lastName: "Traversy" })
})

// Less than and greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex
test("There is no I in Team", () => {
    expect("team").not.toMatch(/i/);
})

// Arrays
test("Admin should be in usernames", () => {
    usernames = ["john", "karen", "admin"];
    expect(usernames).toContain("admin");
})