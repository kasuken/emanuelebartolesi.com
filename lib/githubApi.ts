import useSWR from 'swr'

const getData = async () => {

  const url = `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${process.env.NEXT_PUBLIC_GITHUB_REPO}/pulls?state=all`;

  console.log(url);

  const res = await fetch(url)
  return res.json()
}

export const fetchPRsData = () => {
  const { data, error } = useSWR("posts", getData)
  return {
    prData: data,
    isLoading: !error && !data,
    isError: error,
  }
}
