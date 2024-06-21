/**
 * @file 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * 
 * 示例：
 *  输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

/**
 * 理解：即返回的单词中，单词组成的字母相同 
 * 
 * 思路：
 * 1、用Map来存异位词，key为排序后的异位词，values为该异位词的list
 *  2、遍历每个单词字符串，转化为数组后排序再转回字符串，并放入map对应的异位词list中
 * 3、最终返回map中values组成的数组
 *  ps：注意字符串转数组，map.values()放入数组 可以用 [...   ]结构 
 */ 


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length <= 1)  return [strs]
 
   const map = new Map()
   
   for(let str of strs){
     let array = [...str]
     array.sort()
     let key = array.toString()
     const list = map.get(key)?map.get(key):[]
     list.push(str)
     map.set(key,list)
   }
   return [...map.values()]
 
 
 };