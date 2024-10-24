export interface Work {
  translateKey: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export const WORKS: Work[] = [
  {
    translateKey: "quiz-lobby",
    href: "https://quiz-lobby.com/",
    image: {
      src: "https://placehold.co/50",
      alt: "",
    },
  },
];
