import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'publication_time',
      title: 'Publication time',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
