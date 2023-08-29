export const onBoardingPagesGenerator = (t) => [
  { title: t("onBoardingHeaders.accountType") },
  { title: t("onBoardingHeaders.chooseExperience") },
  { title: t("onBoardingHeaders.digitalizePractice"), backbtn: true },
  {
    title: t("onBoardingHeaders.personalInfo"),
    text: t("onBoardingHeaders.personalInfoTxt")
  },
  {
    title: t("onBoardingHeaders.firmInfo"),
    text: t("onBoardingHeaders.firmInfoTxt"),
    backbtn: true,
    nextbtn: true,
    saveNback: true
  },
  {
    title: t("onBoardingHeaders.professionalInfo"),
    text: t("onBoardingHeaders.professionalInfoTxt"),
    backbtn: true,
    nextbtn: true,
    saveNback: true
  },
  {
    title: t("onBoardingHeaders.professionalExperience"),
    text: t("onBoardingHeaders.professionalExperienceTxt"),
    backbtn: true,
    nextbtn: true,
    saveNback: true
  },
  {
    title: t("onBoardingHeaders.educationHistory"),
    text: t("onBoardingHeaders.educationHistoryTxt"),
    backbtn: true,
    nextbtn: true,
    saveNback: true
  },
  {
    title: t("onBoardingHeaders.externalInfo"),
    text: t("onBoardingHeaders.externalInfoTxt"),
    backbtn: true,
    nextbtn: true,
    saveNback: true
  },
  {
    title: t("onBoardingHeaders.thankyoupage")
  }
];
