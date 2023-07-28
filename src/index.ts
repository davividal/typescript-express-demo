import { app } from "./server.js";
import { port } from "./config.js";

try {
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
} catch (err) {
  throw err;
}


try {
  
} catch (error) {
  throw error;
  
}