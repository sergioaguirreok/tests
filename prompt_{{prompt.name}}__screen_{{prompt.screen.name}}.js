const XPATH_LOGIN_ID__COUNTRYCODE_BUTTON = "//button[@value='pick-country-code']";
const XPATH_LOGIN_ID__COUNTRYCODE_BUTTON_SPAN3 = "//button[@value='pick-country-code']/span[3]";

var jsAvailableElement = getElementByXpath(XPATH_LOGIN_ID__JS_AVAILABLE);
const jsAvailable = jsAvailableElement.getAttribute("value");
const appName = "{{application.name}}";

var pwdlessCountryCodeButton = getElementByXpath(XPATH_LOGIN_ID__COUNTRYCODE_BUTTON);

alert("antes de if");


if (pwdlessCountryCodeButton != null) {

    //Disable the country code picker button
    pwdlessCountryCodeButton.setAttribute("disabled", "")

    //Remove > from the country code picker button
    var pwdlessCountryButtonCodeSpan3 = getElementByXpath(XPATH_LOGIN_ID__COUNTRYCODE_BUTTON_SPAN3);
    pwdlessCountryButtonCodeSpan3.parentElement.removeChild(pwdlessCountryButtonCodeSpan3)
}
