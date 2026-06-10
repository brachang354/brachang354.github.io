# Journal

## Sources and tools used

Bootstrap documentation: [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

Web3Forms: [https://docs.web3forms.com/](https://docs.web3forms.com/)

Official Joke API: [https://official-joke-api.appspot.com/random_joke](https://official-joke-api.appspot.com/random_joke)

### Commit #1 "Implemented Navbar”

For this commit, I started off very simply with setting up the HTML file with stylesheet references to Bootstrap. I then followed the Navbar template that Bootstrap had outlined in their documentation and set up all of the links to the appropriate required sections.

### Commit #2 “Made Changes to Navbar, and started the about page with placeholder elements”

In this commit, I changed the background color of the Navbar to be a dark purple, and started the about section with some placeholder text and a placeholder image.

### Commit #3 “Started on the works section”

For this commit, I started on the works section by using the list group component in Bootstrap. I used the numbered variant that had some example custom content in it which included a subheading, text content, and a badge. I left the placeholder text there for the time being.

### Commit #4 “Fleshed out template of website. Placeholders for work, projects, and contact are implemented”

In this commit, I started the contact section by using an example in the Bootstrap documentation. I then created the project section. I decided to implement an accordion from the Bootstrap documentation. The accordion is quite neat as it is essentially a list group but with collapsable tabs. I could have a tab with just the name of the project, and if the user wants to know more they can click to open the tab. Every section at this point has placeholder stuff in it and the entire website is essentially templated now for me to then put actual content later.

### Commit #5 “Completed work section, progress on projects section”

The work section now has the content of my work history, including what I did, where I worked, and the timeframe that I worked. I then started on the projects section with my first project.

### Commit #6 “Completed projects section and form submission”

The projects section and contact sections are fully implemented now. The contact section is using Web3Forms to send any content in the form directly to my personal email. Web3Forms provides a very nice and simple way to set up contact forms without the need of any backend code. The form action just needs to link to their submit page, https://api.web3forms.com/submit with a POST method, and a hidden input type with the value of the form access key. The key is a public key so it can be safely used in client side code.

### Commit #7 “Finished About section, and implemented random joke section”

The about section is now fully finished with proper text about myself, and an actual picture of myself. I also created a random joke section which uses Javascript to fetch from the Official Joke API and print out some random jokes on my website.
