import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import { authOptions } from "../libs/authOptions";
import { getServerSession } from "next-auth/next";
export default async function Layout({children}:{children:React.ReactNode}){
    const data = await getServerSession(authOptions);
    return(
        <main>
        {children}
        </main>
    )
}