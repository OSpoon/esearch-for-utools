export function clearLabel(content: string) {
  return content.replace(/[<em></em>]/g, '')
}
