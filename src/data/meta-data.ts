export interface ISlider {
  id: string;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
}
export const sliders: ISlider[] = [
  {
    id: "1",
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: "2",
    title: "Winter Sale Collections",
    description: "Sale! Up to 40% off!",
    img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: "3",
    title: "Spring Sale Collections",
    description: "Sale! Up to 30% off!",
    img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
