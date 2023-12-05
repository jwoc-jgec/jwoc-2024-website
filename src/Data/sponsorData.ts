import diamond from '../assets/img/diamond.png'
import gold from '../assets/img/gold.png'
import silver from '../assets/img/silver.png'
import learning from '../assets/img/learning.png'
import community from '../assets/img/community.png'
import { community_partners } from "@/Data/communityData";
import quine from '../assets/sponsors_logo/quine.svg'
import xyz from '../assets/sponsors_logo/xyz.svg'
import axure from '../assets/sponsors_logo/axure.svg'
import jetbrains from '../assets/sponsors_logo/jetbrains.svg'
import lwt from '../assets/sponsors_logo/lwt.png'
import interviewbuddy from '../assets/sponsors_logo/interviewbuddy.png'
import gdg from '../assets/sponsors_logo/gdg_siliguri.png'
import taskade from '../assets/sponsors_logo/taskade.svg'

// export const sponsors = [
//     {
//         "levels": {
//             "1": {
//                 imagefilename: diamond,
//                 name: "Diamond Sponsor"
//             },
//             "2": {
//                 imagefilename: gold,
//                 name: "Gold Sponsors"
//             },
//             "3": {
//                 imagefilename: silver,
//                 name: "Silver Sponsor"
//             },
//             "4": {
//                 imagefilename: community,
//                 name: "Community Partner"
//             },
//             "5": {
//                 // imagefilename: "assets/images/spon/certificate.png",
//                 imagefilename:null,
//                 name: "Certificate Partner"
//             },
//             "6": {
//                 // imagefilename: "assets/images/spon/learning.png",
//                 imagefilename:null,
//                 name: "Media Partner"
//             }, 
//             "7": {
//                 imagefilename: learning,
//                 name: "Learning Partner"
//             }
//         },
//         "sponsors": [

//             {
//                 name: "GDSC SXCCAL",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://linktr.ee/gdscsxccal",
//                 "type": 4
//             },
//             {
//                 name: "GDSC BBIT",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/budge-budge-institute-of-technology-kolkata/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC CU",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": " https://gdsc.community.dev/university-of-calcutta-kolkata/",
//                 "type": 4
//             },
//             {
//                 name: "IACS ACM Student Chapter",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://www.linkedin.com/company/iacs-acm-student-chapter/",
//                 "type": 4
//             },
//             {
//                 name: "Befikra Community",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://www.befikracommunity.in/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC NITDGP",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/national-institute-of-technology-nit-durgapur/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC CITK",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://linktr.ee/gdsccitk",
//                 "type": 4
//             },
//             {
//                 name: "Codess Cafe",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://codess.cafe/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC GCETTB",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/government-college-of-engineering-textile-technology/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC CGEC",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/cooch-behar-government-engineering-college-cooch-behar/",
//                 "type": 4
//             },
//             {
//                 name: "Noob Code",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://noobcode-website.vercel.app/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC MAKAUT",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://linktr.ee/gdscmakaut",
//                 "type": 4
//             },
//             {
//                 name: "GDSC IITK",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/indian-institute-of-technology-iit-kanpur/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC LPU",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/lovely-professional-university-jalandhar/",
//                 "type": 4
//             },
//             {
//                 name: "TFUG Jalandhar",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://tfugjalandhar.dev/",
//                 "type": 4
//             },
//             {
//                 name: "CNCG Jalandhar",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://community.cncf.io/cloud-native-jalandhar/",
//                 "type": 4
//             },
//             {
//                 name: "The GNU/Linux Users' Group, NIT Durgapur",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://nitdgplug.org/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC IIEST",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/indian-institute-of-engineering-science-and-technology-shibpur-howrah/",
//                 "type": 4
//             },
//             {
//                 name: "CodeIIEST",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://www.linkedin.com/company/codeiiest-iiest/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC IEM",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://gdsc.community.dev/institute-of-engineering-management-kolkata/",
//                 "type": 4
//             },
//             {
//                 name: "OS Dev community",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://www.linkedin.com/company/os-community/",
//                 "type": 4
//             },
//             {
//                 name: "GDSC JU",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://linktr.ee/gdscju2023",
//                 "type": 4
//             },
//             {
//                 name: "GDSC Aliah",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://linktr.ee/gdscaliah",
//                 "type": 4
//             },
//             {
//                 name: "Developers Community",
//                 "logo": "assets/images/sponsors/gdsckgec.png",
//                 "url": "https://www.linkedin.com/company/developerscommunity/",
//                 "type": 4
//             }
    
//         ]
//     }
// ]



export const sponsorsData = [
    {
      tier: 'Diamond Sponsor',
      tierimg:diamond,
      data: [
        {
        //   id: 1,
          name: "Quine",
          link: "https://quine.sh/",
          imagefilename: quine
        },
      ],
    },
    {
      tier: 'Gold Sponsor',
      tierimg:gold,
      data: [
        {
        //   id: 2,
          name: "Interviewbuddy",
          link: "https://interviewbuddy.in/",
          imagefilename: interviewbuddy,
        },
        {
        //   id: 3,
          name: "GDG Siliguri",
          link: "https://gdgsiliguri.com/",
          imagefilename: gdg,
        },
      ],
    },
    {
      tier: 'Silver Sponsor',
      tierimg:silver,
      data: [
        {
        //   id: 4,
          name: "Axure",
          link: "https://portal.axure.com/",
          imagefilename: axure,
        },
        {
            // id:5,
            name: "Taskade",
            link: "https://www.taskade.com/",
            imagefilename: taskade,
        },
        {
            // id:6,
            name: ".xyz",
            link: "https://gen.xyz/",
            imagefilename: xyz
        },
        {
            // id:7,
            name: "Jetbrains",
            link: "https://www.jetbrains.com",
            imagefilename: jetbrains
        },
      ],
    },
    {
        tier: 'Learning Partner',
        tierimg:learning,
        data: [
          {
          //   id: 8,
            name: "Learning while Travelling",
            link: "https://learningwhiletravelling.com/",
            imagefilename: lwt,
          },
          
        ],
      },
    {
      tier: 'Community Partner',
      tierimg:community,
      data: community_partners
    },
    
  ];
  