import { useState } from "react";
import "../Register/Register.css";
import type { RegisteData } from "../../interfaces/RegisterData";

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisteData>({
    name: "",
    emal: "",
    password: "",
    role: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    neighborhood: "",
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({
        ...registerData,
        [name]: value
    })
  }
  return (
    <>
      <div className="container">
        <h2>Faça seu cadastro</h2>
        <div className="forms">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                id="text_name"
                type="text"
                name="name"
                placeholder="Nome"
                value={registerData.name}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="text_email"
                type="email"
                name="email"
                placeholder="E-mail"
                value={registerData.emal}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                id="text_password"
                type="password"
                name="password"
                placeholder="Senha"
                value={registerData.password}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Profissão</label>
              <input
                id="text_role"
                type="text"
                name="role"
                placeholder="Profissão"
                value={registerData.role}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="street">Rua</label>
              <input
                id="text_street"
                type="text"
                name="street"
                placeholder="Rua"
                value={registerData.street}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="number">Número da Casa</label>
              <input
                id="text_number"
                type="text"
                name="number"
                placeholder="Número da Casa"
                value={registerData.number}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="complement">Complemento</label>
              <input
                id="text_complement"
                type="text"
                name="complement"
                placeholder="Complemento"
                value={registerData.complement}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="district">Bairro/Distrito</label>
              <input
                id="text_district"
                type="text"
                name="district"
                placeholder="Bairro/Distrito"
                value={registerData.district}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <input
                id="text_city"
                type="text"
                name="city"
                placeholder="Cidade"
                value={registerData.city}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input
                id="text_state"
                type="text"
                name="state"
                placeholder="Estado"
                value={registerData.state}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">País</label>
              <input
                id="text_country"
                type="text"
                name="country"
                placeholder="País"
                value={registerData.country}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">CEP</label>
              <input
                id="text_zipCode"
                type="text"
                name="zipCode"
                placeholder="CEP"
                value={registerData.zipCode}
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="neighborhood">Ponto de Referência</label>
              <input
                id="text_neighborhood"
                type="text"
                name="neighborhood"
                placeholder="Ponto de Referência"
                value={registerData.neighborhood}
                onChange={handleSubmit}
              />
            </div>

            {/* O botão DEVE ser movido para dentro do <form> para que o grid o controle, ou mantemos ele como antes e centralizamos. Vou manter como antes e ajustar a estética. */}
          </form>
        </div>
        {/* O botão pode permanecer aqui para ser mais fácil de estilizar separadamente. */}
        <div className="button">
          <button type="submit">Cadastrar</button>
        </div>
      </div>
    </>
  );
};

export default Register;
