// import React from "react";

// const CourseDetailsCart = () => {
//   const freeCourse = {
//     classCourse: "freeCourse",
//     img: "https://i.ibb.co/By9KmF7/free-Course.png",
//     title: "Free English course",
//     state: "unread",
//     ShortDescription:
//       "Learn both written and spoken English for getting ahead in professional spheres. An all inclusive course of effective English communication for professionals.",
//     instructorImg: "https://i.ibb.co/By9KmF7/free-Course.png",
//     instructorName: "Munzereen Shahid",
//     education:
//       "MS (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5",
//     objective: {
//       point1:
//         "Necessary spoken English skills for job interviews, presentations, local and foreign client meetings, conversations with colleagues.",
//       point2:
//         "Cover letter/ resume writing to apply for jobs and email/ report writing in English.",
//       point3:
//         "Speaking English using the right words and the correct pronunciation in the office, hangouts with colleagues, and in meetings.",
//     },
//     about:
//       "We have all studied English for years to ace our academic or job-related tests. Similarly, being able to properly speak and write in English is a crucial skill for our career. In job interviews, a candidate is often judged on their English communication skills. The performance of newly recruited employees are also measured on their ability to communicate properly in English. To help you with English communication to ace your interviews to perform well in the job, 10 Minute School has brought to you the “English for Professionals” course.",
//     syllabus: {
//       free: {
//         title: "Resume, Cover Letter, LinkedIn",
//         point1: "Resume Writing",
//         point2: "Cover Letter Writing",
//         point3: "LinkedIn Profile Setup",
//       },
//       email: {
//         title: "Email Writing",
//         point1: "Email basic Writing",
//         point2: "Meeting Calling Template",
//         point3: "Cold email send",
//       },
//       monologues: {
//         title: "How to Speak English",
//         point1: "How to give introduction",
//         point2: "How to give presentation",
//         point3: "How to promot your office",
//       },
//     },
//     video: "https://i.ibb.co/By9KmF7/free-Course.png",
//     promoCode: "bk5283",
//     price: 100,
//     Enrolled: 25,
//     hours: 6,
//     videos: 6,
//     quizzes: 7,
//     notes: 9,
//     transcripts: 10,
//   };

//   const {
//     title,
//     img,
//     ShortDescription,
//     objective,
//     instructorImg,
//     instructorName,
//     education,
//     about,
//     syllabus,
//     price,
//     Enrolled,
//     hours,
//     videos,
//     quizzes,
//     notes,
//     transcripts,
//   } = freeCourse;

//   return (
//     <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12 py-12">
//       <div>
//         <h1 className="text-3xl text-violet-800 mb-4">{title}</h1>
//         <p>{ShortDescription}</p>

//         <div className="py-8">
//           <h1 className="text-2xl text-violet-700 mb-4">Instructor</h1>
//           <div className="flex border-2 rounded-xl p-6">
//             <div className="avatar mr-8">
//               <div className="w-20 rounded-full">
//                 <img src={instructorImg} />
//               </div>
//             </div>
//             <div>
//               <h2 className="text-xl text-violet-700">{instructorName}</h2>
//               <h3>{education}</h3>
//             </div>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl text-violet-700 mb-4">
//             What you will learn from this course
//           </h1>
//           <div className="border-2 rounded-xl">
//             <div className="p-6">
//               <p>
//                 <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>
//                 {objective.point1}
//               </p>
//               <p>
//                 <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
//                 {objective.point2}
//               </p>
//               <p>
//                 {" "}
//                 <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>
//                 {objective.point3}
//               </p>
//             </div>

//             <hr />

//             <div className="p-6">
//               <h1 className="text-xl text-violet-700 mb-4">
//                 About This Course
//               </h1>
//               <p>{about}</p>
//             </div>
//           </div>
//         </div>

