import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campi mancanti" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "contact@mattiavalerio.dev",
      to: "mattiavalerio.dev@gmail.com",
      replyTo: email,
      subject: `Contatto dal portfolio — ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Invio fallito" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Errore server" }, { status: 500 });
  }
}
