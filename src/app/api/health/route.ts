import { healthReport } from "@/lib/project";

export async function GET() {
  return Response.json(healthReport());
}
