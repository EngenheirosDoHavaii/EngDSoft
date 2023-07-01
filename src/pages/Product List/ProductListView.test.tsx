import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getFilteredItems } from "./ProductListView";
import Product from "../../interfaces/Product";
import { DocumentReference } from "firebase/firestore";
import firebase from "firebase/app";
import { Firebase } from "../../services/firebase";

test("test filter", () => {
  const mockData: Product[] = [
    {
      name: "PS2",
      email: "fer@gmail.com",
      description: "ps2 quebrado",
      id: "1",
    },
    {
      name: "Camisa do flamengo",
      email: "Uolace@gmail.com",
      description: "Camisa de time",
      id: "2",
    },
  ];

  const result = getFilteredItems("camisa", mockData);
  expect(result).toStrictEqual([mockData[1]]);

  const empty = getFilteredItems("Guarda roupas", mockData);
  expect(empty).toStrictEqual([]);
});