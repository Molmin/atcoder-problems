Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N-1$ consisting of `&amp;lt;` and `&amp;gt;`.

A sequence $x=(x_1,x_2,\cdots,x_N)$ of length $N$ is called a **good sequence** if and only if it satisfies the following condition:

- For each $i$ ($1 \leq i \leq N-1$), if the $i$-th character of $S$ is `&amp;lt;`, then $x_i\lt x_{i+1}$; if it is `&amp;gt;`, then $x_i \gt x_{i+1}$.

Find the minimum possible inversion number of a good sequence.

What is the inversion number of a sequence?

The inversion number of a sequence $x=(x_1,x_2,\cdots,x_n)$ of length $n$ is the number of pairs of integers $(i,j)$ ($1 \leq i &lt; j \leq n$) such that $x_i &gt; x_j$.

## Constraints

- $2 \leq N \leq 250000$
- $S$ is a string of length $N-1$ consisting of `&amp;lt;` and `&amp;gt;`.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
4
<><
```

```output1
1
```

$x=(1,2,1,2)$ is a good sequence, and its inversion number is $1$.
There is no good sequence whose inversion number is $0$, so the answer is $1$.

```input2
2
<
```

```output2
0
```

```input3
10
>>>>>>>>>
```

```output3
45
```

```input4
30
<<><>>><><>><><><<>><<<><><<>
```

```output4
19
```