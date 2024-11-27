import "antd/dist/reset.css";
import "./globals.css";
// import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <AntdRegistry> */}
        <Navbar />
        {children}
        <Footer />
        {/* </AntdRegistry> */}
      </body>
    </html>
  );
}
