Score : $700$ points

## Problem Statement

Ringo has an undirected graph $G$ with $N$ vertices numbered $1,2,...,N$ and $M$ edges numbered $1,2,...,M$.
Edge $i$ connects Vertex $a_{i}$ and $b_{i}$ and has a length of $w_i$.

Now, he is in the middle of painting these $N$ vertices in $K$ colors numbered $1,2,...,K$. Vertex $i$ is already painted in Color $c_i$, except when $c_i = 0$, in which case Vertex $i$ is not yet painted.

After he paints each vertex that is not yet painted in one of the $K$ colors, he will give $G$ to Snuke.

Based on $G$, Snuke will make another undirected graph $G'$ with $K$ vertices numbered $1,2,...,K$ and $M$ edges.
Initially, there is no edge in $G'$. The $i$-th edge will be added as follows:

- Let $x$ and $y$ be the colors of the two vertices connected by Edge $i$ in $G$.
- Add an edge of length $w_i$ connecting Vertex $x$ and $y$ in $G'$.

What is the minimum possible sum of the lengths of the edges in the minimum spanning tree of $G'$? If $G'$ will not be connected regardless of how Ringo paints the vertices, print $-1$.

## Constraints

- $1 \leq N,M \leq 10^{5}$
- $1 \leq K \leq N$
- $0 \leq c_i \leq K$
- $1 \leq a_i,b_i \leq N$
- $1 \leq w_i \leq 10^{9}$
- The given graph may NOT be simple or connected.
- All input values are integers.

## Partial Scores

- In the test set worth $100$ points, $N = K$ and $c_i = i$.
- In the test set worth another $100$ points, $c_i \neq 0$.
- In the test set worth another $200$ points, $c_i = 0$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $c_1$ $c_2$ $...$ $c_{N}$
> 
> $a_1$ $b_1$ $w_1$
> 
> $:$
> 
> $a_M$ $b_M$ $w_M$

## Output

Print the answer.

```input1
4 3 3
1 0 1 2
1 2 10
2 3 20
2 4 50
```

```output1
60
```

$G'$ will only be connected when Vertex $2$ is painted in Color $3$.

```input2
5 2 4
0 0 0 0 0
1 2 10
2 3 10
```

```output2
-1
```

Regardless of how Ringo paints the vertices, two edges is not enough to connect four vertices as one.

```input3
9 12 9
1 2 3 4 5 6 7 8 9
6 9 9
8 9 6
6 7 85
9 5 545631016
2 1 321545
1 6 33562944
7 3 84946329
9 7 15926167
4 7 53386480
5 8 70476
4 6 4549
4 8 8
```

```output3
118901402
```

```input4
18 37 12
5 0 4 10 8 7 2 10 6 0 9 12 12 11 11 11 0 1
17 1 1
11 16 7575
11 15 9
10 10 289938980
5 10 17376
18 4 1866625
8 11 959154208
18 13 200
16 13 2
2 7 982223
12 12 9331
13 12 8861390
14 13 743
2 10 162440
2 4 981849
7 9 1
14 17 2800
2 7 7225452
3 7 85
5 17 4
2 13 1
10 3 45
1 15 973
14 7 56553306
16 17 70476
7 18 9
9 13 27911
18 14 7788322
11 11 8925
9 13 654295
2 10 9
10 1 545631016
3 4 5
17 12 1929
2 11 57
1 5 4
1 17 7807368
```

```output4
171
```