import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const VisaInfoData =[
    {
        title: 'Overview',
        path: '/overview',
        // icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
    {
        title: 'Documents',
        path: '/document',
        // icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Passport',
                path: '/documents/passport',
                // icon: <AiIcons.IoIosPaper/>,
            },
            {
                title: 'Proof of Acceptance by DLI',
                path: '/documents/Proof',
                // icon: <AiIcons.IoIosPaper/>,
            },
            {
                title: 'Proof of Funds',
                path: '/documents/ProofOfFunds',
               
            },
            {
                title: 'Passport Size Photographs',
                path: '/documents/passportPhoto',
               
            },
            {
                title: 'English Language Proficiency',
                path: '/documents/IELTS',
               
            },
            {
                title: 'Statement of Purpose',
                path: '/documents/SOP',
                
            },
            {
                title: 'Credit Card',
                path: '/documents/CreditCard',
              
            }
        ]
    }
]

