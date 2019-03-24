import { chipColors } from "./chipColors";

interface FlavorTextEntries {
  flavor_text: string;
  language: { name: string; url: string };
  version: any;
}

export const getEnglishText = (
  flavor_text_entries: FlavorTextEntries[]
): string | null => {
  let text = flavor_text_entries.find(
    (item: FlavorTextEntries) => item.language.name === "en"
  );
  return text ? text.flavor_text : null;
};

export const upperFirstLetter = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const getChipColor = (name: string) => {
  return chipColors[name];
};
