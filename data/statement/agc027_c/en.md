Score : $900$ points

## Problem Statement

You are given an undirected graph consisting of $N$ vertices and $M$ edges.
The vertices are numbered $1$ to $N$, and the edges are numbered $1$ to $M$.
In addition, each vertex has a label, `A` or `B`. The label of Vertex $i$ is $s_i$.
Edge $i$ bidirectionally connects vertex $a_i$ and $b_i$.

The phantom thief Nusook likes to choose some vertex as the startpoint and traverse an edge zero or more times.
Today, he will make a string after traveling as above, by placing the labels of the visited vertices in the order visited, beginning from the startpoint.

For example, in a graph where Vertex $1$ has the label `A` and Vertex $2$ has the label `B`, if Nusook travels along the path $1 \rightarrow 2 \rightarrow 1 \rightarrow 2 \rightarrow 2$, the resulting string is `ABABB`.

Determine if Nusook can make all strings consisting of `A` and `B`.

## Constraints

- $2 \leq N \leq 2 \times 10^{5}$
- $1 \leq M \leq 2 \times 10^{5}$
- $|s| = N$
- $s_i$ is `A` or `B`.
- $1 \leq a_i, b_i \leq N$
- The given graph may NOT be simple or connected.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $s$
> 
> $a_1$ $b_1$
> 
> $:$
> 
> $a_{M}$ $b_{M}$

## Output

If Nusook can make all strings consisting of `A` and `B`, print `Yes`; otherwise, print `No`.

```input1
2 3
AB
1 1
1 2
2 2
```

```output1
Yes
```

- Since Nusook can visit Vertex $1$ and Vertex $2$ in any way he likes, he can make all strings consisting of `A` and `B`.

![77e96cf8e213d606ddd8f3c3f8315d32.png](https://img.atcoder.jp/agc027/77e96cf8e213d606ddd8f3c3f8315d32.png)

```input2
4 3
ABAB
1 2
2 3
3 1
```

```output2
No
```

- For example, Nusook cannot make `BB`.
- The given graph may not be connected.

![1ab1411cb9d6ee023d14ca4e77c4b584.png](https://img.atcoder.jp/agc027/1ab1411cb9d6ee023d14ca4e77c4b584.png)

```input3
13 23
ABAAAABBBBAAB
7 1
10 6
1 11
2 10
2 8
2 11
11 12
8 3
7 12
11 2
13 13
11 9
4 1
9 7
9 6
8 13
8 6
4 10
8 7
4 3
2 1
8 12
6 9
```

```output3
Yes
```

```input4
13 17
BBABBBAABABBA
7 1
7 9
11 12
3 9
11 9
2 1
11 5
12 11
10 8
1 11
1 8
7 7
9 10
8 8
8 12
6 2
13 11
```

```output4
No
```