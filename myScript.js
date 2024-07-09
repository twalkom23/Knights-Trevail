

function knightsTrevail (start, end) {
    //h
    const moves = [[2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2]];

    const visited = new Set();
    const queue = [[start, [start]]];
    console.log(queue);
    
  
    
    while(queue.length) {
        const [square, path] = queue.shift();
        
        if (square[0] == end[0] && square[1] == end[1]) {
            console.log(path);
            return path;
        }

        for (const [mx, my] of moves) {
            const possibleX = square[0] + mx;
            const possibleY = square[1] + my; 

            const newPosition = [possibleX, possibleY];

            if (isValidPosition(possibleX, possibleY) == true && !visited.has(newPosition.toString())) {
                visited.add(newPosition.toString());
                queue.push([newPosition, [...path, newPosition]]); 
               
            }
        }


    }
    return null;

}

function isValidPosition (x, y) {
    if (x >= 0 && y >= 0 && x < 8 && y < 8) {
        return true;
    } else {
        return false;
    }
}

knightsTrevail([3, 3], [7, 3]);


