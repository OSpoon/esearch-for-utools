import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import { clearLabel } from './utils/index'

interface Result {
  title: string | undefined | null
  description: string | undefined | null
  url: string | undefined | null
}

async function request(requestUrl: string) {
  return (await fetch(requestUrl)).text()
}

async function parse(html: string) {
  return new JSDOM(html).window.document
}

async function npm(document: Document) {
  const sections = document.querySelectorAll('section')
  const result: Array<Result> = []

  sections.forEach((section) => {
    const title = section.querySelector('div > div > a')?.textContent
    const description = section.querySelector('div > p')?.textContent
    const url = (section.querySelector('div > div > a') as HTMLAnchorElement)?.href
    result.push({
      title,
      description,
      url: `https://www.npmjs.com${url}`,
    })
  })
  return result
}

async function gitee(document: Document) {
  const sections = document.querySelectorAll('#hits-list > .item')
  const result: Array<Result> = []

  sections.forEach((section) => {
    const title = section.querySelector('a')?.textContent?.trim()
    const description = section.querySelector('.desc span')?.textContent
    const url = section.querySelector('a')?.href
    result.push({
      title,
      description,
      url,
    })
  })
  return result
}

async function juejin(document: { data: any }) {
  const sections = document.data || []
  const result: Array<Result> = []

  sections.forEach((section: { title_highlight: any; content_highlight: any; result_model: { article_id: any } }) => {
    const title = clearLabel(section.title_highlight)
    const description = clearLabel(section.content_highlight)
    const url = `https://juejin.cn/post/${section.result_model.article_id}`
    result.push({
      title,
      description,
      url,
    })
  })
  return result
}

async function linuxcool(document: Document) {
  const title = document.querySelector('.page-title')?.textContent
  return [
    {
      title,
      description: document.querySelector('.entry-content p:nth-child(1)')?.textContent,
      url: `https://www.linuxcool.com/${title?.split('命令')[0]}`,
    },
  ]
}

async function mozilla(document: any) {
  const sections = document.documents || []
  const result: Array<Result> = []

  sections.forEach((section: { title: any; summary: any; mdn_url: any }) => {
    const { title, summary: description, mdn_url } = section
    result.push({
      title,
      description,
      url: `https://developer.mozilla.org${mdn_url}`,
    })
  })
  return result
}

async function adapter(url: string, document: Document | any) {
  switch (url) {
    case 'www.npmjs.com':
      return await npm(document)
    case 'search.gitee.com':
      return await gitee(document)
    case 'api.juejin.cn':
      return await juejin(document)
    case 'www.linuxcool.com':
      return await linuxcool(document)
    case 'developer.mozilla.org':
      return await mozilla(document)
  }
}

export async function query(url: string, options = { api: false }) {
  const { api } = options
  const content = await request(url)
  let result
  if (!api)
    result = await parse(content)

  const host = new URL(url).host
  return await adapter(host, result || content)
}
