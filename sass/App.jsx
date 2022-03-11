import "./App.sass";
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
            <Desktop
              content3Props={desktopData.content3Props}
              currentTrueBadgeFalseToggleFalseIco={desktopData.currentTrueBadgeFalseToggleFalseIco}
              typeAvatarOpenFalseProps={desktopData.typeAvatarOpenFalseProps}
              breadcrumbsFalseSupportingTextTrueS={desktopData.breadcrumbsFalseSupportingTextTrueS}
              content41Props={desktopData.content41Props}
              content42Props={desktopData.content42Props}
              content43Props={desktopData.content43Props}
            />
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
            <ForgotPassword2
              text1="Check your email"
              spanText1="We sent a password reset link to "
              spanText2="olivia@untitledui.com"
              text2="Didn’t receive the email?"
              sizelgHierarchyPrimaryIconFalseDest2Props={forgotPassword2Data.sizelgHierarchyPrimaryIconFalseDest2Props}
              sizemdHierarchyLinkColorIconFalseDe2Props={forgotPassword2Data.sizemdHierarchyLinkColorIconFalseDe2Props}
              sizemdHierarchyLinkGrayIconLeadingDProps={forgotPassword2Data.sizemdHierarchyLinkGrayIconLeadingDProps}
            />
          </Route>
          <Route path="/forgot-password-1">
            <ForgotPassword1
              headerProps={forgotPassword1Data.headerProps}
              typeDefaultLeadingIconFalseLabelTruProps={forgotPassword1Data.typeDefaultLeadingIconFalseLabelTruProps}
              sizelgHierarchyPrimaryIconFalseDest2Props={forgotPassword1Data.sizelgHierarchyPrimaryIconFalseDest2Props}
              sizemdHierarchyLinkGrayIconLeadingDProps={forgotPassword1Data.sizemdHierarchyLinkGrayIconLeadingDProps}
            />
          </Route>
          <Route path="/forgot-password-4">
            <ForgotPassword4
              textAndSupportingTextProps={forgotPassword4Data.textAndSupportingTextProps}
              sizelgHierarchyPrimaryIconFalseDest2Props={forgotPassword4Data.sizelgHierarchyPrimaryIconFalseDest2Props}
              sizemdHierarchyLinkGrayIconLeadingDProps={forgotPassword4Data.sizemdHierarchyLinkGrayIconLeadingDProps}
            />
          </Route>
          <Route path="/forgot-password-3">
            <ForgotPassword3
              headerProps={forgotPassword3Data.headerProps}
              typeDefaultLeadingIconFalseLabelTru3Props={forgotPassword3Data.typeDefaultLeadingIconFalseLabelTru3Props}
              typeDefaultLeadingIconFalseLabelTruProps={forgotPassword3Data.typeDefaultLeadingIconFalseLabelTruProps}
              sizelgHierarchyPrimaryIconFalseDest2Props={forgotPassword3Data.sizelgHierarchyPrimaryIconFalseDest2Props}
              sizemdHierarchyLinkGrayIconLeadingDProps={forgotPassword3Data.sizemdHierarchyLinkGrayIconLeadingDProps}
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
        </Switch>
      </Router>
    );
  }
}

export default App;
const iconTrueCheckboxFalseShortcutFalseSData = {
    logOut: "/img/log-out@2x.svg",
    text: "Log out",
};

const dropdownMenuBaseData = {
    iconTrueCheckboxFalseShortcutFalseS: iconTrueCheckboxFalseShortcutFalseSData,
};

const dropdownMenuData = {
    dropdownMenuBaseProps: dropdownMenuBaseData,
};

const frame31Data = {
    vector7: "/img/vector-7@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.svg",
    className: "",
};

const companyLogo1Data = {
    frame3Props: frame31Data,
};

const typeAvatarOpenFalse2Data = {
    className: "dropdown-1",
};

const headerNavigation1Data = {
    companyLogoProps: companyLogo1Data,
    typeAvatarOpenFalseProps: typeAvatarOpenFalse2Data,
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
    chevronRight1: "/img/chevron-right@2x.svg",
    chevronRight2: "/img/chevron-right@2x.svg",
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

const frame140151Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF1Data,
};

const supportingTextTrueTabsFalseActionsF2Data = {
    children: "Screening Test (Paid)",
};

const frame140161Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF2Data,
};

const supportingTextTrueTabsFalseActionsF3Data = {
    children: "Additional Notes",
};

const frame140171Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF3Data,
};

const supportingTextTrueTabsFalseActionsF4Data = {
    children: "Apply to Job",
};

const typeDefaultDestructiveFalse1Data = {
    label: "Full Name *",
    text: "Enter your full name",
    className: "",
};

const typeDefaultLeadingIconFalseLabelTru1Data = {
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse1Data,
};

const typeDefaultDestructiveFalse2Data = {
    label: "Email *",
    text: "Enter your email address",
    className: "input-field-base",
};

const typeDefaultLeadingIconFalseLabelTru2Data = {
    className: "input-field-1",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse2Data,
};

const labelTrueTypeDefaultStatePlaceholde1Data = {
    label: "Country",
    text: "Select a country",
    className: "",
};

const statePlaceholderTypeDefaultSupporti1Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde1Data,
};

const typeLeadingTextDestructiveFalse1Data = {
    className: "",
};

const typeLeadingTextDestructiveFalse21Data = {
    typeLeadingTextDestructiveFalseProp: typeLeadingTextDestructiveFalse1Data,
};

const text1Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault1Data = {
    className: "",
    textProps: text1Data,
};

const stateDefaultTypeDefaultSupportingTe1Data = {
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault1Data,
};

const labelTrueTypeDefaultStatePlaceholde2Data = {
    label: "Estimation to perform test*",
    text: "Select your estimation",
    className: "input-dropdown-base",
};

const statePlaceholderTypeDefaultSupporti2Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde2Data,
};

const labelTrueTypeDefaultStatePlaceholde3Data = {
    label: "Expected availability per week",
    text: "Select your weekly availability",
    className: "input-dropdown-base-6",
};

const statePlaceholderTypeDefaultSupporti3Data = {
    className: "input-dropdown-6",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde3Data,
};

const input1Data = {
    children: "I plan to do X, then Y",
};

const destructiveFalse1Data = {
    className: "",
    inputProps: input1Data,
};

const destructiveFalse61Data = {
    inputProps: destructiveFalse1Data,
};

const input2Data = {
    children: <>Dribble profile<br />Behance profile</>,
};

const destructiveFalse2Data = {
    className: "textarea-input-field-base-3",
    inputProps: input2Data,
};

const destructiveFalse62Data = {
    inputProps: destructiveFalse2Data,
};

const input3Data = {
    children: "Ask us anything...",
};

const destructiveFalse3Data = {
    className: "textarea-input-field-base",
    inputProps: input3Data,
};

const destructiveFalse63Data = {
    inputProps: destructiveFalse3Data,
};

const sizemdIconFalse2Data = {
    className: "button-base-3",
};

const stateDefault2Data = {
    className: "button-1",
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
    className: "select-2-1",
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
    className: "select-2-2",
};

const property1AmenitiesProperty2False6Data = {
    children: "Skill #1",
    className: "select-1",
};

const property1AmenitiesProperty2False7Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False8Data = {
    children: "Skill #1",
    className: "select-1",
};

const property1AmenitiesProperty2False9Data = {
    children: "long skill Skill #1",
    className: "select-2",
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

const content21Data = {
    text: "Preference for Agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
};

const preferenceAgency1Data = {
    content2Props: content21Data,
};

const content22Data = {
    text: "Company Website",
    supportingText: "www.airbnb.com",
    className: "content-9",
};

const frame140691Data = {
    preferenceAgencyProps: preferenceAgency1Data,
    content2Props: content22Data,
};

const frame337601Data = {
    section32Props: section321Data,
    frame14069Props: frame140691Data,
};

const publicWebPageHRViewData = {
    text: "Technical Program Manager, Mobile Software Engineering",
    label: "Estimated start date",
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
    typeLeadingTextDestructiveFalse2Pro: typeLeadingTextDestructiveFalse21Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe1Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti2Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti3Data,
    destructiveFalse61Props: destructiveFalse61Data,
    destructiveFalse62Props: destructiveFalse62Data,
    destructiveFalse63Props: destructiveFalse63Data,
    footerProps: footer1Data,
    frame33760Props: frame337601Data,
};

const frame32Data = {
    vector7: "/img/vector-7-1@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.svg",
    className: "",
};

const content31Data = {
    frame3Props: frame32Data,
};

const currentTrueBadgeFalseToggleFalseIco1Data = {
    children: "Job Posts",
};

const typeAvatarOpenFalse3Data = {
    className: "dropdown-2",
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
    supportingText: "List of links you created to attract candidates",
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
    className: "card-1",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe3Data,
};

const content41Data = {
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
    className: "card-1",
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
    className: "card-1",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe6Data,
};

const content42Data = {
    className: "content-18",
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
    className: "card-1",
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
    className: "card-1",
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe9Data,
};

const content43Data = {
    className: "content-18",
    card1Props: card7Data,
    card2Props: card8Data,
    card3Props: card9Data,
};

const desktopData = {
    content3Props: content31Data,
    currentTrueBadgeFalseToggleFalseIco: currentTrueBadgeFalseToggleFalseIco1Data,
    typeAvatarOpenFalseProps: typeAvatarOpenFalse3Data,
    breadcrumbsFalseSupportingTextTrueS: breadcrumbsFalseSupportingTextTrueSData,
    content41Props: content41Data,
    content42Props: content42Data,
    content43Props: content43Data,
};

const frame33Data = {
    vector7: "/img/vector-7-2@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1-2@2x.svg",
    className: "frame-3-2",
};

const companyLogo2Data = {
    frame3Props: frame33Data,
};

const socialIcon1Data = {
    src: "/img/menu-2@2x.svg",
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

const sizesmIconLeading2Data = {
    className: "button-base-1",
};

const sizemdIconFalse3Data = {
    className: "",
};

const stateDefault3Data = {
    className: "button-2",
    sizemdIconFalseProps: sizemdIconFalse3Data,
};

const supportingTextFalseTabsFalseActions1Data = {
    children: "Job Description",
};

const section31Data = {
    supportingTextFalseTabsFalseActions: supportingTextFalseTabsFalseActions1Data,
};

const property1AmenitiesProperty2False22Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False23Data = {
    children: "Skill #1",
    className: "select-14",
};

const property1AmenitiesProperty2False24Data = {
    children: "long skill Skill #1",
    className: "select-15-1",
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
    className: "select-15-2",
};

const property1AmenitiesProperty2False27Data = {
    children: "Skill #1",
    className: "select-14",
};

const property1AmenitiesProperty2False28Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False29Data = {
    children: "Skill #1",
    className: "select-14",
};

const property1AmenitiesProperty2False210Data = {
    children: "long skill Skill #1",
    className: "select-15",
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

const content23Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
};

const preferenceAgency2Data = {
    className: "preference-1",
    content2Props: content23Data,
};

const content24Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "content-11",
};

const frame1406921Data = {
    preferenceAgencyProps: preferenceAgency2Data,
    content2Props: content24Data,
};

const supportingTextFalseTabsFalseActions2Data = {
    children: "Apply to Job",
    className: "section-header-8",
};

const input22Data = {
    children: "Enter your full name",
};

const typeDefaultDestructiveFalse22Data = {
    label: "Full Name *",
    className: "",
    input2Props: input22Data,
};

const typeDefaultLeadingIconFalseLabelTru22Data = {
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse22Data,
};

const input23Data = {
    children: "Enter your email address",
};

const typeDefaultDestructiveFalse23Data = {
    label: "Email *",
    className: "input-field-base-14",
    input2Props: input23Data,
};

const typeDefaultLeadingIconFalseLabelTru23Data = {
    className: "input-field-18",
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse23Data,
};

const labelTrueTypeDefaultStatePlaceholde4Data = {
    label: "Country",
    text: "Select a country",
    className: "input-dropdown-base-4-1",
};

const statePlaceholderTypeDefaultSupporti4Data = {
    className: "input-dropdown-4",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde4Data,
};

const typeLeadingTextDestructiveFalse3Data = {
    className: "input-field-base-9",
};

const typeLeadingTextDestructiveFalse22Data = {
    className: "input-field-6",
    typeLeadingTextDestructiveFalseProp: typeLeadingTextDestructiveFalse3Data,
};

const text2Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault2Data = {
    className: "input-dropdown-base-11",
    textProps: text2Data,
};

const stateDefaultTypeDefaultSupportingTe2Data = {
    className: "input-dropdown-12",
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault2Data,
};

const labelTrueTypeDefaultStatePlaceholde5Data = {
    label: "Estimation to perform test*",
    text: "Select your estimation",
    className: "input-dropdown-base-4-2",
};

const statePlaceholderTypeDefaultSupporti5Data = {
    className: "input-dropdown-4",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde5Data,
};

const labelTrueTypeDefaultStatePlaceholde6Data = {
    label: "Expected availability per week",
    text: "Select your weekly availability",
    className: "input-dropdown-base-4",
};

const statePlaceholderTypeDefaultSupporti6Data = {
    className: "input-dropdown-4",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde6Data,
};

const input24Data = {
    children: "I plan to do X, then Y",
    className: "input-29",
};

const destructiveFalse22Data = {
    className: "",
    input2Props: input24Data,
};

const destructiveFalse222Data = {
    input2Props: destructiveFalse22Data,
};

const input25Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "input-26-1",
};

