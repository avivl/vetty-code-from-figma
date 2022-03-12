import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DropdownMenu from "./components/DropdownMenu";
import PublicWebPageHRView from "./components/PublicWebPageHRView";
import Desktop from "./components/Desktop";
import PublicWebPageHRView2 from "./components/PublicWebPageHRView2";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import ScrollFloatingTitleStickyModuleSonT from "./components/ScrollFloatingTitleStickyModuleSonT";
import InputsStates from "./components/InputsStates";
import PublicWebPageCandidateView from "./components/PublicWebPageCandidateView";
import EmailWIP from "./components/EmailWIP";
import PublicWebPageThankYou from "./components/PublicWebPageThankYou";
import PublicWebPageCandidateView2 from "./components/PublicWebPageCandidateView2";
import HeaderNavigation2 from "./components/HeaderNavigation2";
import LogIn from "./components/LogIn";
import ForgotPassword2 from "./components/ForgotPassword2";
import ForgotPassword1 from "./components/ForgotPassword1";
import ForgotPassword4 from "./components/ForgotPassword4";
import ForgotPassword3 from "./components/ForgotPassword3";
import Dashboard4Share from "./components/Dashboard4Share";
import Dashboard3Empty from "./components/Dashboard3Empty";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2Drawer from "./components/Dashboard2Drawer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dropdown-menu">
            <DropdownMenu
              text="Or Rozenfeld"
              supportingText="orozenfe@gmail.com"
              dropdownMenuBaseProps={dropdownMenuData.dropdownMenuBaseProps}
            />
          </Route>
          <Route path="/public-web-page-hr-view-1">
            <PublicWebPageHRView {...publicWebPageHRViewData} />
          </Route>
          <Route path="/desktop">
            <Desktop {...desktopData} />
          </Route>
          <Route path="/public-web-page-hr-view">
            <PublicWebPageHRView2 {...publicWebPageHRView2Data} />
          </Route>
          <Route path="/landing-page">
            <LandingPage>Landing page - WIP</LandingPage>
          </Route>
          <Route path="/sign-up">
            <SignUp {...signUpData} />
          </Route>
          <Route path="/scroll-floating-title-sticky-module-son-the-side">
            <ScrollFloatingTitleStickyModuleSonT {...scrollFloatingTitleStickyModuleSonTData} />
          </Route>
          <Route path="/inputs-states">
            <InputsStates {...inputsStatesData} />
          </Route>
          <Route path="/public-web-page-candidate-view-1">
            <PublicWebPageCandidateView {...publicWebPageCandidateViewData} />
          </Route>
          <Route path="/email-wip">
            <EmailWIP />
          </Route>
          <Route path="/public-web-page-thank-you">
            <PublicWebPageThankYou {...publicWebPageThankYouData} />
          </Route>
          <Route path="/public-web-page-candidate-view">
            <PublicWebPageCandidateView2 {...publicWebPageCandidateView2Data} />
          </Route>
          <Route path="/header-navigation">
            <HeaderNavigation2 {...headerNavigation2Data} />
          </Route>
          <Route path="/log-in">
            <LogIn {...logInData} />
          </Route>
          <Route path="/forgot-password-2">
            <ForgotPassword2 {...forgotPassword2Data} />
          </Route>
          <Route path="/forgot-password-1">
            <ForgotPassword1
              headerProps={forgotPassword1Data.headerProps}
              typeDefaultLeadingIconFalseLabelTru={forgotPassword1Data.typeDefaultLeadingIconFalseLabelTru}
              sizelgHierarchyPrimaryIconFalseDest={forgotPassword1Data.sizelgHierarchyPrimaryIconFalseDest}
              sizemdHierarchyLinkGrayIconLeadingD={forgotPassword1Data.sizemdHierarchyLinkGrayIconLeadingD}
            />
          </Route>
          <Route path="/forgot-password-4">
            <ForgotPassword4
              sizexlColorSuccessThemeLightCircleO={forgotPassword4Data.sizexlColorSuccessThemeLightCircleO}
              textAndSupportingText32Props={forgotPassword4Data.textAndSupportingText32Props}
              sizelgHierarchyPrimaryIconFalseDest={forgotPassword4Data.sizelgHierarchyPrimaryIconFalseDest}
              sizemdHierarchyLinkGrayIconLeadingD={forgotPassword4Data.sizemdHierarchyLinkGrayIconLeadingD}
            />
          </Route>
          <Route path="/forgot-password-3">
            <ForgotPassword3
              headerProps={forgotPassword3Data.headerProps}
              typeDefaultLeadingIconFalseLabelTru={forgotPassword3Data.typeDefaultLeadingIconFalseLabelTru}
              typeDefaultLeadingIconFalseLabelTru2={forgotPassword3Data.typeDefaultLeadingIconFalseLabelTru2}
              sizelgHierarchyPrimaryIconFalseDest={forgotPassword3Data.sizelgHierarchyPrimaryIconFalseDest}
              sizemdHierarchyLinkGrayIconLeadingD={forgotPassword3Data.sizemdHierarchyLinkGrayIconLeadingD}
            />
          </Route>
          <Route path="/dashboard-4-share">
            <Dashboard4Share {...dashboard4ShareData} />
          </Route>
          <Route path="/type-form">
            <LandingPage>TYPE FORM</LandingPage>
          </Route>
          <Route path="/dashboard-3-empty">
            <Dashboard3Empty {...dashboard3EmptyData} />
          </Route>
          <Route path="/:path(|dashboard-1)">
            <Dashboard1 {...dashboard1Data} />
          </Route>
          <Route path="/dashboard-2-drawer">
            <Dashboard2Drawer {...dashboard2DrawerData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const iconTrueCheckboxFalseShortcutFalseSData = {
    logOut: "/img/log-out@2x.png",
    text: "Log out",
};

const dropdownMenuBaseData = {
    iconTrueCheckboxFalseShortcutFalseS: iconTrueCheckboxFalseShortcutFalseSData,
};

const dropdownMenuData = {
    dropdownMenuBaseProps: dropdownMenuBaseData,
};

const frame31Data = {
    vector7: "/img/vector-7@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png",
    className: "",
};

const companyLogo1Data = {
    frame3Props: frame31Data,
};

const content21Data = {
    companyLogoProps: companyLogo1Data,
};

const typeAvatarOpenFalse2Data = {
    className: "dropdown-1",
};

const content41Data = {
    typeAvatarOpenFalseProps: typeAvatarOpenFalse2Data,
};

const headerNavigation1Data = {
    content2Props: content21Data,
    content4Props: content41Data,
};

const currentFalseTypeTextIconFalseStateD1Data = {
    children: "Job posts",
};

const currentTrueTypeTextIconFalseStateDe1Data = {
    children: "Technical Program Manager, Mobile Software Engineering",
};

const currentFalseTypeTextIconFalseStateD2Data = {
    children: "Candidates",
    className: "breadcrumb-button-base-1",
};

const dividerChevronTypeTextBreakpointDesData = {
    chevronRight1: "/img/chevron-right@2x.png",
    chevronRight2: "/img/chevron-right@2x.png",
    currentFalseTypeTextIconFalseStateD: currentFalseTypeTextIconFalseStateD1Data,
    currentTrueTypeTextIconFalseStateDe: currentTrueTypeTextIconFalseStateDe1Data,
    currentFalseTypeTextIconFalseStateD2: currentFalseTypeTextIconFalseStateD2Data,
};

const sizemdIconFalse1Data = {
    className: "",
};

const stateDefault1Data = {
    sizemdIconFalseProps: sizemdIconFalse1Data,
};

const supportingTextTrueTabsFalseActionsF1Data = {
    children: "Job Description",
};

const text21Data = {
    children: "Over 40 hours",
    className: "text-92",
};

const section1Data = {
    text2Props: text21Data,
};

const text22Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-1",
};

const text23Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-2",
};

const section221Data = {
    text21Props: text22Data,
    text22Props: text23Data,
};

const frame140151Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF1Data,
    sectionProps: section1Data,
    section22Props: section221Data,
};

const supportingTextTrueTabsFalseActionsF2Data = {
    children: "Screening Test (Paid)",
};

const text24Data = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est tristique.<br />Molestie vel, consectetur leo tortor, congue. Vitae justo, amet nisl quam quam morbi sagittis risus, est. Eget aliquet proin tincidunt faucibus ac tortor fringilla cras. Condimentum eleifend consequat amet, elit diam duis proin nunc, gravida. Amet facilisis sit sit fames cursus et, scelerisque. Ut varius vitae sed feugiat donec. Cras semper turpis non nunc. Posuere maecenas fermentum eu risus. Tempus est nulla elit arcu.</>,
    className: "paragraph-3",
};

const section2Data = {
    className: "section-2",
    text2Props: text24Data,
};

const text25Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-4",
};

const text26Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-5",
};

const section222Data = {
    text21Props: text25Data,
    text22Props: text26Data,
};

const frame140161Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF2Data,
    sectionProps: section2Data,
    section22Props: section222Data,
};

const supportingTextTrueTabsFalseActionsF3Data = {
    children: "Additional Notes",
};

const text27Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.",
    className: "paragraph-6",
};

const section3Data = {
    className: "section-3",
    text2Props: text27Data,
};

const frame140171Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF3Data,
    sectionProps: section3Data,
};

const supportingTextTrueTabsFalseActionsF4Data = {
    children: "Apply to Job",
};

const text28Data = {
    children: "Enter your full name",
    className: "text-10",
};

const typeDefaultDestructiveFalse1Data = {
    label: "Full Name *",
    className: "",
    text2Props: text28Data,
};

const typeDefaultLeadingIconFalseLabelTru1Data = {
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse1Data,
};

const text29Data = {
    children: "Enter your email address",
    className: "text-11",
};

const typeDefaultDestructiveFalse2Data = {
    label: "Email *",
    className: "input-field-base-1",
    text2Props: text29Data,
};

const typeDefaultLeadingIconFalseLabelTru2Data = {
    className: "input-field-1",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse2Data,
};

const text210Data = {
    children: "Select a country",
    className: "text-12",
};

const content51Data = {
    text2Props: text210Data,
};

const labelTrueTypeDefaultStatePlaceholde1Data = {
    label: "Country",
    chevronDown: "/img/chevron-down@2x.png",
    className: "",
    content5Props: content51Data,
};

const statePlaceholderTypeDefaultSupporti1Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde1Data,
};

const text1Data = {
    children: "Single Freelancer",
};

const content61Data = {
    textProps: text1Data,
};

const labelTrueTypeDefaultStateDefault1Data = {
    chevronDown: "/img/chevron-down@2x.png",
    className: "",
    content6Props: content61Data,
};

const stateDefaultTypeDefaultSupportingTe1Data = {
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault1Data,
};

const text211Data = {
    children: "Select your estimation",
    className: "text-13",
};

const content52Data = {
    text2Props: text211Data,
};

const labelTrueTypeDefaultStatePlaceholde2Data = {
    label: "Estimation to perform test*",
    chevronDown: "/img/chevron-down@2x.png",
    className: "input-dropdown-base-1",
    content5Props: content52Data,
};

const statePlaceholderTypeDefaultSupporti2Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde2Data,
};

const text212Data = {
    children: "Select your weekly availability",
    className: "text-14",
};

const labelTrueTypeDefaultStatePlaceholde22Data = {
    label: "Expected availability per week",
    className: "",
    text2Props: text212Data,
};

const statePlaceholderTypeDefaultSupporti22Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde22Data,
};

const text213Data = {
    children: "I plan to do X, then Y",
    className: "text-15",
};

const input1Data = {
    text2Props: text213Data,
};

const destructiveFalse1Data = {
    className: "",
    inputProps: input1Data,
};

const destructiveFalse621Data = {
    inputProps: destructiveFalse1Data,
};

const labelTrueHintTextFalseDestructiveFa1Data = {
    destructiveFalse62Props: destructiveFalse621Data,
};

const text214Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "text-16",
};

const input2Data = {
    text2Props: text214Data,
};

const destructiveFalse21Data = {
    label: "/img/label-1@2x.png",
    className: "",
    inputProps: input2Data,
};

const labelTrueHintTextFalseDestructiveFa21Data = {
    destructiveFalse2Props: destructiveFalse21Data,
};

const text215Data = {
    children: "Ask us anything...",
    className: "text-17",
};

const input3Data = {
    text2Props: text215Data,
};

const destructiveFalse22Data = {
    label: "/img/label-2@2x.png",
    className: "textarea-input-field-base-2",
    inputProps: input3Data,
};

const labelTrueHintTextFalseDestructiveFa22Data = {
    destructiveFalse2Props: destructiveFalse22Data,
};

const sizemdIconFalse2Data = {
    className: "button-base-2",
};

const stateDefault2Data = {
    className: "button-3",
    sizemdIconFalseProps: sizemdIconFalse2Data,
};

const footer1Data = {
    stateDefaultProps: stateDefault2Data,
};

const property1AmenitiesProperty2False1Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False2Data = {
    children: "Skill #1",
    className: "select-1",
};

const property1AmenitiesProperty2False3Data = {
    children: "long skill Skill #1",
    className: "select-2",
};

const row51Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False1Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False2Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False3Data,
};

const property1AmenitiesProperty2False4Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False5Data = {
    children: "long skill Skill #1",
    className: "select-4",
};

const property1AmenitiesProperty2False6Data = {
    children: "Skill #1",
    className: "select-5",
};

const property1AmenitiesProperty2False7Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False8Data = {
    children: "Skill #1",
    className: "select-6",
};

const property1AmenitiesProperty2False9Data = {
    children: "long skill Skill #1",
    className: "select-7",
};

const row52Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False7Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False8Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False9Data,
};

const section321Data = {
    row51Props: row51Data,
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False4Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False5Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False6Data,
    row52Props: row52Data,
};

const uButtonsIconOutlineResting1Data = {
    src: "/img/users@2x.png",
    className: "",
};

const content221Data = {
    text: "Preference for Agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
    className: "",
};

const content71Data = {
    content22Props: content221Data,
};

const preferenceAgency1Data = {
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting1Data,
    content7Props: content71Data,
};

const uButtonsIconOutlineResting2Data = {
    src: "/img/globe@2x.png",
};

const content222Data = {
    text: "Company Website",
    supportingText: "www.airbnb.com",
    className: "text-and-supporting-text-4",
};

const content72Data = {
    className: "content-17",
    content22Props: content222Data,
};

const frame140691Data = {
    preferenceAgencyProps: preferenceAgency1Data,
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting2Data,
    content7Props: content72Data,
};

const frame337601Data = {
    shareProject: "/img/share-project@2x.png",
    section32Props: section321Data,
    frame14069Props: frame140691Data,
};

const publicWebPageHRViewData = {
    text: "Technical Program Manager, Mobile Software Engineering",
    group75: "/img/group-75@2x.png",
    graphics: "/img/graphics@2x.png",
    headerNavigationProps: headerNavigation1Data,
    dividerChevronTypeTextBreakpointDes: dividerChevronTypeTextBreakpointDesData,
    stateDefaultProps: stateDefault1Data,
    frame14015Props: frame140151Data,
    frame14016Props: frame140161Data,
    frame14017Props: frame140171Data,
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF4Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru1Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru2Data,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti1Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe1Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti2Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti22Data,
    labelTrueHintTextFalseDestructiveFa: labelTrueHintTextFalseDestructiveFa1Data,
    labelTrueHintTextFalseDestructiveFa2: labelTrueHintTextFalseDestructiveFa21Data,
    labelTrueHintTextFalseDestructiveFa3: labelTrueHintTextFalseDestructiveFa22Data,
    footerProps: footer1Data,
    frame33760Props: frame337601Data,
};

const frame32Data = {
    vector7: "/img/vector-7@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png",
    className: "",
};

const content321Data = {
    frame3Props: frame32Data,
};

const content81Data = {
    content32Props: content321Data,
};

const currentTrueBadgeFalseToggleFalseIco1Data = {
    children: "Job Posts",
};

const content9Data = {
    className: "content-1",
};

const text216Data = {
    children: "List of links you created to attract candidates",
    className: "supporting-text-1",
};

const sizemdIconLeading21Data = {
    text: "Create a new job",
    className: "",
};

const sizemdHierarchySecondaryGrayIconLea21Data = {
    sizemdIconLeading2Props: sizemdIconLeading21Data,
};

const breadcrumbsFalseSupportingTextTrueSData = {
    text: "Job Posts",
    text2Props: text216Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea21Data,
};

const sizemdIconFalse22Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe1Data = {
    sizemdIconFalse2Props: sizemdIconFalse22Data,
};

const card1Data = {
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe1Data,
};

const sizemdIconFalse23Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe2Data = {
    sizemdIconFalse2Props: sizemdIconFalse23Data,
};

const card2Data = {
    className: "card-1",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe2Data,
};

const sizemdIconFalse24Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe3Data = {
    sizemdIconFalse2Props: sizemdIconFalse24Data,
};

const card3Data = {
    className: "card-2",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe3Data,
};

const content92Data = {
    card1Props: card1Data,
    card2Props: card2Data,
    card3Props: card3Data,
};

const sizemdIconFalse25Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe4Data = {
    sizemdIconFalse2Props: sizemdIconFalse25Data,
};

const card4Data = {
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe4Data,
};

const sizemdIconFalse26Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe5Data = {
    sizemdIconFalse2Props: sizemdIconFalse26Data,
};

const card5Data = {
    className: "card-4",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe5Data,
};

const sizemdIconFalse27Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe6Data = {
    sizemdIconFalse2Props: sizemdIconFalse27Data,
};

const card6Data = {
    className: "card-5",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe6Data,
};

const content93Data = {
    className: "content-29",
    card1Props: card4Data,
    card2Props: card5Data,
    card3Props: card6Data,
};

const sizemdIconFalse28Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe7Data = {
    sizemdIconFalse2Props: sizemdIconFalse28Data,
};

const card7Data = {
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe7Data,
};

const sizemdIconFalse29Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe8Data = {
    sizemdIconFalse2Props: sizemdIconFalse29Data,
};

const card8Data = {
    className: "card-6",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe8Data,
};

