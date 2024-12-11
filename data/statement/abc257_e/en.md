Score : $500$ points

## Problem Statement

Takahashi has an integer $x$.  Initially, $x=0$.

Takahashi may do the following operation any number of times.

- Choose an integer $i\ (1\leq i \leq 9)$.  Pay $C_i$ yen (the currency in Japan) to replace $x$ with $10x + i$.

Takahashi has a budget of $N$ yen.  Find the maximum possible value of the final $x$ resulting from operations without exceeding the budget.

## Constraints

- $1 \leq N \leq 10^6$
- $1 \leq C_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $C_1$ $C_2$ $\ldots$ $C_9$

## Output

Print the answer.

```input1
5
5 4 3 3 2 5 3 5 3
```

```output1
95
```

For example, the operations where $i = 9$ and $i=5$ in this order change $x$ as:

$0 \rightarrow 9 \rightarrow 95$. 

The amount of money required for these operations is $C_9 + C_5 = 3 + 2 = 5$ yen, which does not exceed the budget.  Since we can prove that we cannot make an integer greater than or equal to $96$ without exceeding the budget, the answer is $95$.

```input2
20
1 1 1 1 1 1 1 1 1
```

```output2
99999999999999999999
```

Note that the answer may not fit into a $64$-bit integer type.