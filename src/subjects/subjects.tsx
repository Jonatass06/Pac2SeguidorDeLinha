export const subjects: Subject[] = [
    {
        "id":"componentes",
        "title": "Componentes",
        "image": <div className="size-64 bg-blue-500"/>,
        "content": [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac ex condimentum, tristique justo vel, tincidunt odio. Nulla id quam facilisis ante sagittis interdum maximus nec augue. Quisque suscipit metus nulla, a lobortis quam blandit viverra. Nullam congue, enim eget laoreet blandit, augue diam sodales ex, tincidunt volutpat lorem nunc quis ante. Sed aliquet orci et ipsum pharetra mollis. Aliquam vel erat vitae est pretium imperdiet. Nam quis risus ornare, iaculis augue non, hendrerit neque. Etiam tortor mi, suscipit id nunc in, auctor euismod erat. In non ante vitae nisl elementum euismod`,
            <></>,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac ex condimentum, tristique justo vel, tincidunt odio. Nulla id quam facilisis ante sagittis interdum maximus nec augue. Quisque suscipit metus nulla, a lobortis quam blandit viverra. Nullam congue, enim eget laoreet blandit, augue diam sodales ex, tincidunt volutpat lorem nunc quis ante. Sed aliquet orci et ipsum pharetra mollis. Aliquam vel erat vitae est pretium imperdiet. Nam quis risus ornare, iaculis augue non, hendrerit neque. Etiam tortor mi, suscipit id nunc in, auctor euismod erat. In non ante vitae nisl elementum euismod`
        ],
        subtitles: [
            {
                "id":"",
                "title": "Componentes sUBTITULO",
                "image": <></>,
                "content": [
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac ex condimentum, tristique justo vel, tincidunt odio. Nulla id quam facilisis ante sagittis interdum maximus nec augue. Quisque suscipit metus nulla, a lobortis quam blandit viverra. Nullam congue, enim eget laoreet blandit, augue diam sodales ex, tincidunt volutpat lorem nunc quis ante. Sed aliquet orci et ipsum pharetra mollis. Aliquam vel erat vitae est pretium imperdiet. Nam quis risus ornare, iaculis augue non, hendrerit neque. Etiam tortor mi, suscipit id nunc in, auctor euismod erat. In non ante vitae nisl elementum euismod`,
                    <></>,
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac ex condimentum, tristique justo vel, tincidunt odio. Nulla id quam facilisis ante sagittis interdum maximus nec augue. Quisque suscipit metus nulla, a lobortis quam blandit viverra. Nullam congue, enim eget laoreet blandit, augue diam sodales ex, tincidunt volutpat lorem nunc quis ante. Sed aliquet orci et ipsum pharetra mollis. Aliquam vel erat vitae est pretium imperdiet. Nam quis risus ornare, iaculis augue non, hendrerit neque. Etiam tortor mi, suscipit id nunc in, auctor euismod erat. In non ante vitae nisl elementum euismod`
                ],
            }
        ]
    }
]

export interface Subject {
    id:string,
    title: string,
    image: React.ReactNode,
    content: (string | React.ReactNode)[]
    subtitles?: Subject[]
}