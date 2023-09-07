'use client'
import Router from "next/router";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loadingVisible, setloadingVisible] = useState(true);

  useEffect(() => {
    // 3초 후에 로딩을 종료하고 메인 페이지로 전환
    setTimeout(() => {
      setloadingVisible(false);
    }, 3000);
  }, []);

  loadingVisible && (
    <div className="h-full w-full">
      <h1>Loading...</h1>
      <img src="/loading.svg" alt="hommage_loading" />
    </div>
  )
};

export default useLoading;