const sizemdIconFalse210Data = {
    children: "View Candidates",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe9Data = {
    sizemdIconFalse2Props: sizemdIconFalse210Data,
};

const card9Data = {
    className: "card-7",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe9Data,
};

const content94Data = {
    className: "content-30",
    card1Props: card7Data,
    card2Props: card8Data,
    card3Props: card9Data,
};

const desktopData = {
    divider: "/img/divider@1x.png",
    content8Props: content81Data,
    currentTrueBadgeFalseToggleFalseIco: currentTrueBadgeFalseToggleFalseIco1Data,
    contentProps: content9Data,
    breadcrumbsFalseSupportingTextTrueS: breadcrumbsFalseSupportingTextTrueSData,
    content91Props: content92Data,
    content92Props: content93Data,
    content93Props: content94Data,
};

const frame33Data = {
    vector7: "/img/vector-7-2@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1-2@2x.png",
    className: "",
};

const companyLogo2Data = {
    frame3Props: frame33Data,
};

const content23Data = {
    className: "content-6",
    companyLogoProps: companyLogo2Data,
};

const content101Data = {
    content2Props: content23Data,
};

const socialIcon1Data = {
    src: "/img/menu-2@2x.png",
};

const openedFalseColorGrayThemeLightState1Data = {
    socialIconProps: socialIcon1Data,
};

const sizemdIconLeading31Data = {
    text: "Back",
    className: "",
};

const sizemdHierarchyLinkGrayIconLeadingD1Data = {
    sizemdIconLeading3Props: sizemdIconLeading31Data,
};

const button2Data = {
    className: "button-1",
};

const sizemdIconFalse3Data = {
    className: "",
};

const stateDefault3Data = {
    className: "button-4",
    sizemdIconFalseProps: sizemdIconFalse3Data,
};

const supportingTextFalseTabsFalseActions1Data = {
    children: "Job Description",
};

const text217Data = {
    children: <>Google builds products that help create opportunities for everyone, whether they’re down the street or across the globe.<br />As a Technical Program Manager for mobile software engineering, you’ll manage the development of products that get our users the information they need, no matter where they are — including phones, tablets, TVs, wearable devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify risks, manage schedules, and communicate clearly with project stakeholders. And, thanks to Google’s industry leading benefits and ample opportunities for personal and professional development, you’ll learn and grow alongside talented teammates who share your attention to detail and appetite for problem-solving.<br />Candidates of all experience levels are encouraged to apply. We&#x27;ll consider your experience to best match you with open roles.</>,
    className: "paragraph-7",
};

const section4Data = {
    className: "section-4",
    text2Props: text217Data,
};

const text218Data = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est tristique.<br />Molestie vel, consectetur leo tortor, congue. Vitae justo, amet nisl quam quam morbi sagittis risus, est. Eget aliquet proin tincidunt faucibus ac tortor fringilla cras. Condimentum eleifend consequat amet, elit diam duis proin nunc, gravida. Amet facilisis sit sit fames cursus et, scelerisque. Ut varius vitae sed feugiat donec. Cras semper turpis non nunc. Posuere maecenas fermentum eu risus. Tempus est nulla elit arcu.</>,
    className: "paragraph-8",
};

const section51Data = {
    text2Props: text218Data,
};

const text219Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-9",
};

const text220Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-10",
};

const text221Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.",
    className: "paragraph-11",
};

const section52Data = {
    className: "section-30",
    text2Props: text221Data,
};

const section42Data = {
    supportingTextFalseTabsFalseActions: supportingTextFalseTabsFalseActions1Data,
    sectionProps: section4Data,
    section51Props: section51Data,
    text21Props: text219Data,
    text22Props: text220Data,
    section52Props: section52Data,
};

const property1AmenitiesProperty2False22Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False23Data = {
    children: "Skill #1",
    className: "select-27",
};

const property1AmenitiesProperty2False24Data = {
    children: "long skill Skill #1",
    className: "select-28",
};

const row522Data = {
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False22Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False23Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False24Data,
};

const property1AmenitiesProperty2False25Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False26Data = {
    children: "long skill Skill #1",
    className: "select-30",
};

const property1AmenitiesProperty2False27Data = {
    children: "Skill #1",
    className: "select-31",
};

const property1AmenitiesProperty2False28Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False29Data = {
    children: "Skill #1",
    className: "select-32",
};

const property1AmenitiesProperty2False210Data = {
    children: "long skill Skill #1",
    className: "select-33",
};

const row523Data = {
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False28Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False29Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False210Data,
};

const shareProject1Data = {
    row521Props: row522Data,
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False25Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False26Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False27Data,
    row522Props: row523Data,
};

const uButtonsIconOutlineResting3Data = {
    src: "/img/users@2x.png",
    className: "u-buttons-icon-outline-resting-2",
};

const content223Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
    className: "",
};

const content73Data = {
    content22Props: content223Data,
};

const preferenceAgency2Data = {
    className: "preference-1",
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting3Data,
    content7Props: content73Data,
};

const uButtonsIconOutlineResting4Data = {
    src: "/img/globe@2x.png",
    className: "u-buttons-icon-outline-resting-3",
};

const content224Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "text-and-supporting-text-6",
};

const content74Data = {
    className: "content-18",
    content22Props: content224Data,
};

const frame1406921Data = {
    preferenceAgencyProps: preferenceAgency2Data,
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting4Data,
    content7Props: content74Data,
};

const supportingTextFalseTabsFalseActions2Data = {
    children: "Apply to Job",
    className: "section-header-5",
};

const text222Data = {
    children: "Enter your full name",
    className: "text-18",
};

const typeDefaultDestructiveFalse3Data = {
    label: "Full Name *",
    className: "input-field-base-2",
    text2Props: text222Data,
};

const typeDefaultLeadingIconFalseLabelTru3Data = {
    className: "input-field-2",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse3Data,
};

const text223Data = {
    children: "Enter your email address",
    className: "text-19",
};

const typeDefaultDestructiveFalse4Data = {
    label: "Email *",
    className: "input-field-base-3",
    text2Props: text223Data,
};

const typeDefaultLeadingIconFalseLabelTru4Data = {
    className: "input-field-3",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse4Data,
};

const text224Data = {
    children: "Select a country",
    className: "text-20",
};

const labelTrueTypeDefaultStatePlaceholde23Data = {
    label: "Country",
    className: "input-dropdown-base-14",
    text2Props: text224Data,
};

const statePlaceholderTypeDefaultSupporti23Data = {
    className: "input-dropdown-8",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde23Data,
};

const typeLeadingTextDestructiveFalse21Data = {
    addOn: "/img/add-on@2x.png",
    textInput: "/img/text-input-1@2x.png",
    className: "",
};

const typeLeadingTextLeadingIconFalseLabe21Data = {
    typeLeadingTextDestructiveFalse2Pro: typeLeadingTextDestructiveFalse21Data,
};

const text3Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault21Data = {
    textProps: text3Data,
};

const stateDefaultTypeDefaultSupportingTe21Data = {
    labelTrueTypeDefaultStateDefault2Pr: labelTrueTypeDefaultStateDefault21Data,
};

const text225Data = {
    children: "Select your estimation",
    className: "text-21",
};

const labelTrueTypeDefaultStatePlaceholde24Data = {
    label: "Estimation to perform test*",
    className: "input-dropdown-base-15",
    text2Props: text225Data,
};

const statePlaceholderTypeDefaultSupporti24Data = {
    className: "input-dropdown-9",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde24Data,
};

const text226Data = {
    children: "Select your weekly availability",
    className: "text-22",
};

const labelTrueTypeDefaultStatePlaceholde25Data = {
    label: "Expected availability per week",
    className: "input-dropdown-base-16",
    text2Props: text226Data,
};

const statePlaceholderTypeDefaultSupporti25Data = {
    className: "input-dropdown-10",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde25Data,
};

const text227Data = {
    children: "I plan to do X, then Y",
    className: "text-23",
};

const input22Data = {
    text2Props: text227Data,
};

const destructiveFalse231Data = {
    className: "",
    input2Props: input22Data,
};

const destructiveFalse222Data = {
    input2Props: destructiveFalse231Data,
};

const labelTrueHintTextFalseDestructiveFa31Data = {
    destructiveFalse22Props: destructiveFalse222Data,
};

const text228Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "text-24",
};

const input23Data = {
    className: "input-19",
    text2Props: text228Data,
};

const destructiveFalse41Data = {
    label: "/img/label-4@2x.png",
    className: "",
    input2Props: input23Data,
};

const labelTrueHintTextFalseDestructiveFa41Data = {
    destructiveFalse4Props: destructiveFalse41Data,
};

const text229Data = {
    children: "Ask us anything...",
    className: "text-25",
};

const input24Data = {
    className: "input-20",
    text2Props: text229Data,
};

const destructiveFalse42Data = {
    label: "/img/label-2@2x.png",
    className: "textarea-input-field-base-7",
    input2Props: input24Data,
};

const labelTrueHintTextFalseDestructiveFa42Data = {
    destructiveFalse4Props: destructiveFalse42Data,
};

const sizemdIconFalse4Data = {
    className: "button-base-4",
};

const stateDefault4Data = {
    className: "button-5",
    sizemdIconFalseProps: sizemdIconFalse4Data,
};

const footer21Data = {
    stateDefaultProps: stateDefault4Data,
};

const publicWebPageHRView2Data = {
    divider: "/img/divider-2@2x.png",
    shareProject: "/img/share-project-1@2x.png",
    content10Props: content101Data,
    openedFalseColorGrayThemeLightState: openedFalseColorGrayThemeLightState1Data,
    sizemdHierarchyLinkGrayIconLeadingD: sizemdHierarchyLinkGrayIconLeadingD1Data,
    buttonProps: button2Data,
    stateDefaultProps: stateDefault3Data,
    section4Props: section42Data,
    shareProjectProps: shareProject1Data,
    frame140692Props: frame1406921Data,
    supportingTextFalseTabsFalseActions: supportingTextFalseTabsFalseActions2Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru3Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru4Data,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti23Data,
    typeLeadingTextLeadingIconFalseLabe: typeLeadingTextLeadingIconFalseLabe21Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe21Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti24Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti25Data,
    labelTrueHintTextFalseDestructiveFa: labelTrueHintTextFalseDestructiveFa31Data,
    labelTrueHintTextFalseDestructiveFa2: labelTrueHintTextFalseDestructiveFa41Data,
    labelTrueHintTextFalseDestructiveFa3: labelTrueHintTextFalseDestructiveFa42Data,
    footer2Props: footer21Data,
};

const text230Data = {
    children: "Enter your full name",
    className: "text-26",
};

const inputWithLabel41Data = {
    label: "Name*",
    className: "",
    text2Props: text230Data,
};

const typeDefaultDestructiveFalse22Data = {
    inputWithLabel4Props: inputWithLabel41Data,
};

const typeDefaultLeadingIconFalseLabelTru22Data = {
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse22Data,
};

const text231Data = {
    children: "Enter your Email",
    className: "text-27",
};

const inputWithLabel42Data = {
    label: "Email*",
    className: "input-with-label-15",
    text2Props: text231Data,
};

const typeDefaultDestructiveFalse23Data = {
    inputWithLabel4Props: inputWithLabel42Data,
};

const typeDefaultLeadingIconFalseLabelTru23Data = {
    className: "input-field-15",
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse23Data,
};

const text232Data = {
    children: "Create a password",
    className: "text-28",
};

const inputWithLabel43Data = {
    label: "Password*",
    className: "input-with-label-16",
    text2Props: text232Data,
};

const typeDefaultDestructiveFalse32Data = {
    inputWithLabel4Props: inputWithLabel43Data,
};

const typeDefaultLeadingIconFalseLabelTru32Data = {
    typeDefaultDestructiveFalse3Props: typeDefaultDestructiveFalse32Data,
};

const sizelgHierarchyPrimaryIconFalseDestData = {
    children: "Get started",
};

const socialIcon2Data = {
    src: "/img/social-icon@2x.png",
    className: "social-icon",
};

const socialGoogleSupportingTextTrueThemeData = {
    text: "Sign up with Google",
    socialIconProps: socialIcon2Data,
};

const styleButtonsThemeColorWithBrandData = {
    socialGoogleSupportingTextTrueTheme: socialGoogleSupportingTextTrueThemeData,
};

const sizemdIconFalse211Data = {
    children: "Log in",
    className: "button-base-19",
};

const sizemdHierarchyLinkColorIconFalseDe10Data = {
    className: "button-12",
    sizemdIconFalse2Props: sizemdIconFalse211Data,
};

const signUpData = {
    text1: "Create an account",
    supportingText: "To create your job post and get candidates you will need to sign in",
    text2: "Already have an account?",
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru22Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru23Data,
    typeDefaultLeadingIconFalseLabelTru3: typeDefaultLeadingIconFalseLabelTru32Data,
    sizelgHierarchyPrimaryIconFalseDest: sizelgHierarchyPrimaryIconFalseDestData,
    styleButtonsThemeColorWithBrandProp: styleButtonsThemeColorWithBrandData,
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe10Data,
};

const supportingTextTrueTabsFalseActionsF5Data = {
    children: "General Instructions",
};

const text233Data = {
    children: <>Google builds products that help create opportunities for everyone, whether they’re down the street or across the globe.<br />As a Technical Program Manager for mobile software engineering, you’ll manage the development of products that get our users the information they need, no matter where they are — including phones, tablets, TVs, wearable devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify risks, manage schedules, and communicate clearly with project stakeholders. And, thanks to Google’s industry leading benefits and ample opportunities for personal and professional development, you’ll learn and grow alongside talented teammates who share your attention to detail and appetite for problem-solving.<br />Candidates of all experience levels are encouraged to apply. We&#x27;ll consider your experience to best match you with open roles.</>,
    className: "",
};

const section6Data = {
    className: "section-5",
    text2Props: text233Data,
};

const text234Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-13",
};

const text235Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-14",
};

const section223Data = {
    text21Props: text234Data,
    text22Props: text235Data,
};

const supportingTextTrueTabsFalseActionsF6Data = {
    children: "Test overview",
};

const text236Data = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est tristique.<br />Molestie vel, consectetur leo tortor, congue. Vitae justo, amet nisl quam quam morbi sagittis risus, est. Eget aliquet proin tincidunt faucibus ac tortor fringilla cras. Condimentum eleifend consequat amet, elit diam duis proin nunc, gravida. Amet facilisis sit sit fames cursus et, scelerisque. Ut varius vitae sed feugiat donec. Cras semper turpis non nunc. Posuere maecenas fermentum eu risus. Tempus est nulla elit arcu.</>,
    className: "paragraph-15",
};

const section7Data = {
    className: "section-6",
    text2Props: text236Data,
};

const text237Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-16",
};

const text238Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-17",
};

const section224Data = {
    text21Props: text237Data,
    text22Props: text238Data,
};

const frame140162Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF6Data,
    sectionProps: section7Data,
    section22Props: section224Data,
};

const supportingTextTrueTabsFalseActionsF7Data = {
    children: "Additional notes from hiring manager",
};

const text239Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.",
    className: "paragraph-18",
};

const section8Data = {
    className: "section-7",
    text2Props: text239Data,
};

const frame140172Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF7Data,
    sectionProps: section8Data,
};

const supportingTextTrueTabsFalseActionsF8Data = {
    children: "Apply to Job",
    className: "section-header-2",
};

const text240Data = {
    children: "Enter your full name",
    className: "text-29",
};

const typeDefaultDestructiveFalse5Data = {
    label: "Full Name *",
    className: "",
    text2Props: text240Data,
};

const typeDefaultLeadingIconFalseLabelTru5Data = {
    className: "content-2",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse5Data,
};

const text241Data = {
    children: "Enter your email address",
    className: "text-30",
};

const typeDefaultDestructiveFalse6Data = {
    label: "Email *",
    className: "input-field-base-5",
    text2Props: text241Data,
};

const typeDefaultLeadingIconFalseLabelTru6Data = {
    className: "input-field-4",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse6Data,
};

const text242Data = {
    children: "Select a country",
    className: "text-31",
};

const content53Data = {
    text2Props: text242Data,
};

const labelTrueTypeDefaultStatePlaceholde3Data = {
    label: "Country",
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-2",
    content5Props: content53Data,
};

const statePlaceholderTypeDefaultSupporti3Data = {
    className: "content-2",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde3Data,
};

const typeLeadingTextDestructiveFalse23Data = {
    addOn: "/img/vector-7-4@2x.png",
    textInput: "/img/vector-7-4@2x.png",
    className: "input-field-base-13",
};

const typeLeadingTextLeadingIconFalseLabe22Data = {
    className: "input-field-12",
    typeLeadingTextDestructiveFalse2Pro: typeLeadingTextDestructiveFalse23Data,
};

const text4Data = {
    children: "Single Freelancer",
};

const content62Data = {
    textProps: text4Data,
};

const labelTrueTypeDefaultStateDefault3Data = {
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-11",
    content6Props: content62Data,
};

const stateDefaultTypeDefaultSupportingTe3Data = {
    className: "input-dropdown-5",
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault3Data,
};

const text243Data = {
    children: "Select your estimation",
    className: "text-32",
};

const content54Data = {
    text2Props: text243Data,
};

const labelTrueTypeDefaultStatePlaceholde4Data = {
    label: "Estimation to perform test*",
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-3",
    content5Props: content54Data,
};

const statePlaceholderTypeDefaultSupporti4Data = {
    className: "content-2",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde4Data,
};

const text244Data = {
    children: "Select your weekly availability",
    className: "text-33",
};

const content55Data = {
    text2Props: text244Data,
};

const labelTrueTypeDefaultStatePlaceholde5Data = {
    label: "Expected availability per week",
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-4",
    content5Props: content55Data,
};

const statePlaceholderTypeDefaultSupporti5Data = {
    className: "input-dropdown-1",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde5Data,
};

const text245Data = {
    children: "I plan to do X, then Y",
    className: "text-34",
};

const input4Data = {
    className: "input-7",
    text2Props: text245Data,
};

const inputWithLabel21Data = {
    label: "Add a description of how you plan to approach the test",
    className: "",
    inputProps: input4Data,
};

const destructiveFalse321Data = {
    inputWithLabel2Props: inputWithLabel21Data,
};

const labelTrueHintTextFalseDestructiveFa51Data = {
    destructiveFalse32Props: destructiveFalse321Data,
};

const text246Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "text-35",
};

const input5Data = {
    className: "input-8",
    text2Props: text246Data,
};

const destructiveFalse431Data = {
    inputProps: input5Data,
};

const destructiveFalse422Data = {
    inputProps: destructiveFalse431Data,
};

const labelTrueHintTextFalseDestructiveFa61Data = {
    destructiveFalse42Props: destructiveFalse422Data,
};

const text247Data = {
    children: "Ask us anything...",
    className: "text-36",
};

const input6Data = {
    className: "input-9",
    text2Props: text247Data,
};

const inputWithLabel22Data = {
    label: "Add questions if you have any",
    className: "input-with-label-23",
    inputProps: input6Data,
};

const destructiveFalse322Data = {
    inputWithLabel2Props: inputWithLabel22Data,
};

const labelTrueHintTextFalseDestructiveFa52Data = {
    className: "textarea-input-field-5",
    destructiveFalse32Props: destructiveFalse322Data,
};

const applicantDetails1Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF8Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru5Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru6Data,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti3Data,
    typeLeadingTextLeadingIconFalseLabe: typeLeadingTextLeadingIconFalseLabe22Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe3Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti4Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti5Data,
    labelTrueHintTextFalseDestructiveFa: labelTrueHintTextFalseDestructiveFa51Data,
    labelTrueHintTextFalseDestructiveFa2: labelTrueHintTextFalseDestructiveFa61Data,
    labelTrueHintTextFalseDestructiveFa3: labelTrueHintTextFalseDestructiveFa52Data,
};

const sizexlIconFalseData = {
    children: "Apply to job",
};

const sizexlHierarchyPrimaryIconFalseDestData = {
    sizexlIconFalseProps: sizexlIconFalseData,
};

const sizemdIconFalse5Data = {
    className: "",
};

const stateDefault5Data = {
    className: "button-01",
    sizemdIconFalseProps: sizemdIconFalse5Data,
};

const actions1Data = {
    stateDefaultProps: stateDefault5Data,
};

