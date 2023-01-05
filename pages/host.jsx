import React from "react";
import AirCover from "../components/AirCover";
import HostSetup from "../components/Header/HostSetup";
import HostBanner from "../components/HostBanner";
import HostFaq from "../components/HostFaq";
import HostHeader from "../components/HostHeader";
import Footer from "../components/Footer";

function host() {
  return (
    <div>
      <HostHeader />
      <HostBanner />
      <HostSetup />
      <AirCover />
      <HostFaq />
      <Footer />
    </div>
  );
}

export default host;
