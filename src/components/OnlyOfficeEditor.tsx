
import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

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
  const [iframeError, setIframeError] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // 以官方api demo为例
  // 官方演示服务的文档类型和编辑器类型映射
  // 这里传给iframe一个demo链接，以及配置语言为中文
  // 仅供展示和测试，正式部署请对接自己服务器

  const baseDemoUrl = "https://onpremise-demo.onlyoffice.com";
  const editorUrl = `${baseDemoUrl}/?lang=zh&mode=edit&doc=${encodeURIComponent(
    documentUrl
  )}&type=${getEditorType(documentType)}`;

  useEffect(() => {
    // 检测到iframe加载错误后自动打开提示框
    if (iframeError) {
      setIsSheetOpen(true);
    }
  }, [iframeError]);

  const handleOpenDirectly = () => {
    window.open(editorUrl, "_blank", "noopener,noreferrer");
  };

  const handleIframeError = () => {
    console.log("Iframe加载失败，可能是由于X-Frame-Options限制");
    setIframeError(true);
  };

  return (
    <>
      <div className="w-full h-[80vh] mt-6 border rounded-xl overflow-hidden shadow relative">
        {iframeError ? (
          <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 w-full max-w-lg">
              <div className="flex items-start">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    由于安全策略限制，无法在当前页面内嵌入 OnlyOffice 编辑器。
                    <br />
                    <span className="font-medium">
                      这是由于 OnlyOffice 官方 Demo 服务器设置了 X-Frame-Options: sameorigin。
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleOpenDirectly}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              在新窗口打开编辑器
            </button>
            
            <div className="mt-6 text-gray-600 text-sm">
              <h3 className="font-medium mb-2">解决方案:</h3>
              <ul className="list-disc list-inside text-left">
                <li>在新窗口打开编辑器（点击上方按钮）</li>
                <li>部署自己的 OnlyOffice 服务器并配置正确的 CORS 策略</li>
                <li>使用官方提供的 API 方式集成，而非 iframe 嵌入</li>
              </ul>
            </div>
          </div>
        ) : (
          <iframe
            title="OnlyOffice 编辑器"
            src={editorUrl}
            className="w-full h-full border-none"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            onError={handleIframeError}
          />
        )}
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>无法加载 OnlyOffice 编辑器</SheetTitle>
            <SheetDescription>
              由于 OnlyOffice 官方服务器的安全设置（X-Frame-Options: sameorigin），
              无法在 iframe 中嵌入编辑器。
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6 space-y-4">
            <h3 className="font-medium">可选解决方案:</h3>
            
            <div className="flex flex-col space-y-2">
              <button
                onClick={handleOpenDirectly}
                className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                在新窗口中打开
              </button>
              
              <p className="text-sm text-gray-500 mt-2">
                或者部署您自己的 OnlyOffice 服务器并配置适当的 CORS 设置以允许嵌入。
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default OnlyOfficeEditor;
