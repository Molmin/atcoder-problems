Score : $1000$ points

## Problem Statement

You are given a sequence $a = \{a_1, ..., a_N\}$ with all zeros, and a sequence $b = \{b_1, ..., b_N\}$ consisting of $0$ and $1$. The length of both is $N$.

You can perform $Q$ kinds of operations. The $i$-th operation is as follows:

- Replace each of $a_{l_i}, a_{l_i + 1}, ..., a_{r_i}$ with $1$.

Minimize the hamming distance between $a$ and $b$, that is, the number of $i$ such that $a_i \neq b_i$, by performing some of the $Q$ operations.

## Constraints

- $1 \leq N \leq 200,000$
- $b$ consists of $0$ and $1$.
- $1 \leq Q \leq 200,000$
- $1 \leq l_i \leq r_i \leq N$
- If $i \neq j$, either $l_i \neq l_j$ or $r_i \neq r_j$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $b_1$ $b_2$ $...$ $b_N$
> 
> $Q$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $:$
> 
> $l_Q$ $r_Q$

## Output

Print the minimum possible hamming distance.

```input1
3
1 0 1
1
1 3
```

```output1
1
```

If you choose to perform the operation, $a$ will become $\{1, 1, 1\}$, for a hamming distance of $1$.

```input2
3
1 0 1
2
1 1
3 3
```

```output2
0
```

If both operations are performed, $a$ will become $\{1, 0, 1\}$, for a hamming distance of $0$.

```input3
3
1 0 1
2
1 1
2 3
```

```output3
1
```

```input4
5
0 1 0 1 0
1
1 5
```

```output4
2
```

It may be optimal to perform no operation.

```input5
9
0 1 0 1 1 1 0 1 0
3
1 4
5 8
6 7
```

```output5
3
```

```input6
15
1 1 0 0 0 0 0 0 1 0 1 1 1 0 0
9
4 10
13 14
1 7
4 14
9 11
2 6
7 8
3 12
7 13
```

```output6
5
```

```input7
10
0 0 0 1 0 0 1 1 1 0
7
1 4
2 5
1 3
6 7
9 9
1 5
7 9
```

```output7
1
```