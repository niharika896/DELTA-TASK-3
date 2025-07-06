import nodemailer from "nodemailer";
import express from "express";
import dotenv from "dotenv";
import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
router.use(express.json());
router.post("/", async (req, res) => {
  try {
    const Booking = req.body.pastBookings;
    const email = req.body.email;
    console.log(email);

    // Step 1: Generate PDF in memory
    const doc = new PDFDocument();
    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", async () => {
      const pdfBuffer = Buffer.concat(buffers);

      // Step 2: Send Email with PDF
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Your Ticket Confirmation PDF",
        text: "Please find your ticket attached.",
        attachments: [
          {
            filename: "ticket.pdf",
            content: pdfBuffer,
          },
        ],
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent to", email);

        // Step 3: Send PDF to client
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'attachment; filename="ticket.pdf"');
        res.end(pdfBuffer);
      } catch (emailErr) {
        console.error("Email failed:", emailErr);
        res.status(500).json({ error: "Failed to send email" });
      }
    });

    // --- Draw PDF content ---
    const imagePath = path.join(__dirname, "logo-bg.png");
    doc.image(imagePath, 0, 0, {
      fit: [100, 100],
      align: "center",
      valign: "center",
    });

    doc.fontSize(20).text("Your Ticket Confirmation", 10, 100);
    doc.moveDown();
    doc.text(`Booking Reference: ${Booking.bookingRef}`);
    doc.moveDown();
    doc.text(`Event Name: ${Booking.eventName}`);
    doc.moveDown();
    doc.text(`Date: ${Booking.date}`);
    doc.moveDown();
    doc.text(`Location: ${Booking.location}`);
    doc.moveDown();
    doc.text(`Time: ${Booking.time}`);
    doc.moveDown();
    doc.text(`Selected Seats: ${Booking.selectedSeats?.join(" ")}`);

    if (Booking.qrurl) {
      const base64Data = Booking.qrurl.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(base64Data, "base64");
      doc.image(imageBuffer, {
        fit: [100, 100],
        align: "center",
        valign: "center",
      });
    }

    doc.end();
  } catch (err) {
    console.error("PDF/email error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;