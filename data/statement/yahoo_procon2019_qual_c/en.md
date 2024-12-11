Score : $400$ points

## Problem Statement

Snuke has one biscuit and zero Japanese yen (the currency) in his pocket.
He will perform the following operations exactly $K$ times in total, in the order he likes:

- Hit his pocket, which magically increases the number of biscuits by one.
- Exchange $A$ biscuits to $1$ yen.
- Exchange $1$ yen to $B$ biscuits.

Find the maximum possible number of biscuits in Snuke's pocket after $K$ operations.

## Constraints

- $1 \leq K,A,B \leq 10^9$
- $K,A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $K$ $A$ $B$

## Output

Print the maximum possible number of biscuits in Snuke's pocket after $K$ operations.

```input1
4 2 6
```

```output1
7
```

The number of biscuits in Snuke's pocket after $K$ operations is maximized as follows:

- Hit his pocket. Now he has $2$ biscuits and $0$ yen.
- Exchange $2$ biscuits to $1$ yen. his pocket. Now he has $0$ biscuits and $1$ yen.
- Hit his pocket. Now he has $1$ biscuits and $1$ yen.
- Exchange $1$ yen to $6$ biscuits. his pocket. Now he has $7$ biscuits and $0$ yen.

```input2
7 3 4
```

```output2
8
```

```input3
314159265 35897932 384626433
```

```output3
48518828981938099
```