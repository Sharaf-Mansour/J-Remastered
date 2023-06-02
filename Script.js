// Array of chapter objects
const chapters = [
{ title: "Characters Bio", link: "characters bio.pdf" },
  { title: "Chapter 1", link: "chapter 1.pdf" },
  // Add more chapters as needed
];

// Loop through the array and create a link element for each chapter
const container = document.querySelector(".container");
chapters.forEach((chapter) => {
  const link = document.createElement("a");
  link.href = chapter.link;
  link.textContent = chapter.title;
  container.appendChild(link);
});
