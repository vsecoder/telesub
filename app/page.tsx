"use client";
import Image from "next/image";
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from "react";

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
    name: 'Visa',
    icon: CheckCircleIcon,
  },
  {
    name: 'Mastercard',
    icon: CheckCircleIcon,
  },
  {
    name: 'Paypal',
    icon: CheckCircleIcon,
  },
];

export default function Home() {
  const [changed, setChanged] = useState(0);
  const [opened, setOpened] = useState(false);

  return (
    <div className="overflow-hidden pb-32 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-1">
            <div className="lg:max-w-lg">
              <div className="flex justify-center">
                <Image src="/duck.gif" alt="Duck" width={250} height={250} unoptimized />
              </div>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Unlock PRO features</p>
              <dl className="mt-5 max-w-xl space-y-4 text-base leading-3 lg:max-w-none mb-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon className="absolute left-1 -top-1.5 h-6 w-6 text-blue-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                  </div>
                ))}
              </dl>

              {plans.map((plan, index) => (
                <div
                  className="mt-3 rounded-lg border-2 bg-gray-50 cursor-pointer"
                  {...changed === index ? { style: { borderColor: '#2563EB' } } : {}}
                  onClick={() => setChanged(index)}
                  key={index}
                >
                  <div key={plan.name} className="p-4">
                    <p className="flex items-center justify-between">
                      <span className="flex text-sm font-bold">
                        {plan.name}
                      </span>
                      {plan.discount && (
                        <span className="flex text-sm font-medium text-blue-500">{plan.discount}</span>
                      )}
                      <span className="flex text-sm font-medium">{plan.price}$ / month</span>
                    </p>
                  </div>
                </div>
              ))}

              <p className="mt-2 text-sm text-gray-500 text-align-center mb-50 bg-white">
                <span>By selecting a plan, you agree to our </span>
                <a href="#" className="font-medium text-blue-500 hover:underline">terms</a>
                <span> and </span>
                <a href="#" className="font-medium text-blue-500 hover:underline">privacy policy</a>
              </p>

              <div className="fixed left-0 right-0 flex justify-center border-t border-gray-200 bg-white bottom-0">
                <button
                  className="mt-4 px-6 py-5 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 w-11/12 mb-6"
                  onClick={() => setOpened(true)}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* pop up */}
            {opened && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg w-11/12 mx-auto bg-white">
                  <span className="flex justify-right text-xl font-bold">
                    Chose payment method
                    <button onClick={() => setOpened(false)} className="ml-auto">
                      <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                    </button>
                  </span>
                  <p>Enjoy your new features</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}
