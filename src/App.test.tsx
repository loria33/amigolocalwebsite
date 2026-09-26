import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import legal from "./legal.json";

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  window.scrollTo = jest.fn();
});

test("shows the current app capabilities, both platforms, and all four new screenshots", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "A little smarter."
  );
  for (const name of [
    "Everyday chat",
    "Voice & dictation",
    "Email assistant",
    "Personal notes",
    "Document questions",
    "Three AI models",
  ]) {
    expect(screen.getByText(name)).toBeInTheDocument();
  }
  expect(screen.getAllByRole("link", { name: /App Store/ })[0]).toHaveAttribute(
    "href",
    "https://apple.co/4lfDUpI"
  );
  expect(screen.getAllByRole("link", { name: /Android/ })[0]).toHaveAttribute(
    "href",
    expect.stringMatching(/^(mailto:|https:\/\/)/)
  );
  const figures = document.querySelectorAll("figure");
  expect(figures).toHaveLength(4);
  expect(
    new Set(
      Array.from(figures).map((figure) =>
        within(figure).getByRole("img").getAttribute("src")
      )
    ).size
  ).toBe(4);
});

test("navigates to separate privacy and terms pages with the app’s existing standalone URLs", () => {
  render(<App />);
  const footer = screen.getByRole("navigation", { name: "Footer navigation" });
  fireEvent.click(within(footer).getByRole("link", { name: "Privacy Policy" }));
  expect(
    screen.getByRole("heading", { level: 1, name: "Privacy Policy" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Open standalone page" })
  ).toHaveAttribute("href", "/privacy-standalone.html");
  fireEvent.click(within(footer).getByRole("link", { name: "Terms of Use" }));
  expect(
    screen.getByRole("heading", { level: 1, name: "Terms of Use" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Open standalone page" })
  ).toHaveAttribute("href", "/eula-standalone.html");
});

test.each(["/privacy", "/terms", "/support"])("loads %s directly", (path) => {
  window.history.replaceState({}, "", path);
  render(<App />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
});

test("policies disclose speech-service limits and the distinction between trial and subscription", () => {
  expect(legal.privacy.sections.flatMap((s) => s.paragraphs).join(" ")).toMatch(
    /audio may be processed by your device’s speech service/
  );
  expect(legal.terms.sections.flatMap((s) => s.paragraphs).join(" ")).toMatch(
    /does not create or automatically convert into a paid subscription/
  );
});
