import crypto from "crypto";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "vunky123";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "tonang-admin-secret-key-3000";
export const COOKIE_NAME = "tonang_admin_session";

export function verifyPassword(input: string): boolean {
  if (!input) return false;
  // Timing-safe comparison to prevent timing attacks
  const inputBuffer = Buffer.from(input);
  const targetBuffer = Buffer.from(ADMIN_PASSWORD);
  if (inputBuffer.length !== targetBuffer.length) return false;
  return crypto.timingSafeEqual(inputBuffer, targetBuffer);
}

export function createSessionToken(): string {
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(`admin:${timestamp}`)
    .digest("hex");
  return `${timestamp}.${signature}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [timestamp, signature] = parts;
  
  // Expiry check (7 days)
  const age = Date.now() - parseInt(timestamp, 10);
  if (isNaN(age) || age > 7 * 24 * 60 * 60 * 1000) return false;

  const expectedSignature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(`admin:${timestamp}`)
    .digest("hex");

  const sigBuffer = Buffer.from(signature);
  const expBuffer = Buffer.from(expectedSignature);
  if (sigBuffer.length !== expBuffer.length) return false;
  return crypto.timingSafeEqual(sigBuffer, expBuffer);
}

export async function isAuthenticated(
  tokenOrCookieStore?: string | { get(name: string): { value?: string } | undefined }
): Promise<boolean> {
  if (typeof tokenOrCookieStore === "string") {
    return verifySessionToken(tokenOrCookieStore);
  }
  if (tokenOrCookieStore && typeof tokenOrCookieStore.get === "function") {
    const token = tokenOrCookieStore.get(COOKIE_NAME)?.value;
    return verifySessionToken(token);
  }
  try {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    return verifySessionToken(token);
  } catch {
    return false;
  }
}

