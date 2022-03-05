import useSWR from 'swr'

// const API_URL = `${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPO}/pulls?state=all`

const getData = async () => {
  const res = await fetch(`${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPO}/pulls?state=all`)
  return res.json()
}

export const fetchPRsData = () => {
  const { data, error, mutate } = useSWR(`${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPO}/pulls?state=all`, getData)
  return {
    prData: data,
    isLoading: !error && !data,
    isError: error,
  }
}
