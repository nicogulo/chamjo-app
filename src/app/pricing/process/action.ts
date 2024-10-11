"use server"

import dayjs from "dayjs"
import Midtrans from "midtrans-client"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-RjkWKxAjV7-0mmKbdAtO5Oit",
    clientKey: "SB-Mid-client-MB69pBRyeOPqWlRv"
})

const PRICE = {
    MONTHLY: 10000,
    ANNUAL: 100000
}

export const handlePay = async (_: any, formData: FormData) => {
    const plan = formData.get("plan") as string

    // create order data in table order
    const id = Math.floor(Math.random() * 10000)
    const price = 100000

    // const createInvoice = await fetch(
    //     `https://api.sandbox.midtrans.com/v1/invoices`,
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Basic ${btoa(
    //                 "SB-Mid-server-RjkWKxAjV7-0mmKbdAtO5Oit:"
    //             )}`,
    //         },
    //         body: JSON.stringify({
    //             order_id: id,
    //             invoice_number: id,
    //             due_date: dayjs().add(1, "day").toISOString(),
    //             invoice_date: dayjs().toISOString(),
    //             payment_type: "payment_link",
    //             customer_details: {
    //                 id: "001",
    //                 name: "Nico",
    //                 email: "nico@chamjo.com",
    //                 phone: "82313123123",
    //             },
    //             item_details: [
    //                 {
    //                     item_id: `chamjo-subscription-${plan}`,
    //                     description: `Chamjo Subscription ${
    //                         plan === "annual" ? "Annual" : "Monthly"
    //                     }`,
    //                     quantity: 1,
    //                     price,
    //                 },
    //             ],
    //             // notes: "just a notes",
    //             payment_link: {
    //                 is_custom_expiry: true,
    //                 enabled_payments: ["bca_va"],
    //                 bca_va: {
    //                     number: "12345678901",
    //                     free_text: {
    //                         payment: [
    //                             {
    //                                 id: "Pembayaran chamjo",
    //                                 en: "Payment for chamjo",
    //                             },
    //                         ],
    //                     },
    //                 },
    //             },
    //             // amount: {},
    //         }),
    //     }
    // );

    // const invoice = await createInvoice.json();

    // console.log(invoice);

    // return null;

    const orderData = {
        id,
        price,
        status: "pending"
    }

    // await supabase.insert("order", orderData);

    // const id =

    let parameter = {
        item_details: [
            {
                name: `Chamjo Subscription Monthly`,
                price,
                quantity: 1
            }
        ],
        transaction_details: {
            order_id: orderData.id,
            gross_amount: price
        }
    }

    try {
        const token = await snap.createTransactionToken(parameter)
        console.log(token)

        return {
            token
        }
    } catch (error) {
        console.error("Error creating transaction token:", error)

        throw new Error("Failed to create transaction token")
    }

    // const res = await fetch(`http://localhost:3000/payment/process`, {
    //     method: "POST",
    //     headers: {
    //         Authorization: "token supabase",
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ plan }),
    // });

    // const data = await res.json();
}
