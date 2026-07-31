export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    return Response.json({
      success: true,
      data: body,
    });

  } catch {
    return Response.json(
      {
        success: false,
        error: "Solicitud inválida",
      },
      {
        status: 400,
      }
    );
  }
}