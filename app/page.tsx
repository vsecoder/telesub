"use client";
import Image from "next/image";
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


const features = [
  {
    name: 'Cool features',
    icon: CheckCircleIcon,
  },
  {
    name: 'Some very cool features',
    icon: CheckCircleIcon,
  },
  {
    name: 'The best features',
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
  const [changed, setChanged] = useState(0);
  const [opened, setOpened] = useState(false);
  const { user, webApp, data } = useTelegram();

  return (
    <div className="overflow-hidden pb-32 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-1">
            <div className="lg:max-w-lg">
              {/* duck */}
              <div className="flex justify-center">
                <Image src="/duck.gif" alt="Duck" width={220} height={220} unoptimized />
              </div>

              {/* text */}
              <p className="text-2xl font-bold tracking-tight sm:text-2xl text">{user?.first_name}, change subscription</p>
              <dl className="mt-3 max-w-xl space-y-3 text-base leading-3 lg:max-w-none mb-5">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon className="absolute left-1 -top-1.5 h-6 w-6 text-blue-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                  </div>
                ))}
              </dl>

              {/* plans */}
              {plans.map((plan, index) => (
                <div
                  {...changed === index ? {
                    className: "mt-3 rounded-lg border-2 cursor-pointer plan changed"
                  } : { className: "mt-3 rounded-lg border-2 cursor-pointer plan border-black" }}
                  onClick={() => setChanged(index)}
                  key={index}
                >
                  <div key={plan.name} className="p-3">
                    <p className="flex items-center justify-between">
                      <span className="flex text-sm font-bold text">
                        {plan.name}
                      </span>
                      {plan.discount && (
                        <span className="flex text-sm font-medium text-blue-500">{plan.discount}</span>
                      )}
                      <span className="flex text-sm font-medium text">{plan.price}$ / month</span>
                    </p>
                  </div>
                </div>
              ))}

              {/* footer */}
              <p className="mt-2 text-sm text-gray-500 text-align-center mb-50">
                <span>By selecting a plan, you agree to our </span>
                <a href="#" className="font-medium text-blue-500 hover:underline">terms</a>
                <span> and </span>
                <a href="#" className="font-medium text-blue-500 hover:underline">privacy policy</a>
              </p>

              {/* open popup */}
              <div className="fixed left-0 right-0 flex justify-center border-t border-gray-200 bottom-0 fix-btn">
                <button
                  className="mt-4 px-6 py-2 font-bold text-white rounded-lg w-11/12 mb-3"
                  onClick={() => setOpened(true)}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* popup */}
            {opened && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 top-0 left-0 right-0 bottom-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg w-11/12 mx-auto popup">
                  <span className="flex justify-right text-xl font-bold text">
                    Chose payment method
                    <button onClick={() => setOpened(false)} className="ml-auto bg-transparent rounded-lg p-1">
                      <XMarkIcon className="h-6 w-6 text-gray-500 bg-transparent" aria-hidden="true" />
                    </button>
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