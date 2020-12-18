const remark = require('remark')
const htmlify = require('remark-html')
const {default: remarkEmbedder} = require('@remark-embedder/core')
const {
  default: oembedTransformer,
} = require('@remark-embedder/transformer-oembed')

async function go() {
  const exampleMarkdown = `
# My favorite YouTube video

[This](https://www.youtube.com/watch?v=dQw4w9WgXcQ) is a great YouTube video.

Watch it here:

https://www.youtube.com/watch?v=dQw4w9WgXcQ

Isn't it great!?
`.trim()

  const htmlResult = await remark()
    .use(remarkEmbedder, {
      transformers: [oembedTransformer],
    })
    .use(htmlify)
    .process(exampleMarkdown)

  console.log(htmlResult.toString())
}

go()