const destructiveFalse23Data = {
    className: "textarea-input-field-base-6",
    input2Props: input25Data,
};

const destructiveFalse223Data = {
    input2Props: destructiveFalse23Data,
};

const input26Data = {
    children: "Ask us anything...",
    className: "input-26",
};

const destructiveFalse24Data = {
    className: "textarea-input-field-base-4",
    input2Props: input26Data,
};

const destructiveFalse224Data = {
    input2Props: destructiveFalse24Data,
};

const sizemdIconFalse4Data = {
    className: "button-base-5",
};

const stateDefault4Data = {
    className: "button-3",
    sizemdIconFalseProps: sizemdIconFalse4Data,
};

const footer21Data = {
    stateDefaultProps: stateDefault4Data,
};

const publicWebPageHRView2Data = {
    text: "Technical Program Manager, Mobile Software Engineering",
    companyLogoProps: companyLogo2Data,
    openedFalseColorGrayThemeLightState: openedFalseColorGrayThemeLightState1Data,
    sizemdHierarchyLinkGrayIconLeadingD: sizemdHierarchyLinkGrayIconLeadingD1Data,
    sizesmIconLeadingProps: sizesmIconLeading2Data,
    stateDefaultProps: stateDefault3Data,
    section3Props: section31Data,
    shareProjectProps: shareProject1Data,
    frame140692Props: frame1406921Data,
    supportingTextFalseTabsFalseActions: supportingTextFalseTabsFalseActions2Data,
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru22Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru23Data,
    statePlaceholderTypeDefaultSupporti: statePlaceholderTypeDefaultSupporti4Data,
    typeLeadingTextDestructiveFalse2Pro: typeLeadingTextDestructiveFalse22Data,
    stateDefaultTypeDefaultSupportingTe: stateDefaultTypeDefaultSupportingTe2Data,
    statePlaceholderTypeDefaultSupporti2: statePlaceholderTypeDefaultSupporti5Data,
    statePlaceholderTypeDefaultSupporti3: statePlaceholderTypeDefaultSupporti6Data,
    destructiveFalse221Props: destructiveFalse222Data,
    destructiveFalse222Props: destructiveFalse223Data,
    destructiveFalse223Props: destructiveFalse224Data,
    footer2Props: footer21Data,
};

const typeDefaultDestructiveFalse3Data = {
    label: "Name*",
    text: "Enter your full name",
    className: "input-4-1",
};

const typeDefaultLeadingIconFalseLabelTru3Data = {
    className: "input-field-2",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse3Data,
};

const typeDefaultDestructiveFalse4Data = {
    label: "Email*",
    text: "Enter your Email",
    className: "input-4-2",
};

const typeDefaultLeadingIconFalseLabelTru4Data = {
    className: "input-field-3",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse4Data,
};

const typeDefaultDestructiveFalse5Data = {
    label: "Password*",
    text: "Create a password",
    className: "input-4",
};

const typeDefaultDestructiveFalse222Data = {
    label: "Must be at least 8 characters.",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse5Data,
};

const typeDefaultLeadingIconFalseLabelTru32Data = {
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse222Data,
};

const sizelgIconFalseData = {
    children: "Get started",
};

const sizelgHierarchyPrimaryIconFalseDestData = {
    sizelgIconFalseProps: sizelgIconFalseData,
};

const socialIcon2Data = {
    src: "/img/social-icon@2x.svg",
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
    className: "button-base-20",
};

const sizemdHierarchyLinkColorIconFalseDe10Data = {
    className: "button-14",
    sizemdIconFalse2Props: sizemdIconFalse211Data,
};

const signUpData = {
    text1: "Create an account",
    supportingText: "To create your job post and get candidates you will need to sign in",
    text2: "Already have an account?",
    typeDefaultLeadingIconFalseLabelTru: typeDefaultLeadingIconFalseLabelTru3Data,
    typeDefaultLeadingIconFalseLabelTru2: typeDefaultLeadingIconFalseLabelTru4Data,
    typeDefaultLeadingIconFalseLabelTru3: typeDefaultLeadingIconFalseLabelTru32Data,
    sizelgHierarchyPrimaryIconFalseDest: sizelgHierarchyPrimaryIconFalseDestData,
    styleButtonsThemeColorWithBrandProp: styleButtonsThemeColorWithBrandData,
    sizemdHierarchyLinkColorIconFalseDe: sizemdHierarchyLinkColorIconFalseDe10Data,
};

const supportingTextTrueTabsFalseActionsF5Data = {
    children: "General Instructions",
};

const supportingTextTrueTabsFalseActionsF6Data = {
    children: "Test overview",
};

const frame140162Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF6Data,
};

const supportingTextTrueTabsFalseActionsF7Data = {
    children: "Additional notes from hiring manager",
};

const frame140172Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF7Data,
};

const supportingTextTrueTabsFalseActionsF8Data = {
    children: "Apply to Job",
    className: "section-header-4",
};

const typeDefaultDestructiveFalse6Data = {
    label: "Full Name *",
    text: "Enter your full name",
    className: "",
};

const typeDefaultLeadingIconFalseLabelTru5Data = {
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse6Data,
};

const typeDefaultDestructiveFalse7Data = {
    label: "Email *",
    text: "Enter your email address",
    className: "input-field-base",
};

const typeDefaultLeadingIconFalseLabelTru6Data = {
    className: "input-field-5",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse7Data,
};

const labelTrueTypeDefaultStatePlaceholde7Data = {
    label: "Country",
    text: "Select a country",
    className: "input-dropdown-base-1-1",
};

const statePlaceholderTypeDefaultSupporti7Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde7Data,
};

const typeLeadingTextDestructiveFalse4Data = {
    className: "input-field-base-10",
};

const typeLeadingTextDestructiveFalse23Data = {
    className: "input-field-8",
    typeLeadingTextDestructiveFalseProp: typeLeadingTextDestructiveFalse4Data,
};

const text3Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault3Data = {
    className: "input-dropdown-base-12",
    textProps: text3Data,
};

const stateDefaultTypeDefaultSupportingTe3Data = {
    className: "input-dropdown-13",
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault3Data,
};

const labelTrueTypeDefaultStatePlaceholde8Data = {
    label: "Estimation to perform test*",
    text: "Select your estimation",
    className: "input-dropdown-base-1-2",
};

const statePlaceholderTypeDefaultSupporti8Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde8Data,
};

const labelTrueTypeDefaultStatePlaceholde9Data = {
    label: "Expected availability per week",
    text: "Select your weekly availability",
    className: "input-dropdown-base-1",
};

const statePlaceholderTypeDefaultSupporti9Data = {
    className: "input-dropdown-7",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde9Data,
};

const input4Data = {
    children: "I plan to do X, then Y",
    className: "input-20",
};

const destructiveFalse32Data = {
    label: "Add a description of how you plan to approach the test",
    className: "",
    inputProps: input4Data,
};

const labelTrueHintTextFalseDestructiveFa31Data = {
    destructiveFalse3Props: destructiveFalse32Data,
};

const input5Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "input-20",
};

const destructiveFalse41Data = {
    inputProps: input5Data,
};

const labelTrueHintTextFalseDestructiveFa41Data = {
    destructiveFalse4Props: destructiveFalse41Data,
};

const input6Data = {
    children: "Ask us anything...",
    className: "input-20",
};

const destructiveFalse33Data = {
    label: "Add questions if you have any",
    className: "input-field-base-14",
    inputProps: input6Data,
};

const labelTrueHintTextFalseDestructiveFa32Data = {
    className: "textarea-input-field-5",
    destructiveFalse3Props: destructiveFalse33Data,
};

const applicantDetails1Data = {
    supportingTextTrueTabsFalseActionsFProps: supportingTextTrueTabsFalseActionsF8Data,
    typeDefaultLeadingIconFalseLabelTru1Props: typeDefaultLeadingIconFalseLabelTru5Data,
    typeDefaultLeadingIconFalseLabelTru2Props: typeDefaultLeadingIconFalseLabelTru6Data,
    statePlaceholderTypeDefaultSupporti1Props: statePlaceholderTypeDefaultSupporti7Data,
    typeLeadingTextDestructiveFalse2Props: typeLeadingTextDestructiveFalse23Data,
    stateDefaultTypeDefaultSupportingTeProps: stateDefaultTypeDefaultSupportingTe3Data,
    statePlaceholderTypeDefaultSupporti2Props: statePlaceholderTypeDefaultSupporti8Data,
    statePlaceholderTypeDefaultSupporti3Props: statePlaceholderTypeDefaultSupporti9Data,
    labelTrueHintTextFalseDestructiveFa31Props: labelTrueHintTextFalseDestructiveFa31Data,
    labelTrueHintTextFalseDestructiveFa4Props: labelTrueHintTextFalseDestructiveFa41Data,
    labelTrueHintTextFalseDestructiveFa32Props: labelTrueHintTextFalseDestructiveFa32Data,
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
    className: "",
    sizemdIconFalseProps: sizemdIconFalse5Data,
};

const heading1Data = {
    stateDefaultProps: stateDefault5Data,
};

const container1Data = {
    headingProps: heading1Data,
};

const property1AmenitiesProperty2False10Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False11Data = {
    children: "Skill #1",
    className: "select-4",
};

const property1AmenitiesProperty2False12Data = {
    children: "long skill Skill #1",
    className: "select-5-1",
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
    className: "select-5-2",
};

const property1AmenitiesProperty2False15Data = {
    children: "Skill #1",
    className: "select-4",
};

const property1AmenitiesProperty2False16Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False17Data = {
    children: "Skill #1",
    className: "select-4",
};

const property1AmenitiesProperty2False18Data = {
    children: "long skill Skill #1",
    className: "select-5",
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

const content25Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
};

const preferenceAgency3Data = {
    content2Props: content25Data,
};

const content26Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "content-13",
};

const frame140693Data = {
    preferenceAgencyProps: preferenceAgency3Data,
    content2Props: content26Data,
};

const frame337602Data = {
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
    paragraph: <>Google builds products that help create opportunities for everyone, whether they’re down the street or across the globe.<br />As a Technical Program Manager for mobile software engineering, you’ll manage the development of products that get our users the information they need, no matter where they are — including phones, tablets, TVs, wearable devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify risks, manage schedules, and communicate clearly with project stakeholders. And, thanks to Google’s industry leading benefits and ample opportunities for personal and professional development, you’ll learn and grow alongside talented teammates who share your attention to detail and appetite for problem-solving.<br />Candidates of all experience levels are encouraged to apply. We&#x27;ll consider your experience to best match you with open roles.</>,
    supportingTextTrueTabsFalseActionsFProps: supportingTextTrueTabsFalseActionsF5Data,
    frame14016Props: frame140162Data,
    frame14017Props: frame140172Data,
    applicantDetailsProps: applicantDetails1Data,
    sizexlHierarchyPrimaryIconFalseDestProps: sizexlHierarchyPrimaryIconFalseDestData,
    containerProps: container1Data,
    frame33760Props: frame337602Data,
};

const typeDefaultDestructiveFalse8Data = {
    label: "Full Name *",
    text: "Enter your full name",
    className: "",
};

const typeDefaultLeadingIconFalseLabelTru7Data = {
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse8Data,
};

const text4Data = {
    children: "Guy Cohen",
    className: "text-37",
};

const selectedFalseSupportingTextFalseTyp1Data = {
    className: "",
    textProps: text4Data,
};

const typeDefaultDestructiveFalse42Data = {
    className: "",
    selectedFalseSupportingTextFalseTypProps: selectedFalseSupportingTextFalseTyp1Data,
};

const typeDefaultLeadingIconFalseLabelTru42Data = {
    typeDefaultDestructiveFalse4Props: typeDefaultDestructiveFalse42Data,
};

const text5Data = {
    children: "Guy Cohen",
    className: "text-37",
};

const selectedFalseSupportingTextFalseTyp2Data = {
    className: "input-35",
    textProps: text5Data,
};

const typeDefaultDestructiveFalse43Data = {
    className: "input-field-base-18",
    selectedFalseSupportingTextFalseTypProps: selectedFalseSupportingTextFalseTyp2Data,
};

const typeDefaultLeadingIconFalseLabelTru43Data = {
    typeDefaultDestructiveFalse4Props: typeDefaultDestructiveFalse43Data,
};

const typeDefaultDestructiveFalse9Data = {
    label: "Full Name *",
    text: "Guy Cohen",
    className: "input-field-base-2",
};

