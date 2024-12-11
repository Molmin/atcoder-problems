Score : $1100$ points

## Problem Statement

There is a set consisting of $N$ distinct integers. The $i$-th smallest element in this set is $S_i$. We want to divide this set into two sets, $X$ and $Y$, such that:

- The absolute difference of any two distinct elements in $X$ is $A$ or greater.
- The absolute difference of any two distinct elements in $Y$ is $B$ or greater.

How many ways are there to perform such division, modulo $10^9 + 7$? Note that one of $X$ and $Y$ may be empty.

## Constraints

- All input values are integers.
- $1 \leq N \leq 10^5$
- $1 \leq A , B \leq 10^{18}$
- $0 \leq S_i \leq 10^{18}(1 \leq i \leq N)$
- $S_i &lt; S_{i+1}(1 \leq i \leq N - 1)$

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$
> 
> $S_1$
> 
> :
> 
> $S_N$

## Output

Print the number of the different divisions under the conditions, modulo $10^9 + 7$.

```input1
5 3 7
1
3
6
9
12
```

```output1
5
```

There are five ways to perform division:

- $X=${$1,6,9,12$}, $Y=${$3$}
- $X=${$1,6,9$}, $Y=${$3,12$}
- $X=${$3,6,9,12$}, $Y=${$1$}
- $X=${$3,6,9$}, $Y=${$1,12$}
- $X=${$3,6,12$}, $Y=${$1,9$}

```input2
7 5 3
0
2
4
7
8
11
15
```

```output2
4
```

```input3
8 2 9
3
4
5
13
15
22
26
32
```

```output3
13
```

```input4
3 3 4
5
6
7
```

```output4
0
```