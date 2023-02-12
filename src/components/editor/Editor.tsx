import { customEditorTheme } from "./customEditorTheme";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { QuoteNode, HeadingNode } from "@lexical/rich-text";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import StatusBarPlugin from "./plugins/StatuBarPlugin";

function Placeholder() {
  return <div className="editor-placeholder"></div>;
}

const initialConfig = {
  namespace: "TextEditor",
  theme: customEditorTheme,
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ],
  onError: (err: Error) => console.log(err),
}

export default function Editor() {
  return (
    <LexicalComposer initialConfig={initialConfig} >
      <div className="editor-container max-w-7xl h-96 dark:bg-gray-dark rounded-lg ">
        <ToolbarPlugin />
        <StatusBarPlugin />
        <div className="editor-inner">
          <RichTextPlugin 
            contentEditable={<ContentEditable className="editor-input relative p-2 h-[324px] outline-none" />}
            placeholder={<Placeholder/>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}