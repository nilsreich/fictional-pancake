import Statusbar from "../components/Statusbar";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Statusbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
