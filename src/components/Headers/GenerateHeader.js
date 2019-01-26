const GenerateHeader = page => {
  if (page === "services") {
    return {
      titleText: "Landscaping Services",
      descText: "I've got you covered."
    };
  }
  if (page === "about") {
    return {
      titleText: "Cruz's Mission",
      descText: "Landscaping done right."
    };
  }
  if (page === "estimate") {
    return {
      titleText: "Let's get to work!",
      descText: "Send me the details."
    };
  }
  if (page === "contact") {
    return {
      titleText: "Contact Information"
    };
  }
  if (page === "gallery") {
    return {
      titleText: "Gallery",
      descText: "Check out my work!"
    };
  }
  if (page === "jobs") {
    return {
      titleText: "Jobs",
      descText: "So you wanna work for me?"
    };
  } else {
    return "Data not found";
  }
};

export default GenerateHeader;
