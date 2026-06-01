import { Global, css } from "@emotion/react";
import { theme } from "./theme";

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: ${theme.fonts.body};
          background: ${theme.colors.bg};
          color: ${theme.colors.text};
          line-height: 1.6;
          min-height: 100vh;
        }

        #root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          max-width: 100%;
          display: block;
        }

        :focus-visible {
          outline: 2px solid ${theme.colors.gold};
          outline-offset: 3px;
        }

        .skip-link {
          position: absolute;
          left: -9999px;
          top: 0;
          z-index: 9999;
          padding: 12px 20px;
          background: ${theme.colors.gold};
          color: #111;
          font-weight: 700;
        }

        .skip-link:focus {
          left: 16px;
          top: 16px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
    />
  );
}
