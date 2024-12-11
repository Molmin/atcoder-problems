Score : $500$ points

## Problem Statement

Given are integer sequences $A = (a_1, a_2, \dots, a_N)$, $T = (t_1, t_2, \dots, t_N)$, and $X = (x_1, x_2, \dots, x_Q)$.<br>
Let us define $N$ functions $f_1(x), f_2(x), \dots, f_N(x)$ as follows:

$f_i(x) = \begin{cases} x + a_i &amp; (t_i = 1)\\ \max(x, a_i) &amp; (t_i = 2)\\ \min(x, a_i) &amp; (t_i = 3)\\ \end{cases}$

For each $i = 1, 2, \dots, Q$, find $f_N( \dots f_2(f_1(x_i)) \dots )$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $|a_i| \leq 10^9$
- $1 \leq t_i \leq 3$
- $|x_i| \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $t_1$
> 
> $a_2$ $t_2$
> 
> $\vdots$
> 
> $a_N$ $t_N$
> 
> $Q$
> 
> $x_1$ $x_2$ $\cdots$ $x_Q$

## Output

Print $Q$ lines. The $i$-th line should contain $f_N( \dots f_2(f_1(x_i)) \dots )$.

```input1
3
-10 2
10 1
10 3
5
-15 -10 -5 0 5
```

```output1
0
0
5
10
10
```

We have $f_1(x) = \max(x, -10), f_2(x) = x + 10, f_3(x) = \min(x, 10)$, thus:

- $f_3(f_2(f_1(-15))) = 0$
- $f_3(f_2(f_1(-10))) = 0$
- $f_3(f_2(f_1(-5))) = 5$
- $f_3(f_2(f_1(0))) = 10$
- $f_3(f_2(f_1(5))) = 10$