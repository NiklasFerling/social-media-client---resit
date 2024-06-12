import { login } from "./login";
import { save } from "../../storage/index";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({ accessToken: "mockToken", username: "testUser" }),
  })
);

jest.mock("../../storage/index", () => ({
  save: jest.fn(),
}));

describe("login function", () => {
  it("stores a token when provided with valid credentials", async () => {
    const email = "test@example.com";
    const password = "password";

    await login(email, password);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/social/auth/login"),
      {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    expect(save).toHaveBeenCalledWith("token", "mockToken");
    expect(save).toHaveBeenCalledWith("profile", {
      accessToken: "mockToken",
      username: "testUser",
    });
  });
});
