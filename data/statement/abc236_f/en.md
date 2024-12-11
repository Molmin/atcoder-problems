Score : $500$ points

## Problem Statement

The shop supaisu-ya sells $2^N-1$ kinds of spices: Spice $1$, Spice $2$, $\ldots$, Spice $2^N-1$. One pack of each spice is in stock.
For each $i = 1, 2, \ldots, 2^N-1$, Spice $i$ costs $c_i$ yen.
Takahashi can buy any of these spices.

He plans to make curry after getting home by choosing one or more of the bought spices and mixing them.<br>
If $k$ spices, Spice $A_1$, Spice $A_2$, $\ldots$, Spice $A_k$, are mixed, the hotness of the resulting curry is $A_1 \oplus A_2 \oplus \cdots \oplus A_k$, where $\oplus$ denotes the bitwise XOR.

Takahashi wants to decide the hotness of the curry based on his feeling after getting home. For now, he will buy a set of spices that allows him to make curry of any hotness from $1$ through $2^N-1$. Print the minimum possible amount of money Takahashi pays.

## Constraints

- $2 \leq N \leq 16$
- $1 \leq c_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $c_1$ $c_2$ $\ldots$ $c_{2^N-1}$

## Output

Print the minimum possible amount of money Takahashi pays.

```input1
2
4 5 3
```

```output1
7
```

If Takahashi buys Spice $1$ and $3$, he can make curry of any hotness from $1$ through $3$, as follows.

- To make curry of hotness $1$, use just Spice $1$.
- To make curry of hotness $2$, mix Spice $1$ and Spice $3$.
- To make curry of hotness $3$, use just Spice $3$.

Here, Takahashi pays $c_1 + c_3 = 4 + 3 = 7$ yen, which is the minimum possible amount he pays.

```input2
4
9 7 9 7 10 4 3 9 4 8 10 5 6 3 8
```

```output2
15
```