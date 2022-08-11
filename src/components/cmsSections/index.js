import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionsSection } from "./PageFAQDisplayQuestionsSection";
import { PageHomeHeroSection } from "./PageHomeHeroSection";
import { SeoBlock } from "./SeoBlock";

export const cmsSections = {
  PagefaqDisplayquestionRecord: PageFAQDisplayQuestionsSection,
  CommonSeoBlockRecord: SeoBlock ,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: PageHomeHeroSection,
  CommonFooterRecord: (props) => <Footer {...props} />,
}
