import { Resend } from "resend";

export async function onRequestPost(context) {
  try {
    const { nombre, email, mensaje } = await context.request.json();

    const resend = new Resend(context.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Formulario Web <no-reply@marmolesbenavente.com>",
      to: "marmolesbenavente@gmail.com",
      replyTo: email,
      subject: "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo mensaje desde la web</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${mensaje}</p>
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