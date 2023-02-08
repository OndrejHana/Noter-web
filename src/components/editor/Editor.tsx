import { customEditorTheme } from "./customEditorTheme";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

function Placeholder() {
  return <div className="editor-placeholder">Write here...</div>;
}

const initialConfig = {
  namespace: "TextEditor",
  theme: {
    ltr: "bg-blue-mid"
  },
  onError: (err: Error) => console.log(err),
}

export default function Editor() {
  return (
    <LexicalComposer initialConfig={initialConfig} >
      <div className="editor-container">
        {/* <ToolbarPlugin/> */}
        <div className="editor-inner">
          <RichTextPlugin 
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder/>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
      </div>
    </LexicalComposer>
  );
}