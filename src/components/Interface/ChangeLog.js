// Create the basic document structure
const document = new Document();
const html = document.createElement('html');
const head = document.createElement('head');
const title = document.createElement('title');
const body = document.createElement('body');

// Set content and attributes
title.textContent = "Changelog";
html.lang = "en";

// Create styles element (optional, can be added later)
const styles = document.createElement('style');
const styleText = `
  body {
    font-family: sans-serif;
    margin: 2rem;
  }
  .changelog {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .version {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .change {
    margin-left: 1rem;
  }
  .bug {
    color: red;
    font-weight: italic;
  }
`;
styles.textContent = styleText;

// Build the document structure
head.appendChild(title);
head.appendChild(styles); // Add styles if needed
html.appendChild(head);
html.appendChild(body);

// Create changelog sections and content dynamically
const changelogData = [
  {
    version: "v1.3.1 (19/8/2024)",
    changes: ["Fixed Fire Mask bug", "Added Header"],
    bugs: ["Tool recipe is bugged"],
  },
  // ... Add other entries with version, changes, and bugs
  {
    version: "v1.0.0 (13/8/2024)",
    changes: ["Copied and pasted source code from bss-tools.netlify.app", "Official handover of website updates"],
  },
];

changelogData.forEach((entry) => {
  const section = document.createElement('section');
  section.classList.add('changelog');

  const version = document.createElement('h3');
  version.classList.add('version');
  version.textContent = entry.version;

  const ul = document.createElement('ul');

  entry.changes.forEach((change) => {
    const li = document.createElement('li');
    li.classList.add('change');
    li.textContent = change;
    ul.appendChild(li);
  });

  if (entry.bugs) {
    const bugLi = document.createElement('li');
    bugLi.classList.add('bug');
    bugLi.textContent = entry.bugs.join(", ");
    ul.appendChild(bugLi);
  }

  section.appendChild(version);
  section.appendChild(ul);
  body.appendChild(section);
});

// Now you have a document object with the changelog structure.
// You can use it further to manipulate the DOM in your actual web page.
console.log(document.outerHTML); // This will log the complete HTML string
