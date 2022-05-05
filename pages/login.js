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
      console.log(supabase.auth.user())
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
    <div className="row flex h-screen bg-black text-white flex-center">
      <div className="m-auto">
        <h1 className="text-3xl mb-2">Supabase + Next.js</h1>
        <div>
          <Tabs.Root defaultValue="tab1" orientation="vertical">
            <Tabs.List aria-label="tabs example" className="p-1">
              <Tabs.Trigger value="tab1" className="mr-2">
                SignIn
              </Tabs.Trigger>
              <Tabs.Trigger value="tab2">SignUp</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
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
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin(email, password);
                  }}
                  className="mt-4 bg-teal-400 text-black p-2 rounded-lg"
                  disabled={loading}
                >
                  <span>{loading ? "Loading" : "Login"}</span>
                </button>
              </div>
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
              <div>
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
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(login) {
  return <>
  {login}</>;
};
