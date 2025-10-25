import Section_1 from "../pages/Section_1";
import Section_2 from "../pages/Section_2";
import Section_3 from "../pages/Section_3";
import Section_4 from "../pages/Section_4";
import Section_5 from "../pages/Section_5";

function MainLayout() {
    return (
        <main>
            <Section_1/>
            <Section_2/>
            <Section_3/>
            <Section_4/>
            {/*<Section_5/>*/}
        </main>
    );
}

export default MainLayout;