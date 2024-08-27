export const getSecretFromOtpUrl = (otpUrl: string | null) => {
  if (!otpUrl) return null;
  const regex = /secret=([^&]*)/;
  const match = otpUrl.match(regex);
  return match ? match[1] : null;
};
