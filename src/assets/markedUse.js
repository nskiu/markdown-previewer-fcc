import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import Prism from "prismjs";

export const markedUse = () => {
  marked.use(
    markedHighlight({
      langPrefix: "token",
      highlight(code) {
        return Prism.highlight(code, Prism.languages.javascript, "javascript");
      },
    }),
    mangle(),
    gfmHeadingId(""),
    { breaks: true }
  );
};
