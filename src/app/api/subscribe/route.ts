export async function POST(request: Request) {
  const res = await request.json();

  const url = "https://api.brevo.com/v3/contacts";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API || "",
    },
    body: JSON.stringify({ email: res.email, listIds: [3] }),
  };

  const response = await fetch(url, options).then((res) => res.json());

  return new Response(response);
}
