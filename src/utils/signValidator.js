const regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const signValidator = ({
  signType,
  email,
  password,
  firstName,
  lastName,
  repass,
  t
}) => {
  let valid = true;
  let message = "All done";

  if (
    !(
      email?.includes("@") &&
      email?.indexOf("@") > 2 &&
      email?.length - email.indexOf("@") > 5
    )
  ) {
    valid = false;
    message = t("validationMsgs.email");
    return { valid, message };
  }

  if (!regularExpression.test(password)) {
    valid = false;
    message = t("validationMsgs.pass");
    return { valid, message };
  }

  if (signType === "signup") {
    if (!firstName || firstName?.length < 3) {
      valid = false;
      message = t("validationMsgs.firstName");
      return { valid, message };
    }
    if (!lastName || lastName?.length < 3) {
      valid = false;
      message = t("validationMsgs.lastName");
      return { valid, message };
    }
    if (repass !== password) {
      valid = false;
      message = t("validationMsgs.repass");
      return { valid, message };
    }
  }
  return { valid, message };
};
