// pages/api/order.js
import { NextRequest, NextResponse } from 'next/server';
import Database from '../db/mongodb.mjs';

async function createOrderRecord(location, selectedRange, firstName, lastName, email, phone, company, driverNotes) {
  const database = new Database(process.env.MONGODB_URI);
  await database.connect();
  await database.create("order", {
    location: location,
    selectedRange: selectedRange,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    company: company,
    driverNotes: driverNotes
  });
  await database.close();
}

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  const { location,
    selectedRange,
    firstName,
    lastName,
    email,
    phone,
    company,
    driverNotes } = data;
  console.log(firstName);
  await createOrderRecord(location,
    selectedRange,
    firstName,
    lastName,
    email,
    phone,
    company,
    driverNotes);
  return NextResponse.json(data);
}