const property1AmenitiesProperty2False10Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False11Data = {
    children: "Skill #1",
    className: "select-8",
};

const property1AmenitiesProperty2False12Data = {
    children: "long skill Skill #1",
    className: "select-9",
};

const row53Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False10Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False11Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False12Data,
};

const property1AmenitiesProperty2False13Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False14Data = {
    children: "long skill Skill #1",
    className: "select-10",
};

const property1AmenitiesProperty2False15Data = {
    children: "Skill #1",
    className: "select-11",
};

const property1AmenitiesProperty2False16Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False17Data = {
    children: "Skill #1",
    className: "select-12",
};

const property1AmenitiesProperty2False18Data = {
    children: "long skill Skill #1",
    className: "select-13",
};

const row54Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False16Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False17Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False18Data,
};

const section322Data = {
    row51Props: row53Data,
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False13Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False14Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False15Data,
    row52Props: row54Data,
};

const uButtonsIconOutlineResting5Data = {
    src: "/img/users@2x.png",
    className: "",
};

const content225Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
    className: "",
};

const content75Data = {
    content22Props: content225Data,
};

const preferenceAgency3Data = {
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting5Data,
    content7Props: content75Data,
};

const uButtonsIconOutlineResting6Data = {
    src: "/img/globe@2x.png",
};

const content226Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "text-and-supporting-text-7",
};

const content76Data = {
    className: "content-19",
    content22Props: content226Data,
};

const frame140693Data = {
    preferenceAgencyProps: preferenceAgency3Data,
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting6Data,
    content7Props: content76Data,
};

const frame337602Data = {
    shareProject: "/img/share-project-2@2x.png",
    className: "frame-33760-1",
    section32Props: section322Data,
    frame14069Props: frame140693Data,
};

const scrollFloatingTitleStickyModuleSonTData = {
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/vector-7-4@2x.png",
    vector7: "/img/vector-7-4@2x.png",
    charmingAndComfort1: "Vetti",
    charmingAndComfort2: "BETA",
    divider: "/img/divider-3@1x.png",
    section: "/img/divider-3@1x.png",
    group75: "/img/group-75-1@2x.png",
    graphics: "/img/graphics@2x.png",
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF5Data,
    sectionProps: section6Data,
    section22Props: section223Data,
    frame14016Props: frame140162Data,
    frame14017Props: frame140172Data,
    applicantDetailsProps: applicantDetails1Data,
    sizexlHierarchyPrimaryIconFalseDest: sizexlHierarchyPrimaryIconFalseDestData,
    actionsProps: actions1Data,
    frame33760Props: frame337602Data,
};

const text248Data = {
    children: "Enter your full name",
    className: "text-37",
};

const typeDefaultDestructiveFalse7Data = {
    label: "Full Name *",
    className: "",
    text2Props: text248Data,
};

const typeDefaultLeadingIconFalseLabelTru7Data = {
    className: "content-2",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse7Data,
};

const text5Data = {
    children: "Guy Cohen",
    className: "text-76",
};

const selectedFalseSupportingTextFalseTyp1Data = {
    className: "",
    textProps: text5Data,
};

const typeDefaultDestructiveFalse42Data = {
    className: "",
    selectedFalseSupportingTextFalseTyp: selectedFalseSupportingTextFalseTyp1Data,
};

const typeDefaultLeadingIconFalseLabelTru42Data = {
    typeDefaultDestructiveFalse4Props: typeDefaultDestructiveFalse42Data,
};

const text6Data = {
    children: "Guy Cohen",
    className: "text-77",
};

const selectedFalseSupportingTextFalseTyp2Data = {
    className: "input-26",
    textProps: text6Data,
};

const typeDefaultDestructiveFalse43Data = {
    className: "input-field-base-18",
    selectedFalseSupportingTextFalseTyp: selectedFalseSupportingTextFalseTyp2Data,
};

const typeDefaultLeadingIconFalseLabelTru43Data = {
    typeDefaultDestructiveFalse4Props: typeDefaultDestructiveFalse43Data,
};

const text249Data = {
    children: "Guy Cohen",
    className: "text-38",
};

const typeDefaultDestructiveFalse8Data = {
    label: "Full Name *",
    className: "input-field-base-6",
    text2Props: text249Data,
};

const typeDefaultLeadingIconFalseLabelTru8Data = {
    className: "input-field-5",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse8Data,
};

const text7Data = {
    children: "Enter your full name",
    className: "text-78",
};

const typeDefaultDestructiveTrueData = {
    label: "Full Name *",
    alertCircle: "/img/alert-circle@2x.png",
    hintText: "This is a error message.",
    textProps: text7Data,
};

const typeDefaultLeadingIconFalseLabelTru52Data = {
    typeDefaultDestructiveTrueProps: typeDefaultDestructiveTrueData,
};

const text250Data = {
    children: "Enter your full name",
    className: "text-39",
};

const openFalseSupportingTextFalseTooltipData = {
    src: "/img/help-circle@2x.png",
};

const typeDefaultDestructiveFalse52Data = {
    label: "Full Name *",
    text2Props: text250Data,
    openFalseSupportingTextFalseTooltip: openFalseSupportingTextFalseTooltipData,
};

const typeDefaultLeadingIconFalseLabelTru62Data = {
    typeDefaultDestructiveFalse5Props: typeDefaultDestructiveFalse52Data,
};

const text251Data = {
    children: "Ask us anything...",
    className: "text-40",
};

const input7Data = {
    className: "input-10",
    text2Props: text251Data,
};

const inputWithLabel23Data = {
    label: "Add questions if you have any",
    className: "input-with-label-24",
    inputProps: input7Data,
};

const destructiveFalse323Data = {
    inputWithLabel2Props: inputWithLabel23Data,
};

const labelTrueHintTextFalseDestructiveFa53Data = {
    className: "textarea-input-field-6",
    destructiveFalse32Props: destructiveFalse323Data,
};

const text8Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, proin risus, massa vitae vitae, interdum odio convallis. Habitant dictum sit consectetur volutpat. Dui facilisi dolor lectus sit egestas dignissim pellentesque id vulputate. Arcu sit nulla sed fermentum, nulla tellus.",
    className: "text-79",
};

const text9Data = {
    children: "Ask us anything...",
    className: "text-80",
};

const destructiveFalse5Data = {
    label: "Add questions if you have any",
    textProps: text9Data,
};

const destructiveFalse52Data = {
    destructiveFalse5Props: destructiveFalse5Data,
};

const labelTrueHintTextFalseDestructiveFa7Data = {
    destructiveFalse52Props: destructiveFalse52Data,
};

const text252Data = {
    children: "Ask us anything...",
    className: "text-41",
};

const input8Data = {
    className: "input-11",
    text2Props: text252Data,
};

const inputWithLabel24Data = {
    label: "Add questions if you have any",
    className: "input-with-label-25",
    inputProps: input8Data,
};

const destructiveFalse324Data = {
    inputWithLabel2Props: inputWithLabel24Data,
};

const labelTrueHintTextFalseDestructiveFa54Data = {
    className: "textarea-input-field-7",
    destructiveFalse32Props: destructiveFalse324Data,
};

const text253Data = {
    children: "Ask us anything...",
    className: "text-42",
};

const input9Data = {
    className: "input-12",
    text2Props: text253Data,
};

const inputWithLabel25Data = {
    label: "Add questions if you have any",
    className: "input-with-label-26",
    inputProps: input9Data,
};

const destructiveTrueData = {
    hintText: "This is a error message.",
    inputWithLabel2Props: inputWithLabel25Data,
};

const labelTrueHintTextTrueDestructiveTruData = {
    destructiveTrueProps: destructiveTrueData,
};

const text254Data = {
    children: "Select your estimation",
    className: "text-43",
};

const content56Data = {
    text2Props: text254Data,
};

const labelTrueTypeDefaultStatePlaceholde6Data = {
    label: "Estimation to perform test*",
    chevronDown: "/img/chevron-down@2x.png",
    className: "input-dropdown-base-5",
    content5Props: content56Data,
};

const statePlaceholderTypeDefaultSupporti6Data = {
    className: "input-dropdown-2",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde6Data,
};

const text10Data = {
    children: "1-2 hours",
    className: "text-81",
};

const selectedTrueSupportingTextFalseType1Data = {
    chevronDown: "/img/chevron-down@2x.png",
    className: "",
    textProps: text10Data,
};

const labelTrueTypeDefaultStateDefault32Data = {
    label: "Estimation to perform test*",
    selectedTrueSupportingTextFalseType: selectedTrueSupportingTextFalseType1Data,
};

const stateDefaultTypeDefaultSupportingTe32Data = {
    labelTrueTypeDefaultStateDefault3Pr: labelTrueTypeDefaultStateDefault32Data,
};

const text11Data = {
    children: "Select your estimation",
    className: "text-82",
};

const selectedTrueSupportingTextFalseType2Data = {
    chevronDown: "/img/chevron-up@2x.png",
    className: "input-31",
    textProps: text11Data,
};

const labelTrueTypeDefaultStateDefault33Data = {
    label: "Estimation to perform test*",
    className: "input-dropdown-base-24",
    selectedTrueSupportingTextFalseType: selectedTrueSupportingTextFalseType2Data,
};

const text12Data = {
    children: "Less than 1 hour",
    className: "text-83",
};

const selectedTrueSupportingTextFalseType3Data = {
    chevronDown: "/img/check@2x.png",
    className: "input-dropdown-menu-item-7",
    textProps: text12Data,
};

const text13Data = {
    children: "1-2 hours",
    className: "text-84",
};

const selectedFalseSupportingTextFalseTyp3Data = {
    className: "input-dropdown-menu-item",
    textProps: text13Data,
};

const text14Data = {
    children: " 2-3 hours",
    className: "text-85",
};

const selectedFalseSupportingTextFalseTyp4Data = {
    className: "input-dropdown-menu-item-1",
    textProps: text14Data,
};

const text15Data = {
    children: "Over 3 hours",
    className: "text-86",
};

const selectedFalseSupportingTextFalseTyp5Data = {
    className: "input-dropdown-menu-item-2",
    textProps: text15Data,
};

const typeDefaultSupportingTextFalseScrolData = {
    selectedTrueSupportingTextFalseType: selectedTrueSupportingTextFalseType3Data,
    selectedFalseSupportingTextFalseTyp: selectedFalseSupportingTextFalseTyp3Data,
    selectedFalseSupportingTextFalseTyp2: selectedFalseSupportingTextFalseTyp4Data,
    selectedFalseSupportingTextFalseTyp3: selectedFalseSupportingTextFalseTyp5Data,
};

const stateOpenfocusedTypeDefaultSupportiData = {
    labelTrueTypeDefaultStateDefault3Pr: labelTrueTypeDefaultStateDefault33Data,
    typeDefaultSupportingTextFalseScrol: typeDefaultSupportingTextFalseScrolData,
};

const text16Data = {
    children: "Select your weekly availability",
    className: "text-87",
};

const selectedTrueSupportingTextFalseType4Data = {
    chevronDown: "/img/chevron-up@2x.png",
    className: "input-32",
    textProps: text16Data,
};

const labelTrueTypeDefaultStateDefault34Data = {
    label: "Expected availability per week",
    className: "input-dropdown-base-25",
    selectedTrueSupportingTextFalseType: selectedTrueSupportingTextFalseType4Data,
};

const text17Data = {
    children: "Less than 10 hours",
    className: "text-88",
};

const selectedTrueSupportingTextFalseType5Data = {
    chevronDown: "/img/check@2x.png",
    className: "input-dropdown-menu-item-8",
    textProps: text17Data,
};

const text18Data = {
    children: "10-20 hours",
    className: "text-89",
};

const selectedFalseSupportingTextFalseTyp6Data = {
    className: "input-dropdown-menu-item-3",
    textProps: text18Data,
};

const text19Data = {
    children: "20-30 hours",
    className: "text-90",
};

const selectedFalseSupportingTextFalseTyp7Data = {
    className: "input-dropdown-menu-item-4",
    textProps: text19Data,
};

const text20Data = {
    children: "30-40 hours",
    className: "text-91",
};

const selectedFalseSupportingTextFalseTyp8Data = {
    className: "input-dropdown-menu-item-5",
    textProps: text20Data,
};

const selectedFalseSupportingTextFalseTyp9Data = {
    className: "input-dropdown-menu-item-6",
    textProps: text21Data,
};

const typeDefaultSupportingTextFalseScrol2Data = {
    selectedTrueSupportingTextFalseType: selectedTrueSupportingTextFalseType5Data,
    selectedFalseSupportingTextFalseTyp: selectedFalseSupportingTextFalseTyp6Data,
    selectedFalseSupportingTextFalseTyp2: selectedFalseSupportingTextFalseTyp7Data,
    selectedFalseSupportingTextFalseTyp3: selectedFalseSupportingTextFalseTyp8Data,
    selectedFalseSupportingTextFalseTyp4: selectedFalseSupportingTextFalseTyp9Data,
};

const stateOpenfocusedTypeDefaultSupporti2Data = {
    labelTrueTypeDefaultStateDefault3Pr: labelTrueTypeDefaultStateDefault34Data,
    typeDefaultSupportingTextFalseScrol: typeDefaultSupportingTextFalseScrol2Data,
};

const inputsStatesData = {
    label1: "Placeholder",
    label2: "Filled",
    label3: "Focused",
    label4: "Disabled",
    label5: "Error",
    label6: "With help icon",
    label7: "Placeholder",
    label8: "Filled",
    label9: "Focused",
    label10: "Disabled",
    label11: "Error",
    label12: "Add questions if you have any",
    line1: "/img/line-1@1x.png",
    tooltip: "/img/tooltip@2x.png",
    button: "/img/button@2x.png",
    preference: "/img/preference@2x.png",
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru7Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru42Data,
    typeDefaultLeadingIconFalseLabelTru3: typeDefaultLeadingIconFalseLabelTru43Data,
    typeDefaultLeadingIconFalseLabelTru4: typeDefaultLeadingIconFalseLabelTru8Data,
    typeDefaultLeadingIconFalseLabelTru5: typeDefaultLeadingIconFalseLabelTru52Data,
    typeDefaultLeadingIconFalseLabelTru6: typeDefaultLeadingIconFalseLabelTru62Data,
    labelTrueHintTextFalseDestructiveFa: labelTrueHintTextFalseDestructiveFa53Data,
    textProps: text8Data,
    labelTrueHintTextFalseDestructiveFa2: labelTrueHintTextFalseDestructiveFa7Data,
    labelTrueHintTextFalseDestructiveFa3: labelTrueHintTextFalseDestructiveFa54Data,
    labelTrueHintTextTrueDestructiveTru: labelTrueHintTextTrueDestructiveTruData,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti6Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe32Data,
    stateOpenfocusedTypeDefaultSupporti: stateOpenfocusedTypeDefaultSupportiData,
    stateOpenfocusedTypeDefaultSupporti2: stateOpenfocusedTypeDefaultSupporti2Data,
};

const frame34Data = {
    vector7: "/img/vector-7-2@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1-2@2x.png",
    className: "",
};

const companyLogo3Data = {
    frame3Props: frame34Data,
};

const content112Data = {
    className: "content-48",
};

const socialIcon3Data = {
    src: "/img/menu-2@2x.png",
};

const openedFalseColorGrayThemeLightState2Data = {
    className: "application-nav-menu-button-1",
    socialIconProps: socialIcon3Data,
};

const textAndSupportingText22Data = {
    className: "text-and-supporting-text-13",
};

const sizemdIconFalse6Data = {
    className: "",
};

const stateDefault6Data = {
    className: "button-6",
    sizemdIconFalseProps: sizemdIconFalse6Data,
};

const actions2Data = {
    className: "actions-7",
    stateDefaultProps: stateDefault6Data,
};

const supportingTextFalseTabsFalseActions3Data = {
    children: "Job Description",
};

const text255Data = {
    children: <>Google builds products that help create opportunities for everyone, whether they’re down the street or across the globe.<br />As a Technical Program Manager for mobile software engineering, you’ll manage the development of products that get our users the information they need, no matter where they are — including phones, tablets, TVs, wearable devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify risks, manage schedules, and communicate clearly with project stakeholders. And, thanks to Google’s industry leading benefits and ample opportunities for personal and professional development, you’ll learn and grow alongside talented teammates who share your attention to detail and appetite for problem-solving.<br />Candidates of all experience levels are encouraged to apply. We&#x27;ll consider your experience to best match you with open roles.</>,
    className: "paragraph-19",
};

const section9Data = {
    className: "section-8",
    text2Props: text255Data,
};

const text256Data = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est tristique.<br />Molestie vel, consectetur leo tortor, congue. Vitae justo, amet nisl quam quam morbi sagittis risus, est. Eget aliquet proin tincidunt faucibus ac tortor fringilla cras. Condimentum eleifend consequat amet, elit diam duis proin nunc, gravida. Amet facilisis sit sit fames cursus et, scelerisque. Ut varius vitae sed feugiat donec. Cras semper turpis non nunc. Posuere maecenas fermentum eu risus. Tempus est nulla elit arcu.</>,
    className: "paragraph-20",
};

const section53Data = {
    text2Props: text256Data,
};

const text257Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-21",
};

const text258Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-22",
};

const text259Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.",
    className: "paragraph-23",
};

const section54Data = {
    className: "section-31",
    text2Props: text259Data,
};

const section43Data = {
    className: "section-28",
    supportingTextFalseTabsFalseActions: supportingTextFalseTabsFalseActions3Data,
    sectionProps: section9Data,
    section51Props: section53Data,
    text21Props: text257Data,
    text22Props: text258Data,
    section52Props: section54Data,
};

const property1AmenitiesProperty2False211Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False212Data = {
    children: "Skill #1",
    className: "select-34",
};

const property1AmenitiesProperty2False213Data = {
    children: "long skill Skill #1",
    className: "select-35",
};

const row524Data = {
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False211Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False212Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False213Data,
};

const property1AmenitiesProperty2False214Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False215Data = {
    children: "long skill Skill #1",
    className: "select-36",
};

const property1AmenitiesProperty2False216Data = {
    children: "Skill #1",
    className: "select-37",
};

const property1AmenitiesProperty2False217Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False218Data = {
    children: "Skill #1",
    className: "select-38",
};

const property1AmenitiesProperty2False219Data = {
    children: "long skill Skill #1",
    className: "select-39",
};

const row525Data = {
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False217Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False218Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False219Data,
};

const shareProject2Data = {
    className: "share-project-4",
    row521Props: row524Data,
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False214Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False215Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False216Data,
    row522Props: row525Data,
};

const uButtonsIconOutlineResting7Data = {
    src: "/img/users@2x.png",
    className: "u-buttons-icon-outline-resting-4",
};

const content227Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
    className: "",
};

const content77Data = {
    content22Props: content227Data,
};

const preferenceAgency4Data = {
    className: "preference-2",
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting7Data,
    content7Props: content77Data,
};

const uButtonsIconOutlineResting8Data = {
    src: "/img/globe@2x.png",
    className: "u-buttons-icon-outline-resting-5",
};

const content228Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "text-and-supporting-text-8",
};

const content78Data = {
    className: "content-20",
    content22Props: content228Data,
};

