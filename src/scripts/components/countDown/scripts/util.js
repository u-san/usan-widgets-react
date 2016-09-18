export function leftpad(str, len, ch) {
  str = String(str)
  ch = String(ch)

  if(str.length >= len) return str
  if(!ch && ch != 0) ch = ' '

  return leftpad(ch + str, len, ch)
}