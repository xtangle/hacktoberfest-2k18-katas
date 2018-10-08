function Node() {
    this.data = null,
    this.visited = false,
    this.root = false,
    this.north = null,
    this.east = null,
    this.south = null,
    this.west = null
}

export const wordSearch = (board, word) => {

    let nodeList = []
    
    let newBoard = [].concat.apply([], board); // flatten the 2D board
    newBoard.forEach( character => {
        let n = new Node();
        n.data = character;
        nodeList.push(n);
    });

    for(let index = 1; index <= nodeList.length; index++){
        // north = index - 5 (if starting at index = 1)
        if(index - 4 > 0){ nodeList[index-1].north = nodeList[index - 5]; }
        // east = index (if starting at index = 1)
        if(index % 4 != 0){ nodeList[index-1].east = nodeList[index]; }
        // south = index + 3 (if starting at index = 1)
        if(index + 4 <= nodeList.length){ nodeList[index-1].south = nodeList[index + 3]; } 
        // west = index - 2 (if starting at index = 1)
        if((index - 1) % 4 != 0) { nodeList[index-1].west = nodeList[index - 2]; }
    }

    let startingLocations = [] // index locations in the board of the first character of 'word'

    for(let i = 0; i < nodeList.length; i++){
        if(nodeList[i].data == word[0]) startingLocations.push(i);
    }

    let index = 0;
    let builtWord = [];

    // a recursive breadth-first-search type function to find out if the given word exists
    function bfs(node, previousNode) {
        if(node==null) return
        if(node.visited) return
        if(node.data != word[index]) return
        if(previousNode.data != word[index-1] && previousNode.data != '') { builtWord.pop(); index--; }
        
        builtWord.push(node.data)
        index++;
        node.visited = true

        bfs(node.north, node)
        bfs(node.east, node)
        bfs(node.south, node)
        bfs(node.west, node)
        
    }

    let matchFound = false;
    startingLocations.forEach( location => {

        index = 0;
        builtWord = [];
        nodeList.forEach( (node,index) => { 
            node.visited = false;
            if (index == location) node.root = true;
            else node.root = false;
        });
        bfs(nodeList[location], {data:''})
        let builtWordString = [].concat.apply([], builtWord).join('');
        if(word == builtWordString) matchFound = true;

    });
    
    return matchFound
};