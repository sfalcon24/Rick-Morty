export type Character = {
  id: string;
  name: string;
  status: string;
  image: string;
};

export type CharacterList = {
  results: Character[];
};
