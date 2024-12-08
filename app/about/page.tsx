//import db from '@/utils/db';

const AboutPage = () => {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        We love
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-background'>
          store
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
        distinctio ducimus temporibus nobis autem laboriosam repellat, magni
        fugiat minima excepturi neque, tenetur possimus nihil atque! Culpa nulla
        labore nam?
      </p>
    </section>
  );
};
// #region prisma test
// const AboutPage = async () => {
//   const nr = await db.testProfile.count();
//   const profile = await db.testProfile.create({
//     data: {
//       name: `test${nr}`,
//     },
//   });
//   const users = await db.testProfile.findMany();
//   console.log(users);
//   return (
//     <div>AboutPage</div>
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };
// #endregion
export default AboutPage;
