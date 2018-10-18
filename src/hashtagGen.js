const capitalizeFirstLetter = string => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export const hashtagGen = phrase => {
  if (typeof phrase !== "string") {
    return null;
  }
  const trimmedPhrase = phrase.trim();
  if (trimmedPhrase === "") {
    return null;
  }
  const words = trimmedPhrase.split(" ");
  const capitalizedWords = words.map(capitalizeFirstLetter);
  const capitalizedPhrase = capitalizedWords.join("");
  const hashtag = `#${capitalizedPhrase}`;
  return hashtag;
};
