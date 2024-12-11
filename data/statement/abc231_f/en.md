Score : $500$ points

## Problem Statement

Snuke is planning on giving one gift each to Takahashi and Aoki.<br>
There are $N$ candidates for the gifts. Takahashi's impression of the $i$-th candidate is $A_i$, and Aoki's impression of it is $B_i$.

The two are very jealous. If Takahashi's impression of the gift Aoki gets is greater than Takahashi's impression of the gift Takahashi gets, Takahashi gets jealous of Aoki and starts fighting, and vice versa.

Among the $N^2$ possible ways of giving the gifts, how many do not lead to fighting?

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $0 \leq A_i \leq 10^9$
- $0 \leq B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $B_1$ $\ldots$ $B_N$

## Output

Print the answer.

```input1
3
50 100 150
1 3 2
```

```output1
4
```

For example, if we give the $1$-st candidate to Takahashi and the $2$-nd candidate to Aoki, 
Takahashi's impression of the gift Aoki gets is $100$,
while Takahashi's impression of the gift Takahashi gets is $50$,
so Takahashi gets jealous of Aoki and starts fighting.

As another example, if we give the $3$-rd candidate to Takahashi and the $2$-nd candidate to Aoki, the two will not start fighting.

Note that it is allowed to give the same gift to the two.

```input2
3
123456789 123456 123
987 987654 987654321
```

```output2
6
```

```input3
10
3 1 4 1 5 9 2 6 5 3
2 7 1 8 2 8 1 8 2 8
```

```output3
37
```