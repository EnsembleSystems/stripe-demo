import { createOptimizedPicture } from "../../scripts/lib-franklin.js";

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement("ul");
  [...block.children].forEach((row) => {
    const li = document.createElement("li");
    const link = row.querySelector("a");
    const a = document.createElement("a");
    a.href = link.href;
    a.append(row.firstElementChild);
    li.append(a);
    while (row.firstElementChild) {
      a.append(row.firstElementChild);
    }
    [...a.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector("a")) {
        div.className = "cards-link";
      } else if (div.children.length === 1 && div.querySelector("picture"))
        div.className = "cards-card-image";
      else div.className = "cards-card-body";
    });
    ul.append(li);
  });
  ul.querySelectorAll("img").forEach((img) =>
    img
      .closest("picture")
      .replaceWith(
        createOptimizedPicture(img.src, img.alt, false, [{ width: "750" }])
      )
  );
  block.textContent = "";
  block.append(ul);
}
