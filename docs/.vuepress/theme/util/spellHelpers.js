export function displaySchoolLevel (spell) {
  let result = ''
  if (spell.level == 0) {
    result = spell.school + ', Tour de magie'
  }
  result = spell.school + ' de niveau ' + spell.level
  if (spell.ritual) {
    result = result + ' (rituel)'
  }
  return result
}