//         <div className="py-6">
//           <h1 className="text-2xl text-violet-700 mb-4">Course Syllabus</h1>
//           <div className="border-2 rounded-xl p-6">
//             <div
//               tabIndex="0"
//               className="collapse collapse-arrow  bg-base-100 rounded-box"
//             >
//               <div className="collapse-title text-xl font-medium hover:text-violet-800">
//                 {syllabus.free.title}
//               </div>
//               <div className="collapse-content">
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.free.point1}
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.free.point2}
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.free.point3}
//                 </p>
//               </div>
//             </div>
//             <hr />
//             <div
//               tabIndex="0"
//               className="collapse collapse-arrow  bg-base-100 rounded-box"
//             >
//               <div className="collapse-title text-xl font-medium hover:text-violet-800">
//                 {syllabus.email.title}
//               </div>
//               <div className="collapse-content">
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.email.point1}
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.email.point2}
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.email.point3}
//                 </p>
//               </div>
//             </div>
//             <hr />
//             <div
//               tabIndex="0"
//               className="collapse collapse-arrow  bg-base-100 rounded-box"
//             >
//               <div className="collapse-title text-xl font-medium hover:text-violet-800">
//                 {syllabus.monologues.title}
//               </div>
//               <div className="collapse-content">
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.monologues.point1}
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.monologues.point2}
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i>{" "}
//                   {syllabus.monologues.point3}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className="border-2 rounded-xl">
//           <img className="w-full rounded-xl" src={img} alt="" />
//           <div className="p-8">
//             <div className="flex justify-between">
//               <a className="text-violet-700" href="/">
//                 <u>Promo Code</u>
//               </a>
//               <p className="text-xl font-bold">$ {price}</p>
//             </div>

//             <button className="btn bg-violet-800 w-full my-4">Buy the Course</button>
//             <div className="flex justify-between py-6">
//               <div className="flex items-center">
//                 <div>
//                   <i className="text-violet-900 mr-4 font-bold text-3xl fa-solid fa-users"></i>
//                 </div>
//                 <div>
//                   <p>Enrolled</p>
//                   <p>{Enrolled} Learners</p>
//                 </div>
// <<<<<<< HEAD
//               </div>
//               <div className="flex items-center">
//                 <div>
//                   <i className="text-violet-900 mr-4 font-bold text-3xl fa-solid fa-clock"></i>
// =======

//                 <div className='py-6'>
//                     <h1 className='text-2xl text-violet-700 mb-4'>Course Syllabus</h1>
//                     <div className='border-2 rounded-xl p-6'>
//                         <div tabIndex="0" className="collapse collapse-arrow  bg-base-100 rounded-box">
//                             <div className="collapse-title text-xl font-medium hover:text-violet-800">
//                                 {syllabus.free?.title}
//                             </div>
//                             <div className="collapse-content">
//                                 <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.free.point1}</p>
//                                 <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.free.point2}</p>
//                                 <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.free.point3}</p>
//                             </div>
//                         </div>
//                         <hr />
//                         <div tabIndex="0" className="collapse collapse-arrow  bg-base-100 rounded-box">
//                             <div className="collapse-title text-xl font-medium hover:text-violet-800">
//                             {syllabus.email.title}
//                             </div>
//                             <div className="collapse-content">
//                             <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.email.point1}</p>
//                                 <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.email.point2}</p>
//                                 <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.email.point3}</p>
//                             </div>
//                         </div>
//                         <hr />
//                         <div tabIndex="0" className="collapse collapse-arrow  bg-base-100 rounded-box">
//                             <div className="collapse-title text-xl font-medium hover:text-violet-800">
//                             {syllabus.monologues.title}
//                             </div>
//                             <div className="collapse-content">
//                             <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.monologues.point1}</p>
//                                 <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.monologues.point2}</p>
//                                 <p><i className="text-violet-900 mr-2 font-bold text-xl fa-solid fa-circle-play"></i> {syllabus.monologues.point3}</p>
//                             </div>
//                         </div>

//                     </div>

// >>>>>>> 909d2a256fbbd159dfee425034215c541855763b
//                 </div>
//                 <div>
//                   <p>Hours Required</p>
//                   <p>{hours} Hours</p>
//                 </div>
//               </div>
//             </div>
//             <hr />

//             <div className="flex justify-between py-6">
//               <div>
//                 <p>
//                   <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
//                   {videos} Videos
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
//                   {notes} Notes
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
//                   {quizzes} Sets of Quizzes
//                 </p>
//                 <p>
//                   <i className="text-violet-900 mr-4 font-bold text-xl fa-solid fa-angles-right"></i>{" "}
//                   {transcripts} Transcripts
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailsCart;
