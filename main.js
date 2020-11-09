const woman = document.querySelector(".woman");
const man = document.querySelector(".man");

function slider() {
  if (woman.style.display === "none") {
    woman.style.display = 'flex';
    man.style.display = 'none';
  } else {
    woman.style.display = 'none';
    man.style.display = 'flex';
  }
}