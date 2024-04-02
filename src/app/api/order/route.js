// pages/api/order.js
import { NextRequest, NextResponse } from 'next/server';
import Database from '../db/mongodb.mjs';


async function createOrderRecord(firstName, lastName, email, phone, company, driverNotes, imageUrl = '') {
  const database = new Database(process.env.MONGODB_URI);
  await database.connect();
  await database.create("order", {
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
  const { firstName, lastName, email, phone, company, driverNotes, imageUrl } = data;
  console.log(firstName);
  await createOrderRecord(firstName, lastName, email, phone, company, driverNotes);
  return NextResponse.json(data);
}