let servicePath = "";

const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  servicePath = "";
} else {
  servicePath = "http://localhost:3000";
}
export default servicePath;
