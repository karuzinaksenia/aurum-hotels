import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("App error:", error, info);
  }

  render() {
    if (this.state.error) {
      const { error } = this.state;

      return (
        <div
          style={{
            padding: 32,
            maxWidth: 640,
            margin: "40px auto",
            fontFamily: "system-ui, sans-serif",
            color: "#e8edf7",
            background: "#141c2f",
            borderRadius: 12,
            border: "1px solid #243049",
          }}
        >
          <h1 style={{ color: "#f0d78c", marginTop: 0 }}>Что-то пошло не так</h1>
          <p style={{ color: "#fca5a5", fontWeight: 600 }}>{error.message}</p>
          {import.meta.env.DEV && error.stack && (
            <pre
              style={{
                marginTop: 16,
                padding: 12,
                overflow: "auto",
                fontSize: 12,
                color: "#94a3b8",
                background: "#0f1628",
                borderRadius: 8,
              }}
            >
              {error.stack}
            </pre>
          )}
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: "10px 20px",
              border: "none",
              borderRadius: 8,
              background: "#d4a853",
              color: "#111",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Обновить страницу
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
