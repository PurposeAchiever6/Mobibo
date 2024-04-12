import sanityClient from "./client.mjs";

export const getBlog = async (tab) => {
  const query = `*[_type == "blog"]{
    title,
    type,
    text,
    publication_time,
    image,
    caption,
    description
  }`;

  async function filterDataByType(data, tab) {
    return data.filter(item => item.type.includes(tab));
  }

  let dataWithIds = [{
    description: 'Description',
    title: 'Title',
    type: ['drone-advertising', ''],
    text: 'Text',
    publication_time: '2024-04-02',
    image: { _type: 'image', asset: [Object] },
    caption: 'Caption',
    id: 2
  }
  ]
  const data = await sanityClient.fetch(query);
  // .then((data) => {
  //   // Add an id to each item in the data array
  dataWithIds = data.map((item, index) => ({
    ...item,
    id: index + 1, // Start id from 1
  }));
  //   console.log("dataWithIds", dataWithIds);
  // })
  // .catch();
  const filterData = await filterDataByType(dataWithIds, tab);
  
  console.log("filterData", filterData);
  return filterData;
}