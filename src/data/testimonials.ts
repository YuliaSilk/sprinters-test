import Avatar1 from "../assets/images/testemotion/photoTest2.webp";
import Avatar2 from "../assets/images/testemotion/photoTestimonials.webp";

export interface Testimonial {
 id: string;
 name: string;
 avatar: string;
 route: string;
 date: string;
 text: string;
 rating: number;
}

export const testimonials: Testimonial[] = [
 {
  id: "1",
  name: "Ben Yardley",
  avatar: Avatar1,
  route: "Київ - Кишинів",
  date: "1 May 2023",
  text:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  rating: 5,
 },
 {
  id: "2",
  name: "Craig Martin",
  avatar: Avatar2,
  route: "Львів - Париж",
  date: "1 May 2023",
  text:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  rating: 5,
 },
];
