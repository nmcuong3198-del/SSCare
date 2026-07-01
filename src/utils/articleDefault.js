export const createEmptySection = () => ({
  id: crypto.randomUUID(),
  title: "",
  content: "",
});

export const createEmptyArticle = () => ({
  id: "",

  title: "",

  summary: "",

  coverImage: null,

  category: "",

  hashtags: [],

  sections: [createEmptySection()],

  conclusion: "",

  createdBy: "admin",

  status: "draft",

  createdAt: null,

  updatedAt: null,
});