import useSWR from 'swr'

export const getDbPosts = () => {
  //const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_DEVTO_API_URL}/articles?username=${process.env.NEXT_PUBLIC_DEVTO_USERNAME}`, getDevtoPosts);
  const { data, error } = useSWR(`https://dev.to/api/articles?username=kasuken`, getDevtoPosts);

  return {
    dbPosts: data?.dbPosts,
    isLoading: !error && !data,
    isError: error
  }
}

export const getDevtoPosts = async () => {
  //const res = await fetch(`${process.env.NEXT_PUBLIC_DEVTO_API_URL}/articles?username=${process.env.NEXT_PUBLIC_DEVTO_USERNAME}`);
  const res = await fetch(`https://dev.to/api/articles?username=kasuken`);

  if (res.status < 200 || res.status >= 300) {
    throw new Error(
      `Error fetching... Status code: ${res.status}, ${res.statusText}`
    )
  }
  return await res.json();
}