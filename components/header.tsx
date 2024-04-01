import Image from "next/image";

export interface HeaderContext {
    title: string,
    image: string
}

export const Header = ({ title, image }: HeaderContext) => {
    return (
        <>
            {/* duck */}
            <div className="flex justify-center">
                <Image src={image} alt="Duck" width={220} height={220} unoptimized priority />
            </div>

            {/* text */}
            <p className="text-2xl font-bold tracking-tight sm:text-2xl text">{title}</p>
            {/* 
            <dl className="mt-3 max-w-xl space-y-3 text-base leading-3 lg:max-w-none mb-5">
                {features?.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold">
                            <feature.icon className="absolute left-1 -top-1.5 h-6 w-6 text-blue-500" aria-hidden="true" />
                            {feature.name}
                        </dt>{' '}
                    </div>
                ))}
            </dl>
            */}
        </>
    );
};

