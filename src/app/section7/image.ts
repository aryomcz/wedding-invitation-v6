import { Image } from "react-grid-gallery";
import axios from "next@js/lib/axios";


export interface CustomImage extends Image {
  original: string;
}
// export const images: CustomImage[] = [
  
//   {
//     src: "/img6/gallery-1.jpg",
//     original: "/img6/gallery-1.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-2.jpg",
//     original: "/img6/gallery-2.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-3.jpg",
//     original: "/img6/gallery-3.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-4.jpg",
//     original: "/img6/gallery-4.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-5.jpg",
//     original: "/img6/gallery-5.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-6.jpg",
//     original: "/img6/gallery-6.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-7.jpg",
//     original: "/img6/gallery-7.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-8.jpg",
//     original: "/img6/gallery-8.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-9.jpg",
//     original: "/img6/gallery-9.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
//   {
//     src: "/img6/gallery-10.jpg",
//     original: "/img6/gallery-10.jpg",
//     width: 260,
//     height: 260,
//     // tags: [
//     //   { value: "Nature", title: "Nature" },
//     //   { value: "Flora", title: "Flora" },
//     // ],
//     caption: "Gallery Pengantin",
//   },
    
// ];