const typeDefaultLeadingIconFalseLabelTru8Data = {
    className: "input-field-7",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse9Data,
};

const text6Data = {
    children: "Enter your full name",
    className: "text-45",
};

const typeDefaultDestructiveTrueData = {
    label: "Full Name *",
    hintText: "This is a error message.",
    textProps: text6Data,
};

const typeDefaultLeadingIconFalseLabelTru52Data = {
    typeDefaultDestructiveTrueProps: typeDefaultDestructiveTrueData,
};

const typeDefaultDestructiveFalse52Data = {
    label: "Full Name *",
    text: "Enter your full name",
};

const typeDefaultLeadingIconFalseLabelTru62Data = {
    typeDefaultDestructiveFalse5Props: typeDefaultDestructiveFalse52Data,
};

const input7Data = {
    children: "Ask us anything...",
    className: "input-22",
};

const destructiveFalse34Data = {
    label: "Add questions if you have any",
    className: "textarea-input-field-base-9",
    inputProps: input7Data,
};

const labelTrueHintTextFalseDestructiveFa33Data = {
    className: "textarea-input-field-6",
    destructiveFalse3Props: destructiveFalse34Data,
};

const text7Data = {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, proin risus, massa vitae vitae, interdum odio convallis. Habitant dictum sit consectetur volutpat. Dui facilisi dolor lectus sit egestas dignissim pellentesque id vulputate. Arcu sit nulla sed fermentum, nulla tellus.",
    className: "text-47",
};

const text8Data = {
    children: "Ask us anything...",
    className: "text-48",
};

const destructiveFalse5Data = {
    label: "Add questions if you have any",
    textProps: text8Data,
};

const labelTrueHintTextFalseDestructiveFa5Data = {
    destructiveFalse5Props: destructiveFalse5Data,
};

const input8Data = {
    children: "Ask us anything...",
    className: "input-23",
};

const destructiveFalse35Data = {
    label: "Add questions if you have any",
    className: "input-field-base-14",
    inputProps: input8Data,
};

const labelTrueHintTextFalseDestructiveFa34Data = {
    className: "textarea-input-field-7",
    destructiveFalse3Props: destructiveFalse35Data,
};

const input9Data = {
    children: "Ask us anything...",
    className: "input-24",
};

const destructiveFalse36Data = {
    label: "Add questions if you have any",
    className: "input-with-label",
    inputProps: input9Data,
};

const destructiveTrueData = {
    hintText: "This is a error message.",
    destructiveFalse3Props: destructiveFalse36Data,
};

const labelTrueHintTextTrueDestructiveTruData = {
    destructiveTrueProps: destructiveTrueData,
};

const labelTrueTypeDefaultStatePlaceholde10Data = {
    label: "Estimation to perform test*",
    text: "Select your estimation",
    className: "input-dropdown-base-7",
};

const statePlaceholderTypeDefaultSupporti10Data = {
    className: "input-dropdown-8",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde10Data,
};

const text9Data = {
    children: "1-2 hours",
    className: "text-38",
};

const selectedTrueSupportingTextFalseType1Data = {
    className: "",
    textProps: text9Data,
};

const labelTrueTypeDefaultStateDefault22Data = {
    label: "Estimation to perform test*",
    selectedTrueSupportingTextFalseTypeProps: selectedTrueSupportingTextFalseType1Data,
};

const stateDefaultTypeDefaultSupportingTe22Data = {
    labelTrueTypeDefaultStateDefault2Props: labelTrueTypeDefaultStateDefault22Data,
};

const text10Data = {
    children: "Select your estimation",
    className: "text-50",
};

const selectedTrueSupportingTextFalseType2Data = {
    className: "input-39-1",
    textProps: text10Data,
};

const labelTrueTypeDefaultStateDefault23Data = {
    label: "Estimation to perform test*",
    className: "input-dropdown-base-16-2",
    selectedTrueSupportingTextFalseTypeProps: selectedTrueSupportingTextFalseType2Data,
};

const text11Data = {
    children: "Less than 1 hour",
    className: "text-51",
};

const selectedTrueSupportingTextFalseType3Data = {
    className: "input-dropdown-menu-item-1-1",
    textProps: text11Data,
};

const text12Data = {
    children: "1-2 hours",
    className: "text-38",
};

const selectedFalseSupportingTextFalseTyp3Data = {
    className: "input-dropdown-menu-item",
    textProps: text12Data,
};

const text13Data = {
    children: " 2-3 hours",
    className: "text-53",
};

const selectedFalseSupportingTextFalseTyp4Data = {
    className: "input-dropdown-menu-item",
    textProps: text13Data,
};

const text14Data = {
    children: "Over 3 hours",
    className: "text-54",
};

const selectedFalseSupportingTextFalseTyp5Data = {
    className: "input-dropdown-menu-item",
    textProps: text14Data,
};

const typeDefaultSupportingTextFalseScrolData = {
    selectedTrueSupportingTextFalseTypeProps: selectedTrueSupportingTextFalseType3Data,
    selectedFalseSupportingTextFalseTyp1Props: selectedFalseSupportingTextFalseTyp3Data,
    selectedFalseSupportingTextFalseTyp2Props: selectedFalseSupportingTextFalseTyp4Data,
    selectedFalseSupportingTextFalseTyp3Props: selectedFalseSupportingTextFalseTyp5Data,
};

const stateOpenfocusedTypeDefaultSupportiData = {
    labelTrueTypeDefaultStateDefault2Props: labelTrueTypeDefaultStateDefault23Data,
    typeDefaultSupportingTextFalseScrolProps: typeDefaultSupportingTextFalseScrolData,
};

const text15Data = {
    children: "Select your weekly availability",
    className: "text-55",
};

const selectedTrueSupportingTextFalseType4Data = {
    className: "input-39",
    textProps: text15Data,
};

const labelTrueTypeDefaultStateDefault24Data = {
    label: "Expected availability per week",
    className: "input-dropdown-base-16",
    selectedTrueSupportingTextFalseTypeProps: selectedTrueSupportingTextFalseType4Data,
};

const text16Data = {
    children: "Less than 10 hours",
    className: "text-56",
};

const selectedTrueSupportingTextFalseType5Data = {
    className: "input-dropdown-menu-item-1",
    textProps: text16Data,
};

const text17Data = {
    children: "10-20 hours",
    className: "text-57",
};

const selectedFalseSupportingTextFalseTyp6Data = {
    className: "input-dropdown-menu-item",
    textProps: text17Data,
};

const text18Data = {
    children: "20-30 hours",
    className: "text-40",
};

const selectedFalseSupportingTextFalseTyp7Data = {
    className: "input-dropdown-menu-item",
    textProps: text18Data,
};

const text19Data = {
    children: "30-40 hours",
    className: "text-40",
};

const selectedFalseSupportingTextFalseTyp8Data = {
    className: "input-dropdown-menu-item",
    textProps: text19Data,
};

const text20Data = {
    children: "Over 40 hours",
    className: "text-58",
};

const selectedFalseSupportingTextFalseTyp9Data = {
    className: "input-dropdown-menu-item",
    textProps: text20Data,
};

const typeDefaultSupportingTextFalseScrol2Data = {
    selectedTrueSupportingTextFalseTypeProps: selectedTrueSupportingTextFalseType5Data,
    selectedFalseSupportingTextFalseTyp1Props: selectedFalseSupportingTextFalseTyp6Data,
    selectedFalseSupportingTextFalseTyp2Props: selectedFalseSupportingTextFalseTyp7Data,
    selectedFalseSupportingTextFalseTyp3Props: selectedFalseSupportingTextFalseTyp8Data,
    selectedFalseSupportingTextFalseTyp4Props: selectedFalseSupportingTextFalseTyp9Data,
};

const stateOpenfocusedTypeDefaultSupporti2Data = {
    labelTrueTypeDefaultStateDefault2Props: labelTrueTypeDefaultStateDefault24Data,
    typeDefaultSupportingTextFalseScrol2Props: typeDefaultSupportingTextFalseScrol2Data,
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
    typeDefaultLeadingIconFalseLabelTru1Props: typeDefaultLeadingIconFalseLabelTru7Data,
    typeDefaultLeadingIconFalseLabelTru41Props: typeDefaultLeadingIconFalseLabelTru42Data,
    typeDefaultLeadingIconFalseLabelTru42Props: typeDefaultLeadingIconFalseLabelTru43Data,
    typeDefaultLeadingIconFalseLabelTru2Props: typeDefaultLeadingIconFalseLabelTru8Data,
    typeDefaultLeadingIconFalseLabelTru5Props: typeDefaultLeadingIconFalseLabelTru52Data,
    typeDefaultLeadingIconFalseLabelTru6Props: typeDefaultLeadingIconFalseLabelTru62Data,
    labelTrueHintTextFalseDestructiveFa31Props: labelTrueHintTextFalseDestructiveFa33Data,
    textProps: text7Data,
    labelTrueHintTextFalseDestructiveFa5Props: labelTrueHintTextFalseDestructiveFa5Data,
    labelTrueHintTextFalseDestructiveFa32Props: labelTrueHintTextFalseDestructiveFa34Data,
    labelTrueHintTextTrueDestructiveTruProps: labelTrueHintTextTrueDestructiveTruData,
    statePlaceholderTypeDefaultSupportiProps: statePlaceholderTypeDefaultSupporti10Data,
    stateDefaultTypeDefaultSupportingTe2Props: stateDefaultTypeDefaultSupportingTe22Data,
    stateOpenfocusedTypeDefaultSupportiProps: stateOpenfocusedTypeDefaultSupportiData,
    stateOpenfocusedTypeDefaultSupporti2Props: stateOpenfocusedTypeDefaultSupporti2Data,
};

const frame34Data = {
    vector7: "/img/vector-7-5@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1-2@2x.svg",
    className: "frame-3-3",
};

const sizemdHierarchySecondaryGrayIconFal2Data = {
    className: "button-22",
};

const socialIcon3Data = {
    src: "/img/menu-2@2x.svg",
};

const openedFalseColorGrayThemeLightState2Data = {
    className: "application-nav-menu-button-1",
    socialIconProps: socialIcon3Data,
};

const sizemdIconFalse6Data = {
    className: "",
};

const stateDefault6Data = {
    className: "button-4",
    sizemdIconFalseProps: sizemdIconFalse6Data,
};

const supportingTextFalseTabsFalseActions3Data = {
    children: "Job Description",
};

const section33Data = {
    className: "section-18",
    supportingTextFalseTabsFalseActions: supportingTextFalseTabsFalseActions3Data,
};

const property1AmenitiesProperty2False211Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False212Data = {
    children: "Skill #1",
    className: "select-17",
};

const property1AmenitiesProperty2False213Data = {
    children: "long skill Skill #1",
    className: "select-18-1",
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
    className: "select-18-2",
};

const property1AmenitiesProperty2False216Data = {
    children: "Skill #1",
    className: "select-17",
};

const property1AmenitiesProperty2False217Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False218Data = {
    children: "Skill #1",
    className: "select-17",
};

const property1AmenitiesProperty2False219Data = {
    children: "long skill Skill #1",
    className: "select-18",
};

const row525Data = {
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False217Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False218Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False219Data,
};

const shareProject2Data = {
    className: "share-project-8",
    row521Props: row524Data,
    property1AmenitiesProperty2False21P: property1AmenitiesProperty2False214Data,
    property1AmenitiesProperty2False22P: property1AmenitiesProperty2False215Data,
    property1AmenitiesProperty2False23P: property1AmenitiesProperty2False216Data,
    row522Props: row525Data,
};

const content27Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
};

const preferenceAgency4Data = {
    className: "preference-3",
    content2Props: content27Data,
};

const content28Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "content-15",
};

const frame1406922Data = {
    preferenceAgencyProps: preferenceAgency4Data,
    content2Props: content28Data,
};

const supportingTextFalseTabsFalseActions4Data = {
    children: "Apply to Job",
    className: "section-header-10",
};

const input27Data = {
    children: "Enter your full name",
};

const typeDefaultDestructiveFalse24Data = {
    label: "Full Name *",
    className: "",
    input2Props: input27Data,
};

const typeDefaultLeadingIconFalseLabelTru24Data = {
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse24Data,
};

const input28Data = {
    children: "Enter your email address",
};

const typeDefaultDestructiveFalse25Data = {
    label: "Email *",
    className: "input-field-base-14",
    input2Props: input28Data,
};

const typeDefaultLeadingIconFalseLabelTru25Data = {
    className: "input-field-20",
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse25Data,
};

const labelTrueTypeDefaultStatePlaceholde11Data = {
    label: "Country",
    text: "Select a country",
    className: "input-dropdown-base-5-1",
};

const statePlaceholderTypeDefaultSupporti11Data = {
    className: "input-dropdown-5",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde11Data,
};

const typeLeadingTextDestructiveFalse5Data = {
    className: "input-field-base-11",
};

