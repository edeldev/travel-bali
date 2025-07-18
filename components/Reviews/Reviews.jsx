import { Container, Title } from "../ui";
import { CarouselTestimonial } from "./components";

export const Reviews = () => {
  return (
    <>
      <Container>
        <Title label="Reseñas" color="text-text" className="text-center" />
      </Container>
      <CarouselTestimonial />
    </>
  );
};
