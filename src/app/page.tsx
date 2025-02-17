"use client";

import cmsData from "./cmsData.json";
import { LandingPage } from "./components/LandingPage";

export default function Home() {
  return <LandingPage cmsData={cmsData} />;
}