const frame1406922Data = {
    preferenceAgencyProps: preferenceAgency4Data,
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting8Data,
    content7Props: content78Data,
};

const supportingTextFalseTabsFalseActions4Data = {
    children: "Apply to Job",
    className: "section-header-7",
};

const text260Data = {
    children: "Enter your full name",
    className: "text-44",
};

const typeDefaultDestructiveFalse9Data = {
    label: "Full Name *",
    className: "input-field-base-7",
    text2Props: text260Data,
};

const typeDefaultLeadingIconFalseLabelTru9Data = {
    className: "input-field-6",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse9Data,
};

const text261Data = {
    children: "Enter your email address",
    className: "text-45",
};

const typeDefaultDestructiveFalse10Data = {
    label: "Email *",
    className: "input-field-base-8",
    text2Props: text261Data,
};

const typeDefaultLeadingIconFalseLabelTru10Data = {
    className: "input-field-7",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse10Data,
};

const text262Data = {
    children: "Select a country",
    className: "text-46",
};

const labelTrueTypeDefaultStatePlaceholde26Data = {
    label: "Country",
    className: "input-dropdown-base-17",
    text2Props: text262Data,
};

const statePlaceholderTypeDefaultSupporti26Data = {
    className: "input-dropdown-11",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde26Data,
};

const typeLeadingTextDestructiveFalse24Data = {
    addOn: "/img/add-on@2x.png",
    textInput: "/img/text-input-1@2x.png",
    className: "",
};

const typeLeadingTextLeadingIconFalseLabe23Data = {
    typeLeadingTextDestructiveFalse2Pro: typeLeadingTextDestructiveFalse24Data,
};

const text30Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault22Data = {
    textProps: text30Data,
};

const stateDefaultTypeDefaultSupportingTe22Data = {
    labelTrueTypeDefaultStateDefault2Pr: labelTrueTypeDefaultStateDefault22Data,
};

const text263Data = {
    children: "Select your estimation",
    className: "text-47",
};

const labelTrueTypeDefaultStatePlaceholde27Data = {
    label: "Estimation to perform test*",
    className: "input-dropdown-base-18",
    text2Props: text263Data,
};

const statePlaceholderTypeDefaultSupporti27Data = {
    className: "input-dropdown-12",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde27Data,
};

const text264Data = {
    children: "Select your weekly availability",
    className: "text-48",
};

const labelTrueTypeDefaultStatePlaceholde28Data = {
    label: "Expected availability per week",
    className: "input-dropdown-base-19",
    text2Props: text264Data,
};

const statePlaceholderTypeDefaultSupporti28Data = {
    className: "input-dropdown-13",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde28Data,
};

const text265Data = {
    children: "I plan to do X, then Y",
    className: "text-49",
};

const input25Data = {
    text2Props: text265Data,
};

const destructiveFalse232Data = {
    className: "input-with-label-12",
    input2Props: input25Data,
};

const destructiveFalse223Data = {
    input2Props: destructiveFalse232Data,
};

const labelTrueHintTextFalseDestructiveFa32Data = {
    destructiveFalse22Props: destructiveFalse223Data,
};

const text266Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "text-50",
};

const input26Data = {
    className: "input-21",
    text2Props: text266Data,
};

const destructiveFalse44Data = {
    label: "/img/label-4@2x.png",
    className: "textarea-input-field-base-8",
    input2Props: input26Data,
};

const labelTrueHintTextFalseDestructiveFa43Data = {
    destructiveFalse4Props: destructiveFalse44Data,
};

const text267Data = {
    children: "Ask us anything...",
    className: "text-51",
};

const input27Data = {
    className: "input-22",
    text2Props: text267Data,
};

const destructiveFalse45Data = {
    label: "/img/label-2@2x.png",
    className: "textarea-input-field-base-9",
    input2Props: input27Data,
};

const labelTrueHintTextFalseDestructiveFa44Data = {
    destructiveFalse4Props: destructiveFalse45Data,
};

const sizemdIconFalse7Data = {
    className: "button-base-5",
};

const stateDefault7Data = {
    className: "button-7",
    sizemdIconFalseProps: sizemdIconFalse7Data,
};

const footer22Data = {
    className: "footer-2",
    stateDefaultProps: stateDefault7Data,
};

const publicWebPageCandidateViewData = {
    divider: "/img/divider-2@2x.png",
    companyLogoProps: companyLogo3Data,
    content11Props: content112Data,
    openedFalseColorGrayThemeLightState: openedFalseColorGrayThemeLightState2Data,
    textAndSupportingText2Props: textAndSupportingText22Data,
    actionsProps: actions2Data,
    section4Props: section43Data,
    shareProjectProps: shareProject2Data,
    frame140692Props: frame1406922Data,
    supportingTextFalseTabsFalseActions: supportingTextFalseTabsFalseActions4Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru9Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru10Data,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti26Data,
    typeLeadingTextLeadingIconFalseLabe: typeLeadingTextLeadingIconFalseLabe23Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe22Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti27Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti28Data,
    labelTrueHintTextFalseDestructiveFa: labelTrueHintTextFalseDestructiveFa32Data,
    labelTrueHintTextFalseDestructiveFa2: labelTrueHintTextFalseDestructiveFa43Data,
    labelTrueHintTextFalseDestructiveFa3: labelTrueHintTextFalseDestructiveFa44Data,
    footer2Props: footer22Data,
};

const frame35Data = {
    vector7: "/img/vector-7-6@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1-6@2x.png",
    className: "",
};

const companyLogo4Data = {
    frame3Props: frame35Data,
};

const content24Data = {
    className: "content-7",
    companyLogoProps: companyLogo4Data,
};

const content102Data = {
    className: "content-36",
    content2Props: content24Data,
};

const textAndSupportingText32Data = {
    className: "",
};

const sizemdIconFalse8Data = {
    className: "",
};

const stateDefault8Data = {
    sizemdIconFalseProps: sizemdIconFalse8Data,
};

const heading1Data = {
    textAndSupportingText3Props: textAndSupportingText32Data,
    stateDefaultProps: stateDefault8Data,
};

const property1AmenitiesProperty2False19Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False20Data = {
    children: "Skill #1",
    className: "select-14",
};

const property1AmenitiesProperty2False21Data = {
    children: "long skill Skill #1",
    className: "select-15",
};

const row55Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False19Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False20Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False21Data,
};

const property1AmenitiesProperty2False30Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False31Data = {
    children: "long skill Skill #1",
    className: "select-16",
};

const property1AmenitiesProperty2False32Data = {
    children: "Skill #1",
    className: "select-17",
};

const property1AmenitiesProperty2False33Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False34Data = {
    children: "Skill #1",
    className: "select-18",
};

const property1AmenitiesProperty2False35Data = {
    children: "long skill Skill #1",
    className: "select-19",
};

const row56Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False33Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False34Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False35Data,
};

const section323Data = {
    className: "section-16",
    row51Props: row55Data,
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False30Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False31Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False32Data,
    row52Props: row56Data,
};

const uButtonsIconOutlineResting9Data = {
    src: "/img/users@2x.png",
    className: "",
};

const content229Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
    className: "",
};

const content79Data = {
    content22Props: content229Data,
};

const preferenceAgency5Data = {
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting9Data,
    content7Props: content79Data,
};

const uButtonsIconOutlineResting10Data = {
    src: "/img/globe@2x.png",
};

const content2210Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "text-and-supporting-text-9",
};

const content710Data = {
    className: "content-21",
    content22Props: content2210Data,
};

const frame140694Data = {
    className: "frame-14069-3",
    preferenceAgencyProps: preferenceAgency5Data,
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting10Data,
    content7Props: content710Data,
};

const supportingTextTrueTabsFalseActionsF9Data = {
    children: "General Instructions",
};

const text268Data = {
    children: <>Google builds products that help create opportunities for everyone, whether they’re down the street or across the globe.<br />As a Technical Program Manager for mobile software engineering, you’ll manage the development of products that get our users the information they need, no matter where they are — including phones, tablets, TVs, wearable devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify risks, manage schedules, and communicate clearly with project stakeholders. And, thanks to Google’s industry leading benefits and ample opportunities for personal and professional development, you’ll learn and grow alongside talented teammates who share your attention to detail and appetite for problem-solving.<br />Candidates of all experience levels are encouraged to apply. We&#x27;ll consider your experience to best match you with open roles.</>,
    className: "",
};

const section10Data = {
    text2Props: text268Data,
};

const text269Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-24",
};

const text270Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-25",
};

const section225Data = {
    text21Props: text269Data,
    text22Props: text270Data,
};

const frame140152Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF9Data,
    sectionProps: section10Data,
    section22Props: section225Data,
};

const supportingTextTrueTabsFalseActionsF10Data = {
    children: "Test overview",
};

const text271Data = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est tristique.<br />Molestie vel, consectetur leo tortor, congue. Vitae justo, amet nisl quam quam morbi sagittis risus, est. Eget aliquet proin tincidunt faucibus ac tortor fringilla cras. Condimentum eleifend consequat amet, elit diam duis proin nunc, gravida. Amet facilisis sit sit fames cursus et, scelerisque. Ut varius vitae sed feugiat donec. Cras semper turpis non nunc. Posuere maecenas fermentum eu risus. Tempus est nulla elit arcu.</>,
    className: "paragraph-26",
};

const section11Data = {
    className: "section-9",
    text2Props: text271Data,
};

const text272Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-27",
};

const text273Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-28",
};

const section226Data = {
    text21Props: text272Data,
    text22Props: text273Data,
};

const frame140163Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF10Data,
    sectionProps: section11Data,
    section22Props: section226Data,
};

const supportingTextTrueTabsFalseActionsF11Data = {
    children: "Additional notes from hiring manager",
};

const text274Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.",
    className: "paragraph-29",
};

const section12Data = {
    className: "section-10",
    text2Props: text274Data,
};

const frame140173Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF11Data,
    sectionProps: section12Data,
};

const supportingTextTrueTabsFalseActionsF12Data = {
    children: "Apply to Job",
    className: "section-header-3",
};

const text275Data = {
    children: "Enter your full name",
    className: "text-52",
};

const typeDefaultDestructiveFalse11Data = {
    label: "Full Name *",
    className: "",
    text2Props: text275Data,
};

const typeDefaultLeadingIconFalseLabelTru11Data = {
    className: "content-2",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse11Data,
};

const text276Data = {
    children: "Enter your email address",
    className: "text-53",
};

const typeDefaultDestructiveFalse12Data = {
    label: "Email *",
    className: "input-field-base-9",
    text2Props: text276Data,
};

const typeDefaultLeadingIconFalseLabelTru12Data = {
    className: "input-field-8",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse12Data,
};

const text277Data = {
    children: "Select a country",
    className: "text-54",
};

const content57Data = {
    text2Props: text277Data,
};

const labelTrueTypeDefaultStatePlaceholde7Data = {
    label: "Country",
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-6",
    content5Props: content57Data,
};

const statePlaceholderTypeDefaultSupporti7Data = {
    className: "content-2",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde7Data,
};

const typeLeadingTextDestructiveFalse25Data = {
    addOn: "/img/vector-7-4@2x.png",
    textInput: "/img/vector-7-4@2x.png",
    className: "input-field-base-14",
};

const typeLeadingTextLeadingIconFalseLabe24Data = {
    className: "input-field-13",
    typeLeadingTextDestructiveFalse2Pro: typeLeadingTextDestructiveFalse25Data,
};

const text31Data = {
    children: "Single Freelancer",
};

const content63Data = {
    textProps: text31Data,
};

const labelTrueTypeDefaultStateDefault4Data = {
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-12",
    content6Props: content63Data,
};

const stateDefaultTypeDefaultSupportingTe4Data = {
    className: "input-dropdown-6",
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault4Data,
};

const text278Data = {
    children: "Select your estimation",
    className: "text-55",
};

const content58Data = {
    text2Props: text278Data,
};

const labelTrueTypeDefaultStatePlaceholde8Data = {
    label: "Estimation to perform test*",
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-7",
    content5Props: content58Data,
};

const statePlaceholderTypeDefaultSupporti8Data = {
    className: "content-2",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde8Data,
};

const text279Data = {
    children: "Select your weekly availability",
    className: "text-56",
};

const content59Data = {
    text2Props: text279Data,
};

const labelTrueTypeDefaultStatePlaceholde9Data = {
    label: "Expected availability per week",
    chevronDown: "/img/vector-7-4@2x.png",
    className: "input-dropdown-base-8",
    content5Props: content59Data,
};

const statePlaceholderTypeDefaultSupporti9Data = {
    className: "input-dropdown-3",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde9Data,
};

const text280Data = {
    children: "I plan to do X, then Y",
    className: "text-57",
};

const input10Data = {
    className: "input-13",
    text2Props: text280Data,
};

const inputWithLabel26Data = {
    label: "Add a description of how you plan to approach the test",
    className: "",
    inputProps: input10Data,
};

const destructiveFalse325Data = {
    inputWithLabel2Props: inputWithLabel26Data,
};

const labelTrueHintTextFalseDestructiveFa55Data = {
    destructiveFalse32Props: destructiveFalse325Data,
};

const text281Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "text-58",
};

const input11Data = {
    className: "input-14",
    text2Props: text281Data,
};

const destructiveFalse432Data = {
    inputProps: input11Data,
};

const destructiveFalse423Data = {
    inputProps: destructiveFalse432Data,
};

const labelTrueHintTextFalseDestructiveFa62Data = {
    destructiveFalse42Props: destructiveFalse423Data,
};

const text282Data = {
    children: "Ask us anything...",
    className: "text-59",
};

const input12Data = {
    className: "input-15",
    text2Props: text282Data,
};

const inputWithLabel27Data = {
    label: "Add questions if you have any",
    className: "input-with-label-28",
    inputProps: input12Data,
};

const destructiveFalse326Data = {
    inputWithLabel2Props: inputWithLabel27Data,
};

const labelTrueHintTextFalseDestructiveFa56Data = {
    className: "textarea-input-field-8",
    destructiveFalse32Props: destructiveFalse326Data,
};

const applicantDetails2Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF12Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru11Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru12Data,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti7Data,
    typeLeadingTextLeadingIconFalseLabe: typeLeadingTextLeadingIconFalseLabe24Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe4Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti8Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti9Data,
    labelTrueHintTextFalseDestructiveFa: labelTrueHintTextFalseDestructiveFa55Data,
    labelTrueHintTextFalseDestructiveFa2: labelTrueHintTextFalseDestructiveFa62Data,
    labelTrueHintTextFalseDestructiveFa3: labelTrueHintTextFalseDestructiveFa56Data,
};

const sizemdIconFalse9Data = {
    className: "button-base-6",
};

const stateDefault9Data = {
    className: "button-8",
    sizemdIconFalseProps: sizemdIconFalse9Data,
};

const footer3Data = {
    stateDefaultProps: stateDefault9Data,
};

const sizelgIconFalse22Data = {
    children: "Close this page",
};

const sizelgHierarchySecondaryGrayIconFalData = {
    sizelgIconFalse2Props: sizelgIconFalse22Data,
};

const typeHorizontalFillContainerActions2Data = {
    sizelgHierarchySecondaryGrayIconFal: sizelgHierarchySecondaryGrayIconFalData,
};

const publicWebPageThankYouData = {
    divider: "/img/divider@1x.png",
    group75: "/img/group-75-1@2x.png",
    element: "/img/element@2x.png",
    text: "Thank you!",
    supportingText: "Thank you for taking the time to apply for this position. You will be contacted by email as soon as possible.",
    graphics: "/img/graphics@2x.png",
    content10Props: content102Data,
    headingProps: heading1Data,
    section32Props: section323Data,
    frame14069Props: frame140694Data,
    frame14015Props: frame140152Data,
    frame14016Props: frame140163Data,
    frame14017Props: frame140173Data,
    applicantDetailsProps: applicantDetails2Data,
    footerProps: footer3Data,
    typeHorizontalFillContainerActions2: typeHorizontalFillContainerActions2Data,
};

const frame36Data = {
    vector7: "/img/vector-7-6@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/search@2x.png",
    className: "frame-3-2",
};

const content322Data = {
    frame3Props: frame36Data,
};

const content82Data = {
    className: "content-25",
    content32Props: content322Data,
};

const textAndSupportingText33Data = {
    className: "text-and-supporting-text-18",
};

const sizemdIconFalse10Data = {
    className: "",
};

const stateDefault10Data = {
    sizemdIconFalseProps: sizemdIconFalse10Data,
};

const heading2Data = {
    className: "heading-7",
    textAndSupportingText3Props: textAndSupportingText33Data,
    stateDefaultProps: stateDefault10Data,
};

const supportingTextTrueTabsFalseActionsF13Data = {
    children: "Job Description",
};

const text283Data = {
    children: <>Google builds products that help create opportunities for everyone, whether they’re down the street or across the globe.<br />As a Technical Program Manager for mobile software engineering, you’ll manage the development of products that get our users the information they need, no matter where they are — including phones, tablets, TVs, wearable devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify risks, manage schedules, and communicate clearly with project stakeholders. And, thanks to Google’s industry leading benefits and ample opportunities for personal and professional development, you’ll learn and grow alongside talented teammates who share your attention to detail and appetite for problem-solving.<br />Candidates of all experience levels are encouraged to apply. We&#x27;ll consider your experience to best match you with open roles.</>,
    className: "",
};

const section13Data = {
    text2Props: text283Data,
};

const text284Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-30",
};

const text285Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-31",
};

const section227Data = {
    text21Props: text284Data,
    text22Props: text285Data,
};

const frame140153Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF13Data,
    sectionProps: section13Data,
    section22Props: section227Data,
};

const supportingTextTrueTabsFalseActionsF14Data = {
    children: "Screening Test (Paid)",
};

const text286Data = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est tristique.<br />Molestie vel, consectetur leo tortor, congue. Vitae justo, amet nisl quam quam morbi sagittis risus, est. Eget aliquet proin tincidunt faucibus ac tortor fringilla cras. Condimentum eleifend consequat amet, elit diam duis proin nunc, gravida. Amet facilisis sit sit fames cursus et, scelerisque. Ut varius vitae sed feugiat donec. Cras semper turpis non nunc. Posuere maecenas fermentum eu risus. Tempus est nulla elit arcu.</>,
    className: "paragraph-32",
};

const section14Data = {
    className: "section-11",
    text2Props: text286Data,
};

const text287Data = {
    children: "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.",
    className: "paragraph-33",
};

const text288Data = {
    children: <>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br />Non pellentesque congue eget consectetur turpis.<br />Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</>,
    className: "paragraph-34",
};

const section228Data = {
    text21Props: text287Data,
    text22Props: text288Data,
};

const frame140164Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF14Data,
    sectionProps: section14Data,
    section22Props: section228Data,
};

const supportingTextTrueTabsFalseActionsF15Data = {
    children: "Additional Notes",
};

const text289Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt. Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc, condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam. Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.",
    className: "paragraph-35",
};

const section15Data = {
    className: "section-12",
    text2Props: text289Data,
};

const frame140174Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF15Data,
    sectionProps: section15Data,
};

const supportingTextTrueTabsFalseActionsF16Data = {
    children: "Apply to Job",
};

const text290Data = {
    children: "Enter your full name",
    className: "text-60",
};

