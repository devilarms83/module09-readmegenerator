// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'no license') {
    return '![badge](https://img.shields.io/badge/license-'+license+'-success)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'no license') {
    return '['+license+'](https://choosealicense.com/licenses/'+license.toLowerCase()+')';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'no license') {
  return `
  ## [License](#table-of-contents)

  License Used:
  
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.what}

  ${data.why}

  ${data.how}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## [Installation](#table-of-contents)
  
  ${data.install}
  
  ## [Usage](#table-of-contents)
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  If you'd like to contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

  ${data.contri}

  ## [Tests](#table-of-contents)
  
  ${data.tests}
  
  ## [Questions](#table-of-contents)
  
  For additional questions, please reach out to:

  [GitHub: ${data.gitUser}](https://github.com/${data.gitUser})

  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
