function determineNavLinkStyle({ isActive }) {
  return isActive
    ? {
        textDecoration: "underline",
        color: "#161616",
        fontWeight: 600,
      }
    : null;
}

export { determineNavLinkStyle };
