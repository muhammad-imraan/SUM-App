import { Inter } from "next/font/google";
import "../globals.css";
import OTPInput from "../ui/otp-input";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased auth_cover`}>
                <div className=" min-h-screen min-w-full flex">
                    <div className="basis-[35%]">
                    {children}
                    </div>
                    <div className="border auth_cover border-gray-300 basis-[65%] rounded-l-[50px] flex items-center justify-center">
                        <OTPInput />
                    </div>
                </div>
            </body>
        </html>
    );
}
