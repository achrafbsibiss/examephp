// Import React and other necessary packages
import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

// Define the Home component
const Home = () => {
  // Access the posts data from the page props
  const { posts } = usePage().props;

  return (
    <div>
      <h1>Posts</h1>

      {/* Display a list of posts */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>

      {/* Create a link to the create post page */}
      <InertiaLink href="/posts/create">Create Post</InertiaLink>
    </div>
  );
};

// Export the Home component
export default Home;
