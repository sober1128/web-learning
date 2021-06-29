/*

BFS(G, s)    // graph G and source node s
    create a queue Q 

    Q.enqueue(s) 
    mark s as visited.

    while (Q is non-empty)
       
        v = Q.dequeue()

        // process all the neighbours of v  
        for all neighbours w of v in Graph G
            if w is not visited 
                Q.enqueue(w)     // enqueue w to further visit its neighbour
                mark w as visited.

*/