const typeLeadingTextDestructiveFalse24Data = {
    className: "input-field-10",
    typeLeadingTextDestructiveFalseProp: typeLeadingTextDestructiveFalse5Data,
};

const text21Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault4Data = {
    className: "input-dropdown-base-13",
    textProps: text21Data,
};

const stateDefaultTypeDefaultSupportingTe4Data = {
    className: "input-dropdown-14",
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault4Data,
};

const labelTrueTypeDefaultStatePlaceholde12Data = {
    label: "Estimation to perform test*",
    text: "Select your estimation",
    className: "input-dropdown-base-5-2",
};

const statePlaceholderTypeDefaultSupporti12Data = {
    className: "input-dropdown-5",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde12Data,
};

const labelTrueTypeDefaultStatePlaceholde13Data = {
    label: "Expected availability per week",
    text: "Select your weekly availability",
    className: "input-dropdown-base-5",
};

const statePlaceholderTypeDefaultSupporti13Data = {
    className: "input-dropdown-5",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde13Data,
};

const input29Data = {
    children: "I plan to do X, then Y",
    className: "input-30",
};

const destructiveFalse25Data = {
    className: "",
    input2Props: input29Data,
};

const destructiveFalse225Data = {
    input2Props: destructiveFalse25Data,
};

const input210Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "input-28-1",
};

const destructiveFalse26Data = {
    className: "textarea-input-field-base-7",
    input2Props: input210Data,
};

const destructiveFalse226Data = {
    input2Props: destructiveFalse26Data,
};

const input211Data = {
    children: "Ask us anything...",
    className: "input-28",
};

const destructiveFalse27Data = {
    className: "textarea-input-field-base-5",
    input2Props: input211Data,
};

const destructiveFalse227Data = {
    input2Props: destructiveFalse27Data,
};

const sizemdIconFalse7Data = {
    className: "button-base-8",
};

const stateDefault7Data = {
    className: "button-5",
    sizemdIconFalseProps: sizemdIconFalse7Data,
};

const footer22Data = {
    className: "footer-4",
    stateDefaultProps: stateDefault7Data,
};

const publicWebPageCandidateViewData = {
    charmingAndComfort1: "Vetti",
    charmingAndComfort2: "BETA",
    text: "Technical Program Manager, Mobile Software Engineering",
    frame3Props: frame34Data,
    sizemdHierarchySecondaryGrayIconFalProps: sizemdHierarchySecondaryGrayIconFal2Data,
    openedFalseColorGrayThemeLightStateProps: openedFalseColorGrayThemeLightState2Data,
    stateDefaultProps: stateDefault6Data,
    section3Props: section33Data,
    shareProjectProps: shareProject2Data,
    frame140692Props: frame1406922Data,
    supportingTextFalseTabsFalseActionsProps: supportingTextFalseTabsFalseActions4Data,
    typeDefaultLeadingIconFalseLabelTru21Props: typeDefaultLeadingIconFalseLabelTru24Data,
    typeDefaultLeadingIconFalseLabelTru22Props: typeDefaultLeadingIconFalseLabelTru25Data,
    statePlaceholderTypeDefaultSupporti1Props: statePlaceholderTypeDefaultSupporti11Data,
    typeLeadingTextDestructiveFalse2Props: typeLeadingTextDestructiveFalse24Data,
    stateDefaultTypeDefaultSupportingTeProps: stateDefaultTypeDefaultSupportingTe4Data,
    statePlaceholderTypeDefaultSupporti2Props: statePlaceholderTypeDefaultSupporti12Data,
    statePlaceholderTypeDefaultSupporti3Props: statePlaceholderTypeDefaultSupporti13Data,
    destructiveFalse221Props: destructiveFalse225Data,
    destructiveFalse222Props: destructiveFalse226Data,
    destructiveFalse223Props: destructiveFalse227Data,
    footer2Props: footer22Data,
};

const sizemdIconFalse8Data = {
    className: "",
};

const stateDefault8Data = {
    className: "",
    sizemdIconFalseProps: sizemdIconFalse8Data,
};

const heading2Data = {
    stateDefaultProps: stateDefault8Data,
};

const container2Data = {
    className: "container-10",
    headingProps: heading2Data,
};

const property1AmenitiesProperty2False19Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False20Data = {
    children: "Skill #1",
    className: "select-7",
};

const property1AmenitiesProperty2False21Data = {
    children: "long skill Skill #1",
    className: "select-8-1",
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
    className: "select-8-2",
};

const property1AmenitiesProperty2False32Data = {
    children: "Skill #1",
    className: "select-7",
};

const property1AmenitiesProperty2False33Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False34Data = {
    children: "Skill #1",
    className: "select-7",
};

const property1AmenitiesProperty2False35Data = {
    children: "long skill Skill #1",
    className: "select-8",
};

const row56Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False33Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False34Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False35Data,
};

const section323Data = {
    className: "section-9",
    row51Props: row55Data,
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False30Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False31Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False32Data,
    row52Props: row56Data,
};

const content29Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
};

const preferenceAgency5Data = {
    content2Props: content29Data,
};

const content210Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "content-17",
};

const frame140694Data = {
    className: "frame-14069-3",
    preferenceAgencyProps: preferenceAgency5Data,
    content2Props: content210Data,
};

const supportingTextTrueTabsFalseActionsF9Data = {
    children: "General Instructions",
};

const frame140152Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF9Data,
};

const supportingTextTrueTabsFalseActionsF10Data = {
    children: "Test overview",
};

const frame140163Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF10Data,
};

const supportingTextTrueTabsFalseActionsF11Data = {
    children: "Additional notes from hiring manager",
};

const frame140173Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF11Data,
};

const supportingTextTrueTabsFalseActionsF12Data = {
    children: "Apply to Job",
    className: "section-header-5",
};

const typeDefaultDestructiveFalse10Data = {
    label: "Full Name *",
    text: "Enter your full name",
    className: "",
};

const typeDefaultLeadingIconFalseLabelTru9Data = {
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse10Data,
};

const typeDefaultDestructiveFalse11Data = {
    label: "Email *",
    text: "Enter your email address",
    className: "input-field-base",
};

const typeDefaultLeadingIconFalseLabelTru10Data = {
    className: "input-field-9",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse11Data,
};

const labelTrueTypeDefaultStatePlaceholde14Data = {
    label: "Country",
    text: "Select a country",
    className: "input-dropdown-base-2-1",
};

const statePlaceholderTypeDefaultSupporti14Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde14Data,
};

const typeLeadingTextDestructiveFalse6Data = {
    className: "input-field-base-12",
};

const typeLeadingTextDestructiveFalse25Data = {
    className: "input-field-16",
    typeLeadingTextDestructiveFalseProp: typeLeadingTextDestructiveFalse6Data,
};

const text22Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault5Data = {
    className: "input-dropdown-base-14",
    textProps: text22Data,
};

const stateDefaultTypeDefaultSupportingTe5Data = {
    className: "input-dropdown-15",
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault5Data,
};

const labelTrueTypeDefaultStatePlaceholde15Data = {
    label: "Estimation to perform test*",
    text: "Select your estimation",
    className: "input-dropdown-base-2-2",
};

const statePlaceholderTypeDefaultSupporti15Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde15Data,
};

const labelTrueTypeDefaultStatePlaceholde16Data = {
    label: "Expected availability per week",
    text: "Select your weekly availability",
    className: "input-dropdown-base-2",
};

const statePlaceholderTypeDefaultSupporti16Data = {
    className: "input-dropdown-9",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde16Data,
};

const input10Data = {
    children: "I plan to do X, then Y",
    className: "input-21",
};

const destructiveFalse37Data = {
    label: "Add a description of how you plan to approach the test",
    className: "",
    inputProps: input10Data,
};

const labelTrueHintTextFalseDestructiveFa35Data = {
    destructiveFalse3Props: destructiveFalse37Data,
};

const input11Data = {
    children: <>Dribble profile<br />Behance profile</>,
    className: "input-21",
};

const destructiveFalse42Data = {
    inputProps: input11Data,
};

const labelTrueHintTextFalseDestructiveFa42Data = {
    destructiveFalse4Props: destructiveFalse42Data,
};

const input12Data = {
    children: "Ask us anything...",
    className: "input-21",
};

const destructiveFalse38Data = {
    label: "Add questions if you have any",
    className: "input-field-base-14",
    inputProps: input12Data,
};

const labelTrueHintTextFalseDestructiveFa36Data = {
    className: "textarea-input-field-9",
    destructiveFalse3Props: destructiveFalse38Data,
};

const applicantDetails2Data = {
    supportingTextTrueTabsFalseActionsFProps: supportingTextTrueTabsFalseActionsF12Data,
    typeDefaultLeadingIconFalseLabelTru1Props: typeDefaultLeadingIconFalseLabelTru9Data,
    typeDefaultLeadingIconFalseLabelTru2Props: typeDefaultLeadingIconFalseLabelTru10Data,
    statePlaceholderTypeDefaultSupporti1Props: statePlaceholderTypeDefaultSupporti14Data,
    typeLeadingTextDestructiveFalse2Props: typeLeadingTextDestructiveFalse25Data,
    stateDefaultTypeDefaultSupportingTeProps: stateDefaultTypeDefaultSupportingTe5Data,
    statePlaceholderTypeDefaultSupporti2Props: statePlaceholderTypeDefaultSupporti15Data,
    statePlaceholderTypeDefaultSupporti3Props: statePlaceholderTypeDefaultSupporti16Data,
    labelTrueHintTextFalseDestructiveFa31Props: labelTrueHintTextFalseDestructiveFa35Data,
    labelTrueHintTextFalseDestructiveFa4Props: labelTrueHintTextFalseDestructiveFa42Data,
    labelTrueHintTextFalseDestructiveFa32Props: labelTrueHintTextFalseDestructiveFa36Data,
};

const sizemdIconFalse9Data = {
    className: "button-base-10",
};

const stateDefault9Data = {
    className: "button-7",
    sizemdIconFalseProps: sizemdIconFalse9Data,
};

const footer3Data = {
    stateDefaultProps: stateDefault9Data,
};

const sizelgIconFalse2Data = {
    children: "Close this page",
};

const sizelgHierarchySecondaryGrayIconFalData = {
    sizelgIconFalse2Props: sizelgIconFalse2Data,
};

const typeHorizontalFillContainerActions2Data = {
    sizelgHierarchySecondaryGrayIconFalProps: sizelgHierarchySecondaryGrayIconFalData,
};

const publicWebPageThankYouData = {
    charmingAndComfort1: "Vetti",
    charmingAndComfort2: "BETA",
    text: "Thank you!",
    supportingText: "Thank you for taking the time to apply for this position. You will be contacted by email as soon as possible.",
    containerProps: container2Data,
    section32Props: section323Data,
    frame14069Props: frame140694Data,
    frame14015Props: frame140152Data,
    frame14016Props: frame140163Data,
    frame14017Props: frame140173Data,
    applicantDetailsProps: applicantDetails2Data,
    footerProps: footer3Data,
    typeHorizontalFillContainerActions2Props: typeHorizontalFillContainerActions2Data,
};

const frame35Data = {
    vector7: "/img/vector-7-7@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/search@2x.svg",
    className: "frame-3-4",
};

const content32Data = {
    className: "content-16",
    frame3Props: frame35Data,
};

const sizemdIconFalse10Data = {
    className: "",
};

const stateDefault10Data = {
    className: "button-8",
    sizemdIconFalseProps: sizemdIconFalse10Data,
};

const heading3Data = {
    className: "heading-10",
    stateDefaultProps: stateDefault10Data,
};

const supportingTextTrueTabsFalseActionsF13Data = {
    children: "Job Description",
};

const frame140153Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF13Data,
};

const supportingTextTrueTabsFalseActionsF14Data = {
    children: "Screening Test (Paid)",
};

const frame140164Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF14Data,
};

const supportingTextTrueTabsFalseActionsF15Data = {
    children: "Additional Notes",
};

const frame140174Data = {
    supportingTextTrueTabsFalseActionsF: supportingTextTrueTabsFalseActionsF15Data,
};

const supportingTextTrueTabsFalseActionsF16Data = {
    children: "Apply to Job",
};

const typeDefaultDestructiveFalse12Data = {
    label: "Full Name *",
    text: "Enter your full name",
    className: "",
};

const typeDefaultLeadingIconFalseLabelTru11Data = {
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse12Data,
};

const typeDefaultDestructiveFalse13Data = {
    label: "Email *",
    text: "Enter your email address",
    className: "input-field-base",
};

const typeDefaultLeadingIconFalseLabelTru12Data = {
    className: "input-field-11",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse13Data,
};

const labelTrueTypeDefaultStatePlaceholde17Data = {
    label: "Country",
    text: "Select a country",
    className: "",
};

const statePlaceholderTypeDefaultSupporti17Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde17Data,
};

const typeLeadingTextDestructiveFalse7Data = {
    className: "",
};

const typeLeadingTextDestructiveFalse26Data = {
    typeLeadingTextDestructiveFalseProp: typeLeadingTextDestructiveFalse7Data,
};

