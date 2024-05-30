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
    <li
      onClick={() => handleNavigate(props._url)}
      className={`relative flex items-center py-3 focus:bg-gradient-to-r focus:from-red-500 focus:via-green-500 focus:to-yellow-500 justify-center text-white
         hover:text-[#53FAFB] hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-yellow-500 cursor-pointer text-sm rounded-[10px] font-ttfirs ${
           props._url === "/home" && props._url === props.pathname
             ? "bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 border-none px-5"
             : props._url !== "/home" && props.pathname.includes(props._url)
             ? "bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 border-none px-5"
             : "text-white px-5"
         }`}
    >
      <div>{props._name}</div>
    </li>
  );
};
export default _renderLinkItem;
