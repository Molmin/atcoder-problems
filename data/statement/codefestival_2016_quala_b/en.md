Score : $200$ points

## Problem Statement

There are $N$ rabbits, numbered $1$ through $N$.

The $i$-th ($1 \leq i \leq N$) rabbit likes rabbit $a_i$.
Note that no rabbit can like itself, that is, $a_i \neq i$.

For a pair of rabbits $i$ and $j$ ($i＜j$), we call the pair ($i,j$) a *friendly pair* if the following condition is met.

- Rabbit $i$ likes rabbit $j$ and rabbit $j$ likes rabbit $i$.

Calculate the number of the friendly pairs.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq a_i \leq N$
- $a_i \neq i$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the number of the friendly pairs.

```input1
4
2 1 4 3
```

```output1
2
```

There are two friendly pairs: $(1,2)$ and $(3,4)$.

```input2
3
2 3 1
```

```output2
0
```

There are no friendly pairs.

```input3
5
5 5 5 5 1
```

```output3
1
```

There is one friendly pair: $(1,5)$.