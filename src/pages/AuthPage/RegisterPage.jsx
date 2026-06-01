import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout/Layout";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import { ru } from "../../constants/ru";
import { registerUser, clearAuthError } from "../../store/slices/authSlice";
import {
  Page,
  Card,
  Title,
  Subtitle,
  Form,
  Error,
  Footer,
  FooterLink,
} from "./AuthPage.styles";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((s) => s.auth);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [localError, setLocalError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLocalError("");
    dispatch(clearAuthError());

    if (form.password !== form.confirm) {
      setLocalError(ru.auth.passwordMismatch);
      return;
    }

    const result = await dispatch(
      registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      })
    );

    if (registerUser.fulfilled.match(result)) {
      navigate("/hotels", { replace: true });
    }
  }

  return (
    <Layout mainLabel="Регистрация">
      <Page>
        <Card>
          <Title>{ru.auth.registerTitle}</Title>
          <Subtitle>{ru.auth.registerSubtitle}</Subtitle>
          <Form onSubmit={handleSubmit}>
            <Input
              label={ru.auth.name}
              name="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              label={ru.auth.email}
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              label={ru.auth.password}
              name="password"
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Input
              label={ru.auth.confirmPassword}
              name="confirm"
              type="password"
              required
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
            {(localError || error) && (
              <Error role="alert">{localError || error}</Error>
            )}
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? ru.auth.loading : ru.auth.registerBtn}
            </Button>
          </Form>
          <Footer>
            {ru.auth.hasAccount}{" "}
            <FooterLink to="/login">{ru.auth.loginLink}</FooterLink>
          </Footer>
        </Card>
      </Page>
    </Layout>
  );
}