const text23Data = {
    children: "Single Freelancer",
};

const labelTrueTypeDefaultStateDefault6Data = {
    className: "",
    textProps: text23Data,
};

const stateDefaultTypeDefaultSupportingTe6Data = {
    labelTrueTypeDefaultStateDefaultPro: labelTrueTypeDefaultStateDefault6Data,
};

const labelTrueTypeDefaultStatePlaceholde18Data = {
    label: "Estimation to perform test*",
    text: "Select your estimation",
    className: "input-dropdown-base-3",
};

const statePlaceholderTypeDefaultSupporti18Data = {
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde18Data,
};

const labelTrueTypeDefaultStatePlaceholde19Data = {
    label: "Expected availability per week",
    text: "Select your weekly availability",
    className: "input-dropdown-base-8",
};

const statePlaceholderTypeDefaultSupporti19Data = {
    className: "input-dropdown-10",
    labelTrueTypeDefaultStatePlaceholde: labelTrueTypeDefaultStatePlaceholde19Data,
};

const input13Data = {
    children: "I plan to do X, then Y",
};

const destructiveFalse7Data = {
    className: "",
    inputProps: input13Data,
};

const destructiveFalse64Data = {
    inputProps: destructiveFalse7Data,
};

const input14Data = {
    children: <>Dribble profile<br />Behance profile</>,
};

const destructiveFalse8Data = {
    className: "textarea-input-field-base-1-2",
    inputProps: input14Data,
};

const destructiveFalse65Data = {
    inputProps: destructiveFalse8Data,
};

const input15Data = {
    children: "Ask us anything...",
};

const destructiveFalse9Data = {
    className: "textarea-input-field-base-1",
    inputProps: input15Data,
};

const destructiveFalse66Data = {
    inputProps: destructiveFalse9Data,
};

const sizemdIconFalse11Data = {
    className: "button-base-12",
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
    className: "select-10",
};

const property1AmenitiesProperty2False38Data = {
    children: "long skill Skill #1",
    className: "select-11-1",
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
    className: "select-11-2",
};

const property1AmenitiesProperty2False41Data = {
    children: "Skill #1",
    className: "select-10",
};

const property1AmenitiesProperty2False42Data = {
    children: "Skill #1",
};

const property1AmenitiesProperty2False43Data = {
    children: "Skill #1",
    className: "select-10",
};

const property1AmenitiesProperty2False44Data = {
    children: "long skill Skill #1",
    className: "select-11",
};

const row58Data = {
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False42Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False43Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False44Data,
};

const section324Data = {
    className: "section-10",
    row51Props: row57Data,
    property1AmenitiesProperty2False1Pr: property1AmenitiesProperty2False39Data,
    property1AmenitiesProperty2False2Pr: property1AmenitiesProperty2False40Data,
    property1AmenitiesProperty2False3Pr: property1AmenitiesProperty2False41Data,
    row52Props: row58Data,
};

const content211Data = {
    text: "Preference for agency",
    supportingText: "This job is suitable for agencies and not for single freelancers.",
};

const preferenceAgency6Data = {
    content2Props: content211Data,
};

const content212Data = {
    text: "Company website",
    supportingText: "www.airbnb.com",
    className: "content-19",
};

const frame140695Data = {
    preferenceAgencyProps: preferenceAgency6Data,
    content2Props: content212Data,
};

const publicWebPageCandidateView2Data = {
    label: "Estimated start date",
    content3Props: content32Data,
    headingProps: heading3Data,
    frame14015Props: frame140153Data,
    frame14016Props: frame140164Data,
    frame14017Props: frame140174Data,
    supportingTextTrueTabsFalseActionsFProps: supportingTextTrueTabsFalseActionsF16Data,
    typeDefaultLeadingIconFalseLabelTru1Props: typeDefaultLeadingIconFalseLabelTru11Data,
    typeDefaultLeadingIconFalseLabelTru2Props: typeDefaultLeadingIconFalseLabelTru12Data,
    statePlaceholderTypeDefaultSupporti1Props: statePlaceholderTypeDefaultSupporti17Data,
    typeLeadingTextDestructiveFalse2Props: typeLeadingTextDestructiveFalse26Data,
    stateDefaultTypeDefaultSupportingTeProps: stateDefaultTypeDefaultSupportingTe6Data,
    statePlaceholderTypeDefaultSupporti2Props: statePlaceholderTypeDefaultSupporti18Data,
    statePlaceholderTypeDefaultSupporti3Props: statePlaceholderTypeDefaultSupporti19Data,
    destructiveFalse61Props: destructiveFalse64Data,
    destructiveFalse62Props: destructiveFalse65Data,
    destructiveFalse63Props: destructiveFalse66Data,
    footerProps: footer4Data,
    section32Props: section324Data,
    frame14069Props: frame140695Data,
};

const frame36Data = {
    vector7: "/img/vector-7-8@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1-7@2x.svg",
    className: "frame-3-5",
};

const labelFalseTypeSearchStatePlaceholdeData = {
    text: "Search",
};

const statePlaceholderTypeSearchSupportinData = {
    labelFalseTypeSearchStatePlaceholdeProps: labelFalseTypeSearchStatePlaceholdeData,
};

const socialIcon4Data = {
    src: "/img/home@2x.svg",
};

const currentFalseBadgeFalseToggleFalseIc2Data = {
    text: "Job Posts",
    socialIconProps: socialIcon4Data,
};

const openFalseCurrentFalseBadgeFalseColoData = {
    currentFalseBadgeFalseToggleFalseIc2Props: currentFalseBadgeFalseToggleFalseIc2Data,
};

const typeAvatarOpenFalse4Data = {
    className: "dropdown-3",
};

const socialIcon5Data = {
    src: "/img/x@2x.svg",
};

const openedFalseColorGrayThemeLightState3Data = {
    className: "application-nav-menu-button-2",
    socialIconProps: socialIcon5Data,
};

const headerNavigation2Data = {
    charmingAndComfort1: "Vetti",
    charmingAndComfort2: "BETA",
    text: "Or Rozenfeld",
    supportingText: "orozenfe@gmail.com",
    frame3Props: frame36Data,
    statePlaceholderTypeSearchSupportinProps: statePlaceholderTypeSearchSupportinData,
    openFalseCurrentFalseBadgeFalseColoProps: openFalseCurrentFalseBadgeFalseColoData,
    typeAvatarOpenFalseProps: typeAvatarOpenFalse4Data,
    openedFalseColorGrayThemeLightStateProps: openedFalseColorGrayThemeLightState3Data,
};

const typeDefaultDestructiveFalse14Data = {
    label: "Email",
    text: "Enter your email",
    className: "input-field-base-5-1",
};

const typeDefaultLeadingIconFalseLabelTru13Data = {
    className: "input-field-12",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse14Data,
};

const typeDefaultDestructiveFalse15Data = {
    label: "Password",
    text: "••••••••",
    className: "input-field-base-5",
};

const typeDefaultLeadingIconFalseLabelTru14Data = {
    className: "input-field-13",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse15Data,
};

const checkedFalseIndeterminateFalseSizesData = {
    text: "Remember for 30 days",
};

const sizemdIconFalse42Data = {
    children: "Forgot password",
    className: "",
};

const sizemdHierarchyLinkColorIconFalseDe22Data = {
    sizemdIconFalse4Props: sizemdIconFalse42Data,
};

const sizelgIconFalse31Data = {
    children: "Sign in",
    className: "",
};

const sizelgHierarchyPrimaryIconFalseDest21Data = {
    sizelgIconFalse3Props: sizelgIconFalse31Data,
};

const socialIcon6Data = {
    src: "/img/social-icon-1@2x.svg",
};

const socialGoogleSupportingTextTrueTheme2Data = {
    text: "Sign in with Google",
    socialIconProps: socialIcon6Data,
};

const styleButtonsThemeColorWithBrand2Data = {
    socialGoogleSupportingTextTrueTheme2Props: socialGoogleSupportingTextTrueTheme2Data,
};

const sizemdIconFalse43Data = {
    children: "Sign up",
    className: "button-base-34",
};

const sizemdHierarchyLinkColorIconFalseDe23Data = {
    className: "button-28",
    sizemdIconFalse4Props: sizemdIconFalse43Data,
};

const logInData = {
    text1: "Log in to your account",
    supportingText: "Welcome back! Please enter your details.",
    text2: "Don’t have an account?",
    typeDefaultLeadingIconFalseLabelTru1Props: typeDefaultLeadingIconFalseLabelTru13Data,
    typeDefaultLeadingIconFalseLabelTru2Props: typeDefaultLeadingIconFalseLabelTru14Data,
    checkedFalseIndeterminateFalseSizesProps: checkedFalseIndeterminateFalseSizesData,
    sizemdHierarchyLinkColorIconFalseDe21Props: sizemdHierarchyLinkColorIconFalseDe22Data,
    sizelgHierarchyPrimaryIconFalseDest2Props: sizelgHierarchyPrimaryIconFalseDest21Data,
    styleButtonsThemeColorWithBrand2Props: styleButtonsThemeColorWithBrand2Data,
    sizemdHierarchyLinkColorIconFalseDe22Props: sizemdHierarchyLinkColorIconFalseDe23Data,
};

const sizelgIconFalse32Data = {
    children: "Open email app",
    className: "button-base-37",
};

const sizelgHierarchyPrimaryIconFalseDest22Data = {
    className: "button-31",
    sizelgIconFalse3Props: sizelgIconFalse32Data,
};

const sizemdIconFalse44Data = {
    children: "Click to resend",
    className: "button-base-35",
};

const sizemdHierarchyLinkColorIconFalseDe24Data = {
    className: "button-29",
    sizemdIconFalse4Props: sizemdIconFalse44Data,
};

const sizemdIconLeading32Data = {
    text: "Back to log in",
    className: "button-base-22",
};

const sizemdHierarchyLinkGrayIconLeadingD2Data = {
    className: "button-16",
    sizemdIconLeading3Props: sizemdIconLeading32Data,
};

const forgotPassword2Data = {
    text1: "Check your email",
    spanText1: "We sent a password reset link to ",
    spanText2: "olivia@untitledui.com",
    text2: "Didn’t receive the email?",
    sizelgHierarchyPrimaryIconFalseDest2Props: sizelgHierarchyPrimaryIconFalseDest22Data,
    sizemdHierarchyLinkColorIconFalseDe2Props: sizemdHierarchyLinkColorIconFalseDe24Data,
    sizemdHierarchyLinkGrayIconLeadingDProps: sizemdHierarchyLinkGrayIconLeadingD2Data,
};

const textAndSupportingText1Data = {
    text: "Forgot password?",
    supportingText: "No worries, we’ll send you reset instructions.",
    className: "",
};

const header1Data = {
    textAndSupportingTextProps: textAndSupportingText1Data,
};

const typeDefaultDestructiveFalse16Data = {
    label: "Email",
    text: "Enter your email",
    className: "input-field-base-6",
};

const typeDefaultLeadingIconFalseLabelTru15Data = {
    className: "input-field-14",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse16Data,
};

const sizelgIconFalse33Data = {
    children: "Reset password",
    className: "button-base-38",
};

const sizelgHierarchyPrimaryIconFalseDest23Data = {
    className: "button-32",
    sizelgIconFalse3Props: sizelgIconFalse33Data,
};

const sizemdIconLeading33Data = {
    text: "Back to log in",
    className: "button-base-23",
};

const sizemdHierarchyLinkGrayIconLeadingD3Data = {
    className: "button-17",
    sizemdIconLeading3Props: sizemdIconLeading33Data,
};

const forgotPassword1Data = {
    headerProps: header1Data,
    typeDefaultLeadingIconFalseLabelTruProps: typeDefaultLeadingIconFalseLabelTru15Data,
    sizelgHierarchyPrimaryIconFalseDest2Props: sizelgHierarchyPrimaryIconFalseDest23Data,
    sizemdHierarchyLinkGrayIconLeadingDProps: sizemdHierarchyLinkGrayIconLeadingD3Data,
};

const textAndSupportingText2Data = {
    text: "Password reset",
    supportingText: "Your password has been successfully reset. Click below to log in magically.",
    className: "text-and-supporting-text-8",
};

const sizelgIconFalse34Data = {
    children: "Continue",
    className: "button-base-39",
};

const sizelgHierarchyPrimaryIconFalseDest24Data = {
    className: "button-33",
    sizelgIconFalse3Props: sizelgIconFalse34Data,
};

const sizemdIconLeading34Data = {
    text: "Back to log in",
    className: "button-base-24",
};

const sizemdHierarchyLinkGrayIconLeadingD4Data = {
    className: "button-18",
    sizemdIconLeading3Props: sizemdIconLeading34Data,
};

const forgotPassword4Data = {
    textAndSupportingTextProps: textAndSupportingText2Data,
    sizelgHierarchyPrimaryIconFalseDest2Props: sizelgHierarchyPrimaryIconFalseDest24Data,
    sizemdHierarchyLinkGrayIconLeadingDProps: sizemdHierarchyLinkGrayIconLeadingD4Data,
};

