import HomeHeaderImage1 from "../../assets/images/headerHome1[winter].jpg";
import HomeHeaderImage2 from "../../assets/images/headerHome2.jpg";
import HomeHeaderImage3 from "../../assets/images/headerHome3.jpg";
import HomeHeaderImage4 from "../../assets/images/headerHome1[summer].jpg";
import AboutHeaderImage from "../../assets/images/headerAbout.jpg";
import ContactHeaderImage from "../../assets/images/headerContact.jpg";
import ServicesHeaderImage from "../../assets/images/headerServices.jpeg";
import ServicesHeaderImage2 from "../../assets/images/headerServices[winter].jpg";
import JobsHeaderImage from "../../assets/images/headerEmployment.jpg";
import EstimateHeaderImage from "../../assets/images/headerEstimate.jpeg";
import GalleryHeaderImage from "../../assets/images/headerGallery.jpeg";
import FAQHeaderImage from "../../assets/images/headerFAQ.jpeg";

import HomeHeaderImage1Mobile from "../../assets/images/headerHome1Mobile[winter].jpg";
import HomeHeaderImage2Mobile from "../../assets/images/headerHome2Mobile.jpeg";
import HomeHeaderImage3Mobile from "../../assets/images/headerHome3Mobile.jpeg";
import HomeHeaderImage4Mobile from "../../assets/images/headerHome1Mobile[summer].jpeg";
import AboutHeaderImageMobile from "../../assets/images/headerAboutMobile.jpg";
import ContactHeaderImageMobile from "../../assets/images/headerContactMobile.jpg";
import ServicesHeaderImageMobile from "../../assets/images/headerServicesMobile.jpg";
import ServicesHeaderImage2Mobile from "../../assets/images/headerServicesMobile[winter].jpeg";
import JobsHeaderImageMobile from "../../assets/images/headerEmploymentMobile.jpg";
import EstimateHeaderImageMobile from "../../assets/images/headerEstimateMobile.jpg";
import GalleryHeaderImageMobile from "../../assets/images/headerGalleryMobile.jpg";
import FAQHeaderImageMobile from "../../assets/images/headerFAQMobile.jpg";

const GenerateHomeImage = () => {
  var i = Math.floor(Math.random() * 5 + 1);
  if (i === 1 || i === 2) {
    return HomeHeaderImage1;
  } else if (i === 3) {
    return HomeHeaderImage2;
  } else if (i === 4) {
    return HomeHeaderImage3;
  } else if (i === 5) {
    return HomeHeaderImage4;
  }
};

const GenerateHomeImageMobile = () => {
  var i = Math.floor(Math.random() * 5 + 1);
  if (i === 1 || i === 2) {
    return HomeHeaderImage1Mobile;
  } else if (i === 3) {
    return HomeHeaderImage2Mobile;
  } else if (i === 4) {
    return HomeHeaderImage3Mobile;
  } else if (i === 5) {
    return HomeHeaderImage4Mobile;
  }
};

const GenerateServiceImage = () => {
  var i = Math.floor(Math.random() * 2 + 1);
  if (i === 1) {
    return ServicesHeaderImage;
  } else if (i === 2) {
    return ServicesHeaderImage2;
  }
};

const GenerateServiceImageMobile = () => {
  var i = Math.floor(Math.random() * 2 + 1);
  if (i === 1) {
    return ServicesHeaderImageMobile;
  } else if (i === 2) {
    return ServicesHeaderImage2Mobile;
  }
};

//===================================================
//           Function/Component Divider
//===================================================

const GenerateHeader = page => {
  if (page === "home") {
    return {
      titleText: "Cruz Urbina Landscapes",
      descText: "Serving Salem for over 35 years!",
      headerImage: GenerateHomeImage(),
      headerImageMobile: GenerateHomeImageMobile()
    };
  }
  if (page === "services") {
    return {
      titleText: "Landscaping Services",
      descText: "We do the job at a reasonable price.",
      headerImage: GenerateServiceImage(),
      headerImageMobile: GenerateServiceImageMobile()
    };
  }
  if (page === "about") {
    return {
      titleText: "Cruz's Mission",
      descText: "Landscaping done right.",
      headerImage: AboutHeaderImage,
      headerImageMobile: AboutHeaderImageMobile
    };
  }
  if (page === "estimate") {
    return {
      titleText: "Let's get to work!",
      descText: "Send us the details.",
      headerImage: EstimateHeaderImage,
      headerImageMobile: EstimateHeaderImageMobile
    };
  }
  if (page === "contact") {
    return {
      titleText: "Contact Information",
      headerImage: ContactHeaderImage,
      headerImageMobile: ContactHeaderImageMobile
    };
  }
  if (page === "gallery") {
    return {
      titleText: "Gallery",
      headerImage: GalleryHeaderImage,
      headerImageMobile: GalleryHeaderImageMobile
    };
  }
  if (page === "jobs") {
    return {
      titleText: "Employment",
      descText: "Let's get it done.",
      headerImage: JobsHeaderImage,
      headerImageMobile: JobsHeaderImageMobile
    };
  }
  if (page === "faq") {
    return {
      titleText: "Frequently Asked Questions",
      headerImage: FAQHeaderImage,
      headerImageMobile: FAQHeaderImageMobile
    };
  } else {
    return "Data not found";
  }
};

export default GenerateHeader;
