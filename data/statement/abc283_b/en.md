Score : $200$ points

## Problem Statement

You are given an integer $N$ and a sequence $A=(A _ 1,A _ 2,\ldots,A _ N)$ of length $N$.

Given $Q$ queries, process them in the given order.
Each query is of one of the following two kinds:

- `1 k x` : set the value $A _ k$ to $x$.
- `2 k` : print the value $A _ k$.

## Constraints

- $1 \leq N \leq 10 ^ 5$
- $1 \leq Q \leq 10 ^ 5$
- $0 \leq A _ i \leq 10 ^ 9\ (1\leq i\leq N)$
- $1\leq k\leq N$ for all queries.
- $0\leq x\leq 10 ^ 9$ for all queries of the first kind.
- There is at least one query of the second kind.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A _ 1$ $A _ 2$ $\ldots$ $A _ N$
> 
> $Q$
> 
> $\operatorname{query} _ 1$
> 
> $\operatorname{query} _ 2$
> 
> $\vdots$
> 
> $\operatorname{query} _ Q$

Here, $\operatorname{query} _ i$ denotes the $i$-th query, given in one of the following formats:

> $1$ $k$ $x$
> $2$ $k$

## Output

Print $q$ lines, where $q$ is the number of queries of the second kind.
The $j$-th $(1\leq j\leq q)$ line should contain the response to the $j$-th such query.

```input1
3
1 3 5
7
2 2
2 3
1 3 0
2 3
1 2 8
2 2
2 1
```

```output1
3
5
0
8
1
```

Initially, $A=(1,3,5)$.

- For the $1$-st query, $A=(1,3,5)$, where $A _ 2=3$, so $3$ should be printed.
- For the $2$-nd query, $A=(1,3,5)$, where $A _ 3=5$, so $5$ should be printed.
- The $3$-rd query sets the value $A _ 3$ to $0$, making $A=(1,3,0)$.
- For the $4$-th query, $A=(1,3,0)$, where $A _ 3=0$, so $0$ should be printed.
- The $5$-th query sets the value $A _ 2$ to $8$, making $A=(1,8,0)$.
- For the $6$-th query, $A=(1,8,0)$, where $A _ 2=8$, so $8$ should be printed.
- For the $7$-th query, $A=(1,8,0)$, where $A _ 1=1$, so $1$ should be printed.

```input2
5
22 2 16 7 30
10
1 4 0
1 5 0
2 2
2 3
2 4
2 5
1 4 100
1 5 100
2 3
2 4
```

```output2
2
16
0
0
16
100
```

```input3
7
478 369 466 343 541 42 165
20
2 1
1 7 729
1 6 61
1 6 838
1 3 319
1 4 317
2 4
1 1 673
1 3 176
1 5 250
1 1 468
2 6
1 7 478
1 5 595
2 6
1 6 599
1 6 505
2 3
2 5
2 1
```

```output3
478
317
838
838
176
595
468
```