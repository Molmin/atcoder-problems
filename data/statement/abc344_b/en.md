Score: $150$ points

## Problem Statement

You are given $N$ integers $A_1,A_2,\dots,A_N$, one per line, over $N$ lines. However, **$N$ is not given in the input.**<br>
Furthermore, the following is guaranteed:

- $A_i \neq 0$ ( $1 \le i \le N-1$ )
- $A_N = 0$

Print $A_N, A_{N-1},\dots,A_1$ in this order.

## Constraints

- All input values are integers.
- $1 \le N \le 100$
- $1 \le A_i \le 10^9$ ( $1 \le i \le N-1$ )
- $A_N = 0$

## Input

The input is given from Standard Input in the following format:

> $A_1$
> 
> $A_2$
> 
> $\vdots$
> 
> $A_N$

## Output

Print $A_N, A_{N-1}, \dots, A_1$ in this order, as integers, separated by newlines.

```input1
3
2
1
0
```

```output1
0
1
2
3
```

Note again that $N$ is not given in the input.
Here, $N=4$ and $A=(3,2,1,0)$.

```input2
0
```

```output2
0
```

$A=(0)$.

```input3
123
456
789
987
654
321
0
```

```output3
0
321
654
987
789
456
123
```