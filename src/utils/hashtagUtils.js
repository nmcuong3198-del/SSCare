export const normalizeTag = (value) => {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/#/g, "");
};

export const isDuplicateTag = (hashtags, tag) => {
  return hashtags.includes(tag);
};

export const isMaxTag = (hashtags) => {
  return hashtags.length >= 10;
};