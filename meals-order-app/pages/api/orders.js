export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body)
  } else {
    res.json({ metodo: "GET!!" });
  }
}
