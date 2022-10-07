import { v4 as uuidv4 } from "uuid";
import { Collection } from "../interfaces/collection-interface";
import generateCards from "../utils/generate-cards";

const collections: Collection[] = [
  {
    id: uuidv4(),
    name: "Persija Jakarta",
    cards: generateCards(10, "Persija"),
  },
  {
    id: uuidv4(),
    name: "Persib Bandung",
    cards: generateCards(10, "Persib"),
  },
  {
    id: uuidv4(),
    name: "Persebaya Surabaya",
    cards: generateCards(10, "Persebaya"),
  },
];

export default collections;
