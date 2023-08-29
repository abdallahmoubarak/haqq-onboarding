export const plansGenerator = (t) => [
  {
    title: t("plans.silver.title"),
    cost: t("plans.silver.cost"),
    discounted: t("plans.silver.discounted"),
    subDescription: t("plans.silver.subDescription"),
    background: t("plans.silver.background"),
    color: t("plans.silver.color"),
    buttonBack: t("plans.silver.buttonBack"),
    buttonColor: t("plans.silver.buttonColor"),
    buttonText: t("plans.silver.buttonText"),
    costDescription: t("plans.silver.costDescription"),
    description: t("plans.silver.description", {
      returnObjects: true
    })
  },
  {
    title: t("plans.gold.title"),
    cost: t("plans.gold.cost"),
    discounted: t("plans.gold.discounted"),
    subDescription: t("plans.gold.subDescription"),
    background: t("plans.gold.background"),
    color: t("plans.gold.color"),
    buttonBack: t("plans.gold.buttonBack"),
    buttonColor: t("plans.gold.buttonColor"),
    buttonText: t("plans.gold.buttonText"),
    costDescription: t("plans.gold.costDescription"),
    description: t("plans.gold.description", {
      returnObjects: true
    }),
    descriptTitle: "Everything in Silver, plus:",
    popular: true
  },
  {
    title: t("plans.purple.title"),
    cost: t("plans.purple.cost"),
    discounted: t("plans.purple.discounted"),
    subDescription: t("plans.purple.subDescription"),
    background: t("plans.purple.background"),
    color: t("plans.purple.color"),
    buttonBack: t("plans.purple.buttonBack"),
    buttonColor: t("plans.purple.buttonColor"),
    buttonText: t("plans.purple.buttonText"),
    costDescription: t("plans.purple.costDescription"),
    description: t("plans.purple.description", {
      returnObjects: true
    }),
    descriptTitle: "Everything in Gold, plus:"
  }
];
