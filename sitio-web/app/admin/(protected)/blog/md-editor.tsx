"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface MdEditorProps {
  initialValue?: string;
}

export function MarkdownEditor({ initialValue = "" }: MdEditorProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div data-color-mode="light" className="w-full">
      <input type="hidden" name="body" value={value} />
      <MDEditor
        value={value}
        onChange={(val) => setValue(val || "")}
        height={500}
        preview="live"
        className="rounded-md border border-ink/20"
      />
    </div>
  );
}
