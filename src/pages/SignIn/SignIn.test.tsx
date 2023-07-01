import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SignIn } from "./SignIn";
import { fireEvent, waitFor } from "@testing-library/react";
import { AuthManager } from "../../services/AuthManager";
import { FirestoreManager } from "../../services/FirestoreManager";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders mind& logo", () => {
  render(<SignIn />);
  const logoElement = screen.getByText(/mind&/i);
  expect(logoElement).toBeInTheDocument();
});

test("renders sign in button", () => {
  render(<SignIn />);
  const buttonElement = screen.getByRole("button", {
    name: /continue with google/i,
  });
  expect(buttonElement).toBeInTheDocument();
});


jest.mock("../../services/AuthManager");
jest.mock("../../services/FirestoreManager");

describe("SignIn component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call SignInWithGoogle and navigate to '/' on successful authentication", async () => {
    const mockSignInWithGoogle = jest
      .fn()
      .mockImplementation(async () => ({
        uid: "user1",
        email: "user@example.com",
      }));
    AuthManager.getInstance = jest
      .fn()
      .mockReturnValue({ SignInWithGoogle: mockSignInWithGoogle });

    const mockAddUser = jest.fn();
    FirestoreManager.getInstance = jest
    .fn()
    .mockReturnValue({ addUser: mockAddUser });

    const { getByText } = render(<SignIn />);

    fireEvent.click(getByText("Continue with Google"));

    await waitFor(() => {
      expect(mockSignInWithGoogle).toHaveBeenCalled();
      expect(mockAddUser).toHaveBeenCalledWith({
        uid: "user1",
        email: "user@example.com",
      });
    });
  });

  test("should log an error if SignInWithGoogle throws an error with code 'auth/popup-closed-by-user'", async () => {
    const mockSignInWithGoogle = jest
      .fn()
      .mockRejectedValue({ code: "auth/popup-closed-by-user" });
    AuthManager.getInstance = jest
      .fn()
      .mockReturnValue({ SignInWithGoogle: mockSignInWithGoogle });
      
    const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();

    const { getByText } = render(<SignIn />);

    fireEvent.click(getByText("Continue with Google"));

    await waitFor(() => {
      expect(mockSignInWithGoogle).toHaveBeenCalled();
      expect(mockConsoleLog).toHaveBeenCalledWith("User dismissed the popup");
    });

    mockConsoleLog.mockRestore();
  });
});

