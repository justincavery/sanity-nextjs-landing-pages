export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60390e13cf32ea13b3cd6c63',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q1j6vyt4',
                  apiId: '2133f0ef-c0ab-499f-99e6-3cdbf324c200'
                },
                {
                  buildHookId: '60390e1350b25bf044b9e400',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gnp8egqv',
                  apiId: '87103693-d82c-435a-aba0-880d47b8ba0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justincavery/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gnp8egqv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
