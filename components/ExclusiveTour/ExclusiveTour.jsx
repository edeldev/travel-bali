import { Container, Title } from "../ui";

export const ExclusiveTour = () => {
  return (
    <Container className="bg-white">
      <Title
        label="Tour esclusivo"
        color="text-black"
        className="text-center mb-10"
      />

      <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto items-center">
        <div className="col-span-12 md:col-span-6">
          <img src="/tour.webp" className="object-cover" />
        </div>

        <div className="col-span-12 md:col-span-6">
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>

          <ul className="list-disc pl-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
