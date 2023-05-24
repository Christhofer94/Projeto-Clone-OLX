import React, { useState } from "react";
import { PageArea } from "./styled";
import useApi from "../../helpers/OlxApi";
import { doLogin } from "../../helpers/AuthHandler";
import { ErrorMessage } from "../../components/MainComponents";
import { PageContainer, PageTitle } from "../../components/MainComponents";

const Page = () => {
  const api = useApi();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememverPassword] = useState(false);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    const json = await api.login(email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = '/';
    }
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input 
              type="email" 
              disabled={disable}
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
               />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input 
              type="passowrd" 
              disabled={disable}
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
               />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--input">
              <input 
              type="checkbox" 
              disabled={disable}
              checked={rememberPassword}
              onChange={()=> setRememverPassword(!rememberPassword)} />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disable}>Fazer Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