const typeDefaultDestructiveFalse13Data = {
    label: "Full Name *",
    className: "",
    text2Props: text290Data,
};

const typeDefaultLeadingIconFalseLabelTru13Data = {
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse13Data,
};

const text291Data = {
    children: "Enter your email address",
    className: "text-61",
};

const typeDefaultDestructiveFalse14Data = {
    label: "Email *",
    className: "input-field-base-10",
    text2Props: text291Data,
};

const typeDefaultLeadingIconFalseLabelTru14Data = {
    className: "input-field-9",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse14Data,
};

const text292Data = {
    children: "Select a country",
    className: "text-62",
};

const content510Data = {
    text2Props: text292Data,
};

const labelTrueTypeDefaultStatePlaceholde10Data = {
    label: "Country",
    chevronDown: "/img/chevron-down@2x.png",
    className: "",
    content5Props: content510Data,
};

const statePlaceholderTypeDefaultSupporti10Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde10Data,
};

const text32Data = {
    children: "Single Freelancer",
};

const content64Data = {
    textProps: text32Data,
};

const labelTrueTypeDefaultStateDefault5Data = {
    chevronDown: "/img/chevron-down@2x.png",
    className: "",
    content6Props: content64Data,
};

const stateDefaultTypeDefaultSupportingTe5Data = {
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault5Data,
};

const text293Data = {
    children: "Select your estimation",
    className: "text-63",
};

const content511Data = {
    text2Props: text293Data,
};

const labelTrueTypeDefaultStatePlaceholde11Data = {
    label: "Estimation to perform test*",
    chevronDown: "/img/chevron-down@2x.png",
    className: "input-dropdown-base-9",
    content5Props: content511Data,
};

const statePlaceholderTypeDefaultSupporti11Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde11Data,
};

const text294Data = {
    children: "Select your weekly availability",
    className: "text-64",
};

const labelTrueTypeDefaultStatePlaceholde29Data = {
    label: "Expected availability per week",
    className: "",
    text2Props: text294Data,
};

const statePlaceholderTypeDefaultSupporti29Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde29Data,
};

const text295Data = {
    children: "I plan to do X, then Y",
    className: "text-65",
};

const input13Data = {
    text2Props: text295Data,
};

const destructiveFalse3Data = {
    className: "input-with-label-7",
    inputProps: input13Data,
};

const destructiveFalse622Data = {
    inputProps: destructiveFalse3Data,
};

const labelTrueHintTextFalseDestructiveFa8Data = {
    destructiveFalse62Props: destructiveFalse622Data,
};

const text296Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "text-66",
};

const input14Data = {
    text2Props: text296Data,
};

const destructiveFalse24Data = {
    label: "/img/label-1@2x.png",
    className: "textarea-input-field-base-3",
    inputProps: input14Data,
};

const labelTrueHintTextFalseDestructiveFa23Data = {
    destructiveFalse2Props: destructiveFalse24Data,
};

const text297Data = {
    children: "Ask us anything...",
    className: "text-67",
};

const input15Data = {
    text2Props: text297Data,
};

const destructiveFalse25Data = {
    label: "/img/label-2@2x.png",
    className: "textarea-input-field-base-4",
    inputProps: input15Data,
};

const labelTrueHintTextFalseDestructiveFa24Data = {
    destructiveFalse2Props: destructiveFalse25Data,
};

const sizemdIconFalse11Data = {
    className: "button-base-7",
};

const stateDefault11Data = {
    className: "button-9",
    sizemdIconFalseProps: sizemdIconFalse11Data,
};

const footer4Data = {
    stateDefaultProps: stateDefault11Data,
};

const property1AmenitiesProperty2False36Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False37Data = {
    children: "Skill #1",
    className: "select-20",
};

const property1AmenitiesProperty2False38Data = {
    children: "long skill Skill #1",
    className: "select-21",
};

const row57Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False36Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False37Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False38Data,
};

const property1AmenitiesProperty2False39Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False40Data = {
    children: "long skill Skill #1",
    className: "select-22",
};

const property1AmenitiesProperty2False41Data = {
    children: "Skill #1",
    className: "select-23",
};

const property1AmenitiesProperty2False42Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False43Data = {
    children: "Skill #1",
    className: "select-24",
};

const property1AmenitiesProperty2False44Data = {
    children: "long skill Skill #1",
    className: "select-25",
};

const row58Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False42Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False43Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False44Data,
};

const section324Data = {
    className: "section-17",
    row51Props: row57Data,
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False39Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False40Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False41Data,
    row52Props: row58Data,
};

const uButtonsIconOutlineResting11Data = {
    src: "/img/users@2x.png",
    className: "",
};

const content2211Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
    className: "",
};

const content711Data = {
    content22Props: content2211Data,
};

const preferenceAgency6Data = {
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting11Data,
    content7Props: content711Data,
};

const uButtonsIconOutlineResting12Data = {
    src: "/img/globe@2x.png",
};

const content2212Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "text-and-supporting-text-10",
};

const content712Data = {
    className: "content-22",
    content22Props: content2212Data,
};

const frame140695Data = {
    preferenceAgencyProps: preferenceAgency6Data,
    uButtonsIconOutlineRestingProps: uButtonsIconOutlineResting12Data,
    content7Props: content712Data,
};

const publicWebPageCandidateView2Data = {
    divider: "/img/divider@1x.png",
    group75: "/img/group-75-1@2x.png",
    graphics: "/img/graphics@2x.png",
    content8Props: content82Data,
    headingProps: heading2Data,
    frame14015Props: frame140153Data,
    frame14016Props: frame140164Data,
    frame14017Props: frame140174Data,
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF16Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru13Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru14Data,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti10Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe5Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti11Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti29Data,
    labelTrueHintTextFalseDestructiveFa: labelTrueHintTextFalseDestructiveFa8Data,
    labelTrueHintTextFalseDestructiveFa2: labelTrueHintTextFalseDestructiveFa23Data,
    labelTrueHintTextFalseDestructiveFa3: labelTrueHintTextFalseDestructiveFa24Data,
    footerProps: footer4Data,
    section32Props: section324Data,
    frame14069Props: frame140695Data,
};

const frame37Data = {
    vector7: "/img/vector-7-8@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1-7@2x.png",
    className: "frame-3-3",
};

const companyLogo5Data = {
    frame3Props: frame37Data,
};

const content25Data = {
    className: "content-8",
    companyLogoProps: companyLogo5Data,
};

const content103Data = {
    className: "content-37",
    content2Props: content25Data,
};

const text298Data = {
    children: "Search",
    className: "text-68",
};

const labelFalseTypeSearchStatePlaceholdeData = {
    search: "/img/search-1@2x.png",
    text2Props: text298Data,
};

const statePlaceholderTypeSearchSupportinData = {
    labelFalseTypeSearchStatePlaceholde: labelFalseTypeSearchStatePlaceholdeData,
};

const socialIcon4Data = {
    src: "/img/home@2x.png",
    className: "home",
};

const currentFalseBadgeFalseToggleFalseIc2Data = {
    text: "Job Posts",
    socialIconProps: socialIcon4Data,
};

const openFalseCurrentFalseBadgeFalseColoData = {
    currentFalseBadgeFalseToggleFalseIc: currentFalseBadgeFalseToggleFalseIc2Data,
};

const sizesmIconOnlyData = {
    src: "/img/log-out-1@2x.png",
};

const sizesmHierarchyTertiaryGrayIconOnlyData = {
    sizesmIconOnlyProps: sizesmIconOnlyData,
};

const socialIcon5Data = {
    src: "/img/x@2x.png",
};

const openedFalseColorGrayThemeLightState3Data = {
    className: "application-nav-menu-button-2",
    socialIconProps: socialIcon5Data,
};

const headerNavigation2Data = {
    divider: "/img/divider-7@2x.png",
    text: "Or Rozenfeld",
    supportingText: "orozenfe@gmail.com",
    content10Props: content103Data,
    statePlaceholderTypeSearchSupportin: statePlaceholderTypeSearchSupportinData,
    openFalseCurrentFalseBadgeFalseColo: openFalseCurrentFalseBadgeFalseColoData,
    sizesmHierarchyTertiaryGrayIconOnly: sizesmHierarchyTertiaryGrayIconOnlyData,
    openedFalseColorGrayThemeLightState: openedFalseColorGrayThemeLightState3Data,
};

const frame42Data = {
    className: "frame-4-1",
};

const text299Data = {
    children: "Enter your email",
    className: "text-69",
};

const inputWithLabel44Data = {
    label: "Email",
    className: "input-with-label-17",
    text2Props: text299Data,
};

const typeDefaultDestructiveFalse24Data = {
    inputWithLabel4Props: inputWithLabel44Data,
};

const typeDefaultLeadingIconFalseLabelTru24Data = {
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse24Data,
};

const text2100Data = {
    children: "••••••••",
    className: "text-70",
};

const inputWithLabel45Data = {
    label: "Password",
    className: "input-with-label-18",
    text2Props: text2100Data,
};

const typeDefaultDestructiveFalse25Data = {
    inputWithLabel4Props: inputWithLabel45Data,
};

const typeDefaultLeadingIconFalseLabelTru25Data = {
    className: "input-field-16",
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse25Data,
};

const checkedFalseIndeterminateFalseSizesData = {
    text: "Remember for 30 days",
};

