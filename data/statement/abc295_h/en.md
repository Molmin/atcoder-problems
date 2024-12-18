Score : $600$ points

## Problem Statement

We have a grid $A$ with $N$ rows and $M$ columns. Initially, $0$ is written on every square.<br>
Let us perform the following operation.

- For each integer $i$ such that $1 \le i \le N$, in the $i$-th row, turn the digits in zero or more leftmost squares into $1$.
- For each integer $j$ such that $1 \le j \le M$, in the $j$-th column, turn the digits in zero or more topmost squares into $1$.

Let $S$ be the set of grids that can be obtained in this way.

You are given a grid $X$ with $N$ rows and $M$ columns consisting of `0`, `1`, and `?`.<br>
There are $2^q$ grids that can be obtained by replacing each `?` with `0` or `1`, where $q$ is the number of `?` in $X$. How many of them are in $S$?<br>
This count can be enormous, so find it modulo $998244353$.

## Constraints

- $N$ and $M$ are integers.
- $1 \le N,M \le 18$
- $X$ is a grid with $N$ rows and $M$ columns consisting of `0`, `1`, and `?`.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_{1,1} X_{1,2} \dots X_{1,M}$
> 
> $X_{2,1} X_{2,2} \dots X_{2,M}$
> 
> $\vdots$
> 
> $X_{N,1} X_{N,2} \dots X_{N,M}$

## Output

Print an integer representing the answer.

```input1
2 3
0?1
?1?
```

```output1
6
```

The following six grids are in $S$.

```output1
011  011  001
010  011  110

001  011  011
111  110  111
```

```input2
5 3
101
010
101
010
101
```

```output2
0
```

$X$ may have no `?`, and the answer may be $0$.

```input3
18 18
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
??????????????????
```

```output3
462237431
```

Be sure to find the count modulo $998244353$.