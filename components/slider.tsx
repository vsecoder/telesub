

interface FeatureContext {
    text: string,
    icon: any
}

export interface FeaturesContext {
    features: Array<FeatureContext>
}

export const Features = ({ features }: FeaturesContext) => {
    return (
        <div className="w-full flex gap-0 snap-x overflow-x-auto py-4">
            {features.map((feature, index) => (
                <div key={index} className="snap-start scroll-ml-6 shrink-0 relative first:pl-6 last:pr-[calc(100%-30.5rem)] w-52">
                    <p className="flex items-center justify-between">
                        <span className="flex text-sm text">
                            <feature.icon className="h-12 w-12 text-blue-500" aria-hidden="true" />
                        </span>
                        <span className="flex text-sm text">
                            {feature.text}
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
};

