export async function postExperience(data: {
  companyName: string;
  position: string;
  from: string;
  to: string;
  description: string;
  category: 'fulltime' | 'freelance' | 'project';
}) {
  const res = await fetch(`https://api.backendless.com/${process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID}/${process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY}/data/experiences`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error('Failed to post experience');
  }

  return res.json();
}