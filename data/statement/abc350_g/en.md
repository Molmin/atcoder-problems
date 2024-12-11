Score: $600$ points

## Problem Statement

**Beware the special input format and the smaller memory limit than usual.**

There is an undirected graph with vertices $1, 2, \dots, N$, initially without edges.<br>
You need to process the following $Q$ queries on this graph:

<br>

```plain
1 $u$ $v$
```

Type $1$: Add an edge between vertices $u$ and $v$.<br>
Before adding the edge, $u$ and $v$ belong to different connected components (i.e., the graph always remains a forest).

<br>

```plain
2 $u$ $v$
```

Type $2$: If there is a vertex adjacent to both $u$ and $v$, report its vertex number; otherwise, report $0$.<br>
Given that the graph always remains a forest, the answer to this query is uniquely determined.

<br>

The queries are given in an encrypted form.<br>
The original query is defined by three integers $A, B, C$, and the encrypted query is given as three integers $a, b, c$.<br>
Let $X_k$ be the answer to the $k$-th type-$2$ query. Define $X_k = 0$ for $k = 0$.<br>
Restore $A, B, C$ from the given $a, b, c$ as follows:

- Let $l$ be the number of type-$2$ queries given before this query (not counting the query itself). Then, use the following:-   - $A = 1 + (((a \times (1+X_l)) \mod 998244353) \mod 2)$
-   - $B = 1 + (((b \times (1+X_l)) \mod 998244353) \mod N)$
-   - $C = 1 + (((c \times (1+X_l)) \mod 998244353) \mod N)$

## Constraints

- All input values are integers.
- $2 \le N \le 10^5$
- $1 \le Q \le 10^5$
- $1 \le u &lt; v \le N$
- $0 \le a,b,c &lt; 998244353$

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $\rm{Query}$$_1$
> 
> $\rm{Query}$$_2$
> 
> $\vdots$
> 
> $\rm{Query}$$_Q$

## Output

Let $k$ be the number of type-$2$ queries. Print $k$ lines.<br>
The $i$-th line should contain the answer to the $i$-th type-$2$ query.

```input1
6 12
143209915 123840720 97293110
89822758 207184717 689046893
67757230 270920641 26993265
952858464 221010240 871605818
730183361 147726243 445163345
963432357 295317852 195433903
120904472 106195318 615645575
817920568 27584394 770578609
38727673 250957656 506822697
139174867 566158852 412971999
205467538 606353836 855642999
159292205 319166257 51234344
```

```output1
0
2
0
2
6
0
1
```

After decrypting all queries, the input is as follows:

```output1
6 12
2 1 3
1 2 6
1 2 4
1 1 3
2 4 6
2 1 4
1 5 6
1 1 2
2 1 4
2 2 5
2 3 4
2 2 3
```

This input has a $6$-vertex graph and $12$ queries.

- The first query is `2 1 3`.-   - No vertex is adjacent to both vertex $1$ and vertex $3$, so report $0$.
- The second query is `1 2 6`.-   - Add an edge between vertices $2$ and $6$.
- The third query is `1 2 4`.-   - Add an edge between vertices $2$ and $4$.
- The fourth query is `1 1 3`.-   - Add an edge between vertices $1$ and $3$.
- The fifth query is `2 4 6`.-   - The vertex adjacent to both vertices $4$ and $6$ is vertex $2$.
- The sixth query is `2 1 4`.-   - No vertex is adjacent to both vertices $1$ and $4$, so report $0$.
- The seventh query is `1 5 6`.-   - Add an edge between vertices $5$ and $6$.
- The eighth query is `1 1 2`.-   - Add an edge between vertices $1$ and $2$.
- The ninth query is `2 1 4`.-   - The vertex adjacent to both vertices $1$ and $4$ is vertex $2$.
- The tenth query is `2 2 5`.-   - The vertex adjacent to both vertices $2$ and $5$ is vertex $6$.
- The eleventh query is `2 3 4`.-   - No vertex is adjacent to both vertices $3$ and $4$, so report $0$.
- The twelfth query is `2 2 3`.-   - The vertex adjacent to both vertices $2$ and $3$ is vertex $1$.

```input2
2 1
377373366 41280240 33617925
```

```output2

```

The output may be empty.