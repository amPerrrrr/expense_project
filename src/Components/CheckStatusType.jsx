export default function CheckStatusType(status) {
    switch (status) {
        case "approved":
          return "Approved";
          break;
        case "deny":
          return "Deny";
          break;
        case "pending":
          return "Pending";
          break;
        case "refund":
          return "Refund";
          break;
        case "revise":
          return "Revise";
          break;
        case "send_to_other":
          return "Send to other";
          break;
        case "sign_off_together":
          return "Sign off together";
          break;
        default:
          break;
      }
}
