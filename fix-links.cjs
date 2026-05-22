const fs = require('fs');
const file = 'src/pages/Services.tsx';
let code = fs.readFileSync(file, 'utf8');

// Replace <a href="/contact..." with <Link to="/contact..."
code = code.replace(/<a href="\/contact([^"]*)"/g, '<Link to="/contact$1"');

// Replace matching </a> with </Link>
// We'll just do a simpler replacement: 
// since all these links are in the same sections, let's just write a regex that catches them
code = code.replace(/<Link to="\/contact([^>]+)>([\s\S]*?)<\/a>/g, '<Link to="/contact$1>$2</Link>');

// Don't forget the Take the Scorecard link which is <a href="#">...</a>, it should remain an <a> tag.
// And there's an Explore Programme Link which is already a Link tag.

fs.writeFileSync(file, code);