const sizemdIconFalse62Data = {
    children: "Forgot password",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe22Data = {
    sizemdIconFalseProps: sizemdIconFalse62Data,
};

const sizelgIconFalse31Data = {
    children: "Sign in",
    className: "",
};

const sizelgHierarchyPrimaryIconFalseDest21Data = {
    sizelgIconFalseProps: sizelgIconFalse31Data,
};

const socialIcon6Data = {
    src: "/img/social-icon@2x.png",
    className: "social-icon-1",
};

const socialGoogleSupportingTextTrueTheme2Data = {
    text: "Sign in with Google",
    socialIconProps: socialIcon6Data,
};

const styleButtonsThemeColorWithBrand2Data = {
    socialGoogleSupportingTextTrueTheme: socialGoogleSupportingTextTrueTheme2Data,
};

const sizemdIconFalse63Data = {
    children: "Sign up",
    className: "button-base-31",
};

const sizemdHierarchyLinkColorIconFalseDe23Data = {
    className: "button-25",
    sizemdIconFalseProps: sizemdIconFalse63Data,
};

const logInData = {
    text1: "Log in to your account",
    supportingText: "Welcome back! Please enter your details.",
    text2: "Don’t have an account?",
    frame4Props: frame42Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru24Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru25Data,
    checkedFalseIndeterminateFalseSizes: checkedFalseIndeterminateFalseSizesData,
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe22Data,
    sizelgHierarchyPrimaryIconFalseDest: sizelgHierarchyPrimaryIconFalseDest21Data,
    styleButtonsThemeColorWithBrand2Pro: styleButtonsThemeColorWithBrand2Data,
    sizemdHierarchyLinkColorIconFalseDe2: sizemdHierarchyLinkColorIconFalseDe23Data,
};

const sizexlColorPrimaryThemeLightCircleO1Data = {
    src: "/img/mail@2x.png",
};

const sizelgIconFalse32Data = {
    children: "Open email app",
    className: "button-base-34",
};

const sizelgHierarchyPrimaryIconFalseDest22Data = {
    sizelgIconFalseProps: sizelgIconFalse32Data,
};

const sizemdIconFalse64Data = {
    children: "Click to resend",
    className: "button-base-32",
};

const sizemdHierarchyLinkColorIconFalseDe24Data = {
    className: "button-26",
    sizemdIconFalseProps: sizemdIconFalse64Data,
};

const sizemdIconLeading32Data = {
    text: "Back to log in",
    className: "button-base-21",
};

const sizemdHierarchyLinkGrayIconLeadingD2Data = {
    className: "button-14",
    sizemdIconLeading3Props: sizemdIconLeading32Data,
};

const forgotPassword2Data = {
    text1: "Check your email",
    spanText1: "We sent a password reset link to ",
    spanText2: "olivia@untitledui.com",
    text2: "Didn’t receive the email?",
    sizexlColorPrimaryThemeLightCircleO: sizexlColorPrimaryThemeLightCircleO1Data,
    sizelgHierarchyPrimaryIconFalseDest: sizelgHierarchyPrimaryIconFalseDest22Data,
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe24Data,
    sizemdHierarchyLinkGrayIconLeadingD: sizemdHierarchyLinkGrayIconLeadingD2Data,
};

const sizexlColorPrimaryThemeLightCircleO2Data = {
    src: "/img/key@2x.png",
};

const textAndSupportingText322Data = {
    text: "Forgot password?",
    supportingText: "No worries, we’ll send you reset instructions.",
    className: "",
};

const header1Data = {
    sizexlColorPrimaryThemeLightCircleO: sizexlColorPrimaryThemeLightCircleO2Data,
    textAndSupportingText3Props: textAndSupportingText322Data,
};

const text2101Data = {
    children: "Enter your email",
    className: "text-71",
};

const inputWithLabel46Data = {
    label: "Email",
    className: "input-with-label-19",
    text2Props: text2101Data,
};

const typeDefaultDestructiveFalse26Data = {
    inputWithLabel4Props: inputWithLabel46Data,
};

const typeDefaultLeadingIconFalseLabelTru26Data = {
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse26Data,
};

const sizelgIconFalse33Data = {
    children: "Reset password",
    className: "button-base-35",
};

const sizelgHierarchyPrimaryIconFalseDest23Data = {
    className: "button-28",
    sizelgIconFalseProps: sizelgIconFalse33Data,
};

const sizemdIconLeading33Data = {
    text: "Back to log in",
    className: "button-base-22",
};

const sizemdHierarchyLinkGrayIconLeadingD3Data = {
    className: "button-15",
    sizemdIconLeading3Props: sizemdIconLeading33Data,
};

const forgotPassword1Data = {
    headerProps: header1Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru26Data,
    sizelgHierarchyPrimaryIconFalseDest: sizelgHierarchyPrimaryIconFalseDest23Data,
    sizemdHierarchyLinkGrayIconLeadingD: sizemdHierarchyLinkGrayIconLeadingD3Data,
};

const sizexlColorSuccessThemeLightCircleOData = {
    src: "/img/check-circle@2x.png",
};

const textAndSupportingText323Data = {
    text: "Password reset",
    supportingText: "Your password has been successfully reset. Click below to log in magically.",
    className: "text-and-supporting-text-24",
};

const sizelgIconFalse34Data = {
    children: "Continue",
    className: "button-base-36",
};

const sizelgHierarchyPrimaryIconFalseDest24Data = {
    className: "button-29",
    sizelgIconFalseProps: sizelgIconFalse34Data,
};

const sizemdIconLeading34Data = {
    text: "Back to log in",
    className: "button-base-23",
};

const sizemdHierarchyLinkGrayIconLeadingD4Data = {
    className: "button-16",
    sizemdIconLeading3Props: sizemdIconLeading34Data,
};

const forgotPassword4Data = {
    sizexlColorSuccessThemeLightCircleO: sizexlColorSuccessThemeLightCircleOData,
    textAndSupportingText32Props: textAndSupportingText323Data,
    sizelgHierarchyPrimaryIconFalseDest: sizelgHierarchyPrimaryIconFalseDest24Data,
    sizemdHierarchyLinkGrayIconLeadingD: sizemdHierarchyLinkGrayIconLeadingD4Data,
};

const sizexlColorPrimaryThemeLightCircleO3Data = {
    src: "/img/key-1@2x.png",
};

const textAndSupportingText324Data = {
    text: "Set new password",
    supportingText: "Your new password must be different to previously used passwords.",
    className: "text-and-supporting-text-25",
};

const header2Data = {
    className: "header-5",
    sizexlColorPrimaryThemeLightCircleO: sizexlColorPrimaryThemeLightCircleO3Data,
    textAndSupportingText3Props: textAndSupportingText324Data,
};

const text2102Data = {
    children: "••••••••",
    className: "text-72",
};

const inputWithLabel47Data = {
    label: "Password",
    className: "input-with-label-20",
    text2Props: text2102Data,
};

const typeDefaultDestructiveFalse33Data = {
    inputWithLabel4Props: inputWithLabel47Data,
};

const typeDefaultLeadingIconFalseLabelTru33Data = {
    className: "input-field-19",
    typeDefaultDestructiveFalse3Props: typeDefaultDestructiveFalse33Data,
};

const text2103Data = {
    children: "••••••••",
    className: "text-73",
};

const inputWithLabel48Data = {
    label: "Confirm password",
    className: "input-with-label-21",
    text2Props: text2103Data,
};

const typeDefaultDestructiveFalse27Data = {
    inputWithLabel4Props: inputWithLabel48Data,
};

const typeDefaultLeadingIconFalseLabelTru27Data = {
    className: "input-field-17",
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse27Data,
};

const sizelgIconFalse35Data = {
    children: "Reset password",
    className: "button-base-37",
};

const sizelgHierarchyPrimaryIconFalseDest25Data = {
    className: "button-30",
    sizelgIconFalseProps: sizelgIconFalse35Data,
};

const sizemdIconLeading35Data = {
    text: "Back to log in",
    className: "button-base-24",
};

const sizemdHierarchyLinkGrayIconLeadingD5Data = {
    className: "button-17",
    sizemdIconLeading3Props: sizemdIconLeading35Data,
};

const forgotPassword3Data = {
    headerProps: header2Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru33Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru27Data,
    sizelgHierarchyPrimaryIconFalseDest: sizelgHierarchyPrimaryIconFalseDest25Data,
    sizemdHierarchyLinkGrayIconLeadingD: sizemdHierarchyLinkGrayIconLeadingD5Data,
};

const frame38Data = {
    vector7: "/img/vector-7@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png",
    className: "",
};

const companyLogo6Data = {
    frame3Props: frame38Data,
};

const content26Data = {
    companyLogoProps: companyLogo6Data,
};

const currentTrueBadgeFalseToggleFalseIco2Data = {
    children: "Dashboard",
    className: "nav-item-base-3",
};

const currentFalseBadgeFalseToggleFalseIc3Data = {
    className: "nav-item-base-1",
};

const typeAvatarOpenFalse5Data = {
    className: "dropdown-2",
};

const content42Data = {
    typeAvatarOpenFalseProps: typeAvatarOpenFalse5Data,
};

const text2104Data = {
    children: "Track your candidates that came from your advertised links.",
    className: "supporting-text-2",
};

const sizemdIconFalse52Data = {
    children: "Share your job post",
};

const sizemdHierarchyPrimaryIconFalseDestData = {
    sizemdIconFalse5Props: sizemdIconFalse52Data,
};

const breadcrumbsFalseSupportingTextTrueS2Data = {
    text: "Technical Program Manager, Mobile Software Engineering",
    text2Props: text2104Data,
    sizemdHierarchyPrimaryIconFalseDest: sizemdHierarchyPrimaryIconFalseDestData,
};

const iconFalse1Data = {
    children: "7",
    className: "",
};

const sizesmIconFalseColorPrimary1Data = {
    iconFalseProps: iconFalse1Data,
};

const sizemdIconLeading22Data = {
    text: "View Public Job Post",
    className: "button-base-10",
};

const sizemdHierarchySecondaryGrayIconLea22Data = {
    className: "button-02-1",
    sizemdIconLeading2Props: sizemdIconLeading22Data,
};

const supportingTextFalseStyleSimpleActioData = {
    text: "Candidates",
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary1Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea22Data,
};

const helpIconFalseArrowFalseStateDefault1Data = {
    children: "Full Name",
    className: "",
};

const textTrueCheckboxFalseColorWhite1Data = {
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault1Data,
};

const styleTextSupportingTextTrueStateDef1Data = {
    text: "Oren Rosenfeld",
    supportingText: "oren@gmail.com",
};

const styleTextSupportingTextTrueStateDef2Data = {
    text: "Oren Rosenfeld",
    supportingText: "oren@gmail.com",
};

const styleTextSupportingTextTrueStateDef3Data = {
    text: "Oren Rosenfeld",
    supportingText: "oren@gmail.com",
};

const styleTextSupportingTextTrueStateDef4Data = {
    text: "Oren Rosenfeld",
    supportingText: "oren@gmail.com",
};

const styleTextSupportingTextTrueStateDef5Data = {
    text: "Oren Rosenfeld",
    supportingText: "oren@gmail.com",
};

const styleTextSupportingTextTrueStateDef6Data = {
    text: "Oren Rosenfeld",
    supportingText: "oren@gmail.com",
};

const styleTextSupportingTextTrueStateDef7Data = {
    text: "Oren Rosenfeld",
    supportingText: "oren@gmail.com",
};

const helpIconFalseArrowFalseStateDefault2Data = {
    children: "Hourly Fee",
    className: "table-header-1",
};

const textTrueCheckboxFalseColorWhite2Data = {
    className: "table-header-cell-1",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault2Data,
};

const styleTextSupportingTextFalseStateDe1Data = {
    children: "$15.00",
};

const styleTextSupportingTextFalseStateDe3Data = {
    children: "$15.00",
};

const styleTextSupportingTextFalseStateDe32Data = {
    children: "$15.00",
};

const styleTextSupportingTextFalseStateDe4Data = {
    children: "$15.00",
};

const styleTextSupportingTextFalseStateDe5Data = {
    children: "$15.00",
};

const helpIconFalseArrowFalseStateDefault3Data = {
    children: "Complete Test in?",
    className: "table-header-2",
};

const textTrueCheckboxFalseColorWhite3Data = {
    className: "table-header-cell-2",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault3Data,
};

const styleTextSupportingTextFalseStateDe6Data = {
    children: "1 Hour",
    className: "table-cell-18",
};

const styleTextSupportingTextFalseStateDe7Data = {
    children: "2 Hours",
    className: "table-cell-19",
};

const styleTextSupportingTextFalseStateDe33Data = {
    children: "30 Minutes",
    className: "table-cell-91",
};

const styleTextSupportingTextFalseStateDe8Data = {
    children: "2 Hours",
    className: "table-cell-20",
};

const styleTextSupportingTextFalseStateDe9Data = {
    children: "30 Minutes",
    className: "table-cell-21",
};

const styleTextSupportingTextFalseStateDe10Data = {
    children: "30 Minutes",
    className: "table-cell-22",
};

const styleTextSupportingTextFalseStateDe11Data = {
    children: "30 Minutes",
    className: "table-cell-23",
};

const helpIconFalseArrowFalseStateDefault4Data = {
    children: "Country",
    className: "table-header-3",
};

const textTrueCheckboxFalseColorWhite4Data = {
    className: "table-header-cell-3",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault4Data,
};

const socialIcon7Data = {
    src: "/img/us-1@2x.png",
    className: "us",
};

const tableCell1Data = {
    text: "United States",
    socialIconProps: socialIcon7Data,
};

const socialIcon8Data = {
    src: "/img/uy@2x.png",
    className: "uy",
};

const tableCell2Data = {
    text: "Argentina",
    className: "table-cell-96",
    socialIconProps: socialIcon8Data,
};

const socialIcon9Data = {
    src: "/img/se@2x.png",
    className: "se",
};

const tableCell3Data = {
    text: "Sweden",
    className: "table-cell-97",
    socialIconProps: socialIcon9Data,
};

const socialIcon10Data = {
    src: "/img/us-1@2x.png",
    className: "us-1",
};

const tableCell4Data = {
    text: "United States",
    socialIconProps: socialIcon10Data,
};

const socialIcon11Data = {
    src: "/img/us-1@2x.png",
    className: "us-2",
};

const tableCell5Data = {
    text: "United States",
    socialIconProps: socialIcon11Data,
};

const socialIcon12Data = {
    src: "/img/us-1@2x.png",
    className: "us-3",
};

const tableCell6Data = {
    text: "United States",
    socialIconProps: socialIcon12Data,
};

const socialIcon13Data = {
    src: "/img/us-1@2x.png",
    className: "us-4",
};

const tableCell7Data = {
    text: "United States",
    socialIconProps: socialIcon13Data,
};

const helpIconFalseArrowFalseStateDefault5Data = {
    children: "Avilability",
    className: "table-header-4",
};

const textTrueCheckboxFalseColorWhite5Data = {
    className: "table-header-cell-4",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault5Data,
};

const styleTextSupportingTextFalseStateDe12Data = {
    children: "1 day / week",
    className: "table-cell-24",
};

const styleTextSupportingTextFalseStateDe13Data = {
    children: "1 day / week",
    className: "table-cell-25",
};

const styleTextSupportingTextFalseStateDe14Data = {
    children: "1 day / week",
    className: "table-cell-26",
};

const styleTextSupportingTextFalseStateDe15Data = {
    children: "1 day / week",
    className: "table-cell-27",
};

const styleTextSupportingTextFalseStateDe16Data = {
    children: "1 day / week",
    className: "table-cell-28",
};

const styleTextSupportingTextFalseStateDe17Data = {
    children: "1 day / week",
    className: "table-cell-29",
};

const helpIconFalseArrowFalseStateDefault6Data = {
    children: "Hired for Test?",
    className: "table-header-5",
};

const textTrueCheckboxFalseColorWhite6Data = {
    className: "table-header-cell-5",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault6Data,
};

const styleTextSupportingTextFalseStateDe18Data = {
    children: "Yes",
    className: "table-cell-30",
};

const styleTextSupportingTextFalseStateDe19Data = {
    children: "No",
    className: "table-cell-31",
};

const styleTextSupportingTextFalseStateDe20Data = {
    children: "--",
    className: "table-cell-32",
};

const styleTextSupportingTextFalseStateDe21Data = {
    children: "Yes",
    className: "table-cell-33",
};

const styleTextSupportingTextFalseStateDe23Data = {
    children: "No",
    className: "table-cell-34",
};

const styleTextSupportingTextFalseStateDe24Data = {
    children: "Yes",
    className: "table-cell-35",
};

const styleTextSupportingTextFalseStateDe25Data = {
    children: "Yes",
    className: "table-cell-36",
};

const textFalseCheckboxFalseColorWhite2Data = {
    className: "divider-63",
};

const sizemdIconOnly1Data = {
    src: "/img/eye@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly1Data = {
    className: "",
    sizemdIconOnlyProps: sizemdIconOnly1Data,
};

const styleActionIconsSupportingTextFalse1Data = {
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly1Data,
};

const textFalseCheckboxFalseColorWhite3Data = {
    className: "divider-64",
};

const sizemdIconOnly2Data = {
    src: "/img/eye@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly2Data = {
    className: "",
    sizemdIconOnlyProps: sizemdIconOnly2Data,
};

const styleActionIconsSupportingTextFalse2Data = {
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly2Data,
};

const textFalseCheckboxFalseColorWhite4Data = {
    className: "divider-65",
};

const sizemdIconOnly3Data = {
    src: "/img/eye@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly3Data = {
    className: "",
    sizemdIconOnlyProps: sizemdIconOnly3Data,
};

const styleActionIconsSupportingTextFalse3Data = {
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly3Data,
};

const textFalseCheckboxFalseColorWhite5Data = {
    className: "divider-66",
};

const sizemdIconOnly4Data = {
    src: "/img/eye@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly4Data = {
    className: "",
    sizemdIconOnlyProps: sizemdIconOnly4Data,
};

const styleActionIconsSupportingTextFalse4Data = {
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly4Data,
};

const textFalseCheckboxFalseColorWhite6Data = {
    className: "divider-67",
};

const sizemdIconOnly5Data = {
    src: "/img/eye@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly5Data = {
    className: "",
    sizemdIconOnlyProps: sizemdIconOnly5Data,
};

const styleActionIconsSupportingTextFalse5Data = {
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly5Data,
};

const textFalseCheckboxFalseColorWhite7Data = {
    className: "divider-68",
};

const sizemdIconOnly6Data = {
    src: "/img/eye@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly6Data = {
    className: "",
    sizemdIconOnlyProps: sizemdIconOnly6Data,
};

const styleActionIconsSupportingTextFalse6Data = {
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly6Data,
};

const textFalseCheckboxFalseColorWhite8Data = {
    className: "divider-69",
};

const sizemdIconOnly7Data = {
    src: "/img/eye@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly7Data = {
    className: "",
    sizemdIconOnlyProps: sizemdIconOnly7Data,
};

const styleActionIconsSupportingTextFalse7Data = {
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly7Data,
};

const dashboard4ShareData = {
    divider: "/img/divider@1x.png",
    shareProject: "/img/share-project-3@1x.png",
    content2Props: content26Data,
    currentTrueBadgeFalseToggleFalseIco: currentTrueBadgeFalseToggleFalseIco2Data,
    currentFalseBadgeFalseToggleFalseIc: currentFalseBadgeFalseToggleFalseIc3Data,
    content4Props: content42Data,
    breadcrumbsFalseSupportingTextTrueS: breadcrumbsFalseSupportingTextTrueS2Data,
    supportingTextFalseStyleSimpleActio: supportingTextFalseStyleSimpleActioData,
    textTrueCheckboxFalseColorWhite1Pro: textTrueCheckboxFalseColorWhite1Data,
    styleTextSupportingTextTrueStateDef: styleTextSupportingTextTrueStateDef1Data,
    styleTextSupportingTextTrueStateDef2: styleTextSupportingTextTrueStateDef2Data,
    styleTextSupportingTextTrueStateDef3: styleTextSupportingTextTrueStateDef3Data,
    styleTextSupportingTextTrueStateDef4: styleTextSupportingTextTrueStateDef4Data,
    styleTextSupportingTextTrueStateDef5: styleTextSupportingTextTrueStateDef5Data,
    styleTextSupportingTextTrueStateDef6: styleTextSupportingTextTrueStateDef6Data,
    styleTextSupportingTextTrueStateDef7: styleTextSupportingTextTrueStateDef7Data,
    textTrueCheckboxFalseColorWhite2Pro: textTrueCheckboxFalseColorWhite2Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe1Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe3Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe32Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe4Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe5Data,
    textTrueCheckboxFalseColorWhite3Pro: textTrueCheckboxFalseColorWhite3Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe6Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe7Data,
    styleTextSupportingTextFalseStateDe8: styleTextSupportingTextFalseStateDe33Data,
    styleTextSupportingTextFalseStateDe9: styleTextSupportingTextFalseStateDe8Data,
    styleTextSupportingTextFalseStateDe10: styleTextSupportingTextFalseStateDe9Data,
    styleTextSupportingTextFalseStateDe11: styleTextSupportingTextFalseStateDe10Data,
    styleTextSupportingTextFalseStateDe12: styleTextSupportingTextFalseStateDe11Data,
    textTrueCheckboxFalseColorWhite4Pro: textTrueCheckboxFalseColorWhite4Data,
    tableCell1Props: tableCell1Data,
    tableCell2Props: tableCell2Data,
    tableCell3Props: tableCell3Data,
    tableCell4Props: tableCell4Data,
    tableCell5Props: tableCell5Data,
    tableCell6Props: tableCell6Data,
    tableCell7Props: tableCell7Data,
    textTrueCheckboxFalseColorWhite5Pro: textTrueCheckboxFalseColorWhite5Data,
    styleTextSupportingTextFalseStateDe13: styleTextSupportingTextFalseStateDe12Data,
    styleTextSupportingTextFalseStateDe14: styleTextSupportingTextFalseStateDe13Data,
    styleTextSupportingTextFalseStateDe15: styleTextSupportingTextFalseStateDe14Data,
    styleTextSupportingTextFalseStateDe16: styleTextSupportingTextFalseStateDe15Data,
    styleTextSupportingTextFalseStateDe17: styleTextSupportingTextFalseStateDe16Data,
    styleTextSupportingTextFalseStateDe18: styleTextSupportingTextFalseStateDe17Data,
    textTrueCheckboxFalseColorWhite6Pro: textTrueCheckboxFalseColorWhite6Data,
    styleTextSupportingTextFalseStateDe19: styleTextSupportingTextFalseStateDe18Data,
    styleTextSupportingTextFalseStateDe20: styleTextSupportingTextFalseStateDe19Data,
    styleTextSupportingTextFalseStateDe21: styleTextSupportingTextFalseStateDe20Data,
    styleTextSupportingTextFalseStateDe22: styleTextSupportingTextFalseStateDe21Data,
    styleTextSupportingTextFalseStateDe23: styleTextSupportingTextFalseStateDe23Data,
    styleTextSupportingTextFalseStateDe24: styleTextSupportingTextFalseStateDe24Data,
    styleTextSupportingTextFalseStateDe25: styleTextSupportingTextFalseStateDe25Data,
    textFalseCheckboxFalseColorWhite1Pr: textFalseCheckboxFalseColorWhite2Data,
    styleActionIconsSupportingTextFalse: styleActionIconsSupportingTextFalse1Data,
    textFalseCheckboxFalseColorWhite2Pr: textFalseCheckboxFalseColorWhite3Data,
    styleActionIconsSupportingTextFalse2: styleActionIconsSupportingTextFalse2Data,
    textFalseCheckboxFalseColorWhite3Pr: textFalseCheckboxFalseColorWhite4Data,
    styleActionIconsSupportingTextFalse3: styleActionIconsSupportingTextFalse3Data,
    textFalseCheckboxFalseColorWhite4Pr: textFalseCheckboxFalseColorWhite5Data,
    styleActionIconsSupportingTextFalse4: styleActionIconsSupportingTextFalse4Data,
    textFalseCheckboxFalseColorWhite5Pr: textFalseCheckboxFalseColorWhite6Data,
    styleActionIconsSupportingTextFalse5: styleActionIconsSupportingTextFalse5Data,
    textFalseCheckboxFalseColorWhite6Pr: textFalseCheckboxFalseColorWhite7Data,
    styleActionIconsSupportingTextFalse6: styleActionIconsSupportingTextFalse6Data,
    textFalseCheckboxFalseColorWhite7Pr: textFalseCheckboxFalseColorWhite8Data,
    styleActionIconsSupportingTextFalse7: styleActionIconsSupportingTextFalse7Data,
};

const frame39Data = {
    vector7: "/img/vector-7@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png",
    className: "",
};

const companyLogo7Data = {
    frame3Props: frame39Data,
};

const content27Data = {
    companyLogoProps: companyLogo7Data,
};

const typeAvatarOpenFalse6Data = {
    className: "dropdown-3",
};

const content43Data = {
    typeAvatarOpenFalseProps: typeAvatarOpenFalse6Data,
};

const headerNavigation3Data = {
    className: "header-navigation-1",
    content2Props: content27Data,
    content4Props: content43Data,
};

const currentFalseTypeTextIconFalseStateD3Data = {
    children: "Job posts",
};

const currentFalseTypeTextIconFalseStateD4Data = {
    children: "Technical Program Manager, Mobile Software Engineering",
    className: "breadcrumb-button-base-3",
};

const currentTrueTypeTextIconFalseStateDe2Data = {
    children: "Candidates",
    className: "breadcrumb-button-base-8",
};

const dividerChevronTypeTextBreakpointDes21Data = {
    currentFalseTypeTextIconFalseStateD: currentFalseTypeTextIconFalseStateD3Data,
    currentFalseTypeTextIconFalseStateD2: currentFalseTypeTextIconFalseStateD4Data,
    currentTrueTypeTextIconFalseStateDe: currentTrueTypeTextIconFalseStateDe2Data,
};

const text2105Data = {
    children: "Track your candidates that came from your advertised links.",
    className: "supporting-text-3",
};

const sizemdIconLeading23Data = {
    text: "Create New Job",
    className: "button-base-11",
};

const sizemdHierarchySecondaryGrayIconLea23Data = {
    className: "button-01-1",
    sizemdIconLeading2Props: sizemdIconLeading23Data,
};

const breadcrumbsFalseSupportingTextTrueS31Data = {
    text2Props: text2105Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea23Data,
};

const iconFalse2Data = {
    children: "0",
    className: "badge-base-1",
};

const sizesmIconFalseColorPrimary2Data = {
    className: "badge-1",
    iconFalseProps: iconFalse2Data,
};

const sizemdIconLeading24Data = {
    text: "View Public Job Post",
    className: "button-base-12",
};

const sizemdHierarchySecondaryGrayIconLea24Data = {
    className: "button-02-2",
    sizemdIconLeading2Props: sizemdIconLeading24Data,
};

const supportingTextFalseStyleSimpleActio21Data = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary2Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea24Data,
};

const helpIconFalseArrowFalseStateDefault7Data = {
    children: "Full Name",
    className: "",
};

const textTrueCheckboxFalseColorWhite7Data = {
    className: "table-header-cell-6",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault7Data,
};

const helpIconFalseArrowFalseStateDefault8Data = {
    children: "Agency/ single",
    className: "table-header-7",
};

const textTrueCheckboxFalseColorWhite8Data = {
    className: "table-header-cell-7",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault8Data,
};

const helpIconFalseArrowFalseStateDefault9Data = {
    children: "Total Test Cost",
    className: "table-header-8",
};

const textTrueCheckboxFalseColorWhite9Data = {
    className: "table-header-cell-8",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault9Data,
};

const helpIconFalseArrowFalseStateDefault10Data = {
    children: "Estimated Start Date",
    className: "table-header-9",
};

const textTrueCheckboxFalseColorWhite10Data = {
    className: "table-header-cell-9",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault10Data,
};

const helpIconFalseArrowFalseStateDefault11Data = {
    children: "Country",
    className: "table-header-10",
};

const textTrueCheckboxFalseColorWhite11Data = {
    className: "table-header-cell-10",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault11Data,
};

const helpIconFalseArrowFalseStateDefault12Data = {
    children: "Availability per week",
    className: "table-header-11",
};

const textTrueCheckboxFalseColorWhite12Data = {
    className: "table-header-cell-11",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault12Data,
};

const helpIconFalseArrowFalseStateDefault13Data = {
    children: "Status",
    className: "table-header-12",
};

const textTrueCheckboxFalseColorWhite13Data = {
    className: "table-header-cell-12",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault13Data,
};

const helpIconFalseArrowFalseStateDefault14Data = {
    children: "More Info",
    className: "table-header-13",
};

const textTrueCheckboxFalseColorWhite14Data = {
    className: "table-header-cell-13",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault14Data,
};

