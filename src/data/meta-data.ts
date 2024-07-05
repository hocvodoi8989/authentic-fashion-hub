export interface ISlider {
  id: string;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
}
export const slides: ISlider[] = [
  {
    id: "1",
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/images/lacoste-1.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: "2",
    title: "Winter Sale Collections",
    description: "Sale! Up to 40% off!",
    img: "/images/lacoste-6.png",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: "3",
    title: "Spring Sale Collections",
    description: "Sale! Up to 30% off!",
    img: "/images/lacoste-7.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
