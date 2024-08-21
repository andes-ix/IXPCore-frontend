export const formatEmail = (email: string) => {
  const [localPart, domain] = email.split("@");

  if (localPart.length <= 2) {
    return email;
  }

  const firstChar = localPart[0];
  const lastChar = localPart[localPart.length - 1];
  const maskedLocalPart = `${firstChar}.........${lastChar}`;

  return `${maskedLocalPart}@${domain}`;
};
