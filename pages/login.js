import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import * as Tabs from "@radix-ui/react-tabs";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      console.log(supabase.auth.user());
    }
  };

  const handleSignup = async (email, password) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2">
          <div className="mt-20 ml-20 text-6xl">Sasu.ai</div>
          <div className="mt-1 mb-20 ml-20 text-3xl text-gray-600">
            Erstellen und verwalten live Sessions
          </div>
        </div>
        <div className="h-screen border-l border-b border-r border-gray-300 bg-gray-100 w-1/2">
          <div className="flex w-full">
            <Tabs.Root defaultValue="tab1" orientation="vertical">
              <Tabs.List aria-label="tabs example" className="bg-red-100 ">
                <Tabs.Trigger value="tab1" className="">
                  <div className="border-r border-t-2 border-gray-300 border-t-blue-500 px-4 py-2 pr-8">
                    Einloggen
                  </div>
                </Tabs.Trigger>
                <Tabs.Trigger value="tab2">
                  {" "}
                  <div className="border-b border-r border-t border-l border-gray-300 bg-gray-200 px-4 py-2 pr-8">
                    Registrieren
                  </div>
                </Tabs.Trigger>
                <Tabs.Trigger value="tab2">
                  {" "}
                  <div className="border-b border-r border-t border-l border-gray-300 bg-white w-full flex-1 px-4 py-2 pr-8">
                    Registrieren
                  </div>
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="tab1">
                <div className="px-8 pt-8">
                  <div className="text-2xl mb-4">SignIn</div>
                  <div className="text-sm">Nutzername</div>{" "}
                  <input
                    className="border border-gray-300 bg-gray-50 mt-2 py-2 "
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 px-8">
                  <div className="text-sm">Passwort</div>
                  <input
                    className="border border-gray-300 bg-gray-50 mt-2 py-2 "
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="bg-blue-600 px-4 py-2 text-lg text-white ml-8  mt-8">
                  Einloggen
                </button>
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <div>
                  <input
                    className="border bg-transparent p-1 rounded text-teal-500 "
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="border bg-transparent p-1 rounded text-teal-500 "
                    type="password"
                    placeholder="Your Ppssword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignup(email, password);
                  }}
                  className="mt-4 bg-teal-400 text-black p-2 rounded-lg"
                  disabled={loading}
                >
                  <span>{loading ? "Loading" : "Sign Up"}</span>
                </button>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </>
  );
}

Login.getLayout = function getLayout(login) {
  return <>{login}</>;
};
