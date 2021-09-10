import { NewMeetupForm } from "../../components/meetups";

export const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData) => {};
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
