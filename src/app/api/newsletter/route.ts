import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const email = data?.email?.trim();

    // ================= VALIDATION =================
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your email address.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // ================= SEND EMAIL =================
    const { data: emailData, error } = await resend.emails.send({
      from: "GenMax Website <onboarding@resend.dev>",

      // Testing ke liye apna Resend account email rakho
      to: ["singhrani9335@gmail.com"],

      subject: "New Newsletter Subscription",

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 650px;
            margin: 0 auto;
            padding: 24px;
            background: #f7f7f7;
          "
        >
          <div
            style="
              background: #ffffff;
              padding: 30px;
              border-radius: 12px;
              border: 1px solid #e5e5e5;
            "
          >
            <h2
              style="
                margin: 0 0 20px;
                color: #F04D02;
                font-size: 24px;
              "
            >
              New Newsletter Subscription
            </h2>

            <p style="margin: 0 0 10px;">
              A new visitor has subscribed to the GenMax IT Solution newsletter.
            </p>

            <p style="margin: 20px 0;">
              <strong>Subscriber Email:</strong>
              ${email}
            </p>

            <hr
              style="
                margin: 25px 0;
                border: none;
                border-top: 1px solid #eeeeee;
              "
            />

            <p
              style="
                margin: 0;
                color: #666666;
                font-size: 13px;
              "
            >
              This subscription was submitted from the GenMax IT Solution website.
            </p>
          </div>
        </div>
      `,
    });

    // ================= RESEND ERROR =================
    if (error) {
      console.error("Newsletter Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to subscribe. Please try again.",
        },
        { status: 500 }
      );
    }

    console.log(
      "Newsletter email sent successfully:",
      emailData
    );

    // ================= SUCCESS =================
    return NextResponse.json(
      {
        success: true,
        message: "You have successfully subscribed to our newsletter.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}