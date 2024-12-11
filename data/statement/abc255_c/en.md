Score : $300$ points

## Problem Statement

You are given an integer $X$. The following action on this integer is called an *operation*.

- Choose and do one of the following.-   - Add $1$ to $X$.
-   - Subtract $1$ from $X$.

The terms in the arithmetic progression $S$ with $N$ terms whose initial term is $A$ and whose common difference is $D$ are called *good numbers*.<br>
Consider performing zero or more operations to make $X$ a good number. Find the minimum number of operations required to do so.

## Constraints

- All values in input are integers.
- $-10^{18} \le X,A \le 10^{18}$
- $-10^6 \le D \le 10^6$
- $1 \le N \le 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $X$ $A$ $D$ $N$

## Output

Print the answer as an integer.

```input1
6 2 3 3
```

```output1
1
```

Since $A=2,D=3,N=3$, we have $S=(2,5,8)$.<br>
You can subtract $1$ from $X$ once to make $X=6$ a good number.<br>
It is impossible to make $X$ good in zero operations.

```input2
0 0 0 1
```

```output2
0
```

We might have $D=0$. Additionally, no operation might be required.

```input3
998244353 -10 -20 30
```

```output3
998244363
```

```input4
-555555555555555555 -1000000000000000000 1000000 1000000000000
```

```output4
444445
```