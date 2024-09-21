import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, CREATE_POST } from './apollo/queries';
import type { GetPostsResponse, CreatePostVariables, CreatePostResponse } from './apollo/types';
import { useState } from 'react';

const App: React.FC = () => {
  const { loading, error, data } = useQuery<GetPostsResponse>(GET_POSTS);
  const [createPost] = useMutation<CreatePostResponse, CreatePostVariables>(CREATE_POST);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleCreatePost = async () => {
    if (title && content) {
      try {
        await createPost({
          variables: { title, content },
          refetchQueries: [{ query: GET_POSTS }],
        });
        setTitle('');
        setContent('');
      } catch (err) {
        console.error("Error creating post:", err);
      }
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div>
        <div>
          <h1 className='font-bold'>Posts</h1>
          {data?.getPosts.map((post) => (
            <div key={post.id} className='mt-3'>
              <h2 className='font-bold'>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
        <div className='mt-10'>
          <h2 className='font-bold'>Create a New Post</h2>
          <input
            type="text"
            className='border p-2 mr-4'
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className='border p-2 mr-4'
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type='button' onClick={handleCreatePost}>Create Post</button>
        </div>
      </div>
    </div>
  );
};

export default App;
