const courses = [
  {
    courseName: "html",
    masterName: "mohammad Akbari",
    price: 60,
    primaryPrice: 90,
    studentCount: 1004,
    satisPercntCourse: 76,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif",
    courseDescribe:
      "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).",
    url: "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns=",
  },
  {
    courseName: "javascript",
    masterName: "amin saidi rad",
    price: 70,
    primaryPrice: 96,
    studentCount: 1204,
    satisPercntCourse: 87,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg",
    courseDescribe:
      "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    url: "https://media.istockphoto.com/id/1486884751/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-javascript.mp4?s=mp4-640x640-is&k=20&c=cfuF3MmIYn6Ks5J6kdBErNWjO7hI-4HEWdavPkjAxiU=",
  },
  {
    courseName: "css",
    masterName: "hossein abbaszadeh",
    price: 80,
    primaryPrice: 87,
    studentCount: 2004,
    satisPercntCourse: 90,
    courseImage:
      "https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png",
    courseDescribe:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]",
    url: "https://media.istockphoto.com/id/1486884354/fr/vid%C3%A9o/animation-3d-du-shield-technologique-web-css3.mp4?s=mp4-640x640-is&k=20&c=3e4Obc8hn_SO4c4IA2h4KfwCiiWa-BomffRqofGOqcQ=",
  },
  {
    courseName: "python",
    masterName: "Ali ghasemi",
    price: 100,
    primaryPrice: 124,
    studentCount: 304,
    satisPercntCourse: 68,
    courseImage:
      "https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png",
    courseDescribe:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    url: "https://media.istockphoto.com/id/1438989699/fr/vid%C3%A9o/animation-de-texte-bleu-du-langage-de-programmation-python.mp4?s=mp4-640x640-is&k=20&c=AVxEFyenivbKVPKiYM5yIqFK4x-EZBDO39jiG9iuk8M=",
  },
  {
    courseName: "html",
    masterName: "mohammad Akbari",
    price: 60,
    primaryPrice: 90,
    studentCount: 1004,
    satisPercntCourse: 76,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif",
    courseDescribe:
      "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).",
    url: "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns=",
  },
  {
    courseName: "javascript",
    masterName: "amin saidi rad",
    price: 70,
    primaryPrice: 96,
    studentCount: 1204,
    satisPercntCourse: 87,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg",
    courseDescribe:
      "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    url: "https://media.istockphoto.com/id/1486884751/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-javascript.mp4?s=mp4-640x640-is&k=20&c=cfuF3MmIYn6Ks5J6kdBErNWjO7hI-4HEWdavPkjAxiU=",
  },
  {
    courseName: "css",
    masterName: "hossein abbaszadeh",
    price: 80,
    primaryPrice: 87,
    studentCount: 2004,
    satisPercntCourse: 90,
    courseImage:
      "https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png",
    courseDescribe:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]",
    url: "https://media.istockphoto.com/id/1486884354/fr/vid%C3%A9o/animation-3d-du-shield-technologique-web-css3.mp4?s=mp4-640x640-is&k=20&c=3e4Obc8hn_SO4c4IA2h4KfwCiiWa-BomffRqofGOqcQ=",
  },
  {
    courseName: "python",
    masterName: "Ali ghasemi",
    price: 100,
    primaryPrice: 124,
    studentCount: 304,
    satisPercntCourse: 68,
    courseImage:
      "https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png",
    courseDescribe:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    url: "https://media.istockphoto.com/id/1438989699/fr/vid%C3%A9o/animation-de-texte-bleu-du-langage-de-programmation-python.mp4?s=mp4-640x640-is&k=20&c=AVxEFyenivbKVPKiYM5yIqFK4x-EZBDO39jiG9iuk8M=",
  },
  {
    courseName: "html",
    masterName: "mohammad Akbari",
    price: 60,
    primaryPrice: 90,
    studentCount: 1004,
    satisPercntCourse: 76,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif",
    courseDescribe:
      "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).",
    url: "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns=",
  },
  {
    courseName: "javascript",
    masterName: "amin saidi rad",
    price: 70,
    primaryPrice: 96,
    studentCount: 1204,
    satisPercntCourse: 87,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg",
    courseDescribe:
      "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    url: "https://media.istockphoto.com/id/1486884751/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-javascript.mp4?s=mp4-640x640-is&k=20&c=cfuF3MmIYn6Ks5J6kdBErNWjO7hI-4HEWdavPkjAxiU=",
  },
  {
    courseName: "css",
    masterName: "hossein abbaszadeh",
    price: 80,
    primaryPrice: 87,
    studentCount: 2004,
    satisPercntCourse: 90,
    courseImage:
      "https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png",
    courseDescribe:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]",
    url: "https://media.istockphoto.com/id/1486884354/fr/vid%C3%A9o/animation-3d-du-shield-technologique-web-css3.mp4?s=mp4-640x640-is&k=20&c=3e4Obc8hn_SO4c4IA2h4KfwCiiWa-BomffRqofGOqcQ=",
  },
  {
    courseName: "python",
    masterName: "Ali ghasemi",
    price: 100,
    primaryPrice: 124,
    studentCount: 304,
    satisPercntCourse: 68,
    courseImage:
      "https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png",
    courseDescribe:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    url: "https://media.istockphoto.com/id/1438989699/fr/vid%C3%A9o/animation-de-texte-bleu-du-langage-de-programmation-python.mp4?s=mp4-640x640-is&k=20&c=AVxEFyenivbKVPKiYM5yIqFK4x-EZBDO39jiG9iuk8M=",
  },
  {
    courseName: "html",
    masterName: "mohammad Akbari",
    price: 60,
    primaryPrice: 90,
    studentCount: 1004,
    satisPercntCourse: 76,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif",
    courseDescribe:
      "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).",
    url: "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns=",
  },
  {
    courseName: "javascript",
    masterName: "amin saidi rad",
    price: 70,
    primaryPrice: 96,
    studentCount: 1204,
    satisPercntCourse: 87,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg",
    courseDescribe:
      "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    url: "https://media.istockphoto.com/id/1486884751/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-javascript.mp4?s=mp4-640x640-is&k=20&c=cfuF3MmIYn6Ks5J6kdBErNWjO7hI-4HEWdavPkjAxiU=",
  },
  {
    courseName: "css",
    masterName: "hossein abbaszadeh",
    price: 80,
    primaryPrice: 87,
    studentCount: 2004,
    satisPercntCourse: 90,
    courseImage:
      "https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png",
    courseDescribe:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]",
    url: "https://media.istockphoto.com/id/1486884354/fr/vid%C3%A9o/animation-3d-du-shield-technologique-web-css3.mp4?s=mp4-640x640-is&k=20&c=3e4Obc8hn_SO4c4IA2h4KfwCiiWa-BomffRqofGOqcQ=",
  },
  {
    courseName: "python",
    masterName: "Ali ghasemi",
    price: 100,
    primaryPrice: 124,
    studentCount: 304,
    satisPercntCourse: 68,
    courseImage:
      "https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png",
    courseDescribe:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    url: "https://media.istockphoto.com/id/1438989699/fr/vid%C3%A9o/animation-de-texte-bleu-du-langage-de-programmation-python.mp4?s=mp4-640x640-is&k=20&c=AVxEFyenivbKVPKiYM5yIqFK4x-EZBDO39jiG9iuk8M=",
  },
  {
    courseName: "html",
    masterName: "mohammad Akbari",
    price: 60,
    primaryPrice: 90,
    studentCount: 1004,
    satisPercntCourse: 76,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif",
    courseDescribe:
      "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).",
    url: "https://media.istockphoto.com/id/1486884503/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-html5.mp4?s=mp4-640x640-is&k=20&c=7xF84YP-NJ3zQDy06kUMF1b7-s0F_4GNwIEGHszX_Ns=",
  },
  {
    courseName: "javascript",
    masterName: "amin saidi rad",
    price: 70,
    primaryPrice: 96,
    studentCount: 1204,
    satisPercntCourse: 87,
    courseImage:
      "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg",
    courseDescribe:
      "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
    url: "https://media.istockphoto.com/id/1486884751/fr/vid%C3%A9o/animation-3d-de-la-technologie-web-shield-javascript.mp4?s=mp4-640x640-is&k=20&c=cfuF3MmIYn6Ks5J6kdBErNWjO7hI-4HEWdavPkjAxiU=",
  },
  {
    courseName: "css",
    masterName: "hossein abbaszadeh",
    price: 80,
    primaryPrice: 87,
    studentCount: 2004,
    satisPercntCourse: 90,
    courseImage:
      "https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png",
    courseDescribe:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]",
    url: "https://media.istockphoto.com/id/1486884354/fr/vid%C3%A9o/animation-3d-du-shield-technologique-web-css3.mp4?s=mp4-640x640-is&k=20&c=3e4Obc8hn_SO4c4IA2h4KfwCiiWa-BomffRqofGOqcQ=",
  },
  {
    courseName: "python",
    masterName: "Ali ghasemi",
    price: 100,
    primaryPrice: 124,
    studentCount: 304,
    satisPercntCourse: 68,
    courseImage:
      "https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png",
    courseDescribe:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    url: "https://media.istockphoto.com/id/1438989699/fr/vid%C3%A9o/animation-de-texte-bleu-du-langage-de-programmation-python.mp4?s=mp4-640x640-is&k=20&c=AVxEFyenivbKVPKiYM5yIqFK4x-EZBDO39jiG9iuk8M=",
  },
];

export default courses;
