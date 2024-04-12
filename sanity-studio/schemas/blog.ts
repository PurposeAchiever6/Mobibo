import { defineField, defineType } from 'sanity'

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
      name: 'type',
      title: 'Type',
      description: 'Select one or more types for this blog post.',
      type: 'array',
      of: [{
        type: 'string',
        options: {
          list: [
            { title: 'LED Billboards', value: 'led-billboards' },
            { title: 'Drone Advertising', value: 'drone-advertising' },
            { title: 'Digital Backpacks', value: 'digital-backpacks' },
            { title: 'Pedicabs', value: 'pedicabs' }
          ],
          layout: 'checkbox' // Specifies that the options should be presented as checkboxes
        }
      }],
      validation: Rule => Rule.required('You must select at least one type.').min(1, 'You must select at least one type.'),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
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
