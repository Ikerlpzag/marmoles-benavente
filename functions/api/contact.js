import { Resend } from "resend";

export async function onRequestPost(context) {
  try {
    const { nombre, email, mensaje } = await context.request.json();

    const resend = new Resend(context.env.RESEND_API_KEY);

    await resend.emails.send({
    from: "Mármoles Benavente <no-reply@marmolesbenavente.com>",
    to: "marmolesbenavente@gmail.com",
    replyTo: email,
    subject: `📩 Nuevo formulario de contacto - ${nombre}`,
    html: `
    <div style="background:#f5f5f5;padding:40px 20px;font-family:Arial,sans-serif;">
        <table style="max-width:650px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
        
        <tr>
            <td style="background:#1f1f1f;padding:30px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:28px;">
                Mármoles Benavente
            </h1>
            <p style="margin-top:8px;color:#d1d1d1;font-size:14px;">
                Nuevo formulario de contacto
            </p>
            </td>
        </tr>

        <tr>
            <td style="padding:35px;">

            <h2 style="margin-top:0;color:#222;">
                Has recibido una nueva consulta
            </h2>

            <table style="width:100%;border-collapse:collapse;margin-top:25px;">

                <tr>
                <td style="padding:12px 0;font-weight:bold;width:140px;">
                    👤 Nombre
                </td>

                <td style="padding:12px 0;">
                    ${nombre}
                </td>
                </tr>

                <tr>
                <td style="padding:12px 0;font-weight:bold;">
                    ✉️ Email
                </td>

                <td style="padding:12px 0;">
                    <a href="mailto:${email}" style="color:#0b6efd;text-decoration:none;">
                    ${email}
                    </a>
                </td>
                </tr>

            </table>

            <div style="margin-top:35px;">
                <p style="font-weight:bold;margin-bottom:10px;">
                💬 Mensaje
                </p>

                <div style="background:#f8f8f8;border-left:4px solid #333;padding:18px;border-radius:6px;line-height:1.7;">
                ${mensaje.replace(/\n/g, "<br>")}
                </div>
            </div>

            </td>
        </tr>

        <tr>
            <td style="background:#fafafa;border-top:1px solid #ececec;padding:20px;text-align:center;color:#777;font-size:13px;">
            Este correo ha sido enviado automáticamente desde el formulario de contacto de
            <br>
            <strong>marmolesbenavente.com</strong>
            </td>
        </tr>

        </table>
    </div>
    `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "No se pudo enviar el correo",
      },
      {
        status: 500,
      }
    );
  }
}