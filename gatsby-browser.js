 
//https://fontsource.org/fonts/montserrat
require("@fontsource/montserrat" )
require("@fontsource/montserrat/500.css") 
require("@fontsource/montserrat/600.css")
require("@fontsource/montserrat/700.css")
require("./src/styles/global.scss")

exports.onRouteUpdate = ({location}) => {
    if (location.state?.hash) {
      setTimeout(() => {
        document.querySelector(`#${location.state.hash}`)?.scrollIntoView({behavior: "smooth"});
      }, 0);
    }
  };
