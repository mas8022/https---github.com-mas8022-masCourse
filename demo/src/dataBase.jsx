const courses = [
    {courseName: 'html', masterName: 'mohammad Akbari', price: 60, primaryPrice: 90, studentCount: 1004, satisPercntCourse: 76, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif'}, 
    {courseName: 'javascript', masterName: 'amin saidi rad', price: 70, primaryPrice: 96, studentCount: 1204, satisPercntCourse: 87, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg'},
    {courseName: 'react', masterName: 'hossein abbaszadeh', price: 80, primaryPrice: 87, studentCount: 2004, satisPercntCourse: 90, courseImage: 'https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png'},
    {courseName: 'node js', masterName: 'Ali ghasemi', price: 100, primaryPrice: 124, studentCount: 304, satisPercntCourse: 68, courseImage: 'https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png'},
    {courseName: 'html', masterName: 'mohammad Akbari', price: 60, primaryPrice: 90, studentCount: 1004, satisPercntCourse: 76, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif'}, 
    {courseName: 'javascript', masterName: 'amin saidi rad', price: 70, primaryPrice: 96, studentCount: 1204, satisPercntCourse: 87, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg'},
    {courseName: 'react', masterName: 'hossein abbaszadeh', price: 80, primaryPrice: 87, studentCount: 2004, satisPercntCourse: 90, courseImage: 'https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png'},
    {courseName: 'node js', masterName: 'Ali ghasemi', price: 100, primaryPrice: 124, studentCount: 304, satisPercntCourse: 68, courseImage: 'https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png'},
    {courseName: 'html', masterName: 'mohammad Akbari', price: 60, primaryPrice: 90, studentCount: 1004, satisPercntCourse: 76, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif'}, 
    {courseName: 'javascript', masterName: 'amin saidi rad', price: 70, primaryPrice: 96, studentCount: 1204, satisPercntCourse: 87, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg'},
    {courseName: 'react', masterName: 'hossein abbaszadeh', price: 80, primaryPrice: 87, studentCount: 2004, satisPercntCourse: 90, courseImage: 'https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png'},
    {courseName: 'node js', masterName: 'Ali ghasemi', price: 100, primaryPrice: 124, studentCount: 304, satisPercntCourse: 68, courseImage: 'https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png'},
    {courseName: 'html', masterName: 'mohammad Akbari', price: 60, primaryPrice: 90, studentCount: 1004, satisPercntCourse: 76, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif'}, 
    {courseName: 'javascript', masterName: 'amin saidi rad', price: 70, primaryPrice: 96, studentCount: 1204, satisPercntCourse: 87, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg'},
    {courseName: 'react', masterName: 'hossein abbaszadeh', price: 80, primaryPrice: 87, studentCount: 2004, satisPercntCourse: 90, courseImage: 'https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png'},
    {courseName: 'node js', masterName: 'Ali ghasemi', price: 100, primaryPrice: 124, studentCount: 304, satisPercntCourse: 68, courseImage: 'https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png'},
    {courseName: 'html', masterName: 'mohammad Akbari', price: 60, primaryPrice: 90, studentCount: 1004, satisPercntCourse: 76, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif'}, 
    {courseName: 'javascript', masterName: 'amin saidi rad', price: 70, primaryPrice: 96, studentCount: 1204, satisPercntCourse: 87, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg'},
    {courseName: 'react', masterName: 'hossein abbaszadeh', price: 80, primaryPrice: 87, studentCount: 2004, satisPercntCourse: 90, courseImage: 'https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png'},
    {courseName: 'node js', masterName: 'Ali ghasemi', price: 100, primaryPrice: 124, studentCount: 304, satisPercntCourse: 68, courseImage: 'https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png'},
    {courseName: 'html', masterName: 'mohammad Akbari', price: 60, primaryPrice: 90, studentCount: 1004, satisPercntCourse: 76, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif'}, 
    {courseName: 'javascript', masterName: 'amin saidi rad', price: 70, primaryPrice: 96, studentCount: 1204, satisPercntCourse: 87, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg'},
    {courseName: 'react', masterName: 'hossein abbaszadeh', price: 80, primaryPrice: 87, studentCount: 2004, satisPercntCourse: 90, courseImage: 'https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png'},
    {courseName: 'node js', masterName: 'Ali ghasemi', price: 100, primaryPrice: 124, studentCount: 304, satisPercntCourse: 68, courseImage: 'https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png'},
    {courseName: 'html', masterName: 'mohammad Akbari', price: 60, primaryPrice: 90, studentCount: 1004, satisPercntCourse: 76, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif'}, 
    {courseName: 'javascript', masterName: 'amin saidi rad', price: 70, primaryPrice: 96, studentCount: 1204, satisPercntCourse: 87, courseImage: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/08074331/2-Year-Degree-Courses-After-12th.jpg'},
    {courseName: 'react', masterName: 'hossein abbaszadeh', price: 80, primaryPrice: 87, studentCount: 2004, satisPercntCourse: 90, courseImage: 'https://www.guitare-tabs.com/wp-content/uploads/2023/12/Short-Term-Courses-after-12th.png'},
    {courseName: 'node js', masterName: 'Ali ghasemi', price: 100, primaryPrice: 124, studentCount: 304, satisPercntCourse: 68, courseImage: 'https://discoverblog.s3.ap-south-1.amazonaws.com/discover/wp-content/uploads/2023/05/25193355/Blog-post-62.png'},
]

export default courses;