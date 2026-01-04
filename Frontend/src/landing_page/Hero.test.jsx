import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/Home/Hero";

describe("Hero component", () => {
  test("renders hero image", () => {
    render(<Hero/>);//load Hero page
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/Images/homeHero.png");
  });

  test("renders Signup button", () => {
    render(<Hero/>);//load Hero page
    const signupButton = screen.getByRole("button", {name:"/Signup now/"});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});

