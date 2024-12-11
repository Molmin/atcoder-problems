Score : $800$ points

## Problem Statement

There are $N$ positive integers $A_1, A_2, ..., A_N$.
Takahashi can perform the following operation on these integers any number of times:

- Choose $1 \leq i \leq N$ and multiply the value of $A_i$ by $-2$.

Notice that he multiplies it by **minus** two.

He would like to make $A_1 \leq A_2 \leq ... \leq A_N$ holds.
Find the minimum number of operations required. If it is impossible, print `-1`.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the answer.

```input1
4
3 1 4 1
```

```output1
3
```

One possible solution is:

- Choose $i=4$ and multiply the value of $A_4$ by $-2$. $A_1, A_2, A_3, A_4$ are now $3, 1, 4, -2$.
- Choose $i=1$ and multiply the value of $A_1$ by $-2$. $A_1, A_2, A_3, A_4$ are now $-6, 1, 4, -2$.
- Choose $i=4$ and multiply the value of $A_4$ by $-2$. $A_1, A_2, A_3, A_4$ are now $-6, 1, 4, 4$.

```input2
5
1 2 3 4 5
```

```output2
0
```

$A_1 \leq A_2 \leq ... \leq A_N$ holds before any operation is performed.

```input3
8
657312726 129662684 181537270 324043958 468214806 916875077 825989291 319670097
```

```output3
7
```