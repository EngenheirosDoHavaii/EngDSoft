import "@testing-library/jest-dom";
import AddItemModal from "./AddItemModal";
import { render, screen, fireEvent } from "@testing-library/react";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onRequestClose: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

jest.mock("react-modal", () => ({
  __esModule: true,
  default: ({ isOpen, onRequestClose, children }: Props) => {
    if (!isOpen) return null;
    return (
      <div>
        <div data-testid="modal-overlay" onClick={onRequestClose} />
        <div data-testid="modal-content">{children}</div>
      </div>
    );
  },
}));

describe("<AddItemModal />", () => {
  beforeEach(() => {
    render(<AddItemModal />);
  });

  test("Correct behavior of the title input", () => {
    const addItemButton = screen.getByRole("button", { name: /Add Item/i });

    fireEvent.click(addItemButton); // Abre o modal
    const modalTitleInput: HTMLInputElement = screen.getByLabelText(/title/i);
    fireEvent.change(modalTitleInput, { target: { value: "lapis" } });

    expect(modalTitleInput.value.length).toBeGreaterThanOrEqual(5);
  });

  test("Incorrect behavior of the title input", () => {
    const addItemButton = screen.getByRole("button", { name: /Add Item/i });

    fireEvent.click(addItemButton); // Abre o modal
    const modalTitleInput: HTMLInputElement = screen.getByLabelText(/title/i);
    fireEvent.change(modalTitleInput, { target: { value: "lapi" } });

    expect(modalTitleInput.value.length).not.toBeGreaterThanOrEqual(5);
  });

  test("Correct behavior of the description input", () => {
    const addItemButton = screen.getByRole("button", { name: /Add Item/i });

    fireEvent.click(addItemButton); // Abre o modal
    const modalTitleInput: HTMLInputElement =
      screen.getByLabelText(/description/i);
    fireEvent.change(modalTitleInput, {
      target: { value: "um lapis bonito e elegante" },
    });

    expect(modalTitleInput.value.length).toBeGreaterThanOrEqual(20);
  });

  test("Incorrect behavior of the description input", () => {
    const addItemButton = screen.getByRole("button", { name: /Add Item/i });

    fireEvent.click(addItemButton); // Abre o modal
    const modalTitleInput: HTMLInputElement =
      screen.getByLabelText(/description/i);
    fireEvent.change(modalTitleInput, {
      target: { value: "um lapis bonito" },
    });

    expect(modalTitleInput.value.length).not.toBeGreaterThanOrEqual(20);
  });
});
