import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import SiderList from "../../Sider/sider";

const NFTHeader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [siderWidth, setSiderWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setSiderWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  return (
    <div className="w-full flex items-end">
      {loading && (
        <div className="w-full aspect-square bg-[#121212] rounded-[10px]"></div>
      )}
      <Image
        src="/chicken/logo.png"
        width={50}
        height={0}
        alt=""
        className="rounded-full"
        priority={true}
        onLoad={() => setLoading(false)}
      />
      { siderWidth > 500 &&
      <Image
        src="/home/title.png"
        width={350}
        height={0}
        className="ml-2 mt-3"
        alt="title"
      />}

      <SiderList pathname={pathname} siderWidth={siderWidth} />
      <div className="w-[354px] inline-flex items-center mt-[40px]">
        <div className="relative">
          <Image
            src="/icon/search_grey.svg"
            width={0}
            height={0}
            alt="logo"
            className="w-[14px] h-auto absolute left-[25px] top-[13px]"
          />
          <input
            className="py-[12px] mobile:w-[300px] w-[170px] outline-none bg-[#181818] px-[50px] text-[14px] rounded-[12px] placeholder:text-[#4C4C4C] placeholder:text-[12px]"
            placeholder="Search NFT"
          />
        </div>
      </div>
    </div>
  );
};
export default NFTHeader;
