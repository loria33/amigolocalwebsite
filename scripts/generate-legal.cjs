// Keep app-linked, JavaScript-free documents in sync with the website policies.
const fs = require("node:fs");
const path = require("node:path");
const legal = require("../src/legal.json");
const escape = (text) =>
  text.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        char
      ])
  );
for (const key of ["privacy", "terms"]) {
  const page = legal[key];
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0a0a0c">
  <meta name="description" content="${escape(
    page.title
  )} for the AmigoLocal app on iOS and Android.">
  <title>${escape(page.title)} · AmigoLocal</title>
  <link rel="icon" href="/amigo-favicon.ico">
  <link rel="stylesheet" href="/legal.css">
</head>
<body>
  <main>
    <a class="back" href="/">← AmigoLocal</a>
    <p class="eyebrow">AMIGOLOCAL FOR IOS &amp; ANDROID</p>
    <h1>${escape(page.title)}</h1>
    <p class="date">Last updated: ${escape(legal.updated)}</p>
    <p class="intro">${escape(page.intro)}</p>
${page.sections
  .map(
    (section) =>
      `    <section><h2>${escape(section.title)}</h2>\n${section.paragraphs
        .map((p) => `      <p>${escape(p)}</p>`)
        .join("\n")}\n    </section>`
  )
  .join("\n")}
    <section class="resources"><h2>Useful links</h2>
${page.links
  .map(
    (link) => `      <a href="${escape(link.href)}">${escape(link.label)}</a>`
  )
  .join("\n")}
    </section>
    <footer>AmigoLocal · RedCalf</footer>
  </main>
</body>
</html>
`;
  const target = path.join(__dirname, "..", "public", page.file);
  if (process.argv.includes("--check")) {
    if (!fs.existsSync(target) || fs.readFileSync(target, "utf8") !== html) {
      throw new Error(
        `${page.file} is out of date. Run npm run generate:legal.`
      );
    }
  } else fs.writeFileSync(target, html);
}
