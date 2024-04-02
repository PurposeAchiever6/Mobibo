
export async function orderJson(firstName, lastName, email, phone, company, driverNotes, imageUrl='') {
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    company: company,
    driverNotes: driverNotes,
    imageUrl: imageUrl,
  };
}