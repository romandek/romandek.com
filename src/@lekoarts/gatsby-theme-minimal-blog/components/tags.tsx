/** @jsx jsx */
import { jsx, Link as TLink, Heading } from "theme-ui"
import { Box, Flex } from "@theme-ui/components"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <SEO title="Tags" />
      <Heading variant="styles.h1" sx={{ mt: 0 }}>Tags</Heading>
      <Box mt={[4, 5]}>
        {list.map((listItem) => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <TLink
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2 }}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
            >
              {listItem.fieldValue} <span sx={{ color: `tertiary` }}>({listItem.totalCount})</span>
            </TLink>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Tags
