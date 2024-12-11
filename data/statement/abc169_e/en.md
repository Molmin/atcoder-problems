Score : $500$ points

## Problem Statement

There are $N$ integers $X_1, X_2, \cdots, X_N$, and we know that $A_i \leq X_i \leq B_i$.
Find the number of different values that the median of $X_1, X_2, \cdots, X_N$ can take.

## Notes

The median of $X_1, X_2, \cdots, X_N$ is defined as follows. Let $x_1, x_2, \cdots, x_N$ be the result of sorting $X_1, X_2, \cdots, X_N$ in ascending order.

- If $N$ is odd, the median is $x_{(N+1)/2}$;
- if $N$ is even, the median is $(x_{N/2} + x_{N/2+1}) / 2$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $:$
> 
> $A_N$ $B_N$

## Output

Print the answer.

```input1
2
1 2
2 3
```

```output1
3
```

- <p>If $X_1 = 1$ and $X_2 = 2$, the median is $\frac{3}{2}$;</p>
- <p>if $X_1 = 1$ and $X_2 = 3$, the median is $2$;</p>
- <p>if $X_1 = 2$ and $X_2 = 2$, the median is $2$;</p>
- <p>if $X_1 = 2$ and $X_2 = 3$, the median is $\frac{5}{2}$.</p>

Thus, the median can take three values: $\frac{3}{2}$, $2$, and $\frac{5}{2}$.

```input2
3
100 100
10 10000
1 1000000000
```

```output2
9991
```