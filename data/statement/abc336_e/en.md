Score: $525$ points

## Problem Statement

The **digit sum** of a positive integer $n$ is defined as the sum of the digits in the decimal notation of $n$. For example, the digit sum of $2024$ is $2+0+2+4=8$.<br>
A positive integer $n$ is called a **good integer** when $n$ is divisible by its digit sum. For example, $2024$ is a good integer because it is divisible by its digit sum of $8$.<br>
You are given a positive integer $N$. How many good integers are less than or equal to $N$?

## Constraints

- $1 \leq N \leq 10^{14}$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the number of good integers less than or equal to $N$.

```input1
20
```

```output1
13
```

There are $13$ good integers less than or equal to $20$: $1,2,3,4,5,6,7,8,9,10,12,18,20$.

```input2
2024
```

```output2
409
```

```input3
9876543210
```

```output3
547452239
```