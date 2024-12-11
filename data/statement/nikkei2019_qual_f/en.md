Score : $1200$ points

## Problem Statement

There are $N$ jewels, numbered $1$ to $N$.
The color of these jewels are represented by integers between $1$ and $K$ (inclusive), and the color of Jewel $i$ is $C_i$.
Also, these jewels have specified values, and the value of Jewel $i$ is $V_i$.

Snuke would like to choose some of these jewels to exhibit.
Here, the set of the chosen jewels must satisfy the following condition:

- For each chosen jewel, there is at least one more jewel of the same color that is chosen.

For each integer $x$ such that $1 \leq x \leq N$, determine if it is possible to choose exactly $x$ jewels, and if it is possible, find the maximum possible sum of the values of chosen jewels in that case.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq \lfloor N/2 \rfloor$
- $1 \leq C_i \leq K$
- $1 \leq V_i \leq 10^9$
- For each of the colors, there are at least two jewels of that color.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $C_1$ $V_1$
> 
> $C_2$ $V_2$
> 
> $:$
> 
> $C_N$ $V_N$

## Output

Print $N$ lines.
In the $i$-th line, if it is possible to choose exactly $i$ jewels, print the maximum possible sum of the values of chosen jewels in that case, and print $-1$ otherwise.

```input1
5 2
1 1
1 2
1 3
2 4
2 5
```

```output1
-1
9
6
14
15
```

We cannot choose exactly one jewel.

When choosing exactly two jewels, the total value is maximized when Jewel $4$ and $5$ are chosen.

When choosing exactly three jewels, the total value is maximized when Jewel $1, 2$ and $3$ are chosen.

When choosing exactly four jewels, the total value is maximized when Jewel $2, 3, 4$ and $5$ are chosen.

When choosing exactly five jewels, the total value is maximized when Jewel $1, 2, 3, 4$ and $5$ are chosen.

```input2
5 2
1 1
1 2
2 3
2 4
2 5
```

```output2
-1
9
12
12
15
```

```input3
8 4
3 2
2 3
4 5
1 7
3 11
4 13
1 17
2 19
```

```output3
-1
24
-1
46
-1
64
-1
77
```

```input4
15 5
3 87
1 25
1 27
3 58
2 85
5 19
5 39
1 58
3 12
4 13
5 54
4 100
2 33
5 13
2 55
```

```output4
-1
145
173
285
318
398
431
491
524
576
609
634
653
666
678
```