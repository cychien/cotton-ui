function useTheme(theme = "primary") {
  return {
    "--color-main": `var(--${theme}-main)`,
    "--color-mild-main": `var(--${theme}-mild-main)`,
    "--color-pale-main": `var(--${theme}-pale-main)`,
    "--color-secondary": `var(--${theme}-secondary)`,
    "--color-contrast": `var(--${theme}-contrast)`,
    "--color-accent": `var(--${theme}-accent)`,
    "--color-border": `var(--${theme}-border)`,
    "--color-ring": `var(--${theme}-ring)`,
    "--color-shadow": `var(--${theme}-shadow)`,
  } as React.CSSProperties;
}

export { useTheme };
