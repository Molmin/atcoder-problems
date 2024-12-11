Score : $300$ points

## Problem Statement

Mikan's birthday is coming soon. Since Mikan likes graphs very much, Aroma decided to give her a undirected graph this year too. 

Aroma bought a connected undirected graph, which consists of $n$ vertices and $n$ edges. 
The vertices are numbered from 1 to n and for each $i$$(1 \leq i \leq n)$, vertex $i$ and vartex $a_i$ are connected with an undirected edge. 
Aroma thinks it is not interesting only to give the ready-made graph and decided to paint it. 
Count the number of ways to paint the vertices of the purchased graph in $k$ colors modulo $10^9 + 7$. 
**Two ways are considered to be the same if the graph painted in one way can be identical to the graph painted in the other way by permutating the numbers of the vertices. **

    

## Constraints

- $1 \leq n \leq 10^5$
- $1 \leq k \leq 10^5$
- $1 \leq a_i \leq n$ $(1 \leq i \leq n)$
- The given graph is connected
- The given graph contains no self-loops or multiple edges.

## Input

Each data set is given in the following format from the standard input.

> $n$ $k$
> 
> $a_1$
> 
> :
> 
> $a_n$

## Output

Output the number of ways to paint the vertices of the given graph in k colors modulo $10^9 + 7$ in one line. 

```input1
4 2
2
3
1
1
```

```output1
12
```

```input2
4 4
2
3
4
1
```

```output2
55
```

```input3
10 5
2
3
4
1
1
1
2
3
3
4
```

```output3
926250
```