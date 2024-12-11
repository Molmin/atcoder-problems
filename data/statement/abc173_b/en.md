Score : $200$ points

## Problem Statement

Takahashi is participating in a programming contest called AXC002, and he has just submitted his code to Problem A.

The problem has $N$ test cases.

For each test case $i$ ($1\leq i \leq N$), you are given a string $S_i$ representing the verdict for that test case. Find the numbers of test cases for which the verdict is `AC`, `WA`, `TLE`, and `RE`, respectively.

See the Output section for the output format.

## Constraints

- $1 \leq N \leq 10^5$
- $S_i$ is `AC`, `WA`, `TLE`, or `RE`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_N$

## Output

Let $C_0$, $C_1$, $C_2$, and $C_3$ be the numbers of test cases for which the verdict is `AC`, `WA`, `TLE`, and `RE`, respectively. Print the following:

> AC x $C_0$
> 
> WA x $C_1$
> 
> TLE x $C_2$
> 
> RE x $C_3$

```input1
6
AC
TLE
AC
AC
WA
TLE
```

```output1
AC x 3
WA x 1
TLE x 2
RE x 0
```

We have $3$, $1$, $2$, and $0$ test case(s) for which the verdict is `AC`, `WA`, `TLE`, and `RE`, respectively.

```input2
10
AC
AC
AC
AC
AC
AC
AC
AC
AC
AC
```

```output2
AC x 10
WA x 0
TLE x 0
RE x 0
```