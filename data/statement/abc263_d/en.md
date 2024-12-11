Score : $400$ points

## Problem Statement

You are given an integer sequence of length $N$: $A=(A_1,A_2,\ldots,A_N)$.

You will perform the following consecutive operations just once:

- <p>Choose an integer $x$ $(0\leq x \leq N)$. If $x$ is $0$, do nothing. If $x$ is $1$ or greater, replace each of $A_1,A_2,\ldots,A_x$ with $L$.</p>
- <p>Choose an integer $y$ $(0\leq y \leq N)$. If $y$ is $0$, do nothing. If $y$ is $1$ or greater, replace each of $A_{N},A_{N-1},\ldots,A_{N-y+1}$ with $R$.</p>

Print the minimum possible sum of the elements of $A$ after the operations.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $-10^9 \leq L, R\leq 10^9$
- $-10^9 \leq A_i\leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $L$ $R$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
5 4 3
5 5 0 6 3
```

```output1
14
```

If you choose $x=2$ and $y=2$, you will get $A = (4,4,0,3,3)$, for the sum of $14$, which is the minimum sum achievable.

```input2
4 10 10
1 2 3 4
```

```output2
10
```

If you choose $x=0$ and $y=0$, you will get $A = (1,2,3,4)$, for the sum of $10$, which is the minimum sum achievable.

```input3
10 -5 -3
9 -6 10 -1 2 10 -1 7 -15 5
```

```output3
-58
```

$L$, $R$, and $A_i$ may be negative.