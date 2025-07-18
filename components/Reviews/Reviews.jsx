import { Container, Title } from "../ui";
import { CarouselTestimonial } from "./components";

export const Reviews = () => {
  return (
    <div id="reviews" className="scroll-mt-30">
      <Container>
        <Title label="Reseñas" color="text-text" className="text-center" />
      </Container>
      <CarouselTestimonial />
    </div>
  );
};
