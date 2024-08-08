import showdown from "showdown";

async function getContent() {
  const path = window.location.pathname;
  const pathArray = path.split("/");
  document.title = pathArray[pathArray.length - 1];
  const response = await fetch(
    `https://raw.githubusercontent.com/Wollivan/showdown-test/main${window.location.pathname}/README.md`
  );
  const raw = await response.text();

  const converter = new showdown.Converter();
  const html = converter.makeHtml(raw);
  document.body.innerHTML = html;
}

getContent();
