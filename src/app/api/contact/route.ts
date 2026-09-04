import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      phone,
      website,
      message,
      service,
      source,
    } = data;

    // ================================
    // BACKEND VALIDATION
    // ================================
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    // ================================
    // FORMAT PHONE NUMBER
    // ================================
    const formattedPhone = phone
      ? phone.startsWith("+")
        ? phone
        : `+${phone}`
      : "Not provided";

    // ================================
    // SEND EMAIL USING RESEND
    // ================================
    const { data: emailData, error } = await resend.emails.send({
      from: "GenMax Website <onboarding@resend.dev>",

      // Resend testing mode
      to: ["singhrani9335@gmail.com"],

      subject: `New ${service || "Contact"} Form Submission from ${name}`,

      // User can directly reply to the submitted email
      replyTo: email,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f5f5f5;
            padding: 30px 15px;
          "
        >
          <div
            style="
              max-width: 650px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              border: 1px solid #e5e5e5;
            "
          >

            <!-- HEADER -->
            <div
              style="
                background: linear-gradient(135deg, #F04D02, #FE8302);
                padding: 24px 30px;
              "
            >
              <h2
                style="
                  margin: 0;
                  color: #ffffff;
                  font-size: 22px;
                  font-weight: 600;
                "
              >
                New Contact Form Submission
              </h2>

              <p
                style="
                  margin: 6px 0 0;
                  color: rgba(255,255,255,0.9);
                  font-size: 13px;
                "
              >
                GenMax IT Solution Website
              </p>
            </div>

            <!-- CONTENT -->
            <div style="padding: 30px;">

              <!-- CONTACT DETAILS -->
              <h3
                style="
                  margin: 0 0 18px;
                  color: #222222;
                  font-size: 16px;
                "
              >
                Contact Details
              </h3>

              <table
                style="
                  width: 100%;
                  border-collapse: collapse;
                  font-size: 14px;
                "
              >

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      width: 110px;
                      color: #666666;
                      font-weight: 600;
                      vertical-align: top;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #222222;
                      vertical-align: top;
                    "
                  >
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #666666;
                      font-weight: 600;
                      vertical-align: top;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #222222;
                      vertical-align: top;
                    "
                  >
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #666666;
                      font-weight: 600;
                      vertical-align: top;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #222222;
                      vertical-align: top;
                    "
                  >
                    ${formattedPhone}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #666666;
                      font-weight: 600;
                      vertical-align: top;
                    "
                  >
                    Website
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #222222;
                      vertical-align: top;
                      word-break: break-word;
                    "
                  >
                    ${
                      website
                        ? `<a href="${website}" style="color: #F04D02; text-decoration: none;">${website}</a>`
                        : "Not provided"
                    }
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #666666;
                      font-weight: 600;
                      vertical-align: top;
                    "
                  >
                    Service
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #222222;
                      vertical-align: top;
                    "
                  >
                    ${service || "Not specified"}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #666666;
                      font-weight: 600;
                      vertical-align: top;
                    "
                  >
                    Source
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #222222;
                      vertical-align: top;
                    "
                  >
                    ${source || "Website"}
                  </td>
                </tr>

              </table>

              <!-- MESSAGE -->
              <div style="margin-top: 25px;">

                <h3
                  style="
                    margin: 0 0 12px;
                    color: #222222;
                    font-size: 16px;
                  "
                >
                  Message
                </h3>

                <div
                  style="
                    background-color: #f7f7f7;
                    border-left: 4px solid #F04D02;
                    border-radius: 6px;
                    padding: 15px 18px;
                    color: #333333;
                    font-size: 14px;
                    line-height: 1.7;
                    white-space: pre-line;
                    word-break: break-word;
                  "
                >
                  ${message}
                </div>

              </div>

            </div>

            <!-- FOOTER -->
            <div
              style="
                border-top: 1px solid #eeeeee;
                padding: 18px 30px;
                background-color: #fafafa;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #777777;
                  font-size: 12px;
                  line-height: 1.6;
                "
              >
                This message was sent from the GenMax IT Solution website.
              </p>
            </div>

          </div>
        </div>
      `,
    });

    // ================================
    // RESEND ERROR
    // ================================
    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        {
          status: 500,
        }
      );
    }

    console.log("Email sent successfully:", emailData);

    // ================================
    // SUCCESS RESPONSE
    // ================================
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}