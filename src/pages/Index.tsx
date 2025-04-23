
import React, { useState } from "react";
import OnlyOfficeEditor from "@/components/OnlyOfficeEditor";

const DEMO_DOCS = [
  {
    name: "Word文档",
    url: "https://api.onlyoffice.com/example.docx",
    type: "word",
  },
  {
    name: "表格文档",
    url: "https://api.onlyoffice.com/example.xlsx",
    type: "cell",
  },
  {
    name: "演示文档",
    url: "https://api.onlyoffice.com/example.pptx",
    type: "slide",
  },
];

const Index = () => {
  const [selected, setSelected] = useState<null | typeof DEMO_DOCS[0]>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white pt-12">
      <h1 className="text-4xl font-black mb-2 tracking-tight text-gray-900">在线Office文档编辑器</h1>
      <p className="mb-7 text-lg text-gray-600">实现 OnlyOffice 在线编辑，TS+React 示例（中文页面）</p>

      {!selected && (
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="mb-2 font-semibold text-gray-800">请选择文档类型：</div>
          <div className="flex flex-wrap justify-center gap-4">
            {DEMO_DOCS.map((doc) => (
              <button
                key={doc.type}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                onClick={() => setSelected(doc)}
              >
                打开{doc.name}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-yellow-600 max-w-md text-center">
            注意：由于 OnlyOffice 官方演示服务限制，可能无法在页面内嵌入编辑器。
            如果遇到问题，将提供在新窗口中打开的选项。
          </p>
        </div>
      )}

      {selected && (
        <>
          <div className="flex items-center gap-2 my-3">
            <span className="text-base text-gray-800">
              当前文档：{selected.name}
            </span>
            <button
              onClick={() => setSelected(null)}
              className="ml-2 text-sm text-blue-500 underline hover:text-blue-700"
            >
              &larr; 返回选择
            </button>
          </div>
          <OnlyOfficeEditor documentUrl={selected.url} documentType={selected.type as any} />
        </>
      )}

      <footer className="fixed bottom-4 left-0 w-full text-center text-gray-400 text-xs">
        Powered by OnlyOffice | 示例用途 | TS+React 快速集成演示
      </footer>
    </div>
  );
};

export default Index;
