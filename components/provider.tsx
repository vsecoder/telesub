import Script from "next/script";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ITelegramUser, IWebApp } from "./types";

export interface ITelegramContext {
    webApp?: IWebApp;
    user?: ITelegramUser;
    unsafeData?: any;
    data?: any;
}

export const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [webApp, setWebApp] = useState<IWebApp | null>(null);

    useEffect(() => {
        const app = (window as any).Telegram?.WebApp;
        if (app) {
            app.ready();
            setWebApp(app);
        }
    }, []);

    const value = useMemo(() => {
        return webApp
            ? {
                webApp,
                unsafeData: webApp.initDataUnsafe,
                user: webApp.initDataUnsafe.user,
                data: webApp.initData,
            }
            : {};
    }, [webApp]);

    return (
        <TelegramContext.Provider value={value}>
            {/* Make sure to include script tag with "beforeInteractive" strategy to pre-load web-app script */}
            <Script
                src="/twa.js"
                strategy="beforeInteractive"
            />      {children}
        </TelegramContext.Provider>
    );
};

export const useTelegram = () => useContext(TelegramContext);