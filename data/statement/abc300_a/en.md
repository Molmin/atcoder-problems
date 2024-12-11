Score : $100$ points

## Problem Statement

Given integers $A$ and $B$, find $A+B$.<br>
This is a $N$-choice problem; the $i$-th choice is $C_i$.<br>
Print the **index** of the correct choice.

## Constraints

- All values in the input are integers.
- $1 \le N \le 300$
- $1 \le A,B \le 1000$
- $1 \le C_i \le 2000$
- $C_i$ are pairwise distinct.  In other words, no two choices have the same value.
- There is exactly one $i$ such that $A+B=C_i$.  In other words, there is always a unique correct choice.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$
> 
> $C_1$ $C_2$ $\dots$ $C_N$

## Output

Print the answer as an integer.

```input1
3 125 175
200 300 400
```

```output1
2
```

We have $125+175 = 300$.<br>
The first, second, and third choices are $200$, $300$, and $400$, respectively.<br>
Thus, the $2$-nd choice is correct, so $2$ should be printed.

```input2
1 1 1
2
```

```output2
1
```

The problem may be a one-choice problem.

```input3
5 123 456
135 246 357 468 579
```

```output3
5
```