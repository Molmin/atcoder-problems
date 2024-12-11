Score : $1300$ points

## Problem Statement

A museum exhibits $N$ jewels, Jewel $1, 2, ..., N$.
The coordinates of Jewel $i$ are $(x_i, y_i)$ (the museum can be regarded as a two-dimensional plane), and the value of that jewel is $v_i$.

Snuke the thief will steal some of these jewels.

There are $M$ conditions, Condition $1, 2, ..., M$, that must be met when stealing jewels, or he will be caught by the detective.
Each condition has one of the following four forms:

- ($t_i$ =`L`, $a_i$, $b_i$) : Snuke can only steal at most $b_i$ jewels whose $x$ coordinates are $a_i$ or smaller.
- ($t_i$ =`R`, $a_i$, $b_i$) : Snuke can only steal at most $b_i$ jewels whose $x$ coordinates are $a_i$ or larger.
- ($t_i$ =`D`, $a_i$, $b_i$) : Snuke can only steal at most $b_i$ jewels whose $y$ coordinates are $a_i$ or smaller.
- ($t_i$ =`U`, $a_i$, $b_i$) : Snuke can only steal at most $b_i$ jewels whose $y$ coordinates are $a_i$ or larger.

Find the maximum sum of values of jewels that Snuke the thief can steal.

## Constraints

- $1 \leq N \leq 80$
- $1 \leq x_i, y_i \leq 100$
- $1 \leq v_i \leq 10^{15}$
- $1 \leq M \leq 320$
- $t_i$ is `L`, `R`, `U` or `D`.
- $1 \leq a_i \leq 100$
- $0 \leq b_i \leq N - 1$
- $(x_i, y_i)$ are pairwise distinct.
- $(t_i, a_i)$ are pairwise distinct.
- $(t_i, b_i)$ are pairwise distinct.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$ $v_1$
> 
> $x_2$ $y_2$ $v_2$
> 
> $:$
> 
> $x_N$ $y_N$ $v_N$
> 
> $M$
> 
> $t_1$ $a_1$ $b_1$
> 
> $t_2$ $a_2$ $b_2$
> 
> $:$
> 
> $t_M$ $a_M$ $b_M$

## Output

Print the maximum sum of values of jewels that Snuke the thief can steal.

```input1
7
1 3 6
1 5 9
3 1 8
4 3 8
6 2 9
5 4 11
5 7 10
4
L 3 1
R 2 3
D 5 3
U 4 2
```

```output1
36
```

![Figure](https://img.atcoder.jp/agc031/rghe0iwfjoievjw4epdfmengow.png)

Stealing Jewel $1, 5, 6$ and $7$ results in the total value of $36$.

```input2
3
1 2 3
4 5 6
7 8 9
1
L 100 0
```

```output2
0
```

```input3
4
1 1 10
1 2 11
2 1 12
2 2 13
3
L 8 3
L 9 2
L 10 1
```

```output3
13
```

```input4
10
66 47 71040136000
65 77 74799603000
80 53 91192869000
24 34 24931901000
91 78 49867703000
68 71 46108236000
46 73 74799603000
56 63 93122668000
32 51 71030136000
51 26 70912345000
21
L 51 1
L 7 0
U 47 4
R 92 0
R 91 1
D 53 2
R 65 3
D 13 0
U 63 3
L 68 3
D 47 1
L 91 5
R 32 4
L 66 2
L 80 4
D 77 4
U 73 1
D 78 5
U 26 5
R 80 2
R 24 5
```

```output4
305223377000
```