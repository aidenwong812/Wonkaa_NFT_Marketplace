import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import SiderList from "../../Sider/sider";

import { useWallet } from "@/providers/WalletProvider";
import formatAddress from "@/lib/formatAddress";

const NFTHeader = () => {
  const { connStatus, solanaConnect, walletID } = useWallet();

  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [siderWidth, setSiderWidth] = useState<number>(0);

  const handleClick = () => {
    if (!connStatus) {
      solanaConnect();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSiderWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex items-center">
      {loading && (
        <div className="w-full aspect-square  rounded-[10px]"></div>
      )}
      <Image
        src="/home/logo.jpeg"
        width={50}
        height={0}
        alt=""
        className="rounded-full"
        priority={true}
        onLoad={() => setLoading(false)}
      />
      {siderWidth > 500 && (
        <Image
          src="/home/title.png"
          width={500}
          height={0}
          className="ml-2 mt-3"
          alt="title"
        />
      )}

      <SiderList pathname={pathname} siderWidth={siderWidth} />
      <div className="items-center">
        <ul className="text-white text-md">
          <div className="w-full inline-flex items-center justify-center">
            <button
              className={`${
                siderWidth > 250 ? "w-[200px]" : "px-[7px]"
              } h-[40px] rounded-full border border-[#535353] inline-flex items-center justify-center font-ttfirs text-[12px] hover:opacity-70 transition-all duration-100`}
              onClick={handleClick}
            >
              <Image
                src="/icon/phantom.svg"
                width={0}
                height={0}
                alt={"logo"}
                priority={true}
                className="w-[25px] h-auto"
              />
              {siderWidth > 250 ? (
                <>
                  <div className="ml-[7px] mr-[7px]">
                    {connStatus ? formatAddress(walletID) : "Connect Wallet"}
                  </div>
                  {connStatus && (
                    <Image
                      src="/icon/copy.svg"
                      width={0}
                      height={0}
                      alt={"logo"}
                      priority={true}
                      className="w-[15px] h-auto"
                    />
                  )}
                </>
              ) : null}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default NFTHeader;
