function determineLoadingText(hasStarted, isPending) {
  if (!hasStarted) return "";

  return isPending ? "Loading..." : "";
}

function determineErrorText(error) {
  return error?.message || "";
}

export { determineLoadingText, determineErrorText };
