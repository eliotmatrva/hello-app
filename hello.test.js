const hello = require("./hello");
describe("My hello", () => {
  test("test successful", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});