const textAndSupportingText3Data = {
    text: "Set new password",
    supportingText: "Your new password must be different to previously used passwords.",
    className: "text-and-supporting-text-9",
};

const header2Data = {
    className: "header-5",
    textAndSupportingTextProps: textAndSupportingText3Data,
};

const typeDefaultDestructiveFalse17Data = {
    label: "Password",
    text: "••••••••",
    className: "input-7-1",
};

const typeDefaultDestructiveFalse223Data = {
    label: "Must be at least 8 characters.",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse17Data,
};

const typeDefaultLeadingIconFalseLabelTru33Data = {
    className: "input-field-21",
    typeDefaultDestructiveFalse2Props: typeDefaultDestructiveFalse223Data,
};

const typeDefaultDestructiveFalse18Data = {
    label: "Confirm password",
    text: "••••••••",
    className: "input-7",
};

const typeDefaultLeadingIconFalseLabelTru16Data = {
    className: "input-field-15",
    typeDefaultDestructiveFalseProps: typeDefaultDestructiveFalse18Data,
};

const sizelgIconFalse35Data = {
    children: "Reset password",
    className: "button-base-40",
};

const sizelgHierarchyPrimaryIconFalseDest25Data = {
    className: "button-34",
    sizelgIconFalse3Props: sizelgIconFalse35Data,
};

const sizemdIconLeading35Data = {
    text: "Back to log in",
    className: "button-base-25",
};

const sizemdHierarchyLinkGrayIconLeadingD5Data = {
    className: "button-19",
    sizemdIconLeading3Props: sizemdIconLeading35Data,
};

const forgotPassword3Data = {
    headerProps: header2Data,
    typeDefaultLeadingIconFalseLabelTru3Props: typeDefaultLeadingIconFalseLabelTru33Data,
    typeDefaultLeadingIconFalseLabelTruProps: typeDefaultLeadingIconFalseLabelTru16Data,
    sizelgHierarchyPrimaryIconFalseDest2Props: sizelgHierarchyPrimaryIconFalseDest25Data,
    sizemdHierarchyLinkGrayIconLeadingDProps: sizemdHierarchyLinkGrayIconLeadingD5Data,
};

const frame37Data = {
    vector7: "/img/vector-7-10@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.svg",
    className: "",
};

const companyLogo3Data = {
    frame3Props: frame37Data,
};

const currentTrueBadgeFalseToggleFalseIco2Data = {
    children: "Dashboard",
    className: "nav-item-base-4",
};

const currentFalseBadgeFalseToggleFalseIc3Data = {
    className: "nav-item-base-1",
};

const typeAvatarOpenFalse5Data = {
    className: "dropdown-4",
};

const sizemdIconFalse52Data = {
    children: "Share your job post",
};

const sizemdHierarchyPrimaryIconFalseDestData = {
    sizemdIconFalse5Props: sizemdIconFalse52Data,
};

const breadcrumbsFalseSupportingTextTrueS2Data = {
    text: "Technical Program Manager, Mobile Software Engineering",
    supportingText: "Track your candidates that came from your advertised links.",
    sizemdHierarchyPrimaryIconFalseDestProps: sizemdHierarchyPrimaryIconFalseDestData,
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
    className: "button-base-14",
};

const sizemdHierarchySecondaryGrayIconLea22Data = {
    className: "button-02-1",
    sizemdIconLeading2Props: sizemdIconLeading22Data,
};

const supportingTextFalseStyleSimpleActioData = {
    text: "Candidates",
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary1Data,
    sizemdHierarchySecondaryGrayIconLea2Props: sizemdHierarchySecondaryGrayIconLea22Data,
};

const helpIconFalseArrowFalseStateDefault1Data = {
    children: "Full Name",
    className: "",
};

const textTrueCheckboxFalseColorWhite1Data = {
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault1Data,
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
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault2Data,
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
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault3Data,
};

const styleTextSupportingTextFalseStateDe6Data = {
    children: "1 Hour",
    className: "table-cell-5-1",
};

const styleTextSupportingTextFalseStateDe7Data = {
    children: "2 Hours",
    className: "table-cell-5-2",
};

const styleTextSupportingTextFalseStateDe33Data = {
    children: "30 Minutes",
    className: "table-cell-14",
};

const styleTextSupportingTextFalseStateDe8Data = {
    children: "2 Hours",
    className: "table-cell-5-3",
};

const styleTextSupportingTextFalseStateDe9Data = {
    children: "30 Minutes",
    className: "table-cell-5-4",
};

const styleTextSupportingTextFalseStateDe10Data = {
    children: "30 Minutes",
    className: "table-cell-5-5",
};

const styleTextSupportingTextFalseStateDe11Data = {
    children: "30 Minutes",
    className: "table-cell-5",
};

const helpIconFalseArrowFalseStateDefault4Data = {
    children: "Country",
    className: "table-header-3",
};

const textTrueCheckboxFalseColorWhite4Data = {
    className: "table-header-cell-3",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault4Data,
};

const socialIcon7Data = {
    src: "/img/us@2x.svg",
    className: "dropdown-3",
};

const tableCell1Data = {
    text: "United States",
    socialIconProps: socialIcon7Data,
};

const socialIcon8Data = {
    src: "/img/uy@2x.svg",
    className: "",
};

const tableCell2Data = {
    text: "Argentina",
    className: "table-cell-18-1",
    socialIconProps: socialIcon8Data,
};

const socialIcon9Data = {
    src: "/img/se@2x.svg",
    className: "",
};

const tableCell3Data = {
    text: "Sweden",
    className: "table-cell-18",
    socialIconProps: socialIcon9Data,
};

const socialIcon10Data = {
    src: "/img/us-1@2x.svg",
    className: "dropdown-3",
};

const tableCell4Data = {
    text: "United States",
    socialIconProps: socialIcon10Data,
};

const socialIcon11Data = {
    src: "/img/us-2@2x.svg",
    className: "dropdown-3",
};

const tableCell5Data = {
    text: "United States",
    socialIconProps: socialIcon11Data,
};

const socialIcon12Data = {
    src: "/img/us-3@2x.svg",
    className: "dropdown-3",
};

const tableCell6Data = {
    text: "United States",
    socialIconProps: socialIcon12Data,
};

const socialIcon13Data = {
    src: "/img/us-4@2x.svg",
    className: "dropdown-3",
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
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault5Data,
};

const styleTextSupportingTextFalseStateDe12Data = {
    children: "1 day / week",
    className: "table-cell-6-1",
};

const styleTextSupportingTextFalseStateDe13Data = {
    children: "1 day / week",
    className: "table-cell-6-2",
};

const styleTextSupportingTextFalseStateDe14Data = {
    children: "1 day / week",
    className: "table-cell-6-3",
};

const styleTextSupportingTextFalseStateDe15Data = {
    children: "1 day / week",
    className: "table-cell-6-4",
};

const styleTextSupportingTextFalseStateDe16Data = {
    children: "1 day / week",
    className: "table-cell-6-5",
};

const styleTextSupportingTextFalseStateDe17Data = {
    children: "1 day / week",
    className: "table-cell-6",
};

const helpIconFalseArrowFalseStateDefault6Data = {
    children: "Hired for Test?",
    className: "table-header-5",
};

const textTrueCheckboxFalseColorWhite6Data = {
    className: "table-header-cell-5",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault6Data,
};

const styleTextSupportingTextFalseStateDe18Data = {
    children: "Yes",
    className: "table-cell-7-1",
};

const styleTextSupportingTextFalseStateDe19Data = {
    children: "No",
    className: "table-cell-7-2",
};

const styleTextSupportingTextFalseStateDe20Data = {
    children: "--",
    className: "table-cell-7-3",
};

const styleTextSupportingTextFalseStateDe21Data = {
    children: "Yes",
    className: "table-cell-7-4",
};

const styleTextSupportingTextFalseStateDe23Data = {
    children: "No",
    className: "table-cell-7-5",
};

const styleTextSupportingTextFalseStateDe24Data = {
    children: "Yes",
    className: "table-cell-7-6",
};

const styleTextSupportingTextFalseStateDe25Data = {
    children: "Yes",
    className: "table-cell-7",
};

const textFalseCheckboxFalseColorWhite2Data = {
    className: "divider-35",
};

const textFalseCheckboxFalseColorWhite3Data = {
    className: "divider-35",
};

const textFalseCheckboxFalseColorWhite4Data = {
    className: "divider-35",
};

const textFalseCheckboxFalseColorWhite5Data = {
    className: "divider-35",
};

const textFalseCheckboxFalseColorWhite6Data = {
    className: "divider-35",
};

const textFalseCheckboxFalseColorWhite7Data = {
    className: "divider-35",
};

const textFalseCheckboxFalseColorWhite8Data = {
    className: "divider-35",
};

const dashboard4ShareData = {
    companyLogoProps: companyLogo3Data,
    currentTrueBadgeFalseToggleFalseIcoProps: currentTrueBadgeFalseToggleFalseIco2Data,
    currentFalseBadgeFalseToggleFalseIcProps: currentFalseBadgeFalseToggleFalseIc3Data,
    typeAvatarOpenFalseProps: typeAvatarOpenFalse5Data,
    breadcrumbsFalseSupportingTextTrueS2Props: breadcrumbsFalseSupportingTextTrueS2Data,
    supportingTextFalseStyleSimpleActioProps: supportingTextFalseStyleSimpleActioData,
    textTrueCheckboxFalseColorWhite1Props: textTrueCheckboxFalseColorWhite1Data,
    styleTextSupportingTextTrueStateDef1Props: styleTextSupportingTextTrueStateDef1Data,
    styleTextSupportingTextTrueStateDef2Props: styleTextSupportingTextTrueStateDef2Data,
    styleTextSupportingTextTrueStateDef3Props: styleTextSupportingTextTrueStateDef3Data,
    styleTextSupportingTextTrueStateDef4Props: styleTextSupportingTextTrueStateDef4Data,
    styleTextSupportingTextTrueStateDef5Props: styleTextSupportingTextTrueStateDef5Data,
    styleTextSupportingTextTrueStateDef6Props: styleTextSupportingTextTrueStateDef6Data,
    styleTextSupportingTextTrueStateDef7Props: styleTextSupportingTextTrueStateDef7Data,
    textTrueCheckboxFalseColorWhite2Props: textTrueCheckboxFalseColorWhite2Data,
    styleTextSupportingTextFalseStateDe1Props: styleTextSupportingTextFalseStateDe1Data,
    styleTextSupportingTextFalseStateDe2Props: styleTextSupportingTextFalseStateDe3Data,
    styleTextSupportingTextFalseStateDe31Props: styleTextSupportingTextFalseStateDe32Data,
    styleTextSupportingTextFalseStateDe3Props: styleTextSupportingTextFalseStateDe4Data,
    styleTextSupportingTextFalseStateDe4Props: styleTextSupportingTextFalseStateDe5Data,
    textTrueCheckboxFalseColorWhite3Props: textTrueCheckboxFalseColorWhite3Data,
    styleTextSupportingTextFalseStateDe5Props: styleTextSupportingTextFalseStateDe6Data,
    styleTextSupportingTextFalseStateDe6Props: styleTextSupportingTextFalseStateDe7Data,
    styleTextSupportingTextFalseStateDe32Props: styleTextSupportingTextFalseStateDe33Data,
    styleTextSupportingTextFalseStateDe7Props: styleTextSupportingTextFalseStateDe8Data,
    styleTextSupportingTextFalseStateDe8Props: styleTextSupportingTextFalseStateDe9Data,
    styleTextSupportingTextFalseStateDe9Props: styleTextSupportingTextFalseStateDe10Data,
    styleTextSupportingTextFalseStateDe10Props: styleTextSupportingTextFalseStateDe11Data,
    textTrueCheckboxFalseColorWhite4Props: textTrueCheckboxFalseColorWhite4Data,
    tableCell1Props: tableCell1Data,
    tableCell2Props: tableCell2Data,
    tableCell3Props: tableCell3Data,
    tableCell4Props: tableCell4Data,
    tableCell5Props: tableCell5Data,
    tableCell6Props: tableCell6Data,
    tableCell7Props: tableCell7Data,
    textTrueCheckboxFalseColorWhite5Props: textTrueCheckboxFalseColorWhite5Data,
    styleTextSupportingTextFalseStateDe11Props: styleTextSupportingTextFalseStateDe12Data,
    styleTextSupportingTextFalseStateDe12Props: styleTextSupportingTextFalseStateDe13Data,
    styleTextSupportingTextFalseStateDe13Props: styleTextSupportingTextFalseStateDe14Data,
    styleTextSupportingTextFalseStateDe14Props: styleTextSupportingTextFalseStateDe15Data,
    styleTextSupportingTextFalseStateDe15Props: styleTextSupportingTextFalseStateDe16Data,
    styleTextSupportingTextFalseStateDe16Props: styleTextSupportingTextFalseStateDe17Data,
    textTrueCheckboxFalseColorWhite6Props: textTrueCheckboxFalseColorWhite6Data,
    styleTextSupportingTextFalseStateDe17Props: styleTextSupportingTextFalseStateDe18Data,
    styleTextSupportingTextFalseStateDe18Props: styleTextSupportingTextFalseStateDe19Data,
    styleTextSupportingTextFalseStateDe19Props: styleTextSupportingTextFalseStateDe20Data,
    styleTextSupportingTextFalseStateDe20Props: styleTextSupportingTextFalseStateDe21Data,
    styleTextSupportingTextFalseStateDe21Props: styleTextSupportingTextFalseStateDe23Data,
    styleTextSupportingTextFalseStateDe22Props: styleTextSupportingTextFalseStateDe24Data,
    styleTextSupportingTextFalseStateDe23Props: styleTextSupportingTextFalseStateDe25Data,
    textFalseCheckboxFalseColorWhite1Props: textFalseCheckboxFalseColorWhite2Data,
    textFalseCheckboxFalseColorWhite2Props: textFalseCheckboxFalseColorWhite3Data,
    textFalseCheckboxFalseColorWhite3Props: textFalseCheckboxFalseColorWhite4Data,
    textFalseCheckboxFalseColorWhite4Props: textFalseCheckboxFalseColorWhite5Data,
    textFalseCheckboxFalseColorWhite5Props: textFalseCheckboxFalseColorWhite6Data,
    textFalseCheckboxFalseColorWhite6Props: textFalseCheckboxFalseColorWhite7Data,
    textFalseCheckboxFalseColorWhite7Props: textFalseCheckboxFalseColorWhite8Data,
};

