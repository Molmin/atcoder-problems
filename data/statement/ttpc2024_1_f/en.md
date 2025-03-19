Score: $100$ points

## Problem Statement

You are given $N$ lines on the $xy$-plane. The $i$-th line $(1 \le i \le N)$ passes through two distinct points $(a_i, b_i)$ and $(c_i, d_i)$. Specifically, $(a_1, b_1, c_1, d_1) = (0, 0, 1, 0)$ and $(a_2, b_2, c_2, d_2) = (0, 0, 0, 1)$. That is, the first line represents the $x$-axis, and the second line represents the $y$-axis.

Alice is on the $xy$-plane. She can perform the following operation any number of times (including zero):

Choose one of the $N$ given lines. Alice moves to the position symmetric to her current position with respect to the chosen line.

Additionally, we define that point $P$ is **reachable** from point $S$ if the following condition is satisfied:

For any real number $\varepsilon &gt; 0$, there exists a point $Q$ such that the Euclidean distance between $Q$ and $P$ is at most $\varepsilon$, and Alice can move from $S$ to $Q$ in a finite number of operations.

Answer $Q$ queries.
For the $i$-th query $(1 \le i \le Q)$, you are given integers $X_i, Y_i, Z_i, W_i$. Output `Yes` if $(Z_i, W_i)$ is reachable from $(X_i, Y_i)$. Otherwise, output `No`.

Solve the problem for $T$ test cases.

## Constraints

- All input values are integers.
- $1 \le T \le 100$
- For each test case:-   - $2 \le N \le 2000$
-   - $1 \le Q \le 2000$
-   - $-10^8 \le a_i, b_i, c_i, d_i \le 10^8 \ (1 \le i \le N)$
-   - $(a_i, b_i) \neq (c_i, d_i)$
-   - $(a_1, b_1, c_1, d_1) = (0, 0, 1, 0)$
-   - $(a_2, b_2, c_2, d_2) = (0, 0, 0, 1)$
-   - All given lines are distinct.
-   - $-10^8 \le X_i, Y_i, Z_i, W_i \le 10^8 \ (1 \le i \le Q)$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Here, $\text{case}_i$ represents the $i$-th test case. Each test case is given in the following format:

> $N$
> 
> $a_1$ $b_1$ $c_1$ $d_1$
> 
> $a_2$ $b_2$ $c_2$ $d_2$
> 
> $\vdots$
> 
> $a_N$ $b_N$ $c_N$ $d_N$
> 
> $Q$
> 
> $X_1$ $Y_1$ $Z_1$ $W_1$
> 
> $X_2$ $Y_2$ $Z_2$ $W_2$
> 
> $\vdots$
> 
> $X_Q$ $Y_Q$ $Z_Q$ $W_Q$

## Output

For each test case, output $Q$ lines. The $i$-th line $(1 \le i \le Q)$ should contain the answer to the $i$-th query.<br>
The judge is case-insensitive for `Yes` and `No`.

```input1
2
3
0 0 1 0
0 0 0 1
0 2 2 0
4
1 0 2 3
1 -2 -1 2
1 1 -1 0
3 3 3 3
3
0 0 1 0
0 0 0 1
-2 1 2 3
2
2 1 -1 5
-1 -1 3 3
```

```output1
Yes
Yes
No
Yes
Yes
Yes
```

Let us explain the first test case. For the first query, Alice can use the second and third lines in sequence to move $(1, 0) \to (-1, 0) \to (2, 3)$. Thus, $(2, 3)$ is reachable from $(1, 0)$. Note that for the fourth query, if $(X_i, Y_i) = (Z_i, W_i)$, the destination is always reachable.

Now let us explain the second test case. For the first query, Alice can use the first and third lines in sequence to move $(2, 1) \to (2, -1) \to \left(-\frac{6}{5}, \frac{27}{5}\right)$. The distance between $(-1, 5)$ and $\left(-\frac{6}{5}, \frac{27}{5}\right)$ is $\frac{1}{\sqrt{5}}$. This means that for $\varepsilon \ge \frac{1}{\sqrt{5}}$, Alice can find a point $Q$ that satisfies the "reachable" condition. Moreover, for any $\varepsilon &gt; 0$, Alice can find such a point $Q$. As a result, $(2, 1)$ is reachable from $(-1, 5)$.