Score: $1000$ points

## Problem Statement

The Republic of AtCoder consists of $L+1$ islands aligned east-west, numbered $0$ to $L$ from west to east.
The islands are connected by air routes, where for each $1 \leq i \leq L$, there is a bidirectional air route between islands $i-1$ and $i$, as shown in the figure below.
Each air route is owned by company A or company J, and the route between islands $i-1$ and $i$ is owned by company $S_i$.

![](https://img.atcoder.jp/arc177/dacd06e6239af911b67dfbb502b35bcd.png)

The nation has $N$ residents, numbered $1$ to $N$.
Resident $i$ is currently on island $X_i$.

Each resident has a **coupon** of one of the companies. Specifically, resident $i$ has a coupon of company $C_i$.
With a coupon, a resident can take that company's routes for free **any number of times**, but taking a route of the other company costs $1$ coin per trip.

Now, there is a treasure chest on island $0$. The residents want to cooperate to carry it to the capital, which is on island $L$.
Determine the minimum total number of coins required to achieve this goal.

The residents can pass the treasure chest to each other, but not their coupons.

## Constraints

- $1 \leq L \leq 6 \times 10^4$
- $1 \leq N \leq 6 \times 10^4$
- $S_i \ (1 \leq i \leq L)$ is `A` or `J`.
- $0 \leq X_i \leq L \ (1 \leq i \leq N)$
- $C_i \ (1 \leq i \leq N)$ is `A` or `J`.
- $L$, $N$, and $X_i$ are integers.

## Input

The input is given from Standard Input in the following format:

> $L$ $N$
> 
> $S_1$$S_2$$\cdots$$S_L$
> 
> $X_1$ $C_1$
> 
> $X_2$ $C_2$
> 
>  $\vdots$
> 
> $X_N$ $C_N$

Note that the second line is given as a string of length $L$.

## Output

Print the answer.

```input1
4 3
AAJJ
3 A
1 J
1 J
```

```output1
2
```

The following procedure carries the treasure chest to island $4$ for a total of $2$ coins.

1. Resident $1$ moves from island $3$ to island $2$. The route is not covered by the coupon, so $1$ coin is paid.
2. Resident $1$ moves from island $2$ to island $1$. The route is covered by the coupon, so no coin is needed.
3. Resident $1$ moves from island $1$ to island $0$. The route is covered by the coupon, so no coin is needed.
4. Resident $1$ picks up the treasure chest.
5. Resident $1$, carrying the treasure chest, moves from island $0$ to island $1$. The route is covered by the coupon, so no coin is needed.
6. Resident $1$ passes the treasure chest to resident $2$.
7. Resident $2$, carrying the treasure chest, moves from island $1$ to island $2$. The route is not covered by the coupon, so $1$ coin is paid.
8. Resident $2$, carrying the treasure chest, moves from island $2$ to island $3$. The route is covered by the coupon, so no coin is needed.
9. Resident $2$, carrying the treasure chest, moves from island $3$ to island $4$. The route is covered by the coupon, so no coin is needed.

![](https://img.atcoder.jp/arc177/9545d9fbdd7defc8d56f84380765a3d7.png)

```input2
8 3
JJAAJJAJ
2 A
6 A
8 J
```

```output2
6
```

```input3
8 6
JJAAJJAJ
2 A
6 A
8 J
8 J
8 J
8 J
```

```output3
4
```