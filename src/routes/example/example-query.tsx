import { useSuspenseQuery } from "@tanstack/react-query";
import { userQueries } from "@/routes/example/api/user-factory";
import ExamplePage from "@/routes/example/example-page";

/**
 * ExampleQuery
 *
 * This component is responsible for data fetching and passing necessary data down as props to the page component.
 *
 * @component
 * @returns The rendered ExamplePage component with fetched user data.
 *
 * @see {@link https://tanstack.com/query/latest/docs/react/overview | React Query Documentation}
 *
 * @description
 * This component utilizes the `useSuspenseQuery` hook from `@tanstack/react-query` to fetch user data.
 * The `useSuspenseQuery` hook ensures the data is never null. When the data is loading, a Suspense boundary
 * should show a fallback UI until the data is ready to be displayed.
 */

const ExampleQuery = () => {
  const { data: users } = useSuspenseQuery(userQueries.all());

  return <ExamplePage users={users} />;
};

export { ExampleQuery };
