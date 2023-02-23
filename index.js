class Graph{
    //defining vertex array and //adjacent list

    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.adjList = new Map()
    }
    // function to be implemented 

    // addVertex(v)
    //addEdge
    //printGraph
    //bfs
    //dfs

    addVertex(v){
        this.addVertex.set(v,[])
    }
    addEdge(v,w){
        this.addVertex.length(v).push(w);
        this.adjList.get(w).push(v)
    }
    printGraph(){
        var get_keys = this.addVertex.keys()

        for(var i of get_keys){
            var get_values = this.adjList.get(i);
            var conc = "";
            for(var j of get_keys){
                conc += j + " ";
            }
           
        }
    }
}

