"use client";
import {
  CheckCircleIcon,
} from '@heroicons/react/20/solid';
import { useState, useEffect } from "react";
import { TelegramProvider, useTelegram } from "@/components/provider";
import { Header } from "@/components/header";
import { Plans } from "@/components/plans";
import { Features } from "@/components/slider";


const features = [
  {
    text: 'Cool features Cool features Cool features',
    icon: CheckCircleIcon,
  },
  {
    text: 'Some very cool features Cool features Cool features',
    icon: CheckCircleIcon,
  },
  {
    text: 'The best features Cool features Cool features',
    icon: CheckCircleIcon,
  },
];

const plans = [
  {
    name: '12 months',
    price: 13.99,
    discount: 'Save 50%'
  },
  {
    name: '1 month',
    price: 24.99,
  },
  {
    name: '3 months',
    price: 19.99,
    discount: 'Save 20%'
  },
];


const WebApp = () => {
  const { user, webApp, data } = useTelegram();

  const [scheme, setScheme] = useState('light');

  useEffect(() => {
    let colorScheme = webApp?.colorScheme;
    console.log('colorScheme', colorScheme);
    if (colorScheme) {
      setScheme(colorScheme);
    }
  }, [webApp]);

  return (
    <div
      {...scheme === 'dark' ? {
        className: "overflow-hidden pb-32 sm:py-32 dark"
      } : {
        className: "overflow-hidden pb-32 sm:py-32 light"
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 body absolute inset-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-1">
            <div className="lg:max-w-lg">
              <Header title="Change subscription" image="/duck.gif" />

              <Features features={features} />

              <Plans plans={plans} />

              <p className="mt-2 text-sm text-gray-500 mb-50  text-center">
                <a href="#" className="font-medium hover:underline">Terms of use</a>
                <span> • </span>
                <a href="#" className="font-medium hover:underline">Privacy policy</a>
              </p>

              <div className="fixed left-0 right-0 flex justify-center border-t border-gray-200 bottom-0 fix-btn">
                <button
                  className="mt-4 px-6 py-2 font-bold text-white rounded-lg w-11/12 mb-3"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function WebAppPage() {
  return (
    <TelegramProvider>
      <WebApp />
    </TelegramProvider>
  );
};