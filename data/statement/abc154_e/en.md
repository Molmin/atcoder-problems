Score : $500$ points

## Problem Statement

Find the number of integers between $1$ and $N$ (inclusive) that contains exactly $K$ non-zero digits when written in base ten.

## Constraints

- $1 \leq N &lt; 10^{100}$
- $1 \leq K \leq 3$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $K$

## Output

Print the count.

```input1
100
1
```

```output1
19
```

The following $19$ integers satisfy the condition:

- $1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100$

```input2
25
2
```

```output2
14
```

The following $14$ integers satisfy the condition:

- $11,12,13,14,15,16,17,18,19,21,22,23,24,25$

```input3
314159
2
```

```output3
937
```

```input4
9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
3
```

```output4
117879300
```