import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {id: 'm1', title: 'Primeiro meetup', image: 'https://www.decorfacil.com/wp-content/uploads/2016/11/20161109exterior-1-990x600.jpg', address: 'address bubble', description: 'Salve bobao'},
  {id: 'm2', title: 'Segundo meetup', image: 'https://www.decorfacil.com/wp-content/uploads/2016/11/20161109exterior-1-990x600.jpg', address: 'address bubble', description: 'Salve bobao'},
  {id: 'm3', title: 'Terceiro meetup', image: 'https://www.decorfacil.com/wp-content/uploads/2016/11/20161109exterior-1-990x600.jpg', address: 'address bubble', description: 'Salve bobao'},
]

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

  export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    console.log(req, res)
    return {
      props: {
        meetups: DUMMY_MEETUPS
      }
    };
  };

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 1
//   };
// };


export default HomePage;