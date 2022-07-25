marked.use({
  breaks: true,
});

const renderer = new marked.Renderer();

function APP() {
  const [text, setText] = React.useState(
    "# this is an h1 heading\n## This is a h2 heading\nthis is code, `<div></div>`\n```\nthis is(){\na codeblock\n}\n```\nthis is  **bold** text\n[this is a link](https://www.freecodecamp.org)\n> this is a blockquote\n- this\n- is \n- a\n- list\n![img](https://www.computerhope.com/jargon/h/img.png)"
  );

  return (
    <div className="text-center pt-3">
      <h1>Markdown Previewer</h1>
      <h2 className="pt-3">Editor</h2>
      <textarea
        rows="10"
        className="textarea"
        id="editor"
        name="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></textarea>
      <h1 className="pt-3">Preview</h1>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked.parse(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

ReactDOM.render(<APP />, document.getElementById("root"));
