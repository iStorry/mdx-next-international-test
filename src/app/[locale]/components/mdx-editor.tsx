"use client";

import { FC } from "react";
import { headingsPlugin, MDXEditor, MDXEditorMethods } from "@mdxeditor/editor";

interface EditorProps {
    markdown: string;
    editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
    return (
        <MDXEditor
            ref={editorRef}
            markdown={markdown}
            plugins={[headingsPlugin()]}
        />
    );
};

export default Editor;