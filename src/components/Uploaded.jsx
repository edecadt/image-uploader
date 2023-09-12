import Image from "next/image";

export default function Uploaded({ url, updateStatus }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    updateStatus("initial", "");
  };
  return (
    <>
      <Image
        className="mx-[112px] mb-2"
        src="/check.png"
        width={42}
        height={42}
        priority={true}
        alt="Default image"
      />
      <div className="text-gray-700 text-lg font-medium tracking-tight mb-6">
        Uploaded Successfully!
      </div>
      <Image
        className="mx-[112px] mb-2"
        src={url}
        width={338}
        height={224}
        priority={true}
        alt="Default image"
      />
      <div className="flex rounded-lg border border-[#E0E0E0] bg-[#F6F8FB] items-center">
        <div className="overflow-hidden text-ellipsis max-w-[240px] whitespace-nowrap text-gray-700 text-[8px] font-medium tracking-tighter ml-2 mr-3">
          {url}
        </div>
        <button
          className="rounded-lg bg-[#2F80ED] text-white text-[9px] font-medium tracking-tighter py-2 px-4 hover:bg-[#5c95e0]"
          onClick={handleCopy}
        >
          Copy Link
        </button>
      </div>
    </>
  );
}
