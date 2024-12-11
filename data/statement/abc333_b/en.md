Score : $200$ points

## Problem Statement

A regular pentagon $P$ is shown in the figure below.

![](https://img.atcoder.jp/abc333/2d0c9295b03ff6d808c1ee9125045fc8.png)

Determine whether the length of the line segment connecting points $S_1$ and $S_2$ of $P$ equals the length of the line segment connecting points $T_1$ and $T_2$.

## Constraints

- Each of $S_1$, $S_2$, $T_1$, and $T_2$ is one of the characters `A`, `B`, `C`, `D`, and `E`.
- $S_1 \neq S_2$
- $T_1 \neq T_2$

## Input

The input is given from Standard Input in the following format:

> $S_1S_2$
> 
> $T_1T_2$

## Output

If the length of the line segment connecting points $S_1$ and $S_2$ of $P$ equals the length of the line segment connecting points $T_1$ and $T_2$, print `Yes`; otherwise, print `No`.

```input1
AC
EC
```

```output1
Yes
```

The length of the line segment connecting point `A` and point `C` of $P$ equals the length of the line segment connecting point `E` and point `C`.

```input2
DA
EA
```

```output2
No
```

The length of the line segment connecting point `D` and point `A` of $P$ does not equal the length of the line segment connecting point `E` and point `A`.

```input3
BD
BD
```

```output3
Yes
```