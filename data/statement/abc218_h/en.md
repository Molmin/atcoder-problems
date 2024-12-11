Score : $600$ points

## Problem Statement

There are $N$ lamps numbered $1$ through $N$ arranged in a row. You are going to light $R$ of them in red and $N-R$ in blue.

For each $i=1,\ldots,N-1$, a reward of $A_i$ is given if Lamp $i$ and Lamp $i+1$ light up in different colors.

Find the maximum total reward that can be obtained by efficiently deciding the colors of the lamps.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1 \leq R \leq N-1$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $R$
> 
> $A_1$ $A_2$ $\ldots$ $A_{N-1}$

## Output

Print the answer.

```input1
6 2
3 1 4 1 5
```

```output1
11
```

Lighting up Lamps $3, 5$ in red and Lamps $1, 2, 4, 6$ in blue yields a total reward of $A_2+A_3+A_4+A_5=11$.

You cannot get any more, so the answer is $11$.

```input2
7 6
2 7 1 8 2 8
```

```output2
10
```

Lighting up Lamps $1, 2, 3, 4, 5, 7$ in red and Lamp $6$ in blue yields a total reward of $A_5+A_6=10$.

```input3
11 7
12345 678 90123 45678901 234567 89012 3456 78901 23456 7890
```

```output3
46207983
```