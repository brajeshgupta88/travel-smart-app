import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const requestText = body.request;

  // Call TravelSmart API
//  const apiRes = await fetch(`${process.env.TRAVELSMART_BASE_URL}/travel-plan`, {
    const apiRes = await fetch("http://localhost:8080/api/travel-plan", {  
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    //  "Authorization": `Bearer ${process.env.API_KEY}`
    },
    body: JSON.stringify({ request: requestText })
  });

  const data = await apiRes.json();

  return NextResponse.json(data);
}
