import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../components/layout/Layout/Layout";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import { ru } from "../../constants/ru";
import { loginUser, clearAuthError } from "../../store/slices/authSlice";
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

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { status, error } = useSelector((s) => s.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(clearAuthError());
    const result = await dispatch(loginUser(form));
    if (loginUser.fulfilled.match(result)) {
      const to = location.state?.from || "/profile";
      navigate(to, { replace: true });
    }
  }

  return (
    <Layout mainLabel="Вход">
      <Page>
        <Card>
          <Title>{ru.auth.loginTitle}</Title>
          <Subtitle>{ru.auth.loginSubtitle}</Subtitle>
          <Form onSubmit={handleSubmit}>
            <Input
              label={ru.auth.email}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              label={ru.auth.password}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {error && <Error role="alert">{error}</Error>}
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? ru.auth.loading : ru.auth.loginBtn}
            </Button>
          </Form>
          <Footer>
            {ru.auth.noAccount}{" "}
            <FooterLink to="/register">{ru.auth.registerLink}</FooterLink>
          </Footer>
        </Card>
      </Page>
    </Layout>
  );
}
