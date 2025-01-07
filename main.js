window.addEventListener('load', function () {
  document.querySelector('body').className = 'loaded';

  // Add the 'loaded' class to list items
  const listItems = document.querySelectorAll('.projects-list li, .blogs-list li');
  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('loaded');
    }, index * 100); // Stagger the animation for each item
  });
});

const sections = [
  {
    id: 'webdev',
    title: '🧑‍💻 Web Development',
  },
  {
    id: 'csfundamentals',
    title: '📚 CS Fundamentals',
  },
];

const projects = [
  {
    id: 'project1',
    section: 'webdev',
    name: 'Secure Web Application',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&s',
    fullimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&s',
    imgalt: 'Project Image',
    description: 'A web application focused on implementing best security practices to prevent common vulnerabilities.',
    linkname: 'GitHub',
    linkurl: 'https://github.com/essamelbakry/secure-web-app',
  },
  {
    id: 'project2',
    section: 'csfundamentals',
    name: 'Data Structures Library',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&s',
    fullimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&s',
    imgalt: 'Project Image',
    description: 'A library of data structures and algorithms implemented in JavaScript.',
    linkname: 'GitHub',
    linkurl: 'https://github.com/essamelbakry/data-structures-library',
  },
];

// Generate sections
for (let i = 0; i < sections.length; i++) {
  let section = `
    <section id="${sections[i].id}">
      <h3>${sections[i].title}</h3>
      <ul class="projects-list"></ul>
    </section>
  `;
  document.querySelector('#projects').innerHTML += section;
}

// Generate projects
for (let i = 0; i < projects.length; i++) {
  let project = projects[i];
  let li = document.createElement('li');
  li.id = project.id;
  let details = document.createElement('details');
  details.setAttribute('onclick', 'checkDetailsStatus(this)');
  let detailsContent = document.createElement('div');
  detailsContent.setAttribute('class', 'details-content');
  if (project.thumb) {
    detailsContent.innerHTML += `
      <img src="${project.thumb}" alt="${project.imgalt}" />
    `;
  }
  detailsContent.innerHTML += `
    <p>${project.description}</p>
    <p><a href="${project.linkurl}">🔗 ${project.linkname}</a></p>
  `;
  details.innerHTML += `
    <summary>${project.name}</summary>
  `;
  details.append(detailsContent);
  li.append(details);
  let projectSection = document.querySelector(
    `#${project.section} .projects-list`
  );
  projectSection.append(li);
}

function toggleDetails(el) {
  if (
    document.querySelectorAll('details[open]').length ==
    document.querySelectorAll('details').length
  ) {
    let details = document.querySelectorAll('details');
    for (let i = 0; i < details.length; i++) {
      details[i].open = false;
    }
    document.querySelector('#toggle-details').textContent = 'Open all';
  } else {
    let details = document.querySelectorAll('details');
    for (let i = 0; i < details.length; i++) {
      details[i].open = true;
    }
    document.querySelector('#toggle-details').textContent = 'Close all';
  }
}

function checkDetailsStatus(el) {
  setTimeout(() => {
    if (
      document.querySelectorAll('details[open]').length ==
      document.querySelectorAll('details').length
    ) {
      document.querySelector('#toggle-details').textContent = 'Close all';
    } else {
      document.querySelector('#toggle-details').textContent = 'Open all';
    }
  }, 1);
}