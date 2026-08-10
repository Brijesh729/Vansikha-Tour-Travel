export interface Destination {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  intro: string;
  attractions: { name: string; description: string }[];
  bestTimeToVisit: string;
  howToReach: string;
  localTransport: string;
  travelTips: string[];
  relatedTourSlugs: string[];
  heroImage: string;
}
