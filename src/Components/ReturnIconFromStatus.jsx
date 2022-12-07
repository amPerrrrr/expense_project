import {
  approved,
  deny,
  pending,
  refund,
  revise,
  send_to_other,
  sign_off_together,
} from "../Assets/Image";

export default function ReturnIconFromStatus(status) {
  switch (status) {
    case "approved":
      return approved;
      break;
    case "deny":
      return deny;
      break;
    case "pending":
      return pending;
      break;
    case "refund":
      return refund;
      break;
    case "revise":
      return revise;
      break;
    case "send_to_other":
      return send_to_other;
      break;
    case "sign_off_together":
      return sign_off_together;
      break;
    default:
      break;
  }
}
