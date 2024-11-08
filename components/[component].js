import { useRouter } from "next/router";
import About from "../components/About";
import AdditionalSeoData from "../components/AdditionalSeoData";
import Button from "../components/Button";
import Card from "../components/Card";
import ChallengesBar from "../components/ChallengesBar";
import Checkbox from "../components/Checkbox";
import Contact from "../components/Contact";
import CustomSelector from "../components/CustomSelector";
import DummyWpContainer from "../components/DummyWpContainer";
import DummyWpFooter from "../components/DummyWpFooter";
import FavIcon from "../components/FavIcon";
import FeaturesComponent from "../components/FeaturesComponent";
import FeaturesComponent2 from "../components/FeaturesComponent2";
import FeaturesComponent3 from "../components/FeaturesComponent3";
import ForAuthors from "../components/ForAuthors";
import Home from "../components/Home";
import Homepage from "../components/Homepage";
import Links3 from "../components/Links3";
import Links4 from "../components/Links4";
import PoliciesComponent from "../components/PoliciesComponent";
import Policy from "../components/Policy";
import SliderGrid from "../components/SliderGrid";
import Terms from "../components/Terms";
 
const componentMap = {
  "about": About,
  "additional-seo-data": AdditionalSeoData,
  "button": Button,
  "card": Card,
  "challenges-bar": ChallengesBar,
  "checkbox": Checkbox,
  "contact": Contact,
  "custom-selector": CustomSelector,
  "dummy-wp-container": DummyWpContainer,
  "dummy-wp-footer": DummyWpFooter,
  "fav-icon": FavIcon,
  "features-component": FeaturesComponent,
  "features-component2": FeaturesComponent2,
  "features-component3": FeaturesComponent3,
  "for-authors": ForAuthors,
  "home": Home,
  "homepage": Homepage,
  "links3": Links3,
  "links4": Links4,
  "policies-component": PoliciesComponent,
  "policy": Policy,
  "slider-grid": SliderGrid,
  "terms": Terms
};
 
export default function DynamicComponentPage() {
  const router = useRouter();
  const { component } = router.query;  
 
  const Component = componentMap[component];
 
  if (!Component) {
    return <p>Page not found</p>;
  }
 
  return <Component />;
}
 