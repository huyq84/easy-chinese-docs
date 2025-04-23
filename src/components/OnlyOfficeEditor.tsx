
import React from "react";

interface OnlyOfficeEditorProps {
  documentUrl: string;
  documentType: "word" | "cell" | "slide";
  key?: string;
}

// Map document type to OnlyOffice type
const getEditorType = (type: OnlyOfficeEditorProps["documentType"]) => {
  switch (type) {
    case "word":
      return "docx";
    case "cell":
      return "xlsx";
    case "slide":
      return "pptx";
    default:
      return "docx";
  }
};

/**
 * 通过官方Demo服务嵌入OnlyOffice在线编辑器
 * 目前以iframe方式嵌入官方的示例服务，实际生产部署建议对接独立服务
 */
const OnlyOfficeEditor: React.FC<OnlyOfficeEditorProps> = ({
  documentUrl,
  documentType,
}) => {
  // 以官方api demo为例
  // 官方演示服务的文档类型和编辑器类型映射
  // 这里传给iframe一个demo链接，以及配置语言为中文
  // 仅供展示和测试，正式部署请对接自己服务器

  const baseDemoUrl = "https://onpremise-demo.onlyoffice.com";
  const editorUrl = `${baseDemoUrl}/?lang=zh&mode=edit&doc=${encodeURIComponent(
    documentUrl,
  )}&type=${getEditorType(documentType)}`;

  return (
    <div className="w-full h-[80vh] mt-6 border rounded-xl overflow-hidden shadow">
      <iframe
        title="OnlyOffice 编辑器"
        src={editorUrl}
        className="w-full h-full border-none"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  );
};

export default OnlyOfficeEditor;
