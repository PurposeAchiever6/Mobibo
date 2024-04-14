
export async function orderJson(location, selectedRange, firstName, lastName, email, phone, company, driverNotes) {
  return {
    location: location,
    selectedRange: selectedRange,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    company: company,
    driverNotes: driverNotes,
  };
}