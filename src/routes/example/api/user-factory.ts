import { queryOptions } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const userQuery = queryOptions({
  queryFn: fetchUsers,
  queryKey: ["users"],
  staleTime: 5000,
});

const userQueries = {
  all: () => userQuery,
} as const;

export { userQueries };
