Score : $600$ points

## Problem Statement

There are $N$ continuous random variables $x_i$ ($1 \leq i \leq N$), each of which follows the continuous uniform distribution on the interval $[L_i, R_i]$.
(That is, $x_i$ is a random variable that can take any real value between $L_i$ and $R_i$ (inclusive) with equal probability.)

Let $E$ be the expected value of the maximum of these $N$ random variables. Under the constraints in this problem, it can be proved that $E \times (N+1)! \times \prod_{i=1}^N (R_i - L_i)$ is a positive integer. Find this value modulo $1,000,000,007$.

## Constraints

- $1 \leq N \leq 1000$
- $0 \leq L_i &lt; R_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $:$
> 
> $L_N$ $R_N$

## Output

Print $E \times (N+1)! \times \prod_{i=1}^N (R_i - L_i)$ modulo $1,000,000,007$, as an integer.

```input1
1
1 2
```

```output1
3
```

The expected value of the maximum of these random variables - there is actually just one in this case - is equal to the median of the range of the values the variable can take, that is, $E = \frac{3}{2}$.

Thus, the correct output is $E \times (N+1)! \times (R_1 - L_1) = E \times 2 = 3$.

```input2
2
1 2
1 2
```

```output2
10
```

The expected value in question is $E = \frac{5}{3}$.

```input3
2
1 2
2 4
```

```output3
36
```

```input4
5
40 96
81 92
16 384
32 768
65 536
```

```output4
52776507
```