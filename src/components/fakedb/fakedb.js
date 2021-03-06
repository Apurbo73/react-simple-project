const channels = [
    {
        key: 'B002RL8IYK',
        name: 'Learn with Sumit Bangladesh',
        author: 'Sumit Saha',
        subscribers: ' 40K',
        videos: 261,
        date: 'Sep 20, 2010',
        price: 1000,
        image: 'https://yt3.ggpht.com/3wUoiwrTI1S4wd4vKZYFsHzuAJCVs5n_vC4O1qjDV7_AZ78bkvtWo4VfNSBi-6Co-qzOeSWHfw=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B502RL8IHK',
        name: 'Stack Learner',
        author: 'HM Nayem',
        subscribers: '63.2K',
        videos: 1190,
        date: 'June 7, 2017',
        price: 1400,
        image: 'https://yt3.ggpht.com/ytc/AKedOLSwuaBSzqvzjWlMwOL_xFqN4OnzZWrB1M4auO2QXA=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'BJ02RL89IK',
        name: 'Procoder BD',
        author: 'Ali Hossain',
        subscribers: '81.8K',
        videos: 218,
        date: 'Feb 23, 2019',
        price: 1200,
        image: 'https://yt3.ggpht.com/ytc/AKedOLQLw05tC8aIy4IzwoOlwPQlEWVPz5cLHram4RL5=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B22RL7ISS',
        name: 'Programming Hero',
        author: 'Jhankar Mahbub',
        subscribers: '229K',
        videos: 37,
        date: 'Apr 13, 2019',
        price: 1800,
        image: 'https://yt3.ggpht.com/ytc/AKedOLSpzZPSKJLnz3hmz67diUO1fjvsENBvCk8lZ2qy=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B3402RL8YYU',
        name: 'RR Foundation Bangladesh',
        author: 'Rasel Ahmed',
        subscribers: '29.9K',
        videos: 387,
        date: 'Oct 26, 2014',
        price: 1100,
        image: 'https://yt3.ggpht.com/ytc/AKedOLS4Lg5ntAweDXX9NoVD7r_-1xLDEQgz_A8LzbFJ=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B056HHIYK',
        name: 'JS Bangladesh',
        author: 'Saidur Rahman Setu',
        subscribers: '17.4K',
        videos: 133,
        date: 'Jul 18, 2011',
        price: 1150,
        image: 'https://yt3.ggpht.com/ytc/AKedOLQ-WpS9qc3cORp7iGUz8uYFHd0raksLpPVrT54K2g=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B762RL8HYK',
        name: 'Traversy Media',
        author: 'Brad Traversy',
        subscribers: '1.64M',
        videos: 891,
        date: 'Oct 31,2009',
        price: 1950,
        image: 'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B0RTEBIYK',
        name: 'Clever Programmer',
        author: 'Rafeh Qazi',
        subscribers: '1.01M',
        videos: 622,
        date: 'Mar 12, 2016',
        price: 1700,
        image: 'https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B00TERT8IYK',
        name: 'Web Dev Simplified',
        author: 'Kyle Cook',
        subscribers: '672K',
        videos: 343,
        date: 'May 24, 2018',
        price: 2100,
        image: 'https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B00TETERK',
        name: 'Dev Ed',
        author: ' Edward',
        subscribers: '692K',
        videos: 208,
        date: 'May 27, 2018',
        price: 1900,
        image: 'https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B5L8IYBBK',
        name: 'Programming with Mosh',
        author: 'Mosh Hamedani',
        subscribers: ' 2.01M',
        videos: 161,
        date: 'Oct 7, 2014',
        price: 2500,
        image: 'https://yt3.ggpht.com/ytc/AKedOLQ09D8wVCdgWoCN3IPrvVKWi48-R2QZ_yJkCmKh-A=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B5BGEIYK',
        name: 'The Net Ninja',
        author: 'Shaun Pelling',
        subscribers: '791K',
        videos: 1708,
        date: 'Apr 9, 2015',
        price: 2300,
        image: 'https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B0TFG8IYK',
        name: 'JavaScript Mastery',
        author: 'Adrian Hajdin',
        subscribers: '159K',
        videos: 57,
        date: 'Dec 15, 2018',
        price: 2000,
        image: 'https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s176-c-k-c0x00ffffff-no-rj-mo'
    },
    {
        key: 'B5RFJIYK',
        name: 'Academind',
        author: 'Maximilian',
        subscribers: ' 714K',
        videos: 619,
        date: 'Dec 4, 2015',
        price: 1900,
        image: 'https://yt3.ggpht.com/ytc/AKedOLTM6bGgJWtayEJrZHApYyJSaBqWLkMnXixAVvc85Q=s176-c-k-c0x00ffffff-no-rj-mo'
    },

    {
        key: 'B00464HSHD',
        name: 'Coding Addict',
        author: '',
        subscribers: '',
        videos: 555,
        date: ' Dec 9, 2016',
        price: 1700,
        image: 'https://yt3.ggpht.com/ytc/AKedOLSofTo9brx_8FyDQwaQIPP9-vPioDqrLVElLPhioQ=s176-c-k-c0x00ffffff-no-rj-mo'
    }
]
