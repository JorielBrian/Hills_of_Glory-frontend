export function getAuthToken() {
  if (typeof window === 'undefined') {
    return null;
  }
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('authToken='))
    ?.split('=')[1] ?? null;
}

export function isApprovedUser(tokenPayload: any) {
  return tokenPayload?.status === 'APPROVED';
}

export function isPendingUser(tokenPayload: any) {
  return tokenPayload?.status === 'PENDING';
}

export function isRejectedUser(tokenPayload: any) {
  return tokenPayload?.status === 'REJECTED';
}
