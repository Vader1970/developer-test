"use client";

// Import React and necessary hooks
import React, { useEffect, useState, useMemo } from "react";
// Import axios for making API requests
import axios from "axios";

// Define interfaces for User and Post objects
interface User {
  id: number;
  username: string;
  email: string;
  company: {
    name: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  // Define states for storing user data, post data, and error message
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null); // State for error message

  // Use useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    // Define fetchData function to fetch data asynchronously
    const fetchData = async () => {
      try {
        // Use Promise.all to fetch user and post data concurrently
        const [usersResponse, postsResponse] = await Promise.all([
          axios.get<User[]>("https://jsonplaceholder.typicode.com/users"),
          axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts"),
        ]);
        // Set fetched user and post data to corresponding states
        setUsers(usersResponse.data);
        setPosts(postsResponse.data);
      } catch (error) {
        // Set error message if data fetching fails
        setError("Error fetching data. Please try again later."); // Set error message
      }
    };

    // Call fetchData function when component mounts
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Memoize function to filter posts by user ID to prevent unnecessary recalculations
  const getUserPosts = useMemo(() => {
    return (userId: number) => posts.filter((post) => post.userId === userId);
  }, [posts]); // Recalculates only when the 'posts' state changes

  // Component to render a row of user data
  const UserRow = ({ user }: { user: User }) => (
    <tr key={user.id}>
      <td className='border px-4 py-2' rowSpan={getUserPosts(user.id).length + 1}>
        {user.username}
      </td>
      <td className='border px-4 py-2' rowSpan={getUserPosts(user.id).length + 1}>
        {user.email}
      </td>
      <td className='border px-4 py-2' rowSpan={getUserPosts(user.id).length + 1}>
        {user.company.name}
      </td>
    </tr>
  );

  // Component to render a row of post data
  const PostRow = ({ post }: { post: Post }) => (
    <tr key={post.id}>
      <td className='border px-4 py-2'>{post.title}</td>
      <td className='border px-4 py-2'>{post.body}</td>
    </tr>
  );

  return (
    <main>
      <div className='container mx-auto'>
        {/* Render error message if there's an error, otherwise render the table */}
        <h1 className='text-3xl font-semibold text-center my-8'>User Posts</h1>
        {error ? ( // Conditional rendering based on the presence of error
          <div className='text-red-500 text-center'>{error}</div> // Render error message otherwise render table if no errors
        ) : (
          <table className='w-full'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Username</th>
                <th className='px-4 py-2'>Email</th>
                <th className='px-4 py-2'>Company</th>
                <th className='px-4 py-2'>Post Title</th>
                <th className='px-4 py-2'>Post Contents</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                // Use Fragment to avoid unnecessary divs
                <React.Fragment key={user.id}>
                  {/* Render UserRow component */}
                  <UserRow user={user} />
                  {getUserPosts(user.id).map(
                    (
                      post // Map over user's posts and render PostRow component
                    ) => (
                      <PostRow key={post.id} post={post} /> // Use unique key for each PostRow
                    )
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default Home;
