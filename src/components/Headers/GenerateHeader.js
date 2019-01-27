import HomeHeaderImage1 from "../../assets/images/ImageHomeHeader1.jpg";
import AboutHeaderImage from "../../assets/images/ImageAboutHeader.jpg";
import ContactHeaderImage from "../../assets/images/ImageContactHeader.jpeg";
import ServicesHeaderImage from "../../assets/images/ImageServicesHeader.jpeg";
import JobsHeaderImage from "../../assets/images/ImageJobsHeader.jpg";
import EstimateHeaderImage from "../../assets/images/ImageEstimateHeader.jpeg";
import GalleryHeaderImage from "../../assets/images/ImageGalleryHeader.jpeg";

const GenerateHeader = page => {
  if (page === "home") {
    return {
      titleText: "Cruz Urbina Landscapes",
      descText: "Cruzin' with excellence for over 15 years!",
      headerImage: HomeHeaderImage1,
      headerImageMobile: HomeHeaderImage1
    };
  }
  if (page === "services") {
    return {
      titleText: "Landscaping Services",
      descText: "I've got you covered.",
      headerImage: ServicesHeaderImage,
      headerImageMobile: ServicesHeaderImage
    };
  }
  if (page === "about") {
    return {
      titleText: "Cruz's Mission",
      descText: "Landscaping done right.",
      headerImage: AboutHeaderImage,
      headerImageMobile: AboutHeaderImage
    };
  }
  if (page === "estimate") {
    return {
      titleText: "Let's get to work!",
      descText: "Send me the details.",
      headerImage: EstimateHeaderImage,
      headerImageMobile: EstimateHeaderImage
    };
  }
  if (page === "contact") {
    return {
      titleText: "Contact Information",
      headerImage: ContactHeaderImage,
      headerImageMobile: ContactHeaderImage
    };
  }
  if (page === "gallery") {
    return {
      titleText: "Gallery",
      descText: "Check out my work!",
      headerImage: GalleryHeaderImage,
      headerImageMobile: GalleryHeaderImage
    };
  }
  if (page === "jobs") {
    return {
      titleText: "Jobs",
      descText: "So you wanna work for me?",
      headerImage: JobsHeaderImage,
      headerImageMobile: JobsHeaderImage
    };
  } else {
    return "Data not found";
  }
};

export default GenerateHeader;
