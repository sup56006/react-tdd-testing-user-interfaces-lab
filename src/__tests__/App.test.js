import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text describing the image", () => {
  render(<App />);
  const image = screen.getByAltText(/portrait of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 2, name: /about me/i });
  expect(heading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a/i); // Adjust to match your paragraph
  expect(paragraph).toBeInTheDocument();
});

test("displays a link to the GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to the LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
