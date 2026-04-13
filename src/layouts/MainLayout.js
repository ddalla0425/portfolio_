import { Section1 } from "../pages/Section_1";
import { Section2 } from "../pages/Section_2";
import { Section3 } from "../pages/Section_3";
import { Section4 } from "../pages/Section_4";
// import {Section5} from "../pages/Section_5";
import { Section6 } from "../pages/Section_6";
import { Section7 } from "../pages/Section_7";
import { Section8 } from "../pages/Section_8";

function MainLayout() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section7 />
      <Section8 />
      <Section6 />
      <Section3 />
      <Section4 />
      {/*<Section_5/>*/}
    </main>
  );
}

export default MainLayout;
