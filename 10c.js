const fs = require('fs');

const content = "HTML, CSS, JavaScript, TypeScript, MongoDB, Express.js, React.Js, Node.js";

fs.writeFile('src.txt', content, (err) => {
	if (err) throw err;
	console.log('src.txt created and content added successfully!');
});