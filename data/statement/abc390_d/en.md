Score : $400$ points

## Problem Statement

There are $N$ bags, labeled bag $1$, bag $2$, $\ldots$, bag $N$.<br>
Bag $i$ ($1 \leq i \leq N$) contains $A_i$ stones.

Takahashi can perform the following operation any number of times, possibly zero:

Choose two bags A and B, and move **all** stones from bag A into bag B.

Find the number of different possible values for the following after repeating the operation.

- $B_1 \oplus B_2 \oplus \cdots \oplus B_N$, where $B_i$ is the final number of stones in bag $i$.<br>
Here, $\oplus$ denotes bitwise XOR.

About bitwise XOR
For non-negative integers $a$ and $b$, the bitwise XOR $a \oplus b$ is defined as follows:

In the binary representation of $a \oplus b$, the digit in the $2^k$ place ($k \ge 0$) is $1$ if and only if exactly one of the digits in the $2^k$ place of $a$ and $b$ is $1$; otherwise, it is $0$.

For example, $3 \oplus 5 = 6$ (in binary, $011 \oplus 101 = 110$).
In general, for $k$ non-negative integers $x_1, x_2, \ldots, x_k$, their bitwise XOR $x_1 \oplus x_2 \oplus \cdots \oplus x_k$ is defined as $(\cdots((x_1 \oplus x_2) \oplus x_3) \oplus \cdots) \oplus x_k$, which does not depend on the order of $x_1, x_2, \ldots, x_k$.

It can be proved that under the constraints of this problem, the number of possible values is finite.

## Constraints

- $2 \leq N \leq 12$
- $1 \leq A_i \leq 10^{17}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the number of different possible values for $B_1 \oplus B_2 \oplus \cdots \oplus B_N$ after repeating the operation.

```input1
3
2 5 7
```

```output1
3
```

For example, if Takahashi chooses bags $1$ and $3$ for the operation, then the numbers of stones in bags $1, 2, 3$ become $0, 5, 9$.<br>
If he stops at this point, the XOR is $0 \oplus 5 \oplus 9 = 12$.

The other possible XOR values after repeating the operation are $0$ and $14$.<br>
Therefore, the possible values are $0, 12, 14$; there are three values, so the output is $3$.

```input2
2
100000000000000000 100000000000000000
```

```output2
2
```

```input3
6
71 74 45 34 31 60
```

```output3
84
```