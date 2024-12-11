Score : $1000$ points

## Problem Statement

You are given a sequence of $N$ non-negative integers: $D=(D_1, D_2, \dots, D_N)$.

Find the number of labeled trees with $N$ vertices numbered $1$ to $N$ that satisfy the following condition, modulo $998244353$.

- There is a way to direct the $N-1$ edges so that the outdegree of each vertex $i\ (1\leq i \leq N)$ is $D_i$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $0 \leq D_i \leq N-1$
- $\sum_{i=1}^{N} D_i = N-1$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $D_1$ $D_2$ $\dots$ $D_N$

## Output

Print the answer.

```input1
4
0 1 0 2
```

```output1
5
```

Below are the five trees that satisfy the condition, directed in a desired way.

![](https://img.atcoder.jp/arc155/5b5b99752b5330a2dd41607c3946fdd4.jpg)

```input2
5
0 1 1 1 1
```

```output2
125
```

```input3
15
0 0 0 0 0 0 0 1 1 1 1 1 2 3 4
```

```output3
63282877
```