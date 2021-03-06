export interface UserWithUrl {
  user: User;
  url: string;
}

export interface User {
  self: string;
  accountId: string;
  name: string;
  emailAddress: string;
  avatarUrls: {
    "48x48": string;
    "24x24": string;
    "16x16": string;
    "32x32": string;
  };
  displayName: string;
  active: boolean;
  timeZone: string;
  locale: string;
  groups: { size: number; items: any[] };
  applicationRoles: { size: number; items: any[] };
  expand: string;
}
