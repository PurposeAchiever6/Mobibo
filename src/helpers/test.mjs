import sanityClient from "./client.mjs";

const query = `*[_type == "blog"]{
  title,
  text,
  publication_time,
  image,
  caption,
  description
}`;
sanityClient.fetch(query)
.then((data) => {console.log(data)})
.catch((err) => []);