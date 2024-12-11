Score : $200$ points

## Problem Statement

Naohiro had $N+1$ consecutive integers, one of each, but he lost one of them.

The remaining $N$ integers are given in arbitrary order as $A_1,\ldots,A_N$. Find the lost integer.

The given input guarantees that the lost integer is uniquely determined.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq 1000$
- All input values are integers.
- The lost integer is uniquely determined.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.  

```input1
3
2 3 5
```

```output1
4
```

Naohiro originally had four integers, $2,3,4,5$, then lost $4$, and now has $2,3,5$.

Print the lost integer, $4$.

```input2
8
3 1 4 5 9 2 6 8
```

```output2
7
```

```input3
16
152 153 154 147 148 149 158 159 160 155 156 157 144 145 146 150
```

```output3
151
```