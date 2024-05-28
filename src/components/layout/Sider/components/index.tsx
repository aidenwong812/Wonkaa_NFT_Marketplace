"use client";
import React, { useEffect, useState } from "react";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { useRouter } from "next/navigation";
import Image from "next/image";
const _renderLinkItem = (props: any) => {
  const router = useRouter();
  const handleNavigate = (_url: string) => {
    router.push(_url);
  };
  // const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="w-full items-center justify-center flex">
      {/* {loading=== true && (
        <div
          className={`relative mb-[10px] py-3 ${
            props.siderWidth < 250 ? "justify-center w-[40px]" : "px-5 w-full"
          } rounded-[10px]  animate-pulse`}
        ></div>
      )} */}
      {/* <div className={`${loading ? "hidden" : "block"}`}> */}
      <li
        onClick={() => handleNavigate(props._url)}
        className={`relative flex items-center py-3 focus:bg-[#50FFFF0D] ${
          props.siderWidth < 1600 ? "justify-center" : "px-5 w-full"
        } hover:text-[#53FAFB] hover:border-[#F7F9FC] hover:bg-[#50FFFF0D] cursor-pointer text-sm rounded-[10px] font-ttfirs ${
          props._url === "/home" && props._url === props.pathname
            ? "bg-[#50FFFF0D] text-[#53FAFB] border-none px-5"
            : props._url !== "/home" && props.pathname.includes(props._url)
            ? "bg-[#50FFFF0D] text-[#53FAFB] border-none px-5"
            : "text-white px-5"
        }`}
      >
        <div>{props._name}</div>
      </li>
    </div>
    // </div>
  );
};
export default _renderLinkItem;
