import { $createEmojiNode } from "./EmojiNode";
import { useEffect } from "react";
import { TextNode } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import Test from "./Test"

function emoticonTransform(node) {
  const textContent = node.getTextContent();
  // When you type :), we will replace it with an emoji node
  if (textContent === ":)") {
    node.replace($createEmojiNode("emoji happysmile", "<Test />"));
  }
}

function useEmoticons(editor) {
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      TextNode,
      emoticonTransform
    );
    return () => {
      removeTransform();
    };
  }, [editor]);
}

export default function EmoticonPlugin() {
  const [editor] = useLexicalComposerContext();
  useEmoticons(editor);
  return null;
}
