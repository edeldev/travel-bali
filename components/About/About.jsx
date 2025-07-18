import { Title } from "../ui";

export const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 scroll-mt-30"
    >
      <div>
        <img src="/about-section.webp" className="object-cover rounded-2xl" />
      </div>
      <div className="space-y-5">
        <Title label="Sobre nosotros" color="text-text" />
        <div>
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
};
