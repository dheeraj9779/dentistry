import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReactQueryProvider from "@/providers/react-query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { App } from "antd";
import { ConfigProvider, theme } from 'antd';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth.config";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Dentistry+",
  description: "Your AI-powered dental health companion",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html
      lang="en"
      className={`${roboto.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider session={session}>
          <ReactQueryProvider>
            <AntdRegistry>
              <ConfigProvider
              theme={{
                // 1. Activates native dark mode
                algorithm: theme.darkAlgorithm,
                // 2. Optional: Customize your specific dark mode colors
                token: {
                  colorPrimary: '#1677ff',   // Your primary brand color
                  colorBgBase: '#141414',     // Main background color
                  colorTextBase: '#ffffff',   // Main text color
                },
              }}
            >
              <App>
                {children}
              </App>
            </ConfigProvider>
            </AntdRegistry>
          </ReactQueryProvider>
        </AuthProvider>
        </body>
    </html>
  );
}
