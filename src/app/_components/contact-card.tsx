import React from "react";
import { getLatestSettings } from "@/lib/getSettings";
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueSkyIcon,
  TwitterIcon,
} from "./icons";

export function ContactCard() {
  const { facebook, github, linkedin, bluesky, twitter } = getLatestSettings();

  const contacts = [
    { key: "facebook", url: facebook, Icon: FacebookIcon },
    { key: "twitter", url: twitter, Icon: TwitterIcon },
    { key: "linkedin", url: linkedin, Icon: LinkedInIcon },
    { key: "github", url: github, Icon: GitHubIcon },
    { key: "bluesky", url: bluesky, Icon: BlueSkyIcon },
  ];

  return (
    <div className="flex space-x-4">
      {contacts.map(({ key, url, Icon }) => (
        <div key={key} className="w-6 h-6">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon className="w-full h-full" />
            </a>
          ) : (
            // Render a placeholder icon if the URL isn’t provided.
            <div className="opacity-50">
              <Icon className="w-full h-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
