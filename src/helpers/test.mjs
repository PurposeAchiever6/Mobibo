import sanityClient from "./client.mjs";

const query = `*[_type == "blog"]{
  title,
  type,
  blockContent,
  publication_time,
  image,
  caption,
  description
}`;
sanityClient.fetch(query)
  .then((data) => {
    // Add an id to each item in the data array
    const dataWithIds = data.map((item, index) => ({
      ...item,
      id: index + 1, // Start id from 1
    }));
    console.log(dataWithIds); // Now each item has an id
  })
  .catch((err) => console.error(err));