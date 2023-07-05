import {v4 as uuid} from "uuid";

export const posts = [
    {
        id: 1,
        postType: "text",
        user: {
            id: 2,
            fullname: "Vidovik Rouse",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
        date: "Wed, 26 January 2021",
        text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
        photo: [
            "https://images.unsplash.com/photo-1685997495434-c1f533fa1161?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3NzU3Mw&ixlib=rb-4.0.3&q=80&w=1920",
            "https://images.unsplash.com/photo-1685633225097-10c8f8e6e889?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3ODUwNA&ixlib=rb-4.0.3&q=80&w=1920",
            "https://images.unsplash.com/photo-1685633225097-10c8f8e6e889?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3ODUwNA&ixlib=rb-4.0.3&q=80&w=1920",
        ],
        comments: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
                text: "Looking like a good comment",
            },
            {
                id: uuid(),
                user: {
                    id: 1,
                    fullname: "Neelesh Chaudhary",
                    city: "New York",
                    avatar:
                        "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
                },
                text: ";)",
            },
            {
                id: uuid(),
                user: {
                    id: 1,
                    fullname: "Neelesh Chaudhary",
                    city: "New York",
                    avatar:
                        "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
                },
                text: "ganstaa....",
            },
        ],
        liked: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
            {
                id: uuid(),
                user: {
                    id: 3,
                    fullname: "Lexa Stenli",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
        ],
    },
    {
        id: 2,
        postType: "text",
        user: {
            id: 3,
            fullname: "Lexa Stenli",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
        date: "Wed, 26 January 2021",
        text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
        photo: [
            "https://images.unsplash.com/photo-1683644967556-df0ea52ff347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjE5MDV8&ixlib=rb-4.0.3&q=80&w=1080",
        ],
        comments: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
                text: "Looking like a good comment",
            },
        ],
        liked: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
        ],
    },
    {
        id: 3,
        postType: "video",
        videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        user: {
            id: 2,
            fullname: "Vidovik Rouse",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
        date: "Wed, 26 January 2021",
        text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
        comments: [],
        liked: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
        ],
    },
    {
        id: 4,
        postType: "text",
        user: {
            id: 2,
            fullname: "Vidovik Rouse",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
        date: "Wed, 26 January 2021",
        text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
        photo: [
            "https://images.unsplash.com/photo-1687131046576-eab27a5e48da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjE5NDh8&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1687193913065-a1c4aa6a0b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjE5NTh8&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1687263150247-17b649fd04e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjE5NzN8&ixlib=rb-4.0.3&q=80&w=1080",
        ],
        comments: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
                text: "Looking like a good comment",
            },
        ],
        liked: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
        ],
    },
    {
        id: 5,
        postType: "video",
        videoUrl:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        user: {
            id: 2,
            fullname: "Vidovik Rouse",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
        date: "Wed, 26 January 2021",
        text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
        comments: [],
        liked: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
        ],
    },
    {
        id: 6,
        postType: "text",
        user: {
            id: 2,
            fullname: "Vidovik Rouse",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
        date: "Wed, 26 January 2021",
        text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
        photo: [
            "https://images.unsplash.com/photo-1687365413705-80c4ece0398d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjIzMDR8&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1686425039285-0efb29d14c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjIzMjN8&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1686577184205-6d4b36cde0d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjIzMzd8&ixlib=rb-4.0.3&q=80&w=1080",
        ],
        comments: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
                text: "Looking like a good comment",
            },
        ],
        liked: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
        ],
    },
    {
        id: 7,
        postType: "text",
        user: {
            id: 2,
            fullname: "Vidovik Rouse",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
        date: "Wed, 26 January 2021",
        text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
        photo: [
            "https://images.unsplash.com/photo-1666968815164-26ba7f5fb705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjIzOTZ8&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1686563873984-9ee2048d1c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjI0MTd8&ixlib=rb-4.0.3&q=80&w=1080",
            "https://images.unsplash.com/photo-1686598997804-71e849721105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxODY2Nzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgyMjI0Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
        ],
        comments: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
                text: "Looking like a good comment",
            },
        ],
        liked: [
            {
                id: uuid(),
                user: {
                    id: 2,
                    fullname: "Vidovik Rouse",
                    city: "Banī Khaddāsh",
                    avatar:
                        "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
                },
            },
        ],
    },
];

export const authUser = {
    user: {
        id: 1,
        avatar:
            "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
        nickname: "nkchaudhary01",
        fullname: "Neelesh Chaudhary",
        job: "Wildlife Photographer",
        city: "New York",
        description:
            "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end.",
        links: [
            {
                id: uuid(),
                title: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
                link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
            },
        ],
    },
    posts: [
        {
            id: 1,
            postType: "text",
            user: {
                id: 1,
                fullname: "Neelesh Chaudhary",
                city: "New York",
                country: "Tunisia",
                avatar:
                    "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
            },
            date: "Wed, 26 January 2021",
            text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
            photo: [
                "https://images.unsplash.com/photo-1685997495434-c1f533fa1161?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3NzU3Mw&ixlib=rb-4.0.3&q=80&w=1920",
                "https://images.unsplash.com/photo-1685633225097-10c8f8e6e889?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3ODUwNA&ixlib=rb-4.0.3&q=80&w=1920",
                "https://images.unsplash.com/photo-1685633225097-10c8f8e6e889?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3ODUwNA&ixlib=rb-4.0.3&q=80&w=1920",
            ],
            comments: [],
            liked: [],
        },
        {
            id: 2,
            postType: "text",
            user: {
                id: 1,
                fullname: "Neelesh Chaudhary",
                city: "New York",
                country: "Tunisia",
                avatar:
                    "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
            },
            date: "Wed, 26 January 2021",
            text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
            photo: [
                "https://images.unsplash.com/photo-1685997495434-c1f533fa1161?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3NzU3Mw&ixlib=rb-4.0.3&q=80&w=1920",
                "https://images.unsplash.com/photo-1685633225097-10c8f8e6e889?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3ODUwNA&ixlib=rb-4.0.3&q=80&w=1920",
                "https://images.unsplash.com/photo-1685633225097-10c8f8e6e889?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODI3ODUwNA&ixlib=rb-4.0.3&q=80&w=1920",
            ],
            comments: [],
            liked: [],
        },
    ],
    stories: [
        {
            image: "https://robohash.org/nisiomnisquo.png?size=50x50&set=set1",
            id: uuid(),
            title: "Brother",
        },
        {
            image: "https://robohash.org/enimcumadipisci.png?size=50x50&set=set1",
            id: uuid(),
            title: "Robo",
        },
        {
            image:
                "https://robohash.org/placeatcumquefacilis.png?size=50x50&set=set1",
            id: uuid(),
            title: "RoboShit",
        },
        {
            image:
                "https://robohash.org/officiatemporadolorem.png?size=50x50&set=set1",
            id: uuid(),
            title: "Paris",
        },
    ],
    saved: [],
    liked: [],
};

export const allDbUsers = [
    {
        user: {
            id: 1,
            fullname: "Neelesh Chaudhary",
            city: "New York",
            avatar:
                "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
        },
    },
    {
        user: {
            id: 2,
            fullname: "Vidovik Rouse",
            city: "Banī Khaddāsh",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
    },
    {
        user: {
            id: 3,
            fullname: "Lexa Stenli",
            city: "Banī Khaddāsh",
            country: "Tunisia",
            avatar:
                "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
        },
    },
];
