import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-24 py-14 bg-gray-200 text-gray-600">
      <div className="space-y-4 text-md text-gray-800">
        <h5 className="font-bold">About</h5>
        <div>How Airbnb works?</div>
        <div>NewsRoom</div>
        <div>Investors</div>
        <div>Airbnb Plus</div>
        <div>Airbnb Luxe</div>
      </div>

      <div className="space-y-4 text-md text-gray-800">
        <h5 className="font-bold">COmmunity</h5>
        <div>Airbnb.org: disaster relief housing</div>
        <div>Support Afghan refugees</div>
        <div>Celebrating diversity & belonging</div>
        <div>Combating discrimination</div>
      </div>

      <div className="space-y-4 text-md text-gray-800">
        <h5 className="font-bold">Host</h5>
        <div>Airbnb your home</div>
        <div>AirCover for Hosts</div>
        <div>Explore hosting resources</div>
        <div>Visit our community forum</div>
        <div>How to host responsibly</div>
      </div>

      <div className="space-y-4 text-md text-gray-800">
        <h5 className="font-bold">Airbnb</h5>
        <div>Newsroom</div>
        <div>Learn about new features</div>
        <div>Letter from our founders</div>
        <div>Careers</div>
        <div>Investors</div>
      </div>
    </footer>
  );
}

export default Footer;