const frame38Data = {
    vector7: "/img/vector-7-11@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.svg",
    className: "",
};

const companyLogo4Data = {
    frame3Props: frame38Data,
};

const typeAvatarOpenFalse6Data = {
    className: "dropdown-5",
};

const headerNavigation3Data = {
    companyLogoProps: companyLogo4Data,
    typeAvatarOpenFalseProps: typeAvatarOpenFalse6Data,
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
    className: "breadcrumb-button-base-7",
};

const dividerChevronTypeTextBreakpointDes21Data = {
    currentFalseTypeTextIconFalseStateD1Props: currentFalseTypeTextIconFalseStateD3Data,
    currentFalseTypeTextIconFalseStateD2Props: currentFalseTypeTextIconFalseStateD4Data,
    currentTrueTypeTextIconFalseStateDeProps: currentTrueTypeTextIconFalseStateDe2Data,
};

const sizemdIconLeading23Data = {
    text: "Create New Job",
    className: "button-base-15",
};

const sizemdHierarchySecondaryGrayIconLea23Data = {
    className: "button-01",
    sizemdIconLeading2Props: sizemdIconLeading23Data,
};

const breadcrumbsFalseSupportingTextTrueS31Data = {
    sizemdHierarchySecondaryGrayIconLea2Props: sizemdHierarchySecondaryGrayIconLea23Data,
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
    className: "button-base-16",
};

const sizemdHierarchySecondaryGrayIconLea24Data = {
    className: "button-02-2",
    sizemdIconLeading2Props: sizemdIconLeading24Data,
};

const supportingTextFalseStyleSimpleActio21Data = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary2Data,
    sizemdHierarchySecondaryGrayIconLea2Props: sizemdHierarchySecondaryGrayIconLea24Data,
};

const helpIconFalseArrowFalseStateDefault7Data = {
    children: "Full Name",
    className: "",
};

const textTrueCheckboxFalseColorWhite7Data = {
    className: "table-header-cell-6",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault7Data,
};

const helpIconFalseArrowFalseStateDefault8Data = {
    children: "Agency/ single",
    className: "table-header-7",
};

const textTrueCheckboxFalseColorWhite8Data = {
    className: "table-header-cell-7",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault8Data,
};

const helpIconFalseArrowFalseStateDefault9Data = {
    children: "Total Test Cost",
    className: "table-header-8",
};

const textTrueCheckboxFalseColorWhite9Data = {
    className: "table-header-cell-8",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault9Data,
};

const helpIconFalseArrowFalseStateDefault10Data = {
    children: "Estimated Start Date",
    className: "table-header-9",
};

const textTrueCheckboxFalseColorWhite10Data = {
    className: "table-header-cell-9",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault10Data,
};

const helpIconFalseArrowFalseStateDefault11Data = {
    children: "Country",
    className: "table-header-10",
};

const textTrueCheckboxFalseColorWhite11Data = {
    className: "table-header-cell-10",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault11Data,
};

const helpIconFalseArrowFalseStateDefault12Data = {
    children: "Availability per week",
    className: "table-header-11",
};

const textTrueCheckboxFalseColorWhite12Data = {
    className: "table-header-cell-11",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault12Data,
};

const helpIconFalseArrowFalseStateDefault13Data = {
    children: "Status",
    className: "table-header-12",
};

const textTrueCheckboxFalseColorWhite13Data = {
    className: "table-header-cell-12",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault13Data,
};

const helpIconFalseArrowFalseStateDefault14Data = {
    children: "More Info",
    className: "table-header-13",
};

const textTrueCheckboxFalseColorWhite14Data = {
    className: "table-header-cell-13",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault14Data,
};

const dashboard3EmptyData = {
    text1: "There are currently no candidates",
    text2: "By sharing your Public job posts more often, more candidates will apply, and this table will be filled with potential candidates",
    headerNavigationProps: headerNavigation3Data,
    dividerChevronTypeTextBreakpointDes2Props: dividerChevronTypeTextBreakpointDes21Data,
    breadcrumbsFalseSupportingTextTrueS3Props: breadcrumbsFalseSupportingTextTrueS31Data,
    supportingTextFalseStyleSimpleActio2Props: supportingTextFalseStyleSimpleActio21Data,
    textTrueCheckboxFalseColorWhite1Props: textTrueCheckboxFalseColorWhite7Data,
    textTrueCheckboxFalseColorWhite2Props: textTrueCheckboxFalseColorWhite8Data,
    textTrueCheckboxFalseColorWhite3Props: textTrueCheckboxFalseColorWhite9Data,
    textTrueCheckboxFalseColorWhite4Props: textTrueCheckboxFalseColorWhite10Data,
    textTrueCheckboxFalseColorWhite5Props: textTrueCheckboxFalseColorWhite11Data,
    textTrueCheckboxFalseColorWhite6Props: textTrueCheckboxFalseColorWhite12Data,
    textTrueCheckboxFalseColorWhite7Props: textTrueCheckboxFalseColorWhite13Data,
    textTrueCheckboxFalseColorWhite8Props: textTrueCheckboxFalseColorWhite14Data,
};

const frame39Data = {
    vector7: "/img/vector-7-12@2x.svg",
    x5D7F96Dfdf28141Cd047F1675418350C1: "/img/5d7f96dfdf28141cd047f1675418350c-1@2x.svg",
    className: "",
};

const companyLogo5Data = {
    frame3Props: frame39Data,
};

const typeAvatarOpenFalse7Data = {
    className: "dropdown-6",
};

const headerNavigation4Data = {
    companyLogoProps: companyLogo5Data,
    typeAvatarOpenFalseProps: typeAvatarOpenFalse7Data,
};

const currentFalseTypeTextIconFalseStateD5Data = {
    children: "Job posts",
};

const currentFalseTypeTextIconFalseStateD6Data = {
    children: "Technical Program Manager, Mobile Software Engineering",
    className: "breadcrumb-button-base-5",
};

const currentTrueTypeTextIconFalseStateDe3Data = {
    children: "Candidates",
    className: "breadcrumb-button-base-8",
};

const dividerChevronTypeTextBreakpointDes22Data = {
    className: "breadcrumbs-2",
    currentFalseTypeTextIconFalseStateD1Props: currentFalseTypeTextIconFalseStateD5Data,
    currentFalseTypeTextIconFalseStateD2Props: currentFalseTypeTextIconFalseStateD6Data,
    currentTrueTypeTextIconFalseStateDeProps: currentTrueTypeTextIconFalseStateDe3Data,
};

const currentFalseTypeTextIconFalseStateD7Data = {
    children: "Technical Program Manager, Mobile Software Engineering",
    className: "breadcrumb-button-base-6",
};

const sizemdIconLeading25Data = {
    text: "Create New Job",
    className: "button-base-17",
};

const sizemdHierarchySecondaryGrayIconLea25Data = {
    className: "button-01-1",
    sizemdIconLeading2Props: sizemdIconLeading25Data,
};

const breadcrumbsFalseSupportingTextTrueS32Data = {
    className: "page-header-5",
    sizemdHierarchySecondaryGrayIconLea2Props: sizemdHierarchySecondaryGrayIconLea25Data,
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
    className: "button-base-18",
};

const sizemdHierarchySecondaryGrayIconLea26Data = {
    className: "button-02-3",
    sizemdIconLeading2Props: sizemdIconLeading26Data,
};

const supportingTextFalseStyleSimpleActio22Data = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary3Data,
    sizemdHierarchySecondaryGrayIconLea2Props: sizemdHierarchySecondaryGrayIconLea26Data,
};

const helpIconFalseArrowFalseStateDefault15Data = {
    children: "Full Name",
    className: "",
};

const textTrueCheckboxFalseColorWhite15Data = {
    className: "table-header-cell-14",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault15Data,
};

const styleTextSupportingTextTrueStateDef8Data = {
    text: "Oren Rosenfeld",
    supportingText: "dolores.chambers@example.com",
    className: "table-cell-1-1",
};

const styleTextSupportingTextTrueStateDef9Data = {
    text: "Wade Warren",
    supportingText: "dolores.chambers@example.com",
    className: "table-cell-1",
};

const styleTextSupportingTextTrueStateDef10Data = {
    text: "Darrell Steward",
    supportingText: "jessica.hanson@example.com",
    className: "table-cell-2",
};

const styleTextSupportingTextTrueStateDef11Data = {
    text: "Brandon Philips",
    supportingText: "brandon.phili@gmail.com",
    className: "table-cell-2",
};

const styleTextSupportingTextTrueStateDef12Data = {
    text: "Albert Flores",
    supportingText: "kenzi.lawson@example.com",
    className: "table-cell-2",
};

const styleTextSupportingTextTrueStateDef13Data = {
    text: "Leslie Alexander",
    supportingText: "deanna.curtis@example.com",
    className: "table-cell-2",
};

const styleTextSupportingTextTrueStateDef14Data = {
    text: "Kristin Watson",
    supportingText: "michelle.rivera@example.com",
    className: "table-cell-2",
};

const helpIconFalseArrowFalseStateDefault16Data = {
    children: "Agency/ single",
    className: "table-header-15",
};

const textTrueCheckboxFalseColorWhite16Data = {
    className: "table-header-cell-15",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault16Data,
};

const styleTextSupportingTextFalseStateDe26Data = {
    children: "Agency",
    className: "table-cell-8-1",
};

const styleTextSupportingTextFalseStateDe27Data = {
    children: "Agency",
    className: "table-cell-8-2",
};

const styleTextSupportingTextFalseStateDe28Data = {
    children: "Single",
    className: "table-cell-8-3",
};

const styleTextSupportingTextFalseStateDe29Data = {
    children: "Single",
    className: "table-cell-8-4",
};

const styleTextSupportingTextFalseStateDe30Data = {
    children: "Single",
    className: "table-cell-8-5",
};

const styleTextSupportingTextFalseStateDe31Data = {
    children: "Single",
    className: "table-cell-8-6",
};

const styleTextSupportingTextFalseStateDe34Data = {
    children: "Single",
    className: "table-cell-8",
};

const helpIconFalseArrowFalseStateDefault17Data = {
    children: "Total Test Cost",
    className: "table-header-16",
};

const textTrueCheckboxFalseColorWhite17Data = {
    className: "table-header-cell-16",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault17Data,
};

const styleTextSupportingTextFalseStateDe35Data = {
    children: "$15.00",
    className: "table-cell-9-1",
};

const styleTextSupportingTextFalseStateDe36Data = {
    children: "2 Hours",
    className: "table-cell-9-2",
};

const styleTextSupportingTextFalseStateDe37Data = {
    children: "30 Minutes",
    className: "table-cell-15",
};

const styleTextSupportingTextFalseStateDe38Data = {
    children: "2 Hours",
    className: "table-cell-9-3",
};

const styleTextSupportingTextFalseStateDe39Data = {
    children: "30 Minutes",
    className: "table-cell-9-4",
};

const styleTextSupportingTextFalseStateDe40Data = {
    children: "30 Minutes",
    className: "table-cell-9-5",
};

const styleTextSupportingTextFalseStateDe41Data = {
    children: "30 Minutes",
    className: "table-cell-9",
};

