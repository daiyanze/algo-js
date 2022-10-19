/**
 * For searching the palindrome string, we need two pointer to move in opposite directions starting from the same position / adjacent position
 * The reason why we do this is because the palindrome string may contain odd or even numbers of characters, such as "abba" and "ababa".
 * 
 * 
 *     <-l     r->
 * a     b     b     a
 * 
 * 
 *          <-l r->
 * a     b     a     b     a
 *
 * The above is to search the palindrome beginning with a certain character position.
 * To get all palindrome substrings from a string requires an O(n) loop on the current input string.
 *
 * for (...) {
 *   searchPalindrome(inputString, leftPosition, rightPosition)
 * }
 *
 * As it's mentioned above, we need to check the panlindrome under even and odd cases. Thus, we will search under each cases and compare the length
 *
 *
 * for (...) {
 *   odd = searchPalindrome(inputString, leftPosition, rightPosition)
 *   even = searchPalindrome(inputString, leftPosition, rightPosition + 1)
 *
 *   res = Max(len(odd), len(even), len(res))
 *
 * }
 *
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  function searchPalindrome(str, left, right) {
    while (left >= 0 && right < str.length && str.charCodeAt(left) == str.charCodeAt(right)) {
      left--
      right++
    }

    return str.substring(left + 1, right)
  }

  let res = ''
  for (let i = 0; i < s.length; i++) {
    const strOddPalindrome = searchPalindrome(s, i, i)
    const strEvenPalindrome = searchPalindrome(s, i, i + 1)

    res = strOddPalindrome.length < res.length ? res : strOddPalindrome
    res = strEvenPalindrome.length < res.length ? res: strEvenPalindrome
  }

  return res
};

module.exports = {
  func: longestPalindrome,
  argTypes: [
    'String',
  ],
  returnType: 'String',
  tests: [
    [
      "babad",
    ],
    [
      "cbbd",
    ],
  ]
}

