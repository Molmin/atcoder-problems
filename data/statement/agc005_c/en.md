Score : $700$ points

## Problem Statement

Aoki loves numerical sequences and trees.

One day, Takahashi gave him an integer sequence of length $N$, $a_1, a_2, ..., a_N$, which made him want to construct a tree.

Aoki wants to construct a tree with $N$ vertices numbered $1$ through $N$, such that for each $i = 1,2,...,N$, the distance between vertex $i$ and the farthest vertex from it is $a_i$, assuming that the length of each edge is $1$.

Determine whether such a tree exists.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq a_i \leq N-1$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

If there exists a tree that satisfies the condition, print `Possible`. Otherwise, print `Impossible`.

```input1
5
3 2 2 3 3
```

```output1
Possible
```

![](https://atcoder.jp/img/agc005/cda0380bb5cd1b9502cfceaf2526d91e.png)

The diagram above shows an example of a tree that satisfies the conditions. The red arrows show paths from each vertex to the farthest vertex from it.

```input2
3
1 1 2
```

```output2
Impossible
```

```input3
10
1 2 2 2 2 2 2 2 2 2
```

```output3
Possible
```

```input4
10
1 1 2 2 2 2 2 2 2 2
```

```output4
Impossible
```

```input5
6
1 1 1 1 1 5
```

```output5
Impossible
```

```input6
5
4 3 2 3 4
```

```output6
Possible
```