const dashboard3EmptyData = {
    a1E5Ce627F3Fd3Fb5E05D6Ae03Dde4Bf1: "/img/a1e5ce627f3fd3fb5e05d6ae03dde4bf-1@2x.png",
    text1: "There are currently no candidates",
    text2: "By sharing your Public job posts more often, more candidates will apply, and this table will be filled with potential candidates",
    headerNavigationProps: headerNavigation3Data,
    dividerChevronTypeTextBreakpointDes: dividerChevronTypeTextBreakpointDes21Data,
    breadcrumbsFalseSupportingTextTrueS: breadcrumbsFalseSupportingTextTrueS31Data,
    supportingTextFalseStyleSimpleActio: supportingTextFalseStyleSimpleActio21Data,
    textTrueCheckboxFalseColorWhite1Pro: textTrueCheckboxFalseColorWhite7Data,
    textTrueCheckboxFalseColorWhite2Pro: textTrueCheckboxFalseColorWhite8Data,
    textTrueCheckboxFalseColorWhite3Pro: textTrueCheckboxFalseColorWhite9Data,
    textTrueCheckboxFalseColorWhite4Pro: textTrueCheckboxFalseColorWhite10Data,
    textTrueCheckboxFalseColorWhite5Pro: textTrueCheckboxFalseColorWhite11Data,
    textTrueCheckboxFalseColorWhite6Pro: textTrueCheckboxFalseColorWhite12Data,
    textTrueCheckboxFalseColorWhite7Pro: textTrueCheckboxFalseColorWhite13Data,
    textTrueCheckboxFalseColorWhite8Pro: textTrueCheckboxFalseColorWhite14Data,
};

const frame310Data = {
    vector7: "/img/vector-7@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png",
    className: "",
};

const companyLogo8Data = {
    frame3Props: frame310Data,
};

const content28Data = {
    companyLogoProps: companyLogo8Data,
};

const typeAvatarOpenFalse7Data = {
    className: "dropdown-4",
};

const content44Data = {
    typeAvatarOpenFalseProps: typeAvatarOpenFalse7Data,
};

const headerNavigation4Data = {
    className: "header-navigation-1",
    content2Props: content28Data,
    content4Props: content44Data,
};

const currentFalseTypeTextIconFalseStateD5Data = {
    children: "Job posts",
};

const currentFalseTypeTextIconFalseStateD6Data = {
    children: "Technical Program Manager, Mobile Software Engineering",
    className: "breadcrumb-button-base-4",
};

const currentTrueTypeTextIconFalseStateDe3Data = {
    children: "Candidates",
    className: "breadcrumb-button-base-9",
};

const dividerChevronTypeTextBreakpointDes22Data = {
    currentFalseTypeTextIconFalseStateD: currentFalseTypeTextIconFalseStateD5Data,
    currentFalseTypeTextIconFalseStateD2: currentFalseTypeTextIconFalseStateD6Data,
    currentTrueTypeTextIconFalseStateDe: currentTrueTypeTextIconFalseStateDe3Data,
};

const currentFalseTypeTextIconFalseStateD7Data = {
    children: "Technical Program Manager, Mobile Software Engineering",
    className: "breadcrumb-button-base-5",
};

const text2106Data = {
    children: "Track your candidates that came from your advertised links.",
    className: "supporting-text-4",
};

const sizemdIconLeading25Data = {
    text: "Create New Job",
    className: "button-base-13",
};

const sizemdHierarchySecondaryGrayIconLea25Data = {
    className: "button-01-2",
    sizemdIconLeading2Props: sizemdIconLeading25Data,
};

const breadcrumbsFalseSupportingTextTrueS32Data = {
    text2Props: text2106Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea25Data,
};

const iconFalse3Data = {
    children: "7",
    className: "",
};

const sizesmIconFalseColorPrimary3Data = {
    className: "",
    iconFalseProps: iconFalse3Data,
};

const sizemdIconLeading26Data = {
    text: "View Public Job Post",
    className: "button-base-14",
};

const sizemdHierarchySecondaryGrayIconLea26Data = {
    className: "button-02-3",
    sizemdIconLeading2Props: sizemdIconLeading26Data,
};

const supportingTextFalseStyleSimpleActio22Data = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary3Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea26Data,
};

const helpIconFalseArrowFalseStateDefault15Data = {
    children: "Full Name",
    className: "",
};

const textTrueCheckboxFalseColorWhite15Data = {
    className: "table-header-cell-14",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault15Data,
};

const styleTextSupportingTextTrueStateDef8Data = {
    text: "Oren Rosenfeld",
    supportingText: "dolores.chambers@example.com",
    className: "table-cell-2",
};

const styleTextSupportingTextTrueStateDef9Data = {
    text: "Wade Warren",
    supportingText: "dolores.chambers@example.com",
    className: "table-cell-3",
};

const styleTextSupportingTextTrueStateDef10Data = {
    text: "Darrell Steward",
    supportingText: "jessica.hanson@example.com",
    className: "table-cell-4",
};

const styleTextSupportingTextTrueStateDef11Data = {
    text: "Brandon Philips",
    supportingText: "brandon.phili@gmail.com",
    className: "table-cell-5",
};

const styleTextSupportingTextTrueStateDef12Data = {
    text: "Albert Flores",
    supportingText: "kenzi.lawson@example.com",
    className: "table-cell-6",
};

const styleTextSupportingTextTrueStateDef13Data = {
    text: "Leslie Alexander",
    supportingText: "deanna.curtis@example.com",
    className: "table-cell-7",
};

const styleTextSupportingTextTrueStateDef14Data = {
    text: "Kristin Watson",
    supportingText: "michelle.rivera@example.com",
    className: "table-cell-8",
};

const column1Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite15Data,
    styleTextSupportingTextTrueStateDef: styleTextSupportingTextTrueStateDef8Data,
    styleTextSupportingTextTrueStateDef2: styleTextSupportingTextTrueStateDef9Data,
    styleTextSupportingTextTrueStateDef3: styleTextSupportingTextTrueStateDef10Data,
    styleTextSupportingTextTrueStateDef4: styleTextSupportingTextTrueStateDef11Data,
    styleTextSupportingTextTrueStateDef5: styleTextSupportingTextTrueStateDef12Data,
    styleTextSupportingTextTrueStateDef6: styleTextSupportingTextTrueStateDef13Data,
    styleTextSupportingTextTrueStateDef7: styleTextSupportingTextTrueStateDef14Data,
};

const helpIconFalseArrowFalseStateDefault16Data = {
    children: "Agency/ single",
    className: "table-header-14",
};

const textTrueCheckboxFalseColorWhite16Data = {
    className: "table-header-cell-15",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault16Data,
};

const styleTextSupportingTextFalseStateDe26Data = {
    children: "Agency",
    className: "table-cell-37",
};

const styleTextSupportingTextFalseStateDe27Data = {
    children: "Agency",
    className: "table-cell-38",
};

const styleTextSupportingTextFalseStateDe28Data = {
    children: "Single",
    className: "table-cell-39",
};

const styleTextSupportingTextFalseStateDe29Data = {
    children: "Single",
    className: "table-cell-40",
};

const styleTextSupportingTextFalseStateDe30Data = {
    children: "Single",
    className: "table-cell-41",
};

const styleTextSupportingTextFalseStateDe31Data = {
    children: "Single",
    className: "table-cell-42",
};

const styleTextSupportingTextFalseStateDe34Data = {
    children: "Single",
    className: "table-cell-43",
};

const column21Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite16Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe26Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe27Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe28Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe29Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe30Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe31Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe34Data,
};

const helpIconFalseArrowFalseStateDefault17Data = {
    children: "Total Test Cost",
    className: "table-header-15",
};

const textTrueCheckboxFalseColorWhite17Data = {
    className: "table-header-cell-16",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault17Data,
};

const styleTextSupportingTextFalseStateDe35Data = {
    children: "$15.00",
    className: "table-cell-44",
};

const styleTextSupportingTextFalseStateDe36Data = {
    children: "2 Hours",
    className: "table-cell-45",
};

const styleTextSupportingTextFalseStateDe37Data = {
    children: "30 Minutes",
    className: "table-cell-92",
};

const styleTextSupportingTextFalseStateDe38Data = {
    children: "2 Hours",
    className: "table-cell-46",
};

const styleTextSupportingTextFalseStateDe39Data = {
    children: "30 Minutes",
    className: "table-cell-47",
};

const styleTextSupportingTextFalseStateDe40Data = {
    children: "30 Minutes",
    className: "table-cell-48",
};

const styleTextSupportingTextFalseStateDe41Data = {
    children: "30 Minutes",
    className: "table-cell-49",
};

const helpIconFalseArrowFalseStateDefault18Data = {
    children: "Estimated Start Date",
    className: "table-header-16",
};

const textTrueCheckboxFalseColorWhite18Data = {
    className: "table-header-cell-17",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault18Data,
};

const styleTextSupportingTextFalseStateDe42Data = {
    children: "Immediately",
    className: "table-cell-50",
};

const styleTextSupportingTextFalseStateDe43Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-51",
};

const styleTextSupportingTextFalseStateDe310Data = {
    children: "1 month",
    className: "table-cell-93",
};

const styleTextSupportingTextFalseStateDe44Data = {
    children: "Tomorrow",
    className: "table-cell-52",
};

const styleTextSupportingTextFalseStateDe45Data = {
    children: "Next Week",
    className: "table-cell-53",
};

const styleTextSupportingTextFalseStateDe46Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-54",
};

const styleTextSupportingTextFalseStateDe47Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-55",
};

const column31Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite18Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe42Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe43Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe310Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe44Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe45Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe46Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe47Data,
};

const helpIconFalseArrowFalseStateDefault19Data = {
    children: "Country",
    className: "table-header-17",
};

const textTrueCheckboxFalseColorWhite19Data = {
    className: "table-header-cell-18",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault19Data,
};

const socialIcon14Data = {
    src: "/img/us@2x.png",
    className: "us-5",
};

const tableCell22Data = {
    text: "United States",
    socialIconProps: socialIcon14Data,
};

const socialIcon15Data = {
    src: "/img/uy@2x.png",
    className: "uy-1",
};

const tableCell23Data = {
    text: "Argentina",
    className: "table-cell-115",
    socialIconProps: socialIcon15Data,
};

const socialIcon16Data = {
    src: "/img/se@2x.png",
    className: "se-1",
};

const tableCell24Data = {
    text: "Sweden",
    className: "table-cell-116",
    socialIconProps: socialIcon16Data,
};

const socialIcon17Data = {
    src: "/img/us-1@2x.png",
    className: "us-6",
};

const tableCell25Data = {
    text: "United States",
    className: "",
    socialIconProps: socialIcon17Data,
};

const socialIcon18Data = {
    src: "/img/us-1@2x.png",
    className: "us-7",
};

const tableCell26Data = {
    text: "United States",
    socialIconProps: socialIcon18Data,
};

const socialIcon19Data = {
    src: "/img/us-1@2x.png",
    className: "us-8",
};

const tableCell27Data = {
    text: "United States",
    socialIconProps: socialIcon19Data,
};

const socialIcon20Data = {
    src: "/img/us-1@2x.png",
    className: "us-9",
};

const tableCell28Data = {
    text: "United States",
    socialIconProps: socialIcon20Data,
};

const column41Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite19Data,
    tableCell21Props: tableCell22Data,
    tableCell22Props: tableCell23Data,
    tableCell23Props: tableCell24Data,
    tableCell24Props: tableCell25Data,
    tableCell25Props: tableCell26Data,
    tableCell26Props: tableCell27Data,
    tableCell27Props: tableCell28Data,
};

const helpIconFalseArrowFalseStateDefault20Data = {
    children: "Availability per week",
    className: "table-header-18",
};

const textTrueCheckboxFalseColorWhite20Data = {
    className: "table-header-cell-19",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault20Data,
};

const styleTextSupportingTextFalseStateDe48Data = {
    children: "10-20 hours",
    className: "table-cell-56",
};

const styleTextSupportingTextFalseStateDe49Data = {
    children: "10-20 hours",
    className: "table-cell-57",
};

const styleTextSupportingTextFalseStateDe50Data = {
    children: "10-20 hours",
    className: "table-cell-58",
};

const styleTextSupportingTextFalseStateDe51Data = {
    children: "10-20 hours",
    className: "table-cell-59",
};

const styleTextSupportingTextFalseStateDe52Data = {
    children: "10-20 hours",
    className: "table-cell-60",
};

const styleTextSupportingTextFalseStateDe53Data = {
    children: "10-20 hours",
    className: "table-cell-61",
};

const styleTextSupportingTextFalseStateDe54Data = {
    children: "10-20 hours",
    className: "table-cell-62",
};

const column51Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite20Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe48Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe49Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe50Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe51Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe52Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe53Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe54Data,
};

const helpIconFalseArrowFalseStateDefault21Data = {
    children: "Status",
    className: "table-header-19",
};

const textTrueCheckboxFalseColorWhite21Data = {
    className: "table-header-cell-20",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault21Data,
};

const iconFalse4Data = {
    children: "Hired",
    className: "badge-base-3",
};

const sizesmIconFalseColorPrimary4Data = {
    className: "badge-2",
    iconFalseProps: iconFalse4Data,
};

const styleBadgeSupportingTextFalseStateD1Data = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary4Data,
};

const iconFalse22Data = {
    children: "Failed Test",
};

const sizesmIconFalseColorError1Data = {
    iconFalse2Props: iconFalse22Data,
};

const styleBadgeSupportingTextFalseStateD21Data = {
    sizesmIconFalseColorErrorProps: sizesmIconFalseColorError1Data,
};

const iconFalse32Data = {
    children: "Ready for Test",
    className: "",
};

const sizesmIconFalseColorBlueLight1Data = {
    iconFalse2Props: iconFalse32Data,
};

const styleBadgeSupportingTextFalseStateD3Data = {
    sizesmIconFalseColorBlueLightProps: sizesmIconFalseColorBlueLight1Data,
};

const helpIconFalseArrowFalseStateDefault22Data = {
    children: "More Info",
    className: "table-header-20",
};

const textTrueCheckboxFalseColorWhite22Data = {
    className: "table-header-cell-21",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault22Data,
};

const sizemdIconOnly8Data = {
    src: "/img/chevron-right-2@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly8Data = {
    className: "button-32",
    sizemdIconOnlyProps: sizemdIconOnly8Data,
};

const styleActionIconsSupportingTextFalse8Data = {
    className: "table-cell-100",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly8Data,
};

const sizemdIconOnly9Data = {
    src: "/img/chevron-right-2@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly9Data = {
    className: "button-33",
    sizemdIconOnlyProps: sizemdIconOnly9Data,
};

const styleActionIconsSupportingTextFalse9Data = {
    className: "table-cell-101",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly9Data,
};

const sizemdIconOnly10Data = {
    src: "/img/chevron-right-2@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly10Data = {
    className: "button-34",
    sizemdIconOnlyProps: sizemdIconOnly10Data,
};

const styleActionIconsSupportingTextFalse10Data = {
    className: "table-cell-102",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly10Data,
};

const sizemdIconOnly11Data = {
    src: "/img/chevron-right-2@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly11Data = {
    className: "button-35",
    sizemdIconOnlyProps: sizemdIconOnly11Data,
};

const styleActionIconsSupportingTextFalse11Data = {
    className: "table-cell-103",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly11Data,
};

const sizemdIconOnly12Data = {
    src: "/img/chevron-right-2@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly12Data = {
    className: "button-36",
    sizemdIconOnlyProps: sizemdIconOnly12Data,
};

const styleActionIconsSupportingTextFalse12Data = {
    className: "table-cell-104",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly12Data,
};

const sizemdIconOnly13Data = {
    src: "/img/chevron-right-2@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly13Data = {
    className: "button-37",
    sizemdIconOnlyProps: sizemdIconOnly13Data,
};

const styleActionIconsSupportingTextFalse13Data = {
    className: "table-cell-105",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly13Data,
};

const sizemdIconOnly14Data = {
    src: "/img/chevron-right-2@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly14Data = {
    className: "button-38",
    sizemdIconOnlyProps: sizemdIconOnly14Data,
};

const styleActionIconsSupportingTextFalse14Data = {
    className: "table-cell-106",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly14Data,
};

const column61Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite22Data,
    styleActionIconsSupportingTextFalse: styleActionIconsSupportingTextFalse8Data,
    styleActionIconsSupportingTextFalse2: styleActionIconsSupportingTextFalse9Data,
    styleActionIconsSupportingTextFalse3: styleActionIconsSupportingTextFalse10Data,
    styleActionIconsSupportingTextFalse4: styleActionIconsSupportingTextFalse11Data,
    styleActionIconsSupportingTextFalse5: styleActionIconsSupportingTextFalse12Data,
    styleActionIconsSupportingTextFalse6: styleActionIconsSupportingTextFalse13Data,
    styleActionIconsSupportingTextFalse7: styleActionIconsSupportingTextFalse14Data,
};

const dashboard1Data = {
    headerNavigationProps: headerNavigation4Data,
    dividerChevronTypeTextBreakpointDes: dividerChevronTypeTextBreakpointDes22Data,
    currentFalseTypeTextIconFalseStateD: currentFalseTypeTextIconFalseStateD7Data,
    breadcrumbsFalseSupportingTextTrueS: breadcrumbsFalseSupportingTextTrueS32Data,
    supportingTextFalseStyleSimpleActio: supportingTextFalseStyleSimpleActio22Data,
    textTrueCheckboxFalseColorWhite1Pro: column1Data,
    styleBadgeSupportingTextFalseStateD: column21Data,
    textTrueCheckboxFalseColorWhite3Pro: textTrueCheckboxFalseColorWhite17Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe35Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe36Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe37Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe38Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe39Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe40Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe41Data,
    styleBadgeSupportingTextFalseStateD2: column31Data,
    styleBadgeSupportingTextFalseStateD3: column41Data,
    styleBadgeSupportingTextFalseStateD4: column51Data,
    textTrueCheckboxFalseColorWhite7Pro: textTrueCheckboxFalseColorWhite21Data,
    styleBadgeSupportingTextFalseStateD5: styleBadgeSupportingTextFalseStateD1Data,
    styleBadgeSupportingTextFalseStateD6: styleBadgeSupportingTextFalseStateD21Data,
    styleBadgeSupportingTextFalseStateD7: styleBadgeSupportingTextFalseStateD3Data,
    styleBadgeSupportingTextFalseStateD8: column61Data,
};

const frame311Data = {
    vector7: "/img/vector-7@2x.png",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png",
    className: "",
};

const companyLogo9Data = {
    frame3Props: frame311Data,
};

const content29Data = {
    companyLogoProps: companyLogo9Data,
};

const typeAvatarOpenFalse8Data = {
    className: "dropdown-5",
};

const content45Data = {
    typeAvatarOpenFalseProps: typeAvatarOpenFalse8Data,
};

const headerNavigation5Data = {
    className: "header-navigation-2",
    content2Props: content29Data,
    content4Props: content45Data,
};

const currentFalseTypeTextIconFalseStateD8Data = {
    children: "Job posts",
};

