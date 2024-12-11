Score : $200$ points

## Problem Statement

There are $7$ points $A$, $B$, $C$, $D$, $E$, $F$, and $G$ on a straight line, in this order. (See also the figure below.)<br>
The distances between adjacent points are as follows.

- Between $A$ and $B$: $3$
- Between $B$ and $C$: $1$
- Between $C$ and $D$: $4$
- Between $D$ and $E$: $1$
- Between $E$ and $F$: $5$
- Between $F$ and $G$: $9$

![image](https://img.atcoder.jp/ghi/abc305b_33d2c7bcdf92725cf9145e524f6907c76fd1f50fe06fd37b511b8bd3c27e3638.jpg)

You are given two uppercase English letters $p$ and $q$. Each of $p$ and $q$ is `A`, `B`, `C`, `D`, `E`, `F`, or `G`, and it holds that $p \neq q$.<br>
Find the distance between the points $p$ and $q$.

## Constraints

- Each of $p$ and $q$ is `A`,`B`,`C`,`D`,`E`,`F`, or `G`.
- $p \neq q$

## Input

The input is given from Standard Input in the following format:

> $p$ $q$

## Output

Print the distance between the points $p$ and $q$.

```input1
A C
```

```output1
4
```

The distance between the points $A$ and $C$ is $3 + 1 = 4$.

```input2
G B
```

```output2
20
```

The distance between the points $G$ and $B$ is $9 + 5 + 1 + 4 + 1 = 20$.

```input3
C F
```

```output3
10
```