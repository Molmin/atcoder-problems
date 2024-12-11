Score: $150$ points

## Problem Statement

There are $N$ countries numbered $1$ to $N$. For each $i = 1, 2, \ldots, N$, Takahashi has $A_i$ units of the currency of country $i$.

Takahashi can repeat the following operation any number of times, possibly zero:

- First, choose an integer $i$ between $1$ and $N-1$, inclusive.
- Then, if Takahashi has at least $S_i$ units of the currency of country $i$, he performs the following action once:-   - Pay $S_i$ units of the currency of country $i$ and gain $T_i$ units of the currency of country $(i+1)$.

Print the maximum possible number of units of the currency of country $N$ that Takahashi could have in the end.

## Constraints

- All input values are integers.
- $2 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 10^9$
- $1 \leq T_i \leq S_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $S_1$ $T_1$
> 
> $S_2$ $T_2$
> 
> $\vdots$
> 
> $S_{N-1}$ $T_{N-1}$

## Output

Print the answer.

```input1
4
5 7 0 3
2 2
4 3
5 2
```

```output1
5
```

In the following explanation, let the sequence $A = (A_1, A_2, A_3, A_4)$ represent the numbers of units of the currencies of the countries Takahashi has. Initially, $A = (5, 7, 0, 3)$.

Consider performing the operation four times as follows:

- Choose $i = 2$, pay four units of the currency of country $2$, and gain three units of the currency of country $3$. Now, $A = (5, 3, 3, 3)$.
- Choose $i = 1$, pay two units of the currency of country $1$, and gain two units of the currency of country $2$. Now, $A = (3, 5, 3, 3)$.
- Choose $i = 2$, pay four units of the currency of country $2$, and gain three units of the currency of country $3$. Now, $A = (3, 1, 6, 3)$.
- Choose $i = 3$, pay five units of the currency of country $3$, and gain two units of the currency of country $4$. Now, $A = (3, 1, 1, 5)$.

At this point, Takahashi has five units of the currency of country $4$, which is the maximum possible number.

```input2
10
32 6 46 9 37 8 33 14 31 5
5 5
3 1
4 3
2 2
3 2
3 2
4 4
3 3
3 1
```

```output2
45
```