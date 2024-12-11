Score: $625$ points

## Problem Statement

**Pay attention to the special input format.**

There are $N$ points $(X_i,Y_i)$ in the $xy$-plane. You are given these points in the input.

Also, $Q$ pairs of integers $(A_j,B_j)$ are given.<br>
Define $f(A_j,B_j)$ as the number of indices $i$ satisfying $Y_i \ge A_j \times X_i + B_j$.

Find $\displaystyle \sum^{Q}_{j=1} f(A_j,B_j)$.

Here, $Q$ gets very large, so $(A_j,B_j)$ are not given directly.<br>
Instead, $G_0$, $R_a$, and $R_b$ are given, and $(A_j,B_j)$ are generated as follows:

- First, for $n \ge 0$, define $G_{n+1} = (48271 \times G_n) \mod (2^{31}-1)$.
- For $j=1,2,\dots,Q$, generate $(A_j,B_j)$ as follows:-   - $A_j = -R_a + (G_{3j - 2} \mod (2 \times R_a + 1) )$
-   - $B_j = -R_b + ((G_{3j - 1} \times (2^{31}-1) + G_{3 j}) \mod (2 \times R_b + 1) )$

From this method, it can be shown that $A_j$ and $B_j$ satisfy the following constraints:

- $-R_a \le A_j \le R_a$
- $-R_b \le B_j \le R_b$

## Constraints

- All input values are integers.
- $1 \le N \le 5000$
- $1 \le Q \le 10^7$
- $|X_i|, |Y_i| \le 10^8$
- The pairs $(X_i,Y_i)$ are distinct.
- $0 \le G_0 &lt; (2^{31}-1)$
- $0 \le R_a \le 10^8$
- $0 \le R_b \le 10^{16}$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$
> 
> $Q$
> 
> $G_0$ $R_a$ $R_b$

## Output

Print the answer as an integer.

```input1
7
2 -2
-1 -2
0 1
2 1
-2 2
1 2
0 -1
10
1 5 5
```

```output1
36
```

This input contains ten questions.<br>
The generated $(A_j,B_j)$ are $(-2,4),(0,2),(-4,-2),(4,-5),(3,1),(-1,3),(2,-5),(3,-1),(3,5),(3,-2)$.