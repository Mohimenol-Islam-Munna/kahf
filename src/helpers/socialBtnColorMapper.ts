export const socialBtnColorMapper = (name: string): string => {
  switch (name) {
    case "github":
      return "bg-[#333]";
    case "facebook":
      return "bg-[#3b5998]";
    case "youtube":
      return "bg-[#ff0000]";
    case "linkedin":
      return "bg-[#0077b5]";
    case "twitter":
      return "bg-[#1da1f2]";
    case "instagram":
      return "bg-[#e4405f]";
    default:
      return "bg-[#333]";
  }
};
