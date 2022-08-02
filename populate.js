import cards from './data.js';

const jobTags = (tags) => {
  const element = document.createElement('ul');
  tags.forEach((tagContent) => {
    const tag = document.createElement('li');
    tag.className = 'job-tags';
    tag.textContent = tagContent;
    element.appendChild(tag);
  });

  return element;
};

const techTags = (tags) => {
  const element = document.createElement('ul');
  tags.forEach((tagContent) => {
    const tag = document.createElement('li');
    tag.className = 'tech-tags';
    tag.textContent = tagContent;
    element.appendChild(tag);
  });

  return element;
};

const Popup = (card) => {
  const element = document.createElement('div');
  element.className = 'popup';

  const div = document.createElement('div');
  div.className = 'top-bar';
  element.appendChild(div);

  const h2 = document.createElement('h2');
  h2.innerText = card.name;
  div.appendChild(h2);

  const closeIcon = document.createElement('i');
  closeIcon.className = 'fa-solid fa-close';
  div.appendChild(closeIcon);

  element.append(jobTags(card.careerDetails));

  const img = document.createElement('img');
  img.setAttribute('src', card.img);
  img.setAttribute('width', '100%');
  element.appendChild(img);

  const p = document.createElement('p');
  p.innerText = card.description;
  element.appendChild(p);

  element.append(techTags(card.techs));

  const div2 = document.createElement('div');
  div2.className = 'see-table';
  element.appendChild(div2);

  const button = document.createElement('button');
  button.className = 'see-live';
  button.innerText = 'See Live';
  div2.appendChild(button);

  const button2 = document.createElement('button');
  button2.className = 'see-source';
  button2.innerText = 'See Source';
  div2.appendChild(button2);

  return element;
};

const container = document.createElement('div');
container.className = 'java-script';

const Article = (card) => {
  const article = document.createElement('article');
  article.className = 'article-container';

  const img = document.createElement('img');
  img.setAttribute('src', card.img);
  img.setAttribute('width', '100%');
  article.appendChild(img);

  const h2 = document.createElement('h2');
  h2.innerText = card.name;
  article.appendChild(h2);

  article.append(jobTags(card.careerDetails));

  const p = document.createElement('p');
  p.innerText = card.p;
  article.appendChild(p);

  article.append(techTags(card.techs));

  const button = document.createElement('button');
  button.className = 'see-project';
  button.innerText = 'See Project';
  button.addEventListener('click', () => {
    document.body.appendChild(Popup(card));
    document.body.classList.toggle('hide-body-scrolling');
  });

  article.appendChild(button);

  return article;
};

cards.forEach((card) => {
  container.appendChild(Article(card));
});

const section = document.body.querySelector('#java-script');
section.appendChild(container);
