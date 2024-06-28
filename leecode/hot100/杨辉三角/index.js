/***
 * @author chunhuile@gamil.com
 * @time 2024.06.28
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    //排除特殊情况 
    if (!numRows) return [];

    const list = [];

    for (let i = 0; i<numRows; i++ ) {

        const row = new Array(i+
        1).fill(0);
        // 指定首尾为1
        row[0] = 1;
        row[i] = 1;
        
        for (let j = 1; j < i; j++ ) {

            row[j]= list[i-1][j-1]+list[i-1][j]
        }

        list.push(row);

    }

    return list;

};