const currentFalseTypeTextIconFalseStateD9Data = {
    children: "Technical Program Manager, Mobile Software Engineering",
    className: "breadcrumb-button-base-6",
};

const currentTrueTypeTextIconFalseStateDe4Data = {
    children: "Candidates",
    className: "breadcrumb-button-base-10",
};

const dividerChevronTypeTextBreakpointDes23Data = {
    currentFalseTypeTextIconFalseStateD: currentFalseTypeTextIconFalseStateD8Data,
    currentFalseTypeTextIconFalseStateD2: currentFalseTypeTextIconFalseStateD9Data,
    currentTrueTypeTextIconFalseStateDe: currentTrueTypeTextIconFalseStateDe4Data,
};

const text2107Data = {
    children: "Track your candidates that came from your advertised links.",
    className: "supporting-text-5",
};

const sizemdIconLeading27Data = {
    text: "Create New Job",
    className: "button-base-15",
};

const sizemdHierarchySecondaryGrayIconLea27Data = {
    className: "button-01-3",
    sizemdIconLeading2Props: sizemdIconLeading27Data,
};

const breadcrumbsFalseSupportingTextTrueS33Data = {
    text2Props: text2107Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea27Data,
};

const iconFalse5Data = {
    children: "7",
    className: "",
};

const sizesmIconFalseColorPrimary5Data = {
    className: "",
    iconFalseProps: iconFalse5Data,
};

const sizemdIconLeading28Data = {
    text: "View Public Job Post",
    className: "button-base-16",
};

const sizemdHierarchySecondaryGrayIconLea28Data = {
    className: "button-02-4",
    sizemdIconLeading2Props: sizemdIconLeading28Data,
};

const supportingTextFalseStyleSimpleActio23Data = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary5Data,
    sizemdHierarchySecondaryGrayIconLea: sizemdHierarchySecondaryGrayIconLea28Data,
};

const helpIconFalseArrowFalseStateDefault23Data = {
    children: "Full Name",
    className: "",
};

const textTrueCheckboxFalseColorWhite23Data = {
    className: "table-header-cell-22",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault23Data,
};

const styleTextSupportingTextTrueStateDef15Data = {
    text: "Oren Rosenfeld",
    supportingText: "dolores.chambers@example.com",
    className: "table-cell-9",
};

const styleTextSupportingTextTrueStateDef16Data = {
    text: "Wade Warren",
    supportingText: "dolores.chambers@example.com",
    className: "table-cell-10",
};

const styleTextSupportingTextTrueStateDef17Data = {
    text: "Darrell Steward",
    supportingText: "jessica.hanson@example.com",
    className: "table-cell-11",
};

const styleTextSupportingTextTrueStateDef18Data = {
    text: "Brandon Philips",
    supportingText: "brandon.phili@gmail.com",
    className: "table-cell-12",
};

const styleTextSupportingTextTrueStateDef19Data = {
    text: "Albert Flores",
    supportingText: "kenzi.lawson@example.com",
    className: "table-cell-13",
};

const styleTextSupportingTextTrueStateDef20Data = {
    text: "Leslie Alexander",
    supportingText: "deanna.curtis@example.com",
    className: "table-cell-14",
};

const styleTextSupportingTextTrueStateDef21Data = {
    text: "Kristin Watson",
    supportingText: "michelle.rivera@example.com",
    className: "table-cell-15",
};

const column7Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite23Data,
    styleTextSupportingTextTrueStateDef: styleTextSupportingTextTrueStateDef15Data,
    styleTextSupportingTextTrueStateDef2: styleTextSupportingTextTrueStateDef16Data,
    styleTextSupportingTextTrueStateDef3: styleTextSupportingTextTrueStateDef17Data,
    styleTextSupportingTextTrueStateDef4: styleTextSupportingTextTrueStateDef18Data,
    styleTextSupportingTextTrueStateDef5: styleTextSupportingTextTrueStateDef19Data,
    styleTextSupportingTextTrueStateDef6: styleTextSupportingTextTrueStateDef20Data,
    styleTextSupportingTextTrueStateDef7: styleTextSupportingTextTrueStateDef21Data,
};

const helpIconFalseArrowFalseStateDefault24Data = {
    children: "Agency/ single",
    className: "table-header-21",
};

const textTrueCheckboxFalseColorWhite24Data = {
    className: "table-header-cell-23",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault24Data,
};

const styleTextSupportingTextFalseStateDe55Data = {
    children: "Agency",
    className: "table-cell-63",
};

const styleTextSupportingTextFalseStateDe56Data = {
    children: "Agency",
    className: "table-cell-64",
};

const styleTextSupportingTextFalseStateDe57Data = {
    children: "Single",
    className: "table-cell-65",
};

const styleTextSupportingTextFalseStateDe58Data = {
    children: "Agency",
    className: "table-cell-66",
};

const styleTextSupportingTextFalseStateDe59Data = {
    children: "Single",
    className: "table-cell-67",
};

const styleTextSupportingTextFalseStateDe60Data = {
    children: "Single",
    className: "table-cell-68",
};

const styleTextSupportingTextFalseStateDe61Data = {
    children: "Single",
    className: "table-cell-69",
};

const column22Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite24Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe55Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe56Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe57Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe58Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe59Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe60Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe61Data,
};

const helpIconFalseArrowFalseStateDefault25Data = {
    children: "Total Test Cost",
    className: "table-header-22",
};

const textTrueCheckboxFalseColorWhite25Data = {
    className: "table-header-cell-24",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault25Data,
};

const styleTextSupportingTextFalseStateDe62Data = {
    children: "$15.00",
    className: "table-cell-70",
};

const styleTextSupportingTextFalseStateDe410Data = {
    children: "$15.00",
};

const styleTextSupportingTextFalseStateDe63Data = {
    children: "$15.00",
    className: "table-cell-71",
};

const styleTextSupportingTextFalseStateDe64Data = {
    children: "$15.00",
    className: "table-cell-72",
};

const styleTextSupportingTextFalseStateDe65Data = {
    children: "$15.00",
    className: "table-cell-73",
};

const styleTextSupportingTextFalseStateDe66Data = {
    children: "$15.00",
    className: "table-cell-74",
};

const styleTextSupportingTextFalseStateDe67Data = {
    children: "$15.00",
    className: "table-cell-75",
};

const helpIconFalseArrowFalseStateDefault26Data = {
    children: "Estimated Start Date",
    className: "table-header-23",
};

const textTrueCheckboxFalseColorWhite26Data = {
    className: "table-header-cell-25",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault26Data,
};

const styleTextSupportingTextFalseStateDe68Data = {
    children: "Immediately",
    className: "table-cell-76",
};

const styleTextSupportingTextFalseStateDe69Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-77",
};

const styleTextSupportingTextFalseStateDe311Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-94",
};

const styleTextSupportingTextFalseStateDe70Data = {
    children: "Immediately",
    className: "table-cell-78",
};

const styleTextSupportingTextFalseStateDe71Data = {
    children: "Immediately",
    className: "table-cell-79",
};

const styleTextSupportingTextFalseStateDe72Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-80",
};

const styleTextSupportingTextFalseStateDe73Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-81",
};

const column32Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite26Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe68Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe69Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe311Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe70Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe71Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe72Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe73Data,
};

const helpIconFalseArrowFalseStateDefault27Data = {
    children: "Country",
    className: "table-header-24",
};

const textTrueCheckboxFalseColorWhite27Data = {
    className: "table-header-cell-26",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault27Data,
};

const socialIcon21Data = {
    src: "/img/us@2x.png",
    className: "us-10",
};

const tableCell29Data = {
    text: "United States",
    socialIconProps: socialIcon21Data,
};

const socialIcon22Data = {
    src: "/img/uy@2x.png",
    className: "uy-2",
};

const tableCell210Data = {
    text: "Argentina",
    className: "table-cell-117",
    socialIconProps: socialIcon22Data,
};

const socialIcon23Data = {
    src: "/img/se@2x.png",
    className: "se-2",
};

const tableCell211Data = {
    text: "Sweden",
    className: "table-cell-118",
    socialIconProps: socialIcon23Data,
};

const socialIcon24Data = {
    src: "/img/us@2x.png",
    className: "us-11",
};

const tableCell212Data = {
    text: "United States",
    className: "table-cell-119",
    socialIconProps: socialIcon24Data,
};

const socialIcon25Data = {
    src: "/img/us@2x.png",
    className: "us-12",
};

const tableCell213Data = {
    text: "United States",
    socialIconProps: socialIcon25Data,
};

const socialIcon26Data = {
    src: "/img/us@2x.png",
    className: "us-13",
};

const tableCell214Data = {
    text: "United States",
    socialIconProps: socialIcon26Data,
};

const socialIcon27Data = {
    src: "/img/us@2x.png",
    className: "us-14",
};

const tableCell215Data = {
    text: "United States",
    socialIconProps: socialIcon27Data,
};

const column42Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite27Data,
    tableCell21Props: tableCell29Data,
    tableCell22Props: tableCell210Data,
    tableCell23Props: tableCell211Data,
    tableCell24Props: tableCell212Data,
    tableCell25Props: tableCell213Data,
    tableCell26Props: tableCell214Data,
    tableCell27Props: tableCell215Data,
};

const helpIconFalseArrowFalseStateDefault28Data = {
    children: "Availability per week",
    className: "table-header-25",
};

const textTrueCheckboxFalseColorWhite28Data = {
    className: "table-header-cell-27",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault28Data,
};

const styleTextSupportingTextFalseStateDe74Data = {
    children: "10-20 hours",
    className: "table-cell-82",
};

const styleTextSupportingTextFalseStateDe75Data = {
    children: "10-20 hours",
    className: "table-cell-83",
};

const styleTextSupportingTextFalseStateDe76Data = {
    children: "10-20 hours",
    className: "table-cell-84",
};

const styleTextSupportingTextFalseStateDe77Data = {
    children: "10-20 hours",
    className: "table-cell-85",
};

const styleTextSupportingTextFalseStateDe78Data = {
    children: "10-20 hours",
    className: "table-cell-86",
};

const styleTextSupportingTextFalseStateDe79Data = {
    children: "10-20 hours",
    className: "table-cell-87",
};

const styleTextSupportingTextFalseStateDe80Data = {
    children: "10-20 hours",
    className: "table-cell-88",
};

const column52Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite28Data,
    styleTextSupportingTextFalseStateDe: styleTextSupportingTextFalseStateDe74Data,
    styleTextSupportingTextFalseStateDe2: styleTextSupportingTextFalseStateDe75Data,
    styleTextSupportingTextFalseStateDe3: styleTextSupportingTextFalseStateDe76Data,
    styleTextSupportingTextFalseStateDe4: styleTextSupportingTextFalseStateDe77Data,
    styleTextSupportingTextFalseStateDe5: styleTextSupportingTextFalseStateDe78Data,
    styleTextSupportingTextFalseStateDe6: styleTextSupportingTextFalseStateDe79Data,
    styleTextSupportingTextFalseStateDe7: styleTextSupportingTextFalseStateDe80Data,
};

const helpIconFalseArrowFalseStateDefault29Data = {
    children: "Status",
    className: "table-header-26",
};

const textTrueCheckboxFalseColorWhite29Data = {
    className: "table-header-cell-28",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault29Data,
};

const iconFalse6Data = {
    children: "Hired",
    className: "badge-base-4",
};

const sizesmIconFalseColorPrimary6Data = {
    className: "badge-3",
    iconFalseProps: iconFalse6Data,
};

const styleBadgeSupportingTextFalseStateD6Data = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary6Data,
};

const iconFalse23Data = {
    children: "Failed Test",
};

const sizesmIconFalseColorError2Data = {
    iconFalse2Props: iconFalse23Data,
};

const styleBadgeSupportingTextFalseStateD22Data = {
    sizesmIconFalseColorErrorProps: sizesmIconFalseColorError2Data,
};

const iconFalse33Data = {
    children: "Active",
    className: "badge-base-7",
};

const sizesmIconFalseColorBlueLight2Data = {
    className: "badge-6",
    iconFalse2Props: iconFalse33Data,
};

const styleBadgeSupportingTextFalseStateHData = {
    sizesmIconFalseColorBlueLightProps: sizesmIconFalseColorBlueLight2Data,
};

const helpIconFalseArrowFalseStateDefault30Data = {
    children: "More Info",
    className: "table-header-27",
};

const textTrueCheckboxFalseColorWhite30Data = {
    className: "table-header-cell-29",
    helpIconFalseArrowFalseStateDefault: helpIconFalseArrowFalseStateDefault30Data,
};

const sizemdIconOnly15Data = {
    src: "/img/chevron-right-6@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly15Data = {
    className: "button-39",
    sizemdIconOnlyProps: sizemdIconOnly15Data,
};

const styleActionIconsSupportingTextFalse15Data = {
    className: "table-cell-107",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly15Data,
};

const sizemdIconOnly16Data = {
    src: "/img/chevron-right-6@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly16Data = {
    className: "button-40",
    sizemdIconOnlyProps: sizemdIconOnly16Data,
};

const styleActionIconsSupportingTextFalse16Data = {
    className: "table-cell-108",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly16Data,
};

const sizemdIconOnly17Data = {
    src: "/img/chevron-right-6@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly17Data = {
    className: "button-41",
    sizemdIconOnlyProps: sizemdIconOnly17Data,
};

const styleActionIconsSupportingTextFalse17Data = {
    className: "table-cell-109",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly17Data,
};

const sizemdIconOnly18Data = {
    src: "/img/chevron-right-6@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly18Data = {
    className: "button-42",
    sizemdIconOnlyProps: sizemdIconOnly18Data,
};

const styleActionIconsSupportingTextFalse18Data = {
    className: "table-cell-110",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly18Data,
};

const sizemdIconOnly19Data = {
    src: "/img/chevron-right-6@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly19Data = {
    className: "button-43",
    sizemdIconOnlyProps: sizemdIconOnly19Data,
};

const styleActionIconsSupportingTextFalse19Data = {
    className: "table-cell-111",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly19Data,
};

const sizemdIconOnly20Data = {
    src: "/img/chevron-right-6@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly20Data = {
    className: "button-44",
    sizemdIconOnlyProps: sizemdIconOnly20Data,
};

const styleActionIconsSupportingTextFalse20Data = {
    className: "table-cell-112",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly20Data,
};

const sizemdIconOnly21Data = {
    src: "/img/chevron-right-6@2x.png",
};

const sizemdHierarchyTertiaryGrayIconOnly21Data = {
    className: "button-45",
    sizemdIconOnlyProps: sizemdIconOnly21Data,
};

const styleActionIconsSupportingTextFalse21Data = {
    className: "table-cell-113",
    sizemdHierarchyTertiaryGrayIconOnly: sizemdHierarchyTertiaryGrayIconOnly21Data,
};

const column62Data = {
    textTrueCheckboxFalseColorWhiteProp: textTrueCheckboxFalseColorWhite30Data,
    styleActionIconsSupportingTextFalse: styleActionIconsSupportingTextFalse15Data,
    styleActionIconsSupportingTextFalse2: styleActionIconsSupportingTextFalse16Data,
    styleActionIconsSupportingTextFalse3: styleActionIconsSupportingTextFalse17Data,
    styleActionIconsSupportingTextFalse4: styleActionIconsSupportingTextFalse18Data,
    styleActionIconsSupportingTextFalse5: styleActionIconsSupportingTextFalse19Data,
    styleActionIconsSupportingTextFalse6: styleActionIconsSupportingTextFalse20Data,
    styleActionIconsSupportingTextFalse7: styleActionIconsSupportingTextFalse21Data,
};

const iconFalse34Data = {
    children: "Ready for Test",
    className: "",
};

const sizesmIconFalseColorBlueLight3Data = {
    className: "badge-7",
    iconFalse2Props: iconFalse34Data,
};

const phone1Data = {
    phone: "Estimated Start Date",
    x4395821578: "Immediately",
};

const phone2Data = {
    phone: "Availability per week",
    x4395821578: "10-20 hours",
    className: "phone-12",
};

const frame11Data = {
    phone: "Plan to approach test",
    x4395821578: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet ac eget tellus sit cursus vestibulum.",
};

const dashboard2DrawerData = {
    bg: "/img/bg@2x.png",
    text: "OR",
    helenaChavez: "Brandon Philips",
    globe: "/img/globe-6@2x.png",
    uiUxDesigner: "United States",
    email: "Email",
    johannaStevensGmai: "brandon.phili@gmail.com",
    meeting: "Agency/ single",
    httpGoBetacallC: "Agency",
    line31: "/img/line-3@2x.png",
    phone1: "Hourly Fee",
    x43958215781: "$15.00",
    line32: "/img/line-3-1@2x.png",
    phone2: "Estimation for test",
    x43958215782: "1 Hour",
    line4: "/img/line-3-1@2x.png",
    phone3: "Total Test",
    x43958215783: "$15.00",
    phone4: "Links to similar work / portfolio",
    x43958215784: <>https://dribbble.com/ildiesign<br />https://www.behance.net/CourtneyHopkinson</>,
    phone5: "Questions",
    x43958215785: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    x43958215786: "Lorem ipsum dolor sit amet, consectetur?",
    headerNavigationProps: headerNavigation5Data,
    dividerChevronTypeTextBreakpointDes2Props: dividerChevronTypeTextBreakpointDes23Data,
    breadcrumbsFalseSupportingTextTrueS3Props: breadcrumbsFalseSupportingTextTrueS33Data,
    supportingTextFalseStyleSimpleActio2Props: supportingTextFalseStyleSimpleActio23Data,
    columnProps: column7Data,
    column2Props: column22Data,
    textTrueCheckboxFalseColorWhite1Props: textTrueCheckboxFalseColorWhite25Data,
    styleTextSupportingTextFalseStateDe1Props: styleTextSupportingTextFalseStateDe62Data,
    styleTextSupportingTextFalseStateDe4Props: styleTextSupportingTextFalseStateDe410Data,
    styleTextSupportingTextFalseStateDe2Props: styleTextSupportingTextFalseStateDe63Data,
    styleTextSupportingTextFalseStateDe3Props: styleTextSupportingTextFalseStateDe64Data,
    styleTextSupportingTextFalseStateDe4Props2: styleTextSupportingTextFalseStateDe65Data,
    styleTextSupportingTextFalseStateDe5Props: styleTextSupportingTextFalseStateDe66Data,
    styleTextSupportingTextFalseStateDe6Props: styleTextSupportingTextFalseStateDe67Data,
    column3Props: column32Data,
    column4Props: column42Data,
    column5Props: column52Data,
    textTrueCheckboxFalseColorWhite2Props: textTrueCheckboxFalseColorWhite29Data,
    styleBadgeSupportingTextFalseStateDProps: styleBadgeSupportingTextFalseStateD6Data,
    styleBadgeSupportingTextFalseStateD2Props: styleBadgeSupportingTextFalseStateD22Data,
    styleBadgeSupportingTextFalseStateHProps: styleBadgeSupportingTextFalseStateHData,
    column6Props: column62Data,
    sizesmIconFalseColorBlueLightProps: sizesmIconFalseColorBlueLight3Data,
    phone1Props: phone1Data,
    phone2Props: phone2Data,
    frame11Props: frame11Data,
};

