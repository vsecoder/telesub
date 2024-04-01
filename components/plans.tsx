import { useState } from "react";

export interface PlanContext {
    name: string,
    price: number,
    discount?: string
}

export interface PlansContext {
    plans: Array<PlanContext>
}

const Plan = ({ name, price, discount }: PlanContext) => {
    return (
        <div className="p-3">
            <p className="flex items-center justify-between">
                <span className="flex text-sm font-bold text">
                    {name}
                </span>
                {discount && (
                    <span className="flex text-sm font-medium text-blue-500">{discount}</span>
                )}
                <span className="flex text-sm font-medium text">{price}$ / month</span>
            </p>
      </div>
    );
};


export const Plans = ({ plans }: PlansContext) => {
    const [changed, setChanged] = useState(0);

    return (
        <>
            {plans.map((plan, index) => (
                <div
                    {...changed === index ? {
                    className: "mt-3 rounded-lg border-2 cursor-pointer plan changed"
                    } : { className: "mt-3 rounded-lg border-2 cursor-pointer plan border-black" }}
                    onClick={() => setChanged(index)}
                    key={index}
                >
                    <Plan name={plan.name} price={plan.price} discount={plan.discount} />
                </div>
            ))}
        </>
    )
};

