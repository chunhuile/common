/**
 * @author chunhuile@gmail.com
 */ 

function generatev2(numRows: number): number[][] {

    const list:number[][] = [];
        
    for (let i = 0; i < numRows ; i++ ){
    let row:number[] = new Array(i+1).fill(0);
    
    row[0] = 1;
    row[i] = 1;

    for(let j = 1; j<i;j++){

        row[j] = list[i-1][j-1] + list[i-1][j];

    }

        list.push(row)
    }

    return list
};