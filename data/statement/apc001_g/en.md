Score : $2000$ points

## Problem Statement

There is a bridge that connects the left and right banks of a river.
There are $2 N$ doors placed at different positions on this bridge, painted in some colors.
The colors of the doors are represented by integers from $1$ through $N$.
For each $k$ ($1 \leq k \leq N$), there are exactly two doors painted in Color $k$.

Snuke decides to cross the bridge from the left bank to the right bank.
He will keep on walking to the right, but the following event will happen while doing so:

- At the moment Snuke touches a door painted in Color $k$ ($1 \leq k \leq N$), he teleports to the right side of the other door painted in Color $k$.

It can be shown that he will eventually get to the right bank.

For each $i$ ($1 \leq i \leq 2 N - 1$), the section between the $i$-th and $(i + 1)$-th doors from the left will be referred to as Section $i$.
After crossing the bridge, Snuke recorded whether or not he walked through Section $i$, for each $i$ ($1 \leq i \leq 2 N - 1$).
This record is given to you as a string $s$ of length $2 N - 1$.
For each $i$ ($1 \leq i \leq 2 N - 1$), if Snuke walked through Section $i$, the $i$-th character in $s$ is `1`; otherwise, the $i$-th character is `0`.

![](https://img.atcoder.jp/cookie/970b981380ffad7745008433034c0885.png)

Figure: A possible arrangement of doors for Sample Input 3

Determine if there exists an arrangement of doors that is consistent with the record. If it exists, construct one such arrangement.

## Constraints

- $1 \leq N \leq 10^5$
- $|s| = 2 N - 1$
- $s$ consists of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s$

## Output

If there is no arrangement of doors that is consistent with the record, print `No`.
If there exists such an arrangement, print `Yes` in the first line, then print one such arrangement in the second line, in the following format:

> $c_1$ $c_2$ $...$ $c_{2 N}$

Here, for each $i$ ($1 \leq i \leq 2 N$), $c_i$ is the color of the $i$-th door from the left.

```input1
2
010
```

```output1
Yes
1 1 2 2
```

```input2
2
001
```

```output2
No
```

```input3
3
10110
```

```output3
Yes
1 3 2 1 2 3
```

The figure below is identical to the one in the statement.

![](https://img.atcoder.jp/cookie/970b981380ffad7745008433034c0885.png)

```input4
3
10101
```

```output4
No
```

```input5
6
00111011100
```

```output5
Yes
1 6 1 2 3 4 4 2 3 5 6 5
```