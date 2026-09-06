const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ||
  (import.meta.env.VITE_FORMSPREE_ID
    ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
    : '');

export async function submitToFormspree(payload) {
  if (!FORMSPREE_ENDPOINT) {
    console.warn(
      '[Formspree] VITE_FORMSPREE_ENDPOINT is not configured — form data was not sent anywhere.',
    );
    return { ok: true, demo: true };
  }

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Formspree submission failed (${res.status})`);
  }

  return res.json();
}