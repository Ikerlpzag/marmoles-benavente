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
        <!DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8">
        </head>

        <body style="margin:0;padding:40px 0;background:#f3f3f3;font-family:Arial,Helvetica,sans-serif;color:#222;">

        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr>
        <td align="center">

        <table role="presentation" cellpadding="0" cellspacing="0" width="650" style="background:#ffffff;border:1px solid #e5e5e5;">

        <tr>
        <td style="padding:35px 45px;border-bottom:4px solid #2f2f2f;">

        <h1 style="margin:0;font-size:30px;font-weight:300;letter-spacing:2px;">
        MÁRMOLES BENAVENTE
        </h1>

        <p style="margin:10px 0 0;color:#777;font-size:14px;">
        Notificación automática desde la página web
        </p>

        </td>
        </tr>

        <tr>
        <td style="padding:45px;">

        <h2 style="margin:0 0 30px;font-size:24px;font-weight:400;">
        Nuevo formulario de contacto
        </h2>

        <p style="margin:0 0 35px;color:#666;line-height:28px;">
        Se ha recibido una nueva solicitud a través del formulario de contacto de la página web.
        A continuación se muestran los datos facilitados por el cliente.
        </p>

        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

        <tr>
        <td style="padding:18px 0;border-top:1px solid #ececec;width:180px;color:#666;">
        Nombre
        </td>

        <td style="padding:18px 0;border-top:1px solid #ececec;font-weight:600;">
        ${nombre}
        </td>
        </tr>

        <tr>
        <td style="padding:18px 0;border-top:1px solid #ececec;color:#666;">
        Correo electrónico
        </td>

        <td style="padding:18px 0;border-top:1px solid #ececec;">
        <a href="mailto:${email}" style="color:#222;text-decoration:none;">
        ${email}
        </a>
        </td>
        </tr>

        <tr>
        <td style="padding:18px 0;border-top:1px solid #ececec;color:#666;">
        Fecha
        </td>

        <td style="padding:18px 0;border-top:1px solid #ececec;">
        ${new Date().toLocaleString("es-ES")}
        </td>
        </tr>

        </table>

        <div style="margin-top:45px;">

        <h3 style="margin-bottom:18px;font-size:18px;font-weight:500;">
        Mensaje
        </h3>

        <div style="
        background:#fafafa;
        border-left:4px solid #2f2f2f;
        padding:25px;
        line-height:30px;
        font-size:15px;
        white-space:pre-line;
        ">
        ${mensaje}
        </div>

        </div>

        <div style="margin-top:45px;text-align:center;">

        <a
        href="mailto:${email}"
        style="
        display:inline-block;
        padding:15px 32px;
        background:#2f2f2f;
        color:white;
        text-decoration:none;
        font-size:14px;
        letter-spacing:1px;
        text-transform:uppercase;
        ">
        Responder al cliente
        </a>

        </div>

        </td>
        </tr>

        <tr>
        <td style="padding:30px 45px;background:#fafafa;border-top:1px solid #ececec;">

        <p style="margin:0;font-size:13px;color:#888;line-height:24px;">
        Este correo ha sido generado automáticamente desde el formulario de contacto de
        <strong>marmolesbenavente.com</strong>.
        </p>

        </td>
        </tr>

        </table>

        </td>
        </tr>
        </table>

        </body>
        </html>
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