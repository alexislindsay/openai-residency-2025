import { getAllPostIds, getPostData } from '../../lib/posts'
import { remark } from 'remark'
import html from 'remark-html'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug)
  const processedContent = await remark().use(html).process(postData.content)
  const contentHtml = processedContent.toString()
  return {
    props: {
      postData: {
        ...postData,
        contentHtml
      }
    }
  }
}

export default function Post({ postData }) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-6">{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}
