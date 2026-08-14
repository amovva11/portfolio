// Single source of truth for links that appear in more than one place.

// Google Drive share link (permission: "Anyone with the link" → Viewer).
// Opens Drive's preview in a new tab; the viewer has its own download button.
// To swap the resume, use Drive's "Manage versions" on the existing file so
// this ID stays valid — re-uploading creates a new ID and breaks this link.
export const RESUME_URL =
  "https://drive.google.com/file/d/17izBPTHaeFmY3Jgr9DKl-hFaC1Yzl8gw/view";

// TODO: replace with your own blog once it exists (Hashnode, Substack, a
// /blog route here — anything). Left as "#" so the nav item stays visible
// without sending anyone to someone else's site.
export const BLOG_URL = "#";
