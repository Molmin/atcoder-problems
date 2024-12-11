Score : $400$ points

## Problem Statement

We have a long piece of timber with a length of $L$ meters.<br>
For each $x = 1, 2, \dots, L - 1$, there is a mark called Mark $x$ at $x$ meters from the left end of the piece.

You are given $Q$ queries, the $i$-th of which is represented as a pair of numbers $(c_i, x_i)$.<br>
Process the queries in ascending order of $i$ as described below.

- If $c_i = 1$: cut the piece at Mark $x_i$ into two.
- If $c_i = 2$: choose the piece with Mark $x_i$ on it and print its length.

Here, for both kinds of queries $c_i = 1, 2$, it is guaranteed that there will have been no cut at Mark $x_i$ when the query is to be processed.

## Constraints

- $1 \leq L \leq 10^9$
- $1 \leq Q \leq 2 \times 10^5$
- $c_i = 1, 2$ $(1 \leq i \leq Q)$
- $1 \leq x_i \leq L - 1$ $(1 \leq i \leq Q)$
- For every $i$ $(1 \leq i \leq Q)$, the following holds: there is no $j$ such that $1 \leq j \lt i$ and $(c_j,x_j) = (1, x_i)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $L$ $Q$
> 
> $c_1$ $x_1$
> 
> $c_2$ $x_2$
> 
> $\vdots$
> 
> $c_Q$ $x_Q$

## Output

Print the number of lines equal to the number of queries $c_i = 2$.
In the $j$-th line, print the response to the $j$-th such query.

```input1
5 3
2 2
1 3
2 2
```

```output1
5
3
```

At the time of the first query, no cut has been made, so the piece with Mark $2$ has a length of $5$ meters. Thus, you should print $5$.<br>
In the second query, the piece is cut into two pieces with lengths of $3$ and $2$ meters.<br>
At the time of the third query, the piece with Mark $2$ has a length of $3$ meters, so you should print $3$.  

```input2
5 3
1 2
1 4
2 3
```

```output2
2
```

```input3
100 10
1 31
2 41
1 59
2 26
1 53
2 58
1 97
2 93
1 23
2 84
```

```output3
69
31
6
38
38
```