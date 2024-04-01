"use client";
import {
  CheckCircleIcon,
  XMarkIcon,
  ChevronRightIcon,
  CreditCardIcon,
  BanknotesIcon,
  CurrencyDollarIcon
} from '@heroicons/react/20/solid';
import { useState, useEffect } from "react";
import { TelegramProvider, useTelegram } from "../components/provider";
import { Header } from "../components/header";
import { Plans } from "../components/plans";
import { Features } from "../components/slider";


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

const wallets = [
  {
    name: 'Wallet Pay',
    icon: BanknotesIcon,
    description: 'TON, USDT, BTC',
  },
  {
    name: 'Cards',
    icon: CreditCardIcon,
    description: 'Visa, Mastercard',
  },
  {
    name: 'Yookassa',
    icon: CurrencyDollarIcon,
    description: 'RU cards, SBP',
  },
  {
    name: 'PayPal',
    icon: CreditCardIcon,
    description: '',
  }
];

const WebApp = () => {
  const [opened, setOpened] = useState(false);
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
                  onClick={() => setOpened(true)}
                >
                  Continue
                </button>
              </div>
            </div>

            {opened && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 top-0 left-0 right-0 bottom-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg w-11/12 mx-auto popup">
                  <span className="flex justify-right text-xl font-bold text">
                    Chose payment method
                    <a onClick={() => setOpened(false)} className="ml-auto bg-transparent rounded-lg p-1" href="#">
                      <XMarkIcon className="h-6 w-6 text-gray-500 bg-transparent" aria-hidden="true" />
                    </a>
                  </span>
                  <dl className="mt-5 max-w-xl space-y-4 text-base mb-10 bg-slate-100 rounded-lg divide-y divide-dashed pt-2">
                    {wallets.map((item) => (
                      <div key={item.name} className="relative flex gap-x-3 pt-4 pl-4 pb-2">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                          <item.icon className="h-6 w-6 text-sky-900" aria-hidden="true" />
                        </div>
                        <div>
                          <a href="#" className="font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                        <ChevronRightIcon className="absolute right-6 h-6 w-6 text-slate-500 vertical-center" />
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}
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