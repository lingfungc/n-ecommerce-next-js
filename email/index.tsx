import { Resend } from "resend";
import { SENDER_EMAIL, APP_NAME } from "@/lib/constants";
import { Order } from "@/types";
import dotenv from "dotenv";
dotenv.config();

import PurchaseReceiptEmail from "./purchase-receipt";

const resend = new Resend(process.env.RESEND_API_KEY as string);

// export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
//   await resend.emails.send({
//     from: `${APP_NAME} <${SENDER_EMAIL}>`,
//     to: order.user.email,
//     subject: `Order Confirmation ${order.id}`,
//     react: <PurchaseReceiptEmail order={order} />,
//   });
// };

export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  try {
    console.log(
      `Sending purchase receipt for order ${order.id} to ${order.user.email} from ${SENDER_EMAIL}`
    );

    await resend.emails.send({
      from: `${APP_NAME} <${SENDER_EMAIL}>`,
      to: order.user.email,
      subject: `Order Confirmation ${order.id}`,
      react: <PurchaseReceiptEmail order={order} />,
    });

    console.log(`Purchase receipt sent successfully for order ${order.id}`);
  } catch (error) {
    console.error(
      `Failed to send purchase receipt for order ${order.id}:`,
      error
    );
    // You might want to log this to an error tracking service like Sentry
    // or save failed email attempts to retry later
  }
};
