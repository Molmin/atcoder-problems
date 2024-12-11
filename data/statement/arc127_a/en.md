Score : $300$ points

## Problem Statement

For an integer $x$, let $f(x)$ be the number of leading ones in the decimal notation of $x$.
For example, we have $f(1)=1,f(2)=0,f(10)=1,f(11)=2,f(101)=1$.

Given an integer $N$, find $f(1)+f(2)+\cdots+f(N)$.

## Constraints

- $1 \leq N \leq 10^{15}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
11
```

```output1
4
```

We have $f(2)=f(3)=\cdots =f(9)=0$.
The answer is $f(1)+f(10)+f(11)=4$.

```input2
120
```

```output2
44
```

```input3
987654321
```

```output3
123456789
```