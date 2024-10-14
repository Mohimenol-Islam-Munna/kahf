import { FC, useEffect, useState } from "react";
import { ProfileViewer } from "../../Shared";
import { useNavigate } from "react-router-dom";

export const Preview: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipBoardHandler = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
    } catch (error) {
      setIsCopied(false);
    }
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <div>
      <div className="h-[250px] bg-[#6040E8] rounded-b-3xl text-white p-3">
        <div className="bg-white p-3 rounded-md flex justify-between items-center">
          <button
            type="button"
            className={`border border-[#6040E8] text-[#6040E8] py-1 px-4 rounded-md `}
            onClick={() => {
              navigate(-1);
            }}
          >
            Back To Editor
          </button>
          <button
            type="button"
            className={`bg-[#6040E8] py-2 px-4 rounded-md disabled:opacity-50`}
            onClick={copyToClipBoardHandler}
            disabled={isCopied}
          >
            {isCopied ? "Link Copied" : "Share Link"}
          </button>
        </div>
      </div>

      <div className="flex justify-center border border-transparent">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden relative -top-[100px]">
          <ProfileViewer isFinalPreview={true} />
        </div>
      </div>
    </div>
  );
};
