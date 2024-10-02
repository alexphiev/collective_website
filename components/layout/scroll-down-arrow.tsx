"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { saEvent } from '@/utils/analytics-utils'

const ScrollDownArrow = () => {
  const router = useRouter();

  return (
    <div
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
      onClick={() => {
        saEvent(`click_hero_scroll_down_arrow}`);
        router.push("/#impact");
      }}
    >
      <ChevronDown className="h-8 w-8" />
    </div>
  );
};

export default ScrollDownArrow;