const helpIconFalseArrowFalseStateDefault18Data = {
    children: "Estimated Start Date",
    className: "table-header-17",
};

const textTrueCheckboxFalseColorWhite18Data = {
    className: "table-header-cell-17",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault18Data,
};

const styleTextSupportingTextFalseStateDe42Data = {
    children: "Immediately",
    className: "table-cell-10-1",
};

const styleTextSupportingTextFalseStateDe43Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-10-2",
};

const styleTextSupportingTextFalseStateDe310Data = {
    children: "1 month",
    className: "table-cell-16",
};

const styleTextSupportingTextFalseStateDe44Data = {
    children: "Tomorrow",
    className: "table-cell-10-3",
};

const styleTextSupportingTextFalseStateDe45Data = {
    children: "Next Week",
    className: "table-cell-10-4",
};

const styleTextSupportingTextFalseStateDe46Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-10-5",
};

const styleTextSupportingTextFalseStateDe47Data = {
    children: "Mon 3.4.2022",
    className: "table-cell-10",
};

const helpIconFalseArrowFalseStateDefault19Data = {
    children: "Country",
    className: "table-header-18",
};

const textTrueCheckboxFalseColorWhite19Data = {
    className: "table-header-cell-18",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault19Data,
};

const socialIcon14Data = {
    src: "/img/us-5@2x.svg",
};

const tableCell22Data = {
    text: "United States",
    socialIconProps: socialIcon14Data,
};

const socialIcon15Data = {
    src: "/img/uy-1@2x.svg",
};

const tableCell23Data = {
    text: "Argentina",
    className: "table-cell-23-2",
    socialIconProps: socialIcon15Data,
};

const socialIcon16Data = {
    src: "/img/se-1@2x.svg",
};

const tableCell24Data = {
    text: "Sweden",
    className: "table-cell-23",
    socialIconProps: socialIcon16Data,
};

const socialIcon17Data = {
    src: "/img/us-6@2x.svg",
};

const tableCell25Data = {
    text: "United States",
    socialIconProps: socialIcon17Data,
};

const socialIcon18Data = {
    src: "/img/us-7@2x.svg",
};

const tableCell26Data = {
    text: "United States",
    socialIconProps: socialIcon18Data,
};

const socialIcon19Data = {
    src: "/img/us-8@2x.svg",
};

const tableCell27Data = {
    text: "United States",
    socialIconProps: socialIcon19Data,
};

const socialIcon20Data = {
    src: "/img/us-9@2x.svg",
};

const tableCell28Data = {
    text: "United States",
    socialIconProps: socialIcon20Data,
};

const helpIconFalseArrowFalseStateDefault20Data = {
    children: "Availability per week",
    className: "table-header-19",
};

const textTrueCheckboxFalseColorWhite20Data = {
    className: "table-header-cell-19",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault20Data,
};

const styleTextSupportingTextFalseStateDe48Data = {
    children: "10-20 hours",
    className: "table-cell-11-1",
};

const styleTextSupportingTextFalseStateDe49Data = {
    children: "10-20 hours",
    className: "table-cell-11-2",
};

const styleTextSupportingTextFalseStateDe50Data = {
    children: "10-20 hours",
    className: "table-cell-11-3",
};

const styleTextSupportingTextFalseStateDe51Data = {
    children: "10-20 hours",
    className: "table-cell-11-4",
};

const styleTextSupportingTextFalseStateDe52Data = {
    children: "10-20 hours",
    className: "table-cell-11-5",
};

const styleTextSupportingTextFalseStateDe53Data = {
    children: "10-20 hours",
    className: "table-cell-11-6",
};

const styleTextSupportingTextFalseStateDe54Data = {
    children: "10-20 hours",
    className: "table-cell-11",
};

const helpIconFalseArrowFalseStateDefault21Data = {
    children: "Status",
    className: "table-header-20",
};

const textTrueCheckboxFalseColorWhite21Data = {
    className: "table-header-cell-20",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault21Data,
};

const iconFalse4Data = {
    children: "Hired",
    className: "badge-base-3",
};

const sizesmIconFalseColorPrimary4Data = {
    className: "badge-3",
    iconFalseProps: iconFalse4Data,
};

const styleBadgeSupportingTextFalseStateDData = {
    sizesmIconFalseColorPrimaryProps: sizesmIconFalseColorPrimary4Data,
};

const iconFalse22Data = {
    children: "Failed Test",
};

const sizesmIconFalseColorErrorData = {
    iconFalse2Props: iconFalse22Data,
};

const styleBadgeSupportingTextFalseStateD2Data = {
    sizesmIconFalseColorErrorProps: sizesmIconFalseColorErrorData,
};

const iconFalse23Data = {
    children: "Ready for Test",
    className: "badge-base-5",
};

const sizesmIconFalseColorBlueLightData = {
    iconFalse2Props: iconFalse23Data,
};

const styleBadgeSupportingTextFalseStateD3Data = {
    sizesmIconFalseColorBlueLightProps: sizesmIconFalseColorBlueLightData,
};

const iconFalse24Data = {
    children: "Not Compatible",
    className: "badge-base-6",
};

const sizesmIconFalseColorWarningData = {
    iconFalse2Props: iconFalse24Data,
};

const styleBadgeSupportingTextFalseStateD4Data = {
    sizesmIconFalseColorWarningProps: sizesmIconFalseColorWarningData,
};

const helpIconFalseArrowFalseStateDefault22Data = {
    children: "More Info",
    className: "table-header-21",
};

const textTrueCheckboxFalseColorWhite22Data = {
    className: "table-header-cell-21",
    helpIconFalseArrowFalseStateDefaultProps: helpIconFalseArrowFalseStateDefault22Data,
};

const styleActionIconsSupportingTextFalse8Data = {
    className: "table-cell-21",
};

const styleActionIconsSupportingTextFalse9Data = {
    className: "table-cell-21",
};

const styleActionIconsSupportingTextFalse10Data = {
    className: "table-cell-21",
};

const styleActionIconsSupportingTextFalse11Data = {
    className: "table-cell-21",
};

const styleActionIconsSupportingTextFalse12Data = {
    className: "table-cell-21",
};

const styleActionIconsSupportingTextFalse13Data = {
    className: "table-cell-21",
};

const styleActionIconsSupportingTextFalse14Data = {
    className: "table-cell-21",
};

const dashboard1Data = {
    text: "Select Status",
    headerNavigationProps: headerNavigation4Data,
    dividerChevronTypeTextBreakpointDes2Props: dividerChevronTypeTextBreakpointDes22Data,
    currentFalseTypeTextIconFalseStateDProps: currentFalseTypeTextIconFalseStateD7Data,
    breadcrumbsFalseSupportingTextTrueS3Props: breadcrumbsFalseSupportingTextTrueS32Data,
    supportingTextFalseStyleSimpleActio2Props: supportingTextFalseStyleSimpleActio22Data,
    textTrueCheckboxFalseColorWhite1Props: textTrueCheckboxFalseColorWhite15Data,
    styleTextSupportingTextTrueStateDef1Props: styleTextSupportingTextTrueStateDef8Data,
    styleTextSupportingTextTrueStateDef2Props: styleTextSupportingTextTrueStateDef9Data,
    styleTextSupportingTextTrueStateDef3Props: styleTextSupportingTextTrueStateDef10Data,
    styleTextSupportingTextTrueStateDef4Props: styleTextSupportingTextTrueStateDef11Data,
    styleTextSupportingTextTrueStateDef5Props: styleTextSupportingTextTrueStateDef12Data,
    styleTextSupportingTextTrueStateDef6Props: styleTextSupportingTextTrueStateDef13Data,
    styleTextSupportingTextTrueStateDef7Props: styleTextSupportingTextTrueStateDef14Data,
    textTrueCheckboxFalseColorWhite2Props: textTrueCheckboxFalseColorWhite16Data,
    styleTextSupportingTextFalseStateDe1Props: styleTextSupportingTextFalseStateDe26Data,
    styleTextSupportingTextFalseStateDe2Props: styleTextSupportingTextFalseStateDe27Data,
    styleTextSupportingTextFalseStateDe3Props: styleTextSupportingTextFalseStateDe28Data,
    styleTextSupportingTextFalseStateDe4Props: styleTextSupportingTextFalseStateDe29Data,
    styleTextSupportingTextFalseStateDe5Props: styleTextSupportingTextFalseStateDe30Data,
    styleTextSupportingTextFalseStateDe6Props: styleTextSupportingTextFalseStateDe31Data,
    styleTextSupportingTextFalseStateDe7Props: styleTextSupportingTextFalseStateDe34Data,
    textTrueCheckboxFalseColorWhite3Props: textTrueCheckboxFalseColorWhite17Data,
    styleTextSupportingTextFalseStateDe8Props: styleTextSupportingTextFalseStateDe35Data,
    styleTextSupportingTextFalseStateDe9Props: styleTextSupportingTextFalseStateDe36Data,
    styleTextSupportingTextFalseStateDe31Props: styleTextSupportingTextFalseStateDe37Data,
    styleTextSupportingTextFalseStateDe10Props: styleTextSupportingTextFalseStateDe38Data,
    styleTextSupportingTextFalseStateDe11Props: styleTextSupportingTextFalseStateDe39Data,
    styleTextSupportingTextFalseStateDe12Props: styleTextSupportingTextFalseStateDe40Data,
    styleTextSupportingTextFalseStateDe13Props: styleTextSupportingTextFalseStateDe41Data,
    textTrueCheckboxFalseColorWhite4Props: textTrueCheckboxFalseColorWhite18Data,
    styleTextSupportingTextFalseStateDe14Props: styleTextSupportingTextFalseStateDe42Data,
    styleTextSupportingTextFalseStateDe15Props: styleTextSupportingTextFalseStateDe43Data,
    styleTextSupportingTextFalseStateDe32Props: styleTextSupportingTextFalseStateDe310Data,
    styleTextSupportingTextFalseStateDe16Props: styleTextSupportingTextFalseStateDe44Data,
    styleTextSupportingTextFalseStateDe17Props: styleTextSupportingTextFalseStateDe45Data,
    styleTextSupportingTextFalseStateDe18Props: styleTextSupportingTextFalseStateDe46Data,
    styleTextSupportingTextFalseStateDe19Props: styleTextSupportingTextFalseStateDe47Data,
    textTrueCheckboxFalseColorWhite5Props: textTrueCheckboxFalseColorWhite19Data,
    tableCell21Props: tableCell22Data,
    tableCell22Props: tableCell23Data,
    tableCell23Props: tableCell24Data,
    tableCell24Props: tableCell25Data,
    tableCell25Props: tableCell26Data,
    tableCell26Props: tableCell27Data,
    tableCell27Props: tableCell28Data,
    textTrueCheckboxFalseColorWhite6Props: textTrueCheckboxFalseColorWhite20Data,
    styleTextSupportingTextFalseStateDe20Props: styleTextSupportingTextFalseStateDe48Data,
    styleTextSupportingTextFalseStateDe21Props: styleTextSupportingTextFalseStateDe49Data,
    styleTextSupportingTextFalseStateDe22Props: styleTextSupportingTextFalseStateDe50Data,
    styleTextSupportingTextFalseStateDe23Props: styleTextSupportingTextFalseStateDe51Data,
    styleTextSupportingTextFalseStateDe24Props: styleTextSupportingTextFalseStateDe52Data,
    styleTextSupportingTextFalseStateDe25Props: styleTextSupportingTextFalseStateDe53Data,
    styleTextSupportingTextFalseStateDe26Props: styleTextSupportingTextFalseStateDe54Data,
    textTrueCheckboxFalseColorWhite7Props: textTrueCheckboxFalseColorWhite21Data,
    styleBadgeSupportingTextFalseStateDProps: styleBadgeSupportingTextFalseStateDData,
    styleBadgeSupportingTextFalseStateD2Props: styleBadgeSupportingTextFalseStateD2Data,
    styleBadgeSupportingTextFalseStateD3Props: styleBadgeSupportingTextFalseStateD3Data,
    styleBadgeSupportingTextFalseStateD4Props: styleBadgeSupportingTextFalseStateD4Data,
    textTrueCheckboxFalseColorWhite8Props: textTrueCheckboxFalseColorWhite22Data,
    styleActionIconsSupportingTextFalse1Props: styleActionIconsSupportingTextFalse8Data,
    styleActionIconsSupportingTextFalse2Props: styleActionIconsSupportingTextFalse9Data,
    styleActionIconsSupportingTextFalse3Props: styleActionIconsSupportingTextFalse10Data,
    styleActionIconsSupportingTextFalse4Props: styleActionIconsSupportingTextFalse11Data,
    styleActionIconsSupportingTextFalse5Props: styleActionIconsSupportingTextFalse12Data,
    styleActionIconsSupportingTextFalse6Props: styleActionIconsSupportingTextFalse13Data,
    styleActionIconsSupportingTextFalse7Props: styleActionIconsSupportingTextFalse14Data,
};

