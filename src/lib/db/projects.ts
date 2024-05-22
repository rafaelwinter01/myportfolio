import { ProjectModel } from "@/models/Project";
import { connect } from "@/lib/db/connect";

export async function getProjects() {
  try {
    await connect();
    const projects = await ProjectModel.find({}).sort([["priority", 1]]);
    return Response.json(projects);
  } catch (err) {
    console.log(err);
    // @ts-ignore
    return Response.status(500);
  }
}
