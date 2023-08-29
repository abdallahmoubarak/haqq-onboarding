export const generalValidator = (fields) => {
  const missingFields = Object.entries(fields).filter(([key, value]) => !value);

  if (missingFields.length > 0) {
    return {
      valid: false,
      message: "* You are missing required fields."
    };
  }

  return {
    valid: true,
    message: "All done"
  };
};
