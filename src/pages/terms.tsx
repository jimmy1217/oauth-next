import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">服務條款</h1>
        <p className="mb-4">
          本應用（以下稱「本服務」）由[您的公司名稱或開發者名稱]（以下稱「我們」）提供。使用本服務即表示您同意遵守以下條款。本服務條款適用於您對本應用的使用及任何相關功能。
        </p>
        <h2 className="text-2xl font-semibold mb-4">一、服務描述</h2>
        <p className="mb-4">
          本應用為展示 OAuth
          認證流程的測試及演示用途，僅供開發和學習之用，並不構成實際商業產品或服務的提供。
        </p>
        <h2 className="text-2xl font-semibold mb-4">二、使用條件</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            您僅可使用本服務進行測試和開發，並不得用於任何非法或不當的用途。
          </li>
          <li>
            本服務不對您的使用結果做出任何保證，包括但不限於可用性、準確性或適用性。
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">三、資料收集</h2>
        <p className="mb-4">
          由於本服務為測試用途，我們不會主動收集任何個人資料。若需使用 OAuth
          認證，您應自行了解並遵守第三方平台的隱私政策及使用條款。
        </p>
        <h2 className="text-2xl font-semibold mb-4">四、責任限制</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            本服務僅為測試用途，無論是否明示或暗示，我們不對本服務的運行或結果負任何責任。
          </li>
          <li>
            對於使用本服務所引發的任何直接或間接損害，我們不承擔任何法律責任。
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">五、終止服務</h2>
        <p className="mb-4">
          我們保留隨時修改、暫停或終止本服務的權利，恕不另行通知。
        </p>
        <h2 className="text-2xl font-semibold mb-4">六、修改條款</h2>
        <p className="mb-4">
          我們有權在必要時修改本服務條款。更新後的條款將公告於本服務中，並自公告日起生效。您繼續使用本服務即視為接受該等修改。
        </p>
        <h2 className="text-2xl font-semibold mb-4">七、聯繫方式</h2>
        <p className="mb-4">如有任何問題，請通過以下聯絡方式與我們聯繫：</p>
        <p className="mb-4">電子郵件：jimmy20180305@gamil.com</p>
      </div>
    </div>
  );
};

export default Terms;
