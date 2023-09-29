export default async function decorate(block) {
  const heroImg = block.querySelector('picture > img');
  heroImg.setAttribute('loading', 'eager');
}
