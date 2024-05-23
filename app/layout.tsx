import type { Metadata } from "next";
import { Inter} from "next/font/google";
import ReduxProvider from "./redux/Provider";
import { Paper } from "@mui/material";
import "./globals.css";
import MuiProvider from "./components/MuiProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Todos Task Manager | Sign up",
  description: "This website is called todos task manager and is created by haniel ryan. Here you can create your todos and manage your time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <MuiProvider>
          <Paper square elevation={0} sx={{minHeight:"90vh",margin:0,padding:0}}>
          {children}
          </Paper>
        </MuiProvider>
        </ReduxProvider>
        </body>
    </html>
  );
}
