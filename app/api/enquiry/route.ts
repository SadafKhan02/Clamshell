import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const product = String(body.product ?? "").trim();
    const variant = String(body.variant ?? "").trim();
    const quantity = String(body.quantity ?? "").trim();
    const location = String(body.location ?? "").trim();
    const pickupLocation = String(body.pickupLocation ?? "").trim();
    const preferredDate = String(body.preferredDate ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !phone || !product) {
      return NextResponse.json(
        { success: false, message: "Name, email, phone, and product are required." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid email address." },
        { status: 400 },
      );
    }
    if (/^Logistics(?:\s|—|-|$)/.test(product)) {
      const quantityValue = Number(quantity);
      if (!pickupLocation || !location || !Number.isInteger(quantityValue) || quantityValue < 1) {
        return NextResponse.json(
          { success: false, message: "Pickup, delivery, and a positive whole-number quantity are required for logistics enquiries." },
          { status: 400 },
        );
      }
      if (preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
        return NextResponse.json(
          { success: false, message: "Enter a valid preferred delivery date." },
          { status: 400 },
        );
      }
    }

    const record = {
      id: createHash("sha256").update(`${email}|${phone}|${product}|${variant}|${quantity}|${message}`).digest("hex").slice(0, 16),
      createdAt: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      product,
      variant,
      quantity,
      location,
      pickupLocation,
      preferredDate,
      message,
    };

    const directory = path.join(process.cwd(), "data", "enquiries");
    await mkdir(directory, { recursive: true });
    await appendFile(path.join(directory, "enquiries.jsonl"), `${JSON.stringify(record)}\n`, "utf8");

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received and stored.",
      enquiryId: record.id,
    });
  } catch (error) {
    console.error("Enquiry submission failed", error);
    return NextResponse.json(
      { success: false, message: "Your enquiry could not be submitted. Please try again." },
      { status: 500 },
    );
  }
}
