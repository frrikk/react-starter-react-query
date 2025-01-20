import { Suspense } from "react";
import { ExampleUser } from "@/types";

type ExamplePageProps = {
  users: ExampleUser[];
};

/**
 * This component is responsible for rendering the page with its content
 * @component The component is in charge of rendering the UI that needs the data. It receives the data as props and can pass the data
 * props down to other components that may rely on it. The most normal thing is to not pass data further down than the page component.
 * */

const ExamplePage = ({ users }: ExamplePageProps) => {
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </Suspense>
    </div>
  );
};

export default ExamplePage;
