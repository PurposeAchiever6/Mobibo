import dotenv from "dotenv";
import emailjs from '@emailjs/browser';
import { orderJson } from "./json.mjs"
dotenv.config()

export async function sendEmail(firstName, lastName, email, phone, company, driverNotes, imageUrl) {
  var templateParams = await orderJson(firstName, lastName, email, phone, company, driverNotes, imageUrl);
  console.log(templateParams)
  
  await emailjs
      .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, process.env.PUBLIC_KEY)
      .then(
        () => {
          console.log('Email sending SUCCESS!');
        },
        (error) => {
          console.log('Email sending FAILED...', error.text);
        },
      );
}
