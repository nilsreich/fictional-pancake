import Statusbar from "../components/Statusbar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";

export default function Layout({ children }) {
  return (
    <>
      <Statusbar />
      <div className="flex">
        <Sidebar />
        <Explorer />
        {children}
      </div>
    </